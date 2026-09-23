// Scan the actual DOM submitted to the snapshot matcher, not Jest's HTML-like
// serialization (which has self-closing non-void tags and valueless attributes).
const fs = require("node:fs");
const path = require("node:path");
const { toMatchSnapshot } = require("jest-snapshot");
const { axe } = require("jest-axe");
const axeCore = require("axe-core");
const colorRules = Object.fromEntries(
  axeCore
    .getRules(["cat.color"])
    .map(({ ruleId }) => [ruleId, { enabled: false }]),
);

expect.extend({
  async toMatchSnapshot(received, ...args) {
    const assertion = toMatchSnapshot.call(this, received, ...args);
    const state = expect.getState();
    const entry = {
      file: path.relative(process.cwd(), state.testPath),
      test: state.currentTestName,
      snapshotMatched: assertion.pass,
    };
    try {
      if (!received || typeof received.outerHTML !== "string") {
        throw new Error("Snapshot value is not a DOM element; not scanned.");
      }
      const results = await axe(received.outerHTML, {
        preload: false,
        runOnly: {
          type: "tag",
          values: [
            "wcag2a",
            "wcag2aa",
            "wcag21a",
            "wcag21aa",
            "wcag22aa",
            "best-practice",
          ],
        },
        rules: {
          ...colorRules,
          // These are isolated fragments, not whole pages with landmarks.
          region: { enabled: false },
        },
      });
      Object.assign(entry, {
        engine: results.testEngine,
        options: results.toolOptions,
        violations: results.violations,
        incomplete: results.incomplete,
      });
    } catch (error) {
      entry.error = error.message;
    }
    fs.appendFileSync(
      process.env.BCL_SNAPSHOT_A11Y_RESULTS,
      JSON.stringify(entry) + "\n",
    );
    return assertion;
  },
});

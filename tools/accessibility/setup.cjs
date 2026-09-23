// Audit-only wrapper: keep the existing assertions and capture their evidence.
jest.mock("jest-axe", () => {
  const actual = jest.requireActual("jest-axe");
  const fs = require("node:fs");
  const path = require("node:path");
  const colorRules = Object.fromEntries(
    require("axe-core")
      .getRules(["cat.color"])
      .map(({ ruleId }) => [ruleId, { enabled: false }]),
  );
  return {
    ...actual,
    axe: async (html, options = {}) => {
      const results = await actual.axe(html, {
        ...options,
        // jsdom has no layout or external asset rendering. Avoid preload stalls.
        preload: false,
        rules: { ...options.rules, ...colorRules },
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
      });
      const { testPath, currentTestName } = expect.getState();
      fs.appendFileSync(
        process.env.BCL_A11Y_RESULTS,
        JSON.stringify({
          file: path.relative(process.cwd(), testPath),
          test: currentTestName,
          engine: results.testEngine,
          options: results.toolOptions,
          violations: results.violations,
          incomplete: results.incomplete,
          passedRules: results.passes.map(({ id }) => id),
          inapplicableRules: results.inapplicable.map(({ id }) => id),
        }) + "\n",
      );
      return results;
    },
  };
});

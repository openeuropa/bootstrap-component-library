const fs = require("node:fs");
const path = require("node:path");
const { spawnSync } = require("node:child_process");
const { globSync } = require("glob");

const root = path.resolve(__dirname, "..");
const output = path.join(root, "build/accessibility");
fs.mkdirSync(output, { recursive: true });
const evidencePath = path.join(output, "axe-results.jsonl");
const jestPath = path.join(output, "jest-results.json");
fs.writeFileSync(evidencePath, "");
fs.rmSync(jestPath, { force: true });
const run = spawnSync(
  process.execPath,
  [
    require.resolve("jest/bin/jest"),
    "--runInBand",
    "--testPathPatterns=src/(components|compositions)/",
    "--setupFilesAfterEnv",
    path.join(root, "tools/accessibility/setup.cjs"),
    "--json",
    `--outputFile=${jestPath}`,
  ],
  {
    cwd: root,
    env: { ...process.env, BCL_A11Y_RESULTS: evidencePath },
    stdio: "inherit",
  },
);
const scans = fs
  .readFileSync(evidencePath, "utf8")
  .split("\n")
  .filter(Boolean)
  .map(JSON.parse);
const jestResults = fs.existsSync(jestPath)
  ? JSON.parse(fs.readFileSync(jestPath, "utf8"))
  : null;
const inventory = globSync("src/{components,compositions}/*/package.json", {
  cwd: root,
})
  .sort()
  .map((file) => {
    const directory = path.dirname(file);
    const files = globSync(`${directory}/**/*`, {
      cwd: root,
      nodir: true,
      ignore: "**/node_modules/**",
    });
    const results = scans.filter((scan) =>
      scan.file.startsWith(`${directory}/`),
    );
    return {
      directory,
      templates: files.filter((file) => file.endsWith(".html.twig")).length,
      storyFiles: files.filter((file) => file.endsWith(".story.js")).length,
      testFiles: files.filter((file) => file.endsWith(".test.js")).length,
      scans: results.length,
      violations: results.reduce(
        (sum, scan) => sum + scan.violations.length,
        0,
      ),
      incomplete: results.reduce(
        (sum, scan) => sum + scan.incomplete.length,
        0,
      ),
    };
  });
const report = {
  generatedAt: new Date().toISOString(),
  standard: "WCAG 2.2 A/AA plus axe best practices",
  environment:
    "jsdom; no theme CSS or component JavaScript; color checks disabled by jest-axe",
  complete: Boolean(jestResults && run.status === 0),
  exitCode: run.status,
  inventory,
  scans,
};
fs.writeFileSync(
  path.join(output, "report.json"),
  JSON.stringify(report, null, 2) + "\n",
);
const lines = [
  "# Accessibility scan",
  "",
  `Generated: ${report.generatedAt}`,
  "",
  `Target: ${report.standard}. Engine: ${scans[0]?.engine?.version || "unavailable"}.`,
  "",
  report.environment +
    ". Passing this scan does not establish WCAG conformance.",
  "",
  `Jest: ${jestResults?.numPassedTests ?? 0} passed, ${jestResults?.numFailedTests ?? 0} failed. Completed axe calls: ${scans.length}.`,
  "",
  "Counts are rule occurrences per scan, not unique defects. Zero scans means no captured coverage, not a pass.",
  "",
  "| Package | Templates | Story files | Test files | Axe scans | Violations | Incomplete |",
  "| --- | ---: | ---: | ---: | ---: | ---: | ---: |",
  ...inventory.map(
    (row) =>
      `| ${row.directory} | ${row.templates} | ${row.storyFiles} | ${row.testFiles} | ${row.scans} | ${row.violations} | ${row.incomplete} |`,
  ),
  "",
  "## Automated findings",
  "",
];
for (const scan of scans) {
  for (const violation of scan.violations) {
    lines.push(
      `### ${violation.id} (${violation.impact})`,
      "",
      `Test: ${scan.file} — ${scan.test}`,
      "",
      `${violation.help} ([rule guidance](${violation.helpUrl})). Tags: ${violation.tags.join(", ")}.`,
      "",
    );
    for (const node of violation.nodes) {
      lines.push(
        "```html",
        node.html,
        "```",
        "",
        node.failureSummary || "",
        "",
      );
    }
  }
}
lines.push(
  "## Remaining work",
  "",
  "Review incomplete results in report.json. Test all story variants and interaction states in real browsers for both themes, then perform keyboard, screen reader, zoom/reflow, contrast, focus visibility/obscuration and target-size checks. Hidden dialogs and menus are not exercised by a static scan.",
  "",
);
fs.writeFileSync(path.join(output, "report.md"), lines.join("\n"));
console.log(`Accessibility evidence: ${path.relative(root, output)}/report.md`);
if (run.error) console.error(run.error);
process.exitCode = run.status ?? 1;

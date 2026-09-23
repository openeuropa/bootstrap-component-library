const fs = require("node:fs");
const path = require("node:path");
const { spawnSync } = require("node:child_process");
const root = path.resolve(__dirname, "..");
const output = path.join(root, "build/accessibility/snapshots");
fs.mkdirSync(output, { recursive: true });
const evidence = path.join(output, "results.jsonl");
const jestOutput = path.join(output, "jest-results.json");
fs.writeFileSync(evidence, "");
fs.rmSync(jestOutput, { force: true });
const run = spawnSync(
  process.execPath,
  [
    require.resolve("jest/bin/jest"),
    "--runInBand",
    "--ci",
    "--testTimeout=30000",
    "--testPathPatterns=src/(components|compositions)/",
    "--setupFilesAfterEnv",
    path.join(root, "tools/accessibility/snapshots.cjs"),
    "--json",
    `--outputFile=${jestOutput}`,
  ],
  {
    cwd: root,
    env: { ...process.env, BCL_SNAPSHOT_A11Y_RESULTS: evidence },
    stdio: "inherit",
  },
);
const scans = fs
  .readFileSync(evidence, "utf8")
  .split("\n")
  .filter(Boolean)
  .map(JSON.parse);
const findings = new Map();
for (const scan of scans) {
  const component = path.dirname(scan.file);
  for (const rule of scan.violations || []) {
    const key = `${component}/${rule.id}`;
    if (!findings.has(key))
      findings.set(key, {
        component,
        rule: rule.id,
        impact: rule.impact,
        help: rule.help,
        url: rule.helpUrl,
        tags: rule.tags,
        variants: [],
      });
    findings.get(key).variants.push({ test: scan.test, nodes: rule.nodes });
  }
}
const errors = scans.filter((scan) => scan.error);
const report = {
  generatedAt: new Date().toISOString(),
  method:
    "Scan live DOM passed to toMatchSnapshot while checking saved snapshots; jsdom without theme CSS or component JavaScript. Color and region rules disabled.",
  jestExitCode: run.status,
  scans: scans.length,
  matched: scans.filter((scan) => scan.snapshotMatched).length,
  errors,
  findings: [...findings.values()],
  incompleteOccurrences: scans.reduce(
    (sum, scan) => sum + (scan.incomplete?.length || 0),
    0,
  ),
};
fs.writeFileSync(
  path.join(output, "report.json"),
  JSON.stringify(report, null, 2) + "\n",
);
let md = `# Snapshot accessibility results\n\n${report.method}\n\n${report.scans} snapshot variants, ${report.matched} matched, ${errors.length} scan errors; ${report.findings.length} component/rule findings. ${report.incompleteOccurrences} incomplete rule occurrences require review.\n\n`;
md +=
  "| Component/composition | Rule | Impact | Affected variants |\n| --- | --- | --- | ---: |\n";
for (const finding of findings.values())
  md += `| ${finding.component} | [${finding.rule}](${finding.url}) | ${finding.impact} | ${finding.variants.length} |\n`;
md += "\n## Evidence\n\n";
for (const finding of findings.values()) {
  md += `### ${finding.component}: ${finding.rule}\n\n${finding.help}. Tags: ${finding.tags.join(", ")}.\n\n`;
  for (const variant of finding.variants) {
    md += `- ${variant.test}\n`;
    for (const node of variant.nodes)
      md += `\n\`\`\`html\n${node.html}\n\`\`\`\n\n${node.failureSummary || ""}\n\n`;
  }
}
for (const error of errors)
  md += `\nScan error: ${error.file} — ${error.test}: ${error.error}\n`;
fs.writeFileSync(path.join(output, "report.md"), md);
console.log(
  `Snapshot scan: ${report.scans} variants, ${findings.size} component/rule findings, ${errors.length} errors. Evidence: build/accessibility/snapshots/report.md`,
);
if (run.error) console.error(run.error);
process.exitCode =
  (run.status ?? 2) ||
  (errors.length || !scans.length ? 2 : findings.size ? 1 : 0);

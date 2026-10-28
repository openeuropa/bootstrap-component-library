# Dependency security updates

The October 2026 dependency update addresses the 23 reported alerts in
`pnpm-lock.yaml`. The direct Storybook requirements now start at 10.6.2; pnpm
resolves the compatible 10.6.3 releases. Workspace overrides enforce these
transitive security versions without downgrading newer dependencies:

| Package                 | Version | Reported alerts        |
| ----------------------- | ------- | ---------------------- |
| Storybook               | 10.6.3  | #400, #402             |
| handlebars              | 4.7.10  | #395, #396, #397       |
| shell-quote             | 1.11.0  | #394                   |
| http-cache-semantics    | 4.3.0   | #390                   |
| follow-redirects        | 1.16.1  | #398, #399             |
| undici                  | 6.29.1  | #410, #412, #413, #414 |
| fast-uri                | 3.1.9   | #404, #405, #406, #407 |
| postcss-selector-parser | 7.1.6   | #411                   |
| smol-toml               | 1.9.1   | #392                   |
| serialize-javascript    | 7.1.3   | #408                   |

The existing ip-address override also moves to 10.7.4 for
GHSA-rxp7-6hxx-x8q5, found by the current audit. Only the exact security release
`serialize-javascript@7.1.3` is added to the seven-day release-age exceptions.
Lifecycle scripts and the other installation safeguards remain configured.

## Packages without published fixes

The registry has no extract-zip 2.0.2 or deepmerge 4.3.2 release. The workspace
therefore applies committed pnpm patches to the installed packages:

- `extract-zip@2.0.1.patch` addresses #359 and #367
  ([GHSA-jmr9-qjv8-65gv](https://github.com/advisories/GHSA-jmr9-qjv8-65gv),
  [GHSA-7pqw-9j4j-h8q3](https://github.com/advisories/GHSA-7pqw-9j4j-h8q3)).
  Symlink targets must stay within the extraction root, including existing
  ancestors. Regular files cannot overwrite symlinks. Internal relative links,
  including links to files later in the archive, remain supported.
- `deepmerge@4.3.1.patch` addresses #415
  ([GHSA-gcqx-w48m-w2h4](https://github.com/advisories/GHSA-gcqx-w48m-w2h4)).
  Both target and source copies reject `__proto__` keys, including nested
  merges into null or primitive placeholders. The patch covers the source,
  CommonJS bundle and UMD bundle.

Version-based scanners, including Dependabot and `pnpm audit`, still report the
three patched findings because the package versions remain unchanged. No new
advisory suppression is added; the previous extract-zip suppression is removed.
Replace the patches with upstream fixed releases when available. Workspace
patches apply to this repository's pnpm installation; they do not propagate to
consumers of independently published workspace packages.

The audit also reports an additional, unlisted Zod finding,
[GHSA-mrhx-c7xc-m3w5](https://github.com/advisories/GHSA-mrhx-c7xc-m3w5), through
`estimo > puppeteer-core > chromium-bidi > zod@3.25.76`. Its published fix starts
at Zod 4.6.6. It remains open: overriding a dependency that requires Zod 3 with
Zod 4 would require a separate compatibility change to the browser tooling.

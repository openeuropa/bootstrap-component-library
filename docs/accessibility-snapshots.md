# Snapshot accessibility findings

Scanned on 23 September 2026: **466/466 snapshot variants matched and scanned**, across 67 passing test suites (566 tests). **Three WCAG-tagged findings and one best-practice advisory**, with zero scan errors.

| Component / composition | Affected snapshot variant            | Finding                                                                              | Classification                                                                            |
| ----------------------- | ------------------------------------ | ------------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------- |
| Pagination              | Custom icon for next                 | Icon-only next link has no accessible name.                                          | WCAG 2.4.4 / 4.1.2; serious                                                               |
| Pagination v2           | Custom icon for next                 | Icon-only next link has no accessible name.                                          | WCAG 2.4.4 / 4.1.2; serious                                                               |
| Group                   | Listing Content                      | Offcanvas close button renders `aria-label=""` and has no text.                      | WCAG 4.1.2; critical                                                                      |
| Featured media          | Featured item with description title | The fixture explicitly selects `description_title_tag: h6`, skipping heading levels. | Best-practice advisory; moderate; fixture/context issue, not automatically a WCAG failure |

Severity is reported by axe. These are additional findings from snapshot variants, beyond the earlier source review.

## Reproduce

```sh
pnpm run audit:a11y:snapshots
```

The command currently exits with status 1 because it detects accessibility findings, even though the snapshot assertions pass. It does not update saved snapshots or fix components.

The scanner re-runs the snapshot tests, checks each result against its saved snapshot, and scans the actual DOM passed to the snapshot matcher. It does not parse Jest’s HTML-like snapshot serialization, whose self-closing non-void tags and attribute formatting can distort an HTML parse.

Evidence and exact element markup are in `build/accessibility/snapshots/report.md`; rule tags, selectors, variants and node details are in `report.json` and `results.jsonl` in that directory.

## Limits

There are **129 incomplete rule occurrences** requiring review; these are not counted as failures or passes. The scan uses axe-core 4.10.2 in jsdom, without theme CSS or initialized component JavaScript. Color checks are disabled, and the `region` landmark rule is disabled because the inputs include isolated fragments. Hidden content is not automatically opened. Existing regular axe tests also ran and emitted asset-preload timeout warnings; snapshot scans explicitly disable preloading and reported no scan errors.

Keyboard interaction, focus, contrast, reflow and screen-reader behavior remain untested by this run. A snapshot match only confirms that the rendered output matches the saved expectation; it does not establish accessibility.

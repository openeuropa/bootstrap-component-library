# Accessibility audit baseline

Target: **WCAG 2.2 Level A and AA**, checked against W3C on 23 September 2026. [WCAG 2.2](https://www.w3.org/TR/WCAG22/) is the latest published Recommendation; [WCAG 3.0](https://www.w3.org/TR/wcag-3.0/) remains a Working Draft. Axe best-practice findings are tracked separately from WCAG requirements through their rule tags.

This is an initial automated baseline and targeted source review, not a completed conformance assessment. No component is certified accessible by this report. Remediation has not been applied.

Follow-up: [all 466 snapshot variants were scanned](accessibility-snapshots.md), finding three accessible-name errors and one heading-order advisory. The baseline counts below describe the earlier default-fixture scan.

## Repeat the scan

```sh
pnpm run audit:a11y
```

The runner inventories every package under `src/components` and `src/compositions`, runs their existing Jest tests, and captures each existing axe invocation with explicit WCAG 2.0/2.1/2.2 A/AA and best-practice tags. It returns the Jest exit status. Evidence is written to ignored build output:

- `build/accessibility/report.md`: coverage matrix and automated violations.
- `build/accessibility/report.json`: inventory, per-scan violations, incomplete results, passed/inapplicable rules, actual engine version and options.
- `build/accessibility/axe-results.jsonl`: raw scan records, retained even if the suite fails.
- `build/accessibility/jest-results.json`: assertions and failures, including rendering failures.

The audit wrapper only applies to this command. It disables asset preloading and color rules explicitly because jsdom cannot perform those visual checks. It does not change component templates or the regular test configuration. See the [axe API documentation](https://github.com/dequelabs/axe-core/blob/develop/doc/API.md) for tag definitions and the need to expose hidden content before scanning it.

## Confirmed source/rendering findings

Priority reflects suggested remediation order, not an axe severity rating. WCAG mappings identify the affected requirement; context and interactive verification are still needed to determine page conformance.

| ID      | Priority | Component                    | Evidence and reproduction                                                                                                                                                                                                                                                                                                           | WCAG                                                                                             | Suggested remediation                                                                                                                           |
| ------- | -------- | ---------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------- |
| A11Y-01 | High     | Table                        | `src/components/bcl-table/table.html.twig:115` renders `table_head.cells` as `<thead><tr><td>Name</td></tr></thead>`. Render a header cell `Name` and data cell `Ada`; no header cell is exposed.                                                                                                                                   | 1.3.1 Info and Relationships                                                                     | Render column headers as `<th scope="col">`; support row headers and complex associations where needed.                                         |
| A11Y-02 | High     | Modal                        | `src/components/bcl-modal/modal.html.twig:51` unconditionally sets `aria-label` to the ID plus `Label`. With `id: example` and heading `<h2 id="exampleLabel">Account settings</h2>`, the name is literally `exampleLabel`. It also overwrites an explicitly supplied `aria-label`. The existing scan sees an `aria-hidden` dialog. | 4.1.2 Name, Role, Value; 2.4.6 Headings and Labels                                               | Associate the visible title through `aria-labelledby`, or preserve a meaningful supplied name; test the open dialog.                            |
| A11Y-03 | High     | Carousel                     | `src/components/bcl-carousel/carousel.html.twig:42` defaults both control labels to empty while controls default to enabled. Render with `id: slides` and an image item, omitting `prev_label`/`next_label`: both buttons contain only empty icon spans.                                                                            | 4.1.2 Name, Role, Value                                                                          | Supply localizable fallback names or require and validate labels; scan this input variant.                                                      |
| A11Y-04 | High     | Carousel                     | `src/components/bcl-carousel/carousel.html.twig:36` defaults autoplay to true and emits no pause/stop control. Bootstrap's carousel implementation pauses on hover, but exposes no keyboard pause control here.                                                                                                                     | 2.2.2 Pause, Stop, Hide, when automatic movement lasts over five seconds alongside other content | Default autoplay off or provide a persistent keyboard-operable pause/resume control; verify focus and hover behavior in a browser.              |
| A11Y-05 | High     | Form input, textarea, select | Each template renders `invalid_feedback` as an anonymous sibling `<div class="invalid-feedback">`. `invalid: true` only adds a class; it does not set `aria-invalid` or associate the error. A render of select with `invalid: true` and feedback confirms this output.                                                             | 1.3.1 Info and Relationships; review 3.3.1 Error Identification and 4.1.2 in the validation flow | Give errors IDs, associate them with their fields, expose invalid state after validation, preserve helper descriptions, and test announcements. |
| A11Y-06 | Medium   | Select                       | `src/components/bcl-select/select.html.twig:182` assigns `helper_text_id` to the help element, but never links it from the select. With `helper_text_id: choice-help`, the rendered `<select>` has no `aria-describedby`.                                                                                                           | 1.3.1 Info and Relationships                                                                     | Associate helper text and preserve any existing description IDs; verify enhanced Slim Select behavior too.                                      |

The modal, table, select and carousel findings above were reproduced through the repository's Twing rendering environment. Form-input and textarea error associations were inspected in source. Autoplay behavior still needs browser verification. Caller-provided attributes can work around some gaps, but the documented component parameters do not do so automatically.

## Coverage limits and required follow-up

Existing tests render static Twig fixtures in jsdom without theme CSS or initialized component JavaScript. They often scan only a default fixture; snapshot variants are not automatically axe-scanned. Some fixtures are wrapped in an artificial `main` landmark. A passing result therefore does not establish full-page landmark correctness, visual accessibility, or interaction behavior. Test fixtures can also mutate shared data before an axe call; migrate toward isolated fixtures when adding variant coverage.

Run all actual Storybook variants in **both default and Joinup themes**, and record each story/state/viewport as passed, failed, incomplete, or not tested. The initial scope below remains open:

| Area                                                                              | Required checks                                                                                                                                                                                                                                     |
| --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| All rendered components and compositions                                          | Accessible names, meaningful images, heading structure, language, meaningful sequence, links and repeated IDs in composed pages.                                                                                                                    |
| Theme/visual states                                                               | Text contrast (1.4.3), non-text contrast (1.4.11), 200% text resizing (1.4.4), 320 CSS-pixel reflow (1.4.10), text spacing (1.4.12), visible focus (2.4.7), focus not obscured (2.4.11). Check hover/focus/selected/error states and forced colors. |
| Buttons, links, pagination and close controls                                     | Keyboard operation and focus order; WCAG 2.2 minimum target size (2.5.8), including spacing exceptions rather than a blanket 24-pixel rule.                                                                                                         |
| Accordion, dropdown, navigation, mega-menu, language switcher, in-page navigation | Tab/Shift+Tab and expected arrow-key behavior, expanded state, Escape dismissal, focus return, hover/focus content (1.4.13), sticky elements obscuring focus.                                                                                       |
| Modal, offcanvas, gallery                                                         | Open-state scans, meaningful dialog names, focus entry/containment/return, Escape, background inaccessibility and scroll behavior.                                                                                                                  |
| Forms, search, subscription, contact and enhanced selects                         | Labels/instructions, error association and announcements, required/disabled/readonly states, keyboard selection, autocomplete (1.3.5) where applicable, redundant entry (3.3.7) across flows.                                                       |
| Carousel, media, progress, spinner, alerts and toasts                             | Pause controls, alternatives to dragging (2.5.7), captions/audio description where required, status announcements (4.1.3), timing and dynamic updates.                                                                                              |
| Full pages and application integrations                                           | Bypass blocks, page titles, landmarks, consistent help (3.2.6), accessible authentication (3.3.8) if authentication exists. These cannot be established by isolated component tests.                                                                |

Manually verify representative flows with a screen reader and keyboard, including VoiceOver/Safari and NVDA with Firefox or Chrome. Record browser, assistive technology, theme, viewport, reproduction steps, expected/actual result and applicable success criterion. Review every axe `incomplete` result; do not count it as a pass.

## Baseline results and package inventory

Scan completed on 23 September 2026 using axe-core 4.10.2. 67 suites, 566 tests and 466 snapshots passed. The 94 axe calls across 66/73 packages reported 0 violations and 83 incomplete rule occurrences. These are fixture-level results, not component conformance results.

Seven packages have no direct captured axe calls: attributes, base-templates, color-scheme, colors, icons-list, multilingual and twig-templates. Some are supporting or aggregate packages, so establish their applicable coverage through consuming pages rather than assuming every package needs its own rendered fixture.

| Package                             | Template files | Story files | Axe scans | Incomplete rule occurrences |
| ----------------------------------- | -------------: | ----------: | --------: | --------------------------: |
| components/bcl-accordion            |              1 |           1 |         1 |                           0 |
| components/bcl-alert                |              1 |           2 |         1 |                           0 |
| components/bcl-badge                |              1 |           2 |         1 |                           0 |
| components/bcl-blockquote           |              1 |           2 |         1 |                           0 |
| components/bcl-breadcrumb           |              1 |           1 |         1 |                           0 |
| components/bcl-button-group         |              1 |           1 |         1 |                           0 |
| components/bcl-button               |              1 |           1 |         2 |                           0 |
| components/bcl-card-layout          |              1 |           1 |         1 |                           0 |
| components/bcl-card                 |              1 |           1 |         1 |                           0 |
| components/bcl-carousel             |              1 |           1 |         1 |                           0 |
| components/bcl-dropdown             |              1 |           1 |         1 |                           0 |
| components/bcl-form-input           |              1 |           1 |         1 |                           0 |
| components/bcl-form                 |              1 |           1 |         3 |                           0 |
| components/bcl-heading              |              1 |           1 |         1 |                           0 |
| components/bcl-icon                 |              1 |           1 |         1 |                           0 |
| components/bcl-link                 |              1 |           1 |         1 |                           0 |
| components/bcl-list-group           |              1 |           1 |         1 |                           0 |
| components/bcl-modal                |              1 |           1 |         1 |                           1 |
| components/bcl-navbar               |              1 |           1 |         1 |                           1 |
| components/bcl-navigation           |              1 |           1 |         1 |                           0 |
| components/bcl-offcanvas            |              1 |           1 |         1 |                           1 |
| components/bcl-pagination-v2        |              2 |           1 |         1 |                           0 |
| components/bcl-pagination           |              2 |           1 |         1 |                           0 |
| components/bcl-placeholder          |              1 |           1 |         1 |                           0 |
| components/bcl-progress             |              1 |           1 |         1 |                           0 |
| components/bcl-select               |              1 |           1 |         2 |                           0 |
| components/bcl-spinner              |              1 |           1 |         1 |                           0 |
| components/bcl-table                |              1 |           1 |         1 |                           0 |
| components/bcl-textarea             |              1 |           1 |         1 |                           0 |
| components/bcl-toasts               |              1 |           1 |         1 |                           0 |
| components/bcl-twig-templates       |             84 |           0 |         0 |                           0 |
| compositions/bcl-attributes         |              1 |           0 |         0 |                           0 |
| compositions/bcl-banner             |              1 |           1 |         2 |                           0 |
| compositions/bcl-base-templates     |              3 |           0 |         0 |                           0 |
| compositions/bcl-color-scheme       |              0 |           1 |         0 |                           0 |
| compositions/bcl-colors             |              1 |           1 |         0 |                           0 |
| compositions/bcl-contact-form       |              1 |           1 |         1 |                           2 |
| compositions/bcl-content-banner     |              1 |           2 |         1 |                           0 |
| compositions/bcl-date-block         |              1 |           2 |         1 |                           0 |
| compositions/bcl-description-list   |              3 |           1 |         2 |                           0 |
| compositions/bcl-event              |              1 |           1 |         2 |                           5 |
| compositions/bcl-fact-figures       |              1 |           1 |         1 |                           0 |
| compositions/bcl-featured-media     |              1 |           1 |         1 |                           1 |
| compositions/bcl-file               |              2 |           1 |         2 |                           0 |
| compositions/bcl-footer             |              1 |           1 |         2 |                           0 |
| compositions/bcl-gallery            |              2 |           2 |         1 |                           1 |
| compositions/bcl-glossary           |              2 |           1 |         2 |                           5 |
| compositions/bcl-group              |              2 |           1 |         3 |                           8 |
| compositions/bcl-header             |              1 |           1 |         4 |                           6 |
| compositions/bcl-icons-list         |              1 |           1 |         0 |                           0 |
| compositions/bcl-inpage-navigation  |              1 |           1 |         1 |                           0 |
| compositions/bcl-landing-page       |              1 |           1 |         1 |                           3 |
| compositions/bcl-language-list      |              3 |           1 |         2 |                           1 |
| compositions/bcl-language-switcher  |              1 |           1 |         1 |                           0 |
| compositions/bcl-links-block        |              1 |           2 |         1 |                           0 |
| compositions/bcl-listing            |              1 |           1 |         3 |                           0 |
| compositions/bcl-mega-menu          |              3 |           1 |         1 |                           1 |
| compositions/bcl-multilingual       |              0 |           1 |         0 |                           0 |
| compositions/bcl-news               |              0 |           1 |         2 |                           5 |
| compositions/bcl-page               |              1 |           1 |         1 |                           3 |
| compositions/bcl-person             |              1 |           1 |         2 |                           6 |
| compositions/bcl-procurement        |              1 |           1 |         2 |                           5 |
| compositions/bcl-project-status     |              2 |           1 |         2 |                           0 |
| compositions/bcl-project            |              2 |           1 |         2 |                           5 |
| compositions/bcl-publication        |              1 |           1 |         2 |                           5 |
| compositions/bcl-recent-activities  |              1 |           1 |         1 |                           0 |
| compositions/bcl-search-form        |              1 |           1 |         1 |                           0 |
| compositions/bcl-search             |              1 |           1 |         1 |                           3 |
| compositions/bcl-subscription-block |              1 |           1 |         1 |                           0 |
| compositions/bcl-subscription       |              2 |           1 |         1 |                           2 |
| compositions/bcl-timeline           |              2 |           1 |         1 |                           0 |
| compositions/bcl-user               |              3 |           1 |         4 |                           8 |
| compositions/bcl-vacancy            |              1 |           1 |         2 |                           5 |

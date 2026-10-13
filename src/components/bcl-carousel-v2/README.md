# Carousel V2

Include `@oe-bcl/bcl-carousel-v2/carousel.html.twig` and load the BCL default or
Joinup theme CSS and JavaScript. Supply a unique `id`, an accessible `label`,
`icon_path`, and `items`. The Twig parameter comment documents the full API.

- `layout: split` (default): content beside the image from `lg` (992px), stacked
  below the image on smaller screens.
- `layout: full_width`: an image spanning the carousel, with a content card
  overlay from `lg`, stacked below the image on smaller screens. Desktop images
  are capped at 28rem (448px) high and cropped without stretching.
- Other images retain their natural aspect ratio without cropping. Different ratios
  and content lengths can change slide height. Supply consistent image ratios
  when a consistent height is desired; include intrinsic dimensions and
  responsive `srcset`/`sizes` or a rendered `picture` in each `image` value.
- `autoplay` defaults to true, `interval` to 10000 milliseconds, and
  `active_item` to 1. A positive per-item `interval` overrides the default.
  Intervals have an 8000ms minimum. BCL extends each slide's interval to at least
  `3000 + 400 × word count` milliseconds, counting its rendered title, description
  and link text.
- Set `title_tag` from the page's heading hierarchy (for example, `h4` under an
  `h3` section). Expose this as a heading level field in the integrating backend
  if page context is unavailable. The default is `p`; heading level does not
  change the h1-sized display style (`bcl-carousel-v2__title`).
- Zero items render nothing. One item renders without controls or rotation.

Bootstrap supplies previous/next, swipe, keyboard support and transitions. The
V2 controller adds rotation intent, counter updates and accessibility. Mouse hover
and focus inside the carousel do not pause rotation. Keep `data-bs-pause="false"`
and `data-bcl-pause-on-hover="false"`. An explicit Pause stops rotation until Play
is selected and preserves elapsed slide time. The Play/Pause control retains
focus and announces its next action. Reduced motion starts paused and disables
transitions; the user can explicitly choose Play. A subsequent change to reduced
motion stops it.

A decorative 3px progress bar in blue (`#253EBE`) sits above the image and spans
its column. It remains visible and freezes on Pause; Play resumes both the bar
and the remaining slide countdown. Every slide change starts progress afresh.
Its animation uses the same interval as Bootstrap's rotation timer; there is no
separate timer for progress. Reduced motion hides the indicator, even after an
explicit Play. It is hidden from assistive technology and cannot receive focus.

All control labels, `carousel_role_label`, `slide_role_label`, and the
`%current% of %total%` slide label are configurable
for translation. Inactive slides are inert and hidden from assistive technology;
the slide container is live only while rotation is paused. Without JavaScript,
all slides remain readable and the controls stay hidden.

Initialization runs on DOMContentLoaded/load. For dynamically inserted markup:

```js
bootstrap.CarouselV2.init(container);
```

Initialization is idempotent. Before removing a carousel, clean up its timers
and listeners with `bootstrap.CarouselV2.getOrCreateInstance(element).dispose()`.
Calling `init()` also disposes instances whose elements have been removed.

Do not initialize V2 separately with Bootstrap's constructor or `data-bs-ride`:
the controller extends Bootstrap with auto-resume disabled, so an
explicit user pause survives navigation and hover. V1 and Gallery keep their
existing behavior. If a Bootstrap instance already exists on a V2 element,
BCL replaces it during initialization so progress and timing remain coordinated.

Storybook's dedicated controls test stories exercise navigation, rotation controls
and counter updates using play functions; normal layout previews autoplay.
Jest covers markup, accessibility,
Bootstrap integration, timer behavior, reduced motion and lifecycle cleanup.

To run the stories tagged `carousel-v2-test` locally, start
`pnpm storybook:default`, then run `pnpm test:storybook`.
Install Chromium once with `pnpm exec playwright install chromium`.

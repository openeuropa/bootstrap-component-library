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
- `autoplay` defaults to false, `interval` to 5000 milliseconds, and
  `active_item` to 1. A positive per-item `interval` overrides the default.
- Zero items render nothing. One item renders without controls or rotation.

Bootstrap supplies previous/next, swipe, keyboard support and transitions. The
V2 controller adds rotation intent, counter updates and accessibility. Hover
temporarily suspends rotation. Focus on slide content or navigation stops it
until Play is selected. The Play/Pause control retains focus and announces its
next action. Reduced motion starts paused and disables transitions; the user
can explicitly choose Play. A subsequent change to reduced motion stops it.

All control labels and the `%current% of %total%` slide label are configurable
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
the controller creates the Bootstrap instance with auto-resume disabled, so an
explicit user pause survives navigation and hover. V1 and Gallery keep their
existing behavior.

Storybook's dedicated controls test stories exercise navigation, rotation controls
and counter updates using play functions; the normal layout previews stay still.
Jest covers markup, accessibility,
Bootstrap integration, timer behavior, reduced motion and lifecycle cleanup.

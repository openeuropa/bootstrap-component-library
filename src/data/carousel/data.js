module.exports = {
  id: "carouselExample",
  with_controls: true,
  with_indicators: true,
  prev_label: "Previous",
  next_label: "Next",
  items: [
    {
      classes: "item_extra_class",
      caption: `<p>Some representative placeholder content for the first slide.</p>`,
      caption_title: "First slide label",
      image: `<img
                src="https://picsum.photos/800/400?random=1"
                alt="First slide"
                class="d-block w-100"
              />`,
      link: {
        label: "Link",
        icon_position: "before",
        icon: {
          name: "link",
          path: "/icons.svg",
        },
      },
    },
    {
      image: `<img
                 src="https://picsum.photos/800/400?random=2"
                 alt="Second slide"
                 class="d-block w-100"
               />`,
    },
    {
      classes: "item_extra_class",
      caption_title: "Third slide label",
      caption: `<p>Some representative placeholder content for the third slide.<`,
      image: `<img
                src="https://picsum.photos/800/400?random=3"
                class="d-block w-100"
              />`,
    },
    {
      classes: "item_extra_class",
      image: `<img
                src="https://picsum.photos/800/400?random=4"
                alt="First slide"
                class="d-block w-100"
              />`,
      link: {
        label: "Link",
        icon_position: "before",
        icon: {
          name: "link",
          path: "/icons.svg",
        },
      },
    },
  ],
};

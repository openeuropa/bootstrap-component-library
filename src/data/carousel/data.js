module.exports = {
  id: "carouselExample",
  with_controls: true,
  with_indicators: true,
  prev_label: "Previous",
  next_label: "Next",
  items: [
    {
      classes: "item_extra_class",
      caption: `<h5>First slide label</h5><p>Some representative placeholder content for the first slide.</p>`,
      caption_classes: "d-none d-md-block",
      image: {
        src: "https://picsum.photos/800/400?random=1",
        alt: "First slide",
      },
    },
    {
      image: {
        src: "https://picsum.photos/800/400?random=2",
        alt: "Second slide",
      },
    },
    {
      classes: "item_extra_class",
      caption: `<h5>Third slide label</h5><p>Some representative placeholder content for the third slide.</p>`,
      caption_classes: "d-none d-md-block",
      image: {
        src: "https://picsum.photos/800/400?random=3",
      },
    },
  ],
};

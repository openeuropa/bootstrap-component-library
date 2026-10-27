export default {
  id: "carousel-v2-example",
  label: "Featured priorities",
  icon_path: "/icons.svg",
  items: [
    {
      caption_title: "Explore our coastlines",
      caption:
        "<p>Discover the landscapes and communities shaping our shared environment.</p>",
      image:
        '<img src="https://picsum.photos/id/1018/1200/600" width="1200" height="600" alt="Green coastal cliffs with a winding path" decoding="async">',
      copyright: "© Coastal Observatory (demo)",
      link: { label: "Discover more", path: "#coastlines" },
    },
    {
      caption_title: "Protecting nature together",
      caption:
        "<p>Learn how local projects help protect biodiversity for future generations.</p>",
      image:
        '<img src="https://picsum.photos/id/1015/1200/600" width="1200" height="600" alt="River winding through a mountain valley" loading="lazy" decoding="async">',
      copyright: "© Nature Conservation Network (demo)",
      link: { label: "Explore projects", path: "#projects" },
    },
    {
      caption_title: "A sustainable future",
      caption:
        "<p>Find out how research supports more resilient communities.</p>",
      image:
        '<img src="https://picsum.photos/id/1016/1200/600" width="1200" height="600" alt="Rugged mountains under a clear sky" loading="lazy" decoding="async">',
      copyright: "© Sustainable Futures Institute (demo)",
      link: { label: "Read more", path: "#research" },
    },
  ],
};

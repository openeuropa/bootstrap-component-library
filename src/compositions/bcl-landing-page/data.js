const drupalAttribute = require("drupal-attribute");

module.exports = {
  data: {
    main_banner: {
      title: "UCPKN",
      description: "Innovation, economy, environment and geopolitics",
      link: {
        label: "Subscribe",
        path: "/example.html",
        icon: {
          name: "chevron-right",
          path: "boostrap-icons.svg",
          size: "fluid",
        },
        attributes: new drupalAttribute().addClass(["btn", "btn-primary"]),
      },
      image: "https://picsum.photos/id/154/1200/800",
      attributes: new drupalAttribute().addClass([
        "bg-light",
        "text-dark",
        "text-center",
      ]),
    },
    featured_section: {
      title: "Lorem ipsum dolor sit amet.",
      content:
        "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p><a href='#'>Read more</a>",
      featured_media: {
        content: "Media description text goes here.",
        content_classes: "bg-light p-3",
        embedded_media:
          '<iframe title="New digital strategy" width="350" height="197" src="https://www.youtube.com/embed/fgi-GSCB6ho" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>',
        attributes: new drupalAttribute().setAttribute(
          "src",
          "https://www.youtube.com/embed/VFYlYeFAEH4"
        ),
      },
    },
  },
};

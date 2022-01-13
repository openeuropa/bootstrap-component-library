const drupalAttribute = require("drupal-attribute");

module.exports = {
  landing: true,
  banner: {
    title: "Demo banner title",
    content_classes: "border-secondary",
    image: "https://picsum.photos/id/154/1200/800",
    full_width: true,
    attributes: new drupalAttribute().addClass([
      "bg-light",
      "text-dark",
      "text-center",
    ]),
  },
  featured_section: {
    title: "Lorem ipsum dolor sit amet.",
    content:
      "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p><a href='#' class='d-block mb-4'>Read more</a>",
    featured_media: {
      content: "Media description text goes here.",
      content_classes: "bg-light p-3",
      embedded_media:
        '<iframe title="New digital strategy first" width="350" height="197" src="https://www.youtube.com/embed/fgi-GSCB6ho" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>',
      attributes: new drupalAttribute().setAttribute(
        "src",
        "https://www.youtube.com/embed/VFYlYeFAEH4"
      ),
    },
  },
  inpage_banner: {
    title: "EU Budget for the future",
    description: "Innovation, economy, environment and geopolitics",
    link: {
      label: "Subscribe",
      path: "/example.html",
      icon: {
        name: "chevron-right",
        size: "fluid",
        path: "/icons.svg",
      },
      attributes: new drupalAttribute().addClass(["btn", "btn-primary"]),
    },
    image: "https://picsum.photos/id/154/1200/800",
    shade: true,
    attributes: new drupalAttribute().addClass([
      "bg-light",
      "text-center",
      "mb-4-5",
    ]),
  },
  listing_section: {
    variant: "highlight-3-col",
    title: "Listing item block title",
    title_tag: "h2",
    link: {
      path: "/example",
      label: "Listing item block CTA",
      icon: {
        path: "/icons.svg",
      },
    },
    items: [
      {
        title: {
          content:
            '<a href="/example" class="text-underline-hover">Listing item title</a>',
        },
        text: {
          content:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ut ex tristique.",
          classes: "mb-2",
        },
        image: {
          path: "https://picsum.photos/seed/1002/600/400",
          alt: "alt img",
          position: "top",
        },
      },
      {
        title: {
          content:
            '<a href="/example" class="text-underline-hover">Listing item title</a>',
        },
        text: {
          content:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ut ex tristique.",
          classes: "mb-2",
        },
        image: {
          path: "https://picsum.photos/seed/1003/600/400",
          alt: "alt img",
          position: "top",
        },
      },
      {
        title: {
          content:
            '<a href="/example" class="text-underline-hover">Listing item title</a>',
        },
        text: {
          content:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ut ex tristique.",
          classes: "mb-2",
        },
        image: {
          path: "https://picsum.photos/seed/1004/600/400",
          alt: "alt img",
          position: "top",
        },
      },
    ],
  },
  activity_featured: {
    title: "Activities",
    content:
      "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p><a href='#' class='d-block mb-4'>Read more</a>",
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
  activity_listing: {
    variant: "highlight-3-col",
    title: "What are those activities",
    title_tag: "h2",
    link: {
      path: "/example",
      label: "Listing item block CTA",
      icon: {
        path: "/icons.svg",
      },
    },
    items: [
      {
        title: {
          content:
            '<a href="/example" class="text-underline-hover">Capacity development</a>',
        },
        text: {
          content:
            "<ul><li>UCPM Training Programme</li><li>Exercises</li><li>Exchange of experts</li><li>UCPM Prevention and preparedness projects</li></ul>",
          classes: "mb-2",
        },
        image: {
          path: "https://picsum.photos/seed/1005/600/400",
          alt: "alt img",
          position: "top",
        },
      },
      {
        title: {
          content:
            '<a href="/example" class="text-underline-hover">Science, Research & innovation</a>',
        },
        text: {
          content:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ut ex tristique. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ut ex tristique.",
          classes: "mb-2",
        },
        image: {
          path: "https://picsum.photos/seed/1006/600/400",
          alt: "alt img",
          position: "top",
        },
      },
      {
        title: {
          content:
            '<a href="/example" class="text-underline-hover">KN Horizontal activities</a>',
        },
        text: {
          content:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ut ex tristique.",
          classes: "mb-2",
        },
        image: {
          path: "https://picsum.photos/seed/1007/600/400",
          alt: "alt img",
          position: "top",
        },
      },
    ],
  },
};

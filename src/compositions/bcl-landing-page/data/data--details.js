const drupalAttribute = require("drupal-attribute");
const { getDummyText } = require("@openeuropa/bcl-data-utils");

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
    title: "Featured title",
    content: getDummyText(8),
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
        title: '<a href="/example" class="standalone">Listing item title</a>',
        text: {
          content: getDummyText(2),
          classes: "mb-2",
        },
        image: {
          path: "https://picsum.photos/seed/1002/600/400",
          alt: "alt img",
          position: "top",
        },
      },
      {
        title: '<a href="/example" class="standalone">Listing item title</a>',
        text: {
          content: getDummyText(3),
          classes: "mb-2",
        },
        image: {
          path: "https://picsum.photos/seed/1003/600/400",
          alt: "alt img",
          position: "top",
        },
      },
      {
        title: '<a href="/example" class="standalone">Listing item title</a>',
        text: {
          content: getDummyText(),
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
    content: getDummyText(12),
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
        title: '<a href="/example" class="standalone">Capacity development</a>',
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
        title:
          '<a href="/example" class="standalone">Science, Research & innovation</a>',
        text: {
          content: getDummyText(),
          classes: "mb-2",
        },
        image: {
          path: "https://picsum.photos/seed/1006/600/400",
          alt: "alt img",
          position: "top",
        },
      },
      {
        title:
          '<a href="/example" class="standalone">KN Horizontal activities</a>',
        text: {
          content: getDummyText(2),
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

const drupalAttribute = require("drupal-attribute");

module.exports = {
  landing: true,
  banner: {
    image: {
      path: "https://picsum.photos/seed/1002/1100/255",
      alt: "alt img",
      class: "d-none d-md-block w-100",
    },
    title: "Group Name",
    actions: [
      {
        type: "link",
        label: "Leave group",
        path: "/example.html",
        attributes: new drupalAttribute().addClass([
          "d-md-inline-block",
          "me-2",
          "p-2",
          "d-none",
        ]),
      },
      {
        type: "dropdown",
        id: "dropdown-content",
        remove_wrapper: true,
        trigger: {
          label: "Create content",
          path: "#",
          attributes: new drupalAttribute().addClass([
            "d-inline-block",
            "mt-3",
            "mt-md-0",
            "mb-4",
            "mb-md-0",
          ]),
        },
        items: [
          {
            label: "I'm a link",
            path: "#",
          },
          {
            label: "I'm a button",
            button: true,
          },
          {
            divider: true,
          },
          {
            label: "I'm a disabled button",
            button: true,
            disabled: true,
          },
          {
            label: "I'm a active button",
            button: true,
            active: true,
          },
        ],
      },
    ],
    content:
      "<h2 class='mb-0'>Group name</h2><div><a href='#'>Leave group</a><button></div>",
    extra_classes_body: "p-3-5",
    attributes: new drupalAttribute().addClass("border-0"),
  },
  navigation: {
    nav: true,
    tabs: true,
    attributes: new drupalAttribute().addClass([
      "bcl__nav",
      "bg-gray",
      "n-mx-container",
    ]),
    items: [
      {
        label: "Home",
        path: "/example.html",
        active: true,
      },
      {
        label: "Members",
        path: "/example.html",
      },
      {
        label: "Content",
        path: "/example.html",
      },
      {
        id: "dropdown-1",
        link: true,
        dropdown: true,
        trigger: {
          label: "Links",
          path: "#",
          attributes: new drupalAttribute().addClass("nav-link"),
        },
        items: [
          {
            label: "I'm a link",
            path: "/example.html",
          },
          {
            label: "I'm a button",
            button: true,
          },
          {
            divider: true,
          },
          {
            label: "I'm a disabled button",
            button: true,
            disabled: true,
          },
          {
            label: "I'm a active button",
            button: true,
            active: true,
          },
        ],
      },
    ],
  },
  banner_description: {
    collapse_trigger: {
      label:
        "<span class='text-not-collapsed'>See group detail</span><span class='text-collapsed'>Hide group detail</span>",
      path: "#banner-description",
      icon_position: "after",
      icon: {
        name: "caret-down-fill",
        path: "/icons.svg",
        size: "xs",
      },
      attributes: new drupalAttribute()
        .addClass(["w-100", "text-center", "py-4", " d-block", "d-md-none"])
        .setAttribute("aria-controls", "banner-description")
        .setAttribute("aria-expanded", "false")
        .setAttribute("data-bs-toggle", "collapse")
        .setAttribute("role", "button"),
    },
    metas: [
      {
        label: "Public group",
        icon: {
          name: "key-fill",
          path: "/icons.svg",
          size: "xs",
          attributes: new drupalAttribute().addClass([
            "me-2",
            "align-top",
            "mt-1",
          ]),
        },
      },
      {
        label: "22 Members",
        icon: {
          name: "people-fill",
          path: "/icons.svg",
          size: "xs",
          attributes: new drupalAttribute().addClass([
            "me-2",
            "align-top",
            "mt-1",
          ]),
        },
      },
    ],
    content:
      "<p class='mt-3'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse volutpat ultricies massa, a dapibus libero porta nec. Sed facilisis dictum vestibulum. Fusce commodo hendrerit diam, pretium tempus leo varius sit amet. Etiam interdum, orci at sagittis luctus, lorem libero tempus mauris, a fermentum libero orci semper lacus. Duis tristique fringilla magna, eu egestas dolor molestie non.</p>",
  },
  contact: {
    title: "Contact information",
    profiles: [
      {
        picture: {
          path: "https://picsum.photos/50/50",
          alt: "Stefan Mayer profile picture",
        },
        name: {
          text: "Stefan Mayer",
          link: "/example.html",
        },
        infos: ["DG Test", "Director"],
      },
      {
        picture: {
          path: "https://picsum.photos/50/50",
          alt: "Stefan Mayer profile picture",
        },
        name: {
          text: "Stefan Mayer",
          link: "/example.html",
        },
        infos: ["DG Test", "Director"],
      },
      {
        picture: {
          path: "https://picsum.photos/50/50",
          alt: "Stefan Mayer profile picture",
        },
        name: {
          text: "Stefan Mayer",
          link: "/example.html",
        },
        infos: ["DG Test", "Director"],
      },
    ],
  },
  recent: {
    title: "Recent activities",
    block_data: {
      activities: [
        {
          image:
            "<img class='rounded-circle me-3-5' alt='alt-img-1' src='https://picsum.photos/50/50?random=1'>",
          content:
            "<a href='/example.html' class='fw-bold'>Adjur Tichar</a> commented on the article <a href='#' aria-label='read more about spaceX 1'>SpaceX satellites spotted: how good is this for our health and environment?</a>",
          meta: [
            {
              icon: {
                name: "clock",
                path: "/icons.svg",
                size: "xs",
                attributes: new drupalAttribute().addClass([
                  "me-2",
                  "align-top",
                  "mt-1",
                ]),
              },
              label: "8 hours ago",
            },
          ],
        },
        {
          image:
            "<img class='rounded-circle me-3-5' alt='alt-img-2' src='https://picsum.photos/50/50?random=2'>",
          content:
            "<a href='/example.html' class='fw-bold'>Adjur Tichar</a> commented on the article <a href='#' aria-label='read more about spaceX 2'>SpaceX satellites spotted: how good is this for our health and environment?</a>",
          meta: [
            {
              icon: {
                name: "clock",
                path: "/icons.svg",
                size: "xs",
                attributes: new drupalAttribute().addClass([
                  "me-2",
                  "align-top",
                  "mt-1",
                ]),
              },
              label: "8 hours ago",
            },
          ],
        },
        {
          image:
            "<img class='rounded-circle me-3-5' alt='alt-img-3' src='https://picsum.photos/50/50?random=3'>",
          content:
            "<a href='/example.html' class='fw-bold'>Adjur Tichar</a> commented on the article <a href='#' aria-label='read more about spaceX 3'>SpaceX satellites spotted: how good is this for our health and environment?</a>",
          meta: [
            {
              icon: {
                name: "clock",
                path: "/icons.svg",
                size: "xs",
                attributes: new drupalAttribute().addClass([
                  "me-2",
                  "align-top",
                  "mt-1",
                ]),
              },
              label: "8 hours ago",
            },
          ],
        },
        {
          image:
            "<img class='rounded-circle me-3-5' alt='alt-img-4' src='https://picsum.photos/50/50?random=4'>",
          content:
            "<a href='/example.html' class='fw-bold'>Steve Di Marzio</a> published the article <a href='/example.html' aria-label='read more about spaceX 4'>SpaceX satellites spotted: how good is this for our health and environment?</a> in <a href='/example.html'>News</a>",
          meta: [
            {
              icon: {
                path: "/icons.svg",
                name: "clock",
                size: "xs",
                attributes: new drupalAttribute().addClass([
                  "me-2",
                  "align-top",
                  "mt-1",
                ]),
              },
              label: "8 hours ago",
            },
          ],
        },
        {
          image:
            "<img class='rounded-circle me-3-5' alt='alt-img-5' src='https://picsum.photos/50/50?random=5'>",
          content:
            "<a href='/example.html' class='fw-bold'>Adjur Tichar</a> commented on the article <a href='/example.html' aria-label='read more about spaceX 5'>SpaceX satellites spotted: how good is this for our health and environment?</a>",
          meta: [
            {
              icon: {
                name: "clock",
                path: "/icons.svg",
                size: "xs",
                attributes: new drupalAttribute().addClass([
                  "me-2",
                  "align-top",
                  "mt-1",
                ]),
              },
              label: "8 hours ago",
            },
          ],
        },
      ],
    },
  },
  members: {
    title: "Latest members",
    profiles: [
      {
        picture: {
          path: "https://picsum.photos/50/50?random=6",
          alt: "Stefan Mayer profile picture",
        },
        name: {
          text: "Stefan Mayer",
          link: "/example.html",
        },
        infos: ["DG Test", "Director"],
      },
      {
        picture: {
          path: "https://picsum.photos/50/50?random=7",
          alt: "Stefan Mayer profile picture",
        },
        name: {
          text: "Stefan Mayer",
          link: "/example.html",
        },
        infos: ["DG Test", "Director"],
      },
      {
        picture: {
          path: "https://picsum.photos/50/50?random=8",
          alt: "Stefan Mayer profile picture",
        },
        name: {
          text: "Stefan Mayer",
          link: "/example.html",
        },
        infos: ["DG Test", "Director"],
      },
      {
        picture: {
          path: "https://picsum.photos/50/50?random=9",
          alt: "Stefan Mayer profile picture",
        },
        name: {
          text: "Stefan Mayer",
          link: "/example.html",
        },
        infos: ["DG Test", "Director"],
      },
      {
        picture: {
          path: "https://picsum.photos/50/50?random=10",
          alt: "Stefan Mayer profile picture",
        },
        name: {
          text: "Stefan Mayer",
          link: "/example.html",
        },
        infos: ["DG Test", "Director"],
      },
      {
        picture: {
          path: "https://picsum.photos/50/50?random=11",
          alt: "Stefan Mayer profile picture",
        },
        name: {
          text: "Stefan Mayer",
          link: "/example.html",
        },
        infos: ["DG Test", "Director"],
      },
    ],
    more_link: {
      label: "See all group members",
      path: "/example.html",
      icon_position: "after",
      icon: {
        name: "chevron-right",
        path: "/icons.svg",
        size: "xs",
      },
      attributes: new drupalAttribute().addClass(["py-2", "d-inline-block"]),
    },
  },
  contributions: {
    title: "Latest contributions",
    listing: {
      attributes: new drupalAttribute().addClass("mb-4"),
      variant: "highlight-3-col",
      link: {
        attributes: new drupalAttribute().addClass(["mb-4-5", "pt-1", "pb-2"]),
        path: "/example.html",
        label: "See all group contributions",
        icon: {
          name: "chevron-right",
          path: "/icons.svg",
        },
      },
      items: [
        {
          title: "<a href='/example.html' class='standalone'>Card title</a>",
          text: {
            content:
              "Some quick example text to build on the card and title and make up the bulk of the cards content.",
            classes: "mb-2",
          },
          content:
            "<span class='text-muted me-3 text-nowrap'>8 hours ago</span><span class='text-muted me-3 text-nowrap'>1 comment</span>",
          image: {
            path: "https://picsum.photos/seed/1002/600/400",
            alt: "alt img",
            position: "top",
          },
          badges: [
            {
              label: "Label",
              outline: true,
              rounded_pill: true,
            },
            {
              label: "Label",
              outline: true,
              rounded_pill: true,
            },
          ],
        },
        {
          title: "<a href='/example.html' class='standalone'>Card title</a>",
          text: {
            content:
              "Some quick example text to build on the card and title and make up the bulk of the cards content.",
            classes: "mb-2",
          },
          content:
            "<span class='text-muted me-3 text-nowrap'>8 hours ago</span><span class='text-muted me-3 text-nowrap'>1 comment</span>",
          image: {
            path: "https://picsum.photos/seed/1003/600/400",
            alt: "alt img",
            position: "top",
          },
          badges: [
            {
              label: "Label",
              outline: true,
              rounded_pill: true,
            },
            {
              label: "Label",
              outline: true,
              rounded_pill: true,
            },
            {
              label: "Label",
              outline: true,
              rounded_pill: true,
            },
          ],
        },
        {
          title: "<a href='/example.html' class='standalone'>Card title</a>",
          text: {
            content:
              "Some quick example text to build on the card and title and make up the bulk of the cards content.",
            classes: "mb-2",
          },
          content:
            "<span class='text-muted me-3 text-nowrap'>8 hours ago</span><span class='text-muted me-3 text-nowrap'>1 comment</span>",
          image: {
            path: "https://picsum.photos/seed/1004/600/400",
            alt: "alt img",
            position: "top",
          },
          badges: [
            {
              label: "Label",
              outline: true,
              rounded_pill: true,
            },
          ],
        },
      ],
    },
  },
};

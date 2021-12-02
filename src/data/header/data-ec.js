const drupalAttribute = require("drupal-attribute");

module.exports = {
  variant: "ec",
  site_name: "<p>Project name</p>",
  project_logo: {
    path: "https://inno-ecl.s3.amazonaws.com/media/examples/placeholder.svg",
    classes: "d-none d-lg-inline-block",
  },
  head: {
    attributes: new drupalAttribute().addClass(["w-100", "shadow-sm"]),
    disable_collapse: true,
    brand: {
      logos: [
        {
          src: "https://cdn1.fpfis.tech.ec.europa.eu/ecl/v3.0.2/ec/images/logo/logo-ec--en.svg",
        },
      ],
    },
    navigation: {
      items: [
        {
          label: "Link",
          icon_position: "before",
          icon: {
            name: "link",
            path: "/icons.svg",
          },
          attributes: new drupalAttribute().addClass(["d-none", "d-lg-block"]),
        },
        {
          label: "Link",
          icon_position: "before",
          icon: {
            name: "link",
            path: "/icons.svg",
          },
          attributes: new drupalAttribute().addClass(["d-none", "d-lg-block"]),
        },
        {
          label: "<span class='d-block d-lg-inline-block'>English</span>",
          path: "#",
          icon_position: "before",
          icon: {
            name: "chat-left-dots-fill",
            size: "xs",
            path: "/icons.svg",
          },
          attributes: new drupalAttribute()
            .setAttribute("data-bs-toggle", "modal")
            .setAttribute("data-bs-target", "#languageModal")
            .addClass("text-center"),
        },
        {
          label: "<span class='d-block d-lg-inline-block'>Log in</span>",
          path: "#",
          icon_position: "before",
          icon: {
            name: "person-fill",
            size: "xs",
            path: "/icons.svg",
          },
          attributes: new drupalAttribute()
            .setAttribute("data-bs-toggle", "modal")
            .setAttribute("data-bs-target", "#loginModal")
            .addClass("text-center"),
        },
        {
          label: "<span class='badge bg-danger'>5</span>",
          path: "#",
          remove_icon_spacers: true,
          icon_position: "before",
          icon: {
            name: "bell-fill",
            size: "s",
            path: "/icons.svg",
          },
          attributes: new drupalAttribute().addClass([
            "notification",
            "mt-2",
            "mt-lg-0",
          ]),
        },
      ],
    },
  },
  navbar: {
    color_set: "dark",
    collapse_id: "navbarNavDropdown",
    attributes: new drupalAttribute().addClass("bcl-header__navbar"),
    form: {
      attributes: new drupalAttribute().addClass(["d-flex", "mt-3", "mt-lg-0"]),
      submit: {
        variant: "light",
        icon: {
          name: "search",
          size: "xs",
          path: "/icons.svg",
        },
        attributes: new drupalAttribute().addClass([
          "border-start-0",
          "rounded-0",
          "rounded-end",
          "d-flex",
        ]),
      },
      items: [
        [
          {
            type: "text",
            required: true,
            label: "Search",
            hidden_label: true,
            placeholder: "Search",
            id: "inlineFormInputGroupSearch",
            attributes: new drupalAttribute().addClass([
              "border-start-0",
              "rounded-0",
              "rounded-start",
            ]),
          },
        ],
      ],
    },
    navigation: {
      navbar: true,
      attributes: new drupalAttribute().addClass("me-auto"),
      items: [
        {
          label: "Home",
          path: "/example",
          active: true,
          attributes: new drupalAttribute().setAttribute(
            "aria-current",
            "page"
          ),
        },
        {
          label: "Item 01",
          path: "/example",
        },
        {
          label: "Item 02",
          path: "/example",
        },
        {
          id: "navbarDropdownMenuLink",
          link: true,
          dropdown: true,
          trigger: {
            label: "Dropdown link",
            path: "#",
            attributes: new drupalAttribute().addClass("nav-link"),
          },
          items: [
            {
              label: "Action",
              path: "/example.html",
            },
            {
              label: "Another action",
              path: "/example.html",
            },
            {
              label: "Something else here",
              path: "/example.html",
            },
          ],
        },
      ],
    },
  },
  modals: [
    {
      id: "loginModal",
      header:
        '<h5 class="modal-title" id="loginModalLabel">Log in</h5>' +
        '<button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>',
      body:
        "<h5>Disclaimer 1</h5>" +
        "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum accumsan eget orci eu aliquet. Suspendisse potenti. Integer volutpat, nisl et placerat tincidunt</p>" +
        "<h5>Disclaimer 2</h5>" +
        "<p>Duis bibendum tristique lobortis. Nam luctus nisi sit amet turpis faucibus, ut dapibus elit sollicitudin. Phasellus a massa magna. Nullam ac imperdiet leo.</p>",
      footer:
        '<button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>' +
        '<button type="button" class="btn btn-primary">Access EU login</button>',
    },
    {
      id: "languageModal",
      size: "fullscreen",
      attributes: new drupalAttribute().addClass("bcl-language"),
      header:
        '<h5 class="modal-title" id="languageeModalLabel">Select your language</h5>' +
        '<button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>',
      body:
        '<div class="container">' +
        '<div class="row">' +
        '<div class="col col-lg-8 offset-lg-2">' +
        '<h5 class="bcl-language__title">EU official languages</h5>' +
        "</div>" +
        "</div>" +
        '<div class="row">' +
        '<div class="col col-lg-4 offset-lg-2">' +
        '<div class="bcl-language__list">' +
        '<a href="#" class="bcl-language__item">Language 01</a>' +
        '<a href="#" class="bcl-language__item">Language 02</a>' +
        '<a href="#" class="bcl-language__item">Language 03</a>' +
        "</div>" +
        "</div>" +
        '<div class="col col-lg-4">' +
        '<div class="bcl-language__list">' +
        '<a href="#" class="bcl-language__item">Language 04</a>' +
        '<a href="#" class="bcl-language__item">Language 05</a>' +
        '<a href="#" class="bcl-language__item">Language 06</a>' +
        "</div>" +
        "</div>" +
        "</div>" +
        '<div class="row">' +
        '<div class="col col-lg-8 offset-lg-2">' +
        '<h5 class="bcl-language__title">Non EU languages</h5>' +
        "</div>" +
        "</div>" +
        '<div class="row">' +
        '<div class="col col-lg-4 offset-lg-2">' +
        '<div class="bcl-language__list">' +
        '<a href="#" class="bcl-language__item">Language 07</a>' +
        '<a href="#" class="bcl-language__item">Language 08</a>' +
        "</div>" +
        "</div>" +
        '<div class="col col-lg-4">' +
        '<div class="bcl-language__list">' +
        '<a href="#" class="bcl-language__item">Language 09</a>' +
        '<a href="#" class="bcl-language__item">Language 10</a>' +
        "</div>" +
        "</div>" +
        "</div>" +
        "</div>",
      footer:
        '<button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>',
    },
  ],
  breadcrumbs: {
    attributes: new drupalAttribute().addClass(["mt-3"]),
    links: [
      { label: "Home", path: "/example" },
      {
        label: "European Commission",
        path: "/example",
      },
      {
        label: "About the European Commission",
        path: "/example",
      },
      { label: "News" },
    ],
    icons_path: "/icons.svg",
  },
};

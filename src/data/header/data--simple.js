const drupalAttribute = require("drupal-attribute");

module.exports = {
  variant: "eu",
  head: {
    attributes: new drupalAttribute()
      .addClass(["w-100", "shadow-sm"])
      .setAttribute("aria-label", "Top Navigation"),
    disable_collapse: true,
    brand: {
      logos: [
        {
          class: "d-none d-lg-block",
          src: "https://cdn1.fpfis.tech.ec.europa.eu/ecl/v3.0.2/eu/images/logo/standard-version/positive/logo-eu--en.svg",
          alt: "desktop european union logo",
        },
        {
          class: "d-lg-none",
          src: "https://cdn1.fpfis.tech.ec.europa.eu/ecl/v3.0.2/eu/images/logo/condensed-version/positive/logo-eu--en.svg",
          alt: "mobile european union logo",
        },
      ],
    },
    navigation: {
      items: [
        {
          label: "<span class='d-block d-lg-inline-block'>English</span>",
          path: "#",
          icon_position: "before",
          remove_icon_spacers: true,
          icon: {
            name: "chat-left-dots-fill",
            size: "xs",
            path: "/icons.svg",
            attributes: new drupalAttribute().addClass("me-lg-2-5"),
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
          remove_icon_spacers: true,
          icon: {
            name: "person-fill",
            size: "xs",
            path: "/icons.svg",
            attributes: new drupalAttribute().addClass("me-lg-2-5"),
          },
          attributes: new drupalAttribute()
            .setAttribute("data-bs-toggle", "modal")
            .setAttribute("data-bs-target", "#loginModal")
            .addClass("text-center"),
        },
      ],
    },
  },
  navbar: {
    color_set: "dark",
    collapse_id: "navbarNavDropdown",
    attributes: new drupalAttribute()
      .addClass("bcl-header__navbar")
      .setAttribute("aria-label", "main-navigation"),
    form: {
      attributes: new drupalAttribute().addClass(["d-flex", "mt-3", "mt-lg-0"]),
      submit: {
        variant: "light",
        assistive_text: "search",
        icon: {
          name: "search",
          size: "xs",
          path: "/icons.svg",
        },
        attributes: new drupalAttribute().addClass([
          "border-start-0",
          "rounded-0",
          "rounded-end",
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
          attributes: new drupalAttribute()
            .setAttribute("aria-current", "page")
            .setAttribute("aria-label", "homepage"),
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
      {
        label: "Home",
        path: "/example",
        attributes: new drupalAttribute().setAttribute(
          "aria-label",
          "homepage"
        ),
      },
      {
        label: "European Union",
        path: "/example",
      },
      {
        label: "About the European Union",
        path: "/example",
      },
      { label: "News" },
    ],
    icons_path: "/icons.svg",
  },
};

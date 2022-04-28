const drupalAttribute = require("drupal-attribute");

module.exports = {
  variant: "ucpkn",
  site_name: "UCP Knowledge Network: Applied knowledge for action",
  light: true,
  project_logo: {
    path: "ucpkn_logo.svg",
    classes: "d-none d-lg-inline-block",
    alt: "ucpkn logo",
  },
  navbar: {
    color_set: "dark",
    collapse_id: "navbarNavDropdown",
    attributes: new drupalAttribute().addClass("bcl-header__navbar"),
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
          id: "navbarDropdownMenuLink",
          link: true,
          dropdown: true,
          trigger: {
            label: "Knowledge & Capacity",
            path: "#",
            attributes: new drupalAttribute().addClass("nav-link"),
          },
          items: [
            {
              label: "Knowledge Network Capacity Development Pillar",
              path: "/example.html",
            },
            {
              label: "Disaster Prevention and Risk Management",
              path: "/example.html",
            },
            {
              label: "Disaster Preparedness",
              path: "/example.html",
            },
            {
              label: "Emergency Response Coordination Centre",
              path: "/example.html",
            },
            {
              label: "UCPM Lessons Learnt Programme",
              path: "/example.html",
            },
          ],
        },
        {
          id: "navbarDropdownMenuLinkSecond",
          link: true,
          dropdown: true,
          trigger: {
            label: "Science & Research",
            path: "#",
            attributes: new drupalAttribute().addClass("nav-link"),
          },
          items: [
            {
              label: "Knowledge Network Science Pillar",
              path: "/example.html",
            },
            {
              label: "Disaster Risk Management Knowledge Centre",
              path: "/example.html",
            },
            {
              label: "Knowledge Gaps",
              path: "/example.html",
            },
            {
              label: "Data & Tools",
              path: "/example.html",
            },
          ],
        },
        {
          id: "navbarDropdownMenuLinkThird",
          link: true,
          dropdown: true,
          trigger: {
            label: "Projects",
            path: "#",
            attributes: new drupalAttribute().addClass("nav-link"),
          },
          items: [
            {
              label: "Union Civil Protection Mechanism Projects",
              path: "/example.html",
            },
            {
              label: "Other Disaster Risk Management Projects",
              path: "/example.html",
            },
            {
              label: "EU funding for disaster management",
              path: "/example.html",
            },
          ],
        },
        {
          label: "Stories",
          path: "/example.html",
        },
        {
          id: "navbarDropdownMenuLinkProjects",
          link: true,
          dropdown: true,
          trigger: {
            label: "About",
            path: "#",
            attributes: new drupalAttribute().addClass("nav-link"),
          },
          items: [
            {
              label: "Knowledge Network Governance",
              path: "/example.html",
            },
            {
              label: "The EU Civil Protection Mechanism",
              path: "/example.html",
            },
            {
              label: "Information pack",
              path: "/example.html",
            },
          ],
        },
      ],
    },
  },
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
  },
};

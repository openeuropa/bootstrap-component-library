// Simple content for demo
module.exports = {
  logo: {
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Placeholder_view_vector.svg/638px-Placeholder_view_vector.svg.png",
  },
  navbar: {
    collapse_id: "navbarNavDropdown",
    extra_classes: "oe-header__navbar",
    navigation: {
      navbar: true,
      items: [
        {
          label: "Home",
          path: "/example",
          active: true,
          extra_attributes: [{ name: "aria-current", value: "page" }],
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
            extra_classes: "nav-link",
            path: "#",
            extra_attributes: [
              {
                name: "aria-expanded",
                value: "false",
              },
              {
                name: "autocomplete",
                value: "off",
              },
              {
                name: "data-bs-toggle",
                value: "dropdown",
              },
            ],
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
  login: {
    link: {
      label: "Log in",
    },
    modal: {
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
  },
  language: {
    link: {
      label: "English",
    },
    modal: {
      id: "languageModal",
      size: "fullscreen",
      extra_class: "oe-language",
      header:
        '<h5 class="modal-title" id="languageeModalLabel">Select your language</h5>' +
        '<button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>',
      body:
        '<div class="container">' +
        '<div class="row">' +
        '<div class="col col-lg-8 offset-lg-2">' +
        '<h5 class="oe-language__title">EU official languages</h5>' +
        "</div>" +
        "</div>" +
        '<div class="row">' +
        '<div class="col col-lg-4 offset-lg-2">' +
        '<div class="oe-language__list">' +
        '<a href="#" class="oe-language__item">Language 01</a>' +
        '<a href="#" class="oe-language__item">Language 02</a>' +
        '<a href="#" class="oe-language__item">Language 03</a>' +
        "</div>" +
        "</div>" +
        '<div class="col col-lg-4">' +
        '<div class="oe-language__list">' +
        '<a href="#" class="oe-language__item">Language 04</a>' +
        '<a href="#" class="oe-language__item">Language 05</a>' +
        '<a href="#" class="oe-language__item">Language 06</a>' +
        "</div>" +
        "</div>" +
        "</div>" +
        '<div class="row">' +
        '<div class="col col-lg-8 offset-lg-2">' +
        '<h5 class="oe-language__title">Non EU languages</h5>' +
        "</div>" +
        "</div>" +
        '<div class="row">' +
        '<div class="col col-lg-4 offset-lg-2">' +
        '<div class="oe-language__list">' +
        '<a href="#" class="oe-language__item">Language 07</a>' +
        '<a href="#" class="oe-language__item">Language 08</a>' +
        "</div>" +
        "</div>" +
        '<div class="col col-lg-4">' +
        '<div class="oe-language__list">' +
        '<a href="#" class="oe-language__item">Language 09</a>' +
        '<a href="#" class="oe-language__item">Language 10</a>' +
        "</div>" +
        "</div>" +
        "</div>" +
        "</div>",
      footer:
        '<button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>',
    },
  },
};

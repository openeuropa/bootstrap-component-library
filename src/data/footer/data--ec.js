const drupalAttribute = require("drupal-attribute");
const { getDummyText } = require("@openeuropa/bcl-data-utils");

module.exports = {
  variant: "ec",
  rows: [
    {
      extra_classes: "pt-4 pt-lg-5",
      cols: [
        {
          classes: "col-12 col-lg-4",
          items: [
            {
              type: "content",
              content: `<p class='fw-bold mb-2'>[Project name]</p>${getDummyText(
                2,
                true,
              )}`,
            },
          ],
        },
        {
          classes: "col-12 col-lg-4 pb-4 pb-lg-0",
          items: [
            {
              type: "content",
              content:
                "<p class='fw-bold border-bottom pb-2 mb-2'>Contact [project name]</p>",
            },
            {
              type: "content",
              content: "<p>Contact information of the DG</p>",
            },
            {
              type: "content",
              content:
                "<p class='fw-bold border-bottom pb-2 mt-3 mb-2'>Follow us on social media</p>",
            },
            {
              type: "links",
              links: [
                {
                  label: "Facebook",
                  path: "/example.html",
                  icon_position: "before",
                  icon: {
                    path: "/icons.svg",
                    name: "facebook",
                    size: "xs",
                  },
                },
                {
                  label: "Twitter",
                  path: "/example.html",
                  icon_position: "before",
                  icon: {
                    path: "/icons.svg",
                    name: "twitter",
                    size: "xs",
                  },
                },
                {
                  label: "Linkedin",
                  path: "/example.html",
                  icon_position: "before",
                  icon: {
                    name: "linkedin",
                    path: "/icons.svg",
                    size: "xs",
                  },
                },
              ],
            },
          ],
        },
        {
          classes: "col-12 col-lg-4",
          items: [
            {
              type: "content",
              content:
                "<p class='fw-bold border-bottom pb-2 mb-2'>About us</p>",
            },
            {
              type: "content",
              content: "<p>Information about the DG</p>",
            },
            {
              type: "content",
              content:
                "<p class='fw-bold border-bottom pb-2 mb-2'>Optional links</p>",
            },
            {
              type: "links",
              links: [
                {
                  path: "/example.html",
                  label: "Link",
                },
                {
                  path: "/example.html",
                  label: "Link",
                },
                {
                  path: "/example.html",
                  label: "Link",
                },
                {
                  path: "/example.html",
                  label: "Link",
                },
              ],
            },
          ],
        },
      ],
    },
    {
      extra_classes: "pb-4 pb-lg-5 mt-4 mt-lg-5 bcl-footer__bordered-row",
      cols: [
        {
          classes: "col-12 col-lg-4",
          items: [
            {
              type: "content",
              content: "<p class='fw-bold pb-2 mb-2'>More information on:</p>",
            },
            {
              type: "links",
              links: [
                {
                  label: "Link",
                  path: "/example.html",
                },
                {
                  label: "Link",
                  path: "/example.html",
                },
                {
                  label: "Link",
                  path: "/example.html",
                },
                {
                  label: "Link",
                  path: "/example.html",
                },
              ],
            },
          ],
        },
      ],
    },
    {
      extra_classes: "pb-4 pb-lg-5 bcl-footer__bordered-row",
      cols: [
        {
          classes: "col-12 col-lg-4 pb-lg-4",
          items: [
            {
              type: "content",
              content: "<p class='fw-bold pb-2 mb-2'>European Commission</p>",
            },
          ],
        },
        {
          classes: "col-12 col-lg-4",
          items: [
            {
              type: "links",
              links: [
                {
                  label: "European Commission",
                  path: "/example.html",
                },
                {
                  label: "Follow the EC on social media",
                  path: "/example.html",
                  icon_position: "after",
                  icon: {
                    name: "box-arrow-up-right",
                    size: "xs",
                    path: "/icons.svg",
                    attributes: new drupalAttribute().addClass(["ms-2"]),
                  },
                },
                {
                  label: "Resources for partners",
                  path: "/example.html",
                },
              ],
            },
          ],
        },
        {
          classes: "col-12 col-lg-4",
          items: [
            {
              type: "links",
              links: [
                {
                  label: "Language policy",
                  path: "/example.html",
                },
                {
                  label: "Cookies",
                  path: "/example.html",
                },
                {
                  label: "Privacy policy",
                  path: "/example.html",
                },
                {
                  label: "Legal notice",
                  path: "/example.html",
                },
              ],
            },
          ],
        },
      ],
    },
  ],
};

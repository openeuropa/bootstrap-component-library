const drupalAttribute = require("drupal-attribute");

module.exports = {
  attributes: new drupalAttribute().addClass("ec__footer"),
  rows: [
    {
      extra_classes: "pt-4 pt-lg-5",
      cols: [
        {
          classes: "col-12 col-lg-4",
          items: [
            {
              type: "content",
              content:
                "<p class='fw-bold mb-2'>[Project name]</p><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque in sagittis dolor.</p>",
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
                  icon_position: "before",
                  icon: {
                    name: "facebook",
                    size: "xs",
                    attributes: new drupalAttribute().addClass(["me-2"]),
                  },
                },
                {
                  label: "Twitter",
                  icon_position: "before",
                  icon: {
                    name: "twitter",
                    size: "xs",
                    attributes: new drupalAttribute().addClass(["me-2"]),
                  },
                },
                {
                  label: "Linkedin",
                  icon_position: "before",
                  icon: {
                    name: "linkedin",
                    size: "xs",
                    attributes: new drupalAttribute().addClass(["me-2"]),
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
                  label: "Link",
                },
                {
                  label: "Link",
                },
                {
                  label: "Link",
                },
                {
                  label: "Link",
                },
              ],
            },
          ],
        },
      ],
    },
    {
      extra_classes: "py-4 border-top mt-4 py-lg-5 mt-lg-5",
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
                },
                {
                  label: "Link",
                },
                {
                  label: "Link",
                },
                {
                  label: "Link",
                },
              ],
            },
          ],
        },
      ],
    },
    {
      extra_classes: "pt-4 border-top pt-lg-5 pb-4",
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
                },
                {
                  label: "Follow the EC on social media",
                  icon_position: "after",
                  icon: {
                    name: "box-arrow-up-right",
                    size: "xs",
                    attributes: new drupalAttribute().addClass(["ms-2"]),
                  },
                },
                {
                  label: "Resources for partners",
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
                },
                {
                  label: "Cookies",
                },
                {
                  label: "Privacy policy",
                },
                {
                  label: "Legal notice",
                },
              ],
            },
          ],
        },
      ],
    },
  ],
};

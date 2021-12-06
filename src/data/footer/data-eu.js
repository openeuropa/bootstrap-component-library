const drupalAttribute = require("drupal-attribute");

module.exports = {
  attributes: new drupalAttribute().addClass("eu__footer"),
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
              type: "links",
              links: [
                {
                  label: "Link",
                },
              ],
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
                    path: "/icons.svg",
                    attributes: new drupalAttribute().addClass(["me-2"]),
                  },
                },
                {
                  label: "Twitter",
                  icon_position: "before",
                  icon: {
                    name: "twitter",
                    size: "xs",
                    path: "/icons.svg",
                    attributes: new drupalAttribute().addClass(["me-2"]),
                  },
                },
                {
                  label: "Linkedin",
                  icon_position: "before",
                  icon: {
                    path: "/icons.svg",
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
      extra_classes: "pb-4 pb-lg-5 mt-4 mt-lg-5 bcl-footer__bordered-row",
      cols: [
        {
          classes: "col-12 col-lg-4 pb-4",
          items: [
            {
              type: "image",
              path: "https://cdn1.fpfis.tech.ec.europa.eu/ecl/v3.0.2/eu/images/logo/standard-version/positive/logo-eu--en.svg",
              alt: "logo",
            },
          ],
        },
        {
          classes: "col-12 col-lg-4",
          items: [
            {
              type: "content",
              content:
                "<p class='fw-bold border-bottom pb-2 mb-2'>Contact the EU</p>",
            },
            {
              type: "links",
              links: [
                {
                  label: "Call us 00 800 6 7 8 9 10 11",
                },
                {
                  label: "Use other telephone options",
                },
                {
                  label: "Write us via our contact form",
                },
                {
                  label: "Meet us at a local EU office",
                },
              ],
            },
            {
              type: "content",
              content:
                "<p class='fw-bold border-bottom pb-2 pt-3 mb-2'>Social media</p>",
            },
            {
              type: "content",
              content:
                "<p>Search for <a href='#' class='text-underline-hover mb-2'>EU social media channels</a></p>",
            },
            {
              type: "content",
              content:
                "<p class='fw-bold border-bottom pb-2 pt-3 mb-2'>Legal</p>",
            },
            {
              type: "links",
              links: [
                {
                  label: "Language policy",
                },
                {
                  label: "Privacy policy",
                },
                {
                  label: "Legal notice",
                },
                {
                  label: "Cookies",
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
                "<p class='fw-bold border-bottom pb-2 pt-4 pt-lg-0 mb-2'>EU institutions</p>",
            },
            {
              type: "links",
              links: [
                {
                  label: "European Parliament",
                },
                {
                  label: "European Council",
                },
                {
                  label: "Council of the European Union",
                },
                {
                  label: "European Commission",
                },
                {
                  label: "Court of Justice of the European Union",
                },
                {
                  label: "European Central Bank",
                },
                {
                  label: "European Court of Auditors",
                },
                {
                  label: "European External Action Service",
                },
                {
                  label: "European Economic and Social Committee",
                },
                {
                  label: "European Committee of the Region",
                },
                {
                  label: "European Investment Bank",
                },
                {
                  label: "European Ombudsman",
                },
                {
                  label: "European Data Protection Supervisor",
                },
                {
                  label: "European Data Protection Board",
                },
                {
                  label: "European Personnel Selection Office",
                },
                {
                  label: "Publications Office of the European Union",
                },
                {
                  label: "Agencies",
                },
              ],
            },
          ],
        },
      ],
    },
  ],
};

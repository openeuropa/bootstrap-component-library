import demoData from "@openeuropa/bcl-landing-page/data.js";
import header from "@openeuropa/bcl-data-header/data--simple";
import footer from "@openeuropa/bcl-data-footer/data";
import landingPage from "@openeuropa/bcl-landing-page/landing-page.html.twig";
import defaultSprite from "@openeuropa/bcl-bootstrap/bootstrap-icons.svg";

const dataLanding = {
  content_type: "landing-page",
  header: header,
  footer: footer,
  with_banner: true,
  with_header: true,
  with_footer: true,
  ...demoData,
};

export default {
  title: "Compositions/Landing Page",
  parameters: {
    layout: "fullscreen",
    controls: { disable: true },
    design: [
      {
        name: "Mockup",
        type: "figma",
        url: "https://www.figma.com/file/N0nAH22yz5vfDL6yx8yemr/UCPKN-Mockup?node-id=1024%3A125486",
      },
    ],
  },
};

const correctPaths = (data) => {
  data.header.breadcrumbs.icons_path = defaultSprite;
  data.header.head.navigation.items.forEach((item) => {
    if (item.icon) {
      item.icon.path = defaultSprite;
    }
  });
  data.header.navbar.form.submit.icon.path = defaultSprite;
  data.footer.rows.forEach((row) => {
    row.cols.forEach((col) => {
      if (col.items) {
        col.items.forEach((item) => {
          if (item.type == "links") {
            item.links.forEach((link) => {
              if (link.icon) {
                link.icon.path = defaultSprite;
              }
            });
          }
        });
      }
    });
  });
  data.inpage_banner.link.icon.path = defaultSprite;
  data.listing_section.link.icon.path = defaultSprite;
  data.activity_listing.link.icon.path = defaultSprite;

  return data;
};

export const Default = () => landingPage(correctPaths(dataLanding));

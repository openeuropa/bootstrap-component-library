import demoData from "@openeuropa/bcl-landing-page/data.js";
import headerDataUCPKN from "@openeuropa/bcl-data-header/data-ucpkn";
import footerData from "@openeuropa/bcl-data-footer/data.js";
import landingPage from "@openeuropa/bcl-landing-page/landing-page.html.twig";
import defaultSprite from "@openeuropa/bcl-bootstrap/bootstrap-icons.svg";
import logo from "@openeuropa/bcl-theme-ucpkn/src/logo/ucpkn_logo.svg";

demoData.data.header = headerDataUCPKN;
demoData.data.header.project_logo.path = logo;
demoData.data.main_banner.title = "UCPKN Project";
demoData.data.footer = footerData;

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
  data.data.footer.rows.forEach((row) => {
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
  data.data.inpage_banner.link.icon.path = defaultSprite;
  data.data.listing_section.link.icon.path = defaultSprite;
  data.data.activity_listing.link.icon.path = defaultSprite;

  return data;
};

export const Default = () => landingPage(correctPaths(demoData));

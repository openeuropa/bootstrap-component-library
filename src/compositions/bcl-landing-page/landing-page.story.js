import demoData from "@openeuropa/bcl-landing-page/data.js";
import demoDataUCPKN from "@openeuropa/bcl-landing-page/dataUCPKN.js";
import headerData from "@openeuropa/bcl-data-header/data.js";
import headerDataUCPKN from "@openeuropa/bcl-data-header/data-ucpkn";
import footerData from "@openeuropa/bcl-data-footer/data.js";
import landingPage from "@openeuropa/bcl-landing-page/landing-page.html.twig";
import defaultSprite from "@openeuropa/bcl-bootstrap/bootstrap-icons.svg";

demoData.data.header = headerData;

demoDataUCPKN.data.header = headerDataUCPKN;

export default {
  title: "Compositions/Landing Page",
  parameters: {
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
  data.data.footer = footerData;
  if (data.data.breadcrumbs) {
    data.data.breadcrumbs.icons_path = defaultSprite;
  }
  if (data.data.header.head.navigation) {
    data.data.header.head.navigation.items.forEach((item) => {
      if (item.icon) {
        item.icon.path = defaultSprite;
      }
    });
  }
  if (data.data.header.navbar) {
    data.data.header.navbar.form.submit.icon.path = defaultSprite;
  }
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
  data.data.activities_section.link.icon.path = defaultSprite;

  return data;
};

export const Platform = () => landingPage(correctPaths(demoData));

export const PlatformUCPKN = () => landingPage(correctPaths(demoDataUCPKN));
PlatformUCPKN.storyName = "Platform - UCPKN";

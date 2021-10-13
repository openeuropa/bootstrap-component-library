import { withDesign } from "storybook-addon-designs";
import footer from "@openeuropa/bcl-footer/footer.html.twig";
import footerData from "@openeuropa/bcl-data-footer/data";
import footerDataEC from "@openeuropa/bcl-data-footer/data-ec";
import defaultSprite from "@openeuropa/bcl-bootstrap/bootstrap-icons.svg";

export default {
  title: "Compositions/Footer",
  decorators: [withDesign],
  parameters: {
    layout: "fullscreen",
    design: [
      {
        name: "Mockup - Footer Desktop",
        type: "figma",
        url: "https://www.figma.com/file/7aJedLkk8hiDoD3RcxTnQi/BCL-Starter-kit?node-id=5118%3A65509",
      },
      {
        name: "Mockup - Footer Mobile",
        type: "figma",
        url: "https://www.figma.com/file/7aJedLkk8hiDoD3RcxTnQi/BCL-Starter-kit?node-id=5222%3A62722",
      },
    ],
    controls: {
      disable: true,
    },
  },
};

const correctPaths = (data) => {
  data.rows.forEach((row) => {
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
  return data;
};

export const Footer = () => footer(correctPaths(footerData));

Footer.storyName = "Footer EU";

export const FooterEC = (args) => footer(correctPaths(footerDataEC));

FooterEC.storyName = "Footer EC";

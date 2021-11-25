import { initListings } from "@openeuropa/bcl-story-utils";
import { withDesign } from "storybook-addon-designs";
import demoData from "@openeuropa/bcl-search/dataSearch.js";
import headerData from "@openeuropa/bcl-data-header/data.js";
import footerData from "@openeuropa/bcl-data-footer/data.js";
import search from "@openeuropa/bcl-search/search.html.twig";
import defaultSprite from "@openeuropa/bcl-bootstrap/bootstrap-icons.svg";

demoData.data.header = headerData;
demoData.data.footer = footerData;

export default {
  title: "Compositions/Search",
  parameters: {
    layout: "fullscreen",
    controls: { disable: true },
    design: [
      {
        name: "Mockup",
        type: "figma",
        url: "https://www.figma.com/file/NQlGvTiTXZYN8TwY2Ur5EI/BCL-Features?node-id=43%3A0",
      },
    ],
  },
};

const correctPaths = (data) => {
  data.data.header.head.navigation.items.forEach((item) => {
    if (item.icon) {
      item.icon.path = defaultSprite;
    }
  });
  data.data.header.breadcrumbs.icons_path = defaultSprite;
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
  data.data.header.navbar.form.submit.icon.path = defaultSprite;
  data.data.filter_button.icon.path = defaultSprite;
  data.data.badges.forEach((badge) => {
    badge.icons_path = defaultSprite;
  });
  return data;
};

export const Default = () => search(correctPaths(demoData));

Default.decorators = [initListings, withDesign];

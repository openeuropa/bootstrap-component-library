import { withDesign } from "storybook-addon-designs";
import headerData from "@openeuropa/bcl-data-header/data.js";
import footerData from "@openeuropa/bcl-data-footer/data.js";
import GroupLanding from "@openeuropa/bcl-group-landing/group-landing.html.twig";
import demoData from "@openeuropa/bcl-group-landing/data";
import defaultSprite from "@openeuropa/bcl-bootstrap/bootstrap-icons.svg";

demoData.data.header = headerData;
demoData.data.footer = footerData;

export default {
  title: "Compositions/Group Landing",
  decorators: [withDesign],
  parameters: {
    layout: "fullscreen",
    design: [
      {
        name: "Mockup - Group",
        type: "figma",
        url: "https://www.figma.com/file/NQlGvTiTXZYN8TwY2Ur5EI/BCL-Features?node-id=482%3A2559",
      },
    ],
    controls: {
      disable: true,
    },
  },
};

const correctPaths = (data) => {
  data.data.header.head.navigation.items.forEach((item) => {
    if (item.icon) {
      item.icon.path = defaultSprite;
    }
  });
  data.data.header.navbar.form.submit.icon.path = defaultSprite;
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
  data.data.recent.block_data.activities.forEach((activity) => {
    activity.meta.forEach((meta) => {
      meta.icon.path = defaultSprite;
    });
  });
  data.data.banner_description.metas.forEach((meta) => {
    meta.icon.path = defaultSprite;
  });
  data.data.banner_description.collapse_trigger.icon.path = defaultSprite;
  data.data.contributions.more_link.icon.path = defaultSprite;
  data.data.members.more_link.icon.path = defaultSprite;
  return data;
};

export const Default = () => GroupLanding(correctPaths(demoData));

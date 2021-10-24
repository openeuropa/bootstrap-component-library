import { withDesign } from "storybook-addon-designs";
import headerData from "@openeuropa/bcl-data-header/data.js";
import footerData from "@openeuropa/bcl-data-footer/data.js";
import GroupLandingListing from "@openeuropa/bcl-group-landing-listing/group-landing-listing.html.twig";
import defaultSprite from "@openeuropa/bcl-bootstrap/bootstrap-icons.svg";
import demoDataList from "@openeuropa/bcl-group-landing-listing/dataList";
import demoDataListContent from "@openeuropa/bcl-group-landing-listing/dataListContent";
import demoDataListMember from "@openeuropa/bcl-group-landing-listing/dataListMember";

demoDataList.data.header = headerData;
demoDataListContent.data.header = headerData;
demoDataListMember.data.header = headerData;

demoDataList.data.footer = footerData;
demoDataListContent.data.footer = footerData;
demoDataListMember.data.footer = footerData;

export default {
  title: "Compositions/Group/Listing",
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

const scriptInit = (story) => {
  const demo = story();
  return `
    <script>
      var badges = document.querySelectorAll(".badge");
      badges.forEach(element => {
        var close = element.getElementsByTagName('span')[0];
        if(close) {
          close.addEventListener('click', event => {
            close.parentElement.remove();
          })
        }
      });
      if (document.querySelector(".multi-select")) {
        new SlimSelect({
          select: ".multi-select",
          selectByGroup: true,
          placeholder: "Please select a value",
        });
      }
    </script>
  ${demo}`;
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
  data.data.badges.forEach((badge) => {
    badge.icons_path = defaultSprite;
  });
  data.data.filter_button.icon.path = defaultSprite;
  return data;
};

export const GroupList = () => GroupLandingListing(correctPaths(demoDataList));
GroupList.storyName = "List";
GroupList.decorators = [scriptInit];

export const GroupListMember = () =>
  GroupLandingListing(correctPaths(demoDataListMember));
GroupListMember.storyName = "Member List";
GroupListMember.decorators = [scriptInit];

export const GroupListContent = () =>
  GroupLandingListing(correctPaths(demoDataListContent));
GroupListContent.storyName = "Content List";
GroupListContent.decorators = [scriptInit];

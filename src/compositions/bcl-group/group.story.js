import { withDesign } from "storybook-addon-designs";
import header from "@openeuropa/bcl-data-header/data--simple";
import footer from "@openeuropa/bcl-data-footer/data";
import groupListing from "@openeuropa/bcl-group/group.html.twig";
import groupLanding from "@openeuropa/bcl-group/group-landing.html.twig";
import listingPage from "@openeuropa/bcl-base-templates/listing-page.html.twig";
import defaultSprite from "@openeuropa/bcl-bootstrap/bootstrap-icons.svg";
import demoData from "@openeuropa/bcl-group/data";
import demoDataList from "@openeuropa/bcl-group/dataList";
import demoDataListContent from "@openeuropa/bcl-group/dataListContent";
import demoDataListMember from "@openeuropa/bcl-group/dataListMember";
import demoDataLanding from "@openeuropa/bcl-group/dataLanding";

let baseData = {
  content_type: "group",
  header: header,
  footer: footer,
  with_banner: true,
  with_header: true,
  with_footer: true,
  with_sidebar: true,
  ...demoData,
};

const dataListingContent = {
  page_title: "Content in the group",
  ...baseData,
  ...demoDataListContent,
};

const dataListingMember = {
  page_title: "Group members",
  ...baseData,
  ...demoDataListMember,
};

delete baseData.banner;
const dataListing = {
  page_title: "Groups",
  ...baseData,
  ...demoDataList,
};

const dataLanding = {
  page_title: "Group members",
  content_type: "group",
  header: header,
  footer: footer,
  with_banner: true,
  with_header: true,
  with_footer: true,
  ...demoDataLanding,
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

export default {
  title: "Compositions/Group",
  decorators: [withDesign, scriptInit],
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
  data.header.head.navigation.items.forEach((item) => {
    if (item.icon) {
      item.icon.path = defaultSprite;
    }
  });
  data.header.breadcrumbs.icons_path = defaultSprite;
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
  data.header.navbar.form.submit.icon.path = defaultSprite;
  data.footer.attributes.addClass("mt-3-5");
  if (data.badges) {
    data.badges.forEach((badge) => {
      badge.icons_path = defaultSprite;
    });
  }
  if (data.filter_button) {
    data.filter_button.icon.path = defaultSprite;
  }
  return data;
};

export const List = () => listingPage(correctPaths(dataListing));

export const MemberList = () => groupListing(correctPaths(dataListingMember));

export const ContentList = () => groupListing(correctPaths(dataListingContent));

export const Landing = () => groupLanding(correctPaths(dataLanding));
Landing.parameters = {
  design: [
    {
      name: "Mockup - Group",
      type: "figma",
      url: "https://www.figma.com/file/NQlGvTiTXZYN8TwY2Ur5EI/BCL-Features?node-id=482%3A2559",
    },
  ],
};

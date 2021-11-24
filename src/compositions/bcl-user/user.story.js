import demoDataListing from "@openeuropa/bcl-user/data-user-listing.js";
import demoDataEdit from "@openeuropa/bcl-user/data-user-edit.js";
import demoDataView from "@openeuropa/bcl-user/data-user-view.js";
import demoDataViewCompact from "@openeuropa/bcl-user/data-user-view-compact";
import header from "@openeuropa/bcl-data-header/data--simple";
import footer from "@openeuropa/bcl-data-footer/data";
import listingPage from "@openeuropa/bcl-base-templates/listing-page.html.twig";
import editUser from "@openeuropa/bcl-user/edit.html.twig";
import viewUser from "@openeuropa/bcl-user/view.html.twig";
import viewUserCompact from "@openeuropa/bcl-user/view-compact.html.twig";
import defaultSprite from "@openeuropa/bcl-bootstrap/bootstrap-icons.svg";

const data = {
  with_header: true,
  with_footer: true,
  header: header,
  footer: footer,
  content_type: "users",
};

const dataListing = {
  page_title: "users",
  with_banner: true,
  with_sidebar: true,
  ...demoDataListing,
  ...data,
};

const dataEdit = {
  content_type: "users",
  ...demoDataEdit,
  ...data,
};

const dataView = {
  content_type: "users",
  ...demoDataView,
  ...data,
};

export default {
  title: "Compositions/Users",
  parameters: {
    layout: "fullscreen",
    controls: { disable: true },
  },
};

const scriptInit = (story) => {
  const demo = story();
  return `
    <script>
      var badges = document.querySelectorAll(".badge");
      badges.forEach(element => {
        var close = element.getElementsByTagName('span')[0];
        if (close) {
          close.addEventListener('click', event => {
            close.parentElement.remove();
          })
        }
      });
    </script>
  ${demo}`;
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
  if (data.filter_button) {
    data.filter_button.icon.path = defaultSprite;
  }
  if (data.badges) {
    data.badges.forEach((badge) => {
      badge.icons_path = defaultSprite;
    });
  }
  if (data.profile_back) {
    data.profile_back.icon.path = defaultSprite;
  }
  return data;
};

export const Listing = () => listingPage(correctPaths(dataListing));

Listing.decorators = [scriptInit];
Listing.parameters = {
  design: [
    {
      name: "Mockup",
      type: "figma",
      url: "https://www.figma.com/file/NQlGvTiTXZYN8TwY2Ur5EI/BCL-Features?node-id=1122%3A33486",
    },
  ],
};

export const Edit = () => editUser(correctPaths(dataEdit));

Edit.parameters = {
  design: [
    {
      name: "Mockup - Profile Information",
      type: "figma",
      url: "https://www.figma.com/file/NQlGvTiTXZYN8TwY2Ur5EI/BCL-Features?node-id=1126%3A39536",
    },
    {
      name: "Mockup - Privacy Settings",
      type: "figma",
      url: "https://www.figma.com/file/NQlGvTiTXZYN8TwY2Ur5EI/BCL-Features?node-id=1142%3A34290",
    },
  ],
};

export const View = () => viewUser(correctPaths(dataView));

View.parameters = {
  design: [
    {
      name: "Mockup",
      type: "figma",
      url: "https://www.figma.com/file/NQlGvTiTXZYN8TwY2Ur5EI/BCL-Features?node-id=1126%3A38732",
    },
  ],
};

export const ViewCompact = () => viewUserCompact(demoDataViewCompact);

ViewCompact.parameters = {
  layout: "padded",
  design: [
    {
      name: "Mockup",
      type: "figma",
      url: "https://www.figma.com/file/7aJedLkk8hiDoD3RcxTnQi/BCL-Starter-kit?node-id=4362%3A43580",
    },
  ],
};

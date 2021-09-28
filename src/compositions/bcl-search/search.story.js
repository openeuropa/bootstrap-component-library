import demoData from "@openeuropa/bcl-search/dataSearch.js";
import headerData from "@openeuropa/bcl-data-header/data.js";
import search from "@openeuropa/bcl-search/search.html.twig";
import defaultSprite from "@openeuropa/bcl-bootstrap/bootstrap-icons.svg";

demoData.data.header = headerData;

export default {
  title: "Compositions/Search",
  parameters: {
    design: [
      {
        name: "Wireframe",
        type: "figma",
        url: "https://www.figma.com/file/NQlGvTiTXZYN8TwY2Ur5EI/BCL-Features?node-id=43%3A0",
      },
    ],
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
  data.data.filter_button.icon.path = defaultSprite;
  data.data.badges.forEach((badge) => {
    badge.icons_path = defaultSprite;
  });
  return data;
};

export const Default = () => search(correctPaths(demoData));
Default.decorators = [scriptInit];

import demoData from "@openeuropa/bcl-search/dataSearch.js";
import search from "@openeuropa/bcl-search/search.html.twig";
import defaultSprite from "@openeuropa/bcl-bootstrap/bootstrap-icons.svg";

export default {
  title: "Compositions/Search",
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

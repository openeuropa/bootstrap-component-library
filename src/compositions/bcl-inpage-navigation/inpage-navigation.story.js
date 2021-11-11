import dataDefault from "@openeuropa/bcl-inpage-navigation/dataDefault.js";
import inpage from "@openeuropa/bcl-inpage-navigation/inpage-navigation.html.twig";

const initScrollspy = (story) => {
  const demo = story();
  return `
    <script>
      if (
        document.getElementById("bcl-inpage-navigation") &&
        typeof bootstrap !== "undefined"
      ) {
        document.body.setAttribute("data-bs-spy", "scroll");
        document.body.setAttribute("data-bs-target", "#bcl-inpage-navigation");
        var scrollspyBody = bootstrap.ScrollSpy.getInstance(document.body);
        if (scrollspyBody) {
          scrollspyBody.dispose();
        }
        var scrollSpy = new bootstrap.ScrollSpy(document.body, {
          target: "#bcl-inpage-navigation",
        });
      }
    </script>
  ${demo}`;
};

export default {
  title: "Compositions/Inpage navigation",
  decorators: [initScrollspy],
  parameters: {
    controls: { disable: true },
    design: [
      {
        name: "Mockup",
        type: "figma",
        url: "https://www.figma.com/file/7aJedLkk8hiDoD3RcxTnQi/BCL-Starter-kit?node-id=4195%3A41188",
      },
    ],
  },
};

export const Default = () => inpage(dataDefault);

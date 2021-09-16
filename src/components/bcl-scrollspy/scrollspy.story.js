import { withDesign } from "storybook-addon-designs";
import navScrollspy from "@openeuropa/bcl-scrollspy/navScrollspy.html";
import groupScrollspy from "@openeuropa/bcl-scrollspy/groupScrollspy.html";

const initScrollspy = (story) => {
  const demo = story();
  return `
    <script>
      if (
        document.getElementById("scrollspy") &&
        typeof bootstrap !== "undefined"
      ) {
        document.body.setAttribute("data-bs-spy", "scroll");
        document.body.setAttribute("data-bs-target", "#scrollspy");
        var scrollspyBody = bootstrap.ScrollSpy.getInstance(document.body);
        if (scrollspyBody) {
          scrollspyBody.dispose();
        }
        var scrollSpy = new bootstrap.ScrollSpy(document.body, {
          target: "#scrollspy",
          method: "position",
        });
      }
    </script>
  ${demo}`;
};

export default {
  title: "Components/Scrollspy",
  decorators: [withDesign, initScrollspy],
  parameters: {
    controls: { disable: true },
    viewport: {
      defaultViewport: "1366x768",
    },
    design: [
      {
        name: "Bootstrap docs",
        type: "iframe",
        url: "https://getbootstrap.com/docs/5.0/components/scrollspy/",
      },
    ],
  },
};

export const Navigation = () => navScrollspy;
Navigation.storyName = "Navigation";

export const ListGroup = () => groupScrollspy;
ListGroup.storyName = "List Group";

import { withDesign } from "storybook-addon-designs";
import navScrollspy from "./navScrollspy.html";
import groupScrollspy from "./groupScrollspy.html";

export default {
  title: "Components/Scrollspy",
  decorators: [withDesign],
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

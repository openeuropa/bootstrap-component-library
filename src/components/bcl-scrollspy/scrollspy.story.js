import { withDesign } from "storybook-addon-designs";
import { initScrollspy } from "@openeuropa/bcl-story-utils";
import navScrollspy from "@openeuropa/bcl-scrollspy/navScrollspy.html";
import groupScrollspy from "@openeuropa/bcl-scrollspy/groupScrollspy.html";
import listScrollspy from "@openeuropa/bcl-scrollspy/listScrollspy.html";

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
        url: "https://getbootstrap.com/docs/5.1/components/scrollspy/",
      },
    ],
  },
};

export const Navigation = () => navScrollspy;
Navigation.storyName = "Navigation";
Navigation.parameters = {
  chromatic: { disableSnapshot: true },
};

export const ListGroup = () => groupScrollspy;
ListGroup.storyName = "List Group";
ListGroup.parameters = {
  chromatic: { disableSnapshot: true },
};

export const NestedLists = () => listScrollspy;
NestedLists.storyName = "With nested lists";
NestedLists.parameters = {
  chromatic: { disableSnapshot: true },
};

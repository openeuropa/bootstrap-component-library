import { withDesign } from "storybook-addon-designs";
import withCode from "@openeuropa/storybook-addon-code";

import demoList from "@openeuropa/bcl-heading/data/data--list";
import heading from "@openeuropa/bcl-heading/heading.html.twig";

const getArgs = () => ({
  title: "About the european commission",
  title_tag: "h2",
  title_link: { path: "" },
});

const getArgTypes = () => ({
  title: {
    type: { name: "string" },
    description: "Label of the heading",
    table: {
      type: { summary: "string" },
      defaultValue: { summary: "" },
      category: "Content",
    },
  },
  title_tag: {
    name: "tag",
    type: { name: "select" },
    description: "Html tag of the heading",
    options: ["h1", "h2", "h3", "h4", "h5", "h6"],
    table: {
      type: { summary: "string" },
      defaultValue: { summary: "h2" },
      category: "Content",
    },
  },
  title_link: {
    name: "link",
    description: "link for the title",
    type: { name: "object" },
    table: {
      type: { summary: "object" },
      defaultValue: { summary: "{}" },
      category: "Content",
    },
  },
});

export default {
  title: "Components/Heading(s)",
  decorators: [withCode, withDesign],
  parameters: {
    design: [
      {
        name: "Bootstrap docs",
        type: "iframe",
        url: "https://getbootstrap.com/docs/5.2/content/typography/",
      },
    ],
  },
};

const applyArgs = (args) => {
  if (!args.title_link.path || args.title_link.path === "") {
    delete args.title_link;
  }

  return args;
};

export const Default = (args) => heading(applyArgs(args));

Default.args = getArgs();
Default.argTypes = getArgTypes();
Default.parameters = {
  chromatic: { disableSnapshot: true },
};

export const List = () => demoList;

List.parameters = {
  controls: {
    disable: true,
  },
};

import { LoremIpsum } from "lorem-ipsum";
import { initScrollspy, getTitleControls } from "@openeuropa/bcl-story-utils";
import { withDesign } from "storybook-addon-designs";
import withCode from "@openeuropa/storybook-addon-code";
import drupalAttribute from "drupal-attribute";

import demoData from "@openeuropa/bcl-inpage-navigation/data/data.js";
import heading from "@openeuropa/bcl-heading/heading.html.twig";
import inpage from "@openeuropa/bcl-inpage-navigation/inpage-navigation.html.twig";

const lorem = new LoremIpsum();

const getArgs = (data) => ({
  title: data.title,
  title_tag: "h2",
});

const getArgTypes = () => getTitleControls();

const applyArgs = (data, args) => Object.assign(data, args);

const withContent = (story) => {
  const demo = story();

  const layout = `<div class="row">
      <div class="bcl-sidebar col-md-3 d-none d-lg-block">
        ${demo}
      </div>
      <div class="col-md-9">
        ${heading({
          title: "Heading 1",
          attributes: new drupalAttribute().setAttribute("id", "item-1"),
        })}
        <p>${lorem.generateParagraphs(4)}</p>
        ${heading({
          title: "Heading 2 with a long title going on several lines",
          attributes: new drupalAttribute().setAttribute("id", "item-2"),
        })}
        <p>${lorem.generateParagraphs(3)}</p>
        ${heading({
          title: "Heading 3",
          attributes: new drupalAttribute().setAttribute("id", "item-3"),
        })}
        <p>${lorem.generateParagraphs(5)}</p>
        ${heading({
          title: "Heading 4",
          attributes: new drupalAttribute().setAttribute("id", "item-4"),
        })}
        <p>${lorem.generateParagraphs(3)}</p>
      </div>
    </div>`;

  return layout;
};

export default {
  title: "Paragraphs/Inpage navigation",
  decorators: [withCode, withDesign, initScrollspy, withContent],
  parameters: {
    design: [
      {
        name: "Mockup",
        type: "figma",
        url: "https://www.figma.com/file/7aJedLkk8hiDoD3RcxTnQi/BCL-Starter-kit?node-id=4195%3A41188",
      },
      {
        name: "Bootstrap docs",
        type: "iframe",
        url: "https://getbootstrap.com/docs/5.2/components/scrollspy/",
      },
    ],
  },
};

export const Default = (args) => inpage(applyArgs(demoData, args));

Default.args = getArgs(demoData);
Default.argTypes = getArgTypes();

import { LoremIpsum } from "lorem-ipsum";
import {
  initScrollspy,
  getTitleControls,
  scrollspyTitles,
} from "@openeuropa/bcl-story-utils";
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

const withTitlesIDContent = (story) => {
  const demo = story();

  const layout = `
  <div class="bcl-content-area">
    <div class="row">
      <div class="bcl-sidebar col-md-3 d-none d-lg-block">
        ${demo}
      </div>
      <div class="col-md-9">
        ${heading({
          title: "Heading 1",
          attributes: new drupalAttribute().setAttribute("id", "item-1"),
        })}
        <p>${lorem.generateParagraphs(8)}</p>
        ${heading({
          title: "Heading 2 with a long title going on several lines",
          attributes: new drupalAttribute().setAttribute("id", "item-2"),
        })}
        <p>${lorem.generateParagraphs(10)}</p>
        ${heading({
          title: "Heading 3",
          attributes: new drupalAttribute().setAttribute("id", "item-3"),
        })}
        <p>${lorem.generateParagraphs(9)}</p>
        ${heading({
          title: "Heading 4",
          attributes: new drupalAttribute().setAttribute("id", "item-4"),
        })}
        <p>${lorem.generateParagraphs(8)}</p>
      </div>
    </div>
  </div>`;

  return layout;
};

const withBlocksIDContent = (story) => {
  const demo = story();

  const layout = `
  <div class="bcl-content-area">
    <div class="row">
      <div class="bcl-sidebar col-md-3 d-none d-lg-block">
        ${demo}
      </div>
      <div class="col-md-9">
        <div id="item-1">
          ${heading({
            title: "Heading 1",
          })}
          <p>${lorem.generateParagraphs(8)}</p>
        </div>
        <div id="item-2">
          ${heading({
            title: "Heading 2 with a long title going on several lines",
          })}
          <p>${lorem.generateParagraphs(10)}</p>
        </div>
        <div id="item-3">
          ${heading({
            title: "Heading 3",
          })}
          <p>${lorem.generateParagraphs(9)}</p>
        </div>
        <div id="item-4">
          ${heading({
            title: "Heading 4",
          })}
          <p>${lorem.generateParagraphs(8)}</p>
        </div>
      </div>
    </div>
  </div>`;

  return layout;
};

export default {
  title: "Paragraphs/Inpage navigation",
  decorators: [withCode, withDesign, initScrollspy],
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
export const Blocks = (args) => inpage(applyArgs(demoData, args));
Blocks.storyName = "Blocks with id";
Blocks.decorators = [withBlocksIDContent];
Blocks.args = getArgs(demoData);
Blocks.argTypes = getArgTypes();

export const Titles = (args) => inpage(applyArgs(demoData, args));
Titles.storyName = "Titles with id";
Titles.decorators = [withTitlesIDContent, scrollspyTitles];
Titles.args = getArgs(demoData);
Titles.argTypes = getArgTypes();

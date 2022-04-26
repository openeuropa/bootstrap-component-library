import withCode from "@openeuropa/storybook-addon-code";
import { withDesign } from "storybook-addon-designs";
import isChromatic from "chromatic/isChromatic";
import { correctPaths } from "@openeuropa/bcl-story-utils";
import layout from "@openeuropa/bcl-base-templates/data/layout";

import demoData from "@openeuropa/bcl-landing-page/data.js";
import landingPage from "@openeuropa/bcl-landing-page/landing-page.html.twig";

const header =
  layout[`header_${process.env.STORYBOOK_THEME}`] || layout.headerSimple;

if (isChromatic()) {
  demoData.listing_section.items.forEach((item) => {
    item.image.classes = item.image.classes
      ? `${item.image.classes} chromatic-ignore`
      : "chromatic-ignore";
  });
  demoData.featured_section.featured_media.embedded_media =
    '<iframe class="chromatic-ignore" title="New digital strategy first" width="350" height="197" src="https://www.youtube.com/embed/fgi-GSCB6ho" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>';
}

const dataLanding = {
  content_type: "landing-page",
  header: header,
  footer: layout.footer,
  with_banner: true,
  with_header: true,
  with_footer: true,
  ...demoData,
};

export default {
  title: "Features/Landing Page",
  parameters: {
    layout: "fullscreen",
    decorators: [withCode, withDesign],
    controls: { disable: true },
    badges: ["stable"],
    design: [
      {
        name: "Mockup",
        type: "figma",
        url: "https://www.figma.com/file/N0nAH22yz5vfDL6yx8yemr/UCPKN-Mockup?node-id=1024%3A125486",
      },
    ],
    a11y: {
      config: {
        rules: [{ id: "frame-tested", enabled: false }],
      },
    },
  },
};

export const Default = () => landingPage(correctPaths(dataLanding));

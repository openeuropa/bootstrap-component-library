import isChromatic from "chromatic/isChromatic";
import demoData from "@openeuropa/bcl-landing-page/data";
import header from "@openeuropa/bcl-data-header/data--simple";
import footer from "@openeuropa/bcl-data-footer/data";
import landingPage from "@openeuropa/bcl-landing-page/landing-page.html.twig";
import { correctPaths } from "@openeuropa/bcl-story-utils";
import drupalAttribute from "drupal-attribute";

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
  footer: {
    ...footer,
    attributes: new drupalAttribute().addClass("mt-4"),
  },
  with_banner: true,
  with_header: true,
  with_footer: true,
  ...demoData,
};

export default {
  title: "Features/Landing Page",
  parameters: {
    layout: "fullscreen",
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

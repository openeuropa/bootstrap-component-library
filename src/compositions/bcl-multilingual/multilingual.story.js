import { withDesign } from "storybook-addon-designs";
import withCode from "@openeuropa/storybook-addon-code";
import layout from "@openeuropa/bcl-base-templates/data/layout";
import { banner } from "@openeuropa/bcl-base-templates/data/content-page";
import { correctPaths } from "@openeuropa/bcl-story-utils";
import content from "@openeuropa/bcl-news/data/data--content";
import contentType from "@openeuropa/bcl-base-templates/content-type.html.twig";

import MultilingualDataEU from "@openeuropa/bcl-multilingual/data/data--eu";
import MultilingualDataEC from "@openeuropa/bcl-multilingual/data/data--ec";
import MultilingualDataNeutral from "@openeuropa/bcl-multilingual/data/data--neutral";
const feedback = `<div class="bg-lighter py-4 mt-md-4-5 mt-4 text-center">Feedback module here</div>`;
const share = `<div class="bg-gray-200 py-4 text-center">Share module here</div>`;

const openModal = (story) => {
  const demo = story();
  return `
    ${demo}
    <script>
      var backdrop = document.getElementsByClassName('modal-backdrop')[0];
      if (typeof(backdrop) != 'undefined' && backdrop != null) {
        backdrop.remove()
        document.body.removeAttribute("style")
      }
      var languageModal = new bootstrap.Modal(document.getElementById('languageModal'))
      languageModal.show()
    </script>
    `;
};

const baseData = {
  content_type: "multilingual",
  title: "Demo page",
  footer: layout.footer,
  with_banner: true,
  with_header: true,
  with_footer: true,
  banner: banner,
  content: content,
  feedback: feedback,
  share: share,
};

const neutralData = {
  ...baseData,
  header: MultilingualDataNeutral,
};

const ECData = {
  ...baseData,
  header: MultilingualDataEC,
};

const EUData = {
  ...baseData,
  header: MultilingualDataEU,
};

export default {
  title: "Features/Multilingual",
  decorators: [withCode, withDesign, openModal],
  parameters: {
    layout: "fullscreen",
    controls: { disable: true },
    design: [
      {
        name: "Mockup",
        type: "figma",
        url: "https://www.figma.com/file/NQlGvTiTXZYN8TwY2Ur5EI/BCL-Features?node-id=5477%3A223304",
      },
    ],
  },
};

export const MultilingualNeutral = () => contentType(correctPaths(neutralData));
MultilingualNeutral.storyName = "Neutral";

export const MultilingualEC = () => contentType(correctPaths(ECData));
MultilingualEC.storyName = "EC";

export const MultilingualEU = () => contentType(correctPaths(EUData));
MultilingualEU.storyName = "EU";

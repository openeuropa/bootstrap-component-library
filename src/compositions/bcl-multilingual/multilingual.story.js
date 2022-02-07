import { withDesign } from "storybook-addon-designs";
import MultilingualDataEU from "@openeuropa/bcl-multilingual/data/data--eu.js";
import MultilingualDataEC from "@openeuropa/bcl-multilingual/data/data--ec.js";
import MultilingualDataNeutral from "@openeuropa/bcl-multilingual/data/data--neutral.js";
import content from "@openeuropa/bcl-news/data/data_content.js";
import banner from "@openeuropa/bcl-content-banner/data/data.js";
import contentType from "@openeuropa/bcl-base-templates/content-type.html.twig";
import footer from "@openeuropa/bcl-data-footer/data";
import { correctPaths } from "@openeuropa/bcl-story-utils";
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
      }
      var languageModal = new bootstrap.Modal(document.getElementById('languageModal'))
      languageModal.show()
    </script>
    `;
};

const baseData = {
  content_type: "multilingual",
  page_title: "Demo page",
  footer: footer,
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
  decorators: [withDesign, openModal],
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

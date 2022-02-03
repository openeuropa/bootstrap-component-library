import { withDesign } from "storybook-addon-designs";
import MultilingualDataEU from "@openeuropa/bcl-multilingual/data/data--eu.js";
import MultilingualDataEC from "@openeuropa/bcl-multilingual/data/data--ec.js";
import MultilingualDataNeutral from "@openeuropa/bcl-multilingual/data/data--neutral.js";
import header from "@openeuropa/bcl-header/header.html.twig";
import { correctPaths } from "@openeuropa/bcl-story-utils";

const openModal = (story) => {
  const demo = story();
  return `
    ${demo}
    <script>
      var backdrop = document.getElementsByClassName('modal-backdrop')[0];
      if (typeof(backdrop) != 'undefined' && backdrop != null) {
        backdrop.remove()
      }
      var languageModal = new bootstrap.Modal(document.getElementById('languageModal', { backdrop: false }))
      languageModal.show()
    </script>
    `;
};

export default {
  title: "Features/Multilingual",
  decorators: [withDesign, openModal],
  parameters: {
    layout: "fullscreen",
    design: [
      {
        name: "Mockup",
        type: "figma",
        url: "https://www.figma.com/file/NQlGvTiTXZYN8TwY2Ur5EI/BCL-Features?node-id=5568%3A231237",
      },
    ],
  },
};

export const MultilingualNeutral = () =>
  header(correctPaths(MultilingualDataNeutral));
MultilingualNeutral.storyName = "Neutral";

export const MultilingualEC = () => header(correctPaths(MultilingualDataEC));
MultilingualEC.storyName = "EC";

export const MultilingualEU = () => header(correctPaths(MultilingualDataEU));
MultilingualEU.storyName = "EU";

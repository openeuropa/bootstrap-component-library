import { withDesign } from "storybook-addon-designs";
import { initBadges, correctPaths } from "@openeuropa/bcl-story-utils";
import header from "@openeuropa/bcl-data-header/data--simple";
import footer from "@openeuropa/bcl-data-footer/data";
import banner from "@openeuropa/bcl-contact-form/data/data-banner";
import form from "@openeuropa/bcl-contact-form/data/data-form";
import formError from "@openeuropa/bcl-contact-form/data/data-form-error";
import success from "@openeuropa/bcl-contact-form/data/data-success";
import error from "@openeuropa/bcl-contact-form/data/data-error";
import contactForm from "@openeuropa/bcl-contact-form/contact-form.html.twig";

const share = `<div class="bg-gray-200 py-4 text-center">Share module here</div>`;
const baseData = {
  content_type: "contact-form",
  banner,
  header,
  footer,
  share,
  with_banner: true,
  with_header: true,
  with_footer: true,
  with_sidebar: false,
};

const dataDefault = {
  ...baseData,
  form,
};

const dataError = {
  ...baseData,
  form: formError,
  messages: [error],
};

const dataSuccess = {
  ...dataDefault,
  messages: [success],
};
console.log(dataError);
export default {
  title: "Pages/Contact form",
  decorators: [withDesign],
  parameters: {
    layout: "fullscreen",
    controls: {
      disable: true,
    },
    design: [
      {
        name: "Mockup - Contact form",
        type: "figma",
        url: "https://www.figma.com/file/NQlGvTiTXZYN8TwY2Ur5EI/BCL-Features?node-id=5191%3A180830",
      },
    ],
  },
};

export const Contact = () => contactForm(correctPaths(dataDefault));
console.log({ ...baseData, dataDefault });

Contact.storyName = "Default";

export const Error = () => contactForm(correctPaths(dataError));

Error.storyName = "Error state";

export const Success = () => contactForm(correctPaths(dataSuccess));

Success.storyName = "Success state";

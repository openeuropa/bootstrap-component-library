import { correctPaths } from "@openeuropa/bcl-story-utils";

import header from "@openeuropa/bcl-data-header/data--simple";
import footer from "@openeuropa/bcl-data-footer/data";
import banner from "@openeuropa/bcl-contact-form/data/data--banner";
import form from "@openeuropa/bcl-contact-form/data/data--form.js";
import formError from "@openeuropa/bcl-contact-form/data/data--form-error";
import success from "@openeuropa/bcl-contact-form/data/data--success";
import error from "@openeuropa/bcl-contact-form/data/data--error";
import contactForm from "@openeuropa/bcl-contact-form/contact-form.html.twig";

const baseData = {
  content_type: "contact-form",
  banner,
  header,
  footer,
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

const clientValidation = (story) => {
  const demo = story();
  return `<script>
    var form = document.querySelector(".needs-validation");
    form.addEventListener(
      "submit",
      function (event) {
        if (!form.checkValidity()) {
          event.preventDefault();
          event.stopPropagation();
        }
    
        form.classList.add("was-validated");
      },
      false
    );
  </script>${demo}`;
};

export default {
  title: "Paragraphs/Contact",
  decorators: [clientValidation],
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
    badges: ["stable", "deprecated"],
  },
};

export const Contact = () => contactForm(correctPaths(dataDefault));

Contact.storyName = "Default";

export const Error = () => contactForm(correctPaths(dataError));

Error.storyName = "Error state";

export const Success = () => contactForm(correctPaths(dataSuccess));

Success.storyName = "Success state";

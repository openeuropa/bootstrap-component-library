import { withDesign } from "storybook-addon-designs";
import { within, userEvent } from "@storybook/testing-library";
import isChromatic from "chromatic/isChromatic";
import { correctPaths, initScrollspy } from "@openeuropa/bcl-story-utils";
import header from "@openeuropa/bcl-data-header/data--simple";
import footer from "@openeuropa/bcl-data-footer/data";
import content from "@openeuropa/bcl-news/data/data--content";
import banner from "@openeuropa/bcl-content-banner/data/data";
import sidebar from "@openeuropa/bcl-inpage-navigation/data/data--simple";
import blockData from "@openeuropa/bcl-subscription-block/data";
import drupalAttribute from "drupal-attribute";

import subscriptionPage from "@openeuropa/bcl-subscription/subscription.html.twig";
import subscriptionPageData from "@openeuropa/bcl-subscription/data/data";
import modalData from "@openeuropa/bcl-subscription/data/data--modal";
const chromatic = process.env.STORYBOOK_ENV;

if (isChromatic()) {
  banner.image.classes = banner.image.classes
    ? `${banner.image.classes} chromatic-ignore`
    : "chromatic-ignore";
}

const demoData = {
  content_type: "subscription",
  page_title: "Subscription",
  header: header,
  footer: {
    ...footer,
    attributes: new drupalAttribute().addClass("mt-4"),
  },
  with_banner: true,
  with_header: true,
  with_footer: true,
  sidebar: sidebar,
  subscription: blockData,
  modal: modalData,
  banner: {
    ...banner,
    ...subscriptionPageData,
  },
  content: content,
};

const clientValidation = (story) => {
  const demo = story();
  return `<script>
  var backdrop = document.getElementsByClassName('modal-backdrop')[0];
  if (typeof(backdrop) != 'undefined' && backdrop != null) {
    backdrop.remove();
    document.body.removeAttribute("style")
  }

  var submit = document.querySelector('.form-submit');
  var successAlert = document.querySelector('.success-alert');
  var errorAlert = document.querySelector('.error-alert');
  var form = document.querySelector('.needs-validation');

  submit.addEventListener('click', function () {
    successAlert.classList.add("d-none")
    errorAlert.classList.add("d-none")
    if (!form.checkValidity()) {
      event.preventDefault()
      event.stopPropagation()
      errorAlert.classList.remove("d-none")
    } else {
      successAlert.classList.remove("d-none")
      form.closest('.modal-body').remove();
      submit.classList.add('d-none')
    }
    
    form.classList.add('was-validated')
  });
  </script>${demo}`;
};

const openModal = (story) => {
  const demo = story();
  return `
    ${demo}
    <script>
      var backdrop = document.getElementsByClassName('modal-backdrop')[0];
      if (typeof(backdrop) != 'undefined' && backdrop != null) {
        backdrop.remove()
      }
      var subscribeModal = new bootstrap.Modal(document.getElementById('subscribeModal'))
      subscribeModal.show()
    </script>
    `;
};

const successState = (story) => {
  const demo = story();
  return `
    ${demo}
    <script>
      var submit = document.querySelector('.form-submit');
      var successAlert = document.querySelector('.success-alert');
      var form = document.querySelector('.needs-validation');

      successAlert.classList.remove("d-none")
      form.closest('.modal-body').remove();
      submit.classList.add('d-none')
    </script>
    `;
};

const errorState = (story) => {
  const demo = story();
  return `
    ${demo}
    <script>
      var errorAlert = document.querySelector('.error-alert');
      var form = document.querySelector('.needs-validation');
    
      errorAlert.classList.remove("d-none")
      form.classList.add('was-validated')
    </script>
    `;
};

export default {
  title: "Features/Subscription",
  decorators: [withDesign, initScrollspy],
  parameters: {
    layout: "fullscreen",
    controls: { disable: true },
    badges: ["stable"],
    design: [
      {
        name: "Mockup",
        type: "figma",
        url: "https://www.figma.com/file/NQlGvTiTXZYN8TwY2Ur5EI/BCL-Features?node-id=5859%3A239083",
      },
    ],
  },
};

export const Default = () => subscriptionPage(correctPaths(demoData));
Default.decorators = [clientValidation];

if (isChromatic() || chromatic) {
  Default.play = async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const button = canvas.getAllByText("Subscribe", {
      selector: "button",
    });
    await userEvent.click(button[0]);
  };
}

export const Success = () => subscriptionPage(correctPaths(demoData));
Success.decorators = [openModal, successState];

export const Error = () => subscriptionPage(correctPaths(demoData));
Error.decorators = [openModal, errorState];

import { withDesign } from "storybook-addon-designs";
import withCode from "@openeuropa/storybook-addon-code";
import { within, userEvent } from "@storybook/testing-library";
import isChromatic from "chromatic/isChromatic";
import {
  correctPaths,
  initScrollspy,
  initListings,
} from "@openeuropa/bcl-story-utils";

import {
  demoData,
  demoDataEmailForm,
  demoDataEmailConfirmationForm,
  demoDataEmailConfirmedForm,
  demoDataManageForm,
} from "@openeuropa/bcl-subscription/data/data";
import subscriptionPage from "@openeuropa/bcl-subscription/subscription.html.twig";
import subscriptionForm from "@openeuropa/bcl-subscription/subscription-form.html.twig";

const chromatic = process.env.STORYBOOK_ENV;

const clientValidation = (story) => {
  const demo = story();
  return `<script>
    var backdrop = document.getElementsByClassName("modal-backdrop")[0];
    if (typeof backdrop != "undefined" && backdrop != null) {
      backdrop.remove();
      document.body.removeAttribute("style");
    }
    
    var submit = document.querySelector(".form-submit");
    var successAlert = document.querySelector(".success-alert");
    var errorAlert = document.querySelector(".error-alert");
    var form = document.querySelector(".needs-validation");
    
    submit.addEventListener("click", function () {
      successAlert.classList.add("d-none");
      errorAlert.classList.add("d-none");
      if (!form.checkValidity()) {
        event.preventDefault();
        event.stopPropagation();
        errorAlert.classList.remove("d-none");
      } else {
        successAlert.classList.remove("d-none");
        form.closest(".modal-body").remove();
        submit.classList.add("d-none");
      }
    
      form.classList.add("was-validated");
    });
  </script>${demo}`;
};

export default {
  title: "Features/Subscription",
  decorators: [withCode, withDesign, initScrollspy],
  parameters: {
    layout: "fullscreen",
    controls: { disable: true },
    badges: ["stable"],
    design: [
      {
        name: "Mockup",
        type: "figma",
        url: "https://www.figma.com/file/NQlGvTiTXZYN8TwY2Ur5EI/BCL-Features?node-id=10449%3A244556",
      },
    ],
  },
};

export const ModalOpened = () => subscriptionPage(correctPaths(demoData));
ModalOpened.decorators = [clientValidation];

if (isChromatic() || chromatic) {
  ModalOpened.play = async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const button = canvas.getAllByText("Subscribe", {
      selector: "button",
    });
    await userEvent.click(button[0]);
  };
}

export const EmailForm = () =>
  subscriptionForm(correctPaths(demoDataEmailForm));
EmailForm.parameters = {
  design: [
    {
      name: "Mockup",
      type: "figma",
      url: "https://www.figma.com/file/G8nR0RrtGWypLbdv9VXElT/BCL-Features---03?node-id=16828%3A142290&t=9asTp1JeDni0qsE4-0",
    },
  ],
};

export const EmailConfirmation = () =>
  subscriptionForm(correctPaths(demoDataEmailConfirmationForm));
EmailConfirmation.parameters = {
  design: [
    {
      name: "Mockup",
      type: "figma",
      url: "https://www.figma.com/file/G8nR0RrtGWypLbdv9VXElT/BCL-Features---03?node-id=16828%3A142290&t=9asTp1JeDni0qsE4-0",
    },
  ],
};

export const EmailConfirmed = () =>
  subscriptionForm(correctPaths(demoDataEmailConfirmedForm));
EmailConfirmed.parameters = {
  design: [
    {
      name: "Mockup",
      type: "figma",
      url: "https://www.figma.com/file/G8nR0RrtGWypLbdv9VXElT/BCL-Features---03?node-id=16828%3A142290&t=9asTp1JeDni0qsE4-0",
    },
  ],
};

export const ManageForm = () =>
  subscriptionForm(correctPaths(demoDataManageForm));
ManageForm.decorators = [initListings];
ManageForm.parameters = {
  design: [
    {
      name: "Mockup",
      type: "figma",
      url: "https://www.figma.com/file/G8nR0RrtGWypLbdv9VXElT/BCL-Features---03?node-id=16828%3A142290&t=9asTp1JeDni0qsE4-0",
    },
  ],
};

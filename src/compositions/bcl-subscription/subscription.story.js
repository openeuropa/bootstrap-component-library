import { correctPaths, initScrollspy } from "@openeuropa/bcl-story-utils";

import demoData from "@openeuropa/bcl-subscription/data/data";
import subscriptionPage from "@openeuropa/bcl-subscription/subscription.html.twig";

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

const openModal = (story) => {
  const demo = story();
  return `
    ${demo}
    <script>
      var backdrop = document.getElementsByClassName("modal-backdrop")[0];
      if (typeof backdrop != "undefined" && backdrop != null) {
        backdrop.remove();
      }
      var subscribeModal = new bootstrap.Modal(
        document.getElementById("subscribeModal")
      );
      subscribeModal.show();
    </script>
    `;
};

const successState = (story) => {
  const demo = story();
  return `
    ${demo}
    <script>
      var submit = document.querySelector(".form-submit");
      var successAlert = document.querySelector(".success-alert");
      var form = document.querySelector(".needs-validation");
      
      successAlert.classList.remove("d-none");
      form.closest(".modal-body").remove();
      submit.classList.add("d-none");
    </script>
    `;
};

const errorState = (story) => {
  const demo = story();
  return `
    ${demo}
    <script>
      var errorAlert = document.querySelector(".error-alert");
      var form = document.querySelector(".needs-validation");
      
      errorAlert.classList.remove("d-none");
      form.classList.add("was-validated");
    </script>
    `;
};

export default {
  title: "Features/Subscription",
  decorators: [initScrollspy],
  parameters: {
    layout: "fullscreen",
    controls: { disable: true },
    badges: ["stable", "deprecated"],
    design: [
      {
        name: "Mockup",
        type: "figma",
        url: "https://www.figma.com/file/NQlGvTiTXZYN8TwY2Ur5EI/BCL-Features?node-id=10449%3A244556",
      },
    ],
  },
};

export const Default = () => subscriptionPage(correctPaths(demoData));
Default.decorators = [clientValidation];

export const SuccessState = () => subscriptionPage(correctPaths(demoData));
SuccessState.decorators = [openModal, successState];
SuccessState.parameters = {
  design: [
    {
      name: "Mockup",
      type: "figma",
      url: "https://www.figma.com/file/NQlGvTiTXZYN8TwY2Ur5EI/BCL-Features?node-id=10449%3A244564",
    },
  ],
};

export const ErrorState = () => subscriptionPage(correctPaths(demoData));
ErrorState.decorators = [openModal, errorState];
ErrorState.parameters = {
  design: [
    {
      name: "Mockup",
      type: "figma",
      url: "https://www.figma.com/file/NQlGvTiTXZYN8TwY2Ur5EI/BCL-Features?node-id=10449%3A244562",
    },
  ],
};

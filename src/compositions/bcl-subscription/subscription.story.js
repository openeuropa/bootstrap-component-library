import { withDesign } from "storybook-addon-designs";
import { correctPaths, initScrollspy } from "@openeuropa/bcl-story-utils";
import subscriptionModal from "@openeuropa/bcl-subscription/subscription-modal.html.twig";
import subscriptionBlock from "@openeuropa/bcl-subscription/subscription-block.html.twig";
import modalData from "@openeuropa/bcl-subscription/data/data_modal.js";
import blockData from "@openeuropa/bcl-subscription/data/data_block.js";

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
  title: "Compositions/Subscription",
  decorators: [withDesign, initScrollspy],
  parameters: {
    layout: "fullscreen",
    controls: { disable: true },
    design: [
      {
        name: "Mockup",
        type: "figma",
        url: "https://www.figma.com/file/NQlGvTiTXZYN8TwY2Ur5EI/BCL-Features?node-id=5859%3A239083",
      },
    ],
  },
};

export const Block = () => subscriptionBlock(correctPaths(blockData));
Block.decorators = [clientValidation];

export const Modal = () => subscriptionModal(correctPaths(modalData));
Modal.decorators = [openModal, clientValidation];

export const ModalSuccess = () => subscriptionModal(correctPaths(modalData));
ModalSuccess.decorators = [openModal, successState];

export const ModalError = () => subscriptionModal(correctPaths(modalData));
ModalError.decorators = [openModal, errorState];

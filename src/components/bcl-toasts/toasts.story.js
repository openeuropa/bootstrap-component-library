import { withDesign } from "storybook-addon-designs";
import withCode from "@openeuropa/storybook-addon-code";

import demoSingle from "@openeuropa/bcl-data-toasts/data.js";
import demoMultiple from "@openeuropa/bcl-data-toasts/data--multiple";
import toasts from "@openeuropa/bcl-toast/toasts.html.twig";

const getArgs = (data) => ({
  with_wrapper: data.with_wrapper || false,
  with_container: data.with_container || false,
});

const getArgTypes = () => ({
  with_wrapper: {
    name: "with a wrapper",
    type: { name: "boolean" },
    description: "With an external wrapper",
    table: {
      type: { summary: "boolean" },
      defaultValue: { summary: "false" },
      category: "Wrapper",
    },
  },
  with_container: {
    name: "with a container",
    type: { name: "boolean" },
    description: "With a container for multiple toasts",
    table: {
      type: { summary: "boolean" },
      defaultValue: { summary: "false" },
      category: "Container",
    },
  },
});

const initToast = (story) => {
  const demo = story();
  return `
    <script>
      var toastElList = [].slice.call(document.querySelectorAll(".toast"));
      var options = { autohide: false };
      var toastList = toastElList.map(function (toastEl) {
        var toast = new bootstrap.Toast(toastEl, options);
        toast.show();
      });
    </script>
  ${demo}`;
};

const applyArgs = (data, args) => Object.assign(data, args);

// Stories
export default {
  title: "Components/Toasts",
  decorators: [withCode, withDesign, initToast],
  parameters: {
    design: [
      {
        name: "Mockup",
        type: "figma",
        url: "https://www.figma.com/file/7aJedLkk8hiDoD3RcxTnQi/BCL-Starter-kit?node-id=5118%3A65509",
      },
      {
        name: "Bootstrap docs",
        type: "iframe",
        url: "https://getbootstrap.com/docs/5.1/components/toasts/",
      },
    ],
  },
};

export const Toast = (args) => toasts(applyArgs(demoSingle, args));

Toast.storyName = "Single toast";
Toast.args = getArgs(demoSingle);
Toast.argTypes = getArgTypes();

export const Toasts = (args) => toasts(applyArgs(demoMultiple, args));

Toasts.storyName = "Multiple toasts";
Toasts.args = getArgs(demoMultiple);
Toasts.argTypes = getArgTypes();

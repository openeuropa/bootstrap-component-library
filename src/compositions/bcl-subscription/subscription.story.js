import { withDesign } from "storybook-addon-designs";
import { correctPaths } from "@openeuropa/bcl-story-utils";
import header from "@openeuropa/bcl-data-header/data--simple";
import footer from "@openeuropa/bcl-data-footer/data";
import content from "@openeuropa/bcl-news/data/data_content.js";
import banner from "@openeuropa/bcl-content-banner/data/data.js";
import subscription from "@openeuropa/bcl-subscription/subscription.html.twig";
import block_data from "@openeuropa/bcl-subscription/data/data.js";
import modal_data from "@openeuropa/bcl-subscription/data/data-modal.js";

const baseData = {
  content_type: "news",
  page_title: "News",
  header: header,
  footer: footer,
  with_banner: true,
  with_header: true,
  with_footer: true,
};

const demoData = {
  ...baseData,
  subscription: block_data,
  subscription_modal: modal_data,
  banner: banner,
  content: content,
};

const clientValidation = (story) => {
  const demo = story();
  return `<script>
  var submit = document.querySelector('.form-submit');
  var form = document.querySelector('.needs-validation');

  submit.addEventListener('click', function () {
    if (!form.checkValidity()) {
      event.preventDefault()
      event.stopPropagation()
      form.classList.add('was-validated')
    } else {
      form.submit();
    }
  });
  </script>${demo}`;
};

export default {
  title: "Features/Subscription",
  decorators: [withDesign],
  parameters: {
    design: [
      {
        name: "Mockup",
        type: "figma",
        url: "https://www.figma.com/file/NQlGvTiTXZYN8TwY2Ur5EI/BCL-Features?node-id=5859%3A239084",
      },
    ],
  },
};

export const Default = () => subscription(correctPaths(demoData));
Default.decorators = [clientValidation];

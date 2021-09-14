import { withDesign } from "storybook-addon-designs";
import footer from "@openeuropa/bcl-footer/footer.html.twig";
import footerData from "@openeuropa/bcl-data-footer/data";

export default {
  title: "Compositions/Footer",
  decorators: [withDesign],
  parameters: {
    controls: {
      disable: true,
    },
  },
};

export const Footer = () => footer(footerData);

Footer.storyName = "default";
Footer.parameters = {
  design: {
    type: "figma",
    url: "https://www.figma.com/file/7aJedLkk8hiDoD3RcxTnQi/BCL-Starter-kit?node-id=4195%3A41441",
  },
};

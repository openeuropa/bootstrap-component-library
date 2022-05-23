import withCode from "@openeuropa/storybook-addon-code";
import section from "@openeuropa/bcl-section/section.html";

export default {
  title: "Compositions/Section",
  decorators: [withCode],
  parameters: {
    controls: { disable: true },
    viewport: {
      defaultViewport: "1366x768",
    },
  },
};

export const Default = () => section;

import { withDesign } from "storybook-addon-designs";
import demoData from "@openeuropa/bcl-data-alert/data.js";
import alert from "./alert.html.twig";
import { getVariants } from "@openeuropa/bcl-story-utils";

const getArgs = (data) => {
  return {
    variant: data.variant || "primary",
    message: data.message,
    heading: data.heading,
    dismissible: true,
    animated_dismiss: true,
  };
};

const getArgTypes = (data) => {
  return {
    variant: {
      type: { name: "select" },
      options: getVariants(),
      description: "Variant of the alert",
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "primary" },
        category: "Style",
      },
    },
    message: {
      type: { name: "string" },
      description: "Content of the alert",
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "" },
        category: "Content",
      },
    },
    heading: {
      type: { name: "string" },
      description: "Heading of the alert",
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "" },
        category: "Content",
      },
    },
    dismissible: {
      type: { name: "boolean" },
      description: "Enable the close button",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "true" },
        category: "Content",
      },
    },
    animated_dismiss: {
      type: { name: "boolean" },
      description: "Enable the animation on dismiss",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "true" },
        category: "Style",
      },
    },
  };
};

const applyArgs = (data, args) => {
  return Object.assign(data, args);
};

export default {
  title: "Components/Alert",
  decorators: [withDesign],
  parameters: {
    design: [
      {
        name: "Wireframe",
        type: "figma",
        url: "https://www.figma.com/file/Ug1zpiazvPT8la7ySWZy47/OEL-Wireframe-kit?node-id=2713%3A1",
      },
      {
        name: "Mockup",
        type: "figma",
        url: "https://www.figma.com/file/MPL8vE2LF4RQKLY4HcxHTs/OEL-Mockup-kit?node-id=1%3A542",
      },
      {
        name: "Bootstrap docs",
        type: "iframe",
        url: "https://getbootstrap.com/docs/5.0/components/alerts/",
      },
    ],
  },
};

export const Primary = (args) => alert(applyArgs(demoData, args));

Primary.storyName = "Primary (default)";
Primary.args = getArgs(demoData);
Primary.argTypes = getArgTypes(demoData);

const dataSecondary = { ...demoData, variant: "secondary" };
export const Secondary = (args) => alert(applyArgs(dataSecondary, args));

Secondary.storyName = "Secondary";
Secondary.args = getArgs(dataSecondary);
Secondary.argTypes = getArgTypes(dataSecondary);

const dataSuccess = { ...demoData, variant: "success" };
export const Success = (args) => alert(applyArgs(dataSuccess, args));

Success.storyName = "Success";
Success.args = getArgs(dataSuccess);
Success.argTypes = getArgTypes(dataSuccess);

const dataWarning = { ...demoData, variant: "warning" };
export const Warning = (args) => alert(applyArgs(dataWarning, args));

Warning.storyName = "Warning";
Warning.args = getArgs(dataWarning);
Warning.argTypes = getArgTypes(dataWarning);

const dataDanger = { ...demoData, variant: "danger" };
export const Danger = (args) => alert(applyArgs(dataDanger, args));

Danger.storyName = "Danger";
Danger.args = getArgs(dataDanger);
Danger.argTypes = getArgTypes(dataDanger);

const dataInfo = { ...demoData, variant: "info" };
export const Info = (args) => alert(applyArgs(dataInfo, args));

Info.storyName = "Info";
Info.args = getArgs(dataInfo);
Info.argTypes = getArgTypes(dataInfo);

const dataLight = { ...demoData, variant: "light" };
export const Light = (args) => alert(applyArgs(dataLight, args));

Light.storyName = "Light";
Light.args = getArgs(dataLight);
Light.argTypes = getArgTypes(dataLight);

const dataDark = { ...demoData, variant: "dark" };
export const Dark = (args) => alert(applyArgs(dataDark, args));

Dark.storyName = "Dark";
Dark.args = getArgs(dataDark);
Dark.argTypes = getArgTypes(dataDark);

import {
  initBadges,
  getVariants,
  correctPaths,
} from "@openeuropa/bcl-story-utils";
import { DrupalAttribute } from "drupal-attribute";

import demoData from "@openeuropa/bcl-data-badge/data.js";
import badge from "@openeuropa/bcl-badge/badge.html.twig";

const getArgs = (data) => ({
  label: data.label,
  url: "",
  title: data.label,
  background: data.background || "primary",
  rounded_pill: false,
  dismissible: false,
  outline: false,
  assistive_text: "",
});

const getArgTypes = () => ({
  label: {
    type: { name: "string" },
    description: "Label of the badge",
    table: {
      type: { summary: "string" },
      defaultValue: { summary: "" },
      category: "Content",
    },
  },
  url: {
    type: { name: "string" },
    description: "URL of the badge",
    table: {
      type: { summary: "string" },
      defaultValue: { summary: "" },
      category: "Content",
    },
  },
  dismissible: {
    type: { name: "boolean" },
    description: "Dismissible badge",
    table: {
      type: { summary: "boolean" },
      defaultValue: { summary: "false" },
      category: "Content",
    },
  },
  title: {
    type: { name: "string" },
    description: "Title attribute if URL is present",
    table: {
      type: { summary: "string" },
      defaultValue: { summary: "" },
      category: "Content",
    },
  },
  background: {
    type: { name: "select" },
    options: getVariants(),
    description: "Background color of the badge",
    table: {
      type: { summary: "string" },
      defaultValue: { summary: "primary" },
      category: "Style",
    },
  },
  rounded_pill: {
    type: { name: "boolean" },
    description: "Make the badge a rounded pill",
    table: {
      type: { summary: "boolean" },
      defaultValue: { summary: "false" },
      category: "Style",
    },
  },
  outline: {
    type: { name: "boolean" },
    description: "Outline",
    table: {
      type: { summary: "boolean" },
      defaultValue: { summary: "false" },
      category: "Style",
    },
  },
  assistive_text: {
    name: "assistive text",
    type: { name: "string" },
    description: "Assistive hidden text, for accessibility",
    table: {
      type: { summary: "string" },
      defaultValue: { summary: "" },
      category: "Accessibility",
    },
  },
});

const applyArgs = (data, args) =>
  correctPaths({ ...data, ...args, attributes: new DrupalAttribute() });

export default {
  title: "Components/Badge",
  decorators: [initBadges],
  parameters: {
    badges: ["deprecated"],
    design: [
      {
        name: "Mockup",
        type: "figma",
        url: "https://www.figma.com/design/zmegk96z70Cp7pdXSoIZT9/OEL-Design-System---V2.0.2?node-id=25976-5370",
      },
      {
        name: "Bootstrap docs",
        type: "iframe",
        url: "https://getbootstrap.com/docs/5.3/components/badge/",
      },
    ],
  },
};

export const Primary = (args) => badge(applyArgs(demoData, args));

Primary.storyName = "Primary (default)";
Primary.args = getArgs(demoData);
Primary.argTypes = getArgTypes(demoData);

const dataSecondary = { ...demoData, background: "secondary" };
export const Secondary = (args) => badge(applyArgs(dataSecondary, args));

Secondary.storyName = "Secondary";
Secondary.args = getArgs(dataSecondary);
Secondary.argTypes = getArgTypes(dataSecondary);

const dataSuccess = { ...demoData, background: "success" };
export const Success = (args) => badge(applyArgs(dataSuccess, args));

Success.storyName = "Success";
Success.args = getArgs(dataSuccess);
Success.argTypes = getArgTypes(dataSuccess);

const dataWarning = { ...demoData, background: "warning" };
export const Warning = (args) => badge(applyArgs(dataWarning, args));

Warning.storyName = "Warning";
Warning.args = getArgs(dataWarning);
Warning.argTypes = getArgTypes(dataWarning);

const dataDanger = { ...demoData, background: "danger" };
export const Danger = (args) => badge(applyArgs(dataDanger, args));

Danger.storyName = "Danger";
Danger.args = getArgs(dataDanger);
Danger.argTypes = getArgTypes(dataDanger);

const dataInfo = { ...demoData, background: "info" };
export const Info = (args) => badge(applyArgs(dataInfo, args));

Info.storyName = "Info";
Info.args = getArgs(dataInfo);
Info.argTypes = getArgTypes(dataInfo);

const dataLight = { ...demoData, background: "light" };
export const Light = (args) => badge(applyArgs(dataLight, args));

Light.storyName = "Light";
Light.args = getArgs(dataLight);
Light.argTypes = getArgTypes(dataLight);

const dataDark = { ...demoData, background: "dark" };
export const Dark = (args) => badge(applyArgs(dataDark, args));

Dark.storyName = "Dark";
Dark.args = getArgs(dataDark);
Dark.argTypes = getArgTypes(dataDark);

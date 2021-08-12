import demoData from "../data/navbar/data.js";
import demoLoggedInData from "../data/navbar/dataLoggedIn.js";
import navbar from "../templates/bcl-navbar/navbar.html.twig";
import defaultSprite from "@openeuropa/bcl-bootstrap/bootstrap-icons.svg";

const getArgs = (data) => {
  return {
    breakpoint: data.breakpoint,
    brand: data.brand,
    collapse_id: data.collapse_id,
    list_id: data.list_id,
    anchors: data.anchors,
    buttons: data.buttons,
  };
};

const getArgTypes = (data) => {
  return {
    breakpoint: {
      type: { name: "select" },
      description: "Breakpoint from which the navbar expands. Leave empty for it to be always expanded.",
      options: ["", "xs", "sm", "md", "lg", "xl"],
      control: {
        type: "select",
        labels: {
          "": "",
          xs: "xs",
          sm: "sm",
          md: "md",
          lg: "lg",
          xl: "xl",
        },
      },
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "" },
        category: "Style",
      },
    },
    brand: {
      name: "brand",
      type: { name: "object" },
      description: "Logo as image and optional motto.",
      table: {
        type: { summary: "object" },
        defaultValue: { summary: "{}" },
        category: "Content",
      },
      control: {
        type: "object",
      },
    },
    collapse_id: {
      type: { name: "string" },
      description: "Id for the navbar's collapse (the div that will be displayed/hidden by the user's click on the button 'navbar-toggler'. Only required if 'breakpoint' is not empy.",
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "" },
        category: "Content",
      },
    },
    list_id: {
      type: { name: "string" },
      description: "Id for the ",
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "" },
        category: "Content",
      },
    },
    anchors: {
      name: "anchors",
      type: { name: "object" },
      description: "Link elements of the menu (expected to lead to a different page).",
      table: {
        type: { summary: "object" },
        defaultValue: { summary: "{}" },
        category: "Content",
      },
      control: {
        type: "object",
      },
    },
    buttons: {
      name: "anchors",
      type: { name: "object" },
      description: "Button elements of the menu (expected to imply an action different than leaving for another page).",
      table: {
        type: { summary: "object" },
        defaultValue: { summary: "{}" },
        category: "Content",
      },
      control: {
        type: "object",
      },
    },
  };
};

const applyArgs = (data, args) => {
  return Object.assign(data, args);
};

export default {
  title: "Components/Navbar",
};

export const Anonymous = (args) => navbar(applyArgs(demoData, args));

Anonymous.storyName = "Anonymous user";
Anonymous.args = getArgs(demoData);
Anonymous.argTypes = getArgTypes(demoData);

export const LoggedIn = (args) => navbar(applyArgs(demoLoggedInData, args));

LoggedIn.storyName = "Logged in user";
LoggedIn.args = getArgs(demoLoggedInData);
LoggedIn.argTypes = getArgTypes(demoLoggedInData);


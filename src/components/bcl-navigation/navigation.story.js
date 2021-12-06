import { withDesign } from "storybook-addon-designs";
import demoData from "@openeuropa/bcl-data-navigation/data.js";
import demoTabsData from "@openeuropa/bcl-data-navigation/dataTabs.js";
import demoDataCustom from "@openeuropa/bcl-data-navigation/dataCustom.js";
import demoDataMultiple from "@openeuropa/bcl-data-navigation/dataMultiple.js";
import navigation from "@openeuropa/bcl-navigation/navigation.html.twig";
import drupalAttribute from "drupal-attribute";

const sidebar = (story) => {
  const demo = story();
  return `
    <div class="row">
      <div class="col-12 col-md-4 bg-light py-3">
        ${demo}
      </div>
      <div class="d-none d-md-block col-md-8 py-3">
        <h4>Lorem ipsum</h4>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent hendrerit ac libero efficitur laoreet. Duis vestibulum ultrices lectus et rutrum. Ut interdum enim libero, sed commodo odio eleifend sed. Phasellus maximus est nec diam mollis, eget sollicitudin purus placerat. Nam dapibus neque eget ligula pharetra molestie. Sed fringilla libero sollicitudin nibh vestibulum, vitae auctor urna ornare. Cras dictum pharetra euismod. Sed congue, justo nec fermentum egestas, nibh dolor imperdiet risus, vel accumsan neque nisl ut odio. Vivamus quis condimentum nulla. Maecenas finibus molestie accumsan. Nunc volutpat tellus tortor, non semper mauris laoreet non. Donec blandit placerat enim, in suscipit nulla ullamcorper in. Nullam laoreet dolor ut arcu dapibus euismod. In et cursus justo. Cras cursus hendrerit tortor.</p>
        <h4>Lorem ipsum</h4>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent hendrerit ac libero efficitur laoreet. Duis vestibulum ultrices lectus et rutrum. Ut interdum enim libero, sed commodo odio eleifend sed. Phasellus maximus est nec diam mollis, eget sollicitudin purus placerat. Nam dapibus neque eget ligula pharetra molestie. Sed fringilla libero sollicitudin nibh vestibulum, vitae auctor urna ornare. Cras dictum pharetra euismod. Sed congue, justo nec fermentum egestas, nibh dolor imperdiet risus, vel accumsan neque nisl ut odio. Vivamus quis condimentum nulla. Maecenas finibus molestie accumsan. Nunc volutpat tellus tortor, non semper mauris laoreet non. Donec blandit placerat enim, in suscipit nulla ullamcorper in. Nullam laoreet dolor ut arcu dapibus euismod. In et cursus justo. Cras cursus hendrerit tortor.</p>
        <h4>Lorem ipsum</h4>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent hendrerit ac libero efficitur laoreet. Duis vestibulum ultrices lectus et rutrum. Ut interdum enim libero, sed commodo odio eleifend sed. Phasellus maximus est nec diam mollis, eget sollicitudin purus placerat. Nam dapibus neque eget ligula pharetra molestie. Sed fringilla libero sollicitudin nibh vestibulum, vitae auctor urna ornare. Cras dictum pharetra euismod. Sed congue, justo nec fermentum egestas, nibh dolor imperdiet risus, vel accumsan neque nisl ut odio. Vivamus quis condimentum nulla. Maecenas finibus molestie accumsan. Nunc volutpat tellus tortor, non semper mauris laoreet non. Donec blandit placerat enim, in suscipit nulla ullamcorper in. Nullam laoreet dolor ut arcu dapibus euismod. In et cursus justo. Cras cursus hendrerit tortor.</p>
        <h4>Lorem ipsum</h4>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent hendrerit ac libero efficitur laoreet. Duis vestibulum ultrices lectus et rutrum. Ut interdum enim libero, sed commodo odio eleifend sed. Phasellus maximus est nec diam mollis, eget sollicitudin purus placerat. Nam dapibus neque eget ligula pharetra molestie. Sed fringilla libero sollicitudin nibh vestibulum, vitae auctor urna ornare. Cras dictum pharetra euismod. Sed congue, justo nec fermentum egestas, nibh dolor imperdiet risus, vel accumsan neque nisl ut odio. Vivamus quis condimentum nulla. Maecenas finibus molestie accumsan. Nunc volutpat tellus tortor, non semper mauris laoreet non. Donec blandit placerat enim, in suscipit nulla ullamcorper in. Nullam laoreet dolor ut arcu dapibus euismod. In et cursus justo. Cras cursus hendrerit tortor.</p>
        <h4>Lorem ipsum</h4>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent hendrerit ac libero efficitur laoreet. Duis vestibulum ultrices lectus et rutrum. Ut interdum enim libero, sed commodo odio eleifend sed. Phasellus maximus est nec diam mollis, eget sollicitudin purus placerat. Nam dapibus neque eget ligula pharetra molestie. Sed fringilla libero sollicitudin nibh vestibulum, vitae auctor urna ornare. Cras dictum pharetra euismod. Sed congue, justo nec fermentum egestas, nibh dolor imperdiet risus, vel accumsan neque nisl ut odio. Vivamus quis condimentum nulla. Maecenas finibus molestie accumsan. Nunc volutpat tellus tortor, non semper mauris laoreet non. Donec blandit placerat enim, in suscipit nulla ullamcorper in. Nullam laoreet dolor ut arcu dapibus euismod. In et cursus justo. Cras cursus hendrerit tortor.</p>
      </div>
    </div>`;
};

const getArgs = (data, type) => {
  let args = {
    full_width: false,
    alignment: "",
  };
  if (type === "default") {
    args.pills = data.pills;
    args.vertical = false;
  }

  return args;
};

const getArgTypes = (data, type) => {
  let argTypes = {
    full_width: {
      name: "full width",
      type: { name: "boolean" },
      description: "Full width menu",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
        category: "Style",
      },
    },
    alignment: {
      type: { name: "select" },
      description: "Alignment menu",
      options: ["", "start", "center", "end"],
      control: {
        type: "select",
        labels: {
          "": "none",
          start: "left",
          center: "center",
          end: "right",
        },
      },
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "" },
        category: "Style",
      },
    },
  };
  if (type === "default") {
    argTypes.pills = {
      type: { name: "boolean" },
      description: "Menu items as pills",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
        category: "Style",
      },
    };
    argTypes.vertical = {
      type: { name: "boolean" },
      description: "Vertical menu",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
        category: "Style",
      },
    };
  }
  return argTypes;
};

const resetAttrs = (data) => {
  data.attributes.removeClass("nav-pills");
  data.attributes.removeClass("flex-column");
  data.attributes.removeClass("nav-fill");
  data.attributes.removeClass(`justify-content-${data.alignment}`);
};

const applyArgs = (data, args) => {
  if (!data.attributes) {
    data.attributes = new drupalAttribute();
  }
  resetAttrs(data);
  return Object.assign(data, args);
};

export default {
  title: "Components/Navigation",
  decorators: [withDesign],
  parameters: {
    design: [
      {
        name: "Mockup",
        type: "figma",
        url: "https://www.figma.com/file/7aJedLkk8hiDoD3RcxTnQi/BCL-Starter-kit?node-id=53%3A78",
      },
      {
        name: "Bootstrap docs",
        type: "iframe",
        url: "https://getbootstrap.com/docs/5.0/components/navs-tabs/",
      },
    ],
  },
};

export const Default = (args) => navigation(applyArgs(demoData, args));

Default.args = getArgs(demoData, "default");
Default.argTypes = getArgTypes(demoData, "default");

export const Tabs = (args) => navigation(applyArgs(demoTabsData, args));

Tabs.args = getArgs(demoTabsData);
Tabs.argTypes = getArgTypes(demoTabsData);

export const CustomTabs = (args) => navigation(applyArgs(demoDataCustom, args));

CustomTabs.args = getArgs(demoDataCustom);
CustomTabs.argTypes = getArgTypes(demoDataCustom);

export const NestedLists = (args) =>
  navigation(applyArgs(demoDataMultiple, args));

NestedLists.args = getArgs(demoDataMultiple);
NestedLists.argTypes = getArgTypes(demoDataMultiple);
NestedLists.decorators = [sidebar];
NestedLists.parameters = {
  controls: {
    disable: true,
  },
};

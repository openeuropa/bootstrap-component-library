import colors from "@openeuropa/bcl-colors/colors.html.twig";
import withCode from "@openeuropa/storybook-addon-code";

const getArgs = () => {
  return {
    main_colors: [
      {
        name: "primary",
        value: getComputedStyle(document.documentElement).getPropertyValue(
          "--bs-primary"
        ),
      },
      {
        name: "secondary",
        value: getComputedStyle(document.documentElement).getPropertyValue(
          "--bs-secondary"
        ),
      },
      {
        name: "success",
        value: getComputedStyle(document.documentElement).getPropertyValue(
          "--bs-success"
        ),
      },
      {
        name: "info",
        value: getComputedStyle(document.documentElement).getPropertyValue(
          "--bs-info"
        ),
      },
      {
        name: "warning",
        value: getComputedStyle(document.documentElement).getPropertyValue(
          "--bs-warning"
        ),
      },
      {
        name: "danger",
        value: getComputedStyle(document.documentElement).getPropertyValue(
          "--bs-danger"
        ),
      },
    ],
  };
};

const percentages = [
  -90, -80, -70, -50, -25, -20, -15, 0, 5, 10, 15, 20, 25, 50,
];
let dataColors = {};

let mix = function (color_1, color_2, weight) {
  function d2h(d) {
    return d.toString(16);
  }
  function h2d(h) {
    return parseInt(h, 16);
  }

  weight = 100 - weight;
  weight = typeof weight !== "undefined" ? weight : 50;

  let color = "#";
  color_1 = color_1.replace(/#/g, "");
  color_2 = color_2.replace(/#/g, "");

  for (let i = 0; i <= 5; i += 2) {
    let v1 = h2d(color_1.substr(i, 2)),
      v2 = h2d(color_2.substr(i, 2)),
      val = d2h(Math.round(v2 + (v1 - v2) * (weight / 100.0)));
    while (val.length < 2) {
      val = "0" + val;
    }
    color += val;
  }
  return color;
};

const getArgTypes = () => {
  const argTypes = {
    main_colors: {
      name: "main colors",
      type: { name: "array" },
      description: "array of colors",
      table: {
        type: { summary: "array" },
        category: "Content",
      },
    },
  };

  return argTypes;
};

const applyArgs = (data, args) => {
  args.main_colors.forEach((color) => {
    if (color.value && color.name) {
      let hexColor = color.value;
      let name = color.name;
      dataColors[name] = {
        name: name,
        values: [],
      };
      percentages.forEach((percentage) => {
        let mixedColor = "";
        let percentageString = percentage;
        if (percentage > 0) {
          percentageString = "+" + percentage;
        }
        if (percentage >= 0) {
          mixedColor = mix(hexColor, "#000000", percentage);
        } else {
          percentageString = percentage;
          mixedColor = mix(hexColor, "#ffffff", percentage * -1);
        }
        let obj = {
          percentage: percentageString,
          color: mixedColor,
        };
        dataColors[name].values.push(obj);
      });
    }
  });

  return Object.assign(data, args);
};

export default {
  title: "Resources/Colors",
  decorators: [withCode],
  parameters: {
    design: [
      {
        name: "Mockup",
        type: "figma",
        url: "https://www.figma.com/file/oTSZaVacGNUhOCtd2m30NX/BCL-Starter-kit---Styles?node-id=2859%3A373",
      },
    ],
  },
};

export const Default = (args) =>
  colors(applyArgs({ colors: dataColors }, args));
Default.args = getArgs();
Default.argTypes = getArgTypes();

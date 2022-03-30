import colors from "@openeuropa/bcl-colors/colors.html.twig";

const getArgs = () => {
  return {
    new_color_name: "",
    new_color_hex: "",
  };
};

let semanticColors = [
  "primary",
  "secondary",
  "success",
  "info",
  "warning",
  "danger",
];
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

semanticColors.forEach((color) => {
  let hexColor = getComputedStyle(document.documentElement).getPropertyValue(
    "--bs-" + color
  );
  dataColors[color] = {
    name: color,
    values: [],
  };
  percentages.forEach((percentage) => {
    let mixedColor = "";
    if (percentage >= 0) {
      mixedColor = mix(hexColor, "#000000", percentage);
    } else {
      mixedColor = mix(hexColor, "#ffffff", percentage * -1);
    }
    let obj = {
      percentage: percentage,
      color: mixedColor,
      text_color: percentage > -50 ? "text-white" : "text-dark",
    };
    dataColors[color].values.push(obj);
  });
});

const getArgTypes = (data) => {
  const argTypes = {
    new_color_name: {
      name: "new color name",
      type: { name: "select" },
      description: "Add new color name",
      options: [
        "new-primary",
        "new-secondary",
        "new-success",
        "new-info",
        "new-warning",
        "new-danger",
      ],
      table: {
        type: { summary: "string" },
        category: "Content",
      },
    },
    new_color_hex: {
      name: "new color hex",
      type: { name: "string" },
      description: "hexadecimal color value",
      table: {
        type: { summary: "string" },
        category: "Content",
      },
    },
  };

  return argTypes;
};

const applyArgs = (data, args) => {
  let hexReg = /^#([0-9a-f]{3}){1,2}$/i;
  if (args.new_color_name && hexReg.test(args.new_color_hex)) {
    let hexColor = args.new_color_hex;
    dataColors[args.new_color_name] = {
      name: args.new_color_name,
      values: [],
    };
    percentages.forEach((percentage) => {
      let mixedColor = "";
      if (percentage >= 0) {
        mixedColor = mix(hexColor, "#000000", percentage);
      } else {
        mixedColor = mix(hexColor, "#ffffff", percentage * -1);
      }
      let obj = {
        percentage: percentage,
        color: mixedColor,
        text_color: percentage > -50 ? "text-white" : "text-dark",
      };
      dataColors[args.new_color_name].values.push(obj);
    });
  }

  return Object.assign(data, args);
};

export default {
  title: "Colors",
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

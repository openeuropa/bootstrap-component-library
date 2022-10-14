module.exports = [
  {
    name: "preset-default",
    params: {
      overrides: {
        removeUnknownsAndDefaults: {
          keepRoleAttr: true,
        },
        removeViewBox: false,
      },
    },
  },
  "cleanupListOfValues",
  "removeXMLNS",
  "sortAttrs",
  {
    name: "removeAttrs",
    params: {
      attrs: ["clip-rule", "data-name", "fill"],
    },
  },
];

import { merge, renderTwigFileAsNode } from "@oe/test-utils";

describe("OE - Alert", () => {
  const template = "@oe/alert/alert.html.twig";
  const render = (params) => renderTwigFileAsNode(template, params);

  const variants = [
    "alert-primary",
    "alert-secondary",
    "alert-success",
    "alert-danger",
    "alert-warning",
    "alert-info",
    "alert-light",
    "alert-dark",
  ];

  variants.forEach((variant) => {
    test(`- ${variant} renders correctly`, () => {
      expect.assertions(1);

      return expect(render({ variant })).resolves.toMatchSnapshot();
    });
  });
});

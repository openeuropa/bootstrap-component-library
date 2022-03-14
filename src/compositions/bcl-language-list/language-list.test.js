import { renderTwigFileAsNode } from "@openeuropa/bcl-test-utils";

import demoData from "@openeuropa/bcl-language-list/data/data--neutral";
import demoDataEU from "@openeuropa/bcl-language-list/data/data--eu";
import demoDataEC from "@openeuropa/bcl-language-list/data/data--ec";
import demoDataModal from "@openeuropa/bcl-language-list/data/data-modal";

const template = "@oe-bcl/bcl-language-list/language-list.html.twig";
const templateModal = "@oe-bcl/bcl-language-list/language-list-modal.html.twig";
const render = (params) => renderTwigFileAsNode(template, params);
const renderModal = (params) => renderTwigFileAsNode(templateModal, params);
const variants = ["eu", "ec", "neutral"];

describe("OE - Language", () => {
  test("Neutral renders correctly", () => {
    expect.assertions(1);

    return expect(render(demoData)).resolves.toMatchSnapshot();
  });

  test("EU renders correctly", () => {
    expect.assertions(1);

    return expect(render(demoDataEU)).resolves.toMatchSnapshot();
  });

  test("EC renders correctly", () => {
    expect.assertions(1);

    return expect(render(demoDataEC)).resolves.toMatchSnapshot();
  });

  variants.forEach((variant) => {
    test(`modal ${variant} renders correctly`, () => {
      expect.assertions(1);

      return expect(
        renderModal({ ...demoDataModal, variant: variant })
      ).resolves.toMatchSnapshot();
    });
  });
});

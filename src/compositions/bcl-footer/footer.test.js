import {
  renderTwigFileAsNode,
  renderTwigFileAsHtml,
} from "@openeuropa/bcl-test-utils";
import { axe, toHaveNoViolations } from "jest-axe";

import demoData from "@openeuropa/bcl-data-footer/data";
import demoDataEU from "@openeuropa/bcl-data-footer/data--eu";
import demoDataEC from "@openeuropa/bcl-data-footer/data--ec";

const template = "@oe-bcl/bcl-footer/footer.html.twig";
const render = (params) => renderTwigFileAsNode(template, params);

expect.extend(toHaveNoViolations);

describe("OE - Footer", () => {
  test("renders correctly", () => {
    expect.assertions(1);

    return expect(render(demoData)).resolves.toMatchSnapshot();
  });
});

describe("OE - Footer EU", () => {
  test("renders correctly", () => {
    expect.assertions(1);

    return expect(render(demoDataEU)).resolves.toMatchSnapshot();
  });

  test(`passes the accessibility tests`, async () => {
    expect(
      await axe(renderTwigFileAsHtml(template, demoDataEU))
    ).toHaveNoViolations();
  });
});

describe("OE - Footer EC", () => {
  test("renders correctly", () => {
    expect.assertions(1);

    return expect(render(demoDataEC)).resolves.toMatchSnapshot();
  });

  test(`passes the accessibility tests`, async () => {
    expect(
      await axe(renderTwigFileAsHtml(template, demoDataEC))
    ).toHaveNoViolations();
  });
});

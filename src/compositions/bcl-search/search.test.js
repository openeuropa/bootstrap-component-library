import {
  renderTwigFileAsNode,
  renderTwigFileAsHtml,
} from "@openeuropa/bcl-test-utils";
import { axe, toHaveNoViolations } from "jest-axe";

import dataListing from "@openeuropa/bcl-search/data/data";

expect.extend(toHaveNoViolations);

const template = "@oe-bcl/bcl-search/search.html.twig";
const render = (params) => renderTwigFileAsNode(template, params);

describe("OE - Search", () => {
  test(`renders correctly`, () => {
    expect.assertions(1);

    return expect(render(dataListing)).resolves.toMatchSnapshot();
  });

  test(`passes the accessibility tests`, async () => {
    expect(
      await axe(renderTwigFileAsHtml(template, dataListing)),
    ).toHaveNoViolations();
  }, 10000);
});

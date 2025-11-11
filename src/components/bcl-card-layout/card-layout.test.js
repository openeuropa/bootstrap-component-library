import {
  renderTwigFileAsNode,
  renderTwigFileAsHtml,
} from "@openeuropa/bcl-test-utils";
import { axe, toHaveNoViolations } from "jest-axe";

import demoDataGroup from "@openeuropa/bcl-data-card-layout/data--group";
import demoDataGrid from "@openeuropa/bcl-data-card-layout/data--grid";
import demoDataMasonry from "@openeuropa/bcl-data-card-layout/data--masonry";

const template = "@oe-bcl/bcl-card-layout/card-layout.html.twig";
const render = (params) => renderTwigFileAsNode(template, params, true);

expect.extend(toHaveNoViolations);

describe("OE - Card", () => {
  test(`group renders correctly`, () => {
    expect.assertions(1);

    return expect(render(demoDataGroup)).resolves.toMatchSnapshot();
  });
  test(`grid renders correctly`, () => {
    expect.assertions(1);

    return expect(render(demoDataGrid)).resolves.toMatchSnapshot();
  });
  test(`group renders correctly with extra col classes`, () => {
    expect.assertions(1);

    return expect(
      render({ ...demoDataGroup, cols_extra_classes: "col-class" }),
    ).resolves.toMatchSnapshot();
  });
  test(`grid renders correctly with 2 per row`, () => {
    expect.assertions(1);

    return expect(
      render({ ...demoDataGrid, grid_columns: "2" }),
    ).resolves.toMatchSnapshot();
  });
  test(`grid renders correctly with cards having equal height`, () => {
    expect.assertions(1);

    return expect(
      render({ ...demoDataGrid, equal_height: true }),
    ).resolves.toMatchSnapshot();
  });
  test(`masonry renders correctly`, () => {
    expect.assertions(1);

    return expect(render(demoDataMasonry)).resolves.toMatchSnapshot();
  });

  test(`passes the accessibility tests`, async () => {
    demoDataGroup.items.forEach((card) => {
      card.subtitle.tag = "h2";
    });

    expect(
      await axe(await renderTwigFileAsHtml(template, demoDataGroup, true)),
    ).toHaveNoViolations();
  });
});

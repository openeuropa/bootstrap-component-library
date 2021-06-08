import { renderTwigFileAsNode } from "@oe/test-utils";
import demoDataGroup from "@oe/data-card-layout/dataGroup";
import demoDataGrid from "@oe/data-card-layout/dataGrid";
import demoDataMasonry from "@oe/data-card-layout/dataMasonry";

const template = "@oe/card-layout/card-layout.html.twig";
const render = (params) => renderTwigFileAsNode(template, params);

describe("OE - Card", () => {
  test(`group renders correctly`, () => {
    expect.assertions(1);

    return expect(render(demoDataGroup)).resolves.toMatchSnapshot();
  });
  test(`grid renders correctly`, () => {
    expect.assertions(1);

    return expect(render(demoDataGrid)).resolves.toMatchSnapshot();
  });
  test(`grid renders correctly with 2 per row`, () => {
    expect.assertions(1);

    return expect(
      render({ ...demoDataGrid, grid_columns: "2" })
    ).resolves.toMatchSnapshot();
  });
  test(`grid renders correctly with cards having equal height`, () => {
    expect.assertions(1);

    return expect(
      render({ ...demoDataGrid, equal_height: true })
    ).resolves.toMatchSnapshot();
  });
  test(`masonry renders correctly`, () => {
    expect.assertions(1);

    return expect(render(demoDataMasonry)).resolves.toMatchSnapshot();
  });
});

import { renderTwigFileAsNode } from "@openeuropa/bcl-test-utils";
import demoData from "@openeuropa/bcl-search-form/dataSearch";
import demoDataSubmittable from "@openeuropa/bcl-search-form/dataSearchSubmit";

const template = "@oe-bcl/bcl-search-form/search-form.html.twig";
const render = (params) => renderTwigFileAsNode(template, params);

describe("OE - Search Form", () => {
  test(`renders correctly`, () => {
    expect.assertions(1);

    return expect(render(demoData)).resolves.toMatchSnapshot();
  });

  test(`with submit renders correctly`, () => {
    expect.assertions(1);

    return expect(render(demoDataSubmittable)).resolves.toMatchSnapshot();
  });

  test(`as pill renders correctly`, () => {
    expect.assertions(1);

    return expect(
      render({ ...demoData, pill: true })
    ).resolves.toMatchSnapshot();
  });
});

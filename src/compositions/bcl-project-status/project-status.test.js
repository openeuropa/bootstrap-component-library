import { renderTwigFileAsNode } from "@openeuropa/bcl-test-utils";
import demoOngoing from "@openeuropa/bcl-project-status/data/data--ongoing";
import demoPlanned from "@openeuropa/bcl-project-status/data/data--planned";
import demoClosed from "@openeuropa/bcl-project-status/data/data--closed";
import demoContribs from "@openeuropa/bcl-project-status/data/data--contributions.js";

describe("OE - Project status", () => {
  let template = "@oe-bcl/bcl-project-status/project-status.html.twig";
  let render = (params) => renderTwigFileAsNode(template, params, true);

  test(`ongoing renders correctly`, () => {
    expect.assertions(1);

    return expect(render(demoOngoing)).resolves.toMatchSnapshot();
  });

  test(`planned renders correctly`, () => {
    expect.assertions(1);

    return expect(render(demoPlanned)).resolves.toMatchSnapshot();
  });

  test(`closed renders correctly`, () => {
    expect.assertions(1);

    return expect(render(demoClosed)).resolves.toMatchSnapshot();
  });
});

describe("OE - Project contributions", () => {
  let template = "@oe-bcl/bcl-project-status/project-contributions.html.twig";
  let render = (params) => renderTwigFileAsNode(template, params, true);

  test(`renders correctly`, () => {
    expect.assertions(1);

    return expect(render(demoContribs)).resolves.toMatchSnapshot();
  });

  test(`without chart renders correctly`, () => {
    expect.assertions(1);

    return expect(
      render({ ...demoContribs, chart: {} })
    ).resolves.toMatchSnapshot();
  });
});

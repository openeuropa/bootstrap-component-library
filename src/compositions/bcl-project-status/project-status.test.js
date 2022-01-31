import { renderTwigFileAsNode } from "@openeuropa/bcl-test-utils";
import demoOngoing from "@openeuropa/bcl-project-status/data/data--ongoing";
import demoPlanned from "@openeuropa/bcl-project-status/data/data--planned";
import demoClosed from "@openeuropa/bcl-project-status/data/data--closed";

const template = "@oe-bcl/bcl-project-status/project-status.html.twig";
const render = (params) => renderTwigFileAsNode(template, params, true);

describe("OE - Project status", () => {
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

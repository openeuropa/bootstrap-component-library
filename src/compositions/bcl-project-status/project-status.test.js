import {
  renderTwigFileAsNode,
  renderTwigFileAsHtml,
} from "@openeuropa/bcl-test-utils";
import { axe, toHaveNoViolations } from "jest-axe";

import demoOngoing from "@openeuropa/bcl-project-status/data/data--ongoing";
import demoPlanned from "@openeuropa/bcl-project-status/data/data--planned";
import demoClosed from "@openeuropa/bcl-project-status/data/data--closed";
import demoContribs from "@openeuropa/bcl-project-status/data/data--contributions";

expect.extend(toHaveNoViolations);

describe("OE - Project status", () => {
  const template = "@oe-bcl/bcl-project-status/project-status.html.twig";
  const render = (params) => renderTwigFileAsNode(template, params, true);

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

  test(`passes the accessibility tests`, async () => {
    expect(
      await axe(renderTwigFileAsHtml(template, demoOngoing, true))
    ).toHaveNoViolations();
  });
});

describe("OE - Project contributions", () => {
  const template = "@oe-bcl/bcl-project-status/project-contributions.html.twig";
  const render = (params) => renderTwigFileAsNode(template, params, true);

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

  test(`passes the accessibility tests`, async () => {
    expect(
      await axe(renderTwigFileAsHtml(template, demoContribs, true))
    ).toHaveNoViolations();
  });
});

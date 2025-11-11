import {
  renderTwigFileAsNode,
  renderTwigFileAsHtml,
} from "@openeuropa/bcl-test-utils";
import { axe, toHaveNoViolations } from "jest-axe";

import demoData from "@openeuropa/bcl-data-progress/data";

const template = "@oe-bcl/bcl-progress/progress.html.twig";
const render = (params) => renderTwigFileAsNode(template, params);

expect.extend(toHaveNoViolations);

describe("OE - Progress", () => {
  test(`renders correctly`, () => {
    expect.assertions(1);

    return expect(render(demoData)).resolves.toMatchSnapshot();
  });

  test(`renders correctly with striped style`, () => {
    expect.assertions(1);

    return expect(
      render({ ...demoData, striped: true }),
    ).resolves.toMatchSnapshot();
  });

  test(`renders correctly with striped and animated style`, () => {
    expect.assertions(1);

    return expect(
      render({ ...demoData, striped: true, animated: true }),
    ).resolves.toMatchSnapshot();
  });

  test(`renders correctly with variant danger`, () => {
    expect.assertions(1);

    return expect(
      render({ ...demoData, variant: "danger" }),
    ).resolves.toMatchSnapshot();
  });

  test(`renders correctly with hidden label`, () => {
    expect.assertions(1);

    return expect(
      render({ ...demoData, hidden_label: true }),
    ).resolves.toMatchSnapshot();
  });

  test(`renders correctly with message`, () => {
    expect.assertions(1);

    return expect(
      render({
        ...demoData,
        message: "This is a demo message under the progress bar.",
      }),
    ).resolves.toMatchSnapshot();
  });

  test(`renders correctly with bar label`, () => {
    expect.assertions(1);

    return expect(
      render({ ...demoData, bar_label: "Loading..." }),
    ).resolves.toMatchSnapshot();
  });

  test(`passes the accessibility tests`, async () => {
    expect(
      await axe(await renderTwigFileAsHtml(template, demoData, true)),
    ).toHaveNoViolations();
  });
});

import {
  renderTwigFileAsNode,
  renderTwigFileAsHtml,
} from "@openeuropa/bcl-test-utils";
import { axe, toHaveNoViolations } from "jest-axe";

import {
  demoData,
  demoDataEmailForm,
  demoDataEmailConfirmationForm,
  demoDataEmailConfirmedForm,
  demoDataManageForm,
} from "@openeuropa/bcl-subscription/data/data";

const template = "@oe-bcl/bcl-subscription/subscription.html.twig";
const templateForm = "@oe-bcl/bcl-subscription/subscription-form.html.twig";

const render = (params) => renderTwigFileAsNode(template, params, true);
const renderForm = (params) => renderTwigFileAsNode(templateForm, params, true);

expect.extend(toHaveNoViolations);

describe("OE - Subscription", () => {
  test("modal renders correctly", () => {
    expect.assertions(1);

    return expect(render(demoData)).resolves.toMatchSnapshot();
  });

  test("email form renders correctly", () => {
    expect.assertions(1);

    return expect(renderForm(demoDataEmailForm)).resolves.toMatchSnapshot();
  });

  test("email confirmation renders correctly", () => {
    expect.assertions(1);

    return expect(
      renderForm(demoDataEmailConfirmationForm)
    ).resolves.toMatchSnapshot();
  });

  test("email confirmed renders correctly", () => {
    expect.assertions(1);

    return expect(
      renderForm(demoDataEmailConfirmedForm)
    ).resolves.toMatchSnapshot();
  });

  test("manage form renders correctly", () => {
    expect.assertions(1);

    return expect(renderForm(demoDataManageForm)).resolves.toMatchSnapshot();
  });

  test(`passes the accessibility tests`, async () => {
    expect(
      await axe(renderTwigFileAsHtml(template, demoData))
    ).toHaveNoViolations();
  });
});

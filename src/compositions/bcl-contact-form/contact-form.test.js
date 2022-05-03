import { renderTwigFileAsNode } from "@openeuropa/bcl-test-utils";
import header from "@openeuropa/bcl-data-header/data--simple";
import footer from "@openeuropa/bcl-data-footer/data";
import banner from "@openeuropa/bcl-contact-form/data/data--banner";

import form from "@openeuropa/bcl-contact-form/data/data--form";
import formError from "@openeuropa/bcl-contact-form/data/data--form-error";
import success from "@openeuropa/bcl-contact-form/data/data--success";
import error from "@openeuropa/bcl-contact-form/data/data--error";

const baseData = {
  content_type: "contact-form",
  banner,
  header,
  footer,
  with_banner: true,
  with_header: true,
  with_footer: true,
  with_sidebar: false,
};

const dataDefault = {
  ...baseData,
  form,
};

const dataError = {
  ...baseData,
  form: formError,
  messages: [error],
};

const dataSuccess = {
  ...dataDefault,
  messages: [success],
};

const template = "@oe-bcl/bcl-contact-form/contact-form.html.twig";

const render = (params) => renderTwigFileAsNode(template, params, true);
const renderListing = (params) => renderTwigFileAsNode(template, params, true);

describe("OE - Contact-form", () => {
  test("contact-form page renders correctly", () => {
    expect.assertions(1);

    return expect(render(dataDefault)).resolves.toMatchSnapshot();
  });

  test("contact-form error page renders correctly", () => {
    expect.assertions(1);

    return expect(render(dataError)).resolves.toMatchSnapshot();
  });

  test("contact-form success page renders correctly", () => {
    expect.assertions(1);

    return expect(render(dataSuccess)).resolves.toMatchSnapshot();
  });
});

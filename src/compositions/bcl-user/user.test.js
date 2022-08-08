import {
  renderTwigFileAsNode,
  renderTwigFileAsHtml,
} from "@openeuropa/bcl-test-utils";
import { axe, toHaveNoViolations } from "jest-axe";
import {
  dataListing,
  dataUser,
  dataTerms,
  demoDataCompact,
} from "@openeuropa/bcl-user/data/data";

const template = "@oe-bcl/bcl-user/user.html.twig";
const render = (params) => renderTwigFileAsNode(template, params);

const templateList = "@oe-bcl/bcl-base-templates/listing-page.html.twig";
const renderList = (params) => renderTwigFileAsNode(templateList, params);

const templateTerms = "@oe-bcl/bcl-user/user-terms.html.twig";
const renderTerms = (params) => renderTwigFileAsNode(templateTerms, params);

const templateCompact = "@oe-bcl/bcl-user/user-compact.html.twig";
const renderCompact = (params) => renderTwigFileAsNode(templateCompact, params);

expect.extend(toHaveNoViolations);

describe("OE - User", () => {
  test(`renders correctly`, () => {
    expect.assertions(1);

    return expect(render(dataUser)).resolves.toMatchSnapshot();
  });
  test(`list renders correctly`, () => {
    expect.assertions(1);

    return expect(renderList(dataListing)).resolves.toMatchSnapshot();
  });
  test(`terms renders correctly`, () => {
    expect.assertions(1);

    return expect(renderTerms(dataTerms)).resolves.toMatchSnapshot();
  });
  test(`compact renders correctly`, () => {
    expect.assertions(1);

    return expect(renderCompact(demoDataCompact)).resolves.toMatchSnapshot();
  });

  test(`listing passes the accessibility tests`, async () => {
    expect(
      await axe(renderTwigFileAsHtml(templateList, dataListing))
    ).toHaveNoViolations();
  });

  test(`details passes the accessibility tests`, async () => {
    expect(
      await axe(renderTwigFileAsHtml(template, dataUser))
    ).toHaveNoViolations();
  });

  test(`terms passes the accessibility tests`, async () => {
    expect(
      await axe(renderTwigFileAsHtml(templateTerms, dataTerms))
    ).toHaveNoViolations();
  });

  test(`compact passes the accessibility tests`, async () => {
    expect(
      await axe(renderTwigFileAsHtml(templateCompact, demoDataCompact, true))
    ).toHaveNoViolations();
  });
});

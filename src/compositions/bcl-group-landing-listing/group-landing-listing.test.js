import { renderTwigFileAsNode } from "@openeuropa/bcl-test-utils";
import demoDataList from "@openeuropa/bcl-group-landing-listing/dataList";
import demoDataListContent from "@openeuropa/bcl-group-landing-listing/dataListContent";
import demoDataListMember from "@openeuropa/bcl-group-landing-listing/dataListMember";

const template =
  "@oe-bcl/bcl-group-landing-listing/group-landing-listing.html.twig";
const render = (params) => renderTwigFileAsNode(template, params);

describe("OE - Group landing listing", () => {
  test(`renders correctly`, () => {
    expect.assertions(1);

    return expect(render(demoDataList)).resolves.toMatchSnapshot();
  });
});

describe("OE - Group landing listing Content", () => {
  test(`renders correctly`, () => {
    expect.assertions(1);

    return expect(render(demoDataListContent)).resolves.toMatchSnapshot();
  });
});

describe("OE - Group landing listing Member", () => {
  test(`renders correctly`, () => {
    expect.assertions(1);

    return expect(render(demoDataListMember)).resolves.toMatchSnapshot();
  });
});

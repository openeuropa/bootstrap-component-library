import { renderTwigFileAsNode } from "@openeuropa/bcl-test-utils";
import blockData from "@openeuropa/bcl-subscription/data/data_block.js";
import modalData from "@openeuropa/bcl-subscription/data/data_modal.js";

const templateBlock = "@oe-bcl/bcl-subscription/subscription-block.html.twig";
const templateModal = "@oe-bcl/bcl-subscription/subscription-modal.html.twig";

const renderBlock = (params) =>
  renderTwigFileAsNode(templateBlock, params, true);
const renderModal = (params) =>
  renderTwigFileAsNode(templateModal, params, true);

describe("OE - Subscription", () => {
  test("block renders correctly", () => {
    expect.assertions(1);

    return expect(renderBlock(blockData)).resolves.toMatchSnapshot();
  });
  test("modal renders correctly", () => {
    expect.assertions(1);

    return expect(renderModal(modalData)).resolves.toMatchSnapshot();
  });
});

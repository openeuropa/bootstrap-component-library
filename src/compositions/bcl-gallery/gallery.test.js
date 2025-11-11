import {
  renderTwigFileAsNode,
  renderTwigFileAsHtml,
} from "@openeuropa/bcl-test-utils";
import { axe, toHaveNoViolations } from "jest-axe";

import dataDefault from "@openeuropa/bcl-gallery/data/data";

const template = "@oe-bcl/bcl-gallery/gallery.html.twig";
const render = (params) => renderTwigFileAsNode(template, params);

expect.extend(toHaveNoViolations);

describe("OE - Gallery", () => {
  test("default renders correctly", () => {
    expect.assertions(1);
    return expect(render(dataDefault)).resolves.toMatchSnapshot();
  });

  test("renders correctly with new counter", () => {
    expect.assertions(1);
    return expect(
      render({ ...dataDefault, counter: 4 }),
    ).resolves.toMatchSnapshot();
  });

  test("renders correctly with less than 5 items", () => {
    expect.assertions(1);
    return expect(
      render({
        ...dataDefault,
        items: [
          {
            caption: `<p>Some representative placeholder content for the first slide.</p>`,
            caption_title: "First slide label",
            thumbnail: `<img alt="First slide" 
                          src="https://picsum.photos/id/1005/400/400" 
                        />`,
            media: `<img alt="First slide" 
                      src="https://picsum.photos/id/1005/800/400" 
                    />`,
          },
          {
            caption: `<p>Some representative placeholder content for the slide.</p>`,
            caption_title: "Slide label",
            thumbnail: `<img alt="slide" 
                          src="https://picsum.photos/id/101/400/400" 
                        />`,
            media: `<img alt="slide" 
                      src="https://picsum.photos/id/101/800/400" 
                    />`,
          },
          {
            caption: `<p>Some representative placeholder content for the slide.</p>`,
            caption_title: "Slide label",
            is_playable: true,
            thumbnail: `<img alt="slide" 
                          src="https://picsum.photos/id/1012/400/400" 
                        />`,
            media: `<iframe 
                      src="https://www.youtube.com/embed/fgi-GSCB6ho" 
                      frameborder="0"
                    ></iframe>`,
          },
        ],
      }),
    ).resolves.toMatchSnapshot();
  });

  test("renders correctly with title and link", () => {
    expect.assertions(1);
    return expect(
      render({
        ...dataDefault,
        title: "File test title",
        title_tag: "h6",
        title_link: {
          path: "/example.html",
          label: "Link label",
        },
      }),
    ).resolves.toMatchSnapshot();
  });

  jest.setTimeout(20000);
  test(`passes the accessibility tests`, async () => {
    expect(
      await axe(await renderTwigFileAsHtml(template, dataDefault, true)),
    ).toHaveNoViolations();
  });
});

import { Buffer } from 'buffer';

global.Buffer = Buffer;

export const parameters = {
  a11y: {
    element: "#storybook-root",
    config: {},
    options: {
      checks: { "color-contrast": { options: { noScroll: true } } },
      restoreScroll: true,
    },
    manual: false,
  },  
  docs: {
    canvas: { sourceState: 'shown' },
  },
  viewMode: 'story',
  controls: { expanded: true },
  layout: "padded",
  options: {
    storySort: {
      method: "alphabetical",
      order: [
        "Components",
        "Compositions",
        "Paragraphs",
        "Features"
      ],
    },
  },
};
export const tags = ["autodocs"];

import { MINIMAL_VIEWPORTS } from "@storybook/addon-viewport";
import { BADGE } from '@geometricpanda/storybook-addon-badges';
import { Buffer } from 'buffer';

global.Buffer = Buffer;

export const parameters = {
  a11y: {
    element: "#root",
    config: {},
    options: {
      checks: { "color-contrast": { options: { noScroll: true } } },
      restoreScroll: true,
    },
    manual: false,
  },
  controls: { expanded: true },
  layout: "padded",
  badgesConfig: {
    archived: {
      title: 'Archived',
      styles: {
        fontSize: '20',
        paddingInline: '24px',
        backgroundColor: '#6C757D',
        borderColor: '#DCDCDC',
        color: '#F5F5F5',
        textTransform: 'capitalize',
        borderWidth: '2px',
        paddingBlock: '5px',
      }
    },
    stable: {
      title: "v1",
      styles: {
        fontSize: "20",
        paddingInline: "24px",
        backgroundColor: "#1EA7FD",
        borderColor: "#DCDCDC",
        color: "#F5F5F5",
        textTransform: "lowercase",
        borderWidth: "2px",
        paddingBlock: "5px",
      },
    },
  },
  viewport: {
    defaultViewport: "responsive",
    viewports: {
      responsive: {
        name: "responsive",
        styles: {
          width: "100%",
          height: "100%",
          border: 0,
          margin: 0,
          boxShadow: "none",
          borderRadius: 0,
          position: "absolute",
        },
      },
      ...MINIMAL_VIEWPORTS,
      "1366x768": {
        name: "1366x768",
        styles: {
          width: "1366px",
          height: "768px",
        },
        type: "desktop",
      },
      "1920x1080": {
        name: "1920x1080",
        styles: {
          width: "1920px",
          height: "1080px",
        },
        type: "desktop",
      },
    },
  },
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
  badges: ['archived'],
};

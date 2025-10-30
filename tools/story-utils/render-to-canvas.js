import { global } from "@storybook/global";
import {
  simulateDOMContentLoaded,
  simulatePageLoad,
} from "storybook/preview-api";
import { dedent } from "ts-dedent";

const { Node } = global;

const formatErrorTitle = (name, kind) =>
  `Expecting an HTML snippet or DOM node from the story: "${name}" of "${kind}".`;

export async function renderToCanvas(options, canvasElement) {
  const { storyFn, kind, name, showMain, showError, forceRemount } = options;

  let element;

  try {
    element = await Promise.resolve().then(storyFn);
  } catch (error) {
    showError({
      title: `Error rendering story "${name}" of "${kind}".`,
      description:
        error?.message ?? "Unknown error while executing the story function.",
    });

    throw error;
  }

  showMain();

  if (typeof element === "string") {
    canvasElement.innerHTML = element;
    simulatePageLoad(canvasElement);
    return;
  }

  if (element instanceof Node) {
    if (canvasElement.firstChild === element && forceRemount === false) {
      return;
    }

    canvasElement.innerHTML = "";
    canvasElement.appendChild(element);
    simulateDOMContentLoaded();
    return;
  }

  showError({
    title: formatErrorTitle(name, kind),
    description: dedent`
        Did you forget to return the HTML snippet from the story?
        Use "() => <your snippet or node>" or when defining the story.
      `,
  });
}

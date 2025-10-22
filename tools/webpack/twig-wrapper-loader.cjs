/**
 * Webpack loader that patches Twing's compiled templates so Storybook can lazy
 * load them, share a single environment instance, and expose a Promise-based
 * `render` helper compatible with the CLI tooling.
 */
module.exports = function twigWrapperLoader(source) {
  const options = this.getOptions() || {};
  const environmentModulePath = (options.environmentModulePath || "").replace(/\\/g, "/");

  let code = source;

  // Allow template map entries to be either compiled templates or factories and
  // resolve them lazily while keeping Drupal's base loader fallback.
  code = code.replace(
    /templates\.set\((['"][^'"]+['"]), (template\d+)\);/g,
    "templates.set($1, () => $2);",
  );

  code = code.replace(
    /template\.loadTemplate = \(executionContext, identifier\) => {\s*return templates.has\(identifier\) \? Promise\.resolve\(templates\.get\(identifier\)\) : baseLoadTemplate\(executionContext, identifier\);\s*};/,
    `template.loadTemplate = (executionContext, identifier) => {
  if (!templates.has(identifier)) {
    return baseLoadTemplate(executionContext, identifier);
  }

  const candidate = templates.get(identifier);
  const resolved = typeof candidate === 'function' ? candidate() : candidate;

  if (!resolved) {
    return baseLoadTemplate(executionContext, identifier);
  }

  return Promise.resolve(resolved);
};`,
  );

  // Ensure each compiled template imports the shared Storybook environment.
  code = `import environment from '${environmentModulePath}';\n${code}`;

  if (code.includes("export default template;")) {
    // Replace the default export so consumers call a Promise-returning render
    // helper, while still exposing the original compiled template if needed.
    code = code.replace(
      /export default template;\s*$/,
      `const compiledTemplate = template;
export const templateInstance = compiledTemplate;
const normalize = (value) => {
  if (value && typeof value === "object" && typeof value.toString === "function") {
    return value.toString();
  }

  return value;
};

const render = (context = {}) => {
  const output = compiledTemplate.render(environment, context);

  if (output && typeof output.then === "function") {
    return output.then(normalize);
  }

  return Promise.resolve(normalize(output));
};

Object.defineProperties(render, Object.getOwnPropertyDescriptors(compiledTemplate));

const doRender = render;
render.render = (context = {}) => doRender(context);

export default render;
`
    );
  }

  return code;
};

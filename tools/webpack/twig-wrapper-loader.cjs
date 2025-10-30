module.exports = function twigWrapperLoader(source) {
  const options = this.getOptions() || {};
  const environmentModulePath = (options.environmentModulePath || "").replace(/\\/g, "/");

  let code = source;

  code = `import environment from '${environmentModulePath}';\n${code}`;

  if (code.includes("export default template;")) {
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

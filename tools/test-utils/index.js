// tools/test-utils/index.js
const { readFileSync, existsSync } = require('node:fs');
const { dirname, join } = require('node:path');
const { createRequire } = require('node:module');
const DrupalAttribute = require('drupal-attribute');
const { getDummyText } = require('@openeuropa/bcl-data-utils');

// Load twig.js in a way that works across CJS/ESM builds
const TwigMod = require('twig');
const Twig = TwigMod && TwigMod.twig ? TwigMod : (TwigMod.default || TwigMod);

const requireFromHere = createRequire(__filename);

const componentsPath   = join(process.cwd(), 'src/components');
const compositionsPath = join(process.cwd(), 'src/compositions');
const OE_NAMESPACE = '@oe-bcl/';

// Cache for @openeuropa package dirs
const pkgDirCache = new Map();
const resolveOePkgDir = (pkg) => {
  if (pkgDirCache.has(pkg)) return pkgDirCache.get(pkg);
  try {
    const pkgJson = requireFromHere.resolve(`@openeuropa/${pkg}/package.json`);
    const dir = dirname(pkgJson);
    pkgDirCache.set(pkg, dir);
    return dir;
  } catch {
    return null;
  }
};

/**
 * Resolve a Twig template id to an absolute filesystem path using the same
 * fallback chain as your Vite setup:
 *   1) @oe-bcl -> src/components
 *   2) fallback -> src/compositions
 *   3) fallback -> node_modules/@openeuropa/<pkg>/<rest>
 *   4) relative includes from current file
 *   5) existing absolute path
 */
function resolveTemplatePath(id, fromPath = null) {
  if (typeof id !== 'string') return id;

  // 1/2/3) Handle @oe-bcl namespace
  if (id.startsWith(OE_NAMESPACE)) {
    const sub = id.slice(OE_NAMESPACE.length); // e.g. "bcl-alert/alert.html.twig"

    const first = join(componentsPath, sub);
    if (existsSync(first)) return first;

    const second = join(compositionsPath, sub);
    if (existsSync(second)) return second;

    const parts = sub.split('/');
    const pkg = parts[0];
    const rest = parts.slice(1);
    if (pkg && rest.length) {
      const oeDir = resolveOePkgDir(pkg);
      if (oeDir) {
        const third = join(oeDir, ...rest);
        if (existsSync(third)) return third;
      }
    }
    // Not found, return where we expected it for a clearer error later
    return first;
  }

  // 4) Relative includes
  if (fromPath && (id.startsWith('./') || id.startsWith('../'))) {
    const base = dirname(fromPath);
    const p = join(base, id);
    if (existsSync(p)) return p;
  }

  // 5) Absolute or project-relative
  if (existsSync(id)) return id;

  // Try relative to components
  const rel = join(componentsPath, id);
  if (existsSync(rel)) return rel;

  return id;
}

// Register Twig functions to mirror vite-plugin-twig-drupal config
if (typeof Twig.extendFunction === 'function') {
  try {
    Twig.extendFunction('create_attribute', () => new DrupalAttribute());
    Twig.extendFunction('get_dummy_text', (count, paragraph, paragraphs, classes) =>
      getDummyText(count, paragraph, paragraphs, classes)
    );
  } catch {
    // ignore if already registered
  }
}

/**
 * Rewrite Twig file references to absolute paths so the default twig loader
 * can resolve them without custom loaders:
 * - {% extends '...' %}
 * - {% include '...' %}
 * - {% import '...' as x %}
 * - {% from '...' import ... %}
 * - {% embed '...' %}
 *
 * NOTE: this handles only string-literal paths. If you have dynamic includes
 * (variables), you’ll need a resolver hook for those separately.
 */
function rewriteTwigReferences(source, filePath) {
  const patterns = [
    /({%\s*extends\s*['"])([^'"]+)(['"]\s*%})/g,
    /({%\s*include\s*['"])([^'"]+)(['"]\s*[^%]*%})/g,
    /({%\s*import\s*['"])([^'"]+)(['"]\s*as\s+[^%]+%})/g,
    /({%\s*from\s*['"])([^'"]+)(['"]\s*import\s+[^%]+%})/g,
    /({%\s*embed\s*['"])([^'"]+)(['"]\s*[^%]*%})/g,
  ];

  let out = source;
  for (const rx of patterns) {
    out = out.replace(rx, (m, p1, pathRef, p3) => {
      const abs = resolveTemplatePath(pathRef, filePath);
      return `${p1}${abs}${p3}`;
    });
  }

  return out;
}

/**
 * Compile a Twig template from disk, but **do not assign an `id`** so twig.js
 * does not cache it globally. This avoids "There is already a template with
 * the ID ..." errors when rendering the same template many times in tests.
 */
function compileTemplate(absPath) {
  const raw = readFileSync(absPath, 'utf8');
  const rewritten = rewriteTwigReferences(raw, absPath);

  // Important: NO `id`, NO `path` here → anonymous template, no global cache
  return Twig.twig({
    data: rewritten,
    allowInlineIncludes: true,
    // rethrow: true, // optional: makes debugging easier
  });
}

function renderTwigFile(file, context = {}) {
  const abs = resolveTemplatePath(file);
  const tpl = compileTemplate(abs);
  return tpl.render(context);
}

// -------------------- Public helpers (same API as before) --------------------

const renderTwigFileAsNode = (file, options = {}, reset) =>
  new Promise((resolve, reject) => {
    try {
      const ctx = { ...options };
      if (reset) {
        ctx.attributes = new DrupalAttribute();
      }
      const html = renderTwigFile(file, ctx);
      const jest = (global.document ?? window.document).createElement('jest');
      jest.innerHTML = String(html).trim();
      resolve(jest);
    } catch (error) {
      reject(error);
    }
  });

const renderTwigFileAsHtml = (file, options = {}, main = false) => {
  const html = renderTwigFile(file, options);
  if (!main) return html;
  const landmark = (global.document ?? window.document).createElement('main');
  landmark.innerHTML = String(html).trim();
  return landmark;
};

const getVariants = (outline, add) => {
  let variants = [
    'primary',
    'secondary',
    'success',
    'danger',
    'warning',
    'info',
    'light',
    'dark',
  ];
  if (outline) variants = [...variants, ...variants.map((el) => `outline-${el}`)];
  if (add) variants = [...variants, ...add];
  return variants;
};

module.exports = {
  renderTwigFileAsNode,
  renderTwigFileAsHtml,
  getVariants,
};

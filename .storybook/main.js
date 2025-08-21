import { join, dirname, relative, sep } from 'node:path';
import { existsSync } from 'node:fs';
import { createRequire } from 'node:module';
import twigDrupal from 'vite-plugin-twig-drupal';
import DrupalAttribute from 'drupal-attribute';
import { getDummyText } from '@openeuropa/bcl-data-utils';

const require = createRequire(import.meta.url);
const getAbsolutePath = (pkg) => dirname(require.resolve(`${pkg}/package.json`));

const componentsPath   = join(process.cwd(), 'src/components');
const compositionsPath = join(process.cwd(), 'src/compositions');

// cache for @openeuropa package dirs
const pkgDirCache = new Map();
const resolveOePkgDir = (pkgName) => {
  if (pkgDirCache.has(pkgName)) return pkgDirCache.get(pkgName);
  try {
    const pkgJson = require.resolve(`@openeuropa/${pkgName}/package.json`);
    const dir = dirname(pkgJson);
    pkgDirCache.set(pkgName, dir);
    return dir;
  } catch {
    return null;
  }
};

/** @type {import('@storybook/html-vite').StorybookConfig} */
const config = {
  framework: { name: getAbsolutePath('@storybook/html-vite'), options: {} },

  stories: [
    join(process.cwd(), 'src/components/**/*.story.@(js|mdx)'),
    join(process.cwd(), 'src/compositions/**/*.story.@(js|mdx)'),
  ],
  staticDirs: [join(process.cwd(), 'assets')],
  viteFinal: async (cfg) => {
    // ✅ Fallback during resolution (before Vite import-analysis)
    const twigResolveFallback = {
      name: 'twig-oe-bcl-resolve-fallback',
      enforce: 'pre',
      resolveId(id, importer) {
        // Only care about absolute component paths to twig files
        if (typeof id !== 'string') return null;
        if (!id.endsWith('.html.twig')) return null;
        if (!id.startsWith(componentsPath + sep)) return null;

        // If the file actually exists at components, nothing to do
        if (existsSync(id)) return null;

        // Same relative path under compositions?
        const rel = relative(componentsPath, id); // e.g. "bcl-base-templates/content-type.html.twig"
        const compAlt = join(compositionsPath, rel);
        if (existsSync(compAlt)) {
          return compAlt; // redirect to compositions
        }

        // Try node_modules/@openeuropa/<pkg>/<rest>
        const [pkg, ...restParts] = rel.split(sep); // pkg like "bcl-base-templates"
        if (pkg && restParts.length) {
          const oeDir = resolveOePkgDir(pkg);
          if (oeDir) {
            const nmAlt = join(oeDir, ...restParts);
            if (existsSync(nmAlt)) {
              return nmAlt; // redirect to node_modules
            }
          }
        }

        // No fallback found → let Vite error out
        return null;
      },
    };

    cfg.plugins = [
      twigResolveFallback, // must run before twigDrupal
      ...(cfg.plugins ?? []),
      twigDrupal({
        // Keep a single namespace root; templates remain unchanged (@oe-bcl/...)
        namespaces: { 'oe-bcl': componentsPath },
        functions: {
          create_attribute: (Twig) =>
            Twig.extendFunction('create_attribute', () => new DrupalAttribute()),
          get_dummy_text: (Twig) =>
            Twig.extendFunction(
              'get_dummy_text',
              (count, paragraph, paragraphs, classes) =>
                getDummyText(count, paragraph, paragraphs, classes)
            ),
        },
      }),
    ];

    // Allow local fs (src, node_modules are inside cwd)
    cfg.server ??= {};
    cfg.server.fs ??= {};
    cfg.server.fs.allow = Array.from(
      new Set([...(cfg.server.fs.allow ?? []), process.cwd(), join(process.cwd(), 'src')])
    );

    // SCSS bootstrap/theme base so mixins/vars are available everywhere
    cfg.css ??= {};
    cfg.css.preprocessorOptions ??= {};
    cfg.css.preprocessorOptions.scss ??= {};
    const inject = `
    @import "@openeuropa/bcl-bootstrap/scss/functions";
    @import "@openeuropa/bcl-bootstrap/scss/variables";
    @import "@openeuropa/bcl-bootstrap/scss/maps";
    @import "@openeuropa/bcl-bootstrap/scss/mixins";
    @import "@openeuropa/bcl-bootstrap/scss/reboot";
    @import "@openeuropa/bcl-theme-default/src/scss/base/colors";
    @import "@openeuropa/bcl-theme-default/src/scss/base/variables";
    `;
    const current = cfg.css.preprocessorOptions.scss.additionalData || '';
    cfg.css.preprocessorOptions.scss.additionalData = inject + current;
    cfg.css.preprocessorOptions.scss.includePaths = [
      ...(cfg.css.preprocessorOptions.scss.includePaths ?? []),
      'node_modules',
    ];

    return cfg;
  },
};

export default config;

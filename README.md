<h3 align="center">OE library starter template</h3>

<p align="center">Create a library of components based on bootstrap.</p>

## Usage

Be sure to have [Node.js](https://nodejs.org/) as well as yarn installed before proceeding.

```shell
# Clone the repo
git clone https://github.com/planctus/oe-library
cd oe-library

# Install dependencies
yarn

# Compile Sass, minify css file:
yarn run css-compile

# Compile JavaScript:
yarn run js-compile

# Watch Sass for changes (uses nodemon)
yarn run watch

# Start a development session (storybook with browsersync )
yarn start
```

Open <http://localhost:5000> to see the storybook instance.
Use <http://localhost:3000> to enjoy live reloading on storybook.

## Scripts

The following npm scripts are available to you in this starter repo. With the exception of `npm start` and `npm test`, the remaining scripts can be run from your command line with `npm run scriptName`.

| Script        | Description                                                                        |
| ------------- | ---------------------------------------------------------------------------------- |
| `watch`       | Automatically recompiles CSS as it watches the `scss` directory for changes        |
| `css`         | Runs `css-compile` and `css-prefix`                                                |
| `css-compile` | Compiles source Sass into CSS                                                      |
| `css-lint`    | Runs [Stylelint](https://stylelint.io) against source Sass for code quality        |
| `css-prefix`  | Runs [Autoprefixer](https://github.com/postcss/autoprefixer) on the compiled CSS   |
| `css-purge`   | Runs [PurgeCSS](https://purgecss.com) to remove CSS that is unused by `index.html` |
| `test`        | Runs `css-lint` and `css`, in sequential order                                     |

### Optimizing CSS

Before you start to use tools that remove Bootstrap styling like [PurgeCSS](#purgecss), you can make some broad optimizations by only including the stylesheets you think you'll need.

Look to the `scss/oec.scss` file for your two options of including all of Bootstrap, or a subset of our styles and components. By default we've only imported the stylesheets that Bootstrap requires plus those of the components we're planning to use.

Uncomment specific lines as needed, then recompile to use them.

### Optimizing JS

Similar to optimizing CSS, we publish individual scripts for each of our plugins. This allows you to import only what you need, versus the entire bundle and dependencies. For example, if you don't plan on using dropdowns, tooltips, or popovers, you can safely omit the Popper.js depdendency.

See the `js/index.esm.js` and `js/index.esm.js` files for an example of how to import all of Bootstrap's JS or just the individual pieces. By default we've only imported our modal JavaScript since we have no need for anything else.

### Stylelint

Stylelint is included, as is Bootstrap's default Stylelint config, [stylelint-config-twbs-bootstrap](https://github.com/twbs/stylelint-config-twbs-bootstrap).

At the root of the repo, `.stylelintignore` is used to list files that we ignore when linting and `.stylelintrc` is where we tell Stylelint to use the Bootstrap config. The former is recommended based on your specific needs, while the latter is required.

### Setup on Windows using WSL 1

#### Setup WSL

1. Open Settings
2. Click on Apps & features
3. Under the "Related settings" section, click the Programs and Features option.
4. Click the Turn Windows features on or off option from the left pane.
5. Check the Windows Subsystem for Linux option.
6. Click the OK button.
7. Click the Restart now button.
8. After Restart, Open Powershell with admin.
9. Run `wsl --set-default-version 1`.

#### Setup Ubuntu
1. Open Microsoft Store.
2. Search for Ubuntu.
3. Select Ubuntu.
4. Click Get/Install.
5. After installation, click launch.
6. Create a username for the Linux distro and press Enter.
7. Specify a password for the distro and press Enter.
8. Repeat the password and press Enter to confirm.

#### Setup project
1. Clone the project.
2. In the project root, run `sudo yarn`.
3. Type the password you entered.

If the alias files `root/bootstrap/js` and `root/bootstrap/scss` don't work, follow this steps:
1. Rename `root/bootstrap/js` -> `root/bootstrap/_js` and `root/bootstrap/scss` -> `root/bootstrap/_scss`.
2. Copy the files `root/node_modules/bootstrap/scss` and `root/node_modules/bootstrap/js` to `root/bootstrap`. (Warning: The modified files can be staged now so in order to easily see what can be staged you can use Sourcetree);
3. Run `sudo yarn start` and access `localhost:5000`.

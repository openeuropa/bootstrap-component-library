### Openeuropa Bootstrap Component Library template</h3>

Library of components based on [Bootstrap 5](https://github.com/twbs/bootstrap/tree/v5.0.1)

![Build Status](https://github.com/openeuropa/bootstrap-component-library/actions/workflows/ci.yml/badge.svg)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)
[![lerna](https://img.shields.io/badge/maintained%20with-lerna-cc00ff.svg)](https://lernajs.io/)

## Introduction

This library is mainly a development environment for components released as
packages on [npm](https://npmjs.org) under the @openeuropa organization and it
provides a style-guide using storybook where all the components are rendered
through the twig templates defined in the library and most of their capabilities
are visible thanks to interactive fields called controls.

## Usage

Be sure to have [Node.js](https://nodejs.org/) as well as yarn installed before
proceeding, this library uses the current LTS version of node.js, named
[fermium](https://nodejs.org/download/release/latest-fermium/)

```shell
# Clone the repo
git clone https://github.com/openeuropa/bootstrap-component-library
cd bootstrap-component-library

# Install dependencies and build the themes
yarn

# Start a development session (storybook with browsersync )
yarn start
```

- Open <http://localhost:5000> to see the storybook instance.
- Use <http://localhost:3000> to enjoy live reloading on storybook.

## Npm packages

The components are released as single, standalone packages providing a twig
template but those templates are also available in the theme packages.
The theme packages contain source files (scss, js, twig) as well as the compiled
resources ready to be used.
A package defined as a dependency by the themes is making the bootstrap source
files available to each of the theme packages.

[List of npm packages](docs/packages.md)

### How to use a package from npm

- fetch the package with npm or yarn, e.g.
  `npm install @openeuropa/bcl-theme-default` or
  `yarn add @openeuropa/bcl-theme-default`
- include the templates in your application, you will need a `twig loader`
  capable of identifying the templates using their namespace `@oe-bcl`.

  ```twig
  {% include '@oe-bcl/icon/icon.html.twig' with {
      name: 'files',
      path: 'static/media/bootstrap-icons.svg',
      size: 'm',
      transformation: 'rotate-180'
    } only %}

  ```

### Anatomy of a theme package

The theme packages aim to be a ready to use solution for integrating the library
in any platform supporting twig:

![default theme](docs/bcl-theme.png)

Each theme comes with the already compiled, production ready, css and js
resources in the respective folders but it also comes with all the source files
needed to build those resources from scratch.
These include the bootstrap 5 source files, each theme defines `bcl-bootstrap`
as a dependency and this package provides the bootstrap files with a bin meant
to build the bootstrap js plugins.

The theme package has all the scripts needed to build the final resources,
which is basically a pipeline of these scripts:
`npm run build-plugins && npm run css && npm run js && npm run twig`

Also the twig templates are included in the the theme package, in the `templates`
folder and with a folder with the name of the component since the twig files are
included as '@oe-bcl/componentName/componentName.html.twig'.

#### Twig loader

The library uses `@oe-bcl` as the namespaces for the templates so a typical
twig-loader would be defined as such:

`loader.addPath(pathToTheTemplatesFolder, "oe-bcl");`

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
4. Run `sudo yarn start` and access `localhost:5000`.

```

```

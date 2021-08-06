## Developer's guidelines

### Architecture of the library

The BCL library is the tool meant to develop all the components and compositions
to be used in a drupal application for creating the desired look and feel for a
specific project.
It is based on the concept of `themes` which can be directly used in a drupal
theme since it provides all the needed resources: js files, css files and twig
templates.
All the components and compositions are using bootstrap markup and the default
styles and behaviours, unless amended or overridden by the theme, are provided
by the bootstrap library, its sources are compiled by the library in a way as
close as possible to the one released by bootstrap itself.

#### The monorepo

Bootrap Component Library is a `monorepo`, both in terms of the fact that it
holds multiple npm packages as well as multiple "websites" in a single repository.
All the packages have the same versioning and each release happens at the
same time for all the packages defined in the library.
The websites (storybook instances) are released independently in production,
while they are collected together in the same domain for the previews of the
custom branches.

#### Themes

The main goal of this library is to release `npm packages` to be used in a drupal
theme to achieve a certain UI for a website or web application.
The way the library provides all the needed resources is through the theme
packages, these are basically containers for the source files (twig, sass, js)
specifically defined by the theme and the storybook instance used to demo the
project's styleguide.
Themes are located in `src/themes` and they all have a very similar structure,
they all have a `bcl-builder.config.js` file which determines their status when
they are build, scss and js files are compiled and minified, resources as
templates and stories are copied using the `bcl-builder` following the
configuration in this file.
The storybook instances are not part of the packages released, they are only
used by the library to build the styleguides that are then publicly hosted as
websites accessible by any user.

#### Bootstrap

The library is heavily based on bootstrap, the default components are basically
twig implementations of the components as defined by bootstrap.
There shouldn't be any need of using the bootstrap sources in an application
when using a theme provided by the library but in any case a package with all the
bootstrap sources is released and maintained by the BCL library.
The package name is `@openeuropa/bcl-bootstrap` and the folder where it is
defined in the library is `bootstrap`.
The library uses Bootstrap 5, the demos are all having links to the bootstrap
documentation for giving full access to the available information about a certain
component or functionality.
Application using any of the theme provided by the library should not have any
dependency on bootstrap, the library is providing it and updating it when needed,
in exceptional cases, though, it is possible at the application level, by using
the aforementioned package and the `bcl-builder`, to recompile all the bootstrap
sources.
This usage of the library is discouraged but still possible.

#### Components

Components are stored in `src/components`, in a folder with the name of the
package that it contains
Ex: `src/components/bcl-accordion/accordion.html.twig`.
These are basically the components for how they are defined by bootstrap, each
folder contains one or more `*.html.twig` templates, a `*.story.js` file defining
the demos that storybook will show, a `*.test.js` file defining test scenarios
for jest to render and store the resulting html markup.
These components are the ones defining the basic elements, atoms of the library,
they can then be overridden by a theme package developed for a specific project.

##### Drupal attributes

Being the library used in drupal websites, to facilitate the usage of the
templates provided, the drupal `Attribute` object is used, this way the
attributes defined by the templates can be easily combined with the ones coming
from the drupal application.

#### Compositions

Compositions are stored in `src/compositions`.
These are examples provided by the library of more complex layouts, they
might indeed only contain an html markup to be used as the model to be reproduced
in the application using it.
Being part of the library, though, they can be written in `twig` if that is
convenient for the developer, in any case it is not foreseen the usage of those
twig templates in the drupal application and it is not needed to release them as
npm packages.

#### Stories

Stories are the demos that storybook will present in the styleguide, the
default stories are defined in the components folder as a `*.story.js` file,
these stories can be used by any of the themes and be combined with custom
stories belonging to the project's styleguide.
The folder containing all the stories in a theme package is `storybook`, the
default stories are copied in `storybook/bcl-stories` while the new or overriding
ones can be defined in `storybook/stories`.

##### Combining stories in the theme packages

All the default stories are used by default by all the different themes, but
they can also be cherry-picked in order to combine them with the stories
defined by the single projects.
There is one file in each theme, in the `src/themes/{theme}/storybook/stories`
folder, called `bcl-stories.js` where a list of the stories to be excluded can
be provided.
This folder is also the place where to store the custom stories defined by the
project, storybook will read the stories from the `bcl-stories` folder and the
`stories` folder inside the `storybook` folder of each theme, so that the
developer can freely combine default and custom stories in the project's
styleguide.
The stories are sorted alphabetically.

#### Working on the default stories

Since the different storybook instances defining the styleguides are using a
copied version of the default stories, it's not convenient to work on any of them
when it's about editing the story files.
Running `yarn storybook` another instance of storybook will be started reading
from the stories defined in the `components` folder, this way all the changes in
the `*.story.js` file will be immediately visible in the instance.

### Overriding and adding twig templates in a theme

All the templates available in `src/components/` are copied in the `templates`
folder of each theme so that the npm package will also contain those once it's
released.
Default templates can be overridden in the theme package, as well as others can
be added by placing them in the `custom-templates` folder available in each theme.
The structure of the content of this folder should be similar to the
`src/components` one, the template should be stored in a folder with the
package name, although these are not meant to be released as individual npm
packages, at the moment.
To override an existing template from BCL the same identical name has to be used,
both for the folder and the template name.
The overridden template has to be added in the `custom-templates/bcl-templates.js`
file so that it will not be copied the `templates` folder.

Ex: To exclude the default table template, you would export in the `bcl-templates.js`
file an array like this `['table']`
The element added to the array has to be the template name without the `html.twig`
extension.

To add a new template a custom name has to be chosen, for consistency they should
always be included the same way the default template are:
`{% include '@oe-bcl/bcl-button/button.html.twig' with {} only %}`
so that a single namespace can be handled by the twig loader and the twig files
in the `templates` folder of each theme can be directly used also in the drupal
theme.

#### Stories for an overridden template

Mind the fact that if a component template is overridden then its stories need to
be overridden as well by the theme package.
This means adding the exclusion for the default story in the `bcl-stories.js`
file and defining a new story file in `stories`.

Ex: To exclude the default table story, you would export in the `bcl-stories.js`
file an array like this `['table']`
The element added to the array has to be the story file name without the `story.js`
extension.

If you do so, you will also need to manually run `yarn build:storybook` for the
default stories imported in the theme you are working on to be updated.

### Adding a new theme

The themes have a very similar structure, therefore an existing theme can be
copied in a different folder in `src/themes` and once the needed adaptations are
done it should be already working, including the associated storybook instance.
For this to be available for the developer, though, a series of scripts need to
be added to the main `package.json`, following the existing ones:
`storybook:project`
`build:theme:project`
`dist-storybook:project`
Also the `static/index.html` file should be updated adding a link to the new
folder with the project when deployed.
The configuration of a new theme is mainly the adaptation of the
`ecl-builder.config.js` file, as previously mentioned this file is taking care
of setting up all the needed resources for a theme package.

### Github conventions

On github a loose approach is used while testing the pull request against some
"semantical" meaning, in particular only the title of the pull request is being
checked and it should start with `chore or fix or feat optionally followed by an
 argument in () and :`.
 As a convention please report at the end of the pr title also the jira ticket
 number to easily match the pr against a "task".

### Deployments

Each pull request generate a deployment on netlify on every push of every project
in the library.
In order to reduce the time needed for the build and the deployment and to
limit the resources used as well, it is possible to limit the build to a single
project by using a specific convention in the branch name:
if the branch contains two hashes with the project name in between
Ex: `feat/front-0000#joinup#`
the only project that will be built in the CI is the one between the hashes, and
it's also the only one that will be deployed in the preview.

### Release

[Release docs](release.md)

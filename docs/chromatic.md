## Chromatic

Chromatic is the service used to run visual regressions test on the stories we demo.
While most of the times a story can be good as it is in order to be visually tested,
is some cases you might want to apply tweaks to the stories when testing them.
This can be done in different ways:

- Using `isChromatic()` in a story file.
  With this funvtion it is possible to identify the fact that the story is rendered in chromatic and to conditionally 
  apply modifications to it.

- Defining a separate story file
  When building storybook for chromatic we take into account "all" the story files defined in a component folder,
  while we exclude files starting with test- when normally building storybook.
  A file named `test-{component}.story.js` can be added to define additional stories to be tested on chromatic.
  These stories will basically merge with the default ones if they are exported in the same storybook "menu item".


- Adding the `chromatic-ignore` class where needed
  In some cases there are elements in our demos that can change at each visualization, typically random images in a listing,
  the `chromatic-ignore` class can be added where needed for chromatic to ignore changes in that element.


## Using chromatic

Since the number of screenshots provided for free by chromatic is limited, its usage needs to be optimized as much as possible.
Because of this, the only branches that will be taken into account for chromatic builds are the ones specifying a theme
in their name: `{issue}#{theme}#`

The creation of a such a branch it's simplified by the command:

`yarn prepare-env theme issue`

This will create a branch following the pattern mentioned earlier, make an empty commit (to add [skip-actions] in the comment) and push the branch.
This triggers the "baseline" workflow in github which is meant to create snapshots for the right theme to be used as the comparison for the UI tests.
The `[skip-actions]` will prevent a second workflow to run on the same commit, this workflow is intended to be run only when the developer needs
an approval by the designers regarding the changes made.
That's why the skip-actions comment will be added to all the commits in a branch where chromatic is enabled.

To run a build on chromatic a message can be added to the commit `[chromatic]`, this will trigger the build "deployment on chromatic".


## UI Review

In chromatic you can assign a reviewer that will approve or deny the changes found. If the changes are approved the mark in github will turn green
and the pull request can be safely merged.


## Changes in all themes

Chromatic is only working on one of our themes per pull request, most likely the changes are going to affect multiple themes, in this case
the `default`  theme can be used when running `prepare-env` and the review is going to be made on the default theme snapshots.
Reviewing the changes in the other themes can be done by accessing the available netlify preview, without any support by chromatic.

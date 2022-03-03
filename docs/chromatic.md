## Chromatic

Chromatic is the service used to run visual regressions test on the stories we demo.
While most of the times a story can be good as it is in order to be visually tested,
is some cases you might want to apply tweaks to the stories when testing them.
This can be done in different ways:

- Using `isChromatic()` in a story file.
  With this it is possible to identify the fact that the story is rendered in chromatic and to conditionally 
  apply modifications to the story.
  Many times this is used in BCL to add a play function using the interactions plugin, that is available in the
  chromatic build.

- Defining a separate story file
  When building storybook for chromatic we take into account "all" the story files defined in a component folder,
  while we exclude files starting with test- when normally building storybook.
  A file named `test-{component}.story.js` can be added to define additional stories to be tested on chromatic.
  These stories will basically merge with the default ones if they are exported in the same storybook "menu item".


- Adding the `chromatic-ignore` class where needed
  In some cases there are elements in our demos that can change at each visualization, typically random images in a listing,
  the `chromatic-ignore` class can be added where needed for chromatic to ignore changes in that element.

## Workflow

### Git branches

In this project some conventions are used to properly relate code changes to buisiness requests 
and to optmimize the internal worklow between designers and developers.

Typically a branch will be named like this:

`OEL-XXX-fix-for-something`

Due to the architecture of the BCL project, sometimes changes might be only expected in a sub-project and in those cases,
to ensure the possibility of testing visual regressions, branches should contain the name of the sub-project, like this:

`OEL-xxx-fix-something#joinup#`

Additionally, when pushing for the first time the new branch, a build for the right theme will start on the development branch
and will then used as the baseline for the upcoming builds.

### Labels

Please ensure for each of the pull request that the right labels are associated to it.
We use two label types, basically:

- process (to reflect the status of the pull request)
- tag (to associate a scope to the pr)

Never add more than one label per type, especially for the tag, because those would result in duplicated rows in the CHANGELOG.

### PR checks

Some tests are enforced in the CI to ensure the stability of the project:

- audit (to check the status of the dependency tree of the project)
- size ( to check the size of the main deliverables (css and js))
- Code style (js, scss, twig), using prettier
- Snapshots test (jest)

### CI

BCL uses netlify to host previews of the BCL website containing all the styleguides.
Previews are generated for each pull request, but also special previews are created for the development branch, the master branch
and when a tag is created (new release)


# Reviews

- Code reviews on github

The first is always required, while a UI review might not be needed in certain cases.
When code changes are producing also changes in the rendering of the demos in the different projects a UI review is expected before 
merging the pull request.
It's possible to assing directly a reviewer in chromiuim and this could speed up the process, when the review is completed the status
of the check in the github pull request will change accordingly.










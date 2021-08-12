const drupalAttribute = require("drupal-attribute");

module.exports = {
  attributes: new drupalAttribute(),
  breakpoint: "md",
  brand: {
    src: "/src/themes/joinup/images/logo.svg",
    alt: "JoinUp logo",
    motto: "Interoperability solutions",
    link: "/example.html",
  },
  collapse_id: "navbar",
  list_id: "list",
  anchors: [
    {
      link: '/example.html',
      label: 'About us',
      extra_attributes: '',
    },
    {
      link: '/example.html',
      label: 'Log in',
      extra_attributes: 'target="_blank"',
    },
  ],
  buttons: [
    {
      id: 'getStarted',
      label: 'Get started',
      type: 'teaser',
      teaser: {
        title: 'Create an account',
        text: 'As a signed-in user you can create content, become a member of a community, receive notifications on your favourite solutions and topics, and access all other features available on the platform.',
        cta: {
          link: '/example.html',
          label: 'About EU Login'
        }
      },
    },
  ],
};

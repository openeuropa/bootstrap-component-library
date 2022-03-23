module.exports = {
  background: "white",
  title: {
    content: "This is the title of this page",
  },
  links: [
    {
      label: "Linkedin",
      icon_position: "before",
      icon: {
        path: "/icons.svg",
        name: "linkedin",
      },
    },
    {
      label: "Contact",
      icon_position: "before",
      icon: {
        path: "/icons.svg",
        name: "envelope-fill",
      },
    },
    {
      label: "Download CV",
      icon_position: "before",
      icon: {
        name: "file-arrow-down-fill",
        path: "/icons.svg",
      },
    },
  ],
  content: `<div class="mb-4 mt-4">
      <span class="text-muted me-3">8 hours ago</span>
     </div>
     <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse volutpat ultricies massa, a dapibus libero porta nec.
        Sed facilisis dictum vestibulum. Fusce commodo hendrerit diam, pretium tempus leo varius sit amet.
        Etiam interdum, orci at sagittis luctus, lorem libero tempus mauris, a fermentum libero orci semper lacus.
        Duis tristique fringilla magna, eu egestas dolor molestie non.
     </p>`,
};

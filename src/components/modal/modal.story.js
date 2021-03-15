import modal from "./modal.html.twig";

// Controls
const getArgTypes = (data) => {
  return {
    size: {
      name: 'size',
      type: { name: 'select' },
      defaultValue: '',
      description: 'Modal size',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '' },
        category: 'Style',
      },
      control: {
        type: 'select',
        options: {
          default: '',
          small: 'sm',
          large: 'lg', 
          'extra large': 'xl', 
          fullscreen: 'fullscreen'
        },
      },
    },
    id: { control: false, table:{ disable:true } },
    header: { control: false, table:{ disable:true } },
    body: { control: false, table:{ disable:true } },
    footer: { control: false, table:{ disable:true } },
  }
}

// Decoration
const modalButton = (story, controls) => {
  const demo = story();
  return `<button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">Launch demo modal</button>${demo}`;
};

// Data
const demoData = {
  id: 'exampleModal',
  header: '<h5 class="modal-title" id="exampleModalLabel">Modal title</h5><button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>',
  body: 'Modal body',
  footer: '<button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button><button type="button" class="btn btn-primary">Save changes</button>',
};

// Stories
export default {
  title: "Components/Modal",
};

export const Modal = (args) => modal(args);

Modal.storyName = "default";
Modal.args = demoData;
Modal.argTypes = getArgTypes();
Modal.decorators = [modalButton];

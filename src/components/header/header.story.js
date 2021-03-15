import header from "./header.html.twig";

// Controls
const getArgTypes = (data) => {
  return {
    logo: { control: false, table:{ disable:true } },
    navbar: { control: false, table:{ disable:true } },
    login: { control: false, table:{ disable:true } },
    language: { control: false, table:{ disable:true } },
  }
}

// Data
const demoData = {
  login: {
    link: {
      label: 'Log in',
    },
    modal: {
      id: 'loginModal',
      header: 
        '<h5 class="modal-title" id="loginModalLabel">Log in</h5>' +
        '<button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>'
      ,
      body: 
        '<h5>Disclaimer 1</h5>' +
        '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum accumsan eget orci eu aliquet. Suspendisse potenti. Integer volutpat, nisl et placerat tincidunt</p>' +
        '<h5>Disclaimer 2</h5>' +
        '<p>Duis bibendum tristique lobortis. Nam luctus nisi sit amet turpis faucibus, ut dapibus elit sollicitudin. Phasellus a massa magna. Nullam ac imperdiet leo.</p>'
      ,
      footer: 
        '<button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>' +
        '<button type="button" class="btn btn-primary">Access EU login</button>'
      ,
    },
  },
  language: {
    link: {
      label: 'English',
    },
    modal: {
      id: 'languageModal',
      size: 'fullscreen',
      extra_class: 'oe-language',
      header: 
        '<h5 class="modal-title" id="languageeModalLabel">Select your language</h5>' +
        '<button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>'
      ,
      body: 
        '<div class="container">' +
          '<div class="row">' +
            '<div class="col col-lg-8 offset-lg-2">' +
              '<h5 class="oe-language__title">EU official languages</h5>' +
            '</div>' +
          '</div>' +
          '<div class="row">' +
            '<div class="col col-lg-4 offset-lg-2">' +
              '<div class="oe-language__list">' +
                '<a href="#" class="oe-language__item">Language 01</a>' +
                '<a href="#" class="oe-language__item">Language 02</a>' +
                '<a href="#" class="oe-language__item">Language 03</a>' +
              '</div>' +
            '</div>' +
            '<div class="col col-lg-4">' +
              '<div class="oe-language__list">' +
                '<a href="#" class="oe-language__item">Language 04</a>' +
                '<a href="#" class="oe-language__item">Language 05</a>' +
                '<a href="#" class="oe-language__item">Language 06</a>' +
              '</div>' +
            '</div>' +
          '</div>' +
          '<div class="row">' +
            '<div class="col col-lg-8 offset-lg-2">' +
              '<h5 class="oe-language__title">Non EU languages</h5>' +
            '</div>' +
          '</div>' +
          '<div class="row">' +
            '<div class="col col-lg-4 offset-lg-2">' +
              '<div class="oe-language__list">' +
                '<a href="#" class="oe-language__item">Language 07</a>' +
                '<a href="#" class="oe-language__item">Language 08</a>' +
              '</div>' +
            '</div>' +
            '<div class="col col-lg-4">' +
              '<div class="oe-language__list">' +
                '<a href="#" class="oe-language__item">Language 09</a>' +
                '<a href="#" class="oe-language__item">Language 10</a>' +
              '</div>' +
            '</div>' +
          '</div>' +
        '</div>'
      ,
      footer: 
        '<button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>'
      ,
    },
  }
}

// Stories
export default {
  title: "Components/Header",
};

export const Header = (args) => header(args);

Header.storyName = "default";
Header.args = demoData,
Header.argTypes = getArgTypes();
Header.parameters = {
  cssresources: [
    {
      id: "oe",
      code: `<link rel="stylesheet" type="text/css" href="css/oe.min.css" />`,
      picked: true,
      hideCode: true,
    },
  ],
};

const headerECLData = {
  logo: {
    src: "https://ec.europa.eu/info/sites/info/themes/europa/images/svg/logo/logo--en.svg",
    width: "240",
    height: "60",
  },
  navbar: {
    color_set: "dark",
  },
  login: demoData.login,
  language: demoData.language,
};
export const HeaderECL = (args) => header(args);

HeaderECL.storyName = "ECL branding";
HeaderECL.args = headerECLData,
HeaderECL.argTypes = getArgTypes();
HeaderECL.parameters = {
  cssresources: [
    {
      id: "oe-ecl",
      code: `<link rel="stylesheet" type="text/css" href="css/oe-ecl.min.css" />`,
      picked: true,
      hideCode: true,
    },
  ],
};

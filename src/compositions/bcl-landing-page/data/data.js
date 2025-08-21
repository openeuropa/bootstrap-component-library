import layout from "@openeuropa/bcl-base-templates/data/layout";

import demoData from "@openeuropa/bcl-landing-page/data/data--details";

const header = layout[`header_default`] || layout.headerSimple;

const dataLanding = {
  content_type: "landing-page",
  header,
  footer: layout.footer,
  with_banner: true,
  with_header: true,
  with_footer: true,
  ...demoData,
};

export default dataLanding;

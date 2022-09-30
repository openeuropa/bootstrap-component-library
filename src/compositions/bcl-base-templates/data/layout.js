import headerSimple from "@openeuropa/bcl-data-header/data--simple";
import headerNoForm from "@openeuropa/bcl-data-header/data--no-form";
import footerData from "@openeuropa/bcl-data-footer/data";
import header_ucpkn from "@openeuropa/bcl-data-header/data--ucpkn";
import header_joinup from "@openeuropa/bcl-data-header/data--neutral";
import drupalAttribute from "drupal-attribute";

const footer = {
  ...footerData,
  attributes: new drupalAttribute().addClass(["mt-md-2"]),
};

export default {
  headerSimple,
  headerNoForm,
  footer,
  header_ucpkn,
  header_joinup,
};

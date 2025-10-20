import headerSimple from "@openeuropa/bcl-data-header/data--simple";
import headerNoForm from "@openeuropa/bcl-data-header/data--no-form";
import footerData from "@openeuropa/bcl-data-footer/data";
import header_ucpkn from "@openeuropa/bcl-data-header/data--ucpkn";
import header_joinup from "@openeuropa/bcl-data-header/data--neutral";
import { DrupalAttribute } from "drupal-attribute";

const footer = {
  ...footerData,
  attributes: new DrupalAttribute().addClass(["mt-md-4-75", "mt-4"]),
};

export default {
  headerSimple,
  headerNoForm,
  footer,
  header_ucpkn,
  header_joinup,
};

import { DrupalAttribute } from "drupal-attribute";
import layout from "@openeuropa/bcl-base-templates/data/layout";
import dataFile from "@openeuropa/bcl-file/data/data";

const file1 = JSON.parse(JSON.stringify(dataFile));
file1.translation.id = "language-dropdown-1";
const files = [dataFile, file1];

const demoDataDetail = {
  footer: layout.footer,
  header: layout.headerSimple,
  banner: {
    title: "Active substance",
    content: "The substance responsible for the activity of a medicine.",
    attributes: new DrupalAttribute().addClass("pb-4", "pb-md-4-75"),
  },
  files,
};

export default demoDataDetail;

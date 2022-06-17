import drupalAttribute from "drupal-attribute";
import layout from "@openeuropa/bcl-base-templates/data/layout";
import dataFile from "@openeuropa/bcl-file/data/data";

const files = [dataFile, dataFile];

const demoDataDetail = {
  footer: layout.footer,
  header: layout.headerSimple,
  banner: {
    title: "Active substance",
    content: "The substance responsible for the activity of a medicine.",
    attributes: new drupalAttribute().addClass("pb-4", "pb-md-4-75"),
  },
  files,
};

export default demoDataDetail;

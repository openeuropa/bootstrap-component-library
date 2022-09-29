import drupalAttribute from "drupal-attribute";
import layout from "@openeuropa/bcl-base-templates/data/layout";
import dataFile from "@openeuropa/bcl-file/data/data";

const file1 = JSON.parse(JSON.stringify(dataFile));
const file2 = JSON.parse(JSON.stringify(dataFile));
file1.translation.id = "file-translation-1";
file2.translation.id = "file-translation-2";
const files = [
  { ...file1, attributes: new drupalAttribute().addClass("mb-4") },
  file2,
];

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

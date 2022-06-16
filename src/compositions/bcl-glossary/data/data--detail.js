import layout from "@openeuropa/bcl-base-templates/data/layout";
import dataFile from "@openeuropa/bcl-file/data/data";

const files = [dataFile, dataFile];

const demoDataDetail = {
  footer: layout.footer,
  header: layout.headerSimple,
  banner: {
    title: "Active substance",
    content: "The substance responsible for the activity of a medicine.",
  },
  files,
};

export default demoDataDetail;

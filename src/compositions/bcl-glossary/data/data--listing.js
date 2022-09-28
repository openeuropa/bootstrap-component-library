import glossary from "@openeuropa/bcl-glossary/data/data--glossary";
import { pagination } from "@openeuropa/bcl-base-templates/data/listing-page";
import layout from "@openeuropa/bcl-base-templates/data/layout";
import {
  sortBy,
  itemsPerPage,
} from "@openeuropa/bcl-glossary/data/data--select";

const demoListing = {
  sortBy,
  itemsPerPage,
  listing: {
    variant: "default-1-col",
    remove_horizontal_spacer: true,
    responsive_vertical_spacer: "md",
    items: [
      {
        title: "Accelerated assessment",
        title_link: {
          path: `/example.html`,
        },
        text: {
          content:
            "Rapid assessment of medicines in the centralised procedure that are of major interest for public health, especially ones that are therapeutic innovations. Accelerated assessment usually takes 150 evaluation days, rather than 210.",
        },
      },
      {
        title: "Access to documents",
        title_link: {
          path: `/example.html`,
        },
        text: {
          content:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin dignissim, quam at sollicitudin volutpat, ipsum arcu maximus massa, quis egestas diam tellus vitae nulla.",
        },
      },
      {
        title: "Active substance",
        title_link: {
          path: `/example.html`,
        },
        text: {
          content:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ut ex tristique, dignissim sem ac, bibendum est. Sed vehicula lorem non nunc tincidunt hendrerit. Nunc tristique ante et fringilla fermentum.",
        },
      },
      {
        title: "Active substance master file",
        title_link: {
          path: `/example.html`,
        },
        text: {
          content:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ut ex tristique, dignissim sem ac, bibendum est. Sed vehicula lorem non nunc tincidunt hendrerit. Nunc tristique ante et fringilla fermentum.",
        },
      },
      {
        title: "Adjuvant",
        title_link: {
          path: `/example.html`,
        },
        text: {
          content:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ut ex tristique, dignissim sem ac, bibendum est. Sed vehicula lorem non nunc tincidunt hendrerit. Nunc tristique ante et fringilla fermentum.",
        },
      },
      {
        title: "Advanced therapy medicinal product",
        title_link: {
          path: `/example.html`,
        },
        text: {
          content:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ut ex tristique, dignissim sem ac, bibendum est. Sed vehicula lorem non nunc tincidunt hendrerit. Nunc tristique ante et fringilla fermentum.",
        },
      },
      {
        title: "Adverse drug reaction",
        title_link: {
          path: `/example.html`,
        },
        text: {
          content:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ut ex tristique, dignissim sem ac, bibendum est. Sed vehicula lorem non nunc tincidunt hendrerit. Nunc tristique ante et fringilla fermentum.",
        },
      },
      {
        title: "Adverse event",
        title_link: {
          path: `/example.html`,
        },
        text: {
          content:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ut ex tristique, dignissim sem ac, bibendum est. Sed vehicula lorem non nunc tincidunt hendrerit. Nunc tristique ante et fringilla fermentum.",
        },
      },
      {
        title: "Ancillary human blood derivative",
        title_link: {
          path: `/example.html`,
        },
        text: {
          content:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ut ex tristique, dignissim sem ac, bibendum est. Sed vehicula lorem non nunc tincidunt hendrerit. Nunc tristique ante et fringilla fermentum.",
        },
      },
      {
        title: "Ancillary medicinal substance",
        title_link: {
          path: `/example.html`,
        },
        text: {
          content:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ut ex tristique, dignissim sem ac, bibendum est. Sed vehicula lorem non nunc tincidunt hendrerit. Nunc tristique ante et fringilla fermentum.",
        },
      },
      {
        title: "Annual re-assessment",
        title_link: {
          path: `/example.html`,
        },
        text: {
          content:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ut ex tristique, dignissim sem ac, bibendum est. Sed vehicula lorem non nunc tincidunt hendrerit. Nunc tristique ante et fringilla fermentum.",
        },
      },
      {
        title: "Article 58 application",
        title_link: {
          path: `/example.html`,
        },
        text: {
          content:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ut ex tristique, dignissim sem ac, bibendum est. Sed vehicula lorem non nunc tincidunt hendrerit. Nunc tristique ante et fringilla fermentum.",
        },
      },
      {
        title: "ATC code",
        title_link: {
          path: `/example.html`,
        },
        text: {
          content:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ut ex tristique, dignissim sem ac, bibendum est. Sed vehicula lorem non nunc tincidunt hendrerit. Nunc tristique ante et fringilla fermentum.",
        },
      },
      {
        title: "Ancillary medicinal substance",
        title_link: {
          path: `/example.html`,
        },
        text: {
          content:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ut ex tristique, dignissim sem ac, bibendum est. Sed vehicula lorem non nunc tincidunt hendrerit. Nunc tristique ante et fringilla fermentum.",
        },
      },
      {
        title: "Ancillary medicinal substance",
        title_link: {
          path: `/example.html`,
        },
        text: {
          content:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ut ex tristique, dignissim sem ac, bibendum est. Sed vehicula lorem non nunc tincidunt hendrerit. Nunc tristique ante et fringilla fermentum.",
        },
      },
    ],
  },
};

const demoDataListing = {
  footer: layout.footer,
  header: layout.headerSimple,
  banner: {
    title: "Glossary",
    content: `<p>Glossary of regulatory terms gives definitions for the main regulatory terms used on this website and in XXX documents.</p>
           <p>Disclaimer: XXX has developed the definitions in this glossary to help this website's users understand regulatory terminology. Definitions may differ from those given in European Union legislation.`,
  },
  ...demoListing,
  glossary,
  pagination,
};

export default demoDataListing;

import { withDesign } from "storybook-addon-designs";
import withCode from "@openeuropa/storybook-addon-code";
import { correctPaths } from "@openeuropa/bcl-story-utils";

import dataAlert from "@openeuropa/bcl-data-alert/data.js";
import dataAccordion from "@openeuropa/bcl-data-accordion/data.js";
import dataBanner from "@openeuropa/bcl-banner/data/data.js";
import dataCard from "@openeuropa/bcl-data-card/data.js";
import dataTable from "@openeuropa/bcl-data-table/data.js";
import dataHeader from "@openeuropa/bcl-data-header/data--neutral.js";
import dataFooter from "@openeuropa/bcl-data-footer/data.js";
import dataBlockquote from "@openeuropa/bcl-data-blockquote/data.js";
import dataDescriptionList from "@openeuropa/bcl-description-list/data/data.js";
import dataFactFigures from "@openeuropa/bcl-fact-figures/data.js";
import dataLinksBlock from "@openeuropa/bcl-links-block/data/data.js";
import dataTimeline from "@openeuropa/bcl-timeline/data.js";
import dataListing from "@openeuropa/bcl-listing/data/listing--default-1-col.js";
import dataFile from "@openeuropa/bcl-file/data/data.js";

import dataContentBanner from "@openeuropa/bcl-color-scheme/data/content-banner/data.js";
import dataCarousel from "@openeuropa/bcl-color-scheme/data/carousel/data.js";
import dataGallery from "@openeuropa/bcl-color-scheme/data/gallery/data.js";

import alert from "@openeuropa/bcl-alert/alert.html.twig";
import accordion from "@openeuropa/bcl-accordion/accordion.html.twig";
import banner from "@openeuropa/bcl-banner/banner.html.twig";
import carousel from "@openeuropa/bcl-carousel/carousel.html.twig";
import gallery from "@openeuropa/bcl-gallery/gallery.html.twig";
import contentBanner from "@openeuropa/bcl-content-banner/content-banner.html.twig";
import card from "@openeuropa/bcl-card/card.html.twig";
import table from "@openeuropa/bcl-table/table.html.twig";
import blockquote from "@openeuropa/bcl-blockquote/blockquote.html.twig";
import descriptionList from "@openeuropa/bcl-description-list/description-list.html.twig";
import factFigures from "@openeuropa/bcl-fact-figures/fact-figures.html.twig";
import linksBlock from "@openeuropa/bcl-links-block/links-block.html.twig";
import timeline from "@openeuropa/bcl-timeline/timeline.html.twig";
import listing from "@openeuropa/bcl-listing/listing.html.twig";
import file from "@openeuropa/bcl-file/file.html.twig";

import footer from "@openeuropa/bcl-footer/footer.html.twig";
import header from "@openeuropa/bcl-header/header.html.twig";

import drupalAttribute from "drupal-attribute";

const resetAttrs = (data, args) => {
  data.attributes.removeClass(["ocean", "bg-default", "text-color-default"]);
  if (args.centered) {
    data.attributes.addClass("text-center");
  }
};

const applyArgs = (data, args) => {
  if (!data.attributes) {
    data.attributes = new drupalAttribute();
  }

  resetAttrs(data, args);

  data.attributes.addClass("ocean");
  data.attributes.addClass("bg-default");
  data.attributes.addClass("text-color-default");

  return Object.assign(correctPaths(data), args);
};

const renderAccordionStory = (data, args) => {
  const story = accordion(applyArgs(data, args));

  return story;
};

const renderAlertStory = (data, args) => {
  const story = alert(applyArgs(data, args));

  return story;
};

const renderBannerStory = (data, args) => {
  const story = banner(applyArgs(data, args));

  return story;
};

const renderContentBannerStory = (data, args) => {
  const story = contentBanner(applyArgs(data, args));

  return story;
};

const renderCarouselStory = (data, args) => {
  const story = carousel(applyArgs(data, args));

  return story;
};

const renderGalleryStory = (data, args) => {
  const story = gallery(applyArgs(data, args));

  return story;
};

const renderCardStory = (data, args) => {
  const story = card(applyArgs(data, args));

  return story;
};

const renderTableStory = (data, args) => {
  const story = table(applyArgs(data, args));

  return story;
};

const renderHeaderStory = (data, args) => {
  const story = header(applyArgs(data, args));

  return story;
};

const renderFooterStory = (data, args) => {
  const story = footer(applyArgs(data, args));

  return story;
};

const renderBlockquoteStory = (data, args) => {
  const story = blockquote(applyArgs(data, args));

  return story;
};

const renderTimelineStory = (data, args) => {
  const story = timeline(applyArgs(data, args));

  return story;
};

const renderFactFiguresStory = (data, args) => {
  const story = factFigures(applyArgs(data, args));

  return story;
};

const renderDescriptionListStory = (data, args) => {
  const story = descriptionList(applyArgs(data, args));

  return story;
};

const renderLinksBlockStory = (data, args) => {
  const story = linksBlock(applyArgs(data, args));

  return story;
};

const renderListingStory = (data, args) => {
  const story = listing(applyArgs(data, args));

  return story;
};

const renderFileStory = (data, args) => {
  const story = file(applyArgs(data, args));

  return story;
};

export default {
  title: "Resources/Color scheme",
  decorators: [withCode, withDesign],
};

export const Alert = (args) => renderAlertStory(dataAlert, args);
Alert.storyName = "Alert";

export const Accordion = (args) => renderAccordionStory(dataAccordion, args);
Accordion.storyName = "Accordion";

export const ContentBanner = (args) =>
  renderContentBannerStory(dataContentBanner, args);
ContentBanner.storyName = "Content Banner";

export const Banner = (args) => renderBannerStory(dataBanner, args);
Banner.storyName = "Banner";

export const Card = (args) => renderCardStory(dataCard, args);
Card.storyName = "Card";

export const Carousel = (args) => renderCarouselStory(dataCarousel, args);
Carousel.storyName = "Carousel";

export const Gallery = (args) => renderGalleryStory(dataGallery, args);
Gallery.storyName = "Gallery";

export const Table = (args) => renderTableStory(dataTable, args);
Table.storyName = "Table";

export const Blockquote = (args) => renderBlockquoteStory(dataBlockquote, args);
Blockquote.storyName = "Blockquote";

export const DescriptionList = (args) =>
  renderDescriptionListStory(dataDescriptionList, args);
DescriptionList.storyName = "Description list";

export const FactFigures = (args) =>
  renderFactFiguresStory(dataFactFigures, args);
FactFigures.storyName = "Fact and Figures";

export const LinksBlock = (args) => renderLinksBlockStory(dataLinksBlock, args);
LinksBlock.storyName = "Links block";

export const Timeline = (args) => renderTimelineStory(dataTimeline, args);
Timeline.storyName = "Timeline";

export const Listing = (args) => renderListingStory(dataListing, args);
Listing.storyName = "Listing";

export const File = (args) => renderFileStory(dataFile, args);
File.storyName = "File";

export const Header = (args) => renderHeaderStory(dataHeader, args);
Header.storyName = "Header";

export const Footer = (args) => renderFooterStory(dataFooter, args);
Footer.storyName = "Footer";

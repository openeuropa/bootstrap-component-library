/**
 * --------------------------------------------------------------------------
 * Bootstrap (v5.1.3): gallery.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */

import { defineJQueryPlugin, typeCheckConfig } from '@openeuropa/bcl-bootstrap/js/src/util/index'
import EventHandler from '@openeuropa/bcl-bootstrap/js/src/dom/event-handler'
import BaseComponent from '@openeuropa/bcl-bootstrap/js/src/base-component'
import SelectorEngine from '@openeuropa/bcl-bootstrap/js/src/dom/selector-engine'
import Manipulator from '@openeuropa/bcl-bootstrap/js/src/dom/manipulator'

/**
 * ------------------------------------------------------------------------
 * Constants
 * ------------------------------------------------------------------------
 */

const Default = {}
const DefaultType = {}

const NAME = 'gallery'
const DATA_KEY = 'bs.gallery'
const EVENT_KEY = `.${DATA_KEY}`
const DATA_API_KEY = '.data-api'

const CAROUSEL_SELECTOR = '.carousel'
const CAROUSEL_PAGER_SELECTOR = '.carousel-pager span'
const CAROUSEL_ACTIVE_SELECTOR = '.carousel-item.active'
const MODAL_SELECTOR = '.modal'
const CAROUSEL_EVENT = 'slide.bs.carousel'
const SELECTOR_DATA_RIDE = '[data-bs-ride="gallery"]'
const EVENT_LOAD_DATA_API = `load${EVENT_KEY}${DATA_API_KEY}`
/**
 * ------------------------------------------------------------------------
 * Class Definition
 * ------------------------------------------------------------------------
 */

class Gallery extends BaseComponent {
  constructor(element, config) {
    super(element)
    this._carousel = SelectorEngine.findOne(CAROUSEL_SELECTOR, this._element)
    this._carouselPager = SelectorEngine.findOne(CAROUSEL_PAGER_SELECTOR, this._element)
    this._carouselActiveItem = SelectorEngine.findOne(CAROUSEL_ACTIVE_SELECTOR, this._element)
    this._modal = SelectorEngine.findOne(MODAL_SELECTOR, this._element)
    this._config = this._getConfig(config)
    this._addEventListeners()
    this._carouselLazyLoad(this._carouselActiveItem);
  }

  // Getters

  static get NAME() {
    return NAME
  }

  // Public
  setSlide(event) {
    const slideFrom = SelectorEngine.findOne('.carousel-item.active', this._carousel)
    const slideTo = event.relatedTarget
    this._carouselLazyLoad(slideTo)
    this._carouselPager.textContent = event.to + 1
    this.stopVideo(slideFrom)
    console.log('io')
  }

  stopSlide() {
    const currentSlide = SelectorEngine.findOne('.carousel-item.active', this._carousel)
    this.stopVideo(currentSlide)
  }

  stopVideo(slide) {
    const iframe = SelectorEngine.findOne('iframe', slide);
    const video = SelectorEngine.findOne('video', slide);
    if (iframe) {
      iframe.src = iframe.dataset.src;
    } else if (video) {
      video.pause();
    }
  }

  // Private

  _carouselLazyLoad(slide) {
    const media = SelectorEngine.findOne('[data-src]', slide);
    if (media && !media.src) {
      media.src = media.dataset.src;
    }
  }

  _getConfig(config) {
    config = {
      ...Default,
      ...Manipulator.getDataAttributes(this._element),
      ...(typeof config === 'object' ? config : {})
    }
    typeCheckConfig(NAME, config, DefaultType)
    return config
  }

  _addEventListeners() {
    EventHandler.on(this._carousel, CAROUSEL_EVENT, event => this.setSlide(event))
    EventHandler.on(this._modal, CAROUSEL_EVENT, event => this.stopSlide(event))
  }

  // Static

  static get Default() {
    return Default
  }

  static galleryInterface(element, config) {
    const data = Gallery.getOrCreateInstance(element, config)

    let { _config } = data
    if (typeof config === 'object') {
      _config = {
        ..._config,
        ...config
      }
    }
  }

  static jQueryInterface(config) {
    return this.each(function () {
      const data = Gallery.getOrCreateInstance(this)

      if (typeof config !== 'string') {
        return
      }

      if (data[config] === undefined || config.startsWith('_') || config === 'constructor') {
        throw new TypeError(`No method named "${config}"`)
      }

      data[config](this)
    })
  }
}

/**
 * ------------------------------------------------------------------------
 * Data Api implementation
 * ------------------------------------------------------------------------
 */

EventHandler.on(window, EVENT_LOAD_DATA_API, () => {
  const galleries = SelectorEngine.find(SELECTOR_DATA_RIDE)

  for (let i = 0, len = galleries.length; i < len; i++) {
    Gallery.galleryInterface(galleries[i], Gallery.getInstance(galleries[i]))
  }
})

/**
 * ------------------------------------------------------------------------
 * jQuery
 * ------------------------------------------------------------------------
 * add .gallery to jQuery only if jQuery is present
 */

defineJQueryPlugin(Gallery)

export default Gallery

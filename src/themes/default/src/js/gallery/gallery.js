/**
 * --------------------------------------------------------------------------
 * Bootstrap (v5.1.3): gallery.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */

import { defineJQueryPlugin } from '@openeuropa/bcl-bootstrap/js/src/util/index'
import EventHandler from '@openeuropa/bcl-bootstrap/js/src/dom/event-handler'
import BaseComponent from '@openeuropa/bcl-bootstrap/js/src/base-component'
import SelectorEngine from '@openeuropa/bcl-bootstrap/js/src/dom/selector-engine'

/**
 * ------------------------------------------------------------------------
 * Constants
 * ------------------------------------------------------------------------
 */

const Default = {}

const NAME = 'gallery'
const DATA_KEY = 'bs.gallery'
const EVENT_KEY = `.${DATA_KEY}`
const DATA_API_KEY = '.data-api'

const CAROUSEL_SELECTOR = '.carousel'
const CAROUSEL_PAGER_SELECTOR = '.carousel-pager span'
const CAROUSEL_ACTIVE_SELECTOR = '.carousel-item.active'
const CAROUSEL_ITEM_SELECTOR = '.carousel-item'
const THUMBNAIL_SELECTOR = '.bcl-gallery__grid a, .bcl-gallery__mobile-view-more'
const MODAL_SELECTOR = '.modal'
const EVENT_MODAL_HIDE = 'hide.bs.modal'
const CAROUSEL_EVENT = 'slide.bs.carousel'
const EVENT_CLICK_DATA_API = `click${EVENT_KEY}${DATA_API_KEY}`

/**
 * ------------------------------------------------------------------------
 * Class Definition
 * ------------------------------------------------------------------------
 */

class Gallery extends BaseComponent {
  constructor(element, config) {
    super(element, config)
    /* eslint no-underscore-dangle: ["error", { "allow": ["_element"] }] */
    this.carousel = SelectorEngine.findOne(CAROUSEL_SELECTOR, this._element)
    this.carouselPager = SelectorEngine.findOne(CAROUSEL_PAGER_SELECTOR, this._element)
    this.carouselStartIndex = element.getAttribute('data-gallery-start')
    this.carouselActiveItem = SelectorEngine.find(CAROUSEL_ITEM_SELECTOR, this.carousel)[this.carouselStartIndex]
    this.carouselPager.textContent = Number(this.carouselStartIndex) + 1
    this.modal = SelectorEngine.findOne(MODAL_SELECTOR, this._element)
    this.addEventListeners()
    this.carouselLazyLoad(this.carouselActiveItem)
  }

  // Getters
  static get NAME() {
    return NAME
  }

  // Public
  setSlide(event) {
    const slideFrom = SelectorEngine.findOne(CAROUSEL_ACTIVE_SELECTOR, this.carousel)
    const slideTo = event.relatedTarget
    this.carouselLazyLoad(slideTo)
    this.carouselPager.textContent = event.to + 1
    this.stopVideo(slideFrom)
  }

  stopSlide() {
    const currentSlide = SelectorEngine.findOne(CAROUSEL_ACTIVE_SELECTOR, this.carousel)
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
  carouselLazyLoad(slide) {
    const media = SelectorEngine.findOne('[data-src]', slide);

    if (media && !media.src) {
      media.src = media.dataset.src;
    }
  }

  addEventListeners() {
    EventHandler.on(this.carousel, CAROUSEL_EVENT, event => this.setSlide(event))
    EventHandler.on(this.modal, EVENT_MODAL_HIDE, event => this.stopSlide(event))
  }

  // Static
  static get Default() {
    return Default
  }

  static jQueryInterface(config) {
    return this.each(function jInterface() {
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

EventHandler.on(document, EVENT_CLICK_DATA_API, THUMBNAIL_SELECTOR, (event) => {
  const gallery = event.target.closest('div.bcl-gallery')
  const firstSlide = event.target.parentNode.getAttribute('data-bs-slide-to');
  gallery.dataset.galleryStart = firstSlide;

  Gallery.getOrCreateInstance(gallery);
})

/**
 * ------------------------------------------------------------------------
 * jQuery
 * ------------------------------------------------------------------------
 * add .gallery to jQuery only if jQuery is present
 */

defineJQueryPlugin(Gallery)

export default Gallery

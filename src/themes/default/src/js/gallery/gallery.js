/**
 * --------------------------------------------------------------------------
 * Bootstrap (v5.1.3): gallery.js (Refactored)
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */

import { defineJQueryPlugin } from '@openeuropa/bcl-bootstrap/js/src/util/index'
import EventHandler from '@openeuropa/bcl-bootstrap/js/src/dom/event-handler'
import BaseComponent from '@openeuropa/bcl-bootstrap/js/src/base-component'
import SelectorEngine from '@openeuropa/bcl-bootstrap/js/src/dom/selector-engine'

const NAME = 'gallery'
const DATA_KEY = 'bs.gallery'
const EVENT_KEY = `.${DATA_KEY}`
const DATA_API_KEY = '.data-api'

const Default = {}

const CAROUSEL_SELECTOR = '.carousel'
const CAROUSEL_PAGER_SELECTOR = '.carousel-pager span'
const CAROUSEL_ACTIVE_SELECTOR = '.carousel-item.active'
const CAROUSEL_ITEM_SELECTOR = '.carousel-item'
const THUMBNAIL_SELECTOR = '.bcl-gallery__grid a, .bcl-gallery__mobile-view-more'
const MODAL_SELECTOR = '.modal'
const EVENT_MODAL_HIDE = 'hide.bs.modal'
const CAROUSEL_EVENT = 'slide.bs.carousel'
const EVENT_CLICK_DATA_API = `click${EVENT_KEY}${DATA_API_KEY}`
const EVENT_KEYDOWN_DATA_API = `keydown${EVENT_KEY}${DATA_API_KEY}`

class Gallery extends BaseComponent {
  constructor(element, config) {
    super(element, config)

    this.carousel = SelectorEngine.findOne(CAROUSEL_SELECTOR, this._element)
    this.carouselPager = SelectorEngine.findOne(CAROUSEL_PAGER_SELECTOR, this._element)
    this.modal = SelectorEngine.findOne(MODAL_SELECTOR, this._element)

    this.carouselStartIndex = element.getAttribute('data-gallery-start') || 0
    const allCarouselItems = SelectorEngine.find(CAROUSEL_ITEM_SELECTOR, this.carousel)

    const startIndexNum = Math.max(
      0,
      Math.min(Number(this.carouselStartIndex), allCarouselItems.length - 1)
    )

    this.carouselPager.textContent = startIndexNum + 1
    this.carouselActiveItem = allCarouselItems[startIndexNum]
    this._carouselLazyLoad(this.carouselActiveItem)

    EventHandler.on(this.carousel, CAROUSEL_EVENT, event => this._handleCarouselSlide(event))

    EventHandler.on(this.modal, EVENT_MODAL_HIDE, () => this._stopSlide())
  }

  // Getters
  static get NAME() {
    return NAME
  }

  static get Default() {
    return Default
  }

  /**
   * Handle the carousel "slide.bs.carousel" event
   * @param {Event} event
   */
  _handleCarouselSlide(event) {
    const previousSlide = SelectorEngine.findOne(CAROUSEL_ACTIVE_SELECTOR, this.carousel)
    const currentSlide = event.relatedTarget

    this._carouselLazyLoad(currentSlide)

    this.carouselPager.textContent = event.to + 1

    this._stopVideo(previousSlide)
  }

  /**
   * Stop the current carousel slide (when modal hides or component is disposed)
   */
  _stopSlide() {
    const currentSlide = SelectorEngine.findOne(CAROUSEL_ACTIVE_SELECTOR, this.carousel)
    this._stopVideo(currentSlide)
  }

  /**
   * Stop any video or iframe in the given slide
   * @param {HTMLElement} slide
   */
  _stopVideo(slide) {
    if (!slide) {
      return
    }
    const iframe = SelectorEngine.findOne('iframe', slide)
    const video = SelectorEngine.findOne('video', slide)

    if (iframe && iframe.dataset.src) {
      iframe.src = iframe.dataset.src
    } else if (video) {
      video.pause()
    }
  }

  /**
   * Lazy load media (img, iframe, video, etc.) by copying data-src into src
   * @param {HTMLElement} slide
   */
  _carouselLazyLoad(slide) {
    if (!slide) {
      return
    }
    const media = SelectorEngine.findOne('[data-src]', slide)
    if (media && !media.src) {
      media.src = media.dataset.src
    }
  }

  /**
   * Internal helper to open the modal and jump to a specific slide
   * @param {HTMLElement} gallery
   * @param {HTMLElement} targetLink
   */
  static _openModalAndShowSlide(gallery, targetLink) {
    if (!gallery || !targetLink) {
      return
    }

    const firstSlide = Number(targetLink.getAttribute('data-bs-slide-to') || 0)
    gallery.dataset.galleryStart = firstSlide

    const instance = Gallery.getOrCreateInstance(gallery)

    const overlay = SelectorEngine.findOne('.bcl-gallery__item-overlay', targetLink)
    if (overlay) {
      const modalId = overlay.getAttribute('data-bs-target')
      const modalElement = document.querySelector(modalId)
      if (modalElement) {
        const modal = bootstrap.Modal.getOrCreateInstance(modalElement)
        modal.show()
      }
    }

    setTimeout(() => {
      const carousel = SelectorEngine.findOne(CAROUSEL_SELECTOR, instance._element)
      const carouselInstance = bootstrap.Carousel.getOrCreateInstance(carousel)
      carouselInstance.to(firstSlide)

      const pager = SelectorEngine.findOne(CAROUSEL_PAGER_SELECTOR, instance._element)
      if (pager) {
        pager.textContent = firstSlide + 1
      }
    }, 50)
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
 * Data API implementation
 * ------------------------------------------------------------------------
 */

const isEnterOrSpace = (event) => {
  return event.key === 'Enter' || event.key === ' '
}

EventHandler.on(document, EVENT_CLICK_DATA_API, THUMBNAIL_SELECTOR, (event) => {
  event.preventDefault()
  const targetLink = event.target.closest('a')
  const gallery = event.target.closest('div.bcl-gallery')
  Gallery._openModalAndShowSlide(gallery, targetLink)
})

EventHandler.on(document, EVENT_KEYDOWN_DATA_API, THUMBNAIL_SELECTOR, (event) => {
  if (!isEnterOrSpace(event)) {
    return
  }
  event.preventDefault()
  const targetLink = event.target.closest('a')
  const gallery = event.target.closest('div.bcl-gallery')
  Gallery._openModalAndShowSlide(gallery, targetLink)
})

defineJQueryPlugin(Gallery)

export default Gallery

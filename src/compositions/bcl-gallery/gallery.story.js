import { withDesign } from "storybook-addon-designs";
import dataDefault from "@openeuropa/bcl-gallery/dataDefault.js";
import gallery from "@openeuropa/bcl-gallery/gallery.html.twig";

const initGallery = (story) => {
  const demo = story();
  return `
    <script>
      const galleries = document.querySelectorAll('.bcl-gallery');

      [].forEach.call(galleries, function(gallery) {
        const carousel = gallery.querySelector('.carousel');
        const carouselPager = gallery.querySelector('.carousel-pager span');
        const carouselActiveItem = gallery.querySelector('.carousel-item.active');
        const modal = gallery.querySelector('.modal');

        carousel.addEventListener('slide.bs.carousel', function (e) {
          const slideFrom = this.querySelector('.carousel-item.active');
          const slideTo = e.relatedTarget;
          carouselLazyLoad(slideTo);
          carouselPager.textContent = e.to + 1;
          stopVideo(slideFrom);
        });

        modal.addEventListener('hidden.bs.modal', function (e) {
          const currentSlide = carousel.querySelector('.carousel-item.active');
          stopVideo(currentSlide);
        });

        carouselLazyLoad(carouselActiveItem);
      });

      function carouselLazyLoad(slide) {
        const media = slide.querySelector('[data-src]');
        if(!media.src) {
          media.src = media.dataset.src;
        }
      }

      function stopVideo(slide) {
        const iframe = slide.querySelector('iframe');
        const video = slide.querySelector('video');
        if (iframe) {
          iframe.src = iframe.dataset.src;
        } else if (video) {
          video.pause();
        }
      }
    </script>
  ${demo}`;
};

export default {
  title: "Paragraphs/Gallery",
  decorators: [withDesign, initGallery],
  parameters: {
    design: [
      {
        name: "Mockup",
        type: "figma",
        url: "https://www.figma.com/file/7aJedLkk8hiDoD3RcxTnQi/BCL-Starter-kit---Components?node-id=8654%3A83333",
      },
    ],
  },
};

export const Default = () => gallery(dataDefault);

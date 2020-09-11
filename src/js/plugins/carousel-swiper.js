$(function () {
  var swiperBaseSigleSlide = new Swiper('.swiperBaseSigleSlide', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,

    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
    },

    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });

  var swiperCarousel1Col = new Swiper('.swiperCarousel1Col', {
    slidesPerView: 1,
    spaceBetween: 10,
    // init: false,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    }
  });

  var swiperCarousel3Col = new Swiper('.swiperCarousel3Col', {
    slidesPerView: 1,
    spaceBetween: 10,
    // init: false,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    breakpoints: {
      576: {
        slidesPerView: 1,
        spaceBetween: 10,
      },
      992: {
        slidesPerView: 2,
        spaceBetween: 10,
      },
      1200: {
        slidesPerView: 3,
        spaceBetween: 15,
      },
      1921: {
        slidesPerView: 5,
        spaceBetween: 20,
      },
    }
  });

  var swiperCarousel4Col = new Swiper('.swiperCarousel4Col', {
    slidesPerView: 1,
    spaceBetween: 10,
    // init: false,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    breakpoints: {
      576: {
        slidesPerView: 2,
        spaceBetween: 10,
      },
      992: {
        slidesPerView: 3,
        spaceBetween: 10,
      },
      1400: {
        slidesPerView: 4,
        spaceBetween: 15,
      },
      1921: {
        slidesPerView: 6,
        spaceBetween: 20,
      },
    }
  });

  var swiperCarouselAutoCol = new Swiper('.swiperCarouselAutoCol', {
    slidesPerView: 'auto',
    spaceBetween: 10,
    loop: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  });
})
new Swiper('.swiper-container', {
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
  },
  slidesPerView: 1,
  loop: true,
  spaceBetween: 1000,
  breakpoints: {
    320: {
      slidesPerView: 1,
    },
    480: {
      slidesPerView: 1,
    },
    810: {
      slidesPerView: 1,
    }
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  }
});

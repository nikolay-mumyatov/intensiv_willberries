const swiper = new Swiper('.swiper-container', {
  // Optional parameters
  loop: true,
  // autoplay: {
  //       delay: 5500,
  //       disableOnInteraction: false,
  //     },

  // Navigation arrows
  navigation: {
    nextEl: '.slider-button-next',
    prevEl: '.slider-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});
const swiper = new Swiper('.swiper__gallery', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  spaceBetween: 30,

  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
});
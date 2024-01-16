const gallerySwiper = new Swiper('.swiper-gallery', {
  direction: 'horizontal',
  loop: true,
  spaceBetween: 30,
  grid: {
    rows: 1,
    fill: "row"
  },
  slidesPerView: 'auto',
  slidesPerGroup: 1,
  centeredSlides: true,

  navigation: {
    nextEl: '.swiper-button-next-gallery',
    prevEl: '.swiper-button-prev-gallery',
  },
});

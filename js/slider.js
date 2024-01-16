const swiper = new Swiper('.swiper', {
  direction: 'horizontal',
  loop: false,

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  on: {
    slideChange: function () {
      let prevButton = document.querySelector('.swiper-button-prev');
      let nextButton = document.querySelector('.swiper-button-next');

      prevButton?.classList[swiper.isBeginning ? 'add' : 'remove']('swiper-button-disabled');
      nextButton?.classList[swiper.isEnd ? 'add' : 'remove']('swiper-button-disabled');
    },
  },
});

function initSwiper(slider) {
  if(!slider) {
    return;
  }

  let mySwiper = new Swiper(`.${slider.containerClass}`, {
    pagination: {
      el: `.${slider.container}__pagination`,
      type: `bullets`,
      currentClass: `swiper-pagination__current`,
      totalClass: `swiper-pagination__total`,
      bulletClass: `swiper-pagination__bullet`,
      bulletActiveClass: `swiper-pagination__bullet--active`,
      clickable: true,
    },
    navigation: {
      nextEl: `.${slider.container}__button--next`,
      prevEl: `.${slider.container}__button--prev`,
      disabledClass: `${slider.container}__button--disabled`,
    },
    speed: 300,
    loop: false,
    slidesPerView: 1,
    wrapperClass: `${slider.container}__list`,
    slideClass: `${slider.container}__item`,
    slideActiveClass: `${slider.container}__item--active`,
    slideDuplicateActiveClass: `${slider.container}__item-duplicate--active`,
    slideVisibleClass: `${slider.container}__item--visible`,
    slideDuplicateClass: `${slider.container}__item-duplicate`,
    slideNextClass: `${slider.container}__item--next`,
    slideDuplicateNextClass: `${slider.container}__item-duplicate--next`,
    slidePrevClass: `${slider.container}__item--prev`,
    slideDuplicatePrevClass: `${slider.container}__item-duplicate--prev`,
    slideBlankClass: `${slider.container}__invisible-blank`,
    bulletClass: `${slider.container}__bullet`,
    bulletActiveClass: `${slider.container}__bullet--active`,
    modifierClass: `${slider.container}__pagination`,
    hiddenClass: `${slider.container}__hidden`,
    progressbarFillClass: `${slider.container}__progressbar-fill`,
    clickableClass: `${slider.container}__clickable`,
    lockClass: `${slider.container}__lock`,
    progressbarOppositeClass: `${slider.container}__progressbar-opposite`
  });
}

const mainSlider = {
  container: 'advantages',
  containerClass: 'advantages__box'
};

const portfolio = {
  container: 'portfolio',
  containerClass: 'portfolio__container'
};

if (window.screen.width < 768) {
  initSwiper(mainSlider);
  initSwiper(portfolio);
}

var swiper = new Swiper('.swiper-container', {
  direction: 'vertical',
  slidesPerView: 1,
  spaceBetween: 30,
  mousewheel: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  loop: false
});




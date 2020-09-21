function initSwiper(slider) {
  if(!slider) {
    return;
  }

  let mySwiper = new Swiper(`.${slider.containerClass}`, {
    pagination: {
      el: `.${slider.container}__pagination`,
      type: `bullets`,
      currentClass: `pagination__current`,
      totalClass: `pagination__total`,
      bulletClass: `pagination__bullet`,
      bulletActiveClass: `pagination__bullet--active`,
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

  return mySwiper;
}

function initSwiperProgress() {
  const swiperProgress = new Swiper('.how__container', {
    pagination: {
      el: '.swiper-pagination',
      type: 'progressbar',
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });
}

const howSlider = {
  container: 'how',
  containerClass: 'how__wrapper'
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
  initSwiperProgress();
}



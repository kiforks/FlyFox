var fullPageObject;
const MAIN_SELECTOR = '.main';
const MAIN_ITEM_SELECTOR = MAIN_SELECTOR + '__item';
const MIN_WIDTH = 767;

(function resizeWindow() {
  window.addEventListener('resize', resizeThrottler, false);

  createFullPage();
  fullPagePlugin();


  let resizeTimeout;

  function resizeThrottler() {
    if (!resizeTimeout) {
      resizeTimeout = setTimeout(function () {
        resizeTimeout = null;

        fullPagePlugin();
      }, 66);
    }
  }
})();

function fullPagePlugin() {
  if (!document.querySelector(MAIN_SELECTOR)) {
    return;
  }

  if (window.screen.width > MIN_WIDTH) {
    if (!fullPageObject) {
      createFullPage();
    }

    rebuildFullPage();
  } else {
    destroyFullPage();
  }
}

function createFullPage() {
  if(window.screen.width < MIN_WIDTH) {
    return;
  }

  fullPageObject = new fullpage(MAIN_SELECTOR, {
    licenseKey: '98CABA08-F152482D-888A56C4-514642C1',
    autoScrolling: true,
    scrollHorizontally: true,
    sectionSelector: MAIN_ITEM_SELECTOR,
    verticalCentered: true,
    // onLeave(origin) {
    //   return console.log(origin.index)
    // }
  });
}

function rebuildFullPage() {
  if (fullPageObject) {
    fullpage_api.reBuild();
  }
}

function destroyFullPage() {
  if (fullPageObject && typeof fullpage_api !== 'undefined') {
    fullpage_api.destroy('all');
    fullPageObject = null;
  }
}
//
// const visibleSection = target => {
//   // Получаем нужный элемент
//   const elements = document.querySelectorAll(`.${target}`);
//   const test = document.querySelector('.main__item--test');
//   const targetPositionTop = item => Math.abs(window.pageYOffset + item.getBoundingClientRect().top);
//   const windowPositionBottom = window.pageYOffset + document.documentElement.clientHeight;
//
//   console.log(test.getBoundingClientRect().bottom);
//
//   elements.forEach((element, index) => {
//     if((index === 0) &&  (targetPositionTop(element) === windowPositionBottom)) {
//       fullpage_api.setAllowScrolling(true, 'up');
//       fullpage_api.setAllowScrolling(false, 'down');
//       console.log(1);
//     }
//
//     if((index === 1) &&  ((targetPositionTop(element) - 30) === windowPositionBottom)) {
//       console.log(2);
//       fullpage_api.setAllowScrolling(false);
//     }
//
//     if((index === 2) &&  ((targetPositionTop(element) - 30) === windowPositionBottom)) {
//       console.log(3);
//       fullpage_api.setAllowScrolling(true, 'down');
//     }
//   })
// }
//
// // Запускаем функцию при прокрутке страницы
// window.addEventListener('wheel', function() {
//   visibleSection('swiper-slide');
// });




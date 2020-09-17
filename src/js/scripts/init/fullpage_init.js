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
    onLeave() {
      return disableScrolling('swiper-slide-1');
    }
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



//Visible section
function disableScrolling(target) {
  const sliderList = document.querySelectorAll(`.${target}`);

  sliderList.forEach(slider => {
    const targetPosition = {
        top: window.pageYOffset + slider.getBoundingClientRect().top,
        bottom: window.pageYOffset + slider.getBoundingClientRect().bottom
      },
      windowPosition = {
        top: window.pageYOffset,
        bottom: window.pageYOffset + document.documentElement.clientHeight
      };

    if (slider[0] && targetPosition.top === windowPosition.bottom) {
      fullpage_api.setAllowScrolling(false, 'up');
    } else {
      console.log('err');
    };
  })
};


var fullPageObject;
const MAIN_SELECTOR = '.main';
const MAIN_ITEM_SELECTOR = MAIN_SELECTOR + '__item';
const MIN_WIDTH = 767;
const advantagesItem = document.querySelector('.main__item--advantages');
const headerContactsLink = document.querySelector('.header__link--contacts');

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

  let isFirstSlide = false;

  fullPageObject = new fullpage(MAIN_SELECTOR, {
    licenseKey: '98CABA08-F152482D-888A56C4-514642C1',
    autoScrolling: true,
    scrollHorizontally: true,
    sectionSelector: MAIN_ITEM_SELECTOR,
    verticalCentered: true,
    anchors: ['home', 'advantages', 'services', 'portfolio', 'how', 'footer'],
    scrollingSpeed: 1000,
    onLeave(origin, destination, direction) {
      setTimeout(() => {
        counterVisible();
      }, 0);

      if(origin.index == 3 || origin.index == 5) {
        isFirstSlide = false;
      }

      if(origin.index == 4 && direction == 'up' && !isFirstSlide) {

        if(window.swiperIndex === 0) {
          setTimeout(() => isFirstSlide = true, 150);
        }

        return false;
      }

      if(origin.index == 4 && direction =='down' && !isFirstSlide) {
        if(window.swiperIndex === 2) {
          setTimeout(() => isFirstSlide = true, 150);
        }

        return false;
      }
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

//Counter
let counterBoolean = true;

function counterInit(id, start, end, duration) {
  let obj = document.getElementById(id);
  let current = start;
  let range =  end - start;
  let increment = end > start ? 1 : -1;
  let step = Math.abs(Math.floor(duration / range));
  let timer = setInterval(() => {
    current += increment;
    obj.textContent = current;
    if (current == end) {
      clearInterval(timer);
    }
  }, step);
}

function counterVisible() {
  const windowPositionTop = window.pageYOffset;
  const targetPositionTop = window.pageYOffset + advantagesItem.getBoundingClientRect().top;

  if(window.screen.width < 768 && (windowPositionTop > targetPositionTop)) {
    counterInit('projects', 0, 200, 2000);
    counterInit('years', 0, 5, 2000);

    window.removeEventListener('scroll', counterVisible);
  }

  if (advantagesItem.classList.contains('active') && counterBoolean) {
    counterInit('projects', 0, 200, 2000);
    counterInit('years', 0, 5, 2000);

    counterBoolean = false;
  }
}

if(window.screen.width < 768) {
  window.addEventListener('scroll', counterVisible);
}

// if(window.screen.width > 768) {
//   headerContactsLink.addEventListener('click', () => window.swiper.slideTo(2));
// }



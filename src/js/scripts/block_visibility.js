let resizeTimeout;

// Запускаем функцию при прокрутке страницы. ВАЖНО! Используем padding вместо margin для секций
if(window.screen.width < 768) {
  window.addEventListener('scroll', function() {
    windowSectionActive('main__item', 'main__item');
  });
  visibleSection('main__item', 'main__item');
}

function windowSectionActive(target, link) {
  if (!resizeTimeout) {
    resizeTimeout = setTimeout(function() {
      resizeTimeout = null;
      visibleSection(target, link);

      // The actualResizeHandler will execute at a rate of 15fps
    }, 66);
  }
}

function visibleSection(target, link) {
  // Получаем нужный элементы
  const sections = document.querySelectorAll(`.${target}`);
  const links = document.querySelectorAll(`.${link}`);
  const header = document.querySelector('.header');
  const image = document.querySelector('.home__rating-image');
  const home = document.querySelector('.home');


  sections.forEach((section, index) => {
    // Все позиции элемента
    let targetPosition = {
        top: window.pageYOffset + section.getBoundingClientRect().top - 200,
        bottom: window.pageYOffset + section.getBoundingClientRect().bottom - 200
      },
    // Получаем позиции окна
    windowPosition = {
      top: window.pageYOffset,
      bottom: window.pageYOffset + document.documentElement.clientHeight
    };

    if(links[index].classList.contains('main__item--advantages')) {
      if(((window.pageYOffset + links[index].getBoundingClientRect().top) + 60) < (windowPosition.bottom)) {
        links[index].classList.add(`${link}--active`);
        header.classList.add('header--scroll');
        home.classList.add('home--scroll');
        image.setAttribute('src', 'img/svg/home/rating_mobile.svg');
      } else {
        header.classList.remove('header--scroll');
        home.classList.remove('home--scroll');
        image.setAttribute('src', 'img/svg/home/rating.svg');
      }
    }
  })
};


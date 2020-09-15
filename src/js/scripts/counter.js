function counterOnScroll(id, start, end, duration) {
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

  // // Все позиции элемента
  // let targetPosition = {
  //     top: window.pageYOffset + obj.getBoundingClientRect().top,
  //     left: window.pageXOffset + obj.getBoundingClientRect().left,
  //     right: window.pageXOffset + obj.getBoundingClientRect().right,
  //     bottom: window.pageYOffset + obj.getBoundingClientRect().bottom
  //   },
  //   // Получаем позиции окна
  //   windowPosition = {
  //     top: window.pageYOffset,
  //     left: window.pageXOffset,
  //     right: window.pageXOffset + document.documentElement.clientWidth,
  //     bottom: window.pageYOffset + document.documentElement.clientHeight
  //   };
  //
  // if (targetPosition.bottom > windowPosition.top && // Если позиция нижней части элемента больше позиции верхней чайти окна, то элемент виден сверху
  //   targetPosition.top < windowPosition.bottom && // Если позиция верхней части элемента меньше позиции нижней чайти окна, то элемент виден снизу
  //   targetPosition.right > windowPosition.left && // Если позиция правой стороны элемента больше позиции левой части окна, то элемент виден слева
  //   targetPosition.left < windowPosition.right) { // Если позиция левой стороны элемента меньше позиции правой чайти окна, то элемент виден справа
  //   // Если элемент полностью видно, то запускаем следующий код
  //   let timer = setInterval(() => {
  //     current += increment;
  //     obj.textContent = current;
  //     if (current == end) {
  //       clearInterval(timer);
  //     }
  //   }, step);
  // }
}

// Запускаем функцию при прокрутке страницы
// document.addEventListener('scroll', function() {
//   counterOnScroll('projects',0,200,3000);
// });

// А также запустим функцию сразу. А то вдруг, элемент изначально видно
counterOnScroll('projects',0,200,3000);
counterOnScroll('years',0,5,3000);

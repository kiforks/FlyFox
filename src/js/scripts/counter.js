// var number = document.querySelector('.number'),
//   numberTop = number.getBoundingClientRect().top,
//   start = +number.innerHTML, end = +number.dataset.max;
//
// window.addEventListener('scroll', function onScroll() {
//   if(window.pageYOffset > numberTop - window.innerHeight / 2) {
//     this.removeEventListener('scroll', onScroll);
//     var interval = setInterval(function() {
//       number.innerHTML = ++start;
//       if(start == end) {
//         clearInterval(interval);
//       }
//     }, 5);
//   }
// });
//
// // function counter(selector) {
// //   const numberItem = document.querySelector(`.${selector}`);
// //   let numberTop = numberItem.getBoundingClientRect().top;
// //   let start = +numberItem.innerHTML;
// //   let end = +numberItem.dataset.max;
// //
// //   window.addEventListener('scroll', function onScroll() {
// //     console.log(window.pageYOffset);
// //
// //     console.log(numberTop - window.innerHeight / 2);
// //
// //     if(window.pageYOffset > numberTop - window.innerHeight / 2) {
// //       this.removeEventListener('scroll', onScroll);
// //       const interval = setInterval(function() {
// //         numberItem.innerHTML = ++start;
// //         if(start == end) {
// //           clearInterval(interval);
// //         }
// //       }, 5);
// //     }
// //   });
// // }
// //
// // counter('advantages__projects');

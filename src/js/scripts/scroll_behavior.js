function scrollBehavior() {
  const anchors = document.querySelectorAll('.scroll');

  for (let anchor of anchors) {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();

      const blockID = anchor.getAttribute('href').substr(1);

      document.querySelector(`[data-anchor="${blockID}"]`).scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      })
    })
  }
};

if(window.screen.width < 768) {
  scrollBehavior();
}

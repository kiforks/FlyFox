'use strict';

function toggleClass(options) {
  const itemClass = `${options.toggleItem}`;
  const buttonClass = `${options.toggleButton}`;
  const ACTIVE_CLASS = '--test';
  const HIDE_CLASS = '--hide';
  const ANIMATION_TIME = 300;
  const itemHideClass = `${itemClass + HIDE_CLASS}`;
  const itemActiveClass = `${itemClass + ACTIVE_CLASS}`;
  const toggleItem = document.querySelectorAll(`.${itemClass + options.modifierItem}`);
  const toggleButton = document.querySelectorAll(`.${buttonClass + options.modifierButton}`);
  const BODY = document.querySelector('body');
  const bodyActiveClass = `body${ACTIVE_CLASS}`;

  let toggleTarget = options.target;
  let toggleBody = options.toggleBody;
  let closing = false;

  if(!toggleItem || !toggleButton) {
    return;
  }

  toggleButton.forEach((button) => {
    button.onclick = event => {
      event.preventDefault();

      let target = event.target.closest('services__item');

      // if(!target) {
      //   target = event.target;
      // }

      console.log(event.target);

      console.log(target);

      toggleItem.forEach(selector => {

        if(selector.classList.contains(itemActiveClass)) {
          closing = true;

          if(toggleBody) {
            BODY.classList.remove(bodyActiveClass);
          }

          selector.classList.remove(itemActiveClass);
          selector.classList.add(itemHideClass);

          setTimeout(() => {
            closing = false;

            selector.classList.remove(itemHideClass);
          }, ANIMATION_TIME)
        } else {
          if(!closing) {
            selector.classList.add(itemActiveClass);

            if(toggleBody) {
              BODY.classList.add(bodyActiveClass);
            }
          }
        }
      });
    }
  })
}

class ToggleClass {
  constructor(options) {
    this.toggleItem = options.toggleItem;
    this.toggleButton = options.toggleButton;
    this.modifierItem = options.modifierItem ? `--${options.modifierItem}` : '';
    this.modifierButton = options.modifierButton ? `--${options.modifierButton}` : '';
    this.toggleBody = options.toggleBody ? options.toggleBody : false;
    this.toggleBody = options.target ? options.target : false;

    return toggleClass(this);
  }
}

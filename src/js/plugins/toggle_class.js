'use strict';

function toggleClass(options) {
  const itemClass = `${options.toggleItem}`;
  const buttonClass = `${options.toggleButton}`;
  const ACTIVE_CLASS = '--test';
  const HIDE_CLASS = '--hide';
  const ANIMATION_TIME = 300;  // Transition duration
  const itemHideClass = itemClass + HIDE_CLASS;
  const itemActiveClass = itemClass + ACTIVE_CLASS;
  const toggleItem = document.querySelectorAll(`.${itemClass + options.modifierItem}`);
  const toggleButton = document.querySelectorAll(`.${buttonClass + options.modifierButton}`);
  const BODY = document.querySelector('body');
  const bodyActiveClass = `body${ACTIVE_CLASS}`;
  const removeClassFrom = (element, toggleClass = itemActiveClass) => element.classList.remove(toggleClass);
  const addClassTo = (element, toggleClass = itemActiveClass) => element.classList.add(toggleClass);
  const hasClassIn = (element, toggleClass = itemActiveClass) => element.classList.contains(toggleClass);
  const forEachToggle = (callback, element = toggleItem,) => element.forEach(item => callback(item));
  const toggleTarget = options.target;
  const toggleBody = options.toggleBody;

  let closing = false;

  if(!toggleItem || !toggleButton) {
    return;
  }

  function toggleInit(selector) {
    if(hasClassIn(selector)) {
      closing = true;

      if(toggleBody) {
        removeClassFrom(BODY, bodyActiveClass);
      }

      removeClassFrom(selector);
      addClassTo(selector, itemHideClass);

      setTimeout(() => {
        closing = false;

        removeClassFrom(selector, itemHideClass)
      }, ANIMATION_TIME);
    } else {
      if(!closing) {
        addClassTo(selector);

        if(toggleBody) {
          addClassTo(BODY, bodyActiveClass);
        }
      }
    }
  }

  toggleButton.forEach((button) => {
    button.onclick = event => {
      event.preventDefault();

      let target = event.target.closest(`.${itemClass}`);

      if(toggleTarget) {
        if(hasClassIn(target)) {
          return;
        }

        addClassTo(target, itemHideClass);

        toggleItem.forEach(item => {
          removeClassFrom(item);

          setTimeout(() => {
            if(target !== item) {
              removeClassFrom(item, itemHideClass)
            }
          }, ANIMATION_TIME);
        })

        forEachToggle(removeClassFrom);

        toggleInit(target);

      } else {
        toggleItem.forEach(item => toggleInit(item));
      }
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
    this.target = options.target ? options.target : false;

    return toggleClass(this);
  }
}

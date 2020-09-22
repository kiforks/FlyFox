try {
  const HEADER = new ToggleClass({
    toggleItem: 'header',
    toggleButton: 'header__button',
    toggleBody: true
  });

  const HEADER_NAV = new ToggleClass({
    toggleItem: 'header',
    toggleButton: 'header__link',
    toggleBody: true,
    preventDefault: false
  });

  const SERVICES = new ToggleClass({
    toggleItem: 'services__item',
    toggleButton: 'services__item',
    target: true
  });

} catch {
  (function catchError() {
    return;
  })();
}

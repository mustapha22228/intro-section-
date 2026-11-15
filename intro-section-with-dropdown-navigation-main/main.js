const menuButtons = document.querySelectorAll('.nav-button, .mobile-item-button');
const dropdownPanels = document.querySelectorAll('.dropdown-panel, .mobile-submenu');
const mobileMenu = document.querySelector('.mobile-menu');
const menuToggle = document.querySelector('.menu-toggle');
const mobileClose = document.querySelector('.mobile-close');

const closeMenus = () => {
  menuButtons.forEach((button) => {
    button.setAttribute('aria-expanded', 'false');
  });

  dropdownPanels.forEach((panel) => {
    panel.classList.remove('open');
  });
};

menuButtons.forEach((button) => {
  button.addEventListener('click', (event) => {
    const menu = button.parentElement.querySelector('.dropdown-panel, .mobile-submenu');

    if (!menu) {
      return;
    }

    const isOpen = button.getAttribute('aria-expanded') === 'true';

    closeMenus();

    if (!isOpen) {
      button.setAttribute('aria-expanded', 'true');
      menu.classList.add('open');
    }

    event.stopPropagation();
  });
});

document.addEventListener('click', (event) => {
  if (!event.target.closest('.nav-item, .mobile-item')) {
    closeMenus();
  }
});

const setMenuState = (isOpen) => {
  document.body.classList.toggle('menu-open', isOpen);
  mobileMenu?.toggleAttribute('hidden', !isOpen);
  mobileMenu?.setAttribute('aria-hidden', String(!isOpen));
  menuToggle?.setAttribute('aria-expanded', String(isOpen));
};

menuToggle?.addEventListener('click', () => {
  const isOpen = document.body.classList.contains('menu-open');
  setMenuState(!isOpen);
});

mobileClose?.addEventListener('click', () => setMenuState(false));

window.addEventListener('resize', () => {
  if (window.innerWidth > 980) {
    document.body.classList.remove('menu-open');
    mobileMenu?.setAttribute('aria-hidden', 'true');
    menuToggle?.setAttribute('aria-expanded', 'false');
    closeMenus();
  }
});

/* REAL TEAM Sport — shared behaviour. Vanilla, no dependencies. */
(function () {
  'use strict';

  var burger = document.querySelector('.burger');
  var menu = document.getElementById('mobile-menu');
  if (!burger || !menu) return;

  function setOpen(open) {
    menu.classList.toggle('open', open);
    burger.setAttribute('aria-expanded', String(open));
    burger.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
  }

  burger.addEventListener('click', function () {
    setOpen(burger.getAttribute('aria-expanded') !== 'true');
  });

  // Escape closes the menu and returns focus to the trigger.
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && burger.getAttribute('aria-expanded') === 'true') {
      setOpen(false);
      burger.focus();
    }
  });

  // Resizing up past the mobile breakpoint leaves no orphaned open menu.
  window.addEventListener('resize', function () {
    if (window.innerWidth > 768) setOpen(false);
  });
})();

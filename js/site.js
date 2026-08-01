/* REAL TEAM — mobile navigation only. No tracking, no dependencies. */
(function () {
  'use strict';
  var burger = document.querySelector('.burger');
  var menu = document.getElementById('mobile-menu');
  if (!burger || !menu) return;
  function setOpen(open) {
    menu.classList.toggle('open', open);
    burger.setAttribute('aria-expanded', String(open));
  }
  burger.addEventListener('click', function () {
    setOpen(burger.getAttribute('aria-expanded') !== 'true');
  });
  menu.addEventListener('click', function (e) {
    if (e.target.tagName === 'A') setOpen(false);
  });
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') setOpen(false);
  });
  window.addEventListener('resize', function () {
    if (window.innerWidth > 768) setOpen(false);
  });
})();

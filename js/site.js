/* REAL TEAM — mobile navigation, roundnet reels, and a second sink for enquiries.
   No tracking, no dependencies, no requests to other servers on page load. */
(function () {
  'use strict';

  // ---- Mobile navigation ----
  var burger = document.querySelector('.burger');
  var menu = document.getElementById('mobile-menu');
  if (burger && menu) {
    var setOpen = function (open) {
      menu.classList.toggle('open', open);
      burger.setAttribute('aria-expanded', String(open));
    };
    burger.addEventListener('click', function () {
      setOpen(burger.getAttribute('aria-expanded') !== 'true');
    });
    menu.addEventListener('click', function (e) {
      if (e.target.tagName === 'A') setOpen(false);
    });
    document.addEventListener('keydown', function (e) { if (e.key === 'Escape') setOpen(false); });
    window.addEventListener('resize', function () { if (window.innerWidth > 768) setOpen(false); });
  }

  // ---- Roundnet reels: play only while on screen, never for reduced motion ----
  // Without JS the poster frame shows, which is enough.
  var reels = document.querySelectorAll('.reel video');
  var still = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (reels.length && 'IntersectionObserver' in window && !still) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        var v = e.target;
        if (e.intersectionRatio > 0.55) {
          if (v.preload !== 'auto') { v.preload = 'auto'; v.load(); }
          var p = v.play(); if (p && p.catch) p.catch(function () {});
        } else { v.pause(); }
      });
    }, { threshold: [0, 0.55] });
    Array.prototype.forEach.call(reels, function (v) { io.observe(v); });
  }

  // ---- Enquiry: second sink into Brevo (JP account) ----
  // Formspree stays the primary path and the form submits to it normally. This is a
  // fire-and-forget copy so the enquiry also becomes a durable contact record. It only
  // runs when the consent box is ticked, and it never blocks or breaks the submit:
  // keepalive lets the request finish after the browser has navigated away.
  var form = document.querySelector('form.enquiry');
  if (!form) return;

  form.addEventListener('submit', function () {
    try {
      var fd = new FormData(form);
      if (fd.get('_gotcha')) return;                 // bot
      if (!fd.get('OPT_IN')) return;                 // no consent, no second copy
      fetch('https://deflifeos.popluhar.at/api/brevo-jp/subscribe', {
        method: 'POST',
        keepalive: true,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email: fd.get('EMAIL') || '',
          meno: fd.get('FIRSTNAME') || '',
          sprava: fd.get('MESSAGE') || '',
          consent: true
        })
      }).catch(function () {});
    } catch (e) { /* never let this affect the real submit */ }
  });
})();

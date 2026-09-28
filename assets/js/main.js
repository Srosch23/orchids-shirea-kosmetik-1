/* SHIREÁ – kleine, abhängigkeitsfreie Interaktionen. Keine Cookies, kein Tracking. */
(function () {
  'use strict';
  document.documentElement.classList.remove('no-js');

  var WA = '4915565510880';
  var TW = 'https://www.treatwell.de/ort/shirea-kosmetik/';

  /* Header-Schatten beim Scrollen */
  var header = document.querySelector('.header');
  var onScroll = function () { header.classList.toggle('is-scrolled', window.scrollY > 8); };
  window.addEventListener('scroll', onScroll, { passive: true }); onScroll();

  /* Mobile Navigation */
  var toggle = document.querySelector('.nav-toggle');
  var nav = document.getElementById('nav');
  function setNav(open) {
    nav.classList.toggle('is-open', open);
    document.body.classList.toggle('nav-open', open);
    toggle.setAttribute('aria-expanded', open);
    toggle.setAttribute('aria-label', open ? 'Menü schließen' : 'Menü öffnen');
    toggle.querySelector('use').setAttribute('href', open ? '#close' : '#menu');
  }
  toggle.addEventListener('click', function () { setNav(!nav.classList.contains('is-open')); });
  nav.addEventListener('click', function (e) { if (e.target.closest('a')) setNav(false); });
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape' && nav.classList.contains('is-open')) setNav(false); });

  /* Vorher/Nachher-Slider */
  document.querySelectorAll('.ba').forEach(function (ba) {
    var range = ba.querySelector('.ba__range');
    var set = function (v) { ba.style.setProperty('--pos', v + '%'); };
    range.addEventListener('input', function () { set(range.value); });
    /* Pointer direkt auf dem Bild (auch Touch) */
    var drag = function (e) {
      var r = ba.getBoundingClientRect();
      var x = Math.min(Math.max((e.clientX - r.left) / r.width, 0), 1) * 100;
      range.value = x; set(x);
    };
    ba.addEventListener('pointerdown', function (e) { if (e.pointerType !== 'mouse' || e.button === 0) { ba.setPointerCapture(e.pointerId); drag(e); ba.addEventListener('pointermove', drag); } });
    ba.addEventListener('pointerup', function () { ba.removeEventListener('pointermove', drag); });
    ba.addEventListener('pointercancel', function () { ba.removeEventListener('pointermove', drag); });
  });

  /* Buchungs-Dialog: Behandlung wird in die WhatsApp-Nachricht übernommen */
  var dlg = document.getElementById('dlg');
  var dlgTreat = document.getElementById('dlg-treat');
  var dlgWa = document.getElementById('dlg-wa');
  var dlgTw = document.getElementById('dlg-tw');
  function openDialog(treat) {
    var msg = treat
      ? 'Hallo Schahira, ich interessiere mich für: ' + treat + '. Wann hätten Sie einen Termin frei?'
      : 'Hallo Schahira, ich möchte gerne einen Termin vereinbaren.';
    dlgWa.href = 'https://wa.me/' + WA + '?text=' + encodeURIComponent(msg);
    dlgTw.href = TW;
    dlgTreat.innerHTML = treat ? 'Ihre Auswahl: <strong>' + treat + '</strong>' : 'Wie möchten Sie Ihren Termin vereinbaren?';
    if (typeof dlg.showModal === 'function') { dlg.showModal(); }
    else { location.hash = 'buchen'; }
  }
  document.querySelectorAll('[data-book]').forEach(function (a) {
    a.addEventListener('click', function (e) {
      e.preventDefault();
      openDialog(a.getAttribute('data-book'));
    });
  });
  dlg.querySelector('[data-close]').addEventListener('click', function () { dlg.close(); });
  dlg.addEventListener('click', function (e) { if (e.target === dlg) dlg.close(); });
  dlg.addEventListener('click', function (e) { if (e.target.closest('.book-opt')) setTimeout(function () { dlg.close(); }, 150); });

  /* Tabs: Behandlungen & Preise */
  var tabs = document.querySelector('.tabs');
  if (tabs) {
    var ink = tabs.querySelector('.tabs__ink');
    var btns = Array.prototype.slice.call(tabs.querySelectorAll('.tab'));
    var moveInk = function (btn) { ink.style.left = btn.offsetLeft + 'px'; ink.style.width = btn.offsetWidth + 'px'; };
    var activate = function (name, focus) {
      btns.forEach(function (b) {
        var on = b.getAttribute('aria-controls') === 'tab-' + name;
        b.classList.toggle('is-active', on); b.setAttribute('aria-selected', on); b.tabIndex = on ? 0 : -1;
        if (on) { moveInk(b); if (focus) b.focus(); if (tabs.scrollWidth > tabs.clientWidth) b.scrollIntoView({ block: 'nearest', inline: 'center', behavior: 'smooth' }); }
      });
      document.querySelectorAll('.tabpanel').forEach(function (p) {
        var on = p.id === 'tab-' + name;
        p.hidden = !on; p.classList.toggle('is-active', on);
        if (on) p.querySelectorAll('.reveal').forEach(function (el) { el.classList.add('is-in'); });
      });
    };
    btns.forEach(function (b, i) {
      b.addEventListener('click', function () { activate(b.getAttribute('aria-controls').slice(4)); });
      b.addEventListener('keydown', function (e) {
        var d = e.key === 'ArrowRight' ? 1 : e.key === 'ArrowLeft' ? -1 : 0; if (!d) return;
        e.preventDefault(); var n = btns[(i + d + btns.length) % btns.length]; activate(n.getAttribute('aria-controls').slice(4), true);
      });
    });
    document.querySelectorAll('[data-tab]').forEach(function (a) { a.addEventListener('click', function () { activate(a.getAttribute('data-tab')); }); });
    /* Anker wie #byonik oder #slimyonik öffnen den passenden Tab */
    var fromHash = function () {
      var h = location.hash.slice(1);
      if (!h || !document.getElementById('tab-' + h)) return;
      activate(h);
      requestAnimationFrame(function () { tabs.scrollIntoView({ block: 'start' }); });
    };
    window.addEventListener('hashchange', fromHash);
    fromHash();
    tabs.classList.add('no-ink'); moveInk(tabs.querySelector('.tab.is-active'));
    requestAnimationFrame(function () { tabs.classList.remove('no-ink'); });
    window.addEventListener('resize', function () { moveInk(tabs.querySelector('.tab.is-active')); });
    if (document.fonts && document.fonts.ready) document.fonts.ready.then(function () { moveInk(tabs.querySelector('.tab.is-active')); });
  }

  /* Kompakte Behandlungsliste: Zeile antippen zeigt Details */
  document.querySelectorAll('.trow__head').forEach(function (h) {
    h.addEventListener('click', function () {
      var row = h.parentNode, open = !row.classList.contains('is-open');
      row.classList.toggle('is-open', open); h.setAttribute('aria-expanded', open); row.querySelector('.trow__body').hidden = !open;
    });
  });

  /* Vorher/Nachher: beim ersten Sichtbarwerden kurz "anstupsen", damit klar ist, dass man ziehen kann */
  var reduced = matchMedia('(prefers-reduced-motion: reduce)').matches;
  if ('IntersectionObserver' in window && !reduced) {
    var nudge = new IntersectionObserver(function (es) {
      es.forEach(function (e) {
        if (!e.isIntersecting) return; nudge.unobserve(e.target);
        var ba = e.target, range = ba.querySelector('.ba__range'), t0 = null, dur = 1800;
        var step = function (t) {
          if (!t0) t0 = t; var k = Math.min((t - t0) / dur, 1);
          var v = 50 - Math.sin(k * Math.PI * 2) * 14 * (1 - k * 0.3);
          ba.style.setProperty('--pos', v + '%'); range.value = v;
          if (k < 1 && !ba.dataset.touched) requestAnimationFrame(step);
        };
        setTimeout(function () { requestAnimationFrame(step); }, 350);
      });
    }, { threshold: 0.6 });
    document.querySelectorAll('.ba').forEach(function (ba) {
      nudge.observe(ba);
      ba.addEventListener('pointerdown', function () { ba.dataset.touched = '1'; }, { once: true });
    });
  }

  /* Zahlen hochzählen */
  if ('IntersectionObserver' in window && !reduced) {
    var cnt = new IntersectionObserver(function (es) {
      es.forEach(function (e) {
        if (!e.isIntersecting) return; cnt.unobserve(e.target);
        var el = e.target, end = parseInt(el.getAttribute('data-count'), 10), t0 = null;
        var step = function (t) {
          if (!t0) t0 = t; var k = Math.min((t - t0) / 1400, 1); k = 1 - Math.pow(1 - k, 3);
          el.textContent = Math.round(end * k); if (k < 1) requestAnimationFrame(step);
        };
        requestAnimationFrame(step);
      });
    }, { threshold: 0.5 });
    document.querySelectorAll('[data-count]').forEach(function (el) { el.textContent = '0'; cnt.observe(el); });
  }

  /* Bewertungs-Slider: Karten verdoppeln für eine nahtlose Endlosschleife */
  var track = document.querySelector('.marquee__track');
  if (track && !matchMedia('(prefers-reduced-motion: reduce)').matches) {
    track.innerHTML += track.innerHTML;
    track.querySelectorAll('.review:nth-child(n+' + (track.children.length / 2 + 1) + ')').forEach(function (c) { c.setAttribute('aria-hidden', 'true'); });
  }

  /* Öffnungszeiten: heute markieren + Status */
  var hours = { 0: null, 1: [14, 19], 2: [14, 19], 3: null, 4: [14, 19], 5: [10, 19], 6: [10, 19] }; /* laut Google-Unternehmensprofil */
  var now = new Date(); var d = now.getDay(); var h = now.getHours() + now.getMinutes() / 60;
  var row = document.querySelector('#hours tr[data-d="' + d + '"]'); if (row) row.classList.add('today');
  var status = document.getElementById('status');
  var t = hours[d];
  if (t && h >= t[0] && h < t[1]) { status.textContent = 'Jetzt geöffnet · bis ' + t[1] + ':00 Uhr'; status.classList.add('open'); }
  else if (t && h < t[0]) { status.textContent = 'Öffnet heute um ' + t[0] + ':00 Uhr'; }
  else {
    var n = d, i = 0; do { n = (n + 1) % 7; i++; } while (!hours[n] && i < 7);
    var names = ['Sonntag', 'Montag', 'Dienstag', 'Mittwoch', 'Donnerstag', 'Freitag', 'Samstag'];
    status.textContent = 'Geschlossen · öffnet ' + (i === 1 ? 'morgen' : names[n]) + ' um ' + hours[n][0] + ':00 Uhr';
  }
  var y = document.getElementById('y'); if (y) y.textContent = now.getFullYear();

  /* Links auf eine FAQ-Frage klappen die Antwort gleich auf */
  var openFaq = function () {
    var t = location.hash && document.getElementById(location.hash.slice(1));
    if (t && t.tagName === 'DETAILS') t.open = true;
  };
  window.addEventListener('hashchange', openFaq); openFaq();

  /* Schwebender WhatsApp-Button: erst nach dem ersten Scrollen */
  var fab = document.getElementById('wa-fab');
  if (fab) {
    var onFab = function () { fab.classList.toggle('is-visible', window.scrollY > 240); };
    window.addEventListener('scroll', onFab, { passive: true }); onFab();
  }

  /* Sanftes Einblenden, in Rastern gestaffelt */
  document.querySelectorAll('.section-head, .creds li, .gallery figure, .faq details').forEach(function (el) { el.classList.add('reveal'); });
  if ('IntersectionObserver' in window && !reduced) {
    document.querySelectorAll('.reveal').forEach(function (el) {
      var sib = Array.prototype.filter.call(el.parentNode.children, function (c) { return c.classList.contains('reveal'); });
      if (sib.length > 1) el.style.transitionDelay = (sib.indexOf(el) % 8) * 80 + 'ms';
    });
    var io = new IntersectionObserver(function (es) {
      es.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add('is-in'); io.unobserve(e.target); } });
    }, { rootMargin: '0px 0px -8% 0px', threshold: 0.08 });
    document.querySelectorAll('.reveal').forEach(function (el) { io.observe(el); });
  } else {
    document.querySelectorAll('.reveal').forEach(function (el) { el.classList.add('is-in'); });
  }
})();

/* SHIREÁ – Cookie-Einwilligung mit Google Consent Mode v2 (Basic)

   Grundsatz: Vor der Einwilligung wird KEIN Google-Skript geladen und keine Verbindung
   zu Google aufgebaut. Erst nach Zustimmung zur Kategorie „Marketing“ wird das Google-Tag
   nachgeladen, mit allen Consent-Signalen zunächst auf „denied“ und danach auf die
   erteilte Auswahl aktualisiert. Die Entscheidung liegt im localStorage und lässt sich über
   „Cookie-Einstellungen“ im Seitenfuß jederzeit ändern oder widerrufen. */
(function () {
  'use strict';

  var ADS_ID = 'AW-18478823197';
  /* Conversion-Labels aus Google Ads (Zielvorhaben > Conversions > Aktion > Tag einrichten).
     Leer lassen, solange es die Aktion nicht gibt; dann wird kein Conversion-Ereignis gesendet. */
  var CONVERSIONS = { treatwell: '', whatsapp: '', telefon: '' };

  var KEY = 'shirea-consent-v1';
  var MAX_AGE_DAYS = 365; // danach wird erneut gefragt

  function read() {
    try {
      var c = JSON.parse(localStorage.getItem(KEY) || 'null');
      if (!c || !c.ts) return null;
      if ((Date.now() - new Date(c.ts).getTime()) / 864e5 > MAX_AGE_DAYS) return null;
      return c;
    } catch (e) { return null; }
  }
  function write(c) {
    c.v = 1; c.ts = new Date().toISOString();
    try { localStorage.setItem(KEY, JSON.stringify(c)); } catch (e) {}
  }

  /* ── Google-Tag, nur nach Einwilligung ───────────────────── */
  var tagLoaded = false;
  function loadGoogle() {
    if (tagLoaded) return;
    tagLoaded = true;
    window.dataLayer = window.dataLayer || [];
    window.gtag = function () { window.dataLayer.push(arguments); };
    gtag('consent', 'default', {
      ad_storage: 'denied', ad_user_data: 'denied', ad_personalization: 'denied',
      analytics_storage: 'denied', functionality_storage: 'denied', personalization_storage: 'denied',
      security_storage: 'granted'
    });
    gtag('consent', 'update', { ad_storage: 'granted', ad_user_data: 'granted', ad_personalization: 'granted' });
    gtag('js', new Date());
    gtag('config', ADS_ID);
    var s = document.createElement('script');
    s.async = true;
    s.src = 'https://www.googletagmanager.com/gtag/js?id=' + ADS_ID;
    document.head.appendChild(s);
  }

  /* Google-Cookies entfernen (beim Widerruf) */
  function clearGoogleCookies() {
    var host = location.hostname.replace(/^www\./, '');
    document.cookie.split(';').forEach(function (c) {
      var name = c.split('=')[0].trim();
      if (!/^(_gcl_|_ga|_gid|FPAU|FPGCL)/.test(name)) return;
      ['', '; domain=' + host, '; domain=.' + host].forEach(function (d) {
        document.cookie = name + '=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/' + d;
      });
    });
  }

  function apply(c, wasGranted) {
    if (c.marketing) { loadGoogle(); return; }
    if (wasGranted) {
      if (window.gtag) gtag('consent', 'update', { ad_storage: 'denied', ad_user_data: 'denied', ad_personalization: 'denied' });
      clearGoogleCookies();
      location.reload(); // entlädt das bereits geladene Google-Tag
    }
  }

  /* ── Klicks auf Buchungswege messen (nur mit Einwilligung) ── */
  document.addEventListener('click', function (e) {
    var a = e.target.closest && e.target.closest('a[href]');
    if (!a || !tagLoaded || !window.gtag) return;
    var href = a.getAttribute('href');
    var method = /treatwell\./.test(href) ? 'treatwell' : /^https:\/\/wa\.me\//.test(href) ? 'whatsapp' : /^tel:/.test(href) ? 'telefon' : '';
    if (!method) return;
    gtag('event', 'buchung_klick', { method: method });
    if (CONVERSIONS[method]) gtag('event', 'conversion', { send_to: ADS_ID + '/' + CONVERSIONS[method] });
  }, true);

  /* ── Banner ──────────────────────────────────────────────── */
  var el = document.createElement('div');
  el.className = 'cc';
  el.hidden = true;
  el.setAttribute('role', 'dialog');
  el.setAttribute('aria-labelledby', 'cc-title');
  el.setAttribute('aria-describedby', 'cc-text');
  el.innerHTML =
    '<div class="cc__in">' +
      '<h2 class="cc__title" id="cc-title">Wir verwenden Cookies</h2>' +
      '<p class="cc__text" id="cc-text">Wir nutzen Cookies und ähnliche Technologien. Einige sind für den Betrieb der Website notwendig, andere helfen uns, unsere Werbung zu verbessern und ihren Erfolg zu messen. Diese setzen wir nur mit Ihrer Einwilligung ein. Ihre Auswahl können Sie jederzeit über „Cookie-Einstellungen“ im Seitenfuß ändern. ' +
      '<a href="datenschutz.html#cookies">Datenschutzerklärung</a> · <a href="impressum.html">Impressum</a></p>' +
      '<div class="cc__opts" hidden>' +
        '<label class="cc__opt"><input type="checkbox" checked disabled><span><strong>Notwendig</strong>Speichert Ihre Auswahl in diesem Browser. Immer aktiv.</span></label>' +
        '<label class="cc__opt"><input type="checkbox" id="cc-marketing"><span><strong>Marketing</strong>Erfolgsmessung unserer Anzeigen und personalisierte Werbung mit Google Ads.</span></label>' +
      '</div>' +
      '<div class="cc__btns">' +
        '<button type="button" class="btn cc__btn" data-cc="none">Nur notwendige</button>' +
        '<button type="button" class="btn cc__btn" data-cc="all">Alle akzeptieren</button>' +
        '<button type="button" class="cc__link" data-cc="more">Einstellungen</button>' +
        '<button type="button" class="btn btn--ghost cc__btn" data-cc="save" hidden>Auswahl speichern</button>' +
      '</div>' +
    '</div>';

  function mount() {
    document.body.appendChild(el);
    var opts = el.querySelector('.cc__opts');
    var mk = el.querySelector('#cc-marketing');
    var more = el.querySelector('[data-cc="more"]');
    var save = el.querySelector('[data-cc="save"]');

    function show(details) {
      el.hidden = false;
      document.documentElement.classList.add('cc-open');
      if (details) { opts.hidden = false; save.hidden = false; more.hidden = true; }
      requestAnimationFrame(function () { el.classList.add('is-in'); });
    }
    function hide() {
      el.classList.remove('is-in');
      document.documentElement.classList.remove('cc-open');
      setTimeout(function () { el.hidden = true; opts.hidden = true; save.hidden = true; more.hidden = false; }, 300);
    }
    function decide(marketing) {
      var before = read();
      write({ marketing: marketing });
      hide();
      apply({ marketing: marketing }, !!(before && before.marketing));
    }

    el.querySelector('[data-cc="all"]').addEventListener('click', function () { decide(true); });
    el.querySelector('[data-cc="none"]').addEventListener('click', function () { decide(false); });
    more.addEventListener('click', function () { opts.hidden = false; save.hidden = false; more.hidden = true; });
    save.addEventListener('click', function () { decide(mk.checked); });

    document.querySelectorAll('[data-cookie-settings]').forEach(function (b) {
      b.addEventListener('click', function (ev) {
        ev.preventDefault();
        var c = read();
        mk.checked = !!(c && c.marketing);
        show(true);
      });
    });

    var existing = read();
    if (existing) apply(existing, false);
    else show(false);
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', mount);
  else mount();
})();

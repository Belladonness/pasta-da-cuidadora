/* O Pixel da Meta só é carregado após consentimento explícito. */
(() => {
  const pixelId = '2184547628804231';
  const storageKey = 'pasta-da-cuidadora-meta-consent-v1';
  const panel = document.querySelector('[data-consent-panel]');
  const accept = document.querySelector('[data-consent-accept]');
  const reject = document.querySelector('[data-consent-reject]');
  const settings = document.querySelector('[data-privacy-settings]');
  if (!panel || !accept || !reject || !settings) return;

  let choice = null;
  let pixelLoaded = false;
  try { choice = localStorage.getItem(storageKey); } catch (_) {}

  function saveChoice(value) {
    choice = value;
    try { localStorage.setItem(storageKey, value); } catch (_) {}
    panel.hidden = true;
  }

  function loadPixel() {
    if (pixelLoaded || choice !== 'accepted') return;
    pixelLoaded = true;
    !function(f,b,e,v,n,t,s) {
      if (f.fbq) return;
      n=f.fbq=function(){n.callMethod?n.callMethod.apply(n,arguments):n.queue.push(arguments)};
      if (!f._fbq) f._fbq=n;
      n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];
      t=b.createElement(e);t.async=!0;t.src=v;s=b.getElementsByTagName(e)[0];
      s.parentNode.insertBefore(t,s);
    }(window,document,'script','https://connect.facebook.net/en_US/fbevents.js');
    window.fbq('init', pixelId);
    window.fbq('track', 'PageView');
    window.fbq('track', 'ViewContent', {content_name:'Pasta da Cuidadora',content_type:'product',value:27,currency:'BRL'});
  }

  if (choice === 'accepted') loadPixel();
  else if (choice !== 'rejected') panel.hidden = false;

  accept.addEventListener('click', () => { saveChoice('accepted'); loadPixel(); });
  reject.addEventListener('click', () => { saveChoice('rejected'); if (pixelLoaded) location.reload(); });
  settings.addEventListener('click', () => { panel.hidden = false; panel.querySelector('button')?.focus(); });
  document.querySelectorAll('[data-checkout]').forEach(link => {
    link.addEventListener('click', () => {
      if (link.dataset.checkoutReady === 'true' && choice === 'accepted' && typeof window.fbq === 'function') {
        window.fbq('track', 'InitiateCheckout', {content_name:'Pasta da Cuidadora',content_type:'product',value:27,currency:'BRL'});
      }
    });
  });
  if (location.hash === '#preferencias-de-privacidade') panel.hidden = false;

})();

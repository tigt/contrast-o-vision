var unframeableDomains = /google|twitter|medium|facebook|github(?:\.com)/i;

function grab(selector) {
  return document.querySelector(selector);
}

var urlbar = grab('.input--url');
var iframe = grab('.test-frame');
var refreshBtn = grab('.btn--refresh');

grab('#iframe-wrapper').removeAttribute('filter');

urlbar.addEventListener('change', function() {
  if (unframeableDomains.test(urlbar.value)) {
    alert('Sorry, they block me from <iframe>ing them. Try something less secure.');
    urlbar.value = 'http://';
  } else {
    iframe.src = urlbar.value;
    grab('#iframe-wrapper').setAttribute('filter', 'url(#contrast-o-vision)');
  }
});

refreshBtn.addEventListener('click', function() {
  var currentSrc = iframe.src;
  iframe.removeAttribute('src');
  iframe.src = currentSrc;
});

urlbar.addEventListener('focus', function() {
  if (this.value === '') {
    this.value = 'http://';
  }
});

urlbar.addEventListener('blur', function() {
  if (this.value === 'http://') {
    this.value = '';
  }
});

function grab(selector) {
  return document.querySelector(selector);
}

var urlbar = grab('.input--url');
var iframe = grab('.test-frame');
var refreshBtn = grab('.btn--refresh');

grab('#iframe-wrapper').removeAttribute('filter');

urlbar.addEventListener('change', function() {
  iframe.style.visibility = 'hidden';
  iframe.src = urlbar.value;
});

iframe.onload = function(evt) {
  if (this.src.indexOf('//contrast-o-vision.ti.gt') === -1) this.removeAttribute('filter');
};

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
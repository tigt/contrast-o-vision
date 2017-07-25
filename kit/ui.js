function grab(selector) {
  return document.querySelector(selector);
}

var urlbar = grab('.input-url');
var iframe = grab('.testFrame');
var refreshBtn = grab('.buttonrefresh');

iframe.style.filter = 'none';

urlbar.addEventListener('change', function() {
  iframe.src = urlbar.value;
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

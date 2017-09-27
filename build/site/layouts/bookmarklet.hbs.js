(function(b,h) {
  b.insertAdjacentHTML('afterbegin', "{{> svg}}");
  b.style.filter = 'url(#contrast-o-vision)';

  // The filter won't work if there isn't a backdrop
  if (getComputedStyle(h).getPropertyValue('background-color') === 'rgba(0, 0, 0, 0)') {
    h.style.backgroundColor = '#fff';
  }
})(document.body, document.documentElement);

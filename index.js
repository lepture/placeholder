
module.exports = function(el) {
  el = el || document.querySelectorAll('[data-placeholder]');
  if (typeof el === 'string') {
    el = document.querySelectorAll(el);
  }
  if (!el.length) {
    el = [el];
  }
  for (var i = 0; i < el.length; i++) {
    hasContent(el[i]);
  }
}

function hasContent(el) {
  if (el.textContent) {
    el.classList.add('placeholder-has-content');
  }

  el.addEventListener('blur', function() {
    if (this.textContent) {
      el.classList.add('placeholder-has-content');
    } else {
      el.classList.remove('placeholder-has-content');
    }
  });
}

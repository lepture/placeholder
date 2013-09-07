
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
  if (!el.addEventListener) return;

  if (!el.textContent) {
    addClass(el);
  }

  el.addEventListener('blur', function() {
    if (this.textContent) {
      el.className = el.className.replace(/\s?placeholder\s?/g, ' ');
    } else {
      addClass(el);
    }
  });
}

function addClass(el) {
  if (!/\bplaceholder\b/.test(el.className)) {
      el.className += ' placeholder';
  }
}

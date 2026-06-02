(function () {
  var overlay = document.createElement('div');
  overlay.className = 'lb-overlay';

  var lbImg = document.createElement('img');
  lbImg.id = 'lb-img';

  var btn = document.createElement('button');
  btn.className = 'lb-close';
  btn.innerHTML = '&#x2715;';
  btn.setAttribute('aria-label', 'Fermer');

  overlay.appendChild(lbImg);
  overlay.appendChild(btn);
  document.body.appendChild(overlay);

  function close() {
    overlay.classList.remove('open');
    document.body.style.overflow = '';
    lbImg.src = '';
  }

  btn.addEventListener('click', function (e) {
    e.stopPropagation();
    close();
  });

  overlay.addEventListener('click', function (e) {
    if (e.target === overlay) close();
  });

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') close();
  });

  /* Delegation : un seul listener sur le document entier */
  document.addEventListener('click', function (e) {
    var t = e.target;
    if (t.tagName === 'IMG' && t.id !== 'lb-img') {
      lbImg.src = t.src;
      lbImg.alt = t.alt || '';
      overlay.classList.add('open');
      document.body.style.overflow = 'hidden';
    }
  });
})();

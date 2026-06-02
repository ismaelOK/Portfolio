(function () {
  const overlay = document.createElement('div');
  overlay.className = 'lb-overlay';

  const img = document.createElement('img');
  const btn = document.createElement('button');
  btn.className = 'lb-close';
  btn.textContent = '✕';
  btn.setAttribute('aria-label', 'Fermer');

  overlay.appendChild(img);
  overlay.appendChild(btn);
  document.body.appendChild(overlay);

  function close() {
    overlay.classList.remove('open');
    document.body.style.overflow = '';
    img.src = '';
  }

  function open(src, alt) {
    img.src = src;
    img.alt = alt || '';
    overlay.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  btn.addEventListener('click', close);
  overlay.addEventListener('click', function (e) {
    if (e.target === overlay) close();
  });
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') close();
  });

  document.querySelectorAll('img').forEach(function (el) {
    el.classList.add('lb-able');
    el.addEventListener('click', function () {
      open(this.src, this.alt);
    });
  });
})();

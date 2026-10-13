/* Schéma de l'accueil : affiche le rôle de chaque couche et rejoue la requête. */
(function () {
  var fig = document.getElementById('trace');
  if (!fig) return;

  var note = document.getElementById('trace-note');
  var fallback = note.textContent;
  var mv = document.getElementById('mv');
  var btn = document.getElementById('replay');
  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  fig.querySelectorAll('.node').forEach(function (node) {
    function show() {
      var text = node.getAttribute('data-note');
      if (text) note.textContent = text;
    }
    function hide() { note.textContent = fallback; }
    node.addEventListener('mouseenter', show);
    node.addEventListener('focus', show);
    node.addEventListener('mouseleave', hide);
    node.addEventListener('blur', hide);
  });

  function play() {
    if (reduce || !mv || typeof mv.beginElement !== 'function') return;
    fig.classList.remove('run');
    void fig.offsetWidth; /* force le recalcul pour relancer les animations CSS */
    fig.classList.add('run');
    mv.beginElement();
  }

  if (btn) btn.addEventListener('click', play);
  if (!reduce) window.setTimeout(play, 700);
})();

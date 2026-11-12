// Comportements communs à toutes les pages des maquettes.
// Repris du prototype V2, sans le bandeau de démonstration ni le sélecteur d'annonces.
// Chaque bloc ne s'active que si ses éléments sont présents dans la page.
(function () {
  var HOME = document.body.getAttribute('data-home') || '';

  // Statut d'ouverture et horaires, à l'heure de Paris.
  var names = ['Dimanche', 'Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi'];
  var sched = function (d) { return d >= 1 && d <= 5 ? [[540, 750], [840, 1110]] : []; };
  var fmt = function (m) { return Math.floor(m / 60) + 'h' + String(m % 60).padStart(2, '0'); };
  function now() {
    try {
      var parts = new Intl.DateTimeFormat('en-GB', { timeZone: 'Europe/Paris', weekday: 'short', hour: '2-digit', minute: '2-digit', hour12: false }).formatToParts(new Date());
      var g = function (t) { return parts.find(function (x) { return x.type === t; }).value; };
      return { day: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].indexOf(g('weekday')), min: (parseInt(g('hour'), 10) % 24) * 60 + parseInt(g('minute'), 10) };
    } catch (e) { var d = new Date(); return { day: d.getDay(), min: d.getHours() * 60 + d.getMinutes() }; }
  }
  function status() {
    var n = now(), open = false, label = '', today = sched(n.day);
    today.forEach(function (s) { if (n.min >= s[0] && n.min < s[1]) { open = true; label = 'Ouvert maintenant · jusqu’à ' + fmt(s[1]); } });
    if (!open) {
      var next = today.find(function (s) { return s[0] > n.min; });
      if (next) label = 'Fermé · ouvre à ' + fmt(next[0]);
      else for (var i = 1; i <= 7; i++) { var dd = (n.day + i) % 7, s = sched(dd); if (s.length) { label = 'Fermé · réouverture ' + (i === 1 ? 'demain' : names[dd].toLowerCase()) + ' à ' + fmt(s[0][0]); break; } }
    }
    document.querySelectorAll('.js-status').forEach(function (el) { el.textContent = label; el.className = 'status js-status ' + (open ? 'is-open' : 'is-closed'); });
    var h = document.getElementById('horaires');
    if (!h) return;
    h.innerHTML = '';
    [1, 2, 3, 4, 5, 6, 0].forEach(function (d) {
      var row = document.createElement('div');
      if (d === n.day) row.className = 'is-today';
      var a = document.createElement('span'); a.textContent = names[d];
      var b = document.createElement('span'); b.className = 'mono';
      b.textContent = sched(d).length ? sched(d).map(function (s) { return fmt(s[0]) + '–' + fmt(s[1]); }).join(' · ') : 'Fermé';
      row.append(a, b); h.appendChild(row);
    });
  }
  status();
  setInterval(status, 60000);

  // Copier l'adresse.
  var copier = document.getElementById('copier');
  if (copier) copier.addEventListener('click', function () {
    var done = function () { copier.textContent = 'Adresse copiée'; setTimeout(function () { copier.textContent = 'Copier l’adresse'; }, 2000); };
    try { navigator.clipboard.writeText('159 boulevard Godard, 33110 Le Bouscat').then(done, function () { copier.textContent = '159 bd Godard, Le Bouscat'; }); }
    catch (e) { copier.textContent = '159 bd Godard, Le Bouscat'; }
  });

  // Annonces : lit le bloc « annonces-data », garde celles dont les dates (heure de Paris) sont en cours.
  // Une annonce « important » passe avant les informations : elle s'affiche seule (ou avec les autres importantes).
  // S'il reste plusieurs annonces, elles se relaient en fondu toutes les 8 secondes ; le défilement s'arrête
  // au survol, au focus, sur le bouton pause, dès qu'on navigue soi-même, et n'est jamais lancé si le système
  // demande de réduire les animations.
  var annonce = document.getElementById('annonce');
  if (annonce) (function () {
    var stage = document.getElementById('annonce-stage');
    var nav = document.getElementById('annonce-nav');
    var compteur = document.getElementById('annonce-count');
    var btnPause = document.getElementById('annonce-pause');
    var reduce = matchMedia('(prefers-reduced-motion: reduce)');
    var DUREE = 8000;
    var liste = [], courant = 0, timer = 0, enPause = false, survol = false, focus = false;

    function jour() {
      try { return new Intl.DateTimeFormat('en-CA', { timeZone: 'Europe/Paris' }).format(new Date()); }
      catch (e) { return new Date().toISOString().slice(0, 10); }
    }
    function cle(l) {
      var s = l.map(function (d) { return d.texte + '|' + d.niveau; }).join('~'), h = 0;
      for (var i = 0; i < s.length; i++) h = (h * 31 + s.charCodeAt(i)) | 0;
      return 'annonces-masquees-' + h;
    }
    function lien(url) { return url.charAt(0) === '#' && !document.querySelector(url) ? HOME + url : url; }
    function actives(donnees) {
      var t = jour();
      var l = (donnees || []).filter(function (d) { return d && d.texte && !(d.debut && t < d.debut) && !(d.fin && t > d.fin); });
      var imp = l.filter(function (d) { return d.niveau === 'important'; });
      return imp.length ? imp : l;
    }
    function montrer(i, annoncer) {
      courant = (i + liste.length) % liste.length;
      Array.prototype.forEach.call(stage.children, function (el, k) {
        var on = k === courant;
        el.classList.toggle('is-current', on);
        el.setAttribute('aria-hidden', String(!on));
      });
      compteur.textContent = (courant + 1) + ' / ' + liste.length;
      stage.setAttribute('aria-live', annoncer ? 'polite' : 'off');
    }
    function auto() { return liste.length > 1 && !reduce.matches; }
    function planifier() {
      clearTimeout(timer);
      if (auto() && !enPause && !survol && !focus && !document.hidden) timer = setTimeout(function () { montrer(courant + 1, false); planifier(); }, DUREE);
    }
    function majPause() {
      btnPause.hidden = !auto();
      btnPause.classList.toggle('is-paused', enPause);
      btnPause.setAttribute('aria-label', enPause ? 'Reprendre le défilement des annonces' : 'Mettre les annonces en pause');
    }
    function afficher(donnees) {
      clearTimeout(timer);
      liste = actives(donnees);
      try { if (liste.length && localStorage.getItem(cle(liste))) liste = []; } catch (e) {}
      if (!liste.length) { annonce.hidden = true; return; }
      annonce.className = 'annonce annonce--' + (liste[0].niveau === 'important' ? 'important' : 'information');
      stage.innerHTML = '';
      var modele = document.getElementById('annonce-ic');
      liste.forEach(function (d, k) {
        var item = document.createElement('div');
        item.className = 'annonce__item';
        item.appendChild(modele.content.cloneNode(true));
        var p = document.createElement('p');
        p.className = 'annonce__txt';
        var sr = document.createElement('span'); sr.className = 'sr-only';
        sr.textContent = liste.length > 1 ? 'Annonce ' + (k + 1) + ' sur ' + liste.length + ' : ' : '';
        p.appendChild(sr);
        p.appendChild(document.createTextNode(d.texte.replace(/ ([?!:;»])/g, ' $1')));
        if (d.url) { var a = document.createElement('a'); a.href = lien(d.url); a.textContent = d.lien || 'En savoir plus'; p.appendChild(a); }
        item.appendChild(p);
        stage.appendChild(item);
      });
      nav.hidden = liste.length < 2;
      enPause = false;
      montrer(0, false);
      majPause();
      annonce.hidden = false;
      planifier();
    }
    document.getElementById('annonce-prev').addEventListener('click', function () { enPause = true; majPause(); montrer(courant - 1, true); planifier(); });
    document.getElementById('annonce-next').addEventListener('click', function () { enPause = true; majPause(); montrer(courant + 1, true); planifier(); });
    btnPause.addEventListener('click', function () { enPause = !enPause; majPause(); planifier(); });
    annonce.addEventListener('pointerenter', function () { survol = true; planifier(); });
    annonce.addEventListener('pointerleave', function () { survol = false; planifier(); });
    annonce.addEventListener('focusin', function (e) { focus = stage.contains(e.target); planifier(); });
    annonce.addEventListener('focusout', function (e) { if (!annonce.contains(e.relatedTarget)) { focus = false; planifier(); } });
    document.addEventListener('visibilitychange', planifier);
    reduce.addEventListener('change', function () { majPause(); planifier(); });
    document.getElementById('annonce-fermer').addEventListener('click', function () {
      try { localStorage.setItem(cle(liste), '1'); } catch (e) {}
      clearTimeout(timer);
      annonce.hidden = true;
    });
    var donnees = null;
    try { donnees = JSON.parse(document.getElementById('annonces-data').textContent); } catch (e) {}
    afficher(donnees);
  })();

  // Coin de l'urgentiste : jamais d'accès direct sans mise en garde.
  // - Tout lien [data-gate="urgentiste"] ouvre la fenêtre ; « Je suis professionnel de santé » suit ensuite le lien.
  // - Sur la page elle-même (body[data-gate-page]), la fenêtre s'ouvre à l'arrivée tant que la mise en garde
  //   n'a pas été acceptée dans l'onglet ; la refuser (bouton, Échap, clic sur le voile) ramène à l'accueil.
  var gate = document.getElementById('gate-urgentiste');
  if (gate) (function () {
    var CLE = 'mise-en-garde-urgentiste';
    var surPage = document.body.hasAttribute('data-gate-page');
    var origine = null;
    function acceptee() { try { return sessionStorage.getItem(CLE) === 'oui'; } catch (e) { return false; } }
    function accepter() { try { sessionStorage.setItem(CLE, 'oui'); } catch (e) {} }
    function ouvrir() { if (typeof gate.showModal === 'function') gate.showModal(); else gate.setAttribute('open', ''); }
    function fermer() { if (gate.open && typeof gate.close === 'function') gate.close(); else gate.removeAttribute('open'); }
    function refuser() { if (surPage && !acceptee()) location.href = HOME || 'index.html'; else fermer(); }
    Array.prototype.forEach.call(document.querySelectorAll('[data-gate="urgentiste"]'), function (a) {
      a.addEventListener('click', function (e) { e.preventDefault(); origine = a; ouvrir(); });
    });
    document.getElementById('gate-non').addEventListener('click', refuser);
    document.getElementById('gate-ok').addEventListener('click', function (e) {
      e.preventDefault();
      accepter();
      var cible = origine && origine.getAttribute('href');
      origine = null;
      fermer();
      if (cible && cible !== '#' && cible.split('#')[0] !== location.pathname.split('/').pop()) location.href = cible;
    });
    gate.addEventListener('cancel', function (e) { if (surPage && !acceptee()) { e.preventDefault(); refuser(); } });
    gate.addEventListener('click', function (e) { if (e.target === gate) refuser(); });
    gate.addEventListener('close', function () { if (origine) origine.focus(); });
    if (surPage && !acceptee()) ouvrir();
  })();
})();

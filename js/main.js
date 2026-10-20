(() => {
const $ = (s, r = document) => r.querySelector(s), $$ = (s, r = document) => [...r.querySelectorAll(s)];
const RM = matchMedia('(prefers-reduced-motion:reduce)').matches;
const GH = 'M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48v-1.7c-2.78.6-3.37-1.34-3.37-1.34-.45-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.61.07-.61 1.01.07 1.54 1.04 1.54 1.04.9 1.54 2.36 1.1 2.94.84.09-.65.35-1.1.64-1.35-2.22-.25-4.55-1.11-4.55-4.94 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.64 0 0 .84-.27 2.75 1.02a9.5 9.5 0 0 1 5 0c1.91-1.29 2.75-1.02 2.75-1.02.55 1.37.2 2.39.1 2.64.64.7 1.03 1.59 1.03 2.68 0 3.84-2.34 4.68-4.57 4.93.36.31.68.92.68 1.85v2.74c0 .27.18.58.69.48A10 10 0 0 0 12 2z';
const AR = '<svg class="ar" viewBox="0 0 24 24"><path d="M7 17 17 7M8 7h9v9"/></svg>';
const gh = r => `https://github.com/Sachin8147-star/${r}`;

/* ---------- data ---------- */
const featured = [
  { t: 'QuickFolio', k: 'Live SaaS · Flask', h: 18, host: 'quikfolio.tech', s: 'quickfolio.webp',
    d: 'Portfolio and résumé platform I built alone, live on its own domain: live-preview builder, unique publish URLs, recruiter mode, three PDF résumé layouts, OAuth, billing, analytics and an admin panel.',
    tags: ['Flask', 'SQLite', 'JavaScript', 'ReportLab', 'OAuth 2.0'], live: 'https://quikfolio.tech', gh: gh('QuickFolio') },
  { t: 'Indian Path-Lab', k: 'Client project · Django', h: 190, host: 'lab.local', s: 'path-lab.svg',
    d: 'Laboratory management system for a working pathology lab in Delhi: role-based access, booking, billing, patient portal, and letterhead PDF reports with QR codes and auto-calculated panel values.',
    tags: ['Django', 'Python', 'JavaScript', 'Electron (in progress)'] },
  { t: 'ProofPay', k: 'Hackathon · Escrow platform', h: 265, host: 'proofpay.app', s: 'proofpay.svg',
    d: 'Verification and escrow platform for digital work, with separate client, freelancer and admin dashboards.',
    tags: ['Python', 'Supabase', 'Blockchain testnet'], gh: gh('proofPay') },
  { t: 'StudyOS', k: 'Productivity dashboard · Django', h: 42, host: 'studyos.app', s: 'studyos.svg',
    d: 'Per-user student dashboard with REST APIs: task manager, Pomodoro timer with analytics, habit tracker, notes and calendar.',
    tags: ['Django', 'Chart.js', 'SQLite', 'REST APIs'], gh: gh('Study-os-Dashboard') }
];
const archive = [
  { y: 2026, t: 'SMS Spam Classifier', d: 'TF-IDF + Naive Bayes, ~97% accuracy on 5,572 messages', h: 330, gh: gh('SMS-Spam-Detecter') },
  { y: 2026, t: 'This Portfolio', d: 'GSAP, Lenis and a canvas flow field. No framework.', h: 18, gh: gh('Portfolio-website') },
  { y: 2026, t: 'Data Mining Practicals', d: 'Coursework implementations in Python', h: 200, gh: gh('Data-Mining-DM-Practicals') },
  { y: 2026, t: 'AI Practicals', d: 'Logic programming exercises in Prolog', h: 150, gh: gh('AI-Practicals') },
  { y: 2026, t: 'Sales Report Generator', d: 'CSV analysis to PDF report with FPDF', h: 55, gh: gh('sales-report-project-python') },
  { y: 2026, t: 'NLP Chatbot', d: 'Intent-aware chatbot built with NLTK', h: 280, gh: gh('chatbot') },
  { y: 2026, t: 'Calculator', d: 'Clean-UI calculator, live on GitHub Pages', h: 12, gh: 'https://sachin8147-star.github.io/calculator/' },
  { y: 2025, t: 'Weather Forecast', d: 'OpenWeather API reporting tool in Python', h: 205, gh: gh('weather-forecast') },
  { y: 2025, t: 'Stone Paper Scissors', d: 'My first project, playable on GitHub Pages', h: 100, gh: 'https://sachin8147-star.github.io/stone-paper-scissors-game/' }
];
const lang = { 'SMS Spam Classifier': 'Python', 'This Portfolio': 'JavaScript', 'Data Mining Practicals': 'Python', 'AI Practicals': 'Prolog', 'Sales Report Generator': 'Python', 'NLP Chatbot': 'Python', 'Calculator': 'CSS3', 'Weather Forecast': 'Python', 'Stone Paper Scissors': 'JavaScript' };
const bars = [
  ['Advanced', [['Dynamic Programming', 13], ['Backtracking', 10], ['Game Theory', 5]]],
  ['Intermediate', [['Math', 34], ['Hash Table', 22], ['Binary Search', 11]]],
  ['Fundamental', [['Array', 68], ['Two Pointers', 21], ['String', 20]]]
];
const stack = {
  Languages: ['Python', 'JavaScript', 'C++', 'SQL', 'HTML5', 'CSS3', 'Prolog'],
  Backend: ['Flask', 'Django', 'REST APIs', 'OAuth 2.0', 'Session auth', 'SQLite', 'MySQL', 'Supabase'],
  'Data & AI': ['Pandas', 'NumPy', 'scikit-learn', 'NLTK', 'Matplotlib', 'Seaborn', 'Jupyter', 'Gemini API'],
  Tools: ['Git', 'GitHub', 'Render', 'ReportLab', 'FPDF', 'Chart.js', 'Electron', 'CSP / HSTS', 'SEO']
};

/* ---------- render ---------- */
const art = (h, s = 0) => `<div class="art" style="background:radial-gradient(rgba(255,255,255,.14) 1px,transparent 1.2px) 0 0/22px 22px,radial-gradient(55% 75% at ${18 + s * 17}% 15%,hsl(${h} 95% 56%/.85),transparent 62%),radial-gradient(60% 70% at 88% 92%,hsl(${h + 55} 90% 48%/.75),transparent 62%),linear-gradient(160deg,hsl(${h} 45% 11%),#090807)"></div>`;
const shot = s => s ? `<img class="shot" src="assets/shots/${s}" alt="" loading="lazy" onerror="this.remove()">` : '';
const chrome = u => `<div class="cv-chrome"><i></i><i></i><i></i><b>${u}</b></div>`;
$('#cards').innerHTML = featured.map((p, n) => {
  const href = p.live || p.gh, open = href ? `a href="${href}" target="_blank" rel="noopener" data-cur="${p.live ? 'Visit' : 'Code'}" aria-label="${p.t}"` : 'div', end = href ? 'a' : 'div';
  return `<article class="card rv${n === 0 ? ' wide' : ''}">
  <${open} class="cover">${art(p.h, n)}${chrome(p.host)}<div class="cv-title">${p.t}</div>${shot(p.s)}</${end}>
  <div class="card-body"><div class="card-hd"><div><h3>${p.t}</h3><div class="kind">${p.k}</div></div>
  <div class="acts">${p.gh ? `<a href="${p.gh}" target="_blank" rel="noopener" aria-label="${p.t} on GitHub"><svg viewBox="0 0 24 24"><path d="${GH}"/></svg></a>` : ''}${p.live ? `<a class="live" href="${p.live}" target="_blank" rel="noopener" aria-label="Open ${p.t}">${AR}</a>` : ''}</div></div>
  <p>${p.d}</p><div class="tags">${p.tags.map(t => `<span>${ico(t)}${t}</span>`).join('')}</div></div></article>`;
}).join('');
$('#rows').innerHTML = archive.map((p, n) => `<li class="rv"><a href="${p.gh}" target="_blank" rel="noopener" data-i="${n}"><span class="yr">${p.y}</span><span class="nm">${ico(lang[p.t])}${p.t}</span><span class="ds">${p.d}</span><span class="go">${AR}</span></a></li>`).join('');
$('#bars').innerHTML = bars.map(([l, a]) => `<div class="lgrp"><div class="lvl">${l}</div>` + a.map(([n, c]) => `<div class="bar"><em>${n}</em><div class="tr"><i data-s="${(c / 68).toFixed(3)}"></i></div><b>${c}</b></div>`).join('') + '</div>').join('');
$('#stack-list').innerHTML = Object.entries(stack).map(([g, a]) => `<div class="sg rv"><h4>${g}</h4><div>${a.map(s => `<span>${ico(s)}${s}</span>`).join('')}</div></div>`).join('');
const mq = [...stack.Languages, ...stack.Backend.slice(0, 3), 'scikit-learn', 'NLTK', 'Pandas', 'ReportLab', 'Git'].map(s => `<span><b>${ico(s)}${s}</b></span>`).join('');
$('.track').innerHTML = mq + mq;
$$('[data-ico]').forEach(e => e.insertAdjacentHTML('afterbegin', ico(e.dataset.ico)));
$$('[data-stk]').forEach(e => e.innerHTML = e.dataset.stk.split('|').map(s => `<span>${ico(s)}${s}</span>`).join(''));

/* ---------- theme + clock ---------- */
const root = document.documentElement;
try { const s = localStorage.getItem('theme'); if (s) root.dataset.theme = s; } catch (e) {}
const clock = () => { $('#clock').textContent = 'Delhi · ' + new Intl.DateTimeFormat('en-IN', { timeZone: 'Asia/Kolkata', hour: '2-digit', minute: '2-digit', hour12: true }).format(new Date()); };
clock(); setInterval(clock, 30000);

/* ---------- background flow field ---------- */
const cv = $('#bg'), cx = cv.getContext('2d'), dpr = Math.min(devicePixelRatio || 1, 1.5), m = { x: -999, y: -999 };
let W, H, P, bg = '12,11,10', t = 0;
const paint = () => { bg = getComputedStyle(root).getPropertyValue('--bg-rgb').trim(); cx.fillStyle = `rgb(${bg})`; cx.fillRect(0, 0, W, H); };
const size = () => { W = innerWidth; H = innerHeight; cv.width = W * dpr; cv.height = H * dpr; cx.setTransform(dpr, 0, 0, dpr, 0, 0); paint(); P = Array.from({ length: Math.min(560, W * H / 3000 | 0) }, () => ({ x: Math.random() * W, y: Math.random() * H })); };
size(); addEventListener('resize', size); addEventListener('pointermove', e => { m.x = e.clientX; m.y = e.clientY; });
cv.style.opacity = .5;
(function frame() {
  if (!RM) {
    t += .0016; cx.fillStyle = `rgba(${bg},.075)`; cx.fillRect(0, 0, W, H);
    cx.fillStyle = root.dataset.theme === 'light' ? 'rgba(226,73,29,.5)' : 'rgba(255,120,70,.5)';
    for (const p of P) {
      const a = (Math.sin(p.x * .0022 + t * 3) + Math.cos(p.y * .0026 - t * 2)) * Math.PI;
      let vx = Math.cos(a) * .7, vy = Math.sin(a) * .7; const dx = p.x - m.x, dy = p.y - m.y, d = Math.hypot(dx, dy);
      if (d < 150) { const f = (1 - d / 150) * 3 / (d + 1); vx += dx * f; vy += dy * f; }
      p.x += vx; p.y += vy; if (p.x < 0 || p.x > W || p.y < 0 || p.y > H) { p.x = Math.random() * W; p.y = Math.random() * H; }
      cx.fillRect(p.x, p.y, 1.4, 1.4);
    }
  }
  requestAnimationFrame(frame);
})();
$('#theme').onclick = () => {
  root.dataset.theme = root.dataset.theme === 'light' ? 'dark' : 'light';
  try { localStorage.setItem('theme', root.dataset.theme); } catch (e) {}
  setTimeout(paint, 60);
};

/* ---------- hero banner: generative accretion disc ---------- */
(() => {
  const c = $('#banner'), x = c.getContext('2d'), d = Math.min(devicePixelRatio || 1, 2), mp = { x: 0, y: 0, tx: 0, ty: 0 };
  let w, h, R, on = true, disc = [], halo = [], tilt = .13, rot = -.1;
  const mk = () => {
    w = c.clientWidth; h = c.clientHeight; if (!w) return; c.width = w * d; c.height = h * d; x.setTransform(d, 0, 0, d, 0, 0);
    x.fillStyle = '#050403'; x.fillRect(0, 0, w, h); R = h * .14; const rMax = Math.min(w * .46, R * 9);
    disc = Array.from({ length: 6500 }, () => { const u = Math.random(); return { r: R * 1.3 + (rMax - R * 1.3) * Math.pow(u, 2.3), a: Math.random() * 6.283, n: u, s: .6 + Math.random() }; });
    halo = Array.from({ length: 460 }, () => ({ r: R * (1.04 + Math.random() * .2), a: Math.random() * 6.283, s: Math.random() }));
  };
  const pos = p => { const px = Math.cos(p.a) * p.r, py = Math.sin(p.a) * p.r * tilt; return [w / 2 + px * Math.cos(rot) - py * Math.sin(rot), h / 2 + px * Math.sin(rot) + py * Math.cos(rot)]; };
  const draw = front => { for (const p of disc) { if ((Math.sin(p.a) > 0) !== front) continue; const [X, Y] = pos(p); x.fillStyle = `hsla(${26 + (1 - p.n) * 24},100%,${50 + (1 - p.n) * 42}%,${(.8 - p.n * .45) * (front ? 1 : .6) + .08})`; x.fillRect(X, Y, p.s * 1.3, p.s * 1.3); } };
  const step = () => {
    mp.x += (mp.tx - mp.x) * .05; mp.y += (mp.ty - mp.y) * .05; tilt = .13 + mp.y * .06; rot = -.1 + mp.x * .09;
    x.fillStyle = 'rgba(5,4,3,.13)'; x.fillRect(0, 0, w, h);
    const g = x.createRadialGradient(w / 2, h / 2, R, w / 2, h / 2, R * 6); g.addColorStop(0, 'rgba(255,150,50,.16)'); g.addColorStop(1, 'rgba(255,150,50,0)'); x.fillStyle = g; x.fillRect(0, 0, w, h);
    for (const p of disc) p.a += .012 * Math.pow(R * 1.3 / p.r, 1.5);
    draw(false);
    for (const p of halo) { p.a += .004; x.fillStyle = `hsla(40,100%,${68 + p.s * 28}%,${.22 + p.s * .45})`; x.fillRect(w / 2 + Math.cos(p.a) * p.r, h / 2 + Math.sin(p.a) * p.r * 1.04, 1.2, 1.2); }
    x.fillStyle = '#000'; x.beginPath(); x.arc(w / 2, h / 2, R, 0, 6.283); x.fill();
    x.strokeStyle = 'rgba(255,225,170,.5)'; x.lineWidth = 1; x.beginPath(); x.arc(w / 2, h / 2, R * 1.01, 0, 6.283); x.stroke();
    draw(true);
  };
  new ResizeObserver(mk).observe(c); mk();
  if (RM) { for (let i = 0; i < 90; i++) step(); return; }
  new IntersectionObserver(([e]) => on = e.isIntersecting).observe(c);
  const box = c.parentNode;
  box.addEventListener('pointermove', e => { const r = box.getBoundingClientRect(); mp.tx = ((e.clientX - r.left) / r.width - .5) * 2; mp.ty = ((e.clientY - r.top) / r.height - .5) * 2; });
  box.addEventListener('pointerleave', () => { mp.tx = mp.ty = 0; });
  (function loop() { if (on && w) step(); requestAnimationFrame(loop); })();
})();

if (!window.gsap) { $('.loader').remove(); return; }
gsap.registerPlugin(ScrollTrigger);

/* ---------- smooth scroll ---------- */
let lenis;
if (!RM && window.Lenis) {
  lenis = new Lenis({ lerp: .09 });
  lenis.on('scroll', ScrollTrigger.update);
  gsap.ticker.add(ts => lenis.raf(ts * 1000)); gsap.ticker.lagSmoothing(0);
}
$$('a[href^="#"]').forEach(a => a.addEventListener('click', e => {
  const el = $(a.getAttribute('href')); if (!el) return; e.preventDefault();
  lenis ? lenis.scrollTo(el, { offset: -10, duration: 1.4 }) : el.scrollIntoView({ behavior: 'smooth' });
}));

/* ---------- text splitting ---------- */
function split(el, chars) {
  el.setAttribute('aria-label', el.textContent);
  const walk = n => [...n.childNodes].forEach(c => {
    if (c.nodeType === 3) {
      const f = document.createDocumentFragment();
      c.textContent.split(/(\s+)/).forEach(tk => {
        if (!tk) return; if (/^\s+$/.test(tk)) return f.append(' ');
        const w = document.createElement('span'); w.className = 'w'; w.setAttribute('aria-hidden', 'true');
        (chars ? [...tk] : [tk]).forEach(u => { const i = document.createElement('span'); i.className = 'i'; i.textContent = u; w.append(i); });
        f.append(w);
      });
      c.replaceWith(f);
    } else if (c.nodeType === 1) walk(c);
  });
  walk(el); return $$('.i', el);
}
const splits = $$('.split').map(el => ({ el, i: split(el, el.classList.contains('name')), hero: !!el.closest('.hero') }));
splits.forEach(s => gsap.set(s.i, { yPercent: 118 }));
const rv = $$('.rv'), heroRv = rv.filter(e => e.closest('.hero')), restRv = rv.filter(e => !e.closest('.hero'));
gsap.set(rv, { opacity: 0, y: 36 });
gsap.set($$('.card'), { rotateX: 10, scale: .94, transformPerspective: 1000 });
gsap.set($$('.job'), { x: -40 });
gsap.set($$('.sg span'), { scale: .7, opacity: 0 });

/* ---------- counters ---------- */
const count = (el, delay = 0) => { const o = { v: 0 }, n = +el.dataset.count, s = el.dataset.suf || ''; gsap.to(o, { v: n, duration: 1.8, delay, ease: 'power3.out', onUpdate: () => el.textContent = Math.round(o.v) + s }); };

/* ---------- intro ---------- */
const ld = { v: 0 };
const intro = gsap.timeline({ paused: true })
  .to('.ld-name', { yPercent: -30, opacity: 0, duration: .5, ease: 'power2.in' })
  .to('.loader', { yPercent: -100, duration: 1, ease: 'expo.inOut' }, '<.15')
  .add(() => $('.loader').remove())
  .to(splits.filter(s => s.hero).flatMap(s => s.i), { yPercent: 0, duration: 1.3, ease: 'expo.out', stagger: .035 }, '-=.45')
  .fromTo('.banner', { clipPath: 'inset(0 0 100% 0 round 28px)' }, { clipPath: 'inset(0 0 0% 0 round 28px)', duration: 1.5, ease: 'expo.out' }, '<')
  .to(heroRv, { opacity: 1, y: 0, duration: 1.1, ease: 'expo.out', stagger: .1 }, '-=1')
  .add(() => $$('.hero [data-count]').forEach(e => count(e)), '-=.8')
  .add(() => { $('.name').classList.add('live'); if (!RM) gsap.to('.avatar', { y: -7, duration: 2.6, ease: 'sine.inOut', yoyo: true, repeat: -1 }); });
gsap.to(ld, { v: 100, duration: 1.5, ease: 'power2.inOut', onUpdate: () => { $('.ld-num').textContent = String(Math.round(ld.v)).padStart(3, '0'); $('.loader').style.setProperty('--p', ld.v / 100); }, onComplete: () => intro.play() });
gsap.set('.ld-bar', { opacity: 1 });

/* ---------- scroll reveals ---------- */
splits.filter(s => !s.hero).forEach(s => ScrollTrigger.create({ trigger: s.el, start: 'top 86%', once: true, onEnter: () => gsap.to(s.i, { yPercent: 0, duration: 1.15, ease: 'expo.out', stagger: .045 }) }));
ScrollTrigger.batch(restRv, { start: 'top 90%', once: true, onEnter: b => { b.forEach(e => e.classList.add('in')); gsap.to(b, { opacity: 1, y: 0, x: 0, rotateX: 0, scale: 1, duration: 1.2, ease: 'expo.out', stagger: .1 }); } });
ScrollTrigger.batch('.sg', { start: 'top 90%', once: true, onEnter: b => b.forEach(g => gsap.to($$('span', g), { scale: 1, opacity: 1, duration: .8, ease: 'back.out(2.2)', stagger: .045, delay: .15 })) });
$$('.h2').forEach(el => gsap.to(el, { y: -34, ease: 'none', scrollTrigger: { trigger: el, scrub: true, start: 'top bottom', end: 'bottom top' } }));
gsap.to('.banner canvas', { yPercent: 9, ease: 'none', scrollTrigger: { trigger: '.banner', scrub: true, start: 'top top', end: 'bottom top' } });
$$('.lc [data-count]').forEach(e => ScrollTrigger.create({ trigger: e, start: 'top 90%', once: true, onEnter: () => count(e) }));
ScrollTrigger.create({ trigger: '#bars', start: 'top 88%', once: true, onEnter: () => gsap.to('.bar i', { scaleX: (_, el) => +el.dataset.s, duration: 1.4, ease: 'expo.out', stagger: .08 }) });
gsap.to('.progress', { scaleX: 1, ease: 'none', scrollTrigger: { start: 0, end: 'max', scrub: .2 } });
$$('.cover .art').forEach(a => gsap.fromTo(a, { yPercent: -7 }, { yPercent: 7, ease: 'none', scrollTrigger: { trigger: a.parentNode, scrub: true } }));
$$('main section[id]').forEach(s => ScrollTrigger.create({ trigger: s, start: 'top 55%', end: 'bottom 55%', onToggle: self => { const a = $(`.nav nav a[href="#${s.id}"]`); a && a.classList.toggle('on', self.isActive); } }));

/* marquee, speeds up with scroll velocity */
const mt = gsap.to('.track', { xPercent: -50, duration: 40, ease: 'none', repeat: -1 });
const sk = gsap.quickTo('.track', 'skewX', { duration: .5, ease: 'power3' }); let skT;
ScrollTrigger.create({ onUpdate: s => { sk(gsap.utils.clamp(-12, 12, s.getVelocity() / -220)); clearTimeout(skT); skT = setTimeout(() => sk(0), 140); const v = Math.min(Math.abs(s.getVelocity()) / 260, 7); if (v > .3) gsap.to(mt, { timeScale: 1 + v, duration: .25, overwrite: true, onComplete: () => gsap.to(mt, { timeScale: 1, duration: 1.2 }) }); } });

/* ---------- live GitHub contribution graph ---------- */
(async () => {
  const grid = $('.gh-grid'), CELL = 15, fmt = (d, o) => new Date(d + 'T00:00').toLocaleDateString('en-IN', o);
  try {
    const r = await fetch('https://github-contributions-api.jogruber.de/v4/Sachin8147-star?y=last'); if (!r.ok) throw 0;
    const days = (await r.json()).contributions; if (!days || !days.length) throw 0;
    const pad = new Date(days[0].date + 'T00:00').getDay(); let total = 0;
    days.forEach(d => { total += d.count; });
    grid.innerHTML = '<i class="gh-pad"></i>'.repeat(pad) + days.map(d => `<i class="gh-cell l${d.level}" title="${d.count} contribution${d.count === 1 ? '' : 's'} on ${fmt(d.date, { day: 'numeric', month: 'short', year: 'numeric' })}"></i>`).join('');
    const mon = $('.gh-months'); let lm = -1, lw = -9;
    for (let w = 0; w * 7 - pad < days.length; w++) {
      const dd = days[Math.max(0, w * 7 - pad)], m = +dd.date.slice(5, 7);
      if (m !== lm && w - lw > 3) { mon.insertAdjacentHTML('beforeend', `<span style="left:${w * CELL}px">${fmt(dd.date, { month: 'short' })}</span>`); lw = w; }
      lm = m;
    }
    const tot = $('.gh-total'); tot.dataset.count = total;
    const cells = $$('.gh-cell'); gsap.set(cells, { scale: 0, opacity: 0 }); $('.gh-scroll').scrollLeft = 1e4;
    ScrollTrigger.create({ trigger: '.gh', start: 'top 85%', once: true, onEnter: () => { count(tot); gsap.to(cells, { scale: 1, opacity: 1, duration: .5, ease: 'back.out(2)', stagger: { amount: 1.6 } }); } });
    ScrollTrigger.refresh();
  } catch (e) {
    grid.innerHTML = '<p class="gh-msg">Live data is unavailable right now. <a href="https://github.com/Sachin8147-star" target="_blank" rel="noopener">View it on GitHub</a></p>';
    $('.gh-total').textContent = '—';
  }
})();

/* ---------- interaction ---------- */
if (matchMedia('(pointer:fine)').matches && !RM) {
  const cur = $('.cursor'), qx = gsap.quickTo(cur, 'x', { duration: .4, ease: 'power3' }), qy = gsap.quickTo(cur, 'y', { duration: .4, ease: 'power3' });
  addEventListener('pointermove', e => { qx(e.clientX); qy(e.clientY); });
  const lab = $('span', cur);
  document.addEventListener('pointerover', e => { const t = e.target.closest('[data-cur]'); lab.textContent = t ? t.dataset.cur : ''; cur.classList.toggle('lbl', !!t); cur.classList.toggle('hov', !t && !!e.target.closest('a,button')); });

  $$('.name .i').forEach(i => i.addEventListener('pointerenter', () => { if (!$('.name').classList.contains('live')) return; gsap.timeline().to(i, { yPercent: -14, rotate: -4, color: 'var(--ac)', duration: .25, ease: 'power2.out' }).to(i, { yPercent: 0, rotate: 0, color: '', duration: 1.1, ease: 'elastic.out(1,.35)' }); }));

  $$('.mag').forEach(el => {
    el.addEventListener('pointermove', e => { const r = el.getBoundingClientRect(); gsap.to(el, { x: (e.clientX - r.left - r.width / 2) * .28, y: (e.clientY - r.top - r.height / 2) * .4, duration: .4, ease: 'power3' }); });
    el.addEventListener('pointerleave', () => gsap.to(el, { x: 0, y: 0, duration: .9, ease: 'elastic.out(1,.4)' }));
  });

  $$('.card').forEach(c => {
    c.addEventListener('pointermove', e => {
      const r = c.getBoundingClientRect(), px = (e.clientX - r.left) / r.width, py = (e.clientY - r.top) / r.height;
      c.style.setProperty('--mx', px * 100 + '%'); c.style.setProperty('--my', py * 100 + '%');
      gsap.to(c, { rotateY: (px - .5) * 7, rotateX: (.5 - py) * 7, transformPerspective: 1000, duration: .5, ease: 'power2' });
    });
    c.addEventListener('pointerleave', () => gsap.to(c, { rotateX: 0, rotateY: 0, duration: .8, ease: 'power3' }));
  });

  const peek = $('.peek'), px = gsap.quickTo(peek, 'x', { duration: .5, ease: 'power3' }), py = gsap.quickTo(peek, 'y', { duration: .5, ease: 'power3' });
  $$('#rows a').forEach(a => {
    const p = archive[a.dataset.i];
    a.addEventListener('pointerenter', () => { peek.innerHTML = art(p.h, +a.dataset.i % 4) + `<div class="cv-title">${p.t}</div>`; gsap.to(peek, { opacity: 1, scale: 1, rotate: -3, duration: .5, ease: 'expo.out' }); });
    a.addEventListener('pointermove', e => { px(e.clientX + 30); py(e.clientY - 90); });
    a.addEventListener('pointerleave', () => gsap.to(peek, { opacity: 0, scale: .6, duration: .35 }));
  });
}

/* ---------- mobile menu ---------- */
const mb = $('#menu'), setMenu = o => { document.body.classList.toggle('menu-open', o); mb.setAttribute('aria-expanded', o); if (lenis) o ? lenis.stop() : lenis.start(); };
mb.onclick = () => setMenu(!document.body.classList.contains('menu-open'));
$('.sheet').addEventListener('click', e => { if (e.target.closest('a')) setMenu(false); }, true);
addEventListener('keydown', e => e.key === 'Escape' && setMenu(false));
/* footer wordmark fills in as you reach the end */
gsap.fromTo('.mega span', { backgroundSize: '0% 100%' }, { backgroundSize: '100% 100%', ease: 'none', scrollTrigger: { trigger: '.mega', start: 'top 95%', end: 'bottom 55%', scrub: .6 } });

addEventListener('load', () => { (document.fonts ? document.fonts.ready : Promise.resolve()).then(() => ScrollTrigger.refresh()); });
})();

/* Studio de Pilates Tatiane Lasneaux */
(function () {
  'use strict';

  /* Conversão "CLIQUE WPP" do Google Ads em todos os links de WhatsApp.
     Os links abrem em nova aba, então só registramos o evento, sem
     bloquear a navegação. */
  document.querySelectorAll('a[href*="wa.me/"]').forEach((link) => {
    link.addEventListener('click', () => {
      if (typeof window.gtag !== 'function') return;
      window.gtag('event', 'conversion', {
        send_to: 'AW-18181878048/ZLBYCI3R378cEKDi5d1D',
        value: 1.0,
        currency: 'BRL'
      });
    });
  });

  /* Header: transparente sobre o hero, sólido ao rolar ou com o menu aberto */
  const header  = document.querySelector('.site-header');
  const menuBtn = document.querySelector('.menu-btn');
  const menu    = document.getElementById('menu-mobile');

  /* O fundo vai aparecendo aos poucos entre 20px e 220px de rolagem
     (--hdr de 0 a 1); texto e botão trocam de cor na metade do caminho. */
  const FADE_START = 20, FADE_LEN = 200;
  let ticking = false;
  const updateHeader = () => {
    ticking = false;
    const open = menu && menu.classList.contains('is-open');
    const p = open ? 1 : Math.min(1, Math.max(0, (window.scrollY - FADE_START) / FADE_LEN));
    header.style.setProperty('--hdr', p.toFixed(3));
    header.classList.toggle('is-solid', p > 0.5);
  };
  window.addEventListener('scroll', () => {
    if (!ticking) { ticking = true; requestAnimationFrame(updateHeader); }
  }, { passive: true });
  updateHeader();

  const setMenu = (open) => {
    menu.classList.toggle('is-open', open);
    menuBtn.setAttribute('aria-expanded', String(open));
    menuBtn.setAttribute('aria-label', open ? 'Fechar menu' : 'Abrir menu');
    header.classList.toggle('menu-open', open);
    document.body.style.overflow = open ? 'hidden' : '';
    updateHeader();
  };
  if (menuBtn && menu) {
    menuBtn.addEventListener('click', () => setMenu(!menu.classList.contains('is-open')));
    menu.querySelectorAll('a').forEach((a) => a.addEventListener('click', () => setMenu(false)));
  }

  /* Depoimentos: carrossel simples com avanço automático */
  const slides = document.querySelectorAll('.depo__slide');
  const cur    = document.querySelector('[data-depo-current]');
  const tot    = document.querySelector('[data-depo-total]');
  let idx = 0, timer = null;
  if (tot) tot.textContent = slides.length;
  const show = (n) => {
    if (!slides.length) return;
    idx = (n + slides.length) % slides.length;
    slides.forEach((s, i) => s.classList.toggle('is-active', i === idx));
    if (cur) cur.textContent = idx + 1;
  };
  const restart = () => { clearInterval(timer); timer = setInterval(() => show(idx + 1), 7000); };
  const prev = document.querySelector('[data-depo-prev]');
  const next = document.querySelector('[data-depo-next]');
  if (prev) prev.addEventListener('click', () => { show(idx - 1); restart(); });
  if (next) next.addEventListener('click', () => { show(idx + 1); restart(); });
  if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) restart();

  /* Animação de entrada suave */
  const revealEls = document.querySelectorAll('.section-head, .pub__grid, .benef__grid, .sobre__photo, .sobre__text, .depo__inner, .jornada__content, .frase p, .local__grid');
  if ('IntersectionObserver' in window) {
    revealEls.forEach((el) => el.classList.add('reveal'));
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => { if (e.isIntersecting) { e.target.classList.add('is-in'); io.unobserve(e.target); } });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
    revealEls.forEach((el) => io.observe(el));
  }

  /* Ano no rodapé */
  const y = document.querySelector('[data-year]');
  if (y) y.textContent = new Date().getFullYear();
})();

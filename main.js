/* ============================================
   FREE SPIRIT VB — Shared Scripts
   ============================================ */

document.addEventListener('DOMContentLoaded', () => {

  // ===== NAV SCROLL =====
  const nav = document.getElementById('nav');
  if (nav) {
    const isLight = nav.classList.contains('nav-light');
    const updateNav = () => {
      if (window.scrollY > 60) {
        nav.classList.add('scrolled');
        if (isLight) nav.classList.remove('nav-light');
      } else {
        nav.classList.remove('scrolled');
        if (isLight) nav.classList.add('nav-light');
      }
    };
    window.addEventListener('scroll', updateNav, { passive: true });
    updateNav();
  }

  // ===== MOBILE MENU =====
  const menuBtn    = document.getElementById('menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');
  const mobClose   = document.getElementById('mob-close');
  if (menuBtn && mobileMenu) {
    menuBtn.addEventListener('click', () => mobileMenu.classList.toggle('open'));
    if (mobClose) mobClose.addEventListener('click', () => mobileMenu.classList.remove('open'));
    mobileMenu.querySelectorAll('a').forEach(a => a.addEventListener('click', () => mobileMenu.classList.remove('open')));
  }

  // ===== SCROLL REVEAL =====
  const reveals = document.querySelectorAll('.reveal');
  if (reveals.length) {
    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) { e.target.classList.add('visible'); obs.unobserve(e.target); }
      });
    }, { threshold: 0.08, rootMargin: '0px 0px -30px 0px' });
    reveals.forEach(el => obs.observe(el));
  }

  // ===== FAQ =====
  document.querySelectorAll('.faq-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const id     = btn.dataset.faq;
      const body   = document.getElementById('faq-' + id);
      const icon   = document.getElementById('faq-icon-' + id);
      const isOpen = body.classList.contains('open');
      document.querySelectorAll('.faq-body').forEach(b => b.classList.remove('open'));
      document.querySelectorAll('[id^="faq-icon-"]').forEach(i => { i.textContent = '+'; i.classList.remove('open'); });
      if (!isOpen) { body.classList.add('open'); icon.textContent = '+'; icon.classList.add('open'); }
    });
  });

  // ===== ACTIVE NAV LINK =====
  const current = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a, #mobile-menu a').forEach(a => {
    const href = a.getAttribute('href');
    if (href === current || (current === '' && href === 'index.html')) {
      a.classList.add('active');
    }
  });

});

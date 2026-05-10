/* ============================================================
   C. LUBAC AVOCAT — SCRIPTS
   ============================================================ */

/* ── Navbar scroll ── */
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 60);
}, { passive: true });

/* ── Mobile menu ── */
const toggle   = document.getElementById('navToggle');
const overlay  = document.getElementById('navOverlay');

toggle.addEventListener('click', () => {
  const open = overlay.classList.toggle('open');
  toggle.classList.toggle('open', open);
  document.body.style.overflow = open ? 'hidden' : '';
});

document.querySelectorAll('.nav-overlay a').forEach(a => {
  a.addEventListener('click', () => {
    overlay.classList.remove('open');
    toggle.classList.remove('open');
    document.body.style.overflow = '';
  });
});

/* ── Scroll animations (IntersectionObserver) ── */
const animated = document.querySelectorAll('.fade-up, .fade-left, .fade-right');

const io = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      io.unobserve(entry.target);
    }
  });
}, { threshold: 0.12, rootMargin: '0px 0px -48px 0px' });

animated.forEach(el => io.observe(el));

/* ── Hero entrance ── */
window.addEventListener('load', () => {
  const heroItems = document.querySelectorAll('#hero .hero-animate');
  heroItems.forEach((el, i) => {
    setTimeout(() => el.classList.add('visible'), 280 + i * 130);
  });
  const heroImg = document.querySelector('.hero-img-wrap');
  if (heroImg) setTimeout(() => heroImg.classList.add('visible'), 550);
});

/* ── Smooth scroll for anchors ── */
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const target = document.querySelector(a.getAttribute('href'));
    if (target) {
      e.preventDefault();
      window.scrollTo({
        top: target.getBoundingClientRect().top + window.scrollY - 80,
        behavior: 'smooth'
      });
    }
  });
});

/* ── Animated counters ── */
function animateCounter(el) {
  const target = parseFloat(el.dataset.target);
  const isDecimal = el.dataset.target.includes('.');
  const duration = 1600;
  const step = 16;
  const increment = target / (duration / step);
  let current = 0;

  const timer = setInterval(() => {
    current = Math.min(current + increment, target);
    el.textContent = isDecimal
      ? current.toFixed(1)
      : Math.floor(current) + (el.dataset.suffix || '');
    if (current >= target) clearInterval(timer);
  }, step);
}

const counterEls = document.querySelectorAll('[data-target]');
if (counterEls.length) {
  const counterIO = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateCounter(entry.target);
        counterIO.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });
  counterEls.forEach(el => counterIO.observe(el));
}

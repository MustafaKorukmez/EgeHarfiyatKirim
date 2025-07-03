// Hamburger menu
const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('nav');
menuToggle.addEventListener('click', () => {
  nav.classList.toggle('active');
});

// Metrics counters animation
function animateCounter(el) {
  const target = +el.dataset.count;
  let current = 0;
  const inc = Math.max(1, Math.floor(target / 70));
  function update() {
    current += inc;
    if (current > target) current = target;
    el.textContent = current.toLocaleString('tr-TR');
    if (current < target) requestAnimationFrame(update);
  }
  update();
}
function handleCountersOnScroll() {
  document.querySelectorAll('.metric-count').forEach(el => {
    if (el.getBoundingClientRect().top < window.innerHeight - 80 && !el.animated) {
      el.animated = true;
      animateCounter(el);
    }
  });
}
window.addEventListener('scroll', handleCountersOnScroll);
window.addEventListener('DOMContentLoaded', handleCountersOnScroll);

// Testimonials carousel
let testiIdx = 0;
const testimonials = document.querySelectorAll('.testimonial');
function showTestimonial(idx) {
  testimonials.forEach((el, i) => el.classList.toggle('active', i === idx));
}
setInterval(() => {
  testiIdx = (testiIdx + 1) % testimonials.length;
  showTestimonial(testiIdx);
}, 5600);
showTestimonial(testiIdx);

// FAQ accordion
document.querySelectorAll('.faq-question').forEach(btn => {
  btn.addEventListener('click', () => {
    const expanded = btn.getAttribute('aria-expanded') === 'true';
    document.querySelectorAll('.faq-question').forEach(b => b.setAttribute('aria-expanded', 'false'));
    btn.setAttribute('aria-expanded', (!expanded).toString());
  });
});

// Simple lightbox for gallery
document.querySelectorAll('.lightbox').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const img = document.createElement('img');
    img.src = link.href;
    img.alt = link.dataset.caption || '';
    img.style.maxWidth = '90vw';
    img.style.maxHeight = '80vh';
    img.style.borderRadius = '18px';
    img.style.boxShadow = '0 6px 36px #2229';
    const overlay = document.createElement('div');
    overlay.style.position = 'fixed';
    overlay.style.top = 0; overlay.style.left = 0; overlay.style.width = '100vw'; overlay.style.height = '100vh';
    overlay.style.background = 'rgba(24,24,24,0.89)';
    overlay.style.display = 'flex'; overlay.style.alignItems = 'center'; overlay.style.justifyContent = 'center';
    overlay.style.zIndex = 99999;
    overlay.appendChild(img);
    overlay.addEventListener('click', () => document.body.removeChild(overlay));
    document.body.appendChild(overlay);
  });
});

// Optional: Fade-in on scroll (for older browsers)
const fadeEls = document.querySelectorAll('section > .container > *');
function fadeInOnScroll() {
  fadeEls.forEach(el => {
    const rect = el.getBoundingClientRect();
    if(rect.top < window.innerHeight - 80) {
      el.style.opacity = 1;
      el.style.transform = 'none';
    }
  });
}
window.addEventListener('scroll', fadeInOnScroll);
window.addEventListener('DOMContentLoaded', fadeInOnScroll);

// Search overlay functionality
const searchToggle = document.querySelector('.search-toggle');
const searchOverlay = document.getElementById('search-overlay');
const searchForm = document.getElementById('search-form');
const searchInput = document.getElementById('search-input');
const searchClose = document.querySelector('.search-close');

function openSearch() {
  searchOverlay.hidden = false;
  searchInput.focus();
}
function closeSearch() {
  searchOverlay.hidden = true;
}
if (searchToggle && searchOverlay) {
  searchToggle.addEventListener('click', openSearch);
  searchClose.addEventListener('click', closeSearch);
  document.addEventListener('keydown', e => { if (e.key === 'Escape') closeSearch(); });
  searchForm.addEventListener('submit', e => {
    e.preventDefault();
    const q = searchInput.value.trim();
    if (q) {
      if (!window.find(q)) {
        alert('Sonuç bulunamadı');
      }
    }
  });
}

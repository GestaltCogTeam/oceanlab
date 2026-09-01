const revealObserver = new IntersectionObserver((entries) => entries.forEach((entry) => entry.isIntersecting && entry.target.classList.add('show')), { threshold: 0.12 });
document.querySelectorAll('.reveal').forEach((el) => revealObserver.observe(el));
const glow = document.querySelector('.cursor-glow');
window.addEventListener('pointermove', (event) => { glow.style.left = `${event.clientX}px`; glow.style.top = `${event.clientY}px`; });
document.querySelector('[data-lang-toggle]').addEventListener('click', (event) => { event.currentTarget.textContent = event.currentTarget.textContent === 'EN' ? '中' : 'EN'; });
const slides = [...document.querySelectorAll('.showcase-slide')];
const dots = [...document.querySelectorAll('.showcase-dots i')];
let activeSlide = 0;
setInterval(() => {
  slides[activeSlide].classList.remove('is-active');
  dots[activeSlide].classList.remove('is-active');
  activeSlide = (activeSlide + 1) % slides.length;
  slides[activeSlide].classList.add('is-active');
  dots[activeSlide].classList.add('is-active');
}, 4500);

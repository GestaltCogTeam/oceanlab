const revealObserver = new IntersectionObserver((entries) => entries.forEach((entry) => entry.isIntersecting && entry.target.classList.add('show')), { threshold: 0.12 });
document.querySelectorAll('.reveal').forEach((el) => revealObserver.observe(el));
const glow = document.querySelector('.cursor-glow');
window.addEventListener('pointermove', (event) => { glow.style.left = `${event.clientX}px`; glow.style.top = `${event.clientY}px`; });
document.querySelector('[data-lang-toggle]').addEventListener('click', (event) => { event.currentTarget.textContent = event.currentTarget.textContent === 'EN' ? '中' : 'EN'; });

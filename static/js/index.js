function toggleLanguage() {
    const showEnglish = document.documentElement.lang !== 'en';
    document.documentElement.lang = showEnglish ? 'en' : 'zh-CN';
    document.querySelectorAll('.lang-zh, .lang-en, .lang-zh-content, .lang-en-content').forEach(function (element) {
        const isEnglish = element.classList.contains('lang-en') || element.classList.contains('lang-en-content');
        element.classList.toggle('is-hidden', showEnglish !== isEnglish);
    });
    document.querySelectorAll('[data-zh][data-en]').forEach(function (element) {
        element.textContent = showEnglish ? element.dataset.en : element.dataset.zh;
    });
}

document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('a[href^="#"]').forEach(function (link) {
        link.addEventListener('click', function (event) {
            const target = document.querySelector(link.getAttribute('href'));
            if (target) {
                event.preventDefault();
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
});

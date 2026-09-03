const revealObserver = new IntersectionObserver((entries) => entries.forEach((entry) => entry.isIntersecting && entry.target.classList.add('show')), { threshold: 0.12 });
document.querySelectorAll('.reveal').forEach((el) => revealObserver.observe(el));
const glow = document.querySelector('.cursor-glow');
window.addEventListener('pointermove', (event) => { glow.style.left = `${event.clientX}px`; glow.style.top = `${event.clientY}px`; });

const translations = {
  zh: {
    badge: 'GestaltCog', heroTitle: '观沧 · 全球中尺度涡旋预报平台', heroTagline: '以观沧之眼，预见涡旋万千', heroDesc: '时空物理知识嵌入的涡旋预报，遇上基于海表观测的三维重建——涡旋追踪、次表层结构与未来十天预报，一站式在线呈现。', enterPlatform: '进入平台',
    nav: ['核心介绍', '技术亮点', '成果亮点', '应用场景'], introTitle: '核心介绍', intro: ['中尺度涡旋是海洋的「脉搏」，蕴含全球海洋约八成动能，深刻影响气候与海洋环境。然而，其研究长期面临三大挑战：数据获取繁琐、三维结构难见全貌、预报结果无处验证。', '观沧将这一切搬到线上：每个涡旋的完整轨迹、逐日参数与次表层三维温盐结构随选随览，无需下载与搭建环境；面向未来，预报模型给出未来十天的位置与参数演变。'],
    enginesTitle: '技术亮点', engines: [['GC-EdCastX 涡旋预报', '时空物理知识嵌入的涡旋预报方法，关联相邻时刻的涡旋演变，精准勾勒未来十天涡旋位置、半径、振幅与中心高度的逐日演变。'], ['GC-3DEddy 三维重建', '仅使用海表卫星观测数据的涡旋三维结构预测方法，结合预训练自回归大模型技术构建涡旋次表层初始结构，突破了依赖再分析数据预测的限制。'], ['交互式三维可视化', '三维地球上的全球涡旋分布与轨迹动画，柱状等值面透视次表层温盐结构，支持温盐 / 异常场切换与深度切片交互，全部在浏览器中完成。'], ['权威数据底座', '接入 CMEMS、AVISO、GLORYS12V1 再分析与预报产品，数据来源权威可溯，结果可下载、可复现。']],
    resultsTitle: '成果亮点', results: ['全球涡旋在线追踪，历史轨迹逐日回放。', '未来十天轨迹预测与三维重建一体化，次表层结构同步呈现。', '预测与重建精度对标现有全球海洋预报 AI 系统，核心指标全面领先。', '涡旋参数、1/12° 三维结构与高清快照一键下载，成果即取即用。'],
    scenariosTitle: '应用场景', scenarios: [['海洋科学研究', '为涡旋动力机制、水团输运研究提供即开即用的在线分析工具，让灵感不必等待数据。'], ['涡旋结构分析', '从轨迹追踪到三维结构的全流程可视化，涡旋垂向结构一览无余。'], ['渔业与航运参考', '涡旋位置与演化预报，为渔场研判与航线规划抢占先机。'], ['科研教学', '交互式可视化让中尺度涡旋现象触手可及，服务海洋学教学与科普。']],
    ctaTitle: '观沧海，知涡旋', ctaDesc: '东临碣石，以观沧海。潮起潮落处，每个涡旋的来路与去向，尽收眼底。'
  },
  en: {
    badge: 'GestaltCog', heroTitle: 'GestaltCog · OceanLab', heroTagline: 'See the Ocean Through Guancang, Foresee the Eddies Ahead', heroDesc: 'Physics-informed eddy forecasting meets sea-surface-observation-based 3D reconstruction — eddy tracking, subsurface structures, and ten-day forecasts, all presented online in one place.', enterPlatform: 'Enter the Platform',
    nav: ['Introduction', 'Technical Highlights', 'Key Results', 'Applications'], introTitle: 'Introduction', intro: ['Mesoscale eddies are the "pulse" of the ocean, holding roughly 80% of its total kinetic energy and profoundly shaping climate and marine environments. Yet research on them faces three enduring challenges: cumbersome data access, 3D structures that resist full view, and forecasts with nowhere to verify.', "GestaltCog · OceanLab brings it all online: every eddy's full trajectory, daily parameters, and subsurface 3D temperature-salinity structure ready at a glance — no downloads, no setup. Looking ahead, our forecasting model projects ten days of eddy evolution."],
    enginesTitle: 'Technical Highlights', engines: [['GC-EdCastX Eddy Forecasting', 'A spatiotemporal physics-informed eddy forecasting method that links eddies across consecutive time steps, precisely charting the daily evolution of position, radius, amplitude, and central height over the next ten days.'], ['GC-3DEddy 3D Reconstruction', "A 3D eddy structure reconstruction method driven solely by sea-surface satellite observations, combining pretrained autoregressive large-model techniques to build the eddy's initial subsurface structure — breaking free from the reliance on reanalysis data."], ['Interactive 3D Visualization', 'Global eddy distributions and animated trajectories on a 3D globe, columnar isosurfaces revealing subsurface temperature-salinity structures, with temperature / salinity / anomaly modes and interactive depth slices — all in the browser.'], ['Authoritative Data Foundation', 'Built on CMEMS, AVISO, GLORYS12V1 reanalysis and forecast products — traceable data sources, reproducible results, ready for download.']],
    resultsTitle: 'Key Results', results: ['Global eddies tracked online, historical trajectories replayed day by day.', '10-day trajectory forecasting and 3D reconstruction integrated in one, subsurface structures evolving in sync.', 'Prediction and reconstruction accuracy benchmarked against existing global ocean forecasting AI systems, leading on core metrics.', 'Eddy parameters, 1/12° 3D structures, and high-resolution snapshots downloadable in one click.'],
    scenariosTitle: 'Applications', scenarios: [['Ocean Science Research', 'An open-and-go online analysis tool for eddy dynamics and water mass transport studies — so ideas never wait for data.'], ['Eddy Structure Analysis', 'A full visualization pipeline from trajectory tracking to 3D structure, laying the vertical architecture of every eddy bare.'], ['Fisheries & Shipping Reference', 'Eddy position and evolution forecasts, giving fishing ground assessment and route planning a head start.'], ['Research & Education', 'Interactive visualization that brings mesoscale eddies within reach, serving oceanography teaching and outreach.']],
    ctaTitle: 'Behold the Ocean, Know the Eddies', ctaDesc: 'Where tides rise and fall, the past and future of every eddy unfolds before your eyes.'
  }
};

let currentLanguage = 'zh';
const languageButton = document.querySelector('[data-lang-toggle]');
const setText = (selector, value) => document.querySelector(selector).textContent = value;
function applyLanguage(language) {
  const t = translations[language];
  currentLanguage = language;
  document.documentElement.lang = language === 'en' ? 'en' : 'zh-CN';
  languageButton.textContent = language === 'en' ? '中' : 'EN';
  document.querySelectorAll('.main-nav a').forEach((el, index) => { el.textContent = t.nav[index]; });
  document.querySelector('[data-i18n="badge"]').textContent = t.badge;
  setText('[data-i18n="heroTitle"]', t.heroTitle); setText('[data-i18n="heroTagline"]', t.heroTagline); setText('[data-i18n="heroDesc"]', t.heroDesc); setText('[data-i18n="enterPlatform"]', t.enterPlatform);
  setText('.intro h2', t.introTitle); document.querySelectorAll('.intro-text p').forEach((el, index) => { el.textContent = t.intro[index]; });
  setText('.section-heading h2', t.enginesTitle); document.querySelectorAll('.engine-card h3').forEach((el, index) => { el.textContent = t.engines[index][0]; }); document.querySelectorAll('.card-detail').forEach((el, index) => { el.textContent = t.engines[index][1]; });
  setText('.results h2', t.resultsTitle); document.querySelectorAll('.result-list p').forEach((el, index) => { el.textContent = t.results[index]; });
  setText('.scenario-grid h2', t.scenariosTitle); document.querySelectorAll('.scenario-items h3').forEach((el, index) => { el.textContent = t.scenarios[index][0]; }); document.querySelectorAll('.scenario-items p').forEach((el, index) => { el.textContent = t.scenarios[index][1]; });
  setText('.cta h2', t.ctaTitle); setText('.cta-content>p:not(.kicker)', t.ctaDesc);
}
languageButton.addEventListener('click', () => applyLanguage(currentLanguage === 'zh' ? 'en' : 'zh'));
const slides = [...document.querySelectorAll('.showcase-slide')];
const dots = [...document.querySelectorAll('.showcase-dots button')];
let activeSlide = 0;
const showSlide = (index) => {
  slides[activeSlide].classList.remove('is-active');
  dots[activeSlide].classList.remove('is-active');
  activeSlide = index;
  slides[activeSlide].classList.add('is-active');
  dots[activeSlide].classList.add('is-active');
};
dots.forEach((dot, index) => dot.addEventListener('click', () => showSlide(index)));
setInterval(() => {
  showSlide((activeSlide + 1) % slides.length);
}, 4500);

const lightbox = document.querySelector('.image-lightbox');
const lightboxImage = lightbox.querySelector('img');
const closeLightbox = () => { lightbox.hidden = true; document.body.classList.remove('lightbox-open'); };
slides.forEach((slide) => slide.addEventListener('click', () => {
  lightboxImage.src = slide.src;
  lightboxImage.alt = slide.alt;
  lightbox.hidden = false;
  document.body.classList.add('lightbox-open');
}));
document.querySelector('.lightbox-close').addEventListener('click', closeLightbox);
lightbox.addEventListener('click', (event) => { if (event.target === lightbox) closeLightbox(); });
document.addEventListener('keydown', (event) => { if (event.key === 'Escape' && !lightbox.hidden) closeLightbox(); });

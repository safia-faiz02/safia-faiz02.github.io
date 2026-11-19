// Safia Faiz — Portfolio interactions
document.documentElement.classList.add('js');

document.addEventListener('DOMContentLoaded', () => {
    const header = document.getElementById('header');
    const navMenu = document.getElementById('navMenu');
    const navToggle = document.getElementById('navToggle');
    const themeToggle = document.getElementById('themeToggle');
    const root = document.documentElement;

    /* Mobile menu */
    const setMenu = (open) => {
        navMenu.classList.toggle('open', open);
        navToggle.setAttribute('aria-expanded', String(open));
        navToggle.innerHTML = open ? '<i class="fas fa-xmark"></i>' : '<i class="fas fa-bars"></i>';
    };
    navToggle.addEventListener('click', () => setMenu(!navMenu.classList.contains('open')));
    navMenu.querySelectorAll('a').forEach(a => a.addEventListener('click', () => setMenu(false)));
    document.addEventListener('keydown', e => { if (e.key === 'Escape') setMenu(false); });

    /* Theme toggle (follows system until the visitor picks one) */
    const isDark = () => root.dataset.theme
        ? root.dataset.theme === 'dark'
        : window.matchMedia('(prefers-color-scheme: dark)').matches;
    const syncIcon = () => { themeToggle.innerHTML = isDark() ? '<i class="fas fa-sun"></i>' : '<i class="fas fa-moon"></i>'; };
    themeToggle.addEventListener('click', () => {
        const next = isDark() ? 'light' : 'dark';
        root.dataset.theme = next;
        try { localStorage.setItem('theme', next); } catch (e) {}
        syncIcon();
    });
    syncIcon();

    /* Header border on scroll */
    const toTop = document.getElementById('backToTop');
    toTop.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
    const onScroll = () => {
        header.classList.toggle('scrolled', window.scrollY > 10);
        toTop.classList.toggle('show', window.scrollY > 500);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });

    /* Active nav link */
    const links = [...navMenu.querySelectorAll('.nav-link')];
    const sections = links.map(l => document.querySelector(l.getAttribute('href'))).filter(Boolean);
    if ('IntersectionObserver' in window) {
        const spy = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (!entry.isIntersecting) return;
                links.forEach(l => l.classList.toggle('active', l.getAttribute('href') === '#' + entry.target.id));
            });
        }, { rootMargin: '-45% 0px -50% 0px' });
        sections.forEach(s => spy.observe(s));

        /* Reveal on scroll */
        const reveal = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) { entry.target.classList.add('in'); reveal.unobserve(entry.target); }
            });
        }, { threshold: 0.12 });
        document.querySelectorAll('.reveal').forEach(el => reveal.observe(el));
    } else {
        document.querySelectorAll('.reveal').forEach(el => el.classList.add('in'));
    }

    document.getElementById('year').textContent = new Date().getFullYear();
});

document.addEventListener('DOMContentLoaded', () => {
    // Current Year for Footer
    document.getElementById('year').textContent = new Date().getFullYear();

    // Mobile Menu Toggle
    const menuBtn = document.getElementById('menu-btn');
    const mobileNav = document.getElementById('mobile-nav');
    const iconOpen = document.getElementById('menu-icon-open');
    const iconClose = document.getElementById('menu-icon-close');
    const mobileLinks = document.querySelectorAll('.mobile-link');

    function toggleMenu() {
        const isOpen = mobileNav.classList.contains('open');
        if (isOpen) {
            mobileNav.classList.remove('open');
            iconOpen.style.display = 'block';
            iconClose.style.display = 'none';
        } else {
            mobileNav.classList.add('open');
            iconOpen.style.display = 'none';
            iconClose.style.display = 'block';
        }
    }

    menuBtn.addEventListener('click', toggleMenu);

    mobileLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (mobileNav.classList.contains('open')) toggleMenu();
        });
    });

    // Header Scroll Effect
    const header = document.getElementById('header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 20) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // Form Submission (Prevent Default)
    const form = document.getElementById('contactForm');
    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            // Handle form logic here if needed
            alert('Mensagem enviada com sucesso! (Demonstração)');
        });
    }

    // Scroll Animation Observer
    const observerOptions = {
        root: null,
        rootMargin: '0px 0px -100px 0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('appear');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    const animatedElements = document.querySelectorAll('.fade-in, .fade-in-up, .fade-in-left, .fade-in-right');
    animatedElements.forEach(el => observer.observe(el));
});

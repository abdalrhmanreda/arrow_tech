// ================================
// 🎬 INITIALIZATION
// ================================
window.addEventListener('load', () => {
    setTimeout(() => {
        document.getElementById('loadingScreen').classList.add('hidden');
    }, 600);
});

// ================================
// 🖱️ CUSTOM CURSOR
// ================================
if (window.matchMedia('(pointer: fine)').matches) {
    const cursor = document.querySelector('.custom-cursor');
    const trail = document.querySelector('.custom-cursor-trail');

    let mouseX = 0, mouseY = 0;
    let cursorX = 0, cursorY = 0;
    let trailX = 0, trailY = 0;

    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
        cursor.classList.add('active');
        trail.classList.add('active');
    });

    function animateCursor() {
        cursorX += (mouseX - cursorX) * 0.3;
        cursorY += (mouseY - cursorY) * 0.3;
        cursor.style.transform = `translate(${cursorX - 8}px, ${cursorY - 8}px)`;

        trailX += (mouseX - trailX) * 0.15;
        trailY += (mouseY - trailY) * 0.15;
        trail.style.transform = `translate(${trailX - 4}px, ${trailY - 4}px)`;

        requestAnimationFrame(animateCursor);
    }
    animateCursor();

    const hoverElements = document.querySelectorAll('a, button, .course-card, .age-card');
    hoverElements.forEach(el => {
        el.addEventListener('mouseenter', () => cursor.classList.add('hover'));
        el.addEventListener('mouseleave', () => cursor.classList.remove('hover'));
    });
}

// ================================
// 📱 MOBILE MENU
// ================================
const mobileToggle = document.getElementById('mobileToggle');
const navMenu = document.getElementById('navMenu');

mobileToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    mobileToggle.classList.toggle('active');
});

document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        mobileToggle.classList.remove('active');
    });
});

// ================================
// 🎯 NAVBAR SCROLL
// ================================
const navbar = document.getElementById('navbar');

window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// ================================
// 🔗 ACTIVE NAV LINK
// ================================
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-link');

window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        if (pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// ================================
// 🎨 REVEAL ON SCROLL
// ================================
const revealElements = document.querySelectorAll('.reveal');
const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
            setTimeout(() => {
                entry.target.classList.add('active');
            }, index * 50);
        }
    });
}, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
});

revealElements.forEach(element => {
    revealObserver.observe(element);
});

// ================================
// ❓ FAQ ACCORDION
// ================================
const faqItems = document.querySelectorAll('.faq-item');

faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');

    question.addEventListener('click', () => {
        const isActive = item.classList.contains('active');

        // Close all items
        faqItems.forEach(faq => faq.classList.remove('active'));

        // Open clicked item if it wasn't active
        if (!isActive) {
            item.classList.add('active');
        }
    });
});

// ================================
// 🎨 SMOOTH SCROLL
// ================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const offsetTop = target.offsetTop - 80;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// ================================
// 🔍 CONSOLE BRANDING
// ================================
console.log(
    '%c🚀 Arrow Academy',
    'font-size: 32px; font-weight: bold; background: linear-gradient(135deg, #3B82F6, #8B5CF6, #EC4899); -webkit-background-clip: text; -webkit-text-fill-color: transparent;'
);
console.log(
    '%cLearn Coding & AI the Fun Way!',
    'font-size: 16px; color: #64748B;'
);
console.log(
    '%cInterested in teaching with us? Visit /careers',
    'font-size: 12px; color: #94A3B8;'
);

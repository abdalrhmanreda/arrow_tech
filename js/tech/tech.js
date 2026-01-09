// ================================
// 🎬 INITIALIZATION
// ================================
window.addEventListener('load', () => {
    setTimeout(() => {
        document.getElementById('loadingScreen').classList.add('hidden');
    }, 500);
});

// ================================
// 🌓 THEME TOGGLE
// ================================
const themeToggle = document.getElementById('themeToggle');
const themeIcon = document.getElementById('themeIcon');
const html = document.documentElement;

const savedTheme = localStorage.getItem('arrow-tech-theme') || 'light';
html.setAttribute('data-theme', savedTheme);
updateThemeIcon(savedTheme);

themeToggle.addEventListener('click', () => {
    const currentTheme = html.getAttribute('data-theme');
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    html.setAttribute('data-theme', newTheme);
    localStorage.setItem('arrow-tech-theme', newTheme);
    updateThemeIcon(newTheme);
});

function updateThemeIcon(theme) {
    themeIcon.textContent = theme === 'light' ? '🌙' : '☀️';
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
// 📊 COUNTER ANIMATION
// ================================
let countersAnimated = false;

function animateCounter(element) {
    const target = parseInt(element.getAttribute('data-count'));
    const duration = 2000;
    const increment = target / (duration / 16);
    let current = 0;

    const updateCounter = () => {
        current += increment;
        if (current < target) {
            element.textContent = Math.floor(current) + (element.textContent.includes('%') ? '%' : '+');
            requestAnimationFrame(updateCounter);
        } else {
            element.textContent = target + (element.textContent.includes('%') ? '%' : '+');
        }
    };
    updateCounter();
}

// ================================
// 🎨 REVEAL ON SCROLL
// ================================
// ================================
// 🎨 REVEAL ON SCROLL
// ================================
// Initialize after content is rendered
window.addEventListener('tech-content-rendered', () => {
    const revealElements = document.querySelectorAll('.reveal');
    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.classList.add('active');

                    // Animate counters when stats section is visible
                    // Check if it's a number and hasn't been animated yet
                    // Note: This logic might need refinement if elements are re-rendered
                    if (entry.target.classList.contains('stat-item')) {
                        const counter = entry.target.querySelector('.stat-number');
                        // Only animate if not already animated/viewed
                        if (counter && !counter.dataset.animated) {
                            animateCounter(counter);
                            counter.dataset.animated = "true";
                        }
                    }
                }, index * 100);
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });

    revealElements.forEach(element => {
        revealObserver.observe(element);
    });
});


// ================================
// 📧 FORM SUBMISSION
// ================================
const contactForm = document.getElementById('contactForm');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();

    // Show success message
    alert('Thank you for your message! We will get back to you within 24 hours.');

    // Reset form
    contactForm.reset();
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
// 🎯 PARALLAX EFFECT
// ================================
const heroShapes = document.querySelectorAll('.hero-shape');

window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    heroShapes.forEach((shape, index) => {
        const speed = (index + 1) * 0.1;
        shape.style.transform = `translateY(${scrolled * speed}px)`;
    });
});

// ================================
// 🔍 CONSOLE BRANDING
// ================================
console.log(
    '%c🚀 Arrow Tech',
    'font-size: 40px; font-weight: bold; background: linear-gradient(135deg, #0071E3, #06B6D4); -webkit-background-clip: text; -webkit-text-fill-color: transparent;'
);
console.log(
    '%cBuilding the Future of Digital Innovation',
    'font-size: 16px; color: #6B7280;'
);
console.log(
    '%cInterested in joining our team? Visit /careers',
    'font-size: 12px; color: #9CA3AF;'
);

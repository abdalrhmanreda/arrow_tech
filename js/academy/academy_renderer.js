// ================================
// 🎨 BILINGUAL CONTENT RENDERER
// ================================
// Dynamically renders all website content with i18n support

function renderWebsite() {
    const data = t(); // Get current language translations

    renderNavigation();
    renderHeroSection();
    renderAgeGroups();
    renderLearningPath();
    renderAIEducation();
    renderCourses();
    renderParentTrust();
    renderTestimonials();
    renderFAQ();

    renderCTA();
    renderFooter();
}

// Navigation with Language Switcher
function renderNavigation() {
    const nav = t().nav;

    // Update nav links
    const navLinks = document.querySelectorAll('.nav-link');
    if (navLinks.length >= 6) {
        navLinks[0].textContent = nav.home;
        navLinks[1].textContent = nav.ageGroups;
        navLinks[2].textContent = nav.courses;
        navLinks[3].textContent = nav.aiLearning;
        navLinks[4].textContent = nav.reviews;
        navLinks[5].textContent = nav.faq;
    }

    // Update start learning button
    const startBtn = document.querySelector('.nav-actions .btn-primary');
    if (startBtn) startBtn.textContent = nav.startLearning;
}

// Hero Section
function renderHeroSection() {
    const hero = t().hero;

    document.querySelector('.hero-badge').textContent = hero.badge;

    const heroTitle = document.querySelector('.hero-title');
    heroTitle.innerHTML = `
        ${hero.title.text}<span class="hero-gradient-text">${hero.title.highlight1}</span>${hero.title.middle}<span class="hero-gradient-text">${hero.title.highlight2}</span>
        ${hero.title.end}
    `;

    document.querySelector('.hero-description').textContent = hero.description;

    // Render stats
    const statsContainer = document.querySelector('.hero-stats');
    statsContainer.innerHTML = hero.stats.map(stat => `
        <div class="hero-stat">
            <div class="hero-stat-number">${stat.number}</div>
            <div class="hero-stat-label">${stat.label}</div>
        </div>
    `).join('');

    // Render buttons
    const actionsContainer = document.querySelector('.hero-actions');
    actionsContainer.innerHTML = hero.buttons.map(btn => `
        <a href="${btn.href}" class="btn btn-${btn.type}">${btn.text}</a>
    `).join('');
}

// Age Groups
function renderAgeGroups() {
    const data = t();
    const section = data.sections.ageGroups;

    // Update section header
    document.querySelector('#age-groups .section-badge').textContent = section.badge;
    document.querySelector('#age-groups .section-title').textContent = section.title;
    document.querySelector('#age-groups .section-description').textContent = section.description;

    // Render cards
    const container = document.querySelector('.age-grid');
    container.innerHTML = data.ageGroups.map(group => `
        <div class="age-card reveal">
            <span class="age-emoji">${group.emoji}</span>
            <div class="age-range">${group.range}</div>
            <div class="age-label">${group.label}</div>
            <p class="age-description">${group.description}</p>
            <ul class="age-skills">
                ${group.skills.map(skill => `<li>${skill}</li>`).join('')}
            </ul>
            <a href="#courses" class="btn btn-primary" style="width: 100%;">${group.buttonText}</a>
        </div>
    `).join('');
}

// Learning Path
function renderLearningPath() {
    const data = t();
    const section = data.sections.learningPath;

    // Update section header
    const headers = document.querySelectorAll('.learning-path .section-header');
    if (headers.length > 0) {
        headers[0].querySelector('.section-badge').textContent = section.badge;
        headers[0].querySelector('.section-title').textContent = section.title;
        headers[0].querySelector('.section-description').textContent = section.description;
    }

    const container = document.querySelector('.path-container');
    let html = '<div class="path-line"></div>';

    data.learningPath.forEach((item, index) => {
        const isEven = index % 2 === 0;
        html += `
            <div class="path-item reveal">
                ${isEven ? '<div class="path-content">' : '<div></div>'}
                ${!isEven ? '<div class="path-content">' : ''}
                    <div class="path-number">${item.number}</div>
                    <h3 class="path-title">${item.title}</h3>
                    <p class="path-description">${item.description}</p>
                    <ul class="path-features">
                        ${item.features.map(feature => `<li>${feature}</li>`).join('')}
                    </ul>
                ${isEven ? '</div><div class="path-dot"></div><div></div>' : '</div><div class="path-dot"></div>'}
            </div>
        `;
    });

    container.innerHTML = html;
}

// AI Education
function renderAIEducation() {
    const data = t();
    const section = data.sections.aiEducation;

    // Update section header
    const header = document.querySelector('#ai-education .ai-header');
    if (header) {
        header.querySelector('.section-badge').textContent = section.badge;
        header.querySelector('.section-title').textContent = section.title;
        header.querySelector('.section-description').textContent = section.description;
    }

    const container = document.querySelector('.ai-grid');
    container.innerHTML = data.aiEducation.map(card => `
        <div class="ai-card reveal">
            <span class="ai-icon">${card.icon}</span>
            <h3 class="ai-card-title">${card.title}</h3>
            <p class="ai-card-description">${card.description}</p>
        </div>
    `).join('');
}

// Courses
function renderCourses() {
    const data = t();
    const section = data.sections.courses;

    // Update section header
    const headers = document.querySelectorAll('.courses .section-header');
    if (headers.length > 0) {
        headers[0].querySelector('.section-badge').textContent = section.badge;
        headers[0].querySelector('.section-title').textContent = section.title;
        headers[0].querySelector('.section-description').textContent = section.description;
    }

    const container = document.querySelector('.courses-grid');
    container.innerHTML = data.courses.map(course => `
        <div class="course-card reveal">
            <div class="course-header">${course.icon}</div>
            <div class="course-body">
                <div class="course-meta">
                    <span class="course-badge age">${course.ageRange}</span>
                    <span class="course-badge level">${course.level}</span>
                </div>
                <h3 class="course-title">${course.title}</h3>
                <p class="course-description">${course.description}</p>
                <div class="course-footer">
                    <span class="course-duration">${course.duration}</span>
                    <a href="#" class="course-link">${course.enrollText}</a>
                </div>
            </div>
        </div>
    `).join('');
}

// Parent Trust
function renderParentTrust() {
    const data = t();
    const section = data.sections.parentTrust;

    // Update section header
    const headers = document.querySelectorAll('.parent-trust .section-header');
    if (headers.length > 0) {
        headers[0].querySelector('.section-badge').textContent = section.badge;
        headers[0].querySelector('.section-title').textContent = section.title;
        headers[0].querySelector('.section-description').textContent = section.description;
    }

    const container = document.querySelector('.trust-grid');
    container.innerHTML = data.parentTrust.map(item => `
        <div class="trust-card reveal">
            <div class="trust-icon">${item.icon}</div>
            <div class="trust-content">
                <h3>${item.title}</h3>
                <p>${item.description}</p>
            </div>
        </div>
    `).join('');
}

// Testimonials
function renderTestimonials() {
    const data = t();
    const section = data.sections.testimonials;

    // Update section header
    const headers = document.querySelectorAll('.testimonials .section-header');
    if (headers.length > 0) {
        headers[0].querySelector('.section-badge').textContent = section.badge;
        headers[0].querySelector('.section-title').textContent = section.title;
        headers[0].querySelector('.section-description').textContent = section.description;
    }

    const container = document.querySelector('.testimonials-grid');
    container.innerHTML = data.testimonials.map(testimonial => `
        <div class="testimonial-card reveal">
            <div class="testimonial-stars">${'⭐'.repeat(testimonial.stars)}</div>
            <p class="testimonial-text">${testimonial.text}</p>
            <div class="testimonial-author">
                <div class="testimonial-avatar">${testimonial.avatar}</div>
                <div class="testimonial-info">
                    <h4>${testimonial.name}</h4>
                    <p>${testimonial.role}</p>
                </div>
            </div>
        </div>
    `).join('');
}

// FAQ
function renderFAQ() {
    const data = t();
    const section = data.sections.faq;

    // Update section header
    const headers = document.querySelectorAll('.faq .section-header');
    if (headers.length > 0) {
        headers[0].querySelector('.section-badge').textContent = section.badge;
        headers[0].querySelector('.section-title').textContent = section.title;
        headers[0].querySelector('.section-description').textContent = section.description;
    }

    const container = document.querySelector('.faq-container');
    container.innerHTML = data.faq.map(item => `
        <div class="faq-item reveal">
            <div class="faq-question">${item.question}</div>
            <div class="faq-answer">
                <p>${item.answer}</p>
            </div>
        </div>
    `).join('');
}

// CTA Section
function renderCTA() {
    const cta = t().cta;

    document.querySelector('.cta-title').textContent = cta.title;
    document.querySelector('.cta-description').textContent = cta.description;

    const actionsContainer = document.querySelector('.cta-actions');
    actionsContainer.innerHTML = cta.buttons.map(btn => `
        <a href="${btn.href}" class="btn btn-${btn.type}">${btn.text}</a>
    `).join('');
}

// Footer
function renderFooter() {
    const footer = t().footer;

    // About section
    const aboutSection = document.querySelector('.footer-about');
    if (aboutSection) {
        aboutSection.querySelector('h3').textContent = footer.about.title;
        aboutSection.querySelector('p').textContent = footer.about.description;
    }

    // Footer sections
    const footerSections = document.querySelectorAll('.footer-section');
    footer.sections.forEach((section, index) => {
        if (footerSections[index]) {
            footerSections[index].querySelector('h4').textContent = section.title;
            const linksList = footerSections[index].querySelector('.footer-links');
            linksList.innerHTML = section.links.map(link => `
                <li><a href="${link.href}">${link.text}</a></li>
            `).join('');
        }
    });

    // Copyright
    const copyrightEl = document.querySelector('.footer-bottom p');
    if (copyrightEl) copyrightEl.innerHTML = footer.copyright;
}

// Initialize observers for animations
function initializeObservers() {
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
        element.classList.remove('active');
        revealObserver.observe(element);
    });

    // Reinitialize FAQ
    const faqItems = document.querySelectorAll('.faq-item');
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        question.onclick = () => {
            const isActive = item.classList.contains('active');
            faqItems.forEach(faq => faq.classList.remove('active'));
            if (!isActive) item.classList.add('active');
        };
    });
}

// Add language switcher to nav
function addLanguageSwitcher() {
    const navActions = document.querySelector('.nav-actions');
    if (!document.querySelector('.lang-switcher')) {
        const switcher = document.createElement('div');
        switcher.className = 'lang-switcher';
        switcher.innerHTML = `
            <button class="lang-btn ${currentLang === 'en' ? 'active' : ''}" onclick="switchLanguage('en')">EN</button>
            <button class="lang-btn ${currentLang === 'ar' ? 'active' : ''}" onclick="switchLanguage('ar')">ع</button>
        `;
        navActions.insertBefore(switcher, navActions.firstChild);
    }
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    // Set initial language
    document.documentElement.lang = currentLang;
    document.documentElement.dir = currentLang === 'ar' ? 'rtl' : 'ltr';
    document.body.classList.toggle('rtl', currentLang === 'ar');

    addLanguageSwitcher();
    renderWebsite();
    initializeObservers();
});

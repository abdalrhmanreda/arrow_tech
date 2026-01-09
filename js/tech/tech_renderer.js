// ================================
// 🎨 TECH CONTENT RENDERER
// ================================
// Dynamically renders all tech website content

function renderTechWebsite() {
    renderHeroSection();
    renderStatsSection();
    renderAboutSection();
    renderServicesSection();
    renderProcessSection();
    renderTechnologiesSection();
    // renderPortfolioSection();
    renderCTASection();
    renderClientsSection();
    renderContactSection();
    renderFooter();
}

// Hero Section
function renderHeroSection() {
    const hero = techData.hero;
    const section = document.querySelector('.hero');
    if (!section) return;

    section.innerHTML = `
        <div class="hero-bg">
            <div class="hero-shape hero-shape-1"></div>
            <div class="hero-shape hero-shape-2"></div>
            <div class="hero-shape hero-shape-3"></div>
        </div>

        <div class="hero-container">
            <div class="hero-content">
                <div class="hero-badge">
      
                   ${hero.badge}
                </div>
                <h1 class="hero-title">
                    ${hero.title.text}<span class="hero-gradient-text">${hero.title.highlight}</span>${hero.title.end}
                </h1>
                <p class="hero-description">
                    ${hero.description}
                </p>
                <div class="hero-actions">
                    ${hero.buttons.map(btn => `<a href="${btn.href}" class="btn btn-${btn.type}">${btn.text}</a>`).join('')}
                </div>
            </div>

            <div class="hero-visual">
                <div class="hero-3d">
                    ${hero.floatingCards.map(card => `
                        <div class="floating-card ${card.class}">
                            <div class="card-icon">${card.icon}</div>
                            <div class="card-title">${card.title}</div>
                            <div class="card-text">${card.text}</div>
                        </div>
                    `).join('')}
                </div>
            </div>
        </div>
    `;
}

// Stats Section
function renderStatsSection() {
    const stats = techData.stats;
    const section = document.querySelector('.stats');
    if (!section) return;

    section.innerHTML = `
        <div class="stats-container">
            ${stats.map(stat => `
                <div class="stat-item reveal">
                    <span class="stat-number" data-count="${stat.count}">${stat.number}</span>
                    <span class="stat-label">${stat.label}</span>
                </div>
            `).join('')}
        </div>
    `;
}

// About Section
function renderAboutSection() {
    const about = techData.about;
    const section = document.querySelector('.about');
    if (!section) return;

    section.innerHTML = `
        <div class="about-container">
            <div class="about-content reveal">
                <div class="section-badge">${about.badge}</div>
                <h2 class="section-title">${about.title}</h2>
                <p class="section-description">
                    ${about.description}
                </p>
                <div class="about-mission">
                    <p>${about.mission}</p>
                </div>
            </div>
            
            <div class="about-values reveal">
                ${about.values.map(value => `
                    <div class="value-card">
                        <div class="value-icon">${value.icon}</div>
                        <div class="value-info">
                            <h3>${value.title}</h3>
                            <p>${value.text}</p>
                        </div>
                    </div>
                `).join('')}
            </div>
        </div>
    `;
}

// Services Section
function renderServicesSection() {
    const services = techData.services;
    const section = document.querySelector('.services');
    if (!section) return;

    section.innerHTML = `
        <div class="section-header reveal">
            <div class="section-badge">${services.header.badge}</div>
            <h2 class="section-title">${services.header.title}</h2>
            <p class="section-description">
                ${services.header.description}
            </p>
        </div>

        <div class="services-grid">
            ${services.items.map(service => `
                <div class="service-card reveal" style="--service-gradient: ${service.gradient}">
                    <div class="service-icon">${service.icon}</div>
                    <h3 class="service-title">${service.title}</h3>
                    <p class="service-description">
                        ${service.description}
                    </p>
                    <ul class="service-features">
                        ${service.features.map(feature => `<li>${feature}</li>`).join('')}
                    </ul>
                    <a href="#" class="service-link">Learn More</a>
                </div>
            `).join('')}
        </div>
    `;
}

// Process Section
function renderProcessSection() {
    const process = techData.process;
    const section = document.querySelector('.process');
    if (!section) return;

    section.innerHTML = `
        <div class="section-header reveal">
            <h2 class="section-title">${process.title}</h2>
        </div>

        <div class="process-steps">
            ${process.steps.map((step, index) => `
                <div class="process-step reveal" style="animation-delay: ${index * 0.2}s">
                    <div class="step-header">
                        <span class="step-number">${step.step}</span>
                        <div class="step-icon">${step.icon}</div>
                    </div>
                    <h3 class="step-title">${step.title}</h3>
                    <p class="step-description">${step.description}</p>
                </div>
            `).join('')}
        </div>
    `;
}

// Technologies Section
function renderTechnologiesSection() {
    const tech = techData.technologies;
    const section = document.querySelector('.technologies');
    if (!section) return;

    section.innerHTML = `
        <div class="section-header reveal">
            <div class="section-badge">${tech.header.badge}</div>
            <h2 class="section-title">${tech.header.title}</h2>
            <p class="section-description">
                ${tech.header.description}
            </p>
        </div>

        <div class="tech-grid">
            ${tech.items.map(item => `
                <div class="tech-item reveal">
                    <div class="tech-logo">${item.icon}</div>
                    <div class="tech-name">${item.name}</div>
                </div>
            `).join('')}
        </div>
    `;
}

// Portfolio Section
function renderPortfolioSection() {
    const portfolio = techData.portfolio;
    const section = document.querySelector('.portfolio');
    if (!section) return;

    section.innerHTML = `
        <div class="section-header reveal">
            <div class="section-badge">${portfolio.header.badge}</div>
            <h2 class="section-title">${portfolio.header.title}</h2>
            <p class="section-description">
                ${portfolio.header.description}
            </p>
        </div>

        <div class="portfolio-grid">
            ${portfolio.items.map(item => `
                <div class="portfolio-item reveal">
                    <div class="portfolio-image" style="${item.bgStyle}">
                        ${item.icon}
                    </div>
                    <div class="portfolio-overlay">
                        <div class="portfolio-category">${item.category}</div>
                        <h3 class="portfolio-title">${item.title}</h3>
                        <p class="portfolio-description">${item.description}</p>
                    </div>
                </div>
            `).join('')}
        </div>
    `;
}

// CTA Section
function renderCTASection() {
    const cta = techData.cta;
    const section = document.querySelector('.cta');
    if (!section) return;

    section.innerHTML = `
        <div class="cta-container reveal">
            <h2 class="cta-title">${cta.title}</h2>
            <p class="cta-description">
                ${cta.description}
            </p>
            <div class="cta-actions">
                ${cta.buttons.map(btn => `<a href="${btn.href}" class="btn btn-${btn.type}">${btn.text}</a>`).join('')}
            </div>
        </div>
    `;
}

// Clients Section
function renderClientsSection() {
    const clients = techData.clients;
    const section = document.querySelector('.clients');
    if (!section) return;

    section.innerHTML = `
        <div class="clients-container reveal">
            <h2 class="clients-title">${clients.title}</h2>
            <div class="clients-grid">
                ${clients.categories.map(category => `
                    <div class="client-category">
                        <div class="category-icon">${category.icon}</div>
                        <div class="category-title">${category.title}</div>
                    </div>
                `).join('')}
            </div>
        </div>
    `;
}

// Contact Section
function renderContactSection() {
    const contact = techData.contact;
    const section = document.querySelector('.contact');
    if (!section) return;

    section.innerHTML = `
        <div class="contact-container">
            <div class="contact-info reveal">
                <h3>${contact.title}</h3>
                <p>
                    ${contact.description}
                </p>
                <ul class="contact-details">
                    ${contact.details.map(detail => `
                        <li>
                            <div class="contact-icon">${detail.icon}</div>
                            <div>
                                <strong>${detail.label}</strong><br>
                                ${detail.value}
                            </div>
                        </li>
                    `).join('')}
                </ul>
            </div>

            <form class="contact-form reveal" id="contactForm">
                ${contact.form.fields.map(field => `
                    <div class="form-group">
                        <label for="${field.id}">${field.label}</label>
                        ${field.type === 'textarea'
            ? `<textarea id="${field.id}" class="form-control" placeholder="${field.placeholder}" ${field.required ? 'required' : ''}></textarea>`
            : field.type === 'select'
                ? `<select id="${field.id}" class="form-control" ${field.required ? 'required' : ''}>
                                    <option value="" disabled selected>${field.placeholder}</option>
                                    ${field.options.map(opt => `<option value="${opt}">${opt}</option>`).join('')}
                                   </select>`
                : `<input type="${field.type}" id="${field.id}" class="form-control" placeholder="${field.placeholder}" ${field.required ? 'required' : ''}>`
        }
                    </div>
                `).join('')}
                <button type="submit" class="btn btn-primary form-submit">${contact.form.submitText}</button>
            </form>
        </div>
    `;
}

// Footer
function renderFooter() {
    const footer = techData.footer;
    const footerEl = document.querySelector('.footer');
    if (!footerEl) return;

    footerEl.innerHTML = `
        <div class="footer-container">
            <div class="footer-grid">
                <div class="footer-about">
                    <h3>${footer.about.title}</h3>
                    <p>
                        ${footer.about.description}
                    </p>
                    <div class="social-links">
                        ${footer.about.social.map(social => `
                            <a href="${social.href}" class="social-link" aria-label="${social.label}">${social.icon}</a>
                        `).join('')}
                    </div>
                </div>

                ${footer.links.map(section => `
                    <div class="footer-section">
                        <h4>${section.title}</h4>
                        <ul class="footer-links">
                            ${section.items.map(item => `<li><a href="${item.href}">${item.text}</a></li>`).join('')}
                        </ul>
                    </div>
                `).join('')}
            </div>

            <div class="footer-bottom">
                <p>${footer.copyright}</p>
            </div>
        </div>
    `;
}

// Initialize rendering when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    // Only render if we haven't already rendered (or check if elements are empty)
    // For now, simplest is to just call render
    renderTechWebsite();

    // Dispatch a custom event to signal that rendering is complete
    // This allows other scripts (like tech.js) to know when to initialize animations
    window.dispatchEvent(new Event('tech-content-rendered'));
});

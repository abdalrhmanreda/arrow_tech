// ================================
// 🖥️ DASHBOARD RENDERER
// ================================

function renderDashboard() {
    renderSidebar();
    renderStats(); // Will toggle based on active tab
    renderTechProjects();
    renderAcademyCourses();
    renderMessages();
    renderConsultations();
    setupTabListeners();
}

let activeTab = 'tech'; // 'tech' or 'academy'

function renderSidebar() {
    const data = dashboardData.sidebar;
    const sidebar = document.querySelector('.sidebar');
    if (!sidebar) return;

    sidebar.innerHTML = `
        <a href="#" class="logo">
            <img src="${data.logo.icon}" alt="Logo">
            <span>${data.logo.text} <span style="color: var(--accent-blue)">${data.logo.highlight}</span></span>
        </a>

        <div class="nav-menu">
            ${data.menu.map((item, index) => `
                <a href="#" class="nav-item ${item.active ? 'active' : ''}" data-index="${index}" data-section="${item.section || ''}">
                    ${getIcon(item.icon)}
                    ${item.text}
                    ${item.badge ? `<span class="nav-badge">${item.badge}</span>` : ''}
                </a>
            `).join('')}
        </div>

        <div class="user-profile">
            <img src="${data.user.avatar}" class="user-avatar" alt="User">
            <div class="user-info">
                <h4>${data.user.name}</h4>
                <p>${data.user.role}</p>
            </div>
        </div>
    `;

    // Add click listeners for nav items
    setupSidebarListeners();
}

function setupSidebarListeners() {
    const navItems = document.querySelectorAll('.nav-item');
    navItems.forEach(item => {
        item.addEventListener('click', (e) => {
            e.preventDefault();

            // Remove active from all
            navItems.forEach(nav => nav.classList.remove('active'));

            // Add active to clicked
            item.classList.add('active');

            // Check section and switch content
            const section = item.dataset.section;

            // Get content panels
            const techContent = document.getElementById('tech-content');
            const academyContent = document.getElementById('academy-content');

            if (section === 'tech' || section === 'overview' || section === 'messages' || section === 'schedule' || section === 'analytics' || section === 'settings') {
                activeTab = 'tech';
                renderStats();
                if (techContent) techContent.style.display = 'block';
                if (academyContent) academyContent.style.display = 'none';
            } else if (section === 'academy' || section === 'students') {
                activeTab = 'academy';
                renderStats();
                if (techContent) techContent.style.display = 'none';
                if (academyContent) academyContent.style.display = 'block';
            }
        });
    });
}

// Helper to return SVG icons directly
function getIcon(name) {
    const icons = {
        'grid': `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="7" height="7"></rect><rect x="14" y="3" width="7" height="7"></rect><rect x="14" y="14" width="7" height="7"></rect><rect x="3" y="14" width="7" height="7"></rect></svg>`,
        'briefcase': `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path></svg>`,
        'book-open': `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path></svg>`,
        'users': `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>`,
        'message-square': `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>`,
        'calendar': `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>`,
        'bar-chart-2': `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="20" x2="18" y2="10"></line><line x1="12" y1="20" x2="12" y2="4"></line><line x1="6" y1="20" x2="6" y2="14"></line></svg>`,
        'settings': `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="3"></circle><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path></svg>`
    };
    return icons[name] || '';
}

function renderStats() {
    const stats = dashboardData.stats[activeTab]; // Use activeTab to fetch data
    const container = document.querySelector('.stats-row');
    if (!container) return;

    container.innerHTML = stats.map(stat => `
        <div class="stat-card">
            <div class="stat-icon" style="background: ${stat.gradient}">
                <i data-feather="${stat.icon}"></i>
            </div>
            <div class="stat-value">${stat.value}</div>
            <div class="stat-title">
                ${stat.title}
                <span class="stat-change trend-${stat.trend}">${stat.change}</span>
            </div>
        </div>
    `).join('');
    feather.replace();

    // Update active tab styling
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.classList.remove('active');
        if (btn.dataset.tab === activeTab) btn.classList.add('active');
    });

    // Toggle content panels
    const techContent = document.getElementById('tech-content');
    const academyContent = document.getElementById('academy-content');
    if (techContent && academyContent) {
        if (activeTab === 'tech') {
            techContent.style.display = 'block';
            academyContent.style.display = 'none';
        } else {
            techContent.style.display = 'none';
            academyContent.style.display = 'block';
        }
    }
}

function renderTechProjects() {
    const list = dashboardData.techProjects;
    const tbody = document.querySelector('#tech-projects-table tbody');
    if (!tbody) return;

    tbody.innerHTML = list.map(item => `
        <tr>
            <td>${item.name}</td>
            <td>${item.client}</td>
            <td>
                <div class="progress-bar">
                    <div class="progress-fill" style="width: ${item.progress}%"></div>
                </div>
            </td>
            <td><span class="status-badge">${item.status}</span></td>
            <td>${item.deadline}</td>
        </tr>
    `).join('');
}

function renderAcademyCourses() {
    const list = dashboardData.academyCourses;
    const tbody = document.querySelector('#academy-courses-table tbody');
    if (!tbody) return;

    tbody.innerHTML = list.map(item => `
        <tr>
            <td>${item.title}</td>
            <td>${item.students}</td>
            <td>⭐ ${item.rating}</td>
            <td>${item.revenue}</td>
        </tr>
    `).join('');
}

function setupTabListeners() {
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            activeTab = e.target.dataset.tab;
            renderStats(); // Re-render stats based on selection
        });
    });
}

function renderChart() {
    // This is a placeholder for where a charting library like Chart.js would go
    // For now, we are just mocking the visuals in HTML/CSS
}

function renderMessages() {
    const messages = dashboardData.messages;
    const container = document.querySelector('.messages-list');
    if (!container) return;

    container.innerHTML = messages.map(msg => `
        <div class="message-item">
            <img src="${msg.avatar}" class="msg-avatar">
            <div class="msg-info">
                <div class="msg-sender">${msg.sender}</div>
                <div class="msg-subject">${msg.subject}</div>
            </div>
            <div class="msg-meta">
                <span class="msg-status status-${msg.status.split(' ')[0]}">${msg.status}</span>
            </div>
        </div>
    `).join('');
}

function renderConsultations() {
    const consultations = dashboardData.consultations;
    const tbody = document.querySelector('.consultations-table tbody');
    if (!tbody) return;

    tbody.innerHTML = consultations.map(item => `
        <tr>
            <td>
                <div style="font-weight: 600">${item.date}</div>
                <div style="color: var(--text-secondary); font-size: 12px">${item.time}</div>
            </td>
            <td>${item.client}</td>
            <td>${item.topic}</td>
            <td>
                <button class="action-btn">
                    <i data-feather="video" style="width: 14px; height: 14px;"></i>
                    Join ${item.platform}
                </button>
            </td>
        </tr>
    `).join('');
    feather.replace();
}

// Initialize Dashboard
document.addEventListener('DOMContentLoaded', () => {
    initTheme();
    renderDashboard();
    setupThemeToggle();
});

function initTheme() {
    const savedTheme = localStorage.getItem('dashboardTheme') || 'dark';
    document.documentElement.setAttribute('data-theme', savedTheme);
    updateThemeIcon(savedTheme);
}

function setupThemeToggle() {
    const themeBtn = document.querySelector('.icon-btn:nth-child(2)'); // The moon icon
    if (themeBtn) {
        themeBtn.addEventListener('click', () => {
            const currentTheme = document.documentElement.getAttribute('data-theme');
            const newTheme = currentTheme === 'light' ? 'dark' : 'light';

            document.documentElement.setAttribute('data-theme', newTheme);
            localStorage.setItem('dashboardTheme', newTheme);
            updateThemeIcon(newTheme);
        });
    }
}

function updateThemeIcon(theme) {
    const themeIcon = document.querySelector('.icon-btn:nth-child(2) i');
    if (themeIcon) {
        if (theme === 'light') {
            themeIcon.setAttribute('data-feather', 'sun');
        } else {
            themeIcon.setAttribute('data-feather', 'moon');
        }
        feather.replace();
    }
}

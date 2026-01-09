// ================================
// 📊 TECH WEBSITE DATA
// ================================

const techData = {
    // Hero Section
    hero: {
        badge: "Enterprise Technology Solutions",
        title: {
            text: "Building the ",
            highlight: "Future",
            end: " of Digital Innovation"
        },
        description: "We craft cutting-edge software solutions that transform businesses and drive digital excellence. From AI-powered applications to cloud-native architectures.",
        buttons: [
            { text: "Get a Free Consultation", href: "#contact", type: "primary" },
            { text: "View Our Work", href: "#portfolio", type: "secondary" }
        ],
        floatingCards: [
            {
                icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-code"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>`,
                title: "Custom Development",
                text: "Tailored solutions built with the latest technologies",
                class: "floating-card-1"
            },
            {
                icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-cpu"><rect x="4" y="4" width="16" height="16" rx="2" ry="2"></rect><rect x="9" y="9" width="6" height="6"></rect><line x1="9" y1="1" x2="9" y2="4"></line><line x1="15" y1="1" x2="15" y2="4"></line><line x1="9" y1="20" x2="9" y2="23"></line><line x1="15" y1="20" x2="15" y2="23"></line><line x1="20" y1="9" x2="23" y2="9"></line><line x1="20" y1="14" x2="23" y2="14"></line><line x1="1" y1="9" x2="4" y2="9"></line><line x1="1" y1="14" x2="4" y2="14"></line></svg>`,
                title: "Rapid Deployment",
                text: "Fast, efficient delivery without compromising quality",
                class: "floating-card-2"
            },
            {
                icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-trending-up"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline><polyline points="17 6 23 6 23 12"></polyline></svg>`,
                title: "Results Driven",
                text: "Measurable outcomes that exceed expectations",
                class: "floating-card-3"
            }
        ]
    },

    // Stats Section
    stats: [
        { number: "50+", label: "Projects Delivered", count: 50 },
        { number: "50+", label: "Happy Clients", count: 50 },
        { number: "20+", label: "Team Members", count: 20 },
        { number: "98%", label: "Success Rate %", count: 98 }
    ],

    // About Section
    about: {
        badge: "Who We Are",
        title: "Building Digital Excellence",
        description: "Arrow Tech is a software development company focused on building custom digital solutions for startups, companies, and entrepreneurs.",
        mission: "Our mission is to help businesses grow by creating technology that works — not just looks good.",
        values: [
            {
                icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-target"><circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="6"></circle><circle cx="12" cy="12" r="2"></circle></svg>`,
                title: "Purpose-driven",
                text: "We build with a clear goal in mind."
            },
            {
                icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-zap"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon></svg>`,
                title: "Easy to scale",
                text: "Solutions that grow with your business."
            },
            {
                icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-check-circle"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>`,
                title: "Built with precision",
                text: "Attention to detail in every line of code."
            }
        ]
    },

    // Services Section
    services: {
        header: {
            badge: "Our Services",
            title: "Enterprise Solutions",
            description: "Comprehensive technology services designed to accelerate your digital transformation journey"
        },
        items: [
            {
                icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-monitor"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line></svg>`,
                title: "Custom Software Development",
                description: "Bespoke applications designed and built to solve your unique business challenges.",
                features: ["Enterprise Applications", "API Development", "Microservices Architecture", "Legacy Modernization"],
                gradient: "var(--gradient-primary)"
            },
            {
                icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-smartphone"><rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect><line x1="12" y1="18" x2="12.01" y2="18"></line></svg>`,
                title: "Mobile App Development",
                description: "Native and cross-platform mobile applications that users love.",
                features: ["iOS & Android Development", "React Native & Flutter", "Progressive Web Apps", "App Maintenance"],
                gradient: "var(--gradient-accent)"
            },
            {
                icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-cloud"><path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"></path></svg>`,
                title: "Cloud Solutions",
                description: "Scalable cloud infrastructure and migration services for modern businesses.",
                features: ["AWS, Azure, GCP", "Cloud Migration", "DevOps & CI/CD", "Infrastructure as Code"],
                gradient: "linear-gradient(135deg, #10B981, #06B6D4)"
            },

            // ... (keeping other service items if I was editing them, but I'm inserting after the whole services object. Wait, I should insert AFTER the services object, not inside items.)

            {
                icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-cpu"><rect x="4" y="4" width="16" height="16" rx="2" ry="2"></rect><rect x="9" y="9" width="6" height="6"></rect><line x1="9" y1="1" x2="9" y2="4"></line><line x1="15" y1="1" x2="15" y2="4"></line><line x1="9" y1="20" x2="9" y2="23"></line><line x1="15" y1="20" x2="15" y2="23"></line><line x1="20" y1="9" x2="23" y2="9"></line><line x1="20" y1="14" x2="23" y2="14"></line><line x1="1" y1="9" x2="4" y2="9"></line><line x1="1" y1="14" x2="4" y2="14"></line></svg>`,
                title: "AI & Machine Learning",
                description: "Intelligent solutions powered by cutting-edge artificial intelligence.",
                features: ["Predictive Analytics", "Natural Language Processing", "Computer Vision", "ML Model Development"],
                gradient: "linear-gradient(135deg, #F59E0B, #EF4444)"
            },
            {
                icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-layout"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="3" y1="9" x2="21" y2="9"></line><line x1="9" y1="21" x2="9" y2="9"></line></svg>`,
                title: "Web Development",
                description: "Modern, responsive web applications with exceptional user experiences.",
                features: ["React, Vue, Angular", "E-commerce Platforms", "Content Management", "SEO Optimization"],
                gradient: "linear-gradient(135deg, #8B5CF6, #3B82F6)"
            },
            {
                icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-shield"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>`,
                title: "Cybersecurity",
                description: "Comprehensive security solutions to protect your digital assets.",
                features: ["Security Audits", "Penetration Testing", "Compliance & GDPR", "24/7 Monitoring"],
                gradient: "linear-gradient(135deg, #EC4899, #F59E0B)"
            }
        ]
    },

    // Process Section (Added per user request)
    process: {
        title: "How We Work",
        steps: [
            {
                step: "01",
                title: "Discover",
                description: "Understand your business, goals, and challenges",
                icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-search"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>`
            },
            {
                step: "02",
                title: "Design",
                description: "Create a clear, user-focused solution",
                icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-layout"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="3" y1="9" x2="21" y2="9"></line><line x1="9" y1="21" x2="9" y2="9"></line></svg>`
            },
            {
                step: "03",
                title: "Develop",
                description: "Build with clean code and modern architecture",
                icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-code"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>`
            },
            {
                step: "04",
                title: "Test & Launch",
                description: "Ensure quality, security, and performance",
                icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-rocket"><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"></path><path d="M12 15l-3-3a22 22 0 0 1 2-8 12 14.25 14.25 0 0 1 15.86-1.68 22 22 0 0 1-8 2 13 13 0 0 1-6.86-4.28z"></path></svg>`
            },
            {
                step: "05",
                title: "Support",
                description: "Ongoing improvements and maintenance",
                icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-headphones"><path d="M3 18v-6a9 9 0 0 1 18 0v6"></path><path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z"></path></svg>`
            }
        ]
    },

    // Technologies Section
    technologies: {
        header: {
            badge: "Tech Stack",
            title: "Technologies We Master",
            description: "We work with the most powerful and modern technologies in the industry"
        },
        items: [
            { icon: '<i class="devicon-flutter-plain colored"></i>', name: "Flutter" },
            { icon: '<i class="devicon-react-original colored"></i>', name: "React" },
            { icon: '<i class="devicon-angularjs-plain colored"></i>', name: "Angular" },
            { icon: '<i class="devicon-vuejs-plain colored"></i>', name: "Vue.js" },
            { icon: '<i class="devicon-nodejs-plain-wordmark colored"></i>', name: "Node.js" },
            { icon: '<i class="devicon-python-plain colored"></i>', name: "Python" },
            { icon: '<i class="devicon-java-plain colored"></i>', name: "Java" },
            { icon: '<i class="devicon-dotnetcore-plain colored"></i>', name: ".NET" },
            { icon: '<i class="devicon-typescript-plain colored"></i>', name: "TypeScript" },

            { icon: '<i class="devicon-firebase-plain colored"></i>', name: "Firebase" },
            // Using a generic icon for REST APIs as there isn't a specific Devicon
            { icon: '<i class="devicon-fastapi-plain colored"></i>', name: "REST APIs" },
            { icon: '<i class="devicon-laravel-original colored"></i>', name: "Laravel" },
            { icon: '<i class="devicon-postgresql-plain colored"></i>', name: "PostgreSQL" }
        ]
    },

    // Portfolio Section
    portfolio: {
        header: {
            badge: "Our Work",
            title: "Featured Projects",
            description: "Explore some of our recent success stories and transformative solutions"
        },
        items: [
            {
                icon: "🏦",
                category: "FinTech",
                title: "Digital Banking Platform",
                description: "Complete digital transformation for a leading financial institution with AI-powered insights.",
                bgStyle: "background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); display: flex; align-items: center; justify-content: center; font-size: 64px;"
            },
            {
                icon: "🛒",
                category: "E-Commerce",
                title: "Global Marketplace",
                description: "Scalable e-commerce platform serving millions of users across 50+ countries.",
                bgStyle: "background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%); display: flex; align-items: center; justify-content: center; font-size: 64px;"
            },
            {
                icon: "🏥",
                category: "HealthTech",
                title: "Telemedicine Solution",
                description: "HIPAA-compliant telehealth platform connecting patients with healthcare providers.",
                bgStyle: "background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%); display: flex; align-items: center; justify-content: center; font-size: 64px;"
            },
            {
                icon: "📊",
                category: "Analytics",
                title: "Enterprise Analytics Dashboard",
                description: "Real-time business intelligence platform with predictive analytics capabilities.",
                bgStyle: "background: linear-gradient(135deg, #43e97b 0%, #38f9d7 100%); display: flex; align-items: center; justify-content: center; font-size: 64px;"
            }
        ]
    },

    // CTA Section
    cta: {
        title: "Ready to Transform Your Business?",
        description: "Let's discuss how our expertise can help you achieve your digital goals and drive innovation.",
        buttons: [
            { text: "Schedule a Consultation", href: "#contact", type: "white" },
            { text: "View More Projects", href: "#portfolio", type: "outline" }
        ]
    },

    // Clients Section
    clients: {
        title: "Who We Work With",
        categories: [
            {
                icon: `<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-rocket"><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"></path><path d="M12 15l-3-3a22 22 0 0 1 2-8 12 14.25 14.25 0 0 1 15.86-1.68 22 22 0 0 1-8 2 13 13 0 0 1-6.86-4.28z"></path></svg>`,
                title: "Startups"
            },
            {
                icon: `<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-briefcase"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path></svg>`,
                title: "Small & Medium Businesses"
            },
            {
                icon: `<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-globe"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>`,
                title: "Enterprises"
            },
            {
                icon: `<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-users"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>`,
                title: "Entrepreneurs & Founders"
            }
        ]
    },

    // Contact Section
    contact: {
        title: "Let's Build Something Great Together",
        description: "Have a project in mind? We'd love to hear from you. Get in touch and let's start the conversation.",
        details: [
            { icon: "📧", label: "Email", value: "arrows.info.company@gmail.com" },
            { icon: "📞", label: "Phone", value: "01111400729" },
            { icon: "📍", label: "Office", value: "6 Octobar, Giza, Egypt" }
        ],
        form: {
            title: "Send Message",
            fields: [
                { id: "name", label: "Full Name", type: "text", placeholder: "John Doe", required: true },
                { id: "email", label: "Email Address", type: "email", placeholder: "john@company.com", required: true },
                { id: "phone", label: "Phone Number", type: "tel", placeholder: "+20 123 456 7890", required: false },
                {
                    id: "service",
                    label: "Service Interested In",
                    type: "select",
                    placeholder: "Select a Service",
                    options: ["Custom Software", "Mobile App", "Web Development", "AI & ML", "Cloud Solutions", "Other"],
                    required: true
                },
                { id: "message", label: "Project Details", type: "textarea", placeholder: "Tell us about your project...", required: true }
            ],
            submitText: "Send Message →"
        }
    },

    // Footer
    footer: {
        about: {
            title: "Arrow Tech",
            description: "We're a team of passionate developers, designers, and strategists committed to building exceptional digital experiences.",
            social: [
                { icon: "in", label: "LinkedIn", href: "#" },
                { icon: "𝕏", label: "Twitter", href: "#" },
                { icon: "⚙️", label: "GitHub", href: "#" },
                { icon: "🎨", label: "Dribbble", href: "#" }
            ]
        },
        links: [
            {
                title: "Services",
                items: [
                    { text: "Software Development", href: "#services" },
                    { text: "Mobile Apps", href: "#services" },
                    { text: "Cloud Solutions", href: "#services" },
                    { text: "AI & ML", href: "#services" }
                ]
            },
            {
                title: "Company",
                items: [
                    { text: "About Us", href: "#about" },
                    { text: "Portfolio", href: "#portfolio" },
                    { text: "Careers", href: "#careers" },
                    { text: "Blog", href: "#blog" }
                ]
            },
            {
                title: "Resources",
                items: [
                    { text: "Documentation", href: "#docs" },
                    { text: "Support", href: "#support" },
                    { text: "Privacy Policy", href: "#privacy" },
                    { text: "Terms of Service", href: "#terms" }
                ]
            }
        ],
        copyright: "© 2024 Arrow Tech. All rights reserved. Building the future, one line of code at a time."
    }
};

// Export if needed
if (typeof module !== 'undefined' && module.exports) {
    module.exports = techData;
}

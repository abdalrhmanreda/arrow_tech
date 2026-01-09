// ================================
// 📊 WEBSITE DATA - Arrow Academy
// ================================
// All website content in one place for easy maintenance

const websiteData = {
    // Hero Section
    hero: {
        badge: "Ages 10-18 • Programming & AI",
        title: {
            text: "Learn ",
            highlight1: "Coding",
            middle: " & ",
            highlight2: "AI",
            end: " the Fun Way!"
        },
        description: "Join thousands of young innovators learning programming, artificial intelligence, and how to use technology responsibly. Build games, apps, and AI projects!",
        stats: [
            { number: "5,000+", label: "Students" },
            { number: "15+", label: "Courses" },
            { number: "98%", label: "Parent Satisfaction" }
        ],
        buttons: [
            { text: "Explore Courses 🚀", href: "#courses", type: "primary" },
            { text: "Find My Level", href: "#age-groups", type: "secondary" }
        ]
    },

    // Age Groups
    ageGroups: [
        {
            emoji: "🎮",
            range: "10 - 12 Years",
            label: "Young Explorers",
            description: "Perfect for beginners! Learn the basics through fun games and creative projects.",
            skills: [
                "Scratch & Block Coding",
                "Game Development Basics",
                "Logic & Problem Solving",
                "Creative Animations",
                "Introduction to AI"
            ]
        },
        {
            emoji: "🚀",
            range: "13 - 15 Years",
            label: "Tech Builders",
            description: "Ready to code! Build real websites, apps, and understand how AI works.",
            skills: [
                "Python Programming",
                "Web Development (HTML/CSS/JS)",
                "Mobile App Development",
                "AI & Machine Learning Basics",
                "Real Project Building"
            ]
        },
        {
            emoji: "⚡",
            range: "16 - 18 Years",
            label: "Young Innovators",
            description: "Advanced skills! Create professional projects and prepare for your tech career.",
            skills: [
                "Advanced Programming",
                "Full-Stack Development",
                "AI & Deep Learning",
                "Cloud Computing",
                "Portfolio Projects"
            ]
        }
    ],

    // Learning Path
    learningPath: [
        {
            number: 1,
            title: "Start with Basics",
            description: "Begin your journey with fun, visual programming. Learn logic, problem-solving, and computational thinking through games and animations.",
            features: [
                "Block-based coding (Scratch)",
                "Basic programming concepts",
                "Creative projects",
                "Interactive games"
            ]
        },
        {
            number: 2,
            title: "Learn Real Coding",
            description: "Master Python and JavaScript. Build websites, create apps, and understand how professional developers work.",
            features: [
                "Python programming",
                "Web development",
                "App creation",
                "Real-world projects"
            ]
        },
        {
            number: 3,
            title: "Discover AI & Machine Learning",
            description: "Understand artificial intelligence, create smart programs, and learn how to use AI responsibly and ethically.",
            features: [
                "AI fundamentals",
                "Machine learning basics",
                "Responsible AI usage",
                "Smart applications"
            ]
        },
        {
            number: 4,
            title: "Build Your Portfolio",
            description: "Create impressive projects, build your portfolio, and prepare for competitions, internships, or university.",
            features: [
                "Advanced projects",
                "Portfolio development",
                "Competition preparation",
                "Career readiness"
            ]
        }
    ],

    // AI Education
    aiEducation: [
        {
            icon: "🧠",
            title: "Understand How AI Works",
            description: "Learn the fundamentals of artificial intelligence, machine learning, and how computers can \"think\" and learn."
        },
        {
            icon: "✅",
            title: "Use AI Responsibly",
            description: "Understand ethics, privacy, and the right way to use AI tools like ChatGPT, image generators, and more."
        },
        {
            icon: "🎨",
            title: "Create with AI",
            description: "Build your own AI-powered projects, from chatbots to image recognition apps and smart assistants."
        }
    ],

    // Courses
    courses: [
        {
            icon: "🎮",
            title: "Scratch Game Development",
            description: "Create your own games! Learn coding through fun, interactive projects and bring your ideas to life.",
            ageRange: "Ages 10-12",
            level: "Beginner",
            duration: "12 weeks"
        },
        {
            icon: "🐍",
            title: "Python Programming",
            description: "Master Python! From basics to building real apps, games, and even AI projects.",
            ageRange: "Ages 13-15",
            level: "Intermediate",
            duration: "16 weeks"
        },
        {
            icon: "🌐",
            title: "Web Development Pro",
            description: "Build stunning websites! Learn HTML, CSS, JavaScript and create your own online portfolio.",
            ageRange: "Ages 13-16",
            level: "Intermediate",
            duration: "20 weeks"
        },
        {
            icon: "🤖",
            title: "AI & Machine Learning",
            description: "Enter the world of AI! Build smart apps, understand machine learning, and use AI responsibly.",
            ageRange: "Ages 14-18",
            level: "Advanced",
            duration: "24 weeks"
        },
        {
            icon: "📱",
            title: "Mobile App Development",
            description: "Create real mobile apps! Build for iOS and Android and publish your apps to app stores.",
            ageRange: "Ages 15-18",
            level: "Advanced",
            duration: "20 weeks"
        },
        {
            icon: "🎨",
            title: "Creative Coding",
            description: "Code meets art! Create animations, interactive art, music visualizers, and digital masterpieces.",
            ageRange: "Ages 12-16",
            level: "All Levels",
            duration: "14 weeks"
        }
    ],

    // Parent Trust
    parentTrust: [
        {
            icon: "🛡️",
            title: "Safe Learning Environment",
            description: "COPPA-compliant platform with certified instructors. Your child's safety and privacy are our top priority with monitored sessions and secure platforms."
        },
        {
            icon: "👨‍🏫",
            title: "Expert Instructors",
            description: "All our teachers are certified educators with real-world tech experience. They know how to make learning fun and effective for kids."
        },
        {
            icon: "📊",
            title: "Progress Tracking",
            description: "Get detailed reports on your child's progress. See what they're learning, their achievements, and areas where they excel."
        },
        {
            icon: "🏆",
            title: "Proven Results",
            description: "98% parent satisfaction rate. Our students win competitions, build real projects, and develop future-ready skills."
        }
    ],

    // Testimonials
    testimonials: [
        {
            stars: 5,
            text: "My daughter loves the Python course! She built her first game in just 3 weeks and can't stop talking about it. The instructors are patient and amazing.",
            avatar: "👩",
            name: "Sarah Martinez",
            role: "Parent of 13-year-old student"
        },
        {
            stars: 5,
            text: "I learned how to make websites and now I'm building one for my school project! Arrow Academy makes coding so much fun and easy to understand.",
            avatar: "👦",
            name: "Alex Chen, 15",
            role: "Web Development Student"
        },
        {
            stars: 5,
            text: "The AI course was incredible! I built my own chatbot and learned about responsible AI usage. This is preparing me for my dream career in tech.",
            avatar: "👧",
            name: "Maya Patel, 17",
            role: "AI & ML Student"
        }
    ],

    // FAQ
    faq: [
        {
            question: "Does my child need prior coding experience?",
            answer: "Not at all! We have courses for complete beginners starting from age 10. Our beginner courses teach everything from scratch with fun, visual tools like Scratch before moving to text-based programming."
        },
        {
            question: "What equipment does my child need?",
            answer: "Just a computer or laptop with internet connection! All our software and tools are free and web-based. We'll guide you through the simple setup process on day one."
        },
        {
            question: "How are classes conducted?",
            answer: "We offer both live online classes and self-paced video courses. Live classes are small groups (max 8 students) for personalized attention. All sessions are recorded for review."
        },
        {
            question: "Is the platform safe for kids?",
            answer: "Absolutely! We're COPPA compliant and use secure, monitored platforms. All instructors are background-checked and certified. Parents have full access to monitoring tools and progress reports."
        },
        {
            question: "What if my child needs help between classes?",
            answer: "Students have access to our dedicated support community, office hours with instructors, and a moderated student forum. We're here to help whenever they need it!"
        },
        {
            question: "Do you offer certificates?",
            answer: "Yes! Students receive certificates upon course completion and can earn digital badges for achievements. Advanced students can work toward our verified portfolio certification."
        }
    ],

    // CTA Section
    cta: {
        title: "Ready to Start Your Coding Journey?",
        description: "Join 5,000+ students learning programming and AI. Start with a free trial class today!",
        buttons: [
            { text: "Start Free Trial 🚀", href: "#", type: "white" },
            { text: "Talk to an Advisor", href: "#", type: "outline" }
        ]
    },

    // Footer
    footer: {
        about: {
            title: "Arrow Academy",
            description: "Empowering the next generation of innovators with world-class coding and AI education. Learning should be fun, safe, and inspiring!",
            social: [
                { icon: "👍", label: "Facebook", href: "#" },
                { icon: "📷", label: "Instagram", href: "#" },
                { icon: "🐦", label: "Twitter", href: "#" },
                { icon: "▶️", label: "YouTube", href: "#" }
            ]
        },
        sections: [
            {
                title: "Courses",
                links: [
                    { text: "Scratch Programming", href: "#courses" },
                    { text: "Python", href: "#courses" },
                    { text: "Web Development", href: "#courses" },
                    { text: "AI & ML", href: "#courses" },
                    { text: "Mobile Apps", href: "#courses" }
                ]
            },
            {
                title: "Resources",
                links: [
                    { text: "Age Groups", href: "#age-groups" },
                    { text: "Success Stories", href: "#testimonials" },
                    { text: "FAQ", href: "#faq" },
                    { text: "Parent Guide", href: "#" },
                    { text: "Blog", href: "#" }
                ]
            },
            {
                title: "Company",
                links: [
                    { text: "About Us", href: "#" },
                    { text: "Our Team", href: "#" },
                    { text: "Contact", href: "#" },
                    { text: "Privacy Policy", href: "#" },
                    { text: "Terms of Service", href: "#" }
                ]
            }
        ],
        copyright: "© 2024 Arrow Academy. All rights reserved. Made with ❤️ for young innovators everywhere."
    }
};

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = websiteData;
}

// ================================
// 🌍 TRANSLATIONS - EN & AR
// ================================

const translations = {
    en: {
        // Navigation
        nav: {
            home: "Home",
            ageGroups: "Age Groups",
            courses: "Courses",
            aiLearning: "AI Learning",
            reviews: "Reviews",
            faq: "FAQ",
            startLearning: "Start Learning 🎯"
        },

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

        // Section Headers
        sections: {
            ageGroups: {
                badge: "Age Groups",
                title: "Find Your Perfect Level",
                description: "We have specially designed programs for every age group, from beginners to advanced coders!"
            },
            learningPath: {
                badge: "Learning Journey",
                title: "Your Path to Success",
                description: "Follow our proven step-by-step learning path from beginner to expert"
            },
            aiEducation: {
                badge: "AI Education",
                title: "Learn to Use AI Responsibly",
                description: "Understanding AI is not just about using it—it's about using it wisely, ethically, and creatively"
            },
            courses: {
                badge: "Popular Courses",
                title: "Start Your Adventure",
                description: "Choose from our most popular courses designed by education experts and loved by students"
            },
            parentTrust: {
                badge: "For Parents",
                title: "Why Parents Trust Arrow Academy",
                description: "Safe, certified, and proven to deliver real results for young learners"
            },
            testimonials: {
                badge: "Student Success",
                title: "What Students & Parents Say",
                description: "Real stories from our amazing community of young coders"
            },
            faq: {
                badge: "FAQ",
                title: "Common Questions",
                description: "Everything you need to know about Arrow Academy"
            }
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
                ],
                buttonText: "View Courses"
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
                ],
                buttonText: "View Courses"
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
                ],
                buttonText: "View Courses"
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
                duration: "12 weeks",
                enrollText: "Enroll Now"
            },
            {
                icon: "🐍",
                title: "Python Programming",
                description: "Master Python! From basics to building real apps, games, and even AI projects.",
                ageRange: "Ages 13-15",
                level: "Intermediate",
                duration: "16 weeks",
                enrollText: "Enroll Now"
            },
            {
                icon: "🌐",
                title: "Web Development Pro",
                description: "Build stunning websites! Learn HTML, CSS, JavaScript and create your own online portfolio.",
                ageRange: "Ages 13-16",
                level: "Intermediate",
                duration: "20 weeks",
                enrollText: "Enroll Now"
            },
            {
                icon: "🤖",
                title: "AI & Machine Learning",
                description: "Enter the world of AI! Build smart apps, understand machine learning, and use AI responsibly.",
                ageRange: "Ages 14-18",
                level: "Advanced",
                duration: "24 weeks",
                enrollText: "Enroll Now"
            },
            {
                icon: "📱",
                title: "Mobile App Development",
                description: "Create real mobile apps! Build for iOS and Android and publish your apps to app stores.",
                ageRange: "Ages 15-18",
                level: "Advanced",
                duration: "20 weeks",
                enrollText: "Enroll Now"
            },
            {
                icon: "🎨",
                title: "Creative Coding",
                description: "Code meets art! Create animations, interactive art, music visualizers, and digital masterpieces.",
                ageRange: "Ages 12-16",
                level: "All Levels",
                duration: "14 weeks",
                enrollText: "Enroll Now"
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
                description: "Empowering the next generation of innovators with world-class coding and AI education. Learning should be fun, safe, and inspiring!"
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
    },

    ar: {
        // Navigation
        nav: {
            home: "الرئيسية",
            ageGroups: "الفئات العمرية",
            courses: "الدورات",
            aiLearning: "تعلم الذكاء الاصطناعي",
            reviews: "المراجعات",
            faq: "الأسئلة الشائعة",
            startLearning: "ابدأ التعلم 🎯"
        },

        // Hero Section
        hero: {
            badge: "من 10-18 سنة • البرمجة والذكاء الاصطناعي",
            title: {
                text: "تعلم ",
                highlight1: "البرمجة",
                middle: " و ",
                highlight2: "الذكاء الاصطناعي",
                end: " بطريقة ممتعة!"
            },
            description: "انضم إلى آلاف المبدعين الشباب الذين يتعلمون البرمجة والذكاء الاصطناعي وكيفية استخدام التكنولوجيا بمسؤولية. ابنِ الألعاب والتطبيقات ومشاريع الذكاء الاصطناعي!",
            stats: [
                { number: "+5,000", label: "طالب" },
                { number: "+15", label: "دورة" },
                { number: "%98", label: "رضا أولياء الأمور" }
            ],
            buttons: [
                { text: "استكشف الدورات 🚀", href: "#courses", type: "primary" },
                { text: "ابحث عن مستواك", href: "#age-groups", type: "secondary" }
            ]
        },

        // Section Headers
        sections: {
            ageGroups: {
                badge: "الفئات العمرية",
                title: "اعثر على المستوى المثالي لك",
                description: "لدينا برامج مصممة خصيصاً لكل فئة عمرية، من المبتدئين إلى المبرمجين المتقدمين!"
            },
            learningPath: {
                badge: "رحلة التعلم",
                title: "طريقك نحو النجاح",
                description: "اتبع مسار التعلم التدريجي المثبت من المبتدئ إلى الخبير"
            },
            aiEducation: {
                badge: "تعليم الذكاء الاصطناعي",
                title: "تعلم استخدام الذكاء الاصطناعي بمسؤولية",
                description: "فهم الذكاء الاصطناعي ليس فقط عن استخدامه - بل عن استخدامه بحكمة وأخلاقية وإبداع"
            },
            courses: {
                badge: "الدورات الشائعة",
                title: "ابدأ مغامرتك",
                description: "اختر من دوراتنا الأكثر شعبية المصممة من قبل خبراء التعليم والمحبوبة من الطلاب"
            },
            parentTrust: {
                badge: "لأولياء الأمور",
                title: "لماذا يثق أولياء الأمور في Arrow Academy",
                description: "آمنة، معتمدة، ومثبتة الفعالية في تحقيق نتائج حقيقية للمتعلمين الشباب"
            },
            testimonials: {
                badge: "نجاح الطلاب",
                title: "ماذا يقول الطلاب وأولياء الأمور",
                description: "قصص حقيقية من مجتمعنا الرائع من المبرمجين الصغار"
            },
            faq: {
                badge: "الأسئلة الشائعة",
                title: "أسئلة شائعة",
                description: "كل ما تحتاج معرفته عن Arrow Academy"
            }
        },

        // Age Groups
        ageGroups: [
            {
                emoji: "🎮",
                range: "10 - 12 سنة",
                label: "المستكشفون الصغار",
                description: "مثالي للمبتدئين! تعلم الأساسيات من خلال الألعاب الممتعة والمشاريع الإبداعية.",
                skills: [
                    "البرمجة بالكتل (Scratch)",
                    "أساسيات تطوير الألعاب",
                    "المنطق وحل المشكلات",
                    "الرسوم المتحركة الإبداعية",
                    "مقدمة في الذكاء الاصطناعي"
                ],
                buttonText: "عرض الدورات"
            },
            {
                emoji: "🚀",
                range: "13 - 15 سنة",
                label: "بناة التكنولوجيا",
                description: "جاهز للبرمجة! ابنِ مواقع ويب وتطبيقات حقيقية وافهم كيف يعمل الذكاء الاصطناعي.",
                skills: [
                    "برمجة Python",
                    "تطوير الويب (HTML/CSS/JS)",
                    "تطوير تطبيقات الجوال",
                    "أساسيات الذكاء الاصطناعي",
                    "بناء مشاريع حقيقية"
                ],
                buttonText: "عرض الدورات"
            },
            {
                emoji: "⚡",
                range: "16 - 18 سنة",
                label: "المبتكرون الشباب",
                description: "مهارات متقدمة! أنشئ مشاريع احترافية واستعد لمسيرتك المهنية في التكنولوجيا.",
                skills: [
                    "البرمجة المتقدمة",
                    "تطوير Full-Stack",
                    "الذكاء الاصطناعي والتعلم العميق",
                    "الحوسبة السحابية",
                    "مشاريع المحفظة"
                ],
                buttonText: "عرض الدورات"
            }
        ],

        // Learning Path
        learningPath: [
            {
                number: 1,
                title: "ابدأ بالأساسيات",
                description: "ابدأ رحلتك مع البرمجة المرئية الممتعة. تعلم المنطق وحل المشكلات والتفكير الحاسوبي من خلال الألعاب والرسوم المتحركة.",
                features: [
                    "البرمجة بالكتل (Scratch)",
                    "مفاهيم البرمجة الأساسية",
                    "مشاريع إبداعية",
                    "ألعاب تفاعلية"
                ]
            },
            {
                number: 2,
                title: "تعلم البرمجة الحقيقية",
                description: "أتقن Python و JavaScript. ابنِ مواقع ويب وأنشئ تطبيقات وافهم كيف يعمل المطورون المحترفون.",
                features: [
                    "برمجة Python",
                    "تطوير الويب",
                    "إنشاء التطبيقات",
                    "مشاريع واقعية"
                ]
            },
            {
                number: 3,
                title: "اكتشف الذكاء الاصطناعي والتعلم الآلي",
                description: "افهم الذكاء الاصطناعي، أنشئ برامج ذكية، وتعلم كيفية استخدام الذكاء الاصطناعي بمسؤولية وأخلاقية.",
                features: [
                    "أساسيات الذكاء الاصطناعي",
                    "أساسيات التعلم الآلي",
                    "الاستخدام المسؤول للذكاء الاصطناعي",
                    "التطبيقات الذكية"
                ]
            },
            {
                number: 4,
                title: "ابنِ محفظتك",
                description: "أنشئ مشاريع مذهلة، ابنِ محفظتك، واستعد للمسابقات أو التدريب أو الجامعة.",
                features: [
                    "مشاريع متقدمة",
                    "بناء المحفظة",
                    "الإعداد للمسابقات",
                    "الاستعداد المهني"
                ]
            }
        ],

        // AI Education
        aiEducation: [
            {
                icon: "🧠",
                title: "افهم كيف يعمل الذكاء الاصطناعي",
                description: "تعلم أساسيات الذكاء الاصطناعي والتعلم الآلي وكيف يمكن للحواسيب أن \"تفكر\" وتتعلم."
            },
            {
                icon: "✅",
                title: "استخدم الذكاء الاصطناعي بمسؤولية",
                description: "افهم الأخلاقيات والخصوصية والطريقة الصحيحة لاستخدام أدوات الذكاء الاصطناعي مثل ChatGPT ومولدات الصور والمزيد."
            },
            {
                icon: "🎨",
                title: "أبدع مع الذكاء الاصطناعي",
                description: "ابنِ مشاريعك الخاصة التي تعمل بالذكاء الاصطناعي، من روبوتات المحادثة إلى تطبيقات التعرف على الصور والمساعدين الأذكياء."
            }
        ],

        // Courses
        courses: [
            {
                icon: "🎮",
                title: "تطوير ألعاب Scratch",
                description: "أنشئ ألعابك الخاصة! تعلم البرمجة من خلال مشاريع تفاعلية ممتعة وحقق أفكارك.",
                ageRange: "10-12 سنة",
                level: "مبتدئ",
                duration: "12 أسبوع",
                enrollText: "سجل الآن"
            },
            {
                icon: "🐍",
                title: "برمجة Python",
                description: "أتقن Python! من الأساسيات إلى بناء تطبيقات حقيقية وألعاب وحتى مشاريع ذكاء اصطناعي.",
                ageRange: "13-15 سنة",
                level: "متوسط",
                duration: "16 أسبوع",
                enrollText: "سجل الآن"
            },
            {
                icon: "🌐",
                title: "تطوير الويب الاحترافي",
                description: "ابنِ مواقع ويب مذهلة! تعلم HTML و CSS و JavaScript وأنشئ محفظتك الخاصة على الإنترنت.",
                ageRange: "13-16 سنة",
                level: "متوسط",
                duration: "20 أسبوع",
                enrollText: "سجل الآن"
            },
            {
                icon: "🤖",
                title: "الذكاء الاصطناعي والتعلم الآلي",
                description: "ادخل عالم الذكاء الاصطناعي! ابنِ تطبيقات ذكية، افهم التعلم الآلي، واستخدم الذكاء الاصطناعي بمسؤولية.",
                ageRange: "14-18 سنة",
                level: "متقدم",
                duration: "24 أسبوع",
                enrollText: "سجل الآن"
            },
            {
                icon: "📱",
                title: "تطوير تطبيقات الجوال",
                description: "أنشئ تطبيقات جوال حقيقية! ابنِ لنظامي iOS و Android وانشر تطبيقاتك في متاجر التطبيقات.",
                ageRange: "15-18 سنة",
                level: "متقدم",
                duration: "20 أسبوع",
                enrollText: "سجل الآن"
            },
            {
                icon: "🎨",
                title: "البرمجة الإبداعية",
                description: "البرمجة تلتقي بالفن! أنشئ رسوم متحركة وفن تفاعلي ومرئيات موسيقية وتحف رقمية.",
                ageRange: "12-16 سنة",
                level: "جميع المستويات",
                duration: "14 أسبوع",
                enrollText: "سجل الآن"
            }
        ],

        // Parent Trust
        parentTrust: [
            {
                icon: "🛡️",
                title: "بيئة تعلم آمنة",
                description: "منصة متوافقة مع COPPA مع معلمين معتمدين. سلامة وخصوصية طفلك هي أولويتنا القصوى مع جلسات مراقبة ومنصات آمنة."
            },
            {
                icon: "👨‍🏫",
                title: "معلمون خبراء",
                description: "جميع معلمينا مربون معتمدون ولديهم خبرة تقنية واقعية. يعرفون كيفية جعل التعلم ممتعاً وفعالاً للأطفال."
            },
            {
                icon: "📊",
                title: "تتبع التقدم",
                description: "احصل على تقارير مفصلة عن تقدم طفلك. شاهد ما يتعلمونه وإنجازاتهم والمجالات التي يتفوقون فيها."
            },
            {
                icon: "🏆",
                title: "نتائج مثبتة",
                description: "معدل رضا 98% من أولياء الأمور. طلابنا يفوزون بالمسابقات ويبنون مشاريع حقيقية ويطورون مهارات المستقبل."
            }
        ],

        // Testimonials
        testimonials: [
            {
                stars: 5,
                text: "ابنتي تحب دورة Python! لقد بنت لعبتها الأولى في 3 أسابيع فقط ولا تتوقف عن الحديث عنها. المدربون صبورون ورائعون.",
                avatar: "👩",
                name: "سارة مارتينيز",
                role: "ولي أمر طالبة 13 سنة"
            },
            {
                stars: 5,
                text: "تعلمت كيفية إنشاء مواقع الويب والآن أقوم ببناء واحد لمشروع مدرستي! Arrow Academy تجعل البرمجة ممتعة وسهلة الفهم.",
                avatar: "👦",
                name: "أليكس تشين، 15",
                role: "طالب تطوير الويب"
            },
            {
                stars: 5,
                text: "كانت دورة الذكاء الاصطناعي رائعة! لقد بنيت روبوت الدردشة الخاص بي وتعلمت عن الاستخدام المسؤول للذكاء الاصطناعي. هذا يعدني لمسيرتي المهنية في التكنولوجيا.",
                avatar: "👧",
                name: "مايا باتيل، 17",
                role: "طالبة الذكاء الاصطناعي والتعلم الآلي"
            }
        ],

        // FAQ
        faq: [
            {
                question: "هل يحتاج طفلي إلى خبرة سابقة في البرمجة؟",
                answer: "إطلاقاً! لدينا دورات للمبتدئين الكاملين بدءاً من سن 10 سنوات. دوراتنا للمبتدئين تعلم كل شيء من الصفر باستخدام أدوات ممتعة ومرئية مثل Scratch قبل الانتقال إلى البرمجة النصية."
            },
            {
                question: "ما هي المعدات التي يحتاجها طفلي؟",
                answer: "فقط جهاز كمبيوتر أو لابتوب مع اتصال بالإنترنت! جميع برامجنا وأدواتنا مجانية وقائمة على الويب. سنرشدك خلال عملية الإعداد البسيطة في اليوم الأول."
            },
            {
                question: "كيف تُجرى الفصول؟",
                answer: "نقدم كلاً من الفصول المباشرة عبر الإنترنت ودورات الفيديو ذاتية السرعة. الفصول المباشرة هي مجموعات صغيرة (بحد أقصى 8 طلاب) للحصول على اهتمام شخصي. يتم تسجيل جميع الجلسات للمراجعة."
            },
            {
                question: "هل المنصة آمنة للأطفال؟",
                answer: "بالتأكيد! نحن متوافقون مع COPPA ونستخدم منصات آمنة ومراقبة. جميع المعلمين تم فحص خلفياتهم ومعتمدون. لدى الآباء وصول كامل إلى أدوات المراقبة وتقارير التقدم."
            },
            {
                question: "ماذا لو احتاج طفلي إلى مساعدة بين الفصول؟",
                answer: "يمكن للطلاب الوصول إلى مجتمع الدعم المخصص لدينا، ساعات العمل مع المعلمين، ومنتدى الطلاب المُدار. نحن هنا للمساعدة كلما احتاجوا إلى ذلك!"
            },
            {
                question: "هل تقدمون شهادات؟",
                answer: "نعم! يحصل الطلاب على شهادات عند إكمال الدورة ويمكنهم كسب شارات رقمية للإنجازات. يمكن للطلاب المتقدمين العمل نحو شهادة محفظة التحقق الخاصة بنا."
            }
        ],

        // CTA Section
        cta: {
            title: "هل أنت مستعد لبدء رحلة البرمجة؟",
            description: "انضم إلى أكثر من 5,000 طالب يتعلمون البرمجة والذكاء الاصطناعي. ابدأ بفصل تجريبي مجاني اليوم!",
            buttons: [
                { text: "ابدأ التجربة المجانية 🚀", href: "#", type: "white" },
                { text: "تحدث إلى مستشار", href: "#", type: "outline" }
            ]
        },

        // Footer
        footer: {
            about: {
                title: "Arrow Academy",
                description: "تمكين الجيل القادم من المبتكرين من خلال تعليم البرمجة والذكاء الاصطناعي على مستوى عالمي. يجب أن يكون التعلم ممتعاً وآمناً وملهماً!"
            },
            sections: [
                {
                    title: "الدورات",
                    links: [
                        { text: "برمجة Scratch", href: "#courses" },
                        { text: "Python", href: "#courses" },
                        { text: "تطوير الويب", href: "#courses" },
                        { text: "الذكاء الاصطناعي والتعلم الآلي", href: "#courses" },
                        { text: "تطبيقات الجوال", href: "#courses" }
                    ]
                },
                {
                    title: "الموارد",
                    links: [
                        { text: "الفئات العمرية", href: "#age-groups" },
                        { text: "قصص النجاح", href: "#testimonials" },
                        { text: "الأسئلة الشائعة", href: "#faq" },
                        { text: "دليل أولياء الأمور", href: "#" },
                        { text: "المدونة", href: "#" }
                    ]
                },
                {
                    title: "الشركة",
                    links: [
                        { text: "من نحن", href: "#" },
                        { text: "فريقنا", href: "#" },
                        { text: "اتصل بنا", href: "#" },
                        { text: "سياسة الخصوصية", href: "#" },
                        { text: "شروط الخدمة", href: "#" }
                    ]
                }
            ],
            copyright: "© 2024 Arrow Academy. جميع الحقوق محفوظة. صُنع بـ ❤️ للمبتكرين الشباب في كل مكان."
        }
    }
};

// Current language
let currentLang = localStorage.getItem('language') || 'en';

// Get current translations
function t() {
    return translations[currentLang];
}

// Switch language
function switchLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('language', lang);

    // Update HTML lang and dir attributes
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';

    // Update body class for styling
    document.body.classList.toggle('rtl', lang === 'ar');

    // Re-render website
    renderWebsite();

    // Re-initialize observers
    initializeObservers();
}

// Export
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { translations, t, switchLanguage, currentLang };
}

// ================================
// 📊 DASHBOARD DATA
// ================================

const dashboardData = {
    // Sidebar Navigation
    sidebar: {
        logo: {
            icon: "assets/arrow-tech-logo.png",
            text: "Arrow",
            highlight: "Tech"
        },
        menu: [
            { icon: "grid", text: "Overview", active: true, section: "overview" },
            { icon: "briefcase", text: "Tech Projects", section: "tech" },
            { icon: "book-open", text: "Academy Courses", section: "academy" },
            { icon: "users", text: "Students", section: "students" },
            { icon: "message-square", text: "Messages", badge: 5, section: "messages" },
            { icon: "calendar", text: "Tech Schedule", section: "schedule" },
            { icon: "bar-chart-2", text: "Analytics", section: "analytics" },
            { icon: "settings", text: "Settings", section: "settings" }
        ],
        user: {
            name: "Alex Chen",
            role: "Admin",
            avatar: "https://ui-avatars.com/api/?name=Alex+Chen&background=0071E3&color=fff"
        }
    },

    // Stats Cards
    stats: {
        tech: [
            {
                title: "Active Projects",
                value: "12",
                change: "+3 this month",
                trend: "up",
                icon: "briefcase",
                gradient: "linear-gradient(135deg, #0071E3 0%, #00C6FF 100%)"
            },
            {
                title: "Tech Revenue",
                value: "$125K",
                change: "+15%",
                trend: "up",
                icon: "dollar-sign",
                gradient: "linear-gradient(135deg, #10B981 0%, #06B6D4 100%)"
            },
            {
                title: "New Clients",
                value: "8",
                change: "+2 last week",
                trend: "up",
                icon: "users",
                gradient: "linear-gradient(135deg, #8B5CF6 0%, #EC4899 100%)"
            },
            {
                title: "Consultations",
                value: "24",
                change: "Pending",
                trend: "neutral",
                icon: "calendar",
                gradient: "linear-gradient(135deg, #F59E0B 0%, #EF4444 100%)"
            }
        ],
        academy: [
            {
                title: "Total Students",
                value: "1,250",
                change: "+120 this month",
                trend: "up",
                icon: "book",
                gradient: "linear-gradient(135deg, #FF512F 0%, #DD2476 100%)"
            },
            {
                title: "Course Sales",
                value: "$45K",
                change: "+8%",
                trend: "up",
                icon: "shopping-cart",
                gradient: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)"
            },
            {
                title: "Active Courses",
                value: "15",
                change: "2 New",
                trend: "up",
                icon: "monitor",
                gradient: "linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)"
            },
            {
                title: "Completion Rate",
                value: "85%",
                change: "+5%",
                trend: "up",
                icon: "award",
                gradient: "linear-gradient(135deg, #fa709a 0%, #fee140 100%)"
            }
        ]
    },

    // Tech Projects List
    techProjects: [
        { name: "FinTech App Rewrite", client: "GlobalBank", status: "In Progress", progress: 65, deadline: "Nov 15, 2024" },
        { name: "E-commerce Platform", client: "StyleStore", status: "Review", progress: 90, deadline: "Oct 30, 2024" },
        { name: "AI Chatbot Integration", client: "TechSupport Inc", status: "Planning", progress: 15, deadline: "Dec 01, 2024" }
    ],

    // Academy Courses List
    academyCourses: [
        { title: "Full Stack Web Dev", students: 450, rating: 4.8, revenue: "$12,500" },
        { title: "Python for Data Science", students: 320, rating: 4.9, revenue: "$9,800" },
        { title: "UI/UX Design Masterclass", students: 210, rating: 4.7, revenue: "$6,200" }
    ],

    // Recent Messages
    messages: [
        {
            sender: "Sarah Jones",
            subject: "Project Proposal Review",
            time: "10:30 AM",
            status: "New",
            avatar: "https://ui-avatars.com/api/?name=Sarah+Jones&background=random"
        },
        {
            sender: "David Lee",
            subject: "Technical Issue Report",
            time: "Yesterday",
            status: "In Progress",
            avatar: "https://ui-avatars.com/api/?name=David+Lee&background=random"
        },
        {
            sender: "Emily White",
            subject: "Consultation Follow-up",
            time: "2 Days Ago",
            status: "Resolved",
            avatar: "https://ui-avatars.com/api/?name=Emily+White&background=random"
        }
    ],

    // Upcoming Consultations
    consultations: [
        {
            date: "Oct 27, 2024",
            time: "2:00 PM",
            client: "Mark Johnson",
            topic: "Cloud Migration Strategy",
            platform: "Zoom",
            status: "Confirmed"
        },
        {
            date: "Oct 28, 2024",
            time: "10:00 AM",
            client: "Jennifer Davis",
            topic: "AI Integration Feasibility",
            platform: "Google Meet",
            status: "Pending"
        },
        {
            date: "Oct 29, 2024",
            time: "4:30 PM",
            client: "Robert Wilson",
            topic: "Cybersecurity Audit",
            platform: "Zoom",
            status: "Confirmed"
        }
    ]
};

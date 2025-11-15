const stats = [
  {
    number: "50+",
    label: "Projects Completed",
    icon: "🎯",
    color: "from-yellow-400 to-orange-400",
    desc: "From small startups to large enterprises, delivering excellence every time.",
  },
  {
    number: "99%",
    label: "Client Satisfaction",
    icon: "⭐",
    color: "from-blue-400 to-purple-400",
    desc: "Trusted by clients worldwide for quality, reliability, and communication.",
  },
  {
    number: "24/7",
    label: "Support Available",
    icon: "💬",
    color: "from-pink-400 to-red-400",
    desc: "Always ready to help you with quick responses and reliable assistance.",
  },
];
const tagLines = [
  {
    title: "Transform Your Business with",
    highlight: "Advanced Tech!",
    subtitle: "Empowering growth through innovation.",
    desc: "Our specialists provide cutting-edge solutions built for scalability and performance. We help you integrate the right technology to stay ahead in today’s fast-changing digital landscape.",
    bullets: [
      "Custom software & automation solutions",
      "Scalable cloud integrations",
      "Modern web & mobile experiences",
    ],
    icon: "🚀",
    gradient: "from-emerald-400 to-teal-500",
  },
  {
    title: "Harness the Power of",
    highlight: "Smart Technology!",
    subtitle: "Where intelligence meets simplicity.",
    desc: "Leverage our advanced tools and analytics to streamline operations and maximize efficiency. Our team ensures your business makes data-driven, future-ready decisions.",
    bullets: [
      "AI-powered process optimization",
      "Data visualization & insights",
      "Workflow automation platforms",
    ],
    icon: "⚡",
    gradient: "from-blue-400 to-purple-500",
  },
  {
    title: "Unlock New Possibilities with",
    highlight: "Dedicated Team",
    subtitle: "Your success is our mission.",
    desc: "Partner with our experienced experts committed to turning your vision into reality. We deliver unmatched dedication, communication, and creativity throughout every project.",
    bullets: [
      "Agile & transparent collaboration",
      "24/7 project support",
      "Creative solutions tailored to goals",
    ],
    icon: "💡",
    gradient: "from-pink-400 to-red-500",
  },
];

const services = [
  {
    icon: "🌐",
    name: "Web Development",
    desc: "Modern, responsive, and scalable web apps",
    gradient: "from-blue-500 to-teal-500",
    delay: 0,
  },
  {
    icon: "📱",
    name: "App Development",
    desc: "Seamless iOS & Android experiences",
    gradient: "from-purple-500 to-indigo-500",
    delay: 0.1,
  },
  {
    icon: "🔍",
    name: "SEO Optimization",
    desc: "Rank higher & reach your target audience",
    gradient: "from-green-500 to-emerald-600",
    delay: 0.2,
  },
  {
    icon: "🤖",
    name: "AI & ML Solutions",
    desc: "Intelligent automation and data-driven insights",
    gradient: "from-indigo-500 to-violet-600",
    delay: 0.3,
  },
  {
    icon: "📊",
    name: "Data Analytics",
    desc: "Visualize, analyze & make smarter decisions",
    gradient: "from-cyan-500 to-blue-500",
    delay: 0.4,
  },
  {
    icon: "⚙️",
    name: "Business Automation",
    desc: "Streamline workflows with smart systems",
    gradient: "from-orange-500 to-amber-600",
    delay: 0.5,
  },
];

const blogs = [
  {
    title: "Future of Web Dev",
    category: "Technology",
    image:
      "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=300&fit=crop",
    gradient: "from-emerald-500 to-teal-600",
    date: "Dec 15, 2024",
  },
  {
    title: "AI in Business",
    category: "AI/ML",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop",
    gradient: "from-blue-500 to-purple-600",
    date: "Dec 12, 2024",
  },
  {
    title: "Blockchain Innovations",
    category: "Blockchain",
    image:
      "https://online.stanford.edu/sites/default/files/inline-images/1600X900-How-does-blockchain-work.jpg",
    gradient: "from-purple-500 to-pink-600",
    date: "Dec 10, 2024",
  },
];

const contact = [
  {
    icon: "📧",
    label: "Email Us",
    value: "contact@celsystech.com",
    gradient: "from-blue-400 to-blue-600",
  },
  {
    icon: "📱",
    label: "Call Us",
    value: "+91 12345 67890",
    gradient: "from-purple-400 to-purple-600",
  },
  {
    icon: "📍",
    label: "Visit Us",
    value: "Pune, Maharashtra",
    gradient: "from-pink-400 to-pink-600",
  },
];

const services2 = [
  {
    id: 1,
    name: "Web Development",
    icon: "🌐",
    gradient: "from-blue-400 to-blue-600",
    tagline: "Crafting Digital Experiences",
    description:
      "Transform your vision into high-performance, scalable web applications that engage and convert users seamlessly.",
    features: [
      {
        icon: "⚡",
        title: "Lightning Fast",
        desc: "Optimized for speed and SEO",
      },
      {
        icon: "📱",
        title: "Fully Responsive",
        desc: "Perfect on every device",
      },
      {
        icon: "🎨",
        title: "Modern Design",
        desc: "Elegant and user-focused UI/UX",
      },
      {
        icon: "🔒",
        title: "Secure & Reliable",
        desc: "Strong security and uptime",
      },
    ],
    technologies: ["React", "Next.js", "Node.js", "TypeScript", "Tailwind CSS"],
    pricing: "Starting at $2,999",
    deliveryTime: "3-5 weeks",
    image:
      "https://img.freepik.com/free-vector/web-development-programmer-engineering-coding-website-augmented-reality-interface-screens-developer-project-engineer-programming-software-application-design-cartoon-illustration_107791-3863.jpg",
  },
  {
    id: 2,
    name: "Mobile App Development",
    icon: "📱",
    gradient: "from-purple-400 to-purple-600",
    tagline: "Seamless Experiences on iOS & Android",
    description:
      "We build sleek, high-performance mobile apps for iOS and Android that delight users and deliver real results.",
    features: [
      {
        icon: "🎯",
        title: "Cross-Platform",
        desc: "iOS & Android compatibility",
      },
      { icon: "💎", title: "Native Feel", desc: "Smooth animations & UI" },
      {
        icon: "🔔",
        title: "Real-Time Features",
        desc: "Notifications & updates",
      },
      {
        icon: "🧩",
        title: "API Integration",
        desc: "Connects seamlessly with backend",
      },
    ],
    technologies: ["React Native", "Swift", "Kotlin", "Firebase", "Expo"],
    pricing: "Starting at $4,499",
    deliveryTime: "4-8 weeks",
    image:
      "https://img.freepik.com/free-vector/app-development-concept-illustration_114360-5164.jpg",
  },
  {
    id: 3,
    name: "SEO Optimization",
    icon: "🔍",
    gradient: "from-green-400 to-emerald-600",
    tagline: "Rank Higher, Reach Further",
    description:
      "Boost your online visibility and traffic with proven SEO strategies, performance audits, and content optimization.",
    features: [
      {
        icon: "📈",
        title: "Keyword Research",
        desc: "Targeted and data-driven",
      },
      {
        icon: "⚙️",
        title: "Technical SEO",
        desc: "Faster indexing and structure",
      },
      {
        icon: "📝",
        title: "Content Optimization",
        desc: "Engaging SEO content",
      },
      {
        icon: "🔗",
        title: "Backlink Strategy",
        desc: "Quality authority links",
      },
    ],
    technologies: ["Google Analytics", "SEMrush", "Ahrefs", "Screaming Frog"],
    pricing: "Starting at $1,499/mo",
    deliveryTime: "Ongoing",
    image:
      "https://img.freepik.com/free-vector/seo-analytics-concept-illustration_114360-9249.jpg",
  },
  {
    id: 4,
    name: "AI & ML Solutions",
    icon: "🤖",
    gradient: "from-indigo-400 to-indigo-600",
    tagline: "Smarter Decisions with Data",
    description:
      "Empower your business with artificial intelligence and machine learning models that predict, automate, and optimize.",
    features: [
      {
        icon: "🧠",
        title: "Custom AI Models",
        desc: "Tailored to your business needs",
      },
      {
        icon: "📊",
        title: "Predictive Analytics",
        desc: "Forecast trends with precision",
      },
      {
        icon: "🤝",
        title: "Integration Ready",
        desc: "Easily connect with your systems",
      },
      { icon: "⚙️", title: "Automation", desc: "Save time and resources" },
    ],
    technologies: ["Python", "TensorFlow", "PyTorch", "OpenAI", "scikit-learn"],
    pricing: "Starting at $5,999",
    deliveryTime: "6-10 weeks",
    image:
      "https://img.freepik.com/free-vector/ai-machine-learning-concept-illustration_114360-5921.jpg",
  },
  {
    id: 5,
    name: "Data Analytics",
    icon: "📊",
    gradient: "from-cyan-400 to-cyan-600",
    tagline: "Turn Data Into Insights",
    description:
      "Unlock actionable insights with advanced analytics dashboards, visualization tools, and performance tracking.",
    features: [
      {
        icon: "📈",
        title: "Data Visualization",
        desc: "Interactive dashboards",
      },
      {
        icon: "📂",
        title: "Data Warehousing",
        desc: "Centralized, scalable storage",
      },
      {
        icon: "🔍",
        title: "Trend Analysis",
        desc: "Identify growth opportunities",
      },
      {
        icon: "📑",
        title: "Custom Reports",
        desc: "Clear insights for decisions",
      },
    ],
    technologies: [
      "Power BI",
      "Tableau",
      "Python",
      "SQL",
      "Google Data Studio",
    ],
    pricing: "Starting at $3,499",
    deliveryTime: "3-6 weeks",
    image:
      "https://img.freepik.com/free-vector/data-analytics-concept-illustration_114360-864.jpg",
  },
  {
    id: 6,
    name: "Business Insights & Automation",
    icon: "⚙️",
    gradient: "from-orange-400 to-orange-600",
    tagline: "Automate, Analyze, Accelerate",
    description:
      "Streamline workflows and empower smarter decisions with business process automation and performance analytics.",
    features: [
      {
        icon: "⚡",
        title: "Workflow Automation",
        desc: "Save time & resources",
      },
      {
        icon: "📉",
        title: "Process Optimization",
        desc: "Eliminate inefficiencies",
      },
      {
        icon: "🧩",
        title: "System Integration",
        desc: "Unify your tools & data",
      },
      {
        icon: "📊",
        title: "Performance Tracking",
        desc: "Real-time business health",
      },
    ],
    technologies: [
      "Zapier",
      "n8n",
      "Power Automate",
      "Airtable",
      "Google Apps Script",
    ],
    pricing: "Starting at $2,999",
    deliveryTime: "2-5 weeks",
    image:
      "https://img.freepik.com/free-vector/robot-analyzing-data-illustration_114360-5323.jpg",
  },
];

const projects = [
  {
    id: 1,
    title: "AI-Powered Analytics Dashboard",
    description:
      "An intelligent analytics platform providing real-time insights and predictive metrics for enterprises.",
    image:
      "https://img.freepik.com/free-vector/dashboard-interface-user-experience_23-2148711009.jpg",
    techStack: ["React", "Node.js", "Python", "TensorFlow", "PostgreSQL"],
    link: "https://yourprojectlink1.com",
    gradient: "from-indigo-500 to-blue-600",
  },
  {
    id: 2,
    title: "E-Commerce Web Platform",
    description:
      "A modern, scalable online store with real-time inventory, payments, and custom recommendation engine.",
    image:
      "https://img.freepik.com/free-vector/ecommerce-website-illustration_114360-8204.jpg",
    techStack: ["Next.js", "Stripe", "Firebase", "Tailwind CSS"],
    link: "https://yourprojectlink2.com",
    gradient: "from-emerald-500 to-teal-600",
  },
  {
    id: 3,
    title: "Automation Workflow System",
    description:
      "Business automation platform integrating APIs, tasks, and data pipelines with a clean dashboard UI.",
    image:
      "https://img.freepik.com/free-vector/robot-analyzing-data-illustration_114360-5323.jpg",
    techStack: ["n8n", "Express.js", "MongoDB", "React", "Docker"],
    link: "https://yourprojectlink3.com",
    gradient: "from-orange-500 to-amber-600",
  },
  // You can add more for the detailed /portfolio page
];

export { stats, tagLines, services, blogs, contact, services2, projects };

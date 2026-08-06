import { Project } from "@/types/project";

export const projects: Project[] = [
  {
    id: 1,

    title: {
      en: "Lndex Educational Platform",
      ar: "منصة Lndex التعليمية",
    },

    description: {
      en: "An educational platform for online courses, instructors, and enterprise learning.",
      ar: "منصة تعليمية للكورسات الأونلاين وإدارة المدربين والشركات.",
    },

    longDescription: {
      en:
        "Lndex is a full-stack educational platform built to provide online learning experiences. The platform includes course management, instructor dashboards, enterprise features, authentication, payments integration, and responsive user interfaces.",

      ar:
        "Lndex هي منصة تعليمية Full Stack تم تطويرها لتقديم تجربة تعلم إلكتروني متكاملة. تشمل إدارة الكورسات، لوحات تحكم للمدربين، نظام الشركات، تسجيل الدخول، التكامل مع الدفع، وتصميم متجاوب.",
    },

    image_url: "/lndex.png",

    gallery: [
      "/lndex/lndex1.png",
      "/lndex/lndex2.png",
      "/lndex/lndex3.png",
    ],

    tech_stack: [
      "React",
      "JavaScript",
      "Redux Toolkit",
      "Laravel",
      "REST API",
      "CSS",
      "Paymob",
    ],

    github: "https://github.com/your-link",
    live: "https://lndex.io",

    video_url: "",

    features: {
      en: [
        "Course Management System",
        "Instructor Dashboard",
        "Enterprise Learning",
        "Payment Integration",
        "Arabic / English Support",
      ],

      ar: [
        "نظام إدارة الكورسات",
        "لوحة تحكم للمدربين",
        "نظام الشركات",
        "تكامل الدفع الإلكتروني",
        "دعم اللغة العربية والإنجليزية",
      ],
    },
  },


  {
    id: 2,

    title: {
      en: "Phoenix CMS Website",
      ar: "موقع Phoenix CMS",
    },

    description: {
      en:
        "A dynamic website with a custom content management system.",

      ar:
        "موقع ديناميكي يحتوي على نظام إدارة محتوى مخصص.",
    },

    longDescription: {
      en:
        "Phoenix is a modern CMS-based website developed to manage content easily through an administration dashboard. It provides flexible sections, dynamic pages, and optimized user experience.",

      ar:
        "Phoenix هو موقع حديث مبني باستخدام نظام إدارة محتوى مخصص يسمح بإدارة المحتوى بسهولة من خلال لوحة تحكم. يوفر صفحات ديناميكية وأقسام قابلة للتعديل وتجربة مستخدم محسنة.",
    },

    image_url: "/ph2.png",

    gallery: [
      "/phoenix/phoenix1.png",
      "/phoenix/phoenix2.png",
      "/phoenix/phoenix3.png",
    ],

    tech_stack: [
      "React",
      "JavaScript",
      "Bootstrap",
      "REST API",
      "Wagtail CMS",
      "Django",
    ],

    github: "https://github.com/your-link",

    live: "https://phoenix-mea.com/",

    video_url: "",

    features: {
      en: [
        "Custom CMS",
        "Dynamic Content",
        "Responsive Design",
        "API Integration",
      ],

      ar: [
        "نظام إدارة محتوى مخصص",
        "محتوى ديناميكي",
        "تصميم متجاوب",
        "ربط API",
      ],
    },
  },

  {
    id: 3,
    title: {
      en: "Hexol Automotive Oils Platform",
      ar: "منصة هيكسول لزيوت السيارات",
    },
    description: {
      en: "A high-performance corporate platform for Hexol oils in the Saudi market with advanced CMS and SEO optimization.",
      ar: "منصة تعريفية عالية الأداء لبراند زيوت السيارات 'هيكسول' في السوق السعودي مع نظام إدارة محتوى متقدم وتحسين كامل لمحركات البحث.",
    },
    longDescription: {
      en: "Hexol is a professional corporate platform dedicated to showcasing the Hexol automotive oil brand in the Saudi market. The website features a customized Content Management System (CMS) for managing oil products, dynamic specifications, and an organized blog structure. Heavy emphasis was placed on performance tuning and advanced Search Engine Optimization (SEO) strategies to guarantee maximum visibility and ultra-fast loading times, complemented by an interactive client testimonials section.",
      ar: "منصة احترافية متكاملة لبراند زيوت السيارات 'هيكسول' الموجه للسوق السعودي. يضم الموقع نظاماً مخصصاً لإدارة المحتوى (CMS) يتيح التحكم الكامل في عرض أنواع الزيوت ومواصفاتها، وإدارة المقالات بشكل منظم، مع عرض تفاعلي لآراء وتقييمات العملاء. تم التركيز بشكل مكثف على تحسين أداء الموقع وسرعة استجابته (Performance Optimization) وتطبيق أحدث معايير سيو (SEO) لضمان تصدر محركات البحث وتقديم تجربة مستخدم سلسة.",
    },
    image_url: "./hexiol/hexiol.png", // يمكنك تغيير المسار للصورة الأساسية للمشروع
    gallery: [
      "/hexiol/hexiol.PNG",
      "/hexiol/hexiol2.PNG",
      "/hexiol/hexiol3.PNG",
    ],
    tech_stack: [
      "React",
      "Laravel",
      "REST API",
      "SEO Optimization",
    ],
    github: "https://github.com/your-link", // أضف رابط الريبو هنا
    live: "https://www.hexoloil.com/",
    video_url: "",
    features: {
      en: [
        "Advanced Content Management System (CMS)",
        "Elegant Automotive Product Catalog & Specs",
        "SEO-Optimized Dynamic Blogging Architecture",
        "Performance Tuning & Core Web Vitals Optimization",
        "Interactive Client Testimonials Showcase",
        "Fully Responsive Modern UI/UX",
      ],
      ar: [
        "نظام متقدم لإدارة وتعديل المحتوى (CMS)",
        "كتالوج منظم لعرض أنواع الزيوت ومواصفاتها الفنية وبطريقة جذابة",
        "معمارية مدونة ديناميكية مهيأة بالكامل لمحركات البحث (SEO)",
        "تحسين شامل لأداء الموقع وسرعة التصفح (Performance Tuning)",
        "قسم تفاعلي ومنظم لعرض آراء وتقييمات العملاء",
        "واجهة مستخدم عصرية متجاوبة بالكامل مع جميع الشاشات",
      ],
    },
  },


  {
    id: 4,

    title: {
      en: "Roaa Development Website",
      ar: "موقع رؤى للتطوير",
    },

    description: {
      en: "A modern corporate website for an architectural development and turnkey finishing company.",
      ar: "موقع تعريفي حديث لشركة متخصصة في التطوير المعماري وحلول التشطيب المتكاملة.",
    },

    longDescription: {
      en: `Roaa Development is a responsive corporate website built to showcase the company's architectural development and turnkey finishing services. The project includes a fully customized CMS that allows administrators to manage pages, projects, services, blogs, testimonials, and website content dynamically. The website was optimized for performance, SEO, accessibility, and responsive design to provide a professional digital presence.`,

      ar: `موقع احترافي لشركة رؤى للتطوير يعرض خدمات التطوير المعماري والتشطيبات المتكاملة. تم تطوير الموقع مع نظام إدارة محتوى (CMS) مخصص يسمح بإدارة الصفحات والخدمات والمشروعات والمقالات وآراء العملاء بشكل ديناميكي. كما تم تحسين أداء الموقع، وتجهيزه لمحركات البحث (SEO)، مع تصميم متجاوب يعمل بكفاءة على جميع الأجهزة.`,
    },

    image_url: "/roaa/roaa.jpeg",

    gallery: [
      "/roaa/roaa.jpeg",
      "/roaa/roaa.jpeg",
      "/roaa/roaa.jpeg",
    ],

    tech_stack: [
      "React",
      "Laravel",
      "REST API",
      "Bootstrap",
      "CMS",
      "SEO",
    ],

    github: "https://github.com/your-link",

    live: "https://www.roaadevelopments.com/",

    video_url: "",

    features: {
      en: [
        "Custom Content Management System",
        "Projects Showcase",
        "Services Management",
        "Dynamic Blog",
        "SEO Optimization",
        "Performance Optimization",
        "Responsive Design",
        "Multi-language Support",
      ],

      ar: [
        "نظام إدارة محتوى مخصص",
        "إدارة وعرض المشاريع",
        "إدارة الخدمات",
        "مدونة ديناميكية",
        "تهيئة لمحركات البحث (SEO)",
        "تحسين الأداء والسرعة",
        "تصميم متجاوب",
        "دعم تعدد اللغات",
      ],
    },
  },

  {
    id: 5,

    title: {
      en: "Bonyan Group Corporate Website",
      ar: "موقع مجموعة بنيان المؤسسية",
    },

    description: {
      en: "A modern corporate website for Bonyan Group, showcasing its construction, infrastructure, engineering, and project management services.",
      ar: "موقع مؤسسي حديث لمجموعة بنيان يعرض خدماتها في مجالات الإنشاءات والبنية التحتية والخدمات الهندسية وإدارة المشروعات.",
    },

    longDescription: {
      en: `Bonyan Group is a modern corporate website developed to present the company's vision, services, sectors, and strategic projects. The website focuses on delivering a premium digital experience through a clean interface, responsive layouts, optimized performance, and modern frontend development practices.`,

      ar: `موقع مؤسسي حديث تم تطويره لمجموعة بنيان لعرض رؤيتها وخدماتها وقطاعات عملها ومشروعاتها الاستراتيجية. يركز الموقع على تقديم تجربة رقمية احترافية من خلال واجهة مستخدم عصرية، تصميم متجاوب، أداء محسن، وتطبيق أحدث ممارسات تطوير الواجهات الأمامية.`,
    },

    image_url: "/bonyan/bonyan.jpeg",

    gallery: [
      "/bonyan/bonyan1.png",
      "/bonyan/bonyan2.png",
      "/bonyan/bonyan3.png",
    ],

    tech_stack: [
      "React",
      "JavaScript",
      "CSS",
      "Bootstrap",
      "Responsive Design",
    ],

    github: "https://github.com/your-link",

    live: "https://bonyan-omega.vercel.app/en",

    video_url: "",

    features: {
      en: [
        "Modern Corporate Design",
        "Fully Responsive Layout",
        "Interactive User Interface",
        "Smooth Navigation Experience",
        "Optimized Frontend Performance",
        "Cross-browser Compatibility",
      ],

      ar: [
        "تصميم مؤسسي عصري",
        "تصميم متجاوب مع جميع الأجهزة",
        "واجهة مستخدم تفاعلية",
        "تجربة تنقل سلسة",
        "تحسين أداء الواجهة الأمامية",
        "دعم مختلف المتصفحات",
      ],
    },
  },

  {
    id: 6,

    title: {
      en: "Al Assyl Food Group Website",
      ar: "موقع مجموعة الأصيل للصناعات الغذائية",
    },

    description: {
      en: "A corporate website for Al Assyl Food Group with a custom Laravel CMS dashboard for managing website content, products, and company information.",
      ar: "موقع مؤسسي لمجموعة الأصيل للصناعات الغذائية مع لوحة تحكم CMS مخصصة باستخدام Laravel لإدارة محتوى الموقع والمنتجات وبيانات الشركة.",
    },

    longDescription: {
      en: `Al Assyl Food Group is a corporate website developed to showcase one of Egypt's leading food industry companies. The project includes a custom Content Management System (CMS) built with Laravel, allowing administrators to manage website sections, products, brands, and company information dynamically. The backend architecture was designed to provide flexible content control, organized data management, and seamless integration with the frontend experience.`,

      ar: `موقع احترافي لمجموعة الأصيل للصناعات الغذائية، تم تطويره لعرض تاريخ الشركة ومنتجاتها وعلاماتها التجارية ومجالات عملها. يتضمن المشروع نظام إدارة محتوى (CMS) مخصص تم تطويره باستخدام Laravel، يتيح للمسؤولين إدارة أقسام الموقع والمنتجات وبيانات الشركة بشكل ديناميكي. تم بناء الـ Backend بهيكل منظم يوفر سهولة التحكم في المحتوى وإدارة البيانات وربطها مع الواجهة الأمامية.`,
    },

    image_url: "/alassyl/alassyl.jpeg",

    gallery: [
      "/alassyl/alassyl1.jpeg",
      "/alassyl/alassyl2.jpeg",
      "/alassyl/alassyl3.png",
    ],

    tech_stack: [
      "Laravel",
      "PHP",
      "MySQL",
      "REST API",
      "CMS Dashboard",
      "React",
      "JavaScript",
    ],

    github: "https://github.com/your-link",

    live: "https://alassylgroup.com/en/",

    video_url: "",

    features: {
      en: [
        "Custom Laravel CMS Dashboard",
        "Dynamic Content Management",
        "Product Management System",
        "Brand & Company Information Management",
        "Backend API Development",
        "Database Design & Management",
        "Responsive Corporate Website",
      ],

      ar: [
        "لوحة تحكم CMS مخصصة باستخدام Laravel",
        "إدارة محتوى الموقع بشكل ديناميكي",
        "نظام إدارة المنتجات",
        "إدارة بيانات العلامات التجارية والشركة",
        "تطوير Backend APIs",
        "تصميم وإدارة قاعدة البيانات",
        "موقع مؤسسي متجاوب",
      ],
    },

  }
];
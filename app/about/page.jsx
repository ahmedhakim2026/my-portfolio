"use client";

import { useLanguage } from "@/context/LanguageContext";

export default function AboutPage() {
  const { lang } = useLanguage();

  const content = {
    en: {
      name: "Ahmed Abd EL Hakim",
      role: "Frontend / Full Stack Developer",

      desc: `
      I'm Ahmed Abdel Hakim, a Full Stack Developer with a Bachelor's degree in Computer Science and Artificial Intelligence from Helwan University.

      I have over 5 years of experience in Frontend Development, delivering modern, responsive, and high-performance web applications. Throughout my career, I've worked on projects serving both the Egyptian and Saudi Arabian markets.

      In addition to frontend development, I build robust backend systems using Laravel, with a strong focus on clean architecture, scalable solutions, and maintainable code.
      `,

      skills: {
        frontend: [
          "React",
          "Next.js",
          "JavaScript",
          "HTML5",
          "CSS3",
          "Bootstrap",
          "Tailwind CSS",
        ],
        backend: ["Laravel", "PHP", "Node.js", "REST APIs"],
        tools: ["Git", "GitHub", "Responsive Design"],
        concepts: ["System Analysis", "UML Diagrams", "Clean Architecture"],
      },

      projects: [
      {
        title: "Content Management System (CMS)",
        desc: "Developed scalable CMS platforms with dynamic content management, role-based access, and responsive user interfaces.",
      },
      {
        title: "Informational Websites",
        desc: "Built modern, SEO-friendly, and responsive business and corporate websites focused on performance and user experience.",
      },
      {
        title: "E-Learning Platform",
        desc: "Developed online learning platforms featuring course management, student enrollment, authentication, progress tracking, and payment integration.",
      },
      {
        title: "Admin Dashboard",
        desc: "Designed and developed analytics dashboards with data visualization, user management, and reporting tools.",
      },
      {
        title: "E-commerce Platform",
        desc: "Built full-stack e-commerce solutions with authentication, shopping cart, payment integration, and admin management.",
      },
    ]

    },

    ar: {
      name: "أحمد عبد الحكيم",
      role: "مطور واجهات ومطور Full Stack",

      desc: `
      أنا أحمد عبد الحكيم، مطور Full Stack حاصل على بكالوريوس الحاسبات والذكاء الاصطناعي من جامعة حلوان.

      أمتلك أكثر من خمس سنوات من الخبرة في تطوير الواجهات الأمامية، حيث قمت بتطوير تطبيقات ويب حديثة وسريعة ومتجاوبة، مع خبرة في تنفيذ مشاريع تستهدف السوقين المصري والسعودي.

      كما أعمل أيضًا في تطوير الواجهات الخلفية باستخدام Laravel، مع التركيز على بناء أنظمة قوية، وقابلة للتوسع، وسهلة الصيانة وفقًا لأفضل الممارسات البرمجية.
      `,

      skills: {
        frontend: [
          "React",
          "Next.js",
          "JavaScript",
          "HTML5",
          "CSS3",
          "Bootstrap",
          "Tailwind CSS",
        ],
        backend: ["Laravel", "PHP", "Node.js", "REST APIs"],
        tools: ["Git", "GitHub", "Responsive Design"],
        concepts: ["System Analysis", "UML Diagrams", "Clean Architecture"],
      },

      projects: [
        {
          title: "نظام إدارة المحتوى (CMS)",
          desc: "تطوير أنظمة إدارة محتوى ديناميكية تتيح إدارة الصفحات والمحتوى والصلاحيات بسهولة.",
        },
        {
          title: "المواقع التعريفية",
          desc: "تصميم وتطوير مواقع تعريفية حديثة ومتجاوبة للشركات والأعمال مع التركيز على الأداء وتجربة المستخدم.",
        },
        {
          title: "منصة تعليم إلكتروني",
          desc: "تطوير منصات تعليمية تشمل إدارة الدورات، تسجيل الطلاب، متابعة التقدم، وربط أنظمة الدفع.",
        },
        {
          title: "متجر إلكتروني",
          desc: "منصة بيع متكاملة تشمل سلة المشتريات، تسجيل المستخدمين، الدفع الإلكتروني، ولوحة التحكم.",
        },
        {
          title: "لوحة تحكم إدارية",
          desc: "Dashboard لإدارة البيانات والمستخدمين مع عرض الإحصائيات والرسوم البيانية.",
        },
        {
          title: "نظام حجوزات",
          desc: "تطوير نظام حجز مواعيد متكامل مع تقويم لإدارة الحجوزات بسهولة.",
        },
      ],

    },
  };

  return (
    <div
      className="min-h-screen bg-[#0f172a] text-white pb-20"
      dir={lang === "ar" ? "rtl" : "ltr"}
    >
      {/* COVER */}
      <div className="relative h-64 w-full">
        <img src="/hero2.png" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* PROFILE */}
      <div className="flex justify-center -mt-16 relative z-10">
        <img
          src="/profile.png"
          className="w-40 h-40 rounded-full border-4 border-white shadow-xl object-cover"
        />
      </div>

      {/* INFO */}
      <div
        className="text-center mt-6 px-4"
        style={
          lang === "ar"
            ? { fontFamily: "'Tajawal', sans-serif" }
            : {}
        }
      >
        <h1 className="text-3xl font-bold">{content[lang].name}</h1>

        <p className="text-gray-400 mt-2">{content[lang].role}</p>

        <p className="max-w-xl mx-auto mt-4 text-gray-300 leading-7 whitespace-pre-line">
          {content[lang].desc}
        </p>
      </div>

      {/* SKILLS */}
      <div className="mt-12 px-6 max-w-4xl mx-auto">
        <h2 className="text-xl font-semibold mb-6">
          {lang === "ar" ? "المهارات" : "Skills"}
        </h2>

        {/* Frontend */}
        <div className="mb-6">
          <h3 className="text-gray-400 mb-2">Frontend</h3>
          <div className="flex flex-wrap gap-3">
            {content[lang].skills.frontend.map((skill, i) => (
              <span
                key={i}
                className="bg-slate-800 px-3 py-1 rounded-full text-sm"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Backend */}
        <div className="mb-6">
          <h3 className="text-gray-400 mb-2">Backend</h3>
          <div className="flex flex-wrap gap-3">
            {content[lang].skills.backend.map((skill, i) => (
              <span
                key={i}
                className="bg-slate-800 px-3 py-1 rounded-full text-sm"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Tools */}
        <div className="mb-6">
          <h3 className="text-gray-400 mb-2">Tools</h3>
          <div className="flex flex-wrap gap-3">
            {content[lang].skills.tools.map((skill, i) => (
              <span
                key={i}
                className="bg-slate-800 px-3 py-1 rounded-full text-sm"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Concepts */}
        <div className="mb-6">
          <h3 className="text-gray-400 mb-2">Concepts</h3>
          <div className="flex flex-wrap gap-3">
            {content[lang].skills.concepts.map((skill, i) => (
              <span
                key={i}
                className="bg-slate-800 px-3 py-1 rounded-full text-sm"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* PROJECTS */}
      <div className="mt-12 px-6 max-w-4xl mx-auto">
        <h2 className="text-xl font-semibold mb-4">
          {lang === "ar" ? "المشاريع" : "Projects"}
        </h2>

        <div className="grid md:grid-cols-2 gap-4">
          {content[lang].projects.map((p, i) => (
            <div
              key={i}
              className="bg-slate-900 p-4 rounded-xl border border-slate-700 hover:scale-[1.02] transition"
            >
              <h3 className="font-bold">{p.title}</h3>
              <p className="text-gray-400 text-sm mt-2">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* FOCUS */}
      <div className="mt-12 px-6 max-w-4xl mx-auto">
        <h2 className="text-xl font-semibold mb-4">
          {lang === "ar" ? "أركز على" : "Focus Areas"}
        </h2>

        <ul className="text-gray-300 space-y-2">
          <li>• UI/UX Clean Design</li>
          <li>• Performance Optimization</li>
          <li>• API Integration</li>
          <li>• Scalable Web Applications</li>
        </ul>
      </div>

   

    </div>
  );
}
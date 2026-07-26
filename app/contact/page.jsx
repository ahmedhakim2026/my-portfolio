"use client";

import { useEffect, useRef, useState } from "react";
import { useLanguage } from "@/context/LanguageContext";

export default function ContactPage() {
  const { lang } = useLanguage();
  const isAr = lang === "ar";

  /* ---------------------------------------------------------
     COPY (EN / AR)
  --------------------------------------------------------- */
  const t = {
    en: {
      eyebrow: "// open a connection",
      title: "Let's build something",
      titleAccent: "real.",
      sub: "Have a project, a role, or just an idea worth talking through? Drop a message — I read every line.",
      terminalLines: [
        "$ whoami",
        "Ahmed Hakim — Frontend / Full Stack Developer",
        "$ status --current",
        "available for new projects",
      ],
      fields: {
        name: "Your name",
        email: "Your email",
        message: "Tell me about the project",
      },
      placeholders: {
        name: "Ahmed Mostafa",
        email: "you@example.com",
        message: "I'm looking for someone to build...",
      },
      send: "Send message",
      sending: "Sending...",
      sent: "Message sent — talk soon!",
      reset: "Send another",
      direct: "Or reach me directly",
      copied: "Copied to clipboard",
      social: "Find me on",
      locationLabel: "Based in",
      location: "Maadi , Cairo, Egypt — working worldwide",
      availLabel: "Currently",
      avail: "Open to freelance & full-time roles",
    },
    ar: {
      eyebrow: "// فتح قناة تواصل",
      title: "خلينا نبني",
      titleAccent: "شي حقيقي.",
      sub: "عندك مشروع، وظيفة، أو حتى فكرة تستحق النقاش؟ اكتب رسالتك — بقرأ كل سطر.",
      terminalLines: [
        "$ whoami",
        "Ahmed Hakim — Frontend / Full Stack Developer",
        "$ status --current",
        "available for new projects",
      ],
      fields: {
        name: "اسمك",
        email: "بريدك الإلكتروني",
        message: "حدثني عن مشروعك",
      },
      placeholders: {
        name: "أحمد مصطفى",
        email: "you@example.com",
        message: "أبحث عن شخص يبني...",
      },
      send: "إرسال الرسالة",
      sending: "جاري الإرسال...",
      sent: "تم إرسال رسالتك — أتحدث معك قريبًا!",
      reset: "إرسال رسالة أخرى",
      direct: "أو تواصل معي مباشرة",
      copied: "تم النسخ",
      social: "تابعني على",
      locationLabel: "أقيم في",
      location: "القاهرة، مصر — أعمل عالميًا ",
      availLabel: "حاليًا",
      avail: "متاح للعمل الحر والوظائف الدائمة",
    },
  }[lang];

  /* ---------------------------------------------------------
     STATE
  --------------------------------------------------------- */
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("idle"); // idle | sending | sent
  const [copied, setCopied] = useState(false);
  const [typedLines, setTypedLines] = useState([]);
  const typedRef = useRef(false);

  const email = "ahmedhakimgamal98@gmail.com";

  // typewriter effect for the terminal block — runs once per language
  useEffect(() => {
    typedRef.current = false;
    setTypedLines([]);
    let cancelled = false;
    let lineIdx = 0;
    let charIdx = 0;
    const lines = t.terminalLines;
    const buffer = lines.map(() => "");

    function tick() {
      if (cancelled || lineIdx >= lines.length) return;
      const current = lines[lineIdx];
      charIdx++;
      buffer[lineIdx] = current.slice(0, charIdx);
      setTypedLines([...buffer]);
      if (charIdx >= current.length) {
        lineIdx++;
        charIdx = 0;
        setTimeout(tick, 280);
      } else {
        setTimeout(tick, 18);
      }
    }
    const start = setTimeout(tick, 400);
    return () => {
      cancelled = true;
      clearTimeout(start);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [lang]);

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) return;
    setStatus("sending");
    setTimeout(() => setStatus("sent"), 1400);
  }

  function handleCopy() {
    navigator.clipboard?.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 1800);
  }

  const socials = [
    { label: "GitHub", href: "https://github.com", icon: "github" },
    { label: "LinkedIn", href: "https://linkedin.com", icon: "linkedin" },
    { label: "WhatsApp", href: "https://wa.me/201151127192", icon: "whatsapp" },
  ];

  return (
    <div
      className="relative min-h-screen overflow-hidden bg-[#0f172a] text-white pb-24"
      dir={isAr ? "rtl" : "ltr"}
      style={isAr ? { fontFamily: "'Tajawal', sans-serif" } : {}}
    >
      <style>{`
        @keyframes floatSlow { 0%,100% { transform: translateY(0) } 50% { transform: translateY(-18px) } }
        @keyframes floatSlower { 0%,100% { transform: translateY(0) translateX(0) } 50% { transform: translateY(14px) translateX(10px) } }
        @keyframes glowPulse { 0%,100% { opacity:.35 } 50% { opacity:.7 } }
        @keyframes blink { 0%,100% { opacity:1 } 50% { opacity:0 } }
        @keyframes fadeUp { from { opacity:0; transform: translateY(16px) } to { opacity:1; transform: translateY(0) } }
        @keyframes borderSpin { to { --angle: 360deg } }
        @property --angle { syntax: '<angle>'; initial-value: 0deg; inherits: false; }
        .fade-up { animation: fadeUp .7s ease both; }
        .blob-a { animation: floatSlow 9s ease-in-out infinite; }
        .blob-b { animation: floatSlower 11s ease-in-out infinite; }
        .glow-pulse { animation: glowPulse 4s ease-in-out infinite; }
        .cursor-blink { animation: blink 1s step-end infinite; }
        .conic-border {
          background: conic-gradient(from var(--angle), #22d3ee, #2563eb, #22d3ee);
          animation: borderSpin 6s linear infinite;
        }
        @media (prefers-reduced-motion: reduce) {
          .fade-up, .blob-a, .blob-b, .glow-pulse, .cursor-blink, .conic-border { animation: none !important; }
        }
      `}</style>

      {/* ambient glow blobs */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="blob-a glow-pulse absolute -top-24 -left-20 h-72 w-72 rounded-full bg-blue-600/30 blur-3xl" />
        <div className="blob-b glow-pulse absolute top-1/3 -right-24 h-80 w-80 rounded-full bg-cyan-400/20 blur-3xl" />
        <div className="absolute bottom-0 left-1/3 h-64 w-64 rounded-full bg-indigo-500/10 blur-3xl" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 pt-20">
        {/* HEADER */}
        <div className="fade-up text-center max-w-2xl mx-auto">
          <span className="inline-block text-cyan-400 text-sm font-mono tracking-wide mb-4">
            {t.eyebrow}
          </span>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            {t.title}{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              {t.titleAccent}
            </span>
          </h1>
          <p className="text-gray-400 mt-4 leading-7">{t.sub}</p>
        </div>

        {/* TERMINAL — signature element */}
        <div
          className="fade-up mt-12 mx-auto max-w-xl rounded-xl bg-[#0b1120] border border-slate-800 shadow-2xl shadow-black/40 overflow-hidden"
          style={{ animationDelay: ".1s" }}
        >
          <div className="flex items-center gap-2 px-4 py-3 bg-slate-900/80 border-b border-slate-800">
            <span className="h-3 w-3 rounded-full bg-red-500/80" />
            <span className="h-3 w-3 rounded-full bg-yellow-500/80" />
            <span className="h-3 w-3 rounded-full bg-green-500/80" />
            <span className="ml-2 text-xs text-gray-500 font-mono" dir="ltr">
              contact.sh.hakim
            </span>
          </div>
          <div className="p-5 font-mono text-sm leading-7 text-left" dir="ltr">
            {t.terminalLines.map((line, i) => (
              <div key={i} className={line.startsWith("$") ? "text-cyan-400" : "text-gray-300 ps-4"}>
                {typedLines[i] || ""}
                {typedLines[i] !== undefined &&
                  typedLines[i].length < line.length &&
                  i === typedLines.findIndex((l) => l.length < t.terminalLines[typedLines.indexOf(l)]?.length) && (
                    <span className="cursor-blink">▌</span>
                  )}
              </div>
            ))}
            {typedLines.length === t.terminalLines.length &&
              typedLines[t.terminalLines.length - 1]?.length ===
                t.terminalLines[t.terminalLines.length - 1].length && (
                <span className="cursor-blink text-cyan-400">▌</span>
              )}
          </div>
        </div>

        {/* MAIN GRID: form + side info */}
        <div className="mt-14 grid md:grid-cols-5 gap-8">
          {/* FORM with animated conic border */}
          <div
            className="fade-up md:col-span-3 rounded-2xl p-[2px] conic-border"
            style={{ animationDelay: ".2s" }}
          >
            <div className="rounded-2xl bg-slate-900 p-6 md:p-8 h-full">
              {status !== "sent" ? (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <Field
                    label={t.fields.name}
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder={t.placeholders.name}
                  />
                  <Field
                    label={t.fields.email}
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder={t.placeholders.email}
                  />
                  <div>
                    <label className="block text-sm text-gray-400 mb-1">
                      {t.fields.message}
                    </label>
                    <textarea
                      name="message"
                      rows={5}
                      value={form.message}
                      onChange={handleChange}
                      placeholder={t.placeholders.message}
                      className="w-full bg-slate-800/70 border border-slate-700 rounded-lg px-4 py-3 text-sm outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/30 transition placeholder:text-gray-500 resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={status === "sending"}
                    className="w-full md:w-auto inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 disabled:opacity-70 disabled:cursor-not-allowed px-7 py-3 rounded-full font-medium transition"
                  >
                    {status === "sending" && (
                      <span className="h-4 w-4 rounded-full border-2 border-white/40 border-t-white animate-spin" />
                    )}
                    {status === "sending" ? t.sending : t.send}
                  </button>
                </form>
              ) : (
                <div className="fade-up flex flex-col items-center justify-center text-center h-full py-10">
                  <div className="h-14 w-14 rounded-full bg-green-500/15 flex items-center justify-center mb-4">
                    <svg
                      className="h-7 w-7 text-green-400"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="text-lg font-medium">{t.sent}</p>
                  <button
                    onClick={() => {
                      setForm({ name: "", email: "", message: "" });
                      setStatus("idle");
                    }}
                    className="mt-5 text-sm text-cyan-400 hover:text-cyan-300 underline underline-offset-4"
                  >
                    {t.reset}
                  </button>
                </div>
              )}
            </div>
          </div>

          {/* SIDE INFO */}
          <div
            className="fade-up md:col-span-2 space-y-4"
            style={{ animationDelay: ".3s" }}
          >
            <InfoCard label={t.availLabel} value={t.avail} dot="green" />
            <InfoCard label={t.locationLabel} value={t.location} dot="blue" />

            <div className="bg-slate-900 border border-slate-800 rounded-xl p-5">
              <p className="text-sm text-gray-400 mb-2">{t.direct}</p>
              <button
                onClick={handleCopy}
                className="group w-full flex items-center justify-between gap-2 bg-slate-800/70 hover:bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 text-sm transition"
                dir="ltr"
              >
                <span className="truncate">{email}</span>
                <span className="text-xs text-cyan-400 shrink-0">
                  {copied ? t.copied : isAr ? "نسخ" : "Copy"}
                </span>
              </button>
            </div>

            <div className="bg-slate-900 border border-slate-800 rounded-xl p-5">
              <p className="text-sm text-gray-400 mb-3">{t.social}</p>
              <div className="flex gap-3">
                {socials.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={s.label}
                    className="h-11 w-11 flex items-center justify-center rounded-full bg-slate-800/70 border border-slate-700 hover:border-cyan-400 hover:text-cyan-400 transition"
                  >
                    <SocialIcon name={s.icon} />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ---------------------------------------------------------
   SUBCOMPONENTS
--------------------------------------------------------- */
function Field({ label, name, value, onChange, placeholder, type = "text" }) {
  return (
    <div>
      <label className="block text-sm text-gray-400 mb-1">{label}</label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required
        className="w-full bg-slate-800/70 border border-slate-700 rounded-lg px-4 py-3 text-sm outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/30 transition placeholder:text-gray-500"
      />
    </div>
  );
}

function InfoCard({ label, value, dot }) {
  const dotColor = dot === "green" ? "bg-green-400" : "bg-blue-400";
  return (
    <div className="bg-slate-900 border border-slate-800 rounded-xl p-5 flex items-start gap-3">
      <span className={`mt-1.5 h-2.5 w-2.5 rounded-full ${dotColor} shrink-0`} />
      <div>
        <p className="text-xs text-gray-500 uppercase tracking-wide">{label}</p>
        <p className="text-sm text-gray-200 mt-1">{value}</p>
      </div>
    </div>
  );
}

function SocialIcon({ name }) {
  const paths = {
    github:
      "M12 0C5.37 0 0 5.4 0 12.07c0 5.32 3.44 9.83 8.2 11.42.6.11.82-.26.82-.58v-2.17c-3.34.73-4.04-1.6-4.04-1.6-.55-1.4-1.34-1.78-1.34-1.78-1.1-.75.08-.74.08-.74 1.22.09 1.86 1.25 1.86 1.25 1.08 1.85 2.84 1.32 3.53 1 .11-.79.42-1.32.76-1.62-2.66-.3-5.47-1.34-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.13-.3-.54-1.53.12-3.18 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 016 0c2.29-1.55 3.3-1.23 3.3-1.23.66 1.65.25 2.88.12 3.18.77.84 1.24 1.91 1.24 3.22 0 4.6-2.82 5.63-5.5 5.93.43.37.81 1.1.81 2.22v3.29c0 .32.22.7.83.58A12.06 12.06 0 0024 12.07C24 5.4 18.63 0 12 0z",
    linkedin:
      "M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.03-1.85-3.03-1.85 0-2.14 1.45-2.14 2.94v5.66H9.36V9h3.41v1.56h.05c.47-.9 1.64-1.85 3.38-1.85 3.6 0 4.27 2.37 4.27 5.47v6.27zM5.34 7.43a2.07 2.07 0 110-4.13 2.07 2.07 0 010 4.13zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0z",
    whatsapp:
      "M17.5 14.4c-.3-.15-1.7-.84-2-.94-.27-.1-.46-.15-.66.15-.2.3-.76.94-.93 1.13-.17.2-.34.22-.63.07-.3-.15-1.26-.46-2.4-1.48-.89-.8-1.48-1.78-1.66-2.08-.17-.3-.02-.46.13-.62.15-.15.3-.39.46-.59.15-.2.2-.34.3-.56.1-.22.05-.4-.05-.56-.1-.15-.6-1.45-.82-1.98-.22-.53-.45-.46-.62-.46-.16 0-.35-.02-.54-.02-.2 0-.5.07-.76.37-.27.3-1.03 1-1.03 2.43 0 1.44 1.05 2.83 1.2 3.03.15.2 2.04 3.12 4.95 4.25 2.9 1.13 2.9.76 3.43.71.53-.05 1.7-.7 1.95-1.37.24-.66.24-1.23.17-1.37-.07-.13-.27-.22-.57-.37z M12 0C5.37 0 0 5.37 0 12c0 2.1.55 4.07 1.5 5.78L0 24l6.4-1.46A11.93 11.93 0 0012 24c6.63 0 12-5.37 12-12S18.63 0 12 0z",
  };
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current">
      <path d={paths[name]} />
    </svg>
  );
}
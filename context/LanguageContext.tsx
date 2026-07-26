"use client";

import { createContext, useContext, useEffect, useState } from "react";


type Lang = "en" | "ar";

const LanguageContext = createContext<any>(null);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = useState<Lang>("en");

  const toggleLang = () => {
    setLang((prev) => (prev === "en" ? "ar" : "en"));
    console.log('string test lang' , lang)
  };

  useEffect(() => {
  console.log("Language Changed:", lang);
}, [lang]);

  return (
    <LanguageContext.Provider value={{ lang, toggleLang }}>
      {children}
    </LanguageContext.Provider>
  );
}

export const useLanguage = () => useContext(LanguageContext);
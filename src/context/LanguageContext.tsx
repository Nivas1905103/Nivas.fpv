"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

export type Language = "en" | "ta";

export interface Translations {
  // Navigation / Common
  navBook: string;
  langLabel: string;

  // Hero Section
  heroRole: string;
  heroBadgeDgca: string;
  heroBadgePanIndia: string;
  heroTitle1: string;
  heroTitle2: string;
  heroTagline: string;
  heroSubtitle: string;
  heroCtaWork: string;
  heroCtaContact: string;

  // About Section
  aboutEyebrow: string;
  aboutTitle: string;
  aboutRoleBadge: string;
  aboutBio: string;
  aboutSpecsRole: string;
  aboutSpecsLocation: string;
  aboutSpecsDelivery: string;
  aboutSpecsMobility: string;

  // Serving Tamil Nadu Section
  tnEyebrow: string;
  tnTitle: string;
  tnDesc: string;
  tnWeddingTitle: string;
  tnWeddingDesc: string;
  tnRealEstateTitle: string;
  tnRealEstateDesc: string;
  tnViewCaseStudy: string;

  // Contact Section
  contactEyebrow: string;
  contactTitle: string;
  contactSubtitle: string;
  contactButton: string;
}

const translations: Record<Language, Translations> = {
  en: {
    navBook: "Book a Project",
    langLabel: "தமிழ்",

    heroRole: "FPV Drone Cinematographer & Editor",
    heroBadgeDgca: "DGCA Approved Pilot in India",
    heroBadgePanIndia: "Available across Tamil Nadu & India",
    heroTitle1: "FPV DRONE",
    heroTitle2: "CINEMATOGRAPHY.",
    heroTagline: "I don't just fly drones. I create perspectives.",
    heroSubtitle:
      "High-speed perspectives, 6-axis dynamic camera movement, and precision manual flight crafted for commercial films, automotive campaigns, luxury architecture, and brand experiences.",
    heroCtaWork: "View My Work",
    heroCtaContact: "Book a Project",

    aboutEyebrow: "About / 01",
    aboutTitle: "Nivas.",
    aboutRoleBadge: "FPV Drone Cinematographer • Editor • Visual Storyteller",
    aboutBio:
      "Merging high-speed aviation discipline with visceral cinematic storytelling. Based in Tamil Nadu and operating across India, I create physical camera movement that conventional cameras, cranes, and standard drones cannot replicate—elevating commercial films, brand campaigns, and architectural walkthroughs.",
    aboutSpecsRole: "Cinematographer",
    aboutSpecsLocation: "Tamil Nadu, India",
    aboutSpecsDelivery: "4K Master / Raw",
    aboutSpecsMobility: "Pan-India Ready",

    tnEyebrow: "Regional Spotlight // Tamil Nadu",
    tnTitle: "Serving Tamil Nadu.",
    tnDesc:
      "Direct on-location FPV cinematography across Coimbatore, Chennai, Madurai, Trichy, Salem, Theni, and Tirupur. Bringing Hollywood-grade dynamic flight vectors and 4K 10-bit D-Log captures to regional cinema, commercial developments, and high-profile celebrations.",
    tnWeddingTitle: "A Grandeur Wedding — Theni",
    tnWeddingDesc:
      "Cinematic FPV wedding film capturing the celebration and lush natural scenery of Theni with sweeping continuous takes.",
    tnRealEstateTitle: "Real Estate Commercials — Theni",
    tnRealEstateDesc:
      "High-energy architectural showcase diving through multi-acre developments for GBM Construction.",
    tnViewCaseStudy: "View Case Study →",

    contactEyebrow: "Start a Conversation",
    contactTitle: "Let's Create Something Unforgettable.",
    contactSubtitle:
      "Available for commercial productions, automotive shoots, luxury real estate, and brand campaigns across Tamil Nadu and all of India.",
    contactButton: "Send Inquiry",
  },
  ta: {
    navBook: "திட்டத்தைத் தொடங்க",
    langLabel: "English",

    heroRole: "FPV ட்ரோன் ஒளிப்பதிவாளர் & எடிட்டர்",
    heroBadgeDgca: "DGCA அங்கீகரிக்கப்பட்ட பைலட் // இந்தியா",
    heroBadgePanIndia: "தமிழ்நாடு & இந்தியா முழுவதும் சேவை",
    heroTitle1: "FPV ட்ரோன்",
    heroTitle2: "சினிமா ஒளிப்பதிவு.",
    heroTagline: "நான் ட்ரோன்களை மட்டும் பறக்கவிடுவதில்லை. புதிய பார்வைகளை உருவாக்குகிறேன்.",
    heroSubtitle:
      "திரைப்படங்கள், பிராண்ட் விளம்பரங்கள், ரியல் எஸ்டேட் மற்றும் பிரம்மாண்ட நிகழ்வுகளுக்கான அதிவேக 6-ஆக்சிஸ் FPV சினிமா காட்சிகள் மற்றும் DaVinci கலர் கிரேடிங்.",
    heroCtaWork: "படைப்புகளைக் காண்க",
    heroCtaContact: "திட்டத்தைத் தொடங்க",

    aboutEyebrow: "அறிமுகம் / 01",
    aboutTitle: "நிவாஸ்.",
    aboutRoleBadge: "FPV ட்ரோன் ஒளிப்பதிவாளர் • எடிட்டர் • கதைசொல்லி",
    aboutBio:
      "அதிவேக விமான ஒழுக்கத்துடன் சினிமா கதைசொல்லலை இணைக்கும் கலை. தமிழ்நாட்டைத் தளமாகக் கொண்டு இந்தியா முழுவதும் இயங்கி, பாரம்பரிய கேமராக்களால் பிடிக்க முடியாத அதிவேக காட்சிகளை உருவாக்கி, விளம்பரப் படங்கள் மற்றும் பிரம்மாண்ட கட்டிடக் கலைக்கு உயிரூட்டுகிறேன்.",
    aboutSpecsRole: "ஒளிப்பதிவாளர்",
    aboutSpecsLocation: "தமிழ்நாடு, இந்தியா",
    aboutSpecsDelivery: "4K மாஸ்டர் / Raw",
    aboutSpecsMobility: "அனைத்து இடங்களுக்கும் தயார்",

    tnEyebrow: "தமிழ்நாடு பிராந்திய சேவை",
    tnTitle: "தமிழ்நாடு முழுவதும் சினிமா தர FPV.",
    tnDesc:
      "கோயம்புத்தூர், சென்னை, மதுரை, திருச்சி, சேலம், தேனி, திருப்பூர் உள்ளிட்ட தமிழ்நாடு முழுவதும் நேரடி FPV சினிமா படப்பிடிப்பு. திரைப்படங்கள், ரியல் எஸ்டேட் மற்றும் ஆடம்பர திருமணங்களுக்கான 4K D-Log காட்சிகள்.",
    tnWeddingTitle: "பிரம்மாண்ட திருமணம் — தேனி",
    tnWeddingDesc:
      "தேனியின் இயற்கை அழகையும் திருமணக் கொண்டாட்டங்களையும் அதிவேக FPV ட்ரோன் மூலம் பதிவு செய்த சினிமா அனுபவம்.",
    tnRealEstateTitle: "ரியல் எஸ்டேட் விளம்பரம் — தேனி",
    tnRealEstateDesc:
      "GBM கன்ஸ்ட்ரக்ஷன் நிறுவனத்தின் புதிய பிரம்மாண்ட கட்டுமானங்களை FPV ட்ரோன் மூலம் காட்சிப்படுத்திய விளம்பரப் படம்.",
    tnViewCaseStudy: "கேஸ் ஸ்டடி பார்க்க →",

    contactEyebrow: "தொடர்பு கொள்ள",
    contactTitle: "மறக்கமுடியாத காட்சிகளை உருவாக்குவோம்.",
    contactSubtitle:
      "தமிழ்நாடு மற்றும் இந்தியா முழுவதும் சினிமா, விளம்பரம் மற்றும் நிகழ்வு படப்பிடிப்புகளுக்கு உடனடியாக அணுகலாம்.",
    contactButton: "தகவல் அனுப்ப",
  },
};

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  toggleLanguage: () => void;
  t: Translations;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>("en");

  useEffect(() => {
    try {
      const saved = localStorage.getItem("nivas_lang") as Language | null;
      if (saved === "en" || saved === "ta") {
        setLanguageState(saved);
      }
    } catch {}
  }, []);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    try {
      localStorage.setItem("nivas_lang", lang);
    } catch {}
  };

  const toggleLanguage = () => {
    setLanguage(language === "en" ? "ta" : "en");
  };

  return (
    <LanguageContext.Provider
      value={{
        language,
        setLanguage,
        toggleLanguage,
        t: translations[language],
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    // Fallback to English if used outside provider
    return {
      language: "en" as Language,
      setLanguage: () => {},
      toggleLanguage: () => {},
      t: translations.en,
    };
  }
  return context;
}

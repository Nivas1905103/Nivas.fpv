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

    heroRole: "Drone Pilot & Aerial Cinematographer",
    heroBadgeDgca: "DGCA Certified Remote Pilot",
    heroBadgePanIndia: "Based in Theni • Serving Tamil Nadu & India",
    heroTitle1: "FPV DRONE",
    heroTitle2: "CINEMATOGRAPHY.",
    heroTagline: "I don't just fly drones. I create perspectives.",
    heroSubtitle:
      "Cinematic aerial filming, camera-drone videography, and dynamic FPV cinematography crafted for commercial films, real estate, automotive campaigns, and brand experiences across Theni, Tamil Nadu, and India.",
    heroCtaWork: "View My Work",
    heroCtaContact: "Book a Shoot",

    aboutEyebrow: "About / 01",
    aboutTitle: "Nivas.",
    aboutRoleBadge: "Certified Drone Pilot • Aerial Cinematographer • Video Editor",
    aboutBio:
      "DGCA-certified drone pilot based in Theni, Tamil Nadu, operating across India. Merging aviation discipline with cinematic storytelling, I provide dynamic camera-drone filming, DJI Air 3 footage, and high-speed FPV aerial cinematography—elevating commercial films, brand campaigns, real estate, and architectural projects.",
    aboutSpecsRole: "Drone Pilot & Editor",
    aboutSpecsLocation: "Theni, Tamil Nadu",
    aboutSpecsDelivery: "4K Master / Raw",
    aboutSpecsMobility: "Pan-India Ready",

    tnEyebrow: "Regional Spotlight // Tamil Nadu",
    tnTitle: "Serving Tamil Nadu.",
    tnDesc:
      "Professional drone services and cinematic aerial filming across Theni, Madurai, Coimbatore, Chennai, Trichy, Salem, and Tirupur. Delivering camera-drone videography, dynamic FPV flight, and 4K 10-bit D-Log captures for commercial developments, cinema, and high-profile celebrations in Tamil Nadu.",
    tnWeddingTitle: "A Grandeur Wedding — Theni",
    tnWeddingDesc:
      "Cinematic wedding drone videography capturing the celebration and scenic landscapes of Theni with sweeping continuous takes.",
    tnRealEstateTitle: "Real Estate Commercials — Theni",
    tnRealEstateDesc:
      "High-energy commercial real estate drone filming diving through multi-acre developments for GBM Construction in Theni.",
    tnViewCaseStudy: "View Case Study →",

    contactEyebrow: "Start a Conversation",
    contactTitle: "Let's Create Something Unforgettable.",
    contactSubtitle:
      "Available for commercial drone filming, aerial cinematography, real estate walkthroughs, and brand shoots in Theni, across Tamil Nadu, and nationwide.",
    contactButton: "Send Inquiry",
  },
  ta: {
    navBook: "திட்டத்தைத் தொடங்க",
    langLabel: "English",

    heroRole: "ட்ரோன் பைலட் & சினிமா ஒளிப்பதிவாளர்",
    heroBadgeDgca: "DGCA சான்றளிக்கப்பட்ட பைலட் // இந்தியா",
    heroBadgePanIndia: "தேனி தளம் • தமிழ்நாடு & இந்தியா முழுவதும் சேவை",
    heroTitle1: "FPV ட்ரோன்",
    heroTitle2: "சினிமா ஒளிப்பதிவு.",
    heroTagline: "நான் ட்ரோன்களை மட்டும் பறக்கவிடுவதில்லை. புதிய பார்வைகளை உருவாக்குகிறேன்.",
    heroSubtitle:
      "திரைப்படங்கள், பிராண்ட் விளம்பரங்கள், ரியல் எஸ்டேட் மற்றும் பிரம்மாண்ட நிகழ்வுகளுக்கான அதிவேக FPV மற்றும் கேமரா ட்ரோன் சினிமா காட்சிகள் மற்றும் DaVinci கலர் கிரேடிங்.",
    heroCtaWork: "படைப்புகளைக் காண்க",
    heroCtaContact: "திட்டத்தைத் தொடங்க",

    aboutEyebrow: "அறிமுகம் / 01",
    aboutTitle: "நிவாஸ்.",
    aboutRoleBadge: "சான்றளிக்கப்பட்ட ட்ரோன் பைலட் • ஒளிப்பதிவாளர் • எடிட்டர்",
    aboutBio:
      "தேனியைத் தளமாகக் கொண்டு இந்தியா முழுவதும் இயங்கும் DGCA சான்றளிக்கப்பட்ட ட்ரோன் பைலட். சினிமா கேமரா-ட்ரோன், DJI Air 3 மற்றும் அதிவேக FPV காட்சிகளுடன் விளம்பரப் படங்கள் மற்றும் ரியல் எஸ்டேட் திட்டங்களை பிரம்மாண்டமாகப் படமாக்குகிறேன்.",
    aboutSpecsRole: "ட்ரோன் ஒளிப்பதிவாளர்",
    aboutSpecsLocation: "தேனி, தமிழ்நாடு",
    aboutSpecsDelivery: "4K மாஸ்டர் / Raw",
    aboutSpecsMobility: "அனைத்து இடங்களுக்கும் தயார்",

    tnEyebrow: "தமிழ்நாடு பிராந்திய சேவை",
    tnTitle: "தமிழ்நாடு முழுவதும் சினிமா தர ட்ரோன் சேவை.",
    tnDesc:
      "தேனி, மதுரை, கோயம்புத்தூர், சென்னை, திருச்சி, சேலம், திருப்பூர் உள்ளிட்ட தமிழ்நாடு முழுவதும் தொழில்முறை ட்ரோன் சினிமா படப்பிடிப்பு. திரைப்படங்கள், ரியல் எஸ்டேட் மற்றும் ஆடம்பர திருமணங்களுக்கான 4K D-Log காட்சிகள்.",
    tnWeddingTitle: "பிரம்மாண்ட திருமணம் — தேனி",
    tnWeddingDesc:
      "தேனியின் இயற்கை அழகையும் திருமணக் கொண்டாட்டங்களையும் ட்ரோன் மூலம் பதிவு செய்த சினிமா அனுபவம்.",
    tnRealEstateTitle: "ரியல் எஸ்டேட் விளம்பரம் — தேனி",
    tnRealEstateDesc:
      "தேனியில் GBM கன்ஸ்ட்ரக்ஷன் நிறுவனத்தின் புதிய பிரம்மாண்ட கட்டுமானங்களை ட்ரோன் மூலம் காட்சிப்படுத்திய விளம்பரப் படம்.",
    tnViewCaseStudy: "கேஸ் ஸ்டடி பார்க்க →",

    contactEyebrow: "தொடர்பு கொள்ள",
    contactTitle: "மறக்கமுடியாத காட்சிகளை உருவாக்குவோம்.",
    contactSubtitle:
      "தேனி, தமிழ்நாடு மற்றும் இந்தியா முழுவதும் சினிமா, விளம்பரம் மற்றும் நிகழ்வு படப்பிடிப்புகளுக்கு உடனடியாக அணுகலாம்.",
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
        // eslint-disable-next-line react-hooks/set-state-in-effect
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

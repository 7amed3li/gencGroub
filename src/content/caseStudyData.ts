export type Language = "tr" | "ar" | "en";
export type DesignMode = "massing" | "materials" | "atmosphere";

export type ConceptCopy = {
  title: string;
  subtitle: string;
  badge: string;
};

export type CaseStudyTranslation = {
  metaTitle: string;
  metaDescription: string;
  languageName: string;
  languageSelector: string;
  selectedLanguage: string;
  nav: {
    label: string;
    approach: string;
    explore: string;
    process: string;
    contact: string;
    openMenu: string;
    closeMenu: string;
    home: string;
  };
  hero: {
    eyebrow: string;
    title: string;
    italic: string;
    description: string;
    explore: string;
    contact: string;
    meeting: string;
    city: string;
    visual: string;
    scroll: string;
  };
  project: {
    aria: string;
    dossier: string;
    title: string;
    workType: string;
    workValue: string;
    category: string;
    categoryValue: string;
    language: string;
    languageValue: string;
  };
  approach: {
    eyebrow: string;
    keywords: string;
    titleBefore: string;
    titleEmphasis: string;
    titleAfter: string;
    lead: string;
    description: string;
    explore: string;
    note: string;
    noteEmphasis: string;
    noteEnd: string;
  };
  lab: {
    eyebrow: string;
    index: string;
    kicker: string;
    titleStart: string;
    titleEmphasis: string;
    description: string;
    modeGroup: string;
    optionGroup: string;
    disclaimer: string;
    disclaimerSmall: string;
    viewerLabel: string;
    viewerLive: string;
    study: string;
    notForConstruction: string;
    city: string;
    concept: string;
    exploreDesign: string;
    stage: string;
    modes: Record<DesignMode, string>;
    options: Record<DesignMode, ConceptCopy[]>;
  };
  materials: {
    eyebrow: string;
    titleStart: string;
    titleEmphasis: string;
    description: string;
    imageLabel: string;
    stone: string;
    concrete: string;
    glass: string;
    compare: string;
  };
  process: {
    eyebrow: string;
    descriptor: string;
    titleStart: string;
    titleEmphasis: string;
    description: string;
    stages: { title: string; description: string }[];
    footnoteLabel: string;
    footnote: string;
  };
  closing: {
    eyebrow: string;
    line1: string;
    line2: string;
    italic: string;
    line3: string;
    contact: string;
    sideNote: string;
  };
  footer: {
    tagline: string;
    home: string;
    copyright: string;
    brandAria: string;
  };
  imageAlt: {
    hero: string;
    concept: (title: string) => string;
    material: string;
  };
};

export const caseStudyModes: { id: DesignMode; number: string }[] = [
  { id: "massing", number: "01" },
  { id: "materials", number: "02" },
  { id: "atmosphere", number: "03" },
];

/**
 * Concept image configuration with local high-resolution architectural assets.
 * Also supports custom files if placed under /images/case-study/.
 */
export const CASE_STUDY_IMAGES = {
  hero: "/images/hero-construction.png",
  materialStory: "/images/architecture-limestone.jpg",
  closing: "/images/hero-construction.png",
  concepts: {
    massing: [
      "/images/arch-study-1.png",
      "/images/exploded-architecture-4k.jpg",
    ],
    materials: [
      "/images/architecture-limestone.jpg",
      "/images/arch-study-1.png",
    ],
    atmosphere: [
      "/images/hero-construction.png",
      "/images/architecture-limestone.jpg",
    ],
  } as Record<DesignMode, string[]>,
};

export const caseStudyTranslations: Record<Language, CaseStudyTranslation> = {
  tr: {
    metaTitle: "Hamed Mohamed — 3D & AI Dijital Mimari Vaka Çalışması | Creative Dev",
    metaDescription:
      "Hamed Mohamed tarafından geliştirilen etkileşimli 3D ve AI destekli mekânsal mimari konsept stüdyosu ve yazılım mühendisliği vaka çalışması.",
    languageName: "Türkçe",
    languageSelector: "Dil seçimi",
    selectedLanguage: "seçili",
    nav: {
      label: "Ana gezinme",
      approach: "Yaklaşım",
      explore: "3D Konsepti Keşfet",
      process: "Süreç",
      contact: "Hamed Mohamed ile İletişim",
      openMenu: "Menüyü aç",
      closeMenu: "Menüyü kapat",
      home: "Hamed Mohamed · Portfolyo",
    },
    hero: {
      eyebrow: "HAMED MOHAMED · CREATIVE TECH & 3D STUDIO",
      title: "Fikirlerinize hayat veren",
      italic: "etkileşimli mimari.",
      description:
        "Yazılım mühendisi Hamed Mohamed tarafından tasarlanan; kütleyi, malzemeyi ve ışığı gerçek zamanlı olarak dönüştüren etkileşimli mimari konsept çalışması.",
      explore: "3D Konsepti Keşfet",
      contact: "Geliştirici Hamed Mohamed ile İletişime Geçin",
      meeting: "Projenizi konuşalım",
      city: "HAMED MOHAMED · 2026",
      visual: "KONSEPT & GELİŞTİRME",
      scroll: "SCROLL TO EXPLORE",
    },
    project: {
      aria: "Konsept bilgileri",
      dossier: "GELİŞTİRİCİ PORTFOLYO DOSYASI",
      title: "3D & AI İnteraktif Mimari Keşif Laboratuvarı",
      workType: "GELİŞTİRİCİ & TASARIMCI",
      workValue: "Hamed Mohamed (hamedmohamed.dev)",
      category: "DİJİTAL MİMARİ & WEB",
      categoryValue: "Creative Tech & 3D Web",
      language: "MİMARİ DİL",
      languageValue: "Taş · beton · cam",
    },
    approach: {
      eyebrow: "TASARIM & YAZILIM YAKLAŞIMI",
      keywords: "KOD · MEKÂN · ETKİLEŞİM",
      titleBefore: "Bir yapıdan önce,",
      titleEmphasis: "dijital deneyimin ritmi",
      titleAfter: "başlar.",
      lead: "Geleceğin dijital platformları yalnızca statik görsellerle değil, kullanıcının doğrudan deneyimlediği etkileşimli teknolojilerle değer kazanır.",
      description:
        "Bu konsept çalışması; yaratıcı ön yüz mühendisliğini, parametrik 3D mimari kütleleri ve gerçek zamanlı atmosfer değişimlerini tek bir kusursuz web deneyiminde birleştirir.",
      explore: "Tasarım alternatiflerini incele",
      note: "Bu vaka çalışması ve etkileşimli 3D/AI görsel stüdyosu, yazılım mühendisi ve yaratıcı geliştirici Hamed Mohamed tarafından tasarlanıp kodlanmıştır.",
      noteEmphasis: "Özel dijital mühendislik ve yaratıcı web teknolojileri portfolyosu olarak sunulmaktadır.",
      noteEnd: "",
    },
    lab: {
      eyebrow: "HAMED MOHAMED · AI & 3D KONSEPT STÜDYOSU",
      index: "HM / LAB-01",
      kicker: "BİR TASARIM, FARKLI OLASILIKLAR",
      titleStart: "Fikri",
      titleEmphasis: "şekillendir.",
      description:
        "Kütleyi, cephe karakterini ve ışığı değiştir. Mimari kararların atmosferi nasıl dönüştürdüğünü keşfet.",
      modeGroup: "Tasarım alanı",
      optionGroup: "seçenekleri",
      disclaimer: "AI destekli konsept görselleştirme",
      disclaimerSmall: "Uygulama çizimi değildir.",
      viewerLabel: "Kavramsal mimari görselleştirme",
      viewerLive: "CANLI KONSEPT GÖRÜNÜMÜ",
      study: "GÖRSEL ÇALIŞMA",
      notForConstruction: "UYGULAMA PROJESİ DEĞİLDİR",
      city: "İSTANBUL",
      concept: "KONSEPT",
      exploreDesign: "TASARIMI KEŞFET",
      stage: "01 — 03",
      modes: { massing: "Kütle", materials: "Malzeme", atmosphere: "Atmosfer" },
      options: {
        massing: [
          {
            title: "Katmanlı kurgu",
            subtitle: "Yatay kaide ve güçlü bir üst kütle.",
            badge: "KÜTLE ALTERNATİFİ A",
          },
          {
            title: "Avlulu kurgu",
            subtitle: "Bir iç avlu etrafında birleşen hacimler.",
            badge: "KÜTLE ALTERNATİFİ B",
          },
        ],
        materials: [
          {
            title: "Traverten & bronz",
            subtitle: "Sıcak taş, derin gölge ve ince metal detaylar.",
            badge: "MALZEME ALTERNATİFİ A",
          },
          {
            title: "Grafit beton & cam",
            subtitle: "Daha monolitik bir yüzey ve kontrollü yansıma.",
            badge: "MALZEME ALTERNATİFİ B",
          },
        ],
        atmosphere: [
          {
            title: "Gün sonu",
            subtitle: "Taş dokusunu öne çıkaran sıcak doğal ışık.",
            badge: "IŞIK SENARYOSU A",
          },
          {
            title: "Mavi saat",
            subtitle: "İç mekân ışığının cepheyle kurduğu denge.",
            badge: "IŞIK SENARYOSU B",
          },
        ],
      },
    },
    materials: {
      eyebrow: "MALZEME DİLİ",
      titleStart: "Doku, ışıkla",
      titleEmphasis: "tamamlanır.",
      description:
        "Travertenin doğal sıcaklığı, brüt betonun güçlü yüzeyi ve camın şeffaflığı; bu konseptte birbiriyle yarışmadan aynı cephede buluşur.",
      imageLabel: "MALZEME ÇALIŞMASI",
      stone: "Doğal taş",
      concrete: "Brüt beton",
      glass: "Cam",
      compare: "Malzeme alternatiflerini karşılaştır",
    },
    process: {
      eyebrow: "YARATICI SÜREÇ",
      descriptor: "FİKİRDEN ETKİLEŞİMLİ GERÇEKLİĞE",
      titleStart: "Doğru kararlar",
      titleEmphasis: "en başta verilir.",
      description:
        "3D ve AI destekli etkileşimli konseptler, mimari ve yazılım projelerinde kararların hızla somutlaşmasını sağlar. Ekipler ve karar vericiler için ortak bir vizyon sunar.",
      stages: [
        {
          title: "İhtiyacı tanımla",
          description:
            "Kullanım senaryolarını ve mekânsal öncelikleri netleştir.",
        },
        {
          title: "Kütleyi ve etkileşimi kur",
          description: "Hacim alternatiflerini ve dijital etkileşim akışını belirle.",
        },
        {
          title: "Malzeme ve atmosferi işle",
          description:
            "Işık, doku ve kullanıcı etkileşimini gerçek zamanlı optimize et.",
        },
        {
          title: "Birlikte hayata geçir",
          description:
            "Yüksek performanslı, akılda kalıcı bir dijital deneyim üret.",
        },
      ],
      footnoteLabel: "GELİŞTİRİCİ NOTU",
      footnote:
        "Bu çalışma Hamed Mohamed tarafından özel tasarım & yazılım mühendisliği kabiliyetlerini sergilemek üzere oluşturulmuştur.",
    },
    closing: {
      eyebrow: "HAMED MOHAMED · CREATIVE TECH & ARCHITECTURAL DEV",
      line1: "Bir sonraki",
      line2: "büyük fikrinizi",
      italic: "birlikte",
      line3: "inşa edelim.",
      contact: "Hamed Mohamed ile İletişime Geçin",
      sideNote: "HAMED MOHAMED · CREATIVE TECHNOLOGIST & LEAD DEVELOPER · 2026",
    },
    footer: {
      tagline: "Modern dijital deneyimler, yaratıcı kod ve vizyoner fikirlerle inşa edilir.",
      home: "hamedmohamed.dev'i Ziyaret Edin",
      copyright: "© 2026 HAMED MOHAMED · TÜM HAKLARI SAKLIDIR",
      brandAria: "Hamed Mohamed, sayfanın başına dön",
    },
    imageAlt: {
      hero: "Hamed Mohamed tarafından hazırlanan kavramsal mimari görselleştirmesi",
      concept: (title) =>
        `${title} seçeneği için kavramsal mimari görselleştirme`,
      material:
        "Ticari cephe konseptinde traverten, brüt beton ve bronz doğrama birleşimi",
    },
  },
  ar: {
    metaTitle: "حامد محمد — دراسة معمارية وبرمجية تفاعلية 3D / AI | معرض المطور الإبداعي",
    metaDescription:
      "معرض ودراسة حالة تفاعلية للمهندس والمطور حامد محمد؛ استكشاف مفاهيمي للكتل المعمارية والمواد والإضاءة بتقنيات 3D والذكاء الاصطناعي.",
    languageName: "العربية",
    languageSelector: "اختيار اللغة",
    selectedLanguage: "محدد",
    nav: {
      label: "التنقل الرئيسي",
      approach: "النهج",
      explore: "استكشف التصوّر 3D",
      process: "المراحل",
      contact: "تواصل مع المطور حامد محمد",
      openMenu: "افتح القائمة",
      closeMenu: "أغلق القائمة",
      home: "حامد محمد · معرض الأعمال",
    },
    hero: {
      eyebrow: "حامد محمد · مختبر العمارة التفاعلية 3D / AI",
      title: "عمارة تمنح أفكارك",
      italic: "آفاقًا واقعية وتفاعلية.",
      description:
        "تصوّر تفاعلي صممه وبرمجه المهندس حامد محمد؛ يُظهر الكتل الهندسية والمواد وتأثيرات الإضاءة في الوقت الفعلي بأحدث تقنيات الويب.",
      explore: "استكشف التصوّر 3D",
      contact: "تواصل مع المهندس حامد محمد",
      meeting: "ناقش مشروعك",
      city: "حامد محمد · 2026",
      visual: "تصميم وتطوير تفاعلي",
      scroll: "مرّر لاكتشاف المزيد",
    },
    project: {
      aria: "معلومات التصوّر",
      dossier: "ملف أعمال المطور الإبداعي",
      title: "دراسة معمارية وتفاعلية 3D / AI",
      workType: "المطور والمصمم",
      workValue: "حامد محمد (hamedmohamed.dev)",
      category: "هندسة الويب الإبداعية",
      categoryValue: "3D Web & Generative Tech",
      language: "اللغة المعمارية",
      languageValue: "حجر · خرسانة · زجاج",
    },
    approach: {
      eyebrow: "نهج التصميم والبرمجة",
      keywords: "الكود · الفضاء · التفاعل",
      titleBefore: "قبل أن يتشكل المبنى،",
      titleEmphasis: "يبدأ إيقاع التجربة الرقمية",
      titleAfter: ".",
      lead: "المنصات الرقمية المتفردة لا تكتفي بالصور الثابتة، بل تمنح المستخدم تجربة تفاعلية حية تسبق الواقع.",
      description:
        "تجمع هذه الدراسة بين هندسة الواجهات الأمامية المتقدمة، وتوليد الكتل المعمارية البارامترية، والتحكم الفوري في محاكاة الإضاءة والمواد ضمن بيئة ويب فائقة السلاسة.",
      explore: "استعرض بدائل التصميم",
      note: "هذه الدراسة المتخصصة ومختبر التصور المعماري 3D / AI صُممت وبُرمجت بالكامل بواسطة المهندس والمطور حامد محمد (Hamed Mohamed)،",
      noteEmphasis: "كمعرض أعمال شخصي يُبرز قوة البرمجة الإبداعية وهندسة الويب التفاعلي ثلاثي الأبعاد.",
      noteEnd: "",
    },
    lab: {
      eyebrow: "حامد محمد · استوديو تصوّر AI / 3D · تجربة تفاعلية",
      index: "HM / LAB-01",
      kicker: "تصميم واحد، احتمالات متعددة",
      titleStart: "شكّل",
      titleEmphasis: "الفكرة.",
      description:
        "بدّل الكتلة وطابع الواجهة والإضاءة، واكتشف كيف تغيّر القرارات المعمارية أجواء المكان.",
      modeGroup: "مجالات التصميم",
      optionGroup: "الخيارات",
      disclaimer: "تصوّر بصري بمساعدة الذكاء الاصطناعي",
      disclaimerSmall: "ليس مخططًا تنفيذيًا.",
      viewerLabel: "تصوّر معماري مفاهيمي",
      viewerLive: "معاينة التصوّر",
      study: "دراسة بصرية",
      notForConstruction: "ليس للتنفيذ",
      city: "إسطنبول",
      concept: "تصوّر",
      exploreDesign: "استكشف التصميم",
      stage: "01 — 03",
      modes: { massing: "الكتلة", materials: "المواد", atmosphere: "الإضاءة" },
      options: {
        massing: [
          {
            title: "تكوين متدرّج",
            subtitle: "قاعدة أفقية تعلوها كتلة معمارية بارزة.",
            badge: "بديل الكتلة A",
          },
          {
            title: "تكوين حول فناء",
            subtitle: "أحجام مترابطة تلتف حول فناء داخلي.",
            badge: "بديل الكتلة B",
          },
        ],
        materials: [
          {
            title: "ترافرتين وبرونز",
            subtitle: "حجر دافئ وظلال عميقة وتفاصيل معدنية دقيقة.",
            badge: "بديل المواد A",
          },
          {
            title: "خرسانة غرافيتية وزجاج",
            subtitle: "سطح أكثر تماسكًا وانعكاسات مضبوطة.",
            badge: "بديل المواد B",
          },
        ],
        atmosphere: [
          {
            title: "ضوء الغروب",
            subtitle: "إضاءة طبيعية دافئة تُبرز ملمس الحجر.",
            badge: "مشهد الإضاءة A",
          },
          {
            title: "الساعة الزرقاء",
            subtitle: "توازن بين إضاءة الداخل والواجهة.",
            badge: "مشهد الإضاءة B",
          },
        ],
      },
    },
    materials: {
      eyebrow: "لغة المواد",
      titleStart: "يكتمل الملمس",
      titleEmphasis: "بالضوء.",
      description:
        "تتجاور حرارة الترافرتين الطبيعي وقوة الخرسانة المكشوفة وشفافية الزجاج في هذه الفكرة، من دون أن يطغى عنصر على الآخر.",
      imageLabel: "دراسة المواد",
      stone: "حجر طبيعي",
      concrete: "خرسانة مكشوفة",
      glass: "زجاج",
      compare: "قارن بدائل المواد",
    },
    process: {
      eyebrow: "مراحل التصميم المبكر",
      descriptor: "من الفكرة إلى قرار بصري",
      titleStart: "قرارات أوضح",
      titleEmphasis: "تبدأ أبكر.",
      description:
        "تجعل تصوّرات 3D المدعومة بالذكاء الاصطناعي البدائل قابلة للنقاش على طاولة واحدة، وتمنح فريق التصميم وأصحاب القرار نقطة بداية مشتركة.",
      stages: [
        {
          title: "حدّد الاحتياج",
          description: "وضّح سيناريو الاستخدام التجاري وأولويات المساحة.",
        },
        {
          title: "استكشف الكتلة",
          description: "قارن بصريًا بين أكثر من توزيع وفكرة للحجم المعماري.",
        },
        {
          title: "اختر المواد",
          description: "قيّم شخصية الواجهة بالحجر والخرسانة والزجاج والضوء.",
        },
        {
          title: "شارك القرار",
          description:
            "حوّل صور التصوّر إلى لغة مشتركة بين الفرق وأصحاب المصلحة.",
        },
      ],
      footnoteLabel: "ملاحظة المطور",
      footnote:
        "صُممت هذه التجربة التفاعلية بواسطة حامد محمد لإبراز إمكانيات البرمجة المتقدمة والتصميم المكاني التفاعلي.",
    },
    closing: {
      eyebrow: "حامد محمد · تصميم وبرمجة معمارية تفاعلية",
      line1: "لنرَ معًا",
      line2: "كيف تتحول",
      italic: "فكرتك القادمة",
      line3: "إلى واقع تفاعلي.",
      contact: "تواصل مع المهندس حامد محمد",
      sideNote: "حامد محمد · مهندس برمجيات وتطوير ويب إبداعي 3D / AI · 2026",
    },
    footer: {
      tagline: "التجارب الرقمية الاستثنائية تُبنى بالبرمجة الإبداعية والأفكار المتفردة.",
      home: "زيارة معرض أعمال المطور (hamedmohamed.dev)",
      copyright: "© 2026 حامد محمد (HAMED MOHAMED) · جميع الحقوق محفوظة",
      brandAria: "حامد محمد، عُد إلى أعلى الصفحة",
    },
    imageAlt: {
      hero: "تصوّر معماري وتفاعلي صممه حامد محمد لمبنى تجاري بمواد الحجر والخرسانة والزجاج",
      concept: (title) => `تصوّر معماري مفاهيمي لخيار: ${title}`,
      material:
        "واجهة تجارية مفاهيمية تجمع الترافرتين والخرسانة المكشوفة وإطارات البرونز",
    },
  },
  en: {
    metaTitle: "Hamed Mohamed — Interactive 3D & AI Architectural Case Study | Creative Dev",
    metaDescription:
      "Interactive architectural concept lab designed and engineered by creative technologist Hamed Mohamed, exploring real-time 3D massing, materiality and AI-assisted spatial visuals.",
    languageName: "English",
    languageSelector: "Choose language",
    selectedLanguage: "selected",
    nav: {
      label: "Main navigation",
      approach: "Approach",
      explore: "Explore 3D Concept",
      process: "Process",
      contact: "Contact Hamed Mohamed",
      openMenu: "Open menu",
      closeMenu: "Close menu",
      home: "Hamed Mohamed · Portfolio",
    },
    hero: {
      eyebrow: "HAMED MOHAMED · INTERACTIVE 3D & AI LAB",
      title: "Architecture that brings ideas",
      italic: "to life in real time.",
      description:
        "An interactive spatial engineering study designed by Hamed Mohamed; dynamically transforming volumetric massing, materiality, and light through advanced web technologies.",
      explore: "Explore 3D Concept",
      contact: "Connect with Hamed Mohamed",
      meeting: "Discuss your project",
      city: "HAMED MOHAMED · 2026",
      visual: "CONCEPT & DEVELOPMENT",
      scroll: "SCROLL TO EXPLORE",
    },
    project: {
      aria: "Concept details",
      dossier: "CREATIVE DEV DOSSIER",
      title: "Interactive 3D & Generative Spatial Lab",
      workType: "CREATIVE DEVELOPER",
      workValue: "Hamed Mohamed (hamedmohamed.dev)",
      category: "CATEGORY",
      categoryValue: "Creative Tech & 3D Web",
      language: "ARCHITECTURAL LANGUAGE",
      languageValue: "Stone · concrete · glass",
    },
    approach: {
      eyebrow: "DESIGN & CODE APPROACH",
      keywords: "CODE · SPACE · INTERACTION",
      titleBefore: "Before a building takes shape,",
      titleEmphasis: "the digital experience begins",
      titleAfter: ".",
      lead: "Bespoke digital platforms are not merely static visuals; they empower users through dynamic, real-time spatial interaction.",
      description:
        "This showcase unites creative frontend engineering, parametric 3D massing, and real-time atmospheric shifts into a unified, high-performance web experience.",
      explore: "Explore the design alternatives",
      note: "This interactive case study and 3D/AI concept lab were designed and engineered by creative technologist & software developer Hamed Mohamed,",
      noteEmphasis: "as a portfolio piece showcasing next-generation interactive web capabilities and spatial engineering.",
      noteEnd: "",
    },
    lab: {
      eyebrow: "HAMED MOHAMED · AI / 3D CONCEPT WORKBENCH",
      index: "HM / LAB-01",
      kicker: "ONE DESIGN, DIFFERENT POSSIBILITIES",
      titleStart: "Shape the",
      titleEmphasis: "concept.",
      description:
        "Switch the massing, facade character and light. Explore how architectural choices transform the atmosphere.",
      modeGroup: "Design dimensions",
      optionGroup: "options",
      disclaimer: "AI-assisted concept visualization",
      disclaimerSmall: "Not an execution drawing.",
      viewerLabel: "Conceptual architectural visualization",
      viewerLive: "LIVE CONCEPT VIEW",
      study: "VISUAL STUDY",
      notForConstruction: "NOT FOR CONSTRUCTION",
      city: "ISTANBUL",
      concept: "CONCEPT",
      exploreDesign: "EXPLORE THE DESIGN",
      stage: "01 — 03",
      modes: {
        massing: "Massing",
        materials: "Materials",
        atmosphere: "Atmosphere",
      },
      options: {
        massing: [
          {
            title: "Layered composition",
            subtitle: "A horizontal plinth with a confident upper volume.",
            badge: "MASSING OPTION A",
          },
          {
            title: "Courtyard composition",
            subtitle: "Interlocking volumes gathered around an inner court.",
            badge: "MASSING OPTION B",
          },
        ],
        materials: [
          {
            title: "Travertine & bronze",
            subtitle: "Warm stone, deep shadow and precise metal details.",
            badge: "MATERIAL OPTION A",
          },
          {
            title: "Graphite concrete & glass",
            subtitle: "A more monolithic surface with controlled reflections.",
            badge: "MATERIAL OPTION B",
          },
        ],
        atmosphere: [
          {
            title: "Golden hour",
            subtitle: "Warm natural light that brings out the stone texture.",
            badge: "LIGHTING SCENARIO A",
          },
          {
            title: "Blue hour",
            subtitle: "A balance between interior glow and the facade.",
            badge: "LIGHTING SCENARIO B",
          },
        ],
      },
    },
    materials: {
      eyebrow: "MATERIAL LANGUAGE",
      titleStart: "Texture comes alive",
      titleEmphasis: "in light.",
      description:
        "The natural warmth of travertine, the strength of exposed concrete and the clarity of glass meet in this concept without competing for attention.",
      imageLabel: "MATERIAL STUDY",
      stone: "Natural stone",
      concrete: "Exposed concrete",
      glass: "Glass",
      compare: "Compare material alternatives",
    },
    process: {
      eyebrow: "EARLY DESIGN PROCESS",
      descriptor: "FROM IDEA TO VISUAL DECISION",
      titleStart: "Better decisions",
      titleEmphasis: "start earlier.",
      description:
        "3D and AI-assisted concept visuals make alternatives easier to discuss around one table, giving design teams and decision-makers a shared starting point.",
      stages: [
        {
          title: "Define the need",
          description:
            "Clarify the commercial-use scenario and spatial priorities.",
        },
        {
          title: "Explore the massing",
          description: "Compare multiple layouts and volume concepts visually.",
        },
        {
          title: "Select materials",
          description:
            "Evaluate facade character through stone, concrete, glass and light.",
        },
        {
          title: "Share the decision",
          description:
            "Turn concept imagery into a shared language for teams and stakeholders.",
        },
      ],
      footnoteLabel: "DEVELOPER NOTE",
      footnote:
        "This interactive concept demo was engineered by Hamed Mohamed to demonstrate bespoke 3D web capabilities and generative spatial design.",
    },
    closing: {
      eyebrow: "HAMED MOHAMED · CREATIVE TECH & SPATIAL DEV",
      line1: "See your next",
      line2: "big idea",
      italic: "take shape",
      line3: "together.",
      contact: "Connect with Hamed Mohamed",
      sideNote: "HAMED MOHAMED · CREATIVE TECHNOLOGIST & LEAD ENGINEER · 2026",
    },
    footer: {
      tagline: "Bespoke digital experiences built through creative engineering and visionary design.",
      home: "Visit Developer Portfolio (hamedmohamed.dev)",
      copyright: "© 2026 HAMED MOHAMED · ALL RIGHTS RESERVED",
      brandAria: "Hamed Mohamed, return to top",
    },
    imageAlt: {
      hero: "Conceptual architectural and interactive 3D visualization by Hamed Mohamed",
      concept: (title) =>
        `Conceptual architectural visualization for the ${title} option`,
      material:
        "Commercial facade concept combining travertine, exposed concrete and bronze framing",
    },
  },
};


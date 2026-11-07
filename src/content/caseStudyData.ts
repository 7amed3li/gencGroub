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
    metaTitle: "İşinize Yön Veren Mimari | Genç Group İnşaat",
    metaDescription:
      "Genç Group İnşaat için ticari yapı konseptini 3D ve AI destekli görsel keşiflerle anlatan mimari vaka çalışması.",
    languageName: "Türkçe",
    languageSelector: "Dil seçimi",
    selectedLanguage: "seçili",
    nav: {
      label: "Ana gezinme",
      approach: "Yaklaşım",
      explore: "Konsepti keşfet",
      process: "Süreç",
      contact: "Projenizi konuşalım",
      openMenu: "Menüyü aç",
      closeMenu: "Menüyü kapat",
      home: "Genç Group İnşaat, ana sayfa",
    },
    hero: {
      eyebrow: "MİMARİ KONSEPT 01",
      title: "İşinize yön veren",
      italic: "mimari.",
      description:
        "Ticari yapılar için kütleyi, malzemeyi ve ışığı daha ilk aşamada görünür kılan bir konsept çalışması.",
      explore: "Konsepti keşfet",
      contact: "Kurumsal proje görüşmesi",
      meeting: "Projenizi konuşalım",
      city: "İSTANBUL, TÜRKİYE",
      visual: "KONSEPT GÖRSELLEŞTİRME",
      scroll: "SCROLL TO EXPLORE",
    },
    project: {
      aria: "Konsept bilgileri",
      dossier: "PROJE DOSYASI",
      title: "Kurumsal & Ticari Yapı Mimarisi",
      workType: "ÇALIŞMA TÜRÜ",
      workValue: "Mimari konsept",
      category: "KATEGORİ",
      categoryValue: "Ticari & kurumsal",
      language: "MİMARİ DİL",
      languageValue: "Taş · beton · cam",
    },
    approach: {
      eyebrow: "TASARIM YAKLAŞIMI",
      keywords: "İŞLEV · ÖLÇEK · MALZEME",
      titleBefore: "Bir yapıdan önce,",
      titleEmphasis: "işin ritmi",
      titleAfter: "vardır.",
      lead: "Ticari bir mekân yalnızca nasıl göründüğüyle değil, nasıl çalıştığıyla da değer kazanır.",
      description:
        "Bu konsept yaklaşımı; yalın geometrik kütleleri, esnek kullanım olasılıklarını ve uzun ömürlü cephe malzemelerini tek bir mimari dilde buluşturur.",
      explore: "Tasarım alternatiflerini incele",
      note: "Bu sayfa, Genç Group İnşaat’ın ticari yapı yaklaşımı için hazırlanmış",
      noteEmphasis: "kavramsal bir görsel çalışmadır.",
      noteEnd: "Uygulama projesi veya tamamlanmış yapı olarak sunulmamaktadır.",
    },
    lab: {
      eyebrow: "AI / 3D KONSEPT STÜDYOSU · ETKİLEŞİMLİ TASARIM",
      index: "G.G. / 001",
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
      eyebrow: "ERKEN TASARIM SÜRECİ",
      descriptor: "FİKİRDEN GÖRSEL KARARA",
      titleStart: "Daha net kararlar,",
      titleEmphasis: "daha erken başlar.",
      description:
        "3D ve AI destekli konsept görselleri, seçenekleri aynı masada konuşulabilir hâle getirir. Tasarım ekibinin ve karar vericilerin ortak bir başlangıç noktası oluşur.",
      stages: [
        {
          title: "İhtiyacı tanımla",
          description:
            "Ticari kullanım senaryosunu ve mekânsal öncelikleri netleştir.",
        },
        {
          title: "Kütleyi keşfet",
          description:
            "Birden fazla yerleşim ve hacim fikrini görsel olarak karşılaştır.",
        },
        {
          title: "Malzemeyi seç",
          description:
            "Cephe karakterini taş, beton, cam ve ışıkla birlikte değerlendir.",
        },
        {
          title: "Kararı paylaş",
          description:
            "Konsept görsellerini ekipler ve paydaşlar arasında ortak bir dile dönüştür.",
        },
      ],
      footnoteLabel: "ÖNEMLİ NOT",
      footnote:
        "Görsel konseptler, teknik uygulama projelerinin ve mühendislik onaylarının yerine geçmez.",
    },
    closing: {
      eyebrow: "MİMARİ & DİJİTAL GELİŞTİRME",
      line1: "Bir sonraki",
      line2: "fikrinizin",
      italic: "ilk hâlini",
      line3: "birlikte görün.",
      contact: "Geliştirici ile İletişime Geçin",
      sideNote: "HAMED MOHAMED · MİMARİ VE YAZILIM GELİŞTİRME · 2026",
    },
    footer: {
      tagline: "Geleceğin yapıları, doğru fikirlerle başlar.",
      home: "Ana siteye dön",
      copyright: "© 2026 GENÇ GROUP",
      brandAria: "Genç Group, sayfanın başına dön",
    },
    imageAlt: {
      hero: "Ticari yapı için taş, beton ve cam malzemelerle hazırlanmış kavramsal mimari görselleştirme",
      concept: (title) =>
        `${title} seçeneği için kavramsal mimari görselleştirme`,
      material:
        "Ticari cephe konseptinde traverten, brüt beton ve bronz doğrama birleşimi",
    },
  },
  ar: {
    metaTitle: "عمارة تمنح أعمالك آفاقًا | Genç Group İnşaat",
    metaDescription:
      "دراسة مفاهيمية لعمارة تجارية لدى Genç Group، مع استكشاف بصري للكتل والمواد والإضاءة بتقنيات 3D والذكاء الاصطناعي.",
    languageName: "العربية",
    languageSelector: "اختيار اللغة",
    selectedLanguage: "محدد",
    nav: {
      label: "التنقل الرئيسي",
      approach: "النهج",
      explore: "استكشف التصوّر",
      process: "المراحل",
      contact: "ناقش مشروعك",
      openMenu: "افتح القائمة",
      closeMenu: "أغلق القائمة",
      home: "Genç Group İnşaat، الصفحة الرئيسية",
    },
    hero: {
      eyebrow: "تصوّر معماري 01",
      title: "عمارة تمنح أعمالك",
      italic: "آفاقًا أوسع.",
      description:
        "تصوّر للمباني التجارية يُظهر الكتلة والمواد والضوء منذ المراحل الأولى للتصميم.",
      explore: "استكشف التصوّر",
      contact: "ناقش مشروعًا مؤسسيًا",
      meeting: "ناقش مشروعك",
      city: "إسطنبول، تركيا",
      visual: "تصوّر معماري",
      scroll: "مرّر لاكتشاف المزيد",
    },
    project: {
      aria: "معلومات التصوّر",
      dossier: "ملف المشروع",
      title: "عمارة المباني المؤسسية والتجارية",
      workType: "نوع العمل",
      workValue: "تصوّر معماري",
      category: "الفئة",
      categoryValue: "تجاري ومؤسسي",
      language: "اللغة المعمارية",
      languageValue: "حجر · خرسانة · زجاج",
    },
    approach: {
      eyebrow: "نهج التصميم",
      keywords: "الوظيفة · المقياس · المواد",
      titleBefore: "قبل أن يتشكل المبنى،",
      titleEmphasis: "يبدأ إيقاع الأعمال",
      titleAfter: ".",
      lead: "تنبع قيمة المساحة التجارية من طريقة عملها، لا من مظهرها وحده.",
      description:
        "يجمع هذا التصوّر بين كتل هندسية نقية ومرونة الاستخدام ومواد واجهات طويلة العمر ضمن لغة معمارية واحدة.",
      explore: "استعرض بدائل التصميم",
      note: "هذه الصفحة دراسة بصرية مفاهيمية أُعدّت لاستكشاف نهج Genç Group İnşaat في المباني التجارية. وهي",
      noteEmphasis: "ليست مشروعًا تنفيذيًا أو مبنى مكتملًا.",
      noteEnd: "",
    },
    lab: {
      eyebrow: "استوديو تصوّر AI / 3D · تجربة تفاعلية",
      index: "G.G. / 001",
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
      footnoteLabel: "تنويه مهم",
      footnote:
        "التصوّرات البصرية لا تحل محل المخططات التنفيذية أو الاعتمادات الهندسية.",
    },
    closing: {
      eyebrow: "التصميم والتطوير الرقمي والمعماري",
      line1: "لنرَ معًا",
      line2: "كيف تتحول",
      italic: "فكرتك القادمة",
      line3: "إلى تصوّر.",
      contact: "ناقش فكرتك مع المطور",
      sideNote: "حامد محمد · تصميم وبرمجة معمارية 3D / AI · 2026",
    },
    footer: {
      tagline: "المباني القادمة تبدأ بفكرة واضحة.",
      home: "زيارة الموقع الرئيسي",
      copyright: "© 2026 GENÇ GROUP",
      brandAria: "Genç Group، عُد إلى أعلى الصفحة",
    },
    imageAlt: {
      hero: "تصوّر معماري مفاهيمي لمبنى تجاري بمواد الحجر والخرسانة والزجاج",
      concept: (title) => `تصوّر معماري مفاهيمي لخيار: ${title}`,
      material:
        "واجهة تجارية مفاهيمية تجمع الترافرتين والخرسانة المكشوفة وإطارات البرونز",
    },
  },
  en: {
    metaTitle: "Architecture That Moves Business Forward | Genç Group İnşaat",
    metaDescription:
      "A conceptual commercial architecture case study for Genç Group, exploring massing, facade materials and atmosphere with 3D and AI-assisted visuals.",
    languageName: "English",
    languageSelector: "Choose language",
    selectedLanguage: "selected",
    nav: {
      label: "Main navigation",
      approach: "Approach",
      explore: "Explore the concept",
      process: "Process",
      contact: "Discuss your project",
      openMenu: "Open menu",
      closeMenu: "Close menu",
      home: "Genç Group İnşaat, home",
    },
    hero: {
      eyebrow: "ARCHITECTURAL CONCEPT 01",
      title: "Architecture that moves",
      italic: "business forward.",
      description:
        "A commercial-building concept that makes massing, materials and light visible from the earliest design stage.",
      explore: "Explore the concept",
      contact: "Corporate project enquiry",
      meeting: "Discuss your project",
      city: "ISTANBUL, TÜRKİYE",
      visual: "CONCEPT VISUALIZATION",
      scroll: "SCROLL TO EXPLORE",
    },
    project: {
      aria: "Concept details",
      dossier: "PROJECT DOSSIER",
      title: "Corporate & Commercial Building Architecture",
      workType: "STUDY TYPE",
      workValue: "Architectural concept",
      category: "CATEGORY",
      categoryValue: "Commercial & corporate",
      language: "ARCHITECTURAL LANGUAGE",
      languageValue: "Stone · concrete · glass",
    },
    approach: {
      eyebrow: "DESIGN APPROACH",
      keywords: "FUNCTION · SCALE · MATERIAL",
      titleBefore: "Before a building takes shape,",
      titleEmphasis: "a business has a rhythm",
      titleAfter: ".",
      lead: "A commercial space is defined not only by how it looks, but by how it works.",
      description:
        "This concept brings together clean geometric volumes, flexible-use possibilities and enduring facade materials in one architectural language.",
      explore: "Explore the design alternatives",
      note: "This page presents a conceptual visualization exploring Genç Group İnşaat’s approach to commercial buildings. It is",
      noteEmphasis: "not a construction package or a completed building.",
      noteEnd: "",
    },
    lab: {
      eyebrow: "AI / 3D CONCEPT STUDIO · INTERACTIVE STUDY",
      index: "G.G. / 001",
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
      footnoteLabel: "IMPORTANT NOTE",
      footnote:
        "Visual concepts do not replace technical execution drawings or engineering approvals.",
    },
    closing: {
      eyebrow: "ARCHITECTURAL & DIGITAL DEVELOPMENT",
      line1: "See your next",
      line2: "big idea",
      italic: "take shape",
      line3: "together.",
      contact: "Discuss With The Developer",
      sideNote: "HAMED MOHAMED · ARCHITECTURE & DEV · 2026",
    },
    footer: {
      tagline: "Tomorrow’s buildings begin with a clear idea.",
      home: "Visit the main website",
      copyright: "© 2026 GENÇ GROUP",
      brandAria: "Genç Group, return to top",
    },
    imageAlt: {
      hero: "Conceptual commercial architecture visualization in stone, concrete and glass",
      concept: (title) =>
        `Conceptual architectural visualization for the ${title} option`,
      material:
        "Commercial facade concept combining travertine, exposed concrete and bronze framing",
    },
  },
};


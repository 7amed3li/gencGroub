export type Locale = "tr" | "en" | "ar";

export interface AutomotiveService {
  id: string;
  index: string;
  slug: string;
  title: string;
  titleEn: string;
  subtitle: string;
  description: string;
  technicalApproach: string[];
  image: string;
  imageAlt: string;
}

export interface AutomotivePortfolioItem {
  id: string;
  code: string;
  category: string;
  vehicle: string;
  title: string;
  summary: string;
  operations: string[];
  image: string;
  instagramPostUrl: string;
}

export interface ConstructionServiceCategory {
  id: string;
  index: string;
  title: string;
  titleEn: string;
  description: string;
  scopeDetails: string;
}

export interface ProjectTransformationStage {
  id: string;
  number: string;
  progressPercent: number;
  title: string;
  badge: string;
  description: string;
  image: string;
  secondaryImage?: string;
  tags: string[];
}

export interface ConstructionProjectStudy {
  slug: string;
  code: string;
  title: string;
  category: string;
  statusLabel: string;
  location: string;
  year: string;
  area: string;
  editorialSummary: string;
  architecturalBrief: string;
  heroImage: string;
  galleryImages: string[];
  specifications: string[];
  stages?: ProjectTransformationStage[];
  beforeAfter?: {
    beforeImage: string;
    beforeLabel: string;
    afterImage: string;
    afterLabel: string;
  };
}

export interface AssemblyCalloutItem {
  id: string;
  num: string;
  targetX: number;
  targetY: number;
  elbowX: number;
  elbowY: number;
  cardAlign: "left" | "right";
  title: string;
  spec: string;
}

export interface AssemblyStageData {
  code: string;
  shortLabel: string;
  title: string;
  subtitle: string;
  description: string;
  metricLabel: string;
  metricValue: string;
  callouts: AssemblyCalloutItem[];
}

export interface LeadershipMilestone {
  year: string;
  badge: string;
  title: string;
  location: string;
  scope: string;
  keyLesson: string;
  description: string;
}

export interface FounderData {
  name: string;
  titleTr: string;
  titleEn: string;
  titleAr: string;
  birthYear: number;
  birthPlace: string;
  careerStartYear: number;
  experienceYears: string;
  images: {
    standing: string;
    seated: string;
    leaning: string;
    deskOffice: string;
    deskWork: string;
    officeEmblem: string;
  };
  quoteTr: string;
  quoteEn: string;
  quoteAr: string;
  bioTr: {
    heroLead: string;
    lead: string;
    paragraphs: string[];
  };
  bioEn: {
    heroLead: string;
    lead: string;
    paragraphs: string[];
  };
  bioAr: {
    heroLead: string;
    lead: string;
    paragraphs: string[];
  };
  milestonesTr: LeadershipMilestone[];
  milestonesEn: LeadershipMilestone[];
  milestonesAr: LeadershipMilestone[];
}

export const FOUNDER_INFO: FounderData = {
  name: "Davut Genç",
  titleTr: "Kurucu & Yönetim Kurulu Başkanı",
  titleEn: "Founder & Chairman",
  titleAr: "المؤسس ورئيس مجلس الإدارة",
  birthYear: 1976,
  birthPlace: "Zeytinburnu, İstanbul",
  careerStartYear: 1991,
  experienceYears: "30+",
  images: {
    standing: "/images/leadership/davut-genc-portrait-standing.jpg",
    seated: "/images/leadership/davut-genc-portrait-seated.jpg",
    leaning: "/images/leadership/davut-genc-portrait-leaning.jpg",
    deskOffice: "/images/leadership/davut-genc-desk-office.jpg",
    deskWork: "/images/leadership/davut-genc-desk-work.jpg",
    officeEmblem: "/images/leadership/davut-genc-office-emblem.jpg",
  },
  quoteTr:
    "1991 yılında pazar tezgahında öğrendiğim en kıymetli ders şuydu: Gerçek sermaye para değil; verilen söz, ardında durulan iş ve insanlara bırakılan sarsılmaz güvendir. Bugün çelik karkasından radye temeline bir bina yükseltirken de, bir aracın karoserini mikron mikron yenilerken de aynı esnaflık ahlakıyla çalışıyoruz.",
  quoteEn:
    "The greatest lesson I learned on the market floor in 1991 was simple: true capital is never money—it is keeping your word, standing behind your craftsmanship, and building unshakeable trust. Whether raising a seismic-grade building from its raft foundation or restoring a vehicle's bodywork micron by micron, we operate with that same unwavering tradesman code.",
  quoteAr:
    "أعظم درس تعلمته في أسواق التجارة عام 1991 هو أن رأس المال الحقيقي ليس المال، بل هو الالتزام بالكلمة، وإتقان العمل، وبناء ثقة راسخة تدوم عبر الأجيال. واليوم، سواء كنا نشيد مبنى مقاوماً للزلازل من أساساته الحصيرية أو نجدد هيكل سيارة بدقة الميكرون، فإننا نعمل بنفس الانضباط وأخلاق التجارة الصادقة.",
  bioTr: {
    heroLead:
      "1976 İstanbul Zeytinburnu doğumlu olan Davut Genç; 1991'de semt pazar tezgahlarında başlayan ticaret serüvenini, bugün modern inşaat projeleri ve premium otomotiv servis merkezini buluşturan köklü bir kurumsal vizyona dönüştürdü.",
    lead:
      "30 yılı aşkın sahadan gelen esnaflık tecrübesi, ticari dürüstlük ve tavizsiz kalite anlayışıyla Genç Group'un temel taşlarını inşa eden Davut Genç; inşaat ve otomotiv sektörlerinde güvenin simgesi haline gelen bir yönetim kültürüne liderlik etmektedir.",
    paragraphs: [
      "1976 yılında İstanbul'un kadim ticaret ve sanayi merkezlerinden Zeytinburnu'nda dünyaya gelen Davut Genç, iş hayatına henüz 15 yaşındayken 1991 yılında semt pazarlarında sebze ve meyve esnaflığı yaparak adım attı. Pazarın zorlu dinamiklerinde insan ilişkilerini, sözün değerini, dürüst tartmayı ve alın teriyle kazanılan itibarın ticaretteki en sağlam sermaye olduğunu erken yaşta bizzat sahada özümsedi.",
      "1999 yılında toptan sebze ve meyve ticaretine geçiş yaparak ticari hacmini ve lojistik kabiliyetlerini büyüten Davut Genç; eş zamanlı olarak gayrimenkul, inşaat, otomotiv ve tekstil sektörlerine adım atarak faaliyetlerini çok yönlü bir yapıya kavuşturdu. Bu dönem, sahadaki esnaflık reflekslerinin kurumsal organizasyon ve yatırım vizyonuyla harmanlandığı kritik bir eşik oldu.",
      "2007 yılından itibaren tüm odak noktasını inşaat, gayrimenkul geliştirme ve otomotiv sektörlerine yoğunlaştıran Davut Genç; Zeytinburnu ve çevresinde kentsel dönüşüm, depreme dayanıklı radye temel konut projeleri üretirken, Merter'de kurduğu AutoClub Merter tesisiyle otomotiv karoser onarımı, fırın oto boya ve PPF koruma alanlarında sektör standardı belirleyen bir hizmet kalitesine imza attı.",
      "Bugün Genç Group; kurucusu Davut Genç'in 'önce güven, tavizsiz işçilik ve kalıcı eser' felsefesiyle, İstanbul'un kalbinde hem modern yaşam alanları inşa etmekte hem de seçkin araç sahiplerine milimetrik atölye disiplini sunmaktadır.",
    ],
  },
  bioEn: {
    heroLead:
      "Born in Zeytinburnu, Istanbul in 1976, Davut Genç transformed a trading journey that began in 1991 at local markets into an enduring corporate powerhouse spanning modern construction and premium automotive care.",
    lead:
      "Building the foundations of Genç Group on more than three decades of hands-on market experience, uncompromising integrity, and disciplined execution, Davut Genç directs a leadership culture synonymous with long-term trust.",
    paragraphs: [
      "Born in 1976 in Zeytinburnu, an iconic commercial district of Istanbul, Davut Genç entered the world of commerce in 1991 at the age of 15, working in neighborhood produce markets. In the fast-paced and exacting environment of open markets, he learned firsthand that keeping promises, genuine human connection, and earned reputation form the strongest foundation in business.",
      "In 1999, he expanded into agricultural wholesale trading and strategically broadened his operations into real estate, construction, automotive trade, and textiles. This era marked a transformative milestone where field-tested commercial instincts merged with larger-scale organizational investments.",
      "From 2007 onward, Davut Genç concentrated his core capital and operational expertise exclusively into construction contracting, urban regeneration, and specialized automotive services. Under his leadership, Genç Group İnşaat has delivered robust residential developments engineered to stringent seismic codes, while AutoClub Merter became a recognized benchmark for precision automotive bodywork and advanced surface protection.",
      "Today, Genç Group stands as a testament to Davut Genç’s core ethos: genuine trust, uncompromising craftsmanship, and generational value created across two essential industries.",
    ],
  },
  bioAr: {
    heroLead:
      "ولد داوود غينتش عام 1976 في زيتين بورنو بإسطنبول، وحوّل مسيرة تجارية بدأت عام 1991 في الأسواق الشعبية إلى صرح مؤسسي يجمع بين الإنشاءات المعمارية الحديثة وخدمات السيارات المتميزة.",
    lead:
      "انطلاقاً من أكثر من ثلاثة عقود من الخبرة الميدانية العميقة والنزاهة التجارية، أرسى داوود غينتش قواعد مجموعة Genç Group ليقود ثقافة مؤسسية تقوم على بناء الثقة المستدامة والاتقان التام.",
    paragraphs: [
      "ولد داوود غينتش في عام 1976 في منطقة زيتين بورنو بإسطنبول، ودخل معترك العمل التجاري عام 1991 في سن الخامسة عشرة من خلال تجارة الخضار والفواكه في أسواق إسطنبول. وهناك، في قلب السوق الميداني الحقيقي، تعلم قيمة الكلمة الصادقة، وأهمية العلاقات الإنسانية المباشرة، وأن السمعة الطيبة هي رأس المال الأعظم في التجارة.",
      "في عام 1999، انتقل إلى تجارة الجملة موسعاً نشاطه اللوجستي والتجاري، ومتوسعاً في الوقت ذاته في قطاعات العقارات، والمقاولات الإنشائية، والسيارات، والمنسوجات. وشكلت هذه المرحلة نقطة تحول جوهرية دمجت بين حنكة السوق الواقعية والقدرات المؤسسية الاستثمارية الواسعة.",
      "واعتباراً من عام 2007، ركز داوود غينتش كافة موارده وخبراته على قطاعين استراتيجيين: المقاولات الإنشائية وتطوير العقارات، وتجارة وصيانة السيارات المتخصصة. فأطلقت المجموعة مشاريع سكنية مقاومة للزلازل بنظام تسليم المفتاح عبر Genç Group İnşaat، إلى جانب تأسيس مركز AutoClub Merter المتخصص في إصلاح هياكل السيارات الفاخرة والطلاء الحراري وحماية الأسطح.",
      "واليوم، تواصل Genç Group مسيرتها بثبات مسترشدة برؤية مؤسسها: 'الثقة أولاً، والاتقان بلا مساومة، وتقديم أعمال تدوم عبر الأجيال'.",
    ],
  },
  milestonesTr: [
    {
      year: "1976",
      badge: "Kökler",
      title: "Zeytinburnu'nda Başlayan Hayat",
      location: "Zeytinburnu · İstanbul",
      scope: "Kökler & Çocukluk Yılları",
      keyLesson: "Emek, Üretim ve Esnaflık Kültürü",
      description:
        "İstanbul'un kadim ticaret, emek ve sanayi merkezi Zeytinburnu'nda dünyaya geldi; semtin üretim ve esnaflık kültürüyle yetişti.",
    },
    {
      year: "1991",
      badge: "İlk Adım",
      title: "Pazar Esnaflığı ve Ticaret Ahlakı",
      location: "Zeytinburnu & İstanbul Semt Pazarları",
      scope: "Pazarcılık ve İlk Ticari Adım",
      keyLesson: "Alın Teri, Sözün Değeri ve Müşteri Güveni",
      description:
        "Henüz 15 yaşındayken semt pazarlarında sebze-meyve esnaflığına başladı. Alın teri, sözüne sadakat ve insan ilişkilerinin ticaretteki en büyük sermaye olduğunu sahada öğrendi.",
    },
    {
      year: "1999",
      badge: "Büyüme",
      title: "Toptan Ticaret & Sektörel Genişleme",
      location: "İstanbul Toptancı Hali & Çoklu Sektör",
      scope: "Toptancılık, Emlak, İnşaat, Otomotiv, Tekstil",
      keyLesson: "Lojistik Hacim ve Girişimci Vizyon",
      description:
        "Toptan sebze-meyve ticaretine geçiş yaparak hacmini büyüttü; eş zamanlı olarak emlak, inşaat, otomotiv ve tekstil sektörlerinde ilk stratejik yatırımlarını gerçekleştirdi.",
    },
    {
      year: "2007",
      badge: "İhtisas",
      title: "İnşaat ve Otomotivde Stratejik Odak",
      location: "Merter & Zeytinburnu Merkezleri",
      scope: "Depreme Dayanıklı Konut & Yetkili Otomotiv Servisi",
      keyLesson: "Derinlemesine Uzmanlaşma ve Mühendislik",
      description:
        "Tüm operasyonel birikimini inşaat müteahhitliği, kentsel dönüşüm konut projeleri ve otomotiv alım-satım ile yetkili servis alanlarında yoğunlaştırdı.",
    },
    {
      year: "Günümüz",
      badge: "Kurumsal Güç",
      title: "Genç Group: İki Sektörde Tavizsiz Kalite",
      location: "Genç Group Genel Merkez (İstanbul)",
      scope: "Holding Vizyonu: AutoClub Merter & Genç Group İnşaat",
      keyLesson: "Kalıcı Eserler ve Geleceğe Güven Mirası",
      description:
        "Genç Group İnşaat ile depreme dayanıklı çağdaş yapılar inşa ederken; AutoClub Merter ile araç yüzey uzmanlığında lider atölye disiplinini yönetiyor.",
    },
  ],
  milestonesEn: [
    {
      year: "1976",
      badge: "Origins",
      title: "Roots in Zeytinburnu, Istanbul",
      location: "Zeytinburnu · Istanbul",
      scope: "Foundations & Childhood Years",
      keyLesson: "Culture of Honest Labor & Industry",
      description:
        "Born in Zeytinburnu, a storied hub of Istanbul's trade and craftsmanship; shaped by its culture of genuine commerce and perseverance.",
    },
    {
      year: "1991",
      badge: "First Step",
      title: "Market Tradesmanship & Core Ethics",
      location: "Neighborhood Markets · Istanbul",
      scope: "Produce Trading & Practical Commerce",
      keyLesson: "Sanctity of Promises & Hard-Won Trust",
      description:
        "Began trading produce at neighborhood markets at age 15. Learned directly on the floor that honesty, hard work, and earned trust are the true capital of business.",
    },
    {
      year: "1999",
      badge: "Expansion",
      title: "Wholesale Trade & Sectoral Growth",
      location: "Wholesale Hub & Multi-Industry Ventures",
      scope: "Distribution, Real Estate, Construction, Automotive",
      keyLesson: "Scale Logistics & Strategic Agility",
      description:
        "Scaled into wholesale food distribution while making foundational investments across real estate, construction, automotive, and textiles.",
    },
    {
      year: "2007",
      badge: "Focus",
      title: "Strategic Focus on Construction & Automotive",
      location: "Merter & Zeytinburnu Operating Centers",
      scope: "Seismic Residential Builds & Atelier Automotive Care",
      keyLesson: "Deep Industrial Specialization & Standards",
      description:
        "Concentrated all operational focus into turnkey residential construction, seismic-grade urban regeneration, and specialized automotive sales & atelier service.",
    },
    {
      year: "Present",
      badge: "Leadership",
      title: "Genç Group: Corporate Excellence Across Two Domains",
      location: "Genç Group Headquarters · Istanbul",
      scope: "Dual Powerhouse: AutoClub Merter & Genç Group İnşaat",
      keyLesson: "Generational Trust & Future-Proof Vision",
      description:
        "Leading Genç Group İnşaat in delivering high-specification living structures while establishing AutoClub Merter as an atelier benchmark for automotive care.",
    },
  ],
  milestonesAr: [
    {
      year: "1976",
      badge: "البدايات",
      title: "النشأة في زيتين بورنو، إسطنبول",
      location: "زيتين بورنو · إسطنبول",
      scope: "الجذور وسنوات الطفولة الأولى",
      keyLesson: "ثقافة الإنتاج والعمل الجاد والنزاهة",
      description:
        "ولد في قلب حي زيتين بورنو العريق بإسطنبول، وتشرب ثقافة العمل الجاد والإنتاج والتجارة المتوارثة في المنطقة.",
    },
    {
      year: "1991",
      badge: "الخطوة الأولى",
      title: "العمل الميداني وأخلاقيات التجارة الصادقة",
      location: "أسواق إسطنبول الشعبية الميدانية",
      scope: "تجارة الخضار والفواكه وأصول البيع",
      keyLesson: "الالتزام بالكلمة، وعرق الجبين، والسمعة الطيبة",
      description:
        "انطلق في التجارة وهو في الخامسة عشرة من عمره في أسواق إسطنبول الشعبية، واكتسب أصول التجارة الصادقة وبناء الثقة الشخصية مع العملاء.",
    },
    {
      year: "1999",
      badge: "التوسع",
      title: "تجارة الجملة وتنويع القطاعات الاستثمارية",
      location: "سوق الجملة المركزي والاستثمارات المتعددة",
      scope: "تجارة الجملة، العقارات، المقاولات، السيارات، النسيج",
      keyLesson: "توسيع النطاق اللوجستي وإدارة الاستثمار المتنوع",
      description:
        "توسع إلى تجارة الجملة ونقل بضائعها، مع الدخول الاستراتيجي في مجالات العقارات، والإنشاءات، وتجارة السيارات، وصناعة النسيج.",
    },
    {
      year: "2007",
      badge: "التخصص",
      title: "التركيز الاستراتيجي على المقاولات والسيارات",
      location: "مراكز التشغيل في مرتر وزيتين بورنو",
      scope: "المباني السكنية المقاومة للزلازل والعناية بالسيارات",
      keyLesson: "التخصص المهني العميق وضبط معايير الجودة",
      description:
        "كرّس كافة موارده لتطوير المشاريع السكنية الحضرية المقاومة للزلازل وخدمات صيانة وتجديد هياكل السيارات المعتمدة.",
    },
    {
      year: "اليوم",
      badge: "القوة المؤسسية",
      title: "مجموعة Genç Group: تميز قيادي في قطاعين حيويين",
      location: "المقر العام لمجموعة Genç Group (إسطنبول)",
      scope: "صرح مؤسسي: AutoClub Merter و Genç Group İnşaat",
      keyLesson: "مشاريع معمارية خالدة وثقة راسخة تدوم لأجيال",
      description:
        "يقود Genç Group İnşaat لتشييد مبانٍ معمارية حديثة، ومركز AutoClub Merter كعلامة فارقة في العناية الدقيقة بالسيارات.",
    },
  ],
};

export const BRAND_INFO = {
  name: "GENÇ GROUP",
  founder: FOUNDER_INFO,
  descriptorTr: "Otomotiv & İnşaat",
  descriptorEn: "Automotive & Construction",
  descriptorAr: "السيارات والإنشاءات المعمارية",
  primaryMarket: "Türkiye",
  automotiveDivision: {
    name: "AutoClub Merter",
    officialTitle: "AutoClub Merter — Platform",
    logo: "/images/instagram/logo-autoclubmerter.jpg",
    sectorTr: "Otomotiv",
    sectorEn: "Automotive",
    sectorAr: "السيارات",
    region: "Merter / Güngören, İstanbul",
    districtCity: "Güngören / Merter, İstanbul",
    shortAddress: "Platform Merter Suites, İstanbul",
    address:
      "Abdurrahman Nafiz Gürman Mah., General Ali Rıza Gürcan Cad., Platform Sitesi Otoparkı / Merter Suites, 34160 Güngören / İstanbul",
    phoneDisplay: "0543 819 30 24",
    phoneHref: "tel:+905438193024",
    whatsappHref: "https://wa.me/905438193024",
    email: "merter@autoclub.com.tr",
    mapsUrl:
      "https://www.google.com/maps/place/AutoClub+Merter-Platform+Oto+Y%C4%B1kama+Ve+Uygulama+Merkezi/@41.0069954,28.8917124,17z/data=!3m1!4b1!4m6!3m5!1s0x14cabba06557b241:0x1c3d83119614377c!8m2!3d41.0069954!4d28.8942927!16s%2Fg%2F11xnvpb60w",
    mapsEmbedUrl:
      "https://maps.google.com/maps?q=AutoClub%20Merter-Platform%20Oto%20Y%C4%B1kama%20Ve%20Uygulama%20Merkezi&t=&z=17&ie=UTF8&iwloc=&output=embed",
    coordinates: {
      latitude: 41.0069954,
      longitude: 28.8942927,
    },
    instagramUrl: "https://www.instagram.com/autoclubmerter/",
    instagramHandle: "AutoClub Merter",
    heroHeadline: "Aracınız İçin Kusursuz Dokunuş.",
    heroSubheadline:
      "Kaporta onarımı, renk eşleştirmeli oto boya, boyasız göçük düzeltme ve PPF yüzey koruma uygulamalarında milimetrik atölye disiplini.",
    heroHeadlineEn: "The Flawless Touch For Your Vehicle.",
    heroSubheadlineEn:
      "Millimetric atelier precision in bodywork restoration, optical color-matched refinishing, paintless dent repair, and PPF surface protection.",
    heroHeadlineAr: "اللمسة المتقنة لسيارتك.",
    heroSubheadlineAr:
      "انضباط هندسي دقيق في إصلاح الهياكل، وطلاء السيارات بمطابقة لونية بصرية، وإصلاح الصدمات بدون طلاء، وأفلام الحماية PPF والنانو سيراميك.",
  },
  constructionDivision: {
    name: "Genç Group İnşaat",
    officialTitle: "Genç İnşaat",
    sectorTr: "İnşaat & Yapı",
    sectorEn: "Construction & Architecture",
    sectorAr: "العمارة والإنشاءات",
    region: "Zeytinburnu, İstanbul",
    districtCity: "Zeytinburnu, İstanbul",
    shortAddress: "Zeytinburnu, İstanbul",
    address: "Telsiz Mah., 84. Sok., Zeytinburnu, 34020 İstanbul",
    mapsUrl:
      "https://www.google.com/maps/place/Gen%C3%A7+%C4%B0n%C5%9Faat/@40.9977935,28.9094455,17z/data=!3m1!4b1!4m6!3m5!1s0x14cabb07fecb88c7:0x485ba9cffc5ac91!8m2!3d40.9977935!4d28.9120258!16s%2Fg%2F1tq1l4sp",
    mapsEmbedUrl:
      "https://maps.google.com/maps?q=40.9977935,28.9120258&hl=tr&z=17&output=embed",
    coordinates: {
      latitude: 40.9977935,
      longitude: 28.9120258,
    },
    heroHeadline: "Zamansız Yapılar, Kalıcı Değer.",
    heroSubheadline:
      "Doğal malzeme kültürü, mühendislik hassasiyeti ve çağdaş mimari estetikle şekillenen nitelikli yaşam alanları.",
    heroHeadlineEn: "Timeless Structures, Enduring Value.",
    heroSubheadlineEn:
      "Distinguished living and commercial spaces shaped by natural material culture, structural engineering precision, and contemporary architectural aesthetics.",
    heroHeadlineAr: "عمارة خالدة، وقيمة تدوم.",
    heroSubheadlineAr:
      "مساحات سكنية وتجارية راقية تتشكل بثقافة المواد الطبيعية، والدقة الهندسية الإنشائية، والجماليات المعمارية المعاصرة.",
  },
};

const AUTOMOTIVE_SERVICES_BY_LOCALE: Record<Locale, AutomotiveService[]> = {
  tr: [
    {
      id: "kaporta-onarimi",
      index: "01",
      slug: "kaporta-onarimi",
      title: "Kaporta Onarımı & Karoser Restorasyonu",
      titleEn: "Karoser & Yapısal Hizalama",
      subtitle: "Fabrika Çıkış Panel Geometrisi ve Karoser Restorasyonu",
      description:
        "Karoser ve tampon aksamında oluşan deformasyonlar, aracın özgün tasarım hatlarına ve fabrika çıkış panel boşluk standartlarına sadık kalınarak onarılır. Her müdahale, aracın yapısal ve görsel bütünlüğünü ilk günkü dengesine kavuşturmak üzere kurgulanır.",
      technicalApproach: [
        "Şasi ve karoser hatlarının lazer referanslı yapısal analizi",
        "Fabrika toleranslarında panel ve menteşe simetri kontrolü",
        "Boya öncesi mikron hassasiyetinde yüzey tesviyesi",
      ],
      image: "/images/atelier/mercedes-cla-amg-landscape.jpg",
      imageAlt:
        "AutoClub Merter stüdyosunda Mercedes-Benz CLA AMG karoser ve yüzey kontrolü",
    },
    {
      id: "oto-boya",
      index: "02",
      slug: "oto-boya",
      title: "Oto Boya, NDOUR PPF & 9H Seramik",
      titleEn: "Renk Eşleştirme, PPF & Nano Seramik",
      subtitle: "Optik Renk Uyumu, NDOUR PPF Zırh ve AutoClub Ceramic Nano Coating",
      description:
        "Otomotiv boya ve yüzey koruma uygulaması yalnızca rengin yenilenmesi değil; yüzeyin ışık altındaki derinlik ve yansıma karakterinin yeniden inşasıdır. Hassas renk eşleştirme, AutoClub Ceramic Nano Coating ve kendi kendini yenileyen NDOUR PPF zırh uygulamalarıyla kalıcı parlaklık sağlanır.",
      technicalApproach: [
        "Orijinal fabrika tonuyla birebir optik renk eşleştirme",
        "AutoClub Ceramic Nano Coating ile 9H kristal yüzey zırhı",
        "Kendi kendini yenileyen NDOUR şeffaf veya saten mat PPF koruma filmi",
      ],
      image: "/images/atelier/bmw-msport-ppf-landscape.jpg",
      imageAlt:
        "AutoClub Merter LED stüdyosunda BMW M-Sport NDOUR PPF ve boya koruma uygulaması",
    },
    {
      id: "boyasiz-gocuk-duzeltme",
      index: "03",
      slug: "boyasiz-gocuk-duzeltme",
      title: "Boyasız Göçük Düzeltme & Optik Polisaj",
      titleEn: "Orijinal Yüzey Korunumu",
      subtitle: "LED Işık Tünelinde Fabrika Boyasına Dokunmadan Yüzey Kalibrasyonu",
      description:
        "Boya dokusunun zarar görmediği park hasarları ve dış etken kaynaklı göçükler, aracın orijinal fabrika boyasına hiçbir işlem uygulanmadan özel ekipman ve LED ışık tünelindeki optik yansıma teknikleriyle sıfırlanır.",
      technicalApproach: [
        "Optik LED ışık tüneli altında yüzey gerilim ve yansıma analizi",
        "Orijinal boya katmanını koruyan milimetrik form geri kazanımı",
        "Çok aşamalı optik pasta cila ve detaylı kabin restorasyonu",
      ],
      image: "/images/atelier/audi-a3-led-landscape.jpg",
      imageAlt:
        "AutoClub Merter Platform LED ışık tüneli altında Audi A3 optik yüzey kontrolü",
    },
  ],
  en: [
    {
      id: "kaporta-onarimi",
      index: "01",
      slug: "kaporta-onarimi",
      title: "Bodywork & Structural Alignment",
      titleEn: "Chassis & Panel Geometry",
      subtitle: "Factory Panel Gap Tolerances & Bodywork Restoration",
      description:
        "Deformations across the body shell and bumper assemblies are restored with strict adherence to original design lines and factory panel gap tolerances. Every intervention is engineered to return the vehicle to its original structural and visual equilibrium.",
      technicalApproach: [
        "Laser-referenced structural analysis of chassis and body lines",
        "Factory-tolerance panel gap and hinge symmetry calibration",
        "Micron-level surface leveling prior to refinishing",
      ],
      image: "/images/atelier/mercedes-cla-amg-landscape.jpg",
      imageAlt:
        "AutoClub Merter Mercedes-Benz CLA AMG bodywork alignment and studio inspection",
    },
    {
      id: "oto-boya",
      index: "02",
      slug: "oto-boya",
      title: "Refinishing, NDOUR PPF & 9H Ceramic",
      titleEn: "Optical Color Match, PPF & Nano Ceramic",
      subtitle: "Color Matching, NDOUR PPF Armor & AutoClub Ceramic Nano Coating",
      description:
        "Automotive refinishing and surface protection reconstruct the depth and light-reflection character of your vehicle. Precision color matching, AutoClub Ceramic Nano Coating, and self-healing NDOUR Paint Protection Film (PPF) ensure lasting brilliance.",
      technicalApproach: [
        "Exact optical color matching with original factory paint codes",
        "AutoClub Ceramic Nano Coating 9H crystal surface shield",
        "Self-healing NDOUR clear or satin-matte PPF armor protection",
      ],
      image: "/images/atelier/bmw-msport-ppf-landscape.jpg",
      imageAlt:
        "AutoClub Merter LED studio BMW M-Sport NDOUR PPF and paint protection",
    },
    {
      id: "boyasiz-gocuk-duzeltme",
      index: "03",
      slug: "boyasiz-gocuk-duzeltme",
      title: "Paintless Dent Repair & Optical Polishing",
      titleEn: "Original Paint Preservation",
      subtitle: "LED Light-Tunnel Surface Calibration Without Touching Factory Paint",
      description:
        "Parking dents, hail impressions, and minor body creases where the paint surface remains intact are eliminated inside our LED inspection tunnel—preserving 100% of the factory finish alongside multi-stage paint correction.",
      technicalApproach: [
        "Surface tension mapping under optical LED reflection lines",
        "Millimetric metal memory restoration preserving original clearcoat",
        "Multi-stage optical paint correction and VIP cabin detailing",
      ],
      image: "/images/atelier/audi-a3-led-landscape.jpg",
      imageAlt:
        "AutoClub Merter Platform Audi A3 surface inspection inside LED reflection tunnel",
    },
  ],
  ar: [
    {
      id: "kaporta-onarimi",
      index: "01",
      slug: "kaporta-onarimi",
      title: "إصلاح الهياكل ومحاذاة الشاسيه",
      titleEn: "هندسة الهيكل والألواح",
      subtitle: "استعادة خطوط المصنع الأصلية وضبط فواصل الألواح بدقة المليمتر",
      description:
        "يتم إصلاح التشوهات في الهيكل الخارجي والمصدات مع التزام تام بخطوط التصميم الأصلية ومعايير فواصل الألواح المصنعية. تُنفذ كل عملية لاستعادة التوازن الهيكلي والبصري للسيارة كما خرجت من المصنع.",
      technicalApproach: [
        "تحليل هيكلي مرجعي بالليزر لخطوط الشاسيه والهيكل",
        "معايرة تماثل الأبواب والمفصلات وفواصل الألواح بمعايير المصنع",
        "تسوية السطح بدقة الميكرون قبل مرحلة الطلاء",
      ],
      image: "/images/atelier/mercedes-cla-amg-landscape.jpg",
      imageAlt:
        "AutoClub Merter فحص وضبط هيكل مرسيدس CLA AMG داخل الاستوديو",
    },
    {
      id: "oto-boya",
      index: "02",
      slug: "oto-boya",
      title: "طلاء السيارات، أفلام NDOUR PPF والنانو سيراميك",
      titleEn: "مطابقة الألوان والسيراميك و PPF",
      subtitle: "مطابقة لونية بصرية، درع NDOUR PPF و AutoClub Ceramic Nano Coating",
      description:
        "طلاء وحماية السيارات هو إعادة بناء عمق السطح وانعكاس الضوء عليه. نوفر مطابقة لونية دقيقة، وطلاء النانو سيراميك الرسمي AutoClub Ceramic Nano Coating، وأفلام الحماية الشفافة أو المطفية NDOUR PPF ذاتية الالتئام.",
      technicalApproach: [
        "مطابقة لونية بصرية متطابقة مع درجة لون المصنع الأصلية",
        "حماية كريستالية بتقنية AutoClub Ceramic Nano Coating 9H",
        "أفلام حماية NDOUR PPF شفافة أو مطفية ذاتية المعالجة ضد الخدوش",
      ],
      image: "/images/atelier/bmw-msport-ppf-landscape.jpg",
      imageAlt:
        "AutoClub Merter تطبيق فيلم الحماية NDOUR PPF لسيارة بي إم دبليو M-Sport داخل نفق الإضاءة",
    },
    {
      id: "boyasiz-gocuk-duzeltme",
      index: "03",
      slug: "boyasiz-gocuk-duzeltme",
      title: "إصلاح الصدمات بدون طلاء والتلميع البصري",
      titleEn: "الحفاظ على طلاء المصنع الأصلي",
      subtitle: "معايرة بصرية للأسطح داخل نفق إضاءة LED دون المساس بالطلاء الأصلي",
      description:
        "يتم إزالة الصدمات الخفيفة وآثار البَرَد والتجويفات التي لم يتضرر فيها الطلاء باستخدام معدات دقيقة وتقنيات انكسار خطوط إضاءة LED البصرية، مع تلميع متعدد المراحل لاستعادة لمعان المرآة.",
      technicalApproach: [
        "تحليل نقاط الشد السطحي تحت خطوط إضاءة LED البصرية",
        "استعادة شكل المعدن بدقة المليمتر مع حماية طبقة الطلاء الأصلية",
        "تلميع بصري متعدد المراحل وعناية تفصيلية شاملة بالمقصورة",
      ],
      image: "/images/atelier/audi-a3-led-landscape.jpg",
      imageAlt:
        "AutoClub Merter فحص وتلميع أودي A3 تحت خطوط الإضاءة البصرية LED",
    },
  ],
};

const AUTOMOTIVE_PORTFOLIO_BY_LOCALE: Record<Locale, AutomotivePortfolioItem[]> = {
  tr: [
    {
      id: "mercedes-amg-gle-coupe-studio",
      code: "01",
      category: "LED Stüdyo · PPF & Seramik Zırh",
      vehicle: "Mercedes-AMG GLE Coupe",
      title: "Mercedes-AMG GLE Coupe — Optik Polisaj & NDOUR PPF Koruma",
      summary:
        "AutoClub Merter LED ışık tünelinde gerçekleştirilen çok aşamalı optik yüzey kalibrasyonu, NDOUR PPF koruma ve 9H kristal seramik uygulaması.",
      operations: [
        "LED Işık Tünelinde Yüzey Analizi",
        "NDOUR PPF Yüzey Zırhı",
        "9H Nano Seramik Kaplama",
      ],
      image: "/images/atelier/amg-gle-coupe-portrait.jpg",
      instagramPostUrl: "https://www.instagram.com/autoclubmerter/",
    },
    {
      id: "mercedes-gle-nano-ceramic",
      code: "02",
      category: "AutoClub Ceramic · Nano Coating",
      vehicle: "Mercedes-Benz GLE SUV",
      title: "Mercedes-Benz GLE — AutoClub Ceramic Nano Coating Uygulaması",
      summary:
        "Siyah metalik karoser yüzeyinde derin ayna yansıması ve hidrofobik koruma sağlayan orijinal AutoClub Ceramic Nano Coating kalkanı.",
      operations: [
        "Çok Aşamalı Boya Düzeltme",
        "AutoClub Ceramic Nano Coating",
        "Hidrofobik Yüzey Mühürleme",
      ],
      image: "/images/atelier/mercedes-gle-ceramic-portrait.jpg",
      instagramPostUrl: "https://www.instagram.com/autoclubmerter/",
    },
    {
      id: "bmw-msport-ndour-ppf",
      code: "03",
      category: "NDOUR Paint Protection Film",
      vehicle: "BMW M-Sport",
      title: "BMW M-Sport — NDOUR Tam Gövde PPF & Yüzey Koruma",
      summary:
        "Özel cam stüdyo kabininde uygulanan kendi kendini yenileyen NDOUR Paint Protection Film (PPF) ile taş vuruklarına ve çiziklere karşı tam koruma.",
      operations: [
        "NDOUR PPF Tam Gövde Kaplama",
        "Gizli Kenar Katlama İşçiliği",
        "Optik LED Kalite Kontrolü",
      ],
      image: "/images/atelier/bmw-msport-ppf-portrait.jpg",
      instagramPostUrl: "https://www.instagram.com/autoclubmerter/",
    },
    {
      id: "mercedes-cla-amg-studio",
      code: "04",
      category: "Karoser, Boya & Detailing",
      vehicle: "Mercedes-Benz CLA AMG",
      title: "Mercedes-Benz CLA AMG — Karoser Hizalama & Ayna Parlaklığı",
      summary:
        "Stüdyo liftinde gerçekleştirilen alt-üst karoser kontrolü, parlak siyah aerodinamik detaylar ve derin parlaklık artırıcı polisaj uygulaması.",
      operations: [
        "Karoser & Aerodinamik Kontrol",
        "Ayna Yansımalı Optik Polisaj",
        "Jant ve Kaliper Detay Bakımı",
      ],
      image: "/images/atelier/mercedes-cla-amg-portrait.jpg",
      instagramPostUrl: "https://www.instagram.com/autoclubmerter/",
    },
    {
      id: "audi-a3-led-inspection",
      code: "05",
      category: "Optik Boya Düzeltme",
      vehicle: "Audi A3 Sedan",
      title: "Audi A3 Sedan — LED Işık Tünelinde Kusursuz Yüzey Restorasyonu",
      summary:
        "Lineer LED ışık hatları altında mikron düzeyinde çizik giderimi, boya koruma ve cam filmi uygulaması.",
      operations: [
        "Mikronluk Çizik ve Hare Giderimi",
        "Boya Koruma & Cam Filmi",
        "Optik Yansıma Kalibrasyonu",
      ],
      image: "/images/atelier/audi-a3-led-portrait.jpg",
      instagramPostUrl: "https://www.instagram.com/autoclubmerter/",
    },
    {
      id: "mercedes-s-class-vip-care",
      code: "06",
      category: "VIP Kabin & Karoser Bakımı",
      vehicle: "Mercedes-Benz S-Class",
      title: "Mercedes-Benz S-Serisi — VIP İç Kabin & Dış Yüzey Restorasyonu",
      summary:
        "Bej deri kabin döşemelerinin antibakteriyel restorasyonu ve siyah sedefli gövdede bütünsel yüzey yenileme çalışması.",
      operations: [
        "VIP Deri Kabin Restorasyonu",
        "Detaylı İç & Motor Temizliği",
        "Seramik Destekli Boya Koruma",
      ],
      image: "/images/atelier/mercedes-s-class-portrait.jpg",
      instagramPostUrl: "https://www.instagram.com/autoclubmerter/",
    },
    {
      id: "porsche-taycan-surface-care",
      code: "07",
      category: "Spor Sedan Detailing",
      vehicle: "Porsche Taycan",
      title: "Porsche Taycan — Hassas Yüzey Arındırma & Boya Koruma",
      summary:
        "Elektrikli spor sedanın aerodinamik gövde hatlarında uygulanan hassas yıkama, yüzey dekontaminasyonu ve parlaklık koruma işlemi.",
      operations: [
        "pH Nötr Aktif Köpük & Dekontaminasyon",
        "Parlaklık Artırıcı Yüzey Bakımı",
        "Kabin ve Jant Detailing",
      ],
      image: "/images/atelier/porsche-taycan-portrait.jpg",
      instagramPostUrl: "https://www.instagram.com/autoclubmerter/",
    },
    {
      id: "range-rover-vogue-transformation",
      code: "08",
      category: "Karoser, Boya & Black Pack",
      vehicle: "Range Rover Vogue",
      title: "Range Rover Vogue — Black Pack Dönüşümü & Seramik Koruma",
      summary:
        "Tampon restorasyonu, gri gövde detaylarının parlak siyaha dönüştürüldüğü Black Pack uygulaması ve 9H seramik kaplama ile kusursuz yüzey bütünlüğü.",
      operations: [
        "Tampon Restorasyonu ve Boyama",
        "Black Pack Detay Dönüşümü",
        "Polisaj & 9H Seramik Kaplama",
      ],
      image: "/images/instagram/post-2.jpg",
      instagramPostUrl: "https://www.instagram.com/p/DbkcDTANKgB/",
    },
    {
      id: "opel-frontera-mat-ppf",
      code: "09",
      category: "Saten Mat PPF Zırhı",
      vehicle: "Opel Frontera",
      title: "Opel Frontera — Saten Siyah Mat PPF Kaplama",
      summary:
        "Karakteristik saten mat doku ve yüksek darbe dayanımını tek katmanda birleştiren tam gövde PPF koruma uygulaması.",
      operations: [
        "Tam Gövde Saten Mat PPF Kaplama",
        "Mikronluk Yüzey Dekontaminasyonu",
        "Gizli Kenar ve Panel İşçiliği",
      ],
      image: "/images/instagram/post-1.jpg",
      instagramPostUrl: "https://www.instagram.com/p/DfB9q5WtFKz/",
    },
  ],
  en: [
    {
      id: "mercedes-amg-gle-coupe-studio",
      code: "01",
      category: "LED Studio · PPF & Ceramic Armor",
      vehicle: "Mercedes-AMG GLE Coupe",
      title: "Mercedes-AMG GLE Coupe — Optical Polishing & NDOUR PPF Protection",
      summary:
        "Multi-stage optical surface calibration, NDOUR Paint Protection Film, and 9H crystal ceramic armor executed inside the AutoClub Merter LED tunnel.",
      operations: [
        "LED Tunnel Surface Inspection",
        "NDOUR PPF Surface Armor",
        "9H Nano Ceramic Coating",
      ],
      image: "/images/atelier/amg-gle-coupe-portrait.jpg",
      instagramPostUrl: "https://www.instagram.com/autoclubmerter/",
    },
    {
      id: "mercedes-gle-nano-ceramic",
      code: "02",
      category: "AutoClub Ceramic · Nano Coating",
      vehicle: "Mercedes-Benz GLE SUV",
      title: "Mercedes-Benz GLE — AutoClub Ceramic Nano Coating Application",
      summary:
        "Official AutoClub Ceramic Nano Coating shield delivering deep mirror reflection and hydrophobic protection across metallic black bodywork.",
      operations: [
        "Multi-Stage Paint Correction",
        "AutoClub Ceramic Nano Coating",
        "Hydrophobic Surface Sealing",
      ],
      image: "/images/atelier/mercedes-gle-ceramic-portrait.jpg",
      instagramPostUrl: "https://www.instagram.com/autoclubmerter/",
    },
    {
      id: "bmw-msport-ndour-ppf",
      code: "03",
      category: "NDOUR Paint Protection Film",
      vehicle: "BMW M-Sport",
      title: "BMW M-Sport — NDOUR Full-Body PPF & Surface Armor",
      summary:
        "Self-healing NDOUR Paint Protection Film (PPF) applied in our glass-enclosed LED booth for complete defense against stone chips and scratches.",
      operations: [
        "NDOUR Full-Body PPF Wrap",
        "Seamless Wrapped Edge Craftsmanship",
        "Optical LED Quality Calibration",
      ],
      image: "/images/atelier/bmw-msport-ppf-portrait.jpg",
      instagramPostUrl: "https://www.instagram.com/autoclubmerter/",
    },
    {
      id: "mercedes-cla-amg-studio",
      code: "04",
      category: "Bodywork, Refinishing & Detailing",
      vehicle: "Mercedes-Benz CLA AMG",
      title: "Mercedes-Benz CLA AMG — Body Alignment & Mirror Gloss Finish",
      summary:
        "Studio-lift structural inspection, gloss-black aerodynamic detailing, and deep mirror-finish optical polishing.",
      operations: [
        "Bodywork & Aero Inspection",
        "Mirror-Reflection Optical Polish",
        "Wheel & Caliper Detailing",
      ],
      image: "/images/atelier/mercedes-cla-amg-portrait.jpg",
      instagramPostUrl: "https://www.instagram.com/autoclubmerter/",
    },
    {
      id: "audi-a3-led-inspection",
      code: "05",
      category: "Optical Paint Correction",
      vehicle: "Audi A3 Sedan",
      title: "Audi A3 Sedan — LED Light-Tunnel Surface Restoration",
      summary:
        "Micron-level swirl removal, paint protection, and solar window film installation under linear LED inspection lines.",
      operations: [
        "Micron Swirl & Defect Removal",
        "Paint Protection & Window Film",
        "Optical Reflection Calibration",
      ],
      image: "/images/atelier/audi-a3-led-portrait.jpg",
      instagramPostUrl: "https://www.instagram.com/autoclubmerter/",
    },
    {
      id: "mercedes-s-class-vip-care",
      code: "06",
      category: "VIP Cabin & Exterior Care",
      vehicle: "Mercedes-Benz S-Class",
      title: "Mercedes-Benz S-Class — VIP Leather Cabin & Exterior Restoration",
      summary:
        "Antibacterial restoration of beige Nappa leather seating paired with comprehensive exterior surface rejuvenation.",
      operations: [
        "VIP Leather Cabin Restoration",
        "Detailed Interior & Engine Care",
        "Ceramic-Infused Paint Protection",
      ],
      image: "/images/atelier/mercedes-s-class-portrait.jpg",
      instagramPostUrl: "https://www.instagram.com/autoclubmerter/",
    },
    {
      id: "porsche-taycan-surface-care",
      code: "07",
      category: "Sports Sedan Detailing",
      vehicle: "Porsche Taycan",
      title: "Porsche Taycan — Precision Surface Decontamination & Protection",
      summary:
        "Delicate snow-foam decontamination and gloss protection tailored to the aerodynamic contours of the Porsche Taycan.",
      operations: [
        "pH-Neutral Foam & Decontamination",
        "Gloss-Enhancing Surface Care",
        "Cabin & Wheel Detailing",
      ],
      image: "/images/atelier/porsche-taycan-portrait.jpg",
      instagramPostUrl: "https://www.instagram.com/autoclubmerter/",
    },
    {
      id: "range-rover-vogue-transformation",
      code: "08",
      category: "Bodywork, Refinishing & Black Pack",
      vehicle: "Range Rover Vogue",
      title: "Range Rover Vogue — Black Pack Conversion & Ceramic Armor",
      summary:
        "Bumper restoration, gloss-black Black Pack exterior trim conversion, multi-stage polishing, and 9H ceramic coating.",
      operations: [
        "Bumper Restoration & Refinishing",
        "Black Pack Trim Conversion",
        "Polishing & 9H Ceramic Coating",
      ],
      image: "/images/instagram/post-2.jpg",
      instagramPostUrl: "https://www.instagram.com/p/DbkcDTANKgB/",
    },
    {
      id: "opel-frontera-mat-ppf",
      code: "09",
      category: "Satin Matte PPF Armor",
      vehicle: "Opel Frontera",
      title: "Opel Frontera — Satin Black Matte PPF Wrap",
      summary:
        "Full-body satin matte PPF application combining a bold architectural matte texture with high-impact stone-chip resistance.",
      operations: [
        "Full-Body Satin Matte PPF Wrap",
        "Micron Surface Decontamination",
        "Wrapped Seamless Edge Craftsmanship",
      ],
      image: "/images/instagram/post-1.jpg",
      instagramPostUrl: "https://www.instagram.com/p/DfB9q5WtFKz/",
    },
  ],
  ar: [
    {
      id: "mercedes-amg-gle-coupe-studio",
      code: "01",
      category: "استوديو LED · حماية PPF وسيراميك",
      vehicle: "Mercedes-AMG GLE Coupe",
      title: "مرسيدس AMG GLE كوبيه — تلميع بصري وحماية NDOUR PPF",
      summary:
        "معايرة بصرية متعددة المراحل للسطح وتطبيق فيلم الحماية NDOUR PPF ودرع السيراميك الكريستالي 9H داخل نفق الإضاءة في AutoClub Merter.",
      operations: [
        "فحص السطح داخل نفق إضاءة LED",
        "درع حماية الأسطح NDOUR PPF",
        "طلاء نانو سيراميك 9H",
      ],
      image: "/images/atelier/amg-gle-coupe-portrait.jpg",
      instagramPostUrl: "https://www.instagram.com/autoclubmerter/",
    },
    {
      id: "mercedes-gle-nano-ceramic",
      code: "02",
      category: "AutoClub Ceramic · نانو سيراميك",
      vehicle: "Mercedes-Benz GLE SUV",
      title: "مرسيدس GLE — تطبيق AutoClub Ceramic Nano Coating الأصلي",
      summary:
        "حماية متكاملة بتقنية AutoClub Ceramic Nano Coating تمنح الهيكل الأسود الميتاليك انعكاس المرآة العميق ومقاومة فائقة للماء والعوامل الجوية.",
      operations: [
        "تصحيح وتلميع الطلاء متعدد المراحل",
        "تطبيق AutoClub Ceramic Nano Coating",
        "عزل وحماية السطح بتقنية النانو",
      ],
      image: "/images/atelier/mercedes-gle-ceramic-portrait.jpg",
      instagramPostUrl: "https://www.instagram.com/autoclubmerter/",
    },
    {
      id: "bmw-msport-ndour-ppf",
      code: "03",
      category: "أفلام حماية الطلاء NDOUR PPF",
      vehicle: "BMW M-Sport",
      title: "بي إم دبليو M-Sport — تغليف كامل بفيلم الحماية NDOUR PPF",
      summary:
        "تطبيق فيلم الحماية الذاتي المعالجة NDOUR Paint Protection Film داخل الكابينة الزجاجية المعزولة لحماية الطلاء الأصلي من الخدوش والحصى.",
      operations: [
        "تغليف كامل بفيلم NDOUR PPF",
        "تشطيب حواف مخفية بمعايير المصنع",
        "معايرة الجودة تحت إضاءة LED",
      ],
      image: "/images/atelier/bmw-msport-ppf-portrait.jpg",
      instagramPostUrl: "https://www.instagram.com/autoclubmerter/",
    },
    {
      id: "mercedes-cla-amg-studio",
      code: "04",
      category: "الهيكل والتلميع البصري",
      vehicle: "Mercedes-Benz CLA AMG",
      title: "مرسيدس CLA AMG — ضبط الهيكل واستعادة لمعان المرآة",
      summary:
        "فحص شامل للهيكل على رافعة الاستوديو مع تلميع بصري عميق وعناية تفصيلية بالجنوط والتفاصيل الرياضية السوداء.",
      operations: [
        "فحص وضبط خطوط الهيكل",
        "تلميع بصري بلمعان المرآة",
        "عناية تفصيلية بالجنوط والمكابح",
      ],
      image: "/images/atelier/mercedes-cla-amg-portrait.jpg",
      instagramPostUrl: "https://www.instagram.com/autoclubmerter/",
    },
    {
      id: "audi-a3-led-inspection",
      code: "05",
      category: "تصحيح الطلاء البصري",
      vehicle: "Audi A3 Sedan",
      title: "أودي A3 سيدان — استعادة نقاء السطح داخل نفق إضاءة LED",
      summary:
        "إزالة الدوائر والخدوش الدقيقة تحت خطوط إضاءة LED مع تطبيق حماية الطلاء وأفلام العزل الحراري للنوافذ.",
      operations: [
        "إزالة الخدوش الدقيقة والدوائر السطحية",
        "حماية الطلاء وتظليل النوافذ الحراري",
        "معايرة الانعكاس البصري",
      ],
      image: "/images/atelier/audi-a3-led-portrait.jpg",
      instagramPostUrl: "https://www.instagram.com/autoclubmerter/",
    },
    {
      id: "mercedes-s-class-vip-care",
      code: "06",
      category: "عناية VIP بالمقصورة والهيكل",
      vehicle: "Mercedes-Benz S-Class",
      title: "مرسيدس S-Class — ترميم مقصورة الجلد الفاخر وتجديد الهيكل",
      summary:
        "عناية تفصيلية وتعقيم للجلد الطبيعي الفاتح داخل المقصورة مع تلميع وحماية السطح الخارجي الأسود.",
      operations: [
        "ترميم وتعقيم المقصورة الجلدية VIP",
        "تنظيف تفصيلي للداخلية والمحرك",
        "حماية الطلاء المدعمة بالسيراميك",
      ],
      image: "/images/atelier/mercedes-s-class-portrait.jpg",
      instagramPostUrl: "https://www.instagram.com/autoclubmerter/",
    },
    {
      id: "porsche-taycan-surface-care",
      code: "07",
      category: "العناية بالسيارات الرياضية",
      vehicle: "Porsche Taycan",
      title: "بورش تايكان — تطهير السطح وحماية الطلاء الفائق",
      summary:
        "غسيل احترافي بالرغوة النشطة المتعادلة وتطهير مسام الطلاء وحماية اللمعان لسيارة بورش تايكان الكهربائية.",
      operations: [
        "غسيل بالرغوة النشطة وإزالة الشوائب",
        "تعزيز اللمعان وحماية السطح",
        "عناية تفصيلية بالمقصورة والجنوط",
      ],
      image: "/images/atelier/porsche-taycan-portrait.jpg",
      instagramPostUrl: "https://www.instagram.com/autoclubmerter/",
    },
    {
      id: "range-rover-vogue-transformation",
      code: "08",
      category: "الهيكل والطلاء وتحويل Black Pack",
      vehicle: "Range Rover Vogue",
      title: "رينج روفر فوج — تحويل Black Pack وحماية النانو سيراميك",
      summary:
        "ترميم وطلاء المصدات، وتحويل التفاصيل الرمادية إلى الأسود اللامع (Black Pack)، مع تلميع متعدد المراحل وطبقة سيراميك 9H.",
      operations: [
        "إصلاح وطلاء المصدات",
        "تحويل التفاصيل إلى Black Pack",
        "تلميع بصري وطبقة نانو سيراميك 9H",
      ],
      image: "/images/instagram/post-2.jpg",
      instagramPostUrl: "https://www.instagram.com/p/DbkcDTANKgB/",
    },
    {
      id: "opel-frontera-mat-ppf",
      code: "09",
      category: "درع حماية الأسطح PPF",
      vehicle: "Opel Frontera",
      title: "أوبل فرونتيرا — تغليف فيلم حماية أسود ساتان مطفي PPF",
      summary:
        "تطبيق فيلم حماية كامل للهيكل باللون الأسود الساتان المطفي يجمع بين المظهر الجريء والحماية الفائقة ضد الخدوش والحصى.",
      operations: [
        "تغليف كامل بفيلم PPF أسود ساتان مطفي",
        "تطهير وتجهيز السطح بدقة الميكرون",
        "تشطيب حواف مخفية بمعايير المصنع",
      ],
      image: "/images/instagram/post-1.jpg",
      instagramPostUrl: "https://www.instagram.com/p/DfB9q5WtFKz/",
    },
  ],
};

const CONSTRUCTION_SERVICES_BY_LOCALE: Record<Locale, ConstructionServiceCategory[]> = {
  tr: [
    {
      id: "yapi-insaat",
      index: "01",
      title: "Yapı & Mühendislik Uygulamaları",
      titleEn: "Taşıyıcı Sistem & Üstyapı",
      description:
        "Zemin etüdünden betonarme ve çelik taşıyıcı sistemlere, kaba yapıdan anahtar teslim üstyapı imalatlarına kadar tüm süreçlerin mühendislik standartlarında yönetimi.",
      scopeDetails: "Betonarme & Çelik Sistemler · Üstyapı İmalatı · Saha Yönetimi",
    },
    {
      id: "mimari-uygulama",
      index: "02",
      title: "Mimari Cephe & Mekân Tasarımı",
      titleEn: "Doğal Taş, Beton & Cam",
      description:
        "Doğal kalker ve traverten cepheler, dokulu brüt beton yüzeyler ve geniş açıklıklı cam doğrama sistemleriyle zamansız mekânsal çözümler.",
      scopeDetails: "Mimari Tasarım · Doğal Taş Cepheler · Detay Mühendisliği",
    },
    {
      id: "renovasyon-ic-mimari",
      index: "03",
      title: "Renovasyon & İnce Yapı",
      titleEn: "Nitelikli İşçilik & Teslimat",
      description:
        "Mevcut yapıların statik ve estetik açıdan dönüştürülmesi, doğal malzeme seçimi ve kusursuz birleşim detaylarıyla anahtar teslim iç mimari uygulamalar.",
      scopeDetails: "Yapısal Dönüşüm · İnce Yapı İşçiliği · Anahtar Teslim",
    },
  ],
  en: [
    {
      id: "yapi-insaat",
      index: "01",
      title: "Structural & Civil Engineering",
      titleEn: "Core Structure & Superstructure",
      description:
        "End-to-end engineering management from geotechnical ground surveys and reinforced concrete or steel structural systems to turnkey superstructure execution.",
      scopeDetails: "Reinforced Concrete & Steel · Superstructure · Site Management",
    },
    {
      id: "mimari-uygulama",
      index: "02",
      title: "Architectural Facade & Spatial Design",
      titleEn: "Natural Stone, Concrete & Glass",
      description:
        "Timeless spatial solutions combining cut limestone and travertine facades, board-formed architectural concrete, and wide-span bronze glazing systems.",
      scopeDetails: "Architectural Design · Natural Stone Facades · Detail Engineering",
    },
    {
      id: "renovasyon-ic-mimari",
      index: "03",
      title: "Renovation & Interior Fit-Out",
      titleEn: "Refined Craftsmanship & Turnkey Delivery",
      description:
        "Structural and aesthetic transformation of existing buildings through curated natural materials, millimetric joinery details, and turnkey interior execution.",
      scopeDetails: "Structural Renewal · Fine Interior Craft · Turnkey Delivery",
    },
  ],
  ar: [
    {
      id: "yapi-insaat",
      index: "01",
      title: "التطبيقات الإنشائية والهندسة المدنية",
      titleEn: "الهيكل الحامل والبنية الفوقية",
      description:
        "إدارة هندسية متكاملة تبدأ من دراسة التربة والأساسات والأنظمة الإنشائية الخرسانية والفولاذية وصولاً إلى التنفيذ الكامل وتسليم المفتاح.",
      scopeDetails: "الخرسانة المسلحة والفولاذ · البنية الفوقية · إدارة المواقع",
    },
    {
      id: "mimari-uygulama",
      index: "02",
      title: "تصميم الواجهات والفضاءات المعمارية",
      titleEn: "الحجر الطبيعي والخرسانة والزجاج",
      description:
        "حلول مكانية خالدة تجمع بين واجهات الحجر الجيري والترافرتين الطبيعي، والخرسانة المعمارية الظاهرة، وأنظمة الزجاج البانورامي المؤكسد.",
      scopeDetails: "التصميم المعماري · واجهات الحجر الطبيعي · هندسة التفاصيل",
    },
    {
      id: "renovasyon-ic-mimari",
      index: "03",
      title: "التجديد والتشطيبات المعمارية الدقيقة",
      titleEn: "حرفية التنفيذ والتسليم المتكامل",
      description:
        "تطوير وتحديث المباني القائمة إنشائياً وجمالياً عبر اختيار الخامات الطبيعية النقية وتنفيذ أعمال التشطيبات الداخلية بأعلى معايير الدقة.",
      scopeDetails: "التطوير الإنشائي · التشطيبات الفاخرة · تسليم مفتاح",
    },
  ],
};

const ZEYTINBURNU_GALLERY_IMAGES = [
  "/images/projects/zeytinburnu-g33/01-facade-hero.webp",
  "/images/projects/zeytinburnu-g33/02-demolition-rooftop.webp",
  "/images/projects/zeytinburnu-g33/03-demolition-spray.webp",
  "/images/projects/zeytinburnu-g33/04-demolition-street.webp",
  "/images/projects/zeytinburnu-g33/05-excavation.webp",
  "/images/projects/zeytinburnu-g33/06-grobeton.webp",
  "/images/projects/zeytinburnu-g33/07-raft-foundation-rebar.webp",
  "/images/projects/zeytinburnu-g33/08-foundation-pour.webp",
  "/images/projects/zeytinburnu-g33/09-waterproofing-membrane.webp",
  "/images/projects/zeytinburnu-g33/10-asmolen-slab.webp",
  "/images/projects/zeytinburnu-g33/11-engineers-blueprints.webp",
  "/images/projects/zeytinburnu-g33/12-structure-skeleton.webp",
];

const ZEYTINBURNU_STAGES_TR: ProjectTransformationStage[] = [
  {
    id: "demolition",
    number: "01",
    progressPercent: 12,
    title: "Kontrollü Çatı Yıkımı & Kentsel Dönüşüm",
    badge: "Aşama 01 · Yıkım & Güvenlik",
    description:
      "Bitişik nizam yoğun sokak dokusunda, çevre binaların ve yayaların güvenliği için mini ekskavatör vinçle çatıya çıkarılarak bina kat kat cerrahi hassasiyetle yıkıldı. Toz bastırma su jetiyle çevre rahatsız edilmeden moloz tahliyesi sağlandı.",
    image: "/images/projects/zeytinburnu-g33/02-demolition-rooftop.webp",
    secondaryImage: "/images/projects/zeytinburnu-g33/03-demolition-spray.webp",
    tags: ["Kentsel Dönüşüm", "Çatı Yıkımı", "Toz Bastırma Jeti", "Bitişik Nizam"],
  },
  {
    id: "excavation",
    number: "02",
    progressPercent: 24,
    title: "Derin Hafriyat & Grobeton Zemin Hazırlığı",
    badge: "Aşama 02 · Zemin & Grobeton",
    description:
      "Komşu bina temelleri korunarak temel kotuna kadar hafriyat gerçekleştirildi. Zemin sıkıştırma ve tesviyesinin ardından, su yalıtımı ve temel donatısı için düzgün bir çalışma yüzeyi sağlayan grobeton serimi tamamlandı.",
    image: "/images/projects/zeytinburnu-g33/05-excavation.webp",
    secondaryImage: "/images/projects/zeytinburnu-g33/06-grobeton.webp",
    tags: ["Hafriyat", "Grobeton Serimi", "Zemin İyileştirme"],
  },
  {
    id: "foundation",
    number: "03",
    progressPercent: 40,
    title: "Depreme Dayanıklı Radye Temel Donatısı",
    badge: "Aşama 03 · Radye Temel & Donatı",
    description:
      "Güncel deprem yönetmeliğine uygun olarak yüksek mukavemetli nervürlü demirlerle çift sıra temel donatı ağı örüldü. Kolon ve perde filizleri statik projeye göre milimetrik hassasiyetle sabitlenip hazır beton dökümüne hazırlandı.",
    image: "/images/projects/zeytinburnu-g33/07-raft-foundation-rebar.webp",
    secondaryImage: "/images/projects/zeytinburnu-g33/08-foundation-pour.webp",
    tags: ["Radye Temel", "Çift Donatı", "Deprem Güvenliği", "C30/37 Beton"],
  },
  {
    id: "waterproofing",
    number: "04",
    progressPercent: 54,
    title: "SIM Penguen Membran ile Perde Duvar Yalıtımı",
    badge: "Aşama 04 · Su & Nem Yalıtımı",
    description:
      "Temel ve bodrum perde duvarlarında neme, yer altı sularına ve korozyona karşı SIM Penguen polimerik bitümlü su yalıtım membranları şaloma aleviyle uygulandı; drenaj çakılı ve boru hattıyla temel bohçalama tamamlandı.",
    image: "/images/projects/zeytinburnu-g33/09-waterproofing-membrane.webp",
    tags: ["SIM Penguen Membran", "Bohçalama Yalıtım", "Korozyon Kalkanı"],
  },
  {
    id: "asmolen",
    number: "05",
    progressPercent: 68,
    title: "Akustik ve Isı Yalıtımlı Asmolen Döşeme",
    badge: "Aşama 05 · Tavan & Asmolen Döşeme",
    description:
      "Kat aralarında taşıyıcı nervür kirişleri arasına FIXA marka EPS asmolen dolgu blokları yerleştirildi. Bu teknoloji, binanın statik deprem yükünü hafifletirken katlar arasında üst düzey ses ve ısı yalıtımı sunar.",
    image: "/images/projects/zeytinburnu-g33/10-asmolen-slab.webp",
    tags: ["Asmolen Döşeme", "FIXA EPS", "Nervürlü Kiriş", "Akustik Yalıtım"],
  },
  {
    id: "supervision",
    number: "06",
    progressPercent: 80,
    title: "Saha Mühendisliği & Statik Pafta Denetimi",
    badge: "Aşama 06 · Mühendislik & Denetim",
    description:
      "Genç Group teknik ekibi ve şantiye şefleri, beton dökümü öncesinde statik donatı paftalarını, kolon-kiriş birleşim bölgelerini ve elektrik/mekanik rezervasyonlarını sahada adım adım kontrol etti.",
    image: "/images/projects/zeytinburnu-g33/11-engineers-blueprints.webp",
    tags: ["Saha Mühendisliği", "Statik Pafta Kontrolü", "Kalite Denetimi"],
  },
  {
    id: "structure",
    number: "07",
    progressPercent: 88,
    title: "Betonarme Kaba Yapı & Kat Kat Yükseliş",
    badge: "Aşama 07 · Kaba Yapı Tamamlandı",
    description:
      "Tüm katların kalıp, donatı ve beton döküm döngüleri tamamlanarak betonarme iskelet eksiksiz ayağa kaldırıldı. Şantiye cephe güvenlik perdeleri ve ruhsat tabelası eşliğinde duvar örme ve tesisat aşamasına geçildi.",
    image: "/images/projects/zeytinburnu-g33/12-structure-skeleton.webp",
    tags: ["Betonarme Karkas", "Şantiye Güvenliği", "Ruhsatlı Yapı"],
  },
  {
    id: "facade",
    number: "08",
    progressPercent: 95,
    title: "Modern Ahşap Dokulu Metalbond Kompozit Cephe",
    badge: "Aşama 08 · Teslim Öncesi %95",
    description:
      "Metalbond alüminyum kompozit panellerle havalandırmalı cephe montajı tamamlandı. Sıcak ahşap dokulu balkon kaplamaları, antrasit/bronz çerçeveler ve geniş pencerelerle proje anahtar teslime hazır hale getirildi.",
    image: "/images/projects/zeytinburnu-g33/01-facade-hero.webp",
    tags: ["Metalbond Kompozit", "Ahşap Doku", "Modern Cephe", "Teslim Aşaması"],
  },
];

const ZEYTINBURNU_STAGES_AR: ProjectTransformationStage[] = [
  {
    id: "demolition",
    number: "01",
    progressPercent: 12,
    title: "الهدم الآمن من السطح والتحول الحضري",
    badge: "المرحلة 01 · الهدم والسلامة الميدانية",
    description:
      "في شارع سيت نظام الحيوي ذي الأبنية المتلاصقة، رُفع حفار ميكانيكي بالرافعة إلى أعلى سطح المبنى القديم المتهالك، لتفكيكه طابقاً تلو الآخر بأمان ودقة، مع استخدام رشاشات مائية لكبح الغبار وتأمين سلامة الجوار والمشاة.",
    image: "/images/projects/zeytinburnu-g33/02-demolition-rooftop.webp",
    secondaryImage: "/images/projects/zeytinburnu-g33/03-demolition-spray.webp",
    tags: ["التحول الحضري", "هدم آمن من السطح", "كبح الأتربة", "أبنية متلاصقة"],
  },
  {
    id: "excavation",
    number: "02",
    progressPercent: 24,
    title: "الحفريات العميقة وخرسانة النظافة (Grobeton)",
    badge: "المرحلة 02 · الحفر وتجهيز الأرضية",
    description:
      "تنفيذ الحفريات بدقة مع تدعيم الجدران المشتركة للأبنية المجاورة، تلاها تسوية ودك التربة هندسياً وصب طبقة خرسانة النظافة (Grobeton) لتأمين سطح أفقي صلب لاستقبال شبكات العزل المائي وحديد التسليح.",
    image: "/images/projects/zeytinburnu-g33/05-excavation.webp",
    secondaryImage: "/images/projects/zeytinburnu-g33/06-grobeton.webp",
    tags: ["الحفريات", "خرسانة النظافة", "تدعيم الجوار"],
  },
  {
    id: "foundation",
    number: "03",
    progressPercent: 40,
    title: "الأساس الحصيري المسلح المقاوم للزلازل (Radye Temel)",
    badge: "المرحلة 03 · الأساسات الزلزالية",
    description:
      "تنسيق شبكة تسليح حديدية مزدوجة عالية المقاومة وفق كود الزلازل التركي الحديث، وتثبيت أشاير الأعمدة وجدران القص بضبط ميليمتري، تلاها صب الخرسانة الجاهزة عالية المقاومة C30/37 بواسطة المضخات الهيدروليكية.",
    image: "/images/projects/zeytinburnu-g33/07-raft-foundation-rebar.webp",
    secondaryImage: "/images/projects/zeytinburnu-g33/08-foundation-pour.webp",
    tags: ["أساس حصيري Radye", "تسليح مزدوج", "أمان زلزالي", "خرسانة C30/37"],
  },
  {
    id: "waterproofing",
    number: "04",
    progressPercent: 54,
    title: "العزل المائي لجدران القبو بأغشية SIM PENGUEN",
    badge: "المرحلة 04 · العزل المائي والرطوبي",
    description:
      "تطبيق أغشية SIM PENGUEN البيتومينية البوليمرية المعتمدة باللهب على كامل جدران القبو الخرسانية لحماية الهيكل للأبد من المياه الجوفية والرطوبة، مع إنشاء قنوات تصريف الحصى (Drenaj).",
    image: "/images/projects/zeytinburnu-g33/09-waterproofing-membrane.webp",
    tags: ["أغشية SIM Penguen", "عزل جدران القبو", "حماية من الرطوبة"],
  },
  {
    id: "asmolen",
    number: "05",
    progressPercent: 68,
    title: "الأسقف الهندسية العازلة للصوت والحرارة (Asmolen)",
    badge: "المرحلة 05 · أسقف الهوردي العازلة",
    description:
      "استخدام بلوكات البوليسترين الخفيف (FIXA EPS) بين الأعصاب الخرسانية المسلحة، مما يخفف الوزن الذاتي للمبنى ويمنحه قدرة استثنائية على امتصاص الصدمات الزلزالية مع توفير عزل صوتي وحراري تام بين الوحدات السكنية.",
    image: "/images/projects/zeytinburnu-g33/10-asmolen-slab.webp",
    tags: ["أسقف Asmolen", "بلوكات FIXA EPS", "عزل صوتي فائق", "أعصاب خرسانية"],
  },
  {
    id: "supervision",
    number: "06",
    progressPercent: 80,
    title: "الرقابة الهندسية الميدانية وتدقيق المخططات الإنشائية",
    badge: "المرحلة 06 · الإشراف الهندسي المباشر",
    description:
      "تواجد الفريق الهندسي وإدارة المشروع مباشرة فوق أسطح العمل لمطابقة المخططات الإنشائية والتنفيذية لحديد التسليح والتمديدات قبل كل مرحلة صب، لضمان أعلى معايير الجودة والصلابة الإنشائية.",
    image: "/images/projects/zeytinburnu-g33/11-engineers-blueprints.webp",
    tags: ["إشراف ميداني", "تدقيق المخططات", "انضباط هندسي"],
  },
  {
    id: "structure",
    number: "07",
    progressPercent: 88,
    title: "اكتمال الهيكل الخرساني والارتفاع الطابقي الكامل",
    badge: "المرحلة 07 · الهيكل الإنشائي المكتمل",
    description:
      "اكتمال كافة الطوابق الخرسانية وصب الأعمدة والأسقف وتركيب سياج الموقع واللوحة الرسمية للترخيص، والانتقال لأعمال بناء القواطع والتمديدات الكهروميكانيكية والتشطيبات الأولية.",
    image: "/images/projects/zeytinburnu-g33/12-structure-skeleton.webp",
    tags: ["هيكل خرساني كامل", "أمان الموقع", "مشروع مرخص"],
  },
  {
    id: "facade",
    number: "08",
    progressPercent: 95,
    title: "الواجهة المعمارية الحديثة بألواح الكومبوزيت الفاخرة",
    badge: "المرحلة 08 · قيد التسليم (%95)",
    description:
      "تكسية الواجهة بنظام الواجهات المهواة من ألواح الألمنيوم المركبة (Metalbond)، بتوليفة متناسقة تجمع بين فخامة تأثير الخشب الطبيعي على الشرفات وإطارات عصرية ونوافذ بانورامية، ليصبح المبنى جاهزاً للتسليم النهائي.",
    image: "/images/projects/zeytinburnu-g33/01-facade-hero.webp",
    tags: ["ألواح Metalbond", "تأثير خشب طبيعي", "عمارة حديثة", "تسليم مفتاح"],
  },
];

const ZEYTINBURNU_STAGES_EN: ProjectTransformationStage[] = [
  {
    id: "demolition",
    number: "01",
    progressPercent: 12,
    title: "Precision Rooftop Demolition & Urban Regeneration",
    badge: "Stage 01 · Demolition & Safety",
    description:
      "In a dense urban street, a mini-excavator was crane-lifted to the rooftop of the aging 5-story building to systematically dismantle it floor-by-floor with surgical care. High-pressure water misting suppressed dust to safeguard neighbors and passersby.",
    image: "/images/projects/zeytinburnu-g33/02-demolition-rooftop.webp",
    secondaryImage: "/images/projects/zeytinburnu-g33/03-demolition-spray.webp",
    tags: ["Urban Regeneration", "Rooftop Demolition", "Dust Suppression", "Party Wall Protection"],
  },
  {
    id: "excavation",
    number: "02",
    progressPercent: 24,
    title: "Deep Excavation & Blinding Concrete Layer",
    badge: "Stage 02 · Ground & Blinding",
    description:
      "Excavation proceeded down to foundation level while shoring adjacent structures. Following precision soil compaction and leveling, a smooth blinding concrete (grobeton) slab was cast to provide a level substrate for tanking and reinforcement.",
    image: "/images/projects/zeytinburnu-g33/05-excavation.webp",
    secondaryImage: "/images/projects/zeytinburnu-g33/06-grobeton.webp",
    tags: ["Excavation", "Blinding Concrete", "Ground Engineering"],
  },
  {
    id: "foundation",
    number: "03",
    progressPercent: 40,
    title: "Seismic Dual-Grid Raft Foundation Reinforcement",
    badge: "Stage 03 · Raft Foundation",
    description:
      "Engineered to stringent Turkish seismic building codes, a dense dual-layer high-tensile rebar grid was tied with precision column starter bars and shear wall anchors prior to high-spec C30/37 ready-mix concrete pouring via mobile boom pump.",
    image: "/images/projects/zeytinburnu-g33/07-raft-foundation-rebar.webp",
    secondaryImage: "/images/projects/zeytinburnu-g33/08-foundation-pour.webp",
    tags: ["Raft Foundation", "Dual Rebar Grid", "Seismic Safety", "C30/37 Concrete"],
  },
  {
    id: "waterproofing",
    number: "04",
    progressPercent: 54,
    title: "Subterranean Tanking with SIM PENGUEN Polymer Membrane",
    badge: "Stage 04 · Waterproofing Shield",
    description:
      "Torch-applied certified SIM PENGUEN polymer bituminous waterproofing membranes were applied seamlessly across basement retaining walls, combined with gravel drainage trenches to ensure permanent hydrostatic protection.",
    image: "/images/projects/zeytinburnu-g33/09-waterproofing-membrane.webp",
    tags: ["SIM Penguen Membrane", "Basement Tanking", "Moisture Shield"],
  },
  {
    id: "asmolen",
    number: "05",
    progressPercent: 68,
    title: "Acoustic & Thermal Lightweight Ribbed Slabs (Asmolen)",
    badge: "Stage 05 · Insulated Floor Slabs",
    description:
      "Engineered reinforced concrete joist ribs were paired with FIXA brand EPS lightweight infill blocks. This structural slab configuration reduces building deadweight during seismic events while maximizing acoustic and thermal isolation between residences.",
    image: "/images/projects/zeytinburnu-g33/10-asmolen-slab.webp",
    tags: ["Asmolen Slabs", "FIXA EPS Infill", "Acoustic Comfort", "Seismic Weight Reduction"],
  },
  {
    id: "supervision",
    number: "06",
    progressPercent: 80,
    title: "On-Site Structural Blueprint Audit & Field Supervision",
    badge: "Stage 06 · Engineering Supervision",
    description:
      "Genç Group site engineers and project directors conducted rigorous live inspections directly on the construction deck, verifying rebar schedules, beam connections, and MEP sleeves against structural engineering blueprints prior to each pour.",
    image: "/images/projects/zeytinburnu-g33/11-engineers-blueprints.webp",
    tags: ["Site Engineering", "Blueprint Verification", "Quality Control"],
  },
  {
    id: "structure",
    number: "07",
    progressPercent: 88,
    title: "Superstructure Skeleton Completion & Hoarding",
    badge: "Stage 07 · Structural Frame Complete",
    description:
      "All reinforced concrete frame cycles were brought to full elevation under strict site safety hoarding and municipal permit signage, transitioning seamlessly into masonry partition walls and MEP rough-ins.",
    image: "/images/projects/zeytinburnu-g33/12-structure-skeleton.webp",
    tags: ["Concrete Frame", "Site Safety", "Permitted Build"],
  },
  {
    id: "facade",
    number: "08",
    progressPercent: 95,
    title: "Modern Woodgrain Metalbond Architectural Composite Facade",
    badge: "Stage 08 · Near Handover (95%)",
    description:
      "Installation of the ventilated facade clad in premium Metalbond aluminum composite panels. Rich woodgrain balcony returns, warm architectural framing, and large-format glazed apertures deliver an eye-catching contemporary street presence ready for handover.",
    image: "/images/projects/zeytinburnu-g33/01-facade-hero.webp",
    tags: ["Metalbond Composite", "Woodgrain Finish", "Modern Architecture", "Turnkey Handover"],
  },
];

const CONSTRUCTION_PROJECTS_BY_LOCALE: Record<Locale, ConstructionProjectStudy[]> = {
  tr: [
    {
      slug: "zeytinburnu-seyitnizam-g33",
      code: "01",
      title: "Zeytinburnu Seyitnizam G33 Konut Projesi",
      category: "Kentsel Dönüşüm & Konut Mimarisi",
      statusLabel: "TESLİM AŞAMASINDA · %95",
      location: "Seyitnizam Mah., Zeytinburnu / İstanbul",
      year: "2025 – 2026",
      area: "Butik Konut & Zemin Ticari",
      editorialSummary:
        "İstanbul Zeytinburnu’nda riskli yapının cerrahi hassasiyetle yıkımıyla başlayan, çift donatılı radye temel ve asmolen döşeme mühendisliğiyle yükselen, ahşap dokulu modern kompozit cephesiyle teslime hazırlanan çağdaş yaşam yapısı.",
      architecturalBrief:
        "Genç Group İnşaat’ın kentsel dönüşüm alanındaki anahtar teslim uygulama disiplinini ortaya koyan Seyitnizam G33 Projesi; yoğun sokak dokusunda çevre binaların güvenliğini önceleyen kontrollü çatı yıkımıyla başladı. Ardından zemin iyileştirmesi, grobeton serimi ve C30/37 hazır betonla güçlendirilmiş çift kat donatılı radye temel sistemi tamamlandı. Bodrum perde duvarlarında SIM Penguen polimerik bitümlü membran su yalıtımı uygulanırken, kat döşemelerinde asmolen sistemiyle yüksek ses ve ısı yalıtımı sağlandı. Cephede ahşap dokulu ve modern tonlu Metalbond kompozit kaplama, geniş açıklıklı pencere kurgusu ve şık derz profilleriyle modern kentsel silüete prestijli bir imza atıldı.",
      heroImage: "/images/projects/zeytinburnu-g33/01-facade-hero.webp",
      galleryImages: ZEYTINBURNU_GALLERY_IMAGES,
      specifications: [
        "Kontrollü Kentsel Dönüşüm ve Toz Bastırma Sistemli Güvenli Yıkım",
        "Deprem Yönetmeliğine Tam Uyumlu Çift Donatılı Radye Jeneral Temel",
        "SIM Penguen Membran ile Perde Duvar & Temel Bohçalama Su Yalıtımı",
        "Hafif, Akustik ve Isı Yalıtımlı Asmolen / Nervürlü Tavan Sistemi",
        "Metalbond Ahşap Dokulu Havalandırmalı Alüminyum Kompozit Cephe",
        "Statik Pafta Kontrolleriyle Kesintisiz Saha Mühendislik Denetimi",
      ],
      beforeAfter: {
        beforeImage: "/images/projects/zeytinburnu-g33/02-demolition-rooftop.webp",
        beforeLabel: "Önceki Riskli Yapı & Yıkım",
        afterImage: "/images/projects/zeytinburnu-g33/01-facade-hero.webp",
        afterLabel: "Modern Kompozit Cephe (Teslime Hazır)",
      },
      stages: ZEYTINBURNU_STAGES_TR,
    },
    {
      slug: "modern-konut-ve-yasam-projesi",
      code: "02",
      title: "Çağdaş Konut & Yaşam Alanı Mimarisi",
      category: "Konut & Yaşam",
      statusLabel: "MİMARİ PORTFOLYO",
      location: "İstanbul",
      year: "Kurumsal Portfolyo",
      area: "Özel Proje",
      editorialSummary:
        "Doğal traverten bloklar, dokulu brüt beton konsollar ve gün ışığını içeri davet eden panoramik cam yüzeylerin dengeli birlikteliği.",
      architecturalBrief:
        "Genç Group İnşaat’ın mimari vizyonunu temsil eden bu yaklaşım; doğal malzemelerin zamansız dokusunu, yüksek statik dayanım ve ince işçilik standartlarıyla birleştirir.",
      heroImage: "/images/architecture-limestone.jpg",
      galleryImages: ["/images/arch-study-1.png", "/images/architecture-limestone.jpg"],
      specifications: [
        "Kesme Doğal Taş ve Brüt Beton Cephe Kurgusu",
        "Yüksek Yalıtımlı Anodize Bronz Doğrama Sistemleri",
        "Güncel Deprem Yönetmeliğine Uygun Taşıyıcı Sistem",
        "Kademeli Teras ve Doğal Peyzaj Planlaması",
      ],
    },
    {
      slug: "ticari-ve-kurumsal-yapi-yaklasimi",
      code: "03",
      title: "Kurumsal & Ticari Yapı Mimarisi",
      category: "Ticari & Kurumsal",
      statusLabel: "MİMARİ PORTFOLYO",
      location: "İstanbul",
      year: "Kurumsal Portfolyo",
      area: "Özel Proje",
      editorialSummary:
        "Yalın geometrik kütle dili, esnek kat planları ve uzun ömürlü cephe malzemeleriyle kurgulanan çağdaş çalışma ve ticaret alanları.",
      architecturalBrief:
        "İş dünyasının gereksinimlerine yanıt veren modüler mekân kurgusu, dengeli cephe oranları ve mühendislik disipliniyle şekillenen kurumsal yapı çözümleri.",
      heroImage: "/images/arch-study-1.png",
      galleryImages: ["/images/architecture-limestone.jpg", "/images/arch-study-1.png"],
      specifications: [
        "Esnek ve Modüler Ticari Kat Planlaması",
        "Sürdürülebilir Cephe ve İklimlendirme Altyapısı",
        "Nitelikli İnce Yapı ve Doğal Zemin Uygulamaları",
        "Bütüncül Saha ve Süreç Yönetimi",
      ],
    },
  ],
  en: [
    {
      slug: "zeytinburnu-seyitnizam-g33",
      code: "01",
      title: "Zeytinburnu Seyitnizam G33 Residential Project",
      category: "Urban Regeneration & Modern Living",
      statusLabel: "HANDOVER PHASE · 95% COMPLETE",
      location: "Seyitnizam, Zeytinburnu / Istanbul",
      year: "2025 – 2026",
      area: "Bespoke Residential & Ground Retail",
      editorialSummary:
        "A turnkey urban transformation milestone in central Istanbul: from surgical rooftop demolition to seismic-grade raft foundations, insulated ribbed slabs, and a striking timber-accented composite facade.",
      architecturalBrief:
        "Demonstrating the full turnkey engineering mastery of Genç Group İnşaat, Seyitnizam G33 replaced an obsolete structure in a dense urban neighborhood. The site team executed precision rooftop demolition with dust suppression water misting between adjacent party walls. Following ground stabilization and blinding concrete, a heavy-duty dual-mesh raft foundation was engineered to strict seismic codes. Below-grade perimeter walls received multi-layer SIM Penguen polymer waterproofing. Upper floors were constructed using lightweight insulated joist (asmolen) slab plates for thermal and acoustic isolation. The project is crowned with a modern rainscreen Metalbond composite facade with woodgrain textures and crisp architectural reveals.",
      heroImage: "/images/projects/zeytinburnu-g33/01-facade-hero.webp",
      galleryImages: ZEYTINBURNU_GALLERY_IMAGES,
      specifications: [
        "Surgical Top-Down Urban Regeneration Demolition in Dense Setting",
        "Dual-Grid Seismic Raft Foundation Engineered to Strict Building Codes",
        "SIM Penguen Subterranean Polymer Bituminous Waterproofing & Drainage",
        "Lightweight Insulated Joist (Asmolen) Slabs for Acoustic & Thermal Comfort",
        "Architectural Metalbond Woodgrain & Ochre Aluminum Composite Facade",
        "Continuous On-Site Engineering Inspection & Blueprint Compliance",
      ],
      beforeAfter: {
        beforeImage: "/images/projects/zeytinburnu-g33/02-demolition-rooftop.webp",
        beforeLabel: "Obsolete Structure & Demolition",
        afterImage: "/images/projects/zeytinburnu-g33/01-facade-hero.webp",
        afterLabel: "Modern Composite Facade (Handover Ready)",
      },
      stages: ZEYTINBURNU_STAGES_EN,
    },
    {
      slug: "modern-konut-ve-yasam-projesi",
      code: "02",
      title: "Contemporary Residential & Living Architecture",
      category: "Residential & Living",
      statusLabel: "ARCHITECTURAL PORTFOLIO",
      location: "Istanbul",
      year: "Corporate Portfolio",
      area: "Bespoke Project",
      editorialSummary:
        "A balanced composition of natural travertine blocks, board-formed cantilevered concrete slabs, and panoramic glazing that invites natural daylight inside.",
      architecturalBrief:
        "Representing the architectural vision of Genç Group İnşaat, this study unites the timeless texture of natural stone with high seismic structural resilience and refined interior detailing.",
      heroImage: "/images/architecture-limestone.jpg",
      galleryImages: ["/images/arch-study-1.png", "/images/architecture-limestone.jpg"],
      specifications: [
        "Ashlar Natural Stone & Board-Formed Concrete Facade",
        "High-Insulation Anodized Bronze Glazing Systems",
        "Seismic-Code Compliant Structural Engineering",
        "Stepped Terraces & Mediterranean Courtyard Landscaping",
      ],
    },
    {
      slug: "ticari-ve-kurumsal-yapi-yaklasimi",
      code: "03",
      title: "Corporate & Commercial Architectural Study",
      category: "Commercial & Corporate",
      statusLabel: "ARCHITECTURAL PORTFOLIO",
      location: "Istanbul",
      year: "Corporate Portfolio",
      area: "Bespoke Project",
      editorialSummary:
        "Contemporary workspaces and commercial volumes defined by pure geometric massing, flexible floor plates, and enduring facade materials.",
      architecturalBrief:
        "Corporate building solutions shaped by modular spatial planning, balanced facade proportions, and rigorous engineering discipline tailored for modern enterprises.",
      heroImage: "/images/arch-study-1.png",
      galleryImages: ["/images/architecture-limestone.jpg", "/images/arch-study-1.png"],
      specifications: [
        "Flexible & Modular Commercial Floor Planning",
        "Sustainable Facade & Climate Infrastructure",
        "High-Craft Interior Fit-Out & Natural Flooring",
        "Integrated Site & Project Management",
      ],
    },
  ],
  ar: [
    {
      slug: "zeytinburnu-seyitnizam-g33",
      code: "01",
      title: "مشروع زيتين بورنو سيت نظام G33 السكني",
      category: "إعادة إعمار حضري ومبنى سكني عصري",
      statusLabel: "قيد التسليم · نسبة الإنجاز 95%",
      location: "حي سيت نظام، زيتين بورنو / إسطنبول",
      year: "2025 – 2026",
      area: "سكني وتجاري مستقل",
      editorialSummary:
        "صرح سكني حديث في قلب زيتين بورنو بإسطنبول، بدأ بهدم هندسي آمن لمبنى قديم، وشُيّد بأساسات حصيرية زلزالية وأسقف هوردي عازلة، وتُوج بواجهة ألمنيوم مركبة فاخرة بتأثيرات خشبية عصرية.",
      architecturalBrief:
        "يجسد مشروع Seyitnizam G33 الكفاءة الهندسية والتنفيذية لشركة Genç Group İnşaat في مشاريع التحول الحضري (Kentsel Dönüşüm). انطلقت الأعمال بعملية هدم دقيقة نُفذت من أعلى السطح باستخدام تقنيات رشاشات المياه لتخميد الأتربة وحماية المباني الملاصقة. تلى ذلك أعمال الحفريات العميقة وصب خرسانة النظافة وتجهيز شبكة حديد تسليح مزدوجة للأساس الحصيري (Radye Temel) بمطابقة كود الزلازل التركي. كما تم عزل جدران القبو بأغشية SIM Penguen البيتومينية المعتمدة، واستخدام أسقف الهوردي الخفيفة (Asmolen EPS) لتحقيق أعلى عزل صوتي وحراري وتقليل أحمال الزلازل، وصولاً لتركيب واجهات الكومبوزيت الفاخرة المقاومة للتقلبات الجوية.",
      heroImage: "/images/projects/zeytinburnu-g33/01-facade-hero.webp",
      galleryImages: ZEYTINBURNU_GALLERY_IMAGES,
      specifications: [
        "هدم آمن وتحول حضري معتمد (Kentsel Dönüşüm) بحماية كاملة للأبنية المجاورة",
        "أساس حصيري زلزالي مسلح (Radye Temel) بشبكتي حديد تسليح عالية الإجهاد",
        "عزل مائي متقدم لجدران القبو والأساسات بأغشية SIM Penguen البوليمرية",
        "أسقف هوردي خفيفة عازلة (Asmolen Döşeme) لعزل الصوت والحرارة وتخفيف أوزان الزلازل",
        "واجهات خارجية من الألمنيوم المركب (Metalbond) بتأثير خشبي وفواصل معمارية دقيقة",
        "رقابة هندسية ميدانية دائمة ومطابقة المخططات الإنشائية قبل كل مرحلة صب",
      ],
      beforeAfter: {
        beforeImage: "/images/projects/zeytinburnu-g33/02-demolition-rooftop.webp",
        beforeLabel: "المبنى القديم ومرحلة الهدم الآمن",
        afterImage: "/images/projects/zeytinburnu-g33/01-facade-hero.webp",
        afterLabel: "الواجهة العصرية المكتملة (جاهز للتسليم)",
      },
      stages: ZEYTINBURNU_STAGES_AR,
    },
    {
      slug: "modern-konut-ve-yasam-projesi",
      code: "02",
      title: "عمارة المساكن ومساحات الحياة المعاصرة",
      category: "سكني ومعيشي",
      statusLabel: "المحفظة المعمارية",
      location: "إسطنبول",
      year: "المحفظة المؤسسية",
      area: "مشروع خاص",
      editorialSummary:
        "تناغم متوازن بين كتل الترافرتين الطبيعي، والأسقف الخرسانية الكابولية، والواجهات الزجاجية البانورامية التي تستقطب الضوء الطبيعي.",
      architecturalBrief:
        "يمثل هذا المفهوم الرؤية المعمارية لشركة Genç Group İnşaat؛ حيث يجمع بين الملمس الخالد للأحجار الطبيعية والمتانة الإنشائية العالية ودقة التفاصيل الداخلية.",
      heroImage: "/images/architecture-limestone.jpg",
      galleryImages: ["/images/arch-study-1.png", "/images/architecture-limestone.jpg"],
      specifications: [
        "واجهات من الحجر الطبيعي المقصوص والخرسانة المعمارية",
        "أنظمة واجهات برونزية مؤكسدة عالية العزل الحراري والصوتي",
        "نظام إنشائي مقاوم للزلازل وفق أحدث المعايير الهندسية",
        "تراسات متدرجة وتنسيق حدائق طبيعي متكامل",
      ],
    },
    {
      slug: "ticari-ve-kurumsal-yapi-yaklasimi",
      code: "03",
      title: "عمارة المباني التجارية والمؤسسية",
      category: "تجاري ومؤسسي",
      statusLabel: "المحفظة المعمارية",
      location: "إسطنبول",
      year: "المحفظة المؤسسية",
      area: "مشروع خاص",
      editorialSummary:
        "مساحات عمل وتجارة معاصرة تتميز بلغة هندسية نقية، ومخططات طوابق مرنة، وخامات واجهات مستدامة طويلة الأمد.",
      architecturalBrief:
        "حلول مبانٍ مؤسسية مصممة بتخطيط مكاني مرن يلبي متطلبات الأعمال الحديثة، مع نسب واجهات متزنة وانضباط هندسي شامل.",
      heroImage: "/images/arch-study-1.png",
      galleryImages: ["/images/architecture-limestone.jpg", "/images/arch-study-1.png"],
      specifications: [
        "تخطيط طوابق تجارية مرن وقابل للتخصيص",
        "بنية تحتية مستدامة للواجهات والتكييف",
        "تشطيبات داخلية عالية الجودة وأرضيات طبيعية",
        "إدارة هندسية وميدانية شاملة للمشروع",
      ],
    },
  ],
};

// Legacy default exports for backward compatibility
export const AUTOMOTIVE_SERVICES = AUTOMOTIVE_SERVICES_BY_LOCALE.tr;
export const AUTOMOTIVE_PORTFOLIO_ITEMS = AUTOMOTIVE_PORTFOLIO_BY_LOCALE.tr;
export const CONSTRUCTION_POTENTIAL_SERVICES = CONSTRUCTION_SERVICES_BY_LOCALE.tr;
export const CONSTRUCTION_PROJECT_STUDIES = CONSTRUCTION_PROJECTS_BY_LOCALE.tr;

export function getAutomotiveServices(locale: Locale): AutomotiveService[] {
  return AUTOMOTIVE_SERVICES_BY_LOCALE[locale] || AUTOMOTIVE_SERVICES_BY_LOCALE.tr;
}

export function getAutomotivePortfolio(locale: Locale): AutomotivePortfolioItem[] {
  return AUTOMOTIVE_PORTFOLIO_BY_LOCALE[locale] || AUTOMOTIVE_PORTFOLIO_BY_LOCALE.tr;
}

export function getConstructionServices(locale: Locale): ConstructionServiceCategory[] {
  return CONSTRUCTION_SERVICES_BY_LOCALE[locale] || CONSTRUCTION_SERVICES_BY_LOCALE.tr;
}

export function getConstructionProjects(locale: Locale): ConstructionProjectStudy[] {
  return CONSTRUCTION_PROJECTS_BY_LOCALE[locale] || CONSTRUCTION_PROJECTS_BY_LOCALE.tr;
}

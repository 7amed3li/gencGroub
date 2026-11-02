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

export const BRAND_INFO = {
  name: "GENÇ GROUP",
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
    address:
      "Abdurrahman Nafiz Gürman Mah., General Ali Rıza Gürcan Cad., Platform Sitesi Otoparkı / Merter Suites, 34160 Güngören / İstanbul",
    phoneDisplay: "0543 819 30 24",
    phoneHref: "tel:+905438193024",
    whatsappHref: "https://wa.me/905438193024",
    email: "merter@autoclub.com.tr",
    mapsUrl:
      "https://www.google.com/maps/search/?api=1&query=Abdurrahman+Nafiz+G%C3%BCrman+Mahallesi+General+Ali+R%C4%B1za+G%C3%BCrcan+Caddesi+Platform+Sitesi+Merter+%C4%B0stanbul",
    instagramUrl: "https://www.instagram.com/autoclubmerter/",
    instagramHandle: "@autoclubmerter",
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
    sectorTr: "İnşaat & Yapı",
    sectorEn: "Construction & Architecture",
    sectorAr: "العمارة والإنشاءات",
    region: "İstanbul, Türkiye",
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
      title: "Kaporta Onarımı",
      titleEn: "Karoser & Yapısal Hizalama",
      subtitle: "Fabrika Çıkış Panel Geometrisi ve Karoser Restorasyonu",
      description:
        "Karoser ve tampon aksamında oluşan deformasyonlar, aracın özgün tasarım hatlarına ve fabrika çıkış panel boşluk standartlarına sadık kalınarak onarılır. Her müdahale, aracın yapısal ve görsel bütünlüğünü ilk günkü dengesine kavuşturmak üzere kurgulanır.",
      technicalApproach: [
        "Şasi ve karoser hatlarının lazer referanslı yapısal analizi",
        "Fabrika toleranslarında panel ve menteşe simetri kontrolü",
        "Boya öncesi mikron hassasiyetinde yüzey tesviyesi",
      ],
      image: "/images/instagram/post-2.jpg",
      imageAlt:
        "AutoClub Merter Range Rover Vogue kaporta, tampon ve Black Pack dönüşüm uygulaması",
    },
    {
      id: "oto-boya",
      index: "02",
      slug: "oto-boya",
      title: "Oto Boya & Yüzey Koruma",
      titleEn: "Renk Eşleştirme, PPF & Seramik",
      subtitle: "Optik Renk Uyumu, Black Pack Dönüşümü ve 9H Seramik Kalkanı",
      description:
        "Otomotiv boya uygulaması yalnızca rengin yenilenmesi değil; yüzeyin ışık altındaki derinlik ve yansıma karakterinin yeniden inşasıdır. Hassas renk eşleştirme, Black Pack detay boyama, seramik kaplama ve şeffaf ya da saten mat PPF zırh uygulamalarıyla kalıcı parlaklık sağlanır.",
      technicalApproach: [
        "Orijinal fabrika tonuyla birebir optik renk eşleştirme",
        "Tozsuz stüdyo ortamında katmanlı boya ve 9H seramik uygulaması",
        "Kendi kendini yenileyen şeffaf veya saten mat PPF koruma filmi",
      ],
      image: "/images/instagram/post-1.jpg",
      imageAlt:
        "AutoClub Merter Opel Frontera saten siyah mat PPF ve boya koruma stüdyosu",
    },
    {
      id: "boyasiz-gocuk-duzeltme",
      index: "03",
      slug: "boyasiz-gocuk-duzeltme",
      title: "Boyasız Göçük Düzeltme",
      titleEn: "Orijinal Yüzey Korunumu",
      subtitle: "Fabrika Boyasına Dokunmadan Optik Yüzey Kalibrasyonu",
      description:
        "Boya dokusunun zarar görmediği park hasarları ve dış etken kaynaklı göçükler, aracın orijinal fabrika boyasına hiçbir işlem uygulanmadan özel ekipman ve optik ışık kırılması teknikleriyle sıfırlanır.",
      technicalApproach: [
        "Optik LED ışık hatları altında yüzey gerilim analizi",
        "Orijinal boya katmanını koruyan milimetrik form geri kazanımı",
        "Fabrika çıkış yüzey orijinalliğinin ve araç değerinin korunması",
      ],
      image: "/images/instagram/post-5.jpg",
      imageAlt:
        "AutoClub Merter Platform LED ışık hatları altında BMW 5 Serisi yüzey kontrolü",
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
      image: "/images/instagram/post-2.jpg",
      imageAlt:
        "AutoClub Merter Range Rover Vogue bodywork, bumper restoration and Black Pack transformation",
    },
    {
      id: "oto-boya",
      index: "02",
      slug: "oto-boya",
      title: "Refinishing & Surface Protection",
      titleEn: "Optical Color Match, PPF & Ceramic",
      subtitle: "Color Matching, Black Pack Styling & 9H Ceramic Armor",
      description:
        "Automotive refinishing is more than renewing color—it is reconstructing the depth and light-reflection character of the surface. Precision color matching, Black Pack trim conversion, 9H ceramic coating, and self-healing gloss or satin-matte PPF ensure lasting brilliance.",
      technicalApproach: [
        "Exact optical color matching with original factory paint codes",
        "Multi-stage paint and 9H ceramic application in a dust-free studio",
        "Self-healing clear or satin-matte PPF armor protection",
      ],
      image: "/images/instagram/post-1.jpg",
      imageAlt:
        "AutoClub Merter Opel Frontera satin black matte PPF and paint protection studio",
    },
    {
      id: "boyasiz-gocuk-duzeltme",
      index: "03",
      slug: "boyasiz-gocuk-duzeltme",
      title: "Paintless Dent Repair",
      titleEn: "Original Paint Preservation",
      subtitle: "Optical Surface Calibration Without Touching Factory Paint",
      description:
        "Parking dents, hail impressions, and minor body creases where the paint surface remains intact are eliminated using specialized leverage tools and optical LED light-refraction techniques—preserving 100% of the factory finish.",
      technicalApproach: [
        "Surface tension mapping under optical LED reflection lines",
        "Millimetric metal memory restoration preserving original clearcoat",
        "Full retention of factory originality and resale value",
      ],
      image: "/images/instagram/post-5.jpg",
      imageAlt:
        "AutoClub Merter Platform BMW 5 Series surface inspection under LED reflection lines",
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
      image: "/images/instagram/post-2.jpg",
      imageAlt:
        "AutoClub Merter إصلاح هيكل ومصد رينج روفر فوج وتحويل Black Pack",
    },
    {
      id: "oto-boya",
      index: "02",
      slug: "oto-boya",
      title: "طلاء السيارات وحماية الأسطح PPF",
      titleEn: "مطابقة الألوان والسيراميك و PPF",
      subtitle: "مطابقة لونية بصرية، وتحويل Black Pack، ودرع النانو سيراميك 9H",
      description:
        "طلاء السيارات ليس مجرد تجديد للون، بل هو إعادة بناء عمق السطح وانعكاس الضوء عليه. نوفر مطابقة لونية دقيقة، وتحويل التفاصيل إلى الأسود اللامع (Black Pack)، وطلاء النانو سيراميك 9H، وأفلام الحماية الشفافة أو المطفيه PPF ذاتية الالتئام.",
      technicalApproach: [
        "مطابقة لونية بصرية متطابقة مع درجة لون المصنع الأصلية",
        "تطبيق الطلاء متعدد الطبقات والسيراميك 9H في استوديو معزول",
        "أفلام حماية PPF شفافة أو سوداء مطفية ذاتية المعالجة ضد الخدوش",
      ],
      image: "/images/instagram/post-1.jpg",
      imageAlt:
        "AutoClub Merter تطبيق فيلم الحماية الأسود المطفي PPF لسيارة أوبل فرونتيرا",
    },
    {
      id: "boyasiz-gocuk-duzeltme",
      index: "03",
      slug: "boyasiz-gocuk-duzeltme",
      title: "إصلاح الصدمات بدون طلاء",
      titleEn: "الحفاظ على طلاء المصنع الأصلي",
      subtitle: "معايرة بصرية للأسطح وإزالة التجويفات دون المساس بالطلاء الأصلي",
      description:
        "يتم إزالة الصدمات الخفيفة وآثار البَرَد والتجويفات التي لم يتضرر فيها الطلاء باستخدام معدات دقيقة وتقنيات انكسار خطوط إضاءة LED البصرية، دون أي تدخل في طلاء المصنع الأصلي.",
      technicalApproach: [
        "تحليل نقاط الشد السطحي تحت خطوط إضاءة LED البصرية",
        "استعادة شكل المعدن بدقة المليمتر مع حماية طبقة الطلاء الأصلية",
        "الحفاظ الكامل على أصالة المصنع والقيمة السوقية للسيارة",
      ],
      image: "/images/instagram/post-5.jpg",
      imageAlt:
        "AutoClub Merter فحص سطح بي إم دبليو الفئة الخامسة تحت خطوط الإضاءة البصرية",
    },
  ],
};

const AUTOMOTIVE_PORTFOLIO_BY_LOCALE: Record<Locale, AutomotivePortfolioItem[]> = {
  tr: [
    {
      id: "range-rover-vogue-transformation",
      code: "01",
      category: "Karoser, Boya & Black Pack",
      vehicle: "Range Rover Vogue",
      title: "Range Rover Vogue — Black Pack Dönüşümü & Seramik Koruma",
      summary:
        "Tampon restorasyonu, gri gövde detaylarının parlak siyaha dönüştürüldüğü Black Pack uygulaması ve 9H seramik kaplama ile kusursuz yüzey bütünlüğü.",
      operations: [
        "Tampon Restorasyonu ve Boyama",
        "Black Pack Detay Dönüşümü",
        "Polisaj & 9H Seramik Kaplama",
        "Kapsamlı İç & Dış Detailing",
      ],
      image: "/images/instagram/post-2.jpg",
      instagramPostUrl: "https://www.instagram.com/p/DbkcDTANKgB/",
    },
    {
      id: "opel-frontera-mat-ppf",
      code: "02",
      category: "PPF Yüzey Zırhı",
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
    {
      id: "bmw-5-series-surface-perfection",
      code: "03",
      category: "Optik Polisaj & Koruma",
      vehicle: "BMW 5 Serisi",
      title: "BMW 5 Serisi — Ayna Yansımalı Yüzey Restorasyonu",
      summary:
        "Optik LED stüdyo aydınlatması altında gerçekleştirilen çok aşamalı boya düzeltme ve kristal yüzey koruma uygulaması.",
      operations: [
        "Optik Işık Altında Yüzey Analizi",
        "Çok Aşamalı Boya Kusur Giderimi",
        "Kristal Yüzey Koruma Katmanı",
      ],
      image: "/images/instagram/post-5.jpg",
      instagramPostUrl: "https://www.instagram.com/p/DWlLyOwDcWJ/",
    },
    {
      id: "seat-leon-fr-gloss",
      code: "04",
      category: "Karoser & Parlaklık",
      vehicle: "Seat Leon FR",
      title: "Seat Leon FR — Derin Parlaklık ve Yüzey Bakımı",
      summary:
        "Açık tonlu karoser yüzeyinde maksimum ışık kırılması ve berraklık sağlayan detaylı yüzey arındırma ve koruma çalışması.",
      operations: [
        "Yüzey Arındırma ve Dekontaminasyon",
        "Parlaklık Artırıcı Polisaj",
        "Jant ve Kaliper Detay Bakımı",
      ],
      image: "/images/instagram/post-6.jpg",
      instagramPostUrl: "https://www.instagram.com/p/DWlKnWTDRRh/",
    },
    {
      id: "audi-interior-exterior-care",
      code: "05",
      category: "İç Kabin Restorasyonu",
      vehicle: "Audi A3",
      title: "Audi — Deri Kabin Bakımı ve Detaylı Yenileme",
      summary:
        "Açık renkli deri döşemelerin ve hassas iç trim yüzeylerinin doğal mat dokusunu koruyarak derinlemesine yenilenmesi.",
      operations: [
        "Deri Koltuk ve Trim Restorasyonu",
        "Antibakteriyel Kabin Detailing",
        "Mat Dokulu Deri Kalkanı",
      ],
      image: "/images/instagram/post-4.jpg",
      instagramPostUrl: "https://www.instagram.com/p/DWlNQs4jQTk/",
    },
    {
      id: "vw-passat-cockpit-detailing",
      code: "06",
      category: "Kokpit & Detailing",
      vehicle: "Volkswagen Passat",
      title: "Volkswagen Passat — Kokpit ve İç Mekân Yenileme",
      summary:
        "Kokpit, direksiyon, akustik kumaş yüzeyler ve konsol ekipmanlarında fabrika çıkışı tazeliği sağlayan detaylı bakım.",
      operations: [
        "Kokpit ve Konsol Hassas Temizliği",
        "Alcantara ve Döşeme Bakımı",
        "UV Koruyucu Yüzey Uygulaması",
      ],
      image: "/images/instagram/post-3.jpg",
      instagramPostUrl: "https://www.instagram.com/p/DWlOeL8jZSb/",
    },
  ],
  en: [
    {
      id: "range-rover-vogue-transformation",
      code: "01",
      category: "Bodywork, Refinishing & Black Pack",
      vehicle: "Range Rover Vogue",
      title: "Range Rover Vogue — Black Pack Conversion & Ceramic Armor",
      summary:
        "Bumper restoration, gloss-black Black Pack exterior trim conversion, multi-stage polishing, and 9H ceramic coating for flawless surface unity.",
      operations: [
        "Bumper Restoration & Refinishing",
        "Black Pack Trim Conversion",
        "Polishing & 9H Ceramic Coating",
        "Comprehensive Interior & Exterior Detailing",
      ],
      image: "/images/instagram/post-2.jpg",
      instagramPostUrl: "https://www.instagram.com/p/DbkcDTANKgB/",
    },
    {
      id: "opel-frontera-mat-ppf",
      code: "02",
      category: "PPF Surface Armor",
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
    {
      id: "bmw-5-series-surface-perfection",
      code: "03",
      category: "Optical Polishing & Protection",
      vehicle: "BMW 5 Series",
      title: "BMW 5 Series — Mirror-Reflection Surface Restoration",
      summary:
        "Multi-stage paint correction and crystal surface protection executed under optical LED studio inspection lines.",
      operations: [
        "Optical Light Surface Analysis",
        "Multi-Stage Paint Defect Removal",
        "Crystal Surface Protection Layer",
      ],
      image: "/images/instagram/post-5.jpg",
      instagramPostUrl: "https://www.instagram.com/p/DWlLyOwDcWJ/",
    },
    {
      id: "seat-leon-fr-gloss",
      code: "04",
      category: "Bodywork & Gloss",
      vehicle: "Seat Leon FR",
      title: "Seat Leon FR — Deep Gloss & Surface Care",
      summary:
        "Detailed surface decontamination and gloss enhancement achieving maximum light refraction and clarity on white bodywork.",
      operations: [
        "Surface Decontamination",
        "Gloss-Enhancing Polish",
        "Wheel & Caliper Detailing",
      ],
      image: "/images/instagram/post-6.jpg",
      instagramPostUrl: "https://www.instagram.com/p/DWlKnWTDRRh/",
    },
    {
      id: "audi-interior-exterior-care",
      code: "05",
      category: "Cabin Restoration",
      vehicle: "Audi A3",
      title: "Audi — Leather Cabin Care & Detailed Restoration",
      summary:
        "Deep restoration and protection of light-toned leather seating and delicate interior trim while preserving their natural matte finish.",
      operations: [
        "Leather Seat & Trim Restoration",
        "Antibacterial Cabin Detailing",
        "Matte-Finish Leather Shield",
      ],
      image: "/images/instagram/post-4.jpg",
      instagramPostUrl: "https://www.instagram.com/p/DWlNQs4jQTk/",
    },
    {
      id: "vw-passat-cockpit-detailing",
      code: "06",
      category: "Cockpit & Detailing",
      vehicle: "Volkswagen Passat",
      title: "Volkswagen Passat — Cockpit & Interior Renewal",
      summary:
        "Precision interior care across the cockpit, steering wheel, Alcantara upholstery, and console controls for factory-fresh refinement.",
      operations: [
        "Cockpit & Console Precision Cleaning",
        "Alcantara & Upholstery Care",
        "UV Protective Surface Treatment",
      ],
      image: "/images/instagram/post-3.jpg",
      instagramPostUrl: "https://www.instagram.com/p/DWlOeL8jZSb/",
    },
  ],
  ar: [
    {
      id: "range-rover-vogue-transformation",
      code: "01",
      category: "الهيكل والطلاء وتحويل Black Pack",
      vehicle: "Range Rover Vogue",
      title: "رينج روفر فوج — تحويل Black Pack وحماية النانو سيراميك",
      summary:
        "ترميم وطلاء المصدات، وتحويل التفاصيل الرمادية إلى الأسود اللامع (Black Pack)، مع تلميع متعدد المراحل وطبقة سيراميك 9H لاستعادة الفخامة الكاملة.",
      operations: [
        "إصلاح وطلاء المصدات",
        "تحويل التفاصيل إلى Black Pack",
        "تلميع بصرى وطبقة نانو سيراميك 9H",
        "تنظيف وتجديد شامل للمقصورة والهيكل",
      ],
      image: "/images/instagram/post-2.jpg",
      instagramPostUrl: "https://www.instagram.com/p/DbkcDTANKgB/",
    },
    {
      id: "opel-frontera-mat-ppf",
      code: "02",
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
    {
      id: "bmw-5-series-surface-perfection",
      code: "03",
      category: "تلميع بصري وحماية",
      vehicle: "BMW 5 Series",
      title: "بي إم دبليو الفئة الخامسة — استعادة لمعان المرآة وحماية الطلاء",
      summary:
        "تصحيح متعدد المراحل للطلاء وحماية كريستالية للسطح تحت خطوط إضاءة الاستوديو البصرية LED.",
      operations: [
        "تحليل السطح تحت الإضاءة البصرية",
        "إزالة عيوب الطلاء والتلميع الدقيق",
        "طبقة حماية كريستالية للسطح",
      ],
      image: "/images/instagram/post-5.jpg",
      instagramPostUrl: "https://www.instagram.com/p/DWlLyOwDcWJ/",
    },
    {
      id: "seat-leon-fr-gloss",
      code: "04",
      category: "الهيكل واللمعان",
      vehicle: "Seat Leon FR",
      title: "سيات ليون FR — لمعان عميق وعناية متكاملة بالسطح",
      summary:
        "تنظيف عميق وتلميع احترافي يمنح الهيكل الأبيض أقصى درجات الصفاء وانعكاس الإضاءة.",
      operations: [
        "إزالة الشوائب السطحية",
        "تلميع معزز للعمق واللمعان",
        "عناية تفصيلية بالجنوط والمكابح",
      ],
      image: "/images/instagram/post-6.jpg",
      instagramPostUrl: "https://www.instagram.com/p/DWlKnWTDRRh/",
    },
    {
      id: "audi-interior-exterior-care",
      code: "05",
      category: "ترميم المقصورة الداخلية",
      vehicle: "Audi A3",
      title: "أودي — العناية بالجلود الفاتحة وترميم المقصورة",
      summary:
        "تنظيف عميق وحماية للمقاعد الجلدية الفاتحة وأسطح الأبواب الداخلية مع الحفاظ على ملمسها الطبيعي غير اللامع.",
      operations: [
        "ترميم المقاعد الجلدية والتطعيمات",
        "تعقيم وتفصيل داخلي شامل",
        "طبقة حماية للجلود الطبيعية",
      ],
      image: "/images/instagram/post-4.jpg",
      instagramPostUrl: "https://www.instagram.com/p/DWlNQs4jQTk/",
    },
    {
      id: "vw-passat-cockpit-detailing",
      code: "06",
      category: "المقصورة والتفصيل الداخلي",
      vehicle: "Volkswagen Passat",
      title: "فولكس فاجن باسات — تجديد قمرة القيادة والمقصورة الداخلية",
      summary:
        "عناية دقيقة بلوحة القيادة وعجلة القيادة وفرش الألكانتارا والشاشات لاستعادة رونق المصنع.",
      operations: [
        "تنظيف دقيق للكونسول ولوحة القيادة",
        "العناية بفرش الألكانتارا والأقمشة",
        "حماية الأسطح من الأشعة فوق البنفسجية",
      ],
      image: "/images/instagram/post-3.jpg",
      instagramPostUrl: "https://www.instagram.com/p/DWlOeL8jZSb/",
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

const CONSTRUCTION_PROJECTS_BY_LOCALE: Record<Locale, ConstructionProjectStudy[]> = {
  tr: [
    {
      slug: "modern-konut-ve-yasam-projesi",
      code: "01",
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
      code: "02",
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
      slug: "modern-konut-ve-yasam-projesi",
      code: "01",
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
      code: "02",
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
      slug: "modern-konut-ve-yasam-projesi",
      code: "01",
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
      code: "02",
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

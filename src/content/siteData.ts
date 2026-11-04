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

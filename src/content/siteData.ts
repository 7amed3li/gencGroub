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

export const BRAND_INFO = {
  name: "GENÇ GROUP",
  descriptorTr: "Otomotiv & İnşaat",
  descriptorEn: "Automotive & Construction",
  primaryMarket: "Türkiye",
  automotiveDivision: {
    name: "AutoClub Merter",
    officialTitle: "AutoClub Merter — Platform",
    logo: "/images/instagram/logo-autoclubmerter.jpg",
    sectorTr: "Otomotiv",
    sectorEn: "Automotive",
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
  },
  constructionDivision: {
    name: "Genç Group İnşaat",
    sectorTr: "İnşaat & Yapı",
    sectorEn: "Construction & Architecture",
    region: "İstanbul, Türkiye",
    heroHeadline: "Zamansız Yapılar, Kalıcı Değer.",
    heroSubheadline:
      "Doğal malzeme kültürü, mühendislik hassasiyeti ve çağdaş mimari estetikle şekillenen nitelikli yaşam alanları.",
  },
};

export const AUTOMOTIVE_SERVICES: AutomotiveService[] = [
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
];

export const AUTOMOTIVE_PORTFOLIO_ITEMS: AutomotivePortfolioItem[] = [
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
];

export const CONSTRUCTION_POTENTIAL_SERVICES: ConstructionServiceCategory[] = [
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
];

export const CONSTRUCTION_PROJECT_STUDIES: ConstructionProjectStudy[] = [
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
];

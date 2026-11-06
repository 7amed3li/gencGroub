/**
 * SEO landing content for AutoClub Merter service pages (Turkish only).
 *
 * RULES: Only claims already present on the site or verifiable from the
 * workshop's real portfolio. No prices, durations, warranties, certificates
 * or insurance agreements until confirmed by the owner (see SEO report).
 */

export interface ServiceFaq {
  q: string;
  a: string;
}

export interface AutomotiveServicePage {
  slug: string;
  /** Short name used in navigation / breadcrumbs */
  name: string;
  serviceType: string;
  seoTitle: string;
  metaDescription: string;
  h1: string;
  lead: string;
  image: string;
  imageAlt: string;
  whatWeDo: { heading: string; body: string }[];
  suitableFor: string[];
  steps: { title: string; body: string }[];
  options: { heading: string; items: string[] };
  faqs: ServiceFaq[];
  /** Slugs of related service pages */
  related: string[];
  /** Subject prefilled in the contact form */
  contactSubject: string;
}

const COMMON_FAQ_LOCATION: ServiceFaq = {
  q: "AutoClub Merter nerede?",
  a: "Atölyemiz İstanbul Güngören'de, Merter bölgesinde; Abdurrahman Nafiz Gürman Mah., General Ali Rıza Gürcan Cad., Platform Sitesi Otoparkı / Merter Suites adresindedir. Gelmeden önce 0543 819 30 24 numarasından randevu almanızı öneririz.",
};

export const AUTOMOTIVE_SERVICE_PAGES: AutomotiveServicePage[] = [
  {
    slug: "kaporta-onarimi",
    name: "Kaporta Onarımı",
    serviceType: "Kaporta ve tampon onarımı",
    seoTitle: "Merter Kaporta ve Tampon Onarımı | AutoClub Merter",
    metaDescription:
      "Merter / Güngören'de kaporta ve tampon onarımı. Hasar tespiti, panel hizalama ve boya öncesi yüzey hazırlığı için AutoClub Merter'den ön değerlendirme isteyin.",
    h1: "Merter'de Kaporta ve Tampon Onarımı",
    lead: "Kaza, park hasarı veya darbe sonrası kaporta ve tampon aksamında oluşan deformasyonları, aracın orijinal hatlarına ve panel boşluklarına sadık kalarak onarıyoruz. Atölyemiz Merter / Güngören'dedir.",
    image: "/images/atelier/mercedes-cla-amg-landscape.jpg",
    imageAlt: "AutoClub Merter atölyesinde Mercedes-Benz CLA AMG kaporta ve yüzey kontrolü",
    whatWeDo: [
      {
        heading: "Hasar tespiti ve yapısal kontrol",
        body: "Onarıma başlamadan önce aracın karoser hatlarını ve panel geçişlerini kontrol ediyor, hasarın yalnızca yüzeyde mi yoksa alt yapıda mı olduğunu belirliyoruz. Size hangi parçanın onarılacağını, hangisinin değişim gerektirebileceğini açıkça anlatıyoruz.",
      },
      {
        heading: "Panel ve tampon onarımı",
        body: "Göçmüş, çizilmiş veya kırılmış kaporta panellerini ve tamponları düzeltiyor; kapı, kaput ve bagaj boşluklarının simetrisini kontrol ediyoruz.",
      },
      {
        heading: "Boya öncesi yüzey hazırlığı",
        body: "Onarım sonrası yüzey, boya uygulamasına hazır hale getirilir. Böylece boyalı bölge ile orijinal yüzey arasında geçiş farkı en aza indirilir.",
      },
    ],
    suitableFor: [
      "Kaza veya çarpma sonrası kaporta hasarı olan araçlar",
      "Tamponunda çatlak, kırık veya ezik bulunan araçlar",
      "Panel boşlukları bozulmuş ya da kapıları düzgün kapanmayan araçlar",
      "Satış öncesi görünümünü toparlamak isteyen araç sahipleri",
    ],
    steps: [
      { title: "Ön görüşme", body: "Telefon veya WhatsApp üzerinden hasarın fotoğraflarını paylaşabilir, atölye ziyareti için randevu alabilirsiniz." },
      { title: "Yerinde inceleme", body: "Aracınızı atölyede inceliyor, yapılacak işlemleri ve tahmini kapsamı sizinle paylaşıyoruz." },
      { title: "Onarım", body: "Kaporta ve tampon onarımı, panel hizalaması ve gerekli parça işlemleri yapılır." },
      { title: "Yüzey hazırlığı ve boya", body: "Gerekiyorsa onarılan bölge renk eşleştirmeli boya için hazırlanır ve boyanır." },
      { title: "Son kontrol ve teslim", body: "Panel geçişleri ve yüzey ışık altında kontrol edildikten sonra aracınız teslim edilir." },
    ],
    options: {
      heading: "Onarım kapsamı",
      items: [
        "Kaporta düzeltme ve panel onarımı",
        "Tampon onarımı",
        "Kapı, kaput ve bagaj boşluk / hizalama kontrolü",
        "Onarım sonrası lokal veya panel bazında boya",
      ],
    },
    faqs: [
      {
        q: "Kaporta onarımı ne kadar sürer?",
        a: "Süre; hasarın büyüklüğüne, boya gerekip gerekmediğine ve parça ihtiyacına göre değişir. Aracınızı inceledikten sonra size net bir süre bilgisi veriyoruz.",
      },
      {
        q: "Fiyat bilgisi alabilir miyim?",
        a: "Her hasar farklı olduğu için sabit bir fiyat listesi yayınlamıyoruz. Hasar fotoğraflarını WhatsApp'tan gönderebilir veya atölyeye gelerek ön değerlendirme isteyebilirsiniz.",
      },
      {
        q: "Her göçük için boya gerekir mi?",
        a: "Hayır. Boyası çatlamamış veya kalkmamış küçük göçükler çoğu zaman boyasız göçük düzeltme yöntemiyle giderilebilir. Hangi yöntemin uygun olduğunu inceleme sonrasında söylüyoruz.",
      },
      COMMON_FAQ_LOCATION,
    ],
    related: ["oto-boya", "boyasiz-gocuk-duzeltme"],
    contactSubject: "Kaporta Onarımı",
  },
  {
    slug: "oto-boya",
    name: "Oto Boya",
    serviceType: "Oto boya ve renk eşleştirme",
    seoTitle: "Güngören Oto Boya ve Renk Eşleştirme | AutoClub Merter",
    metaDescription:
      "Güngören / Merter'de lokal ve panel bazında oto boya. Aracın orijinal tonuna uygun renk eşleştirme ve yüzey hazırlığı için AutoClub Merter ile iletişime geçin.",
    h1: "Güngören / Merter'de Oto Boya ve Renk Eşleştirme",
    lead: "Çizik, kaporta onarımı veya yıpranma sonrası aracınızın boyasını, orijinal fabrika tonuna uyacak şekilde yeniliyoruz. Amacımız boyalı bölgenin, ışık altında aracın geri kalanından ayırt edilmemesidir.",
    image: "/images/atelier/bmw-msport-ppf-landscape.jpg",
    imageAlt: "AutoClub Merter stüdyosunda BMW M-Sport yüzey ve boya kontrolü",
    whatWeDo: [
      {
        heading: "Renk eşleştirme",
        body: "Boya öncesinde aracın mevcut tonu incelenir ve orijinal renge uygun karışım hazırlanır. Yaşlanmış boyalarda ton farkını azaltmak için geçiş teknikleri kullanılır.",
      },
      {
        heading: "Lokal ve panel bazında boya",
        body: "Hasarın büyüklüğüne göre yalnızca etkilenen bölgeyi veya paneli boyuyoruz; gereksiz boya işleminden kaçınıyoruz.",
      },
      {
        heading: "Boya sonrası yüzey işlemleri",
        body: "Boya sonrasında yüzey parlaklığını toparlamak için polisaj yapılabilir; isteğe bağlı olarak PPF veya seramik kaplama ile koruma sağlanabilir.",
      },
    ],
    suitableFor: [
      "Kaporta onarımı sonrası boya gereken araçlar",
      "Derin çizik veya boya kalkması olan paneller",
      "Güneş ve dış etkenler nedeniyle matlaşmış yüzeyler",
      "Black Pack gibi görsel dönüşüm düşünen araç sahipleri",
    ],
    steps: [
      { title: "İnceleme", body: "Boya gereken bölge ve aracın mevcut boya durumu incelenir." },
      { title: "Yüzey hazırlığı", body: "Boyanacak alan temizlenir, zımparalanır ve astar için hazırlanır." },
      { title: "Renk eşleştirme ve boya", body: "Orijinal tona uygun renk hazırlanarak uygulanır." },
      { title: "Polisaj ve kontrol", body: "Yüzey ışık altında kontrol edilir, gerekiyorsa polisaj yapılır." },
    ],
    options: {
      heading: "Seçenekler",
      items: [
        "Lokal (spot) boya",
        "Panel bazında boya",
        "Black Pack dönüşümü",
        "Boya sonrası PPF veya seramik kaplama ile koruma",
      ],
    },
    faqs: [
      {
        q: "Boyalı parça aracın değerini etkiler mi?",
        a: "Ekspertiz raporlarında boyalı parçalar belirtilir. Bu nedenle gereksiz boyadan kaçınıyor, mümkünse boyasız göçük düzeltme gibi alternatifleri öneriyoruz.",
      },
      {
        q: "Renk farkı olur mu?",
        a: "Renk eşleştirme ve geçiş teknikleriyle farkı en aza indirmeyi hedefliyoruz. Aracın boyasının yaşı ve durumu sonucu etkileyebilir; inceleme sırasında bunu sizinle paylaşıyoruz.",
      },
      {
        q: "Fiyat nasıl belirlenir?",
        a: "Boyanacak alanın büyüklüğüne, panel sayısına ve ön hazırlık ihtiyacına göre belirlenir. Fotoğraf gönderebilir veya atölyede ön değerlendirme isteyebilirsiniz.",
      },
      COMMON_FAQ_LOCATION,
    ],
    related: ["kaporta-onarimi", "ppf-seramik-kaplama"],
    contactSubject: "Oto Boya & Yüzey Koruma",
  },
  {
    slug: "boyasiz-gocuk-duzeltme",
    name: "Boyasız Göçük Düzeltme",
    serviceType: "Boyasız göçük düzeltme (PDR)",
    seoTitle: "Merter Boyasız Göçük Düzeltme (PDR) | AutoClub Merter",
    metaDescription:
      "Merter / Güngören'de boyasız göçük düzeltme. Boyası zarar görmemiş park ve dolu göçüklerini orijinal boyaya dokunmadan gidermek için AutoClub Merter'e ulaşın.",
    h1: "Merter'de Boyasız Göçük Düzeltme",
    lead: "Boyası çatlamamış veya kalkmamış göçükleri, aracın orijinal fabrika boyasına dokunmadan gideriyoruz. Bu yöntem, uygun hasarlarda boya ve macun işlemine gerek bırakmaz.",
    image: "/images/atelier/audi-a3-led-landscape.jpg",
    imageAlt: "AutoClub Merter LED ışık altında Audi A3 yüzey kontrolü",
    whatWeDo: [
      {
        heading: "Göçük analizi",
        body: "Göçüğün yeri, derinliği ve boya durumu LED ışık altında incelenir. Boyasız yöntemin uygun olup olmadığını bu aşamada belirliyoruz.",
      },
      {
        heading: "Boyasız düzeltme",
        body: "Özel ekipmanlarla panel, iç taraftan veya yüzeyden kontrollü şekilde eski formuna getirilir. Orijinal boya katmanı korunur.",
      },
      {
        heading: "Polisaj",
        body: "İşlem sonrası gerekirse yüzeye polisaj yapılarak parlaklık toparlanır.",
      },
    ],
    suitableFor: [
      "Park hasarı ve kapı vurması kaynaklı küçük göçükler",
      "Dolu nedeniyle oluşmuş göçükler",
      "Orijinal boyasını korumak isteyen araç sahipleri",
      "Ekspertizde boyalı parça görünmesini istemeyenler",
    ],
    steps: [
      { title: "Fotoğraf veya ziyaret", body: "Göçüğün fotoğrafını gönderebilir ya da atölyeye gelebilirsiniz." },
      { title: "Uygunluk kontrolü", body: "Boya çatlağı, keskin kırık veya panel kenarı gibi durumlar incelenir." },
      { title: "Düzeltme", body: "Göçük özel ekipmanla adım adım giderilir." },
      { title: "Kontrol ve teslim", body: "Yüzey ışık altında kontrol edilerek aracınız teslim edilir." },
    ],
    options: {
      heading: "Ne zaman uygun değildir?",
      items: [
        "Boyası çatlamış veya kalkmış göçükler",
        "Çok keskin ya da gerilmiş sac yüzeyler",
        "Daha önce macun uygulanmış bölgeler",
        "Bu durumlarda kaporta onarımı ve boya önerilir",
      ],
    },
    faqs: [
      {
        q: "Her göçük boyasız düzeltilebilir mi?",
        a: "Hayır. Boyası zarar görmemiş ve sacı aşırı gerilmemiş göçükler için uygundur. Uygun olmayan durumlarda kaporta onarımı ve boya öneririz.",
      },
      {
        q: "İşlem ekspertizde görünür mü?",
        a: "Boyasız göçük düzeltmede boya ve macun kullanılmadığı için parça boyalı olarak görünmez. Ekspertiz uygulamaları kuruma göre değişebilir.",
      },
      {
        q: "Ne kadar sürer?",
        a: "Göçüğün sayısına ve büyüklüğüne bağlıdır. İnceleme sonrasında size süre bilgisi veriyoruz.",
      },
      COMMON_FAQ_LOCATION,
    ],
    related: ["kaporta-onarimi", "oto-boya"],
    contactSubject: "Boyasız Göçük Düzeltme",
  },
  {
    slug: "ppf-seramik-kaplama",
    name: "PPF ve Seramik Kaplama",
    serviceType: "PPF boya koruma filmi ve seramik kaplama",
    seoTitle: "İstanbul PPF Kaplama ve Seramik Kaplama | AutoClub Merter",
    metaDescription:
      "Merter / Güngören'deki atölyemizde şeffaf veya saten mat NDOUR PPF boya koruma filmi ve AutoClub Ceramic nano seramik kaplama uygulamaları.",
    h1: "PPF Kaplama ve Seramik Kaplama — Merter, İstanbul",
    lead: "Aracınızın boyasını taş izi, çizik ve dış etkenlere karşı korumak için PPF (boya koruma filmi) ve seramik kaplama uyguluyoruz. Uygulamalar Merter / Güngören'deki atölyemizde yapılır.",
    image: "/images/atelier/amg-gle-coupe-landscape.jpg",
    imageAlt: "AutoClub Merter atölyesinde Mercedes-AMG GLE Coupe PPF uygulaması",
    whatWeDo: [
      {
        heading: "PPF boya koruma filmi",
        body: "Şeffaf veya saten mat NDOUR PPF filmi, boyanın üzerine uygulanarak taş izi ve çiziklere karşı fiziksel bir koruma katmanı oluşturur. Tam gövde veya kaput, tampon, ayna gibi bölgesel uygulama yapılabilir.",
      },
      {
        heading: "Seramik kaplama",
        body: "AutoClub Ceramic Nano Coating, boya yüzeyinde parlak ve kolay temizlenen bir katman oluşturur. Yeni araçlarda veya polisaj sonrası uygulanabilir.",
      },
      {
        heading: "Uygulama öncesi yüzey hazırlığı",
        body: "Kaplama öncesi yüzey temizlenir ve gerekiyorsa polisajla çizikler giderilir; film veya seramik ancak bu hazırlıktan sonra uygulanır.",
      },
    ],
    suitableFor: [
      "Yeni aldığı aracın boyasını korumak isteyenler",
      "Sık otoyol kullanımı nedeniyle taş izi riski olan araçlar",
      "Saten mat görünüm isteyen araç sahipleri",
      "Polisaj sonrası parlaklığı korumak isteyenler",
    ],
    steps: [
      { title: "Görüşme ve seçim", body: "Şeffaf / saten mat PPF, bölgesel veya tam gövde ya da seramik kaplama seçenekleri konuşulur." },
      { title: "Yüzey hazırlığı", body: "Araç yıkanır, yüzey arındırılır, gerekiyorsa polisaj yapılır." },
      { title: "Uygulama", body: "PPF film veya seramik kaplama uygulanır." },
      { title: "Kontrol ve bakım bilgisi", body: "Uygulama kontrol edilir; yıkama ve bakım konusunda bilgilendirme yapılır." },
    ],
    options: {
      heading: "Seçenekler",
      items: [
        "Şeffaf NDOUR PPF",
        "Saten mat NDOUR PPF",
        "Tam gövde veya bölgesel PPF",
        "AutoClub Ceramic Nano Coating seramik kaplama",
      ],
    },
    faqs: [
      {
        q: "PPF ile seramik kaplama arasındaki fark nedir?",
        a: "PPF, boyanın üzerine uygulanan fiziksel bir filmdir ve taş izi gibi darbelere karşı koruma sağlar. Seramik kaplama ise yüzeyde parlak ve kolay temizlenen ince bir katman oluşturur. İkisi birlikte de uygulanabilir.",
      },
      {
        q: "PPF aracın rengini değiştirir mi?",
        a: "Şeffaf PPF rengi değiştirmez. Saten mat PPF ise parlak boyaya mat bir görünüm kazandırır.",
      },
      {
        q: "Fiyat nasıl belirlenir?",
        a: "Aracın boyutuna, seçilen film tipine ve uygulama alanına (tam gövde / bölgesel) göre değişir. Araç modelinizi paylaşarak bilgi alabilirsiniz.",
      },
      COMMON_FAQ_LOCATION,
    ],
    related: ["oto-boya", "boyasiz-gocuk-duzeltme"],
    contactSubject: "PPF & Seramik Kaplama",
  },
];

export function getAutomotiveServicePage(slug: string) {
  return AUTOMOTIVE_SERVICE_PAGES.find((p) => p.slug === slug);
}


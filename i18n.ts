export type Language = 'tr' | 'en';

export const translations = {
  tr: {
    // Navigation
    nav: {
      about: 'Hakkımda',
      experience: 'Deneyim',
      education: 'Eğitim',
      skills: 'Yetenekler',
      projects: 'Projelerim',
      cv: 'Özgeçmiş',
    },
    // Hero Section
    hero: {
      badge: 'SAP B1 Danışmanı',
      badges: ['SAP B1 Danışmanı', 'Teknoloji Sever', 'Hayat Boyu Öğrenci :)'],
      greeting: 'Merhaba, ben',
      subtitle: 'Yazılım projelerinde, özellikle SAP Business One ve iş süreçleri geliştirme alanlarında deneyimliyim.',
      connect: 'Bağlantı Kur',
      contact: 'İletişime Geç',
      bookCall: '15 Dk Tanışma Toplantısı',
      call: 'Ara',
    },
    // About Section
    about: {
      title: 'Hakkımda',
      clickToView: 'Tıkla ve görüntüle →',
    },
    // Experience Section
    experience: {
      title: 'Deneyim',
    },
    // Education Section
    education: {
      title: 'Eğitim',
    },
    // Skills Section
    skills: {
      title: 'Yetenekler',
      technical: 'Teknik Yetenekler',
      soft: 'İş Becerileri',
      languages: 'Diller',
      turkish: 'Türkçe',
      english: 'İngilizce',
      native: 'Ana Dil',
      englishLevel: 'B2 - Upper Intermediate',
    },
    // Projects Section
    projects: {
      title: 'Projelerim',
      viewProject: 'Canlı Demo →',
      viewWebsite: 'Web Sitesi →',
      projectsList: [
        {
          id: '1',
          title: 'Jira Worklog Manager',
          description: 'Manuel worklog girişi sorununu çözen, AI destekli verimlilik aracı.',
          highlights: [
            'Problem: Günlük 30+ dakika manuel Jira log girişi',
            'Çözüm: React + AI ile otomatik worklog yönetimi',
            'Sonuç: %85 verimlilik artışı (30dk → 5dk)',
            'Jira Cloud API entegrasyonu ile gerçek zamanlı senkronizasyon',
            'Sürükle-bırak arayüzü ve akıllı saat dağıtımı'
          ],
          tags: ['React', 'TypeScript', 'AI', 'Jira API'],
          link: 'https://jira-worklog-ivory.vercel.app/'
        },
        {
          id: '2',
          title: 'Turna Elektrik - Dijital Dönüşüm',
          description: 'Geleneksel aile işletmesini dijital platforma taşıyan strateji projesi.',
          highlights: [
            'Problem: Ayda sadece 5-10 referans müşteri',
            'Çözüm: Google Business + sosyal medya entegrasyonu',
            'Sonuç: 350+ organik müşteri portföyü',
            'İşletme cirosunda %400+ artış',
            'Haftalık stratejik planlama sistemi kurulumu'
          ],
          tags: ['Dijital Strateji', 'İş Geliştirme', 'Operasyon'],
          link: 'https://turna-elektrik.vercel.app/'
        }
      ]
    },
    // Contact Section
    contact: {
      title: 'Yeni Tekliflere Açığım.',
      subtitle: 'İş fırsatları ve projeler için benimle iletişime geçin.',
      copyright: 'Tüm hakları saklıdır.',
    },
    // Chat Widget
    chat: {
      welcome: "Merhaba! Ben İlkay'ın AI asistanıyım. Tecrübelerim, yeteneklerim veya eğitimim hakkında bana soru sorabilirsiniz.",
      placeholder: 'Bir soru sorun...',
      assistant: 'İlkay Asistan',
      poweredBy: 'Gemini ile çalışır',
      error: 'Bir bağlantı hatası oluştu. Lütfen daha sonra tekrar deneyiniz.',
      noResponse: 'Üzgünüm, şu an cevap veremiyorum.',
    },
    // Profile data
    profile: {
      title: 'SAP B1 Danışmanı',
      location: 'İstanbul, Türkiye',
      about: "Yönetim Bilişim Sistemleri mezunu, SAP Business One odaklı ERP Danışmanıyım. Hitsoft'ta KOBİ müşterilerine uçtan uca ERP implementasyonu ve süreç danışmanlığı yapıyorum. Zaman zaman kendi ihtiyaçlarımdan yola çıkarak küçük araçlar geliştiriyorum.",
    },
    // Experiences
    experiences: [
      {
        id: '1',
        role: 'SAP B1 Danışmanı',
        company: 'Hitsoft',
        period: 'Tem 2025 - Halen',
        location: 'İstanbul, Türkiye',
        description: 'KOBİ müşterilerine SAP Business One ERP implementasyonu ve uçtan uca süreç danışmanlığı. SQL ile özelleştirilmiş raporlama çözümleri. Satış, satın alma ve stok modüllerinde süreç iyileştirme. 10+ firmada destek süreçlerinde aktif rol.',
        skills: ['SAP B1', 'SQL', 'ERP', 'Süreç Analizi']
      },
      {
        id: '2',
        role: 'SAP B1 Danışman Stajyeri',
        company: 'Hitsoft',
        period: 'Şub 2025 - Haz 2025',
        location: 'İstanbul, Türkiye',
        description: 'SAP B1 teknik destek ve sorun giderme süreçlerinde hands-on deneyim. Müşteri taleplerinin analizi ve dokümantasyonu. Canlı projelerde danışman ekibiyle birlikte çalışma.',
        skills: ['Teknik Destek', 'Dokümantasyon', 'Müşteri İletişimi']
      },
      {
        id: '3',
        role: 'Mutfak Şefi',
        company: 'TAB Gıda',
        period: 'Haz 2021 - Eki 2021',
        location: 'İstanbul, Türkiye',
        description: 'Yoğun tempolu iş ortamında takım çalışması ve müşteri deneyimi odaklı çalışma. Zaman yönetimi ve stres altında performans.',
        skills: ['Takım Çalışması', 'Müşteri İlişkileri', 'Zaman Yönetimi']
      },
      {
        id: '4',
        role: 'Elektrik Teknisyeni - Dijital Dönüşüm',
        company: 'Turna Elektrik',
        period: 'Haz 2015 - Eyl 2021',
        location: 'İstanbul, Türkiye',
        description: 'Aile işletmesinin dijital dönüşümünü yönettim. Google Business entegrasyonu. Müşteri portföyünü 10 referanstan 350+ organik müşteriye çıkardım. İşletme cirosunda artış sağladım.',
        skills: ['Dijital Dönüşüm', 'Strateji', 'Operasyon Yönetimi']
      }
    ],
    // Education
    educationList: [
      {
        id: '1',
        school: 'Anadolu Üniversitesi',
        degree: 'Ön Lisans, Bilgisayar Programcılığı',
        period: 'Eki 2024 - Haz 2026'
      },
      {
        id: '2',
        school: 'Sakarya Üniversitesi',
        degree: 'Lisans, Yönetim Bilişim Sistemleri',
        period: 'Eyl 2021 - Haz 2025'
      },
      {
        id: '3',
        school: 'Güngören Anadolu Lisesi',
        degree: 'Lise',
        period: '2017 - 2021'
      }
    ],
    // Certifications
    certifications: [
      {
        id: '1',
        title: 'SAP Business One - Başarı Sertifikası',
        issuer: 'UPEXTECH',
        date: 'Oca 2025',
        link: 'https://drive.google.com/file/d/1ovPFEbTJBKFTC2jnpahcPafeFx6MY4S8/view',
      },
      {
        id: '2',
        title: 'Onur Belgesi',
        issuer: 'Sakarya Üniversitesi İşletme Fakültesi',
        date: 'Tem 2024',
      },
      {
        id: '3',
        title: 'İngilizce Yeterlilik Sertifikası',
        issuer: 'Sakarya Üniversitesi (Erasmus Sınavı)',
        date: 'Mar 2022',
      },
      {
        id: '4',
        title: 'İlk Yardım Eğitimi',
        issuer: 'İBB İtfaiye',
        date: '2018',
        link: 'https://itfaiye.ibb.gov.tr/m/tr/ilkyardim-egitimleri.html',
      }
    ],
    // Skills
    skillsList: {
      technical: [
        "ERP",
        "SSMS & HANA",
        "Crystal Reports",
        "DTW",
        "B1 Service Layer API",
        "Power BI",
        "Query Optimization",
        "Git&Github",
        "Python",
        "MsOffice"
      ],
      soft: [
        "BPMN",
        "Gereksinim Analizi",
        "İş Analizi",
        "Sorun Çözme",
        "Takım Çalışması",
        "Müşteri İletişimi",
        "Proje Yönetimi"
      ]
    },
    // Case Studies
    caseStudies: {
      title: 'Çözülen Problemler',
      items: [
        {
          id: '1',
          title: 'Üretim Sorgu Optimizasyonu',
          challenge: 'Müşterinin stok raporu 10+ dakikada yükleniyordu, gecikmelere neden oluyordu.',
          solution: 'SQL mantığı yeniden kurgulandı ve HANA calculation view uygulandı.',
          impact: 'Raporlama süresi 15 saniyeye düştü (%97 iyileştirme).'
        }
      ]
    },
    // Code Visualizer
    codeVisualizer: {
      title: 'Kodun Derinlikleri',
      caption: 'Sadece konfigüre etmem; özel çözümler geliştiririm.',
      code: `/* 
 * Optimizing Inventory Valuation Query
 * Legacy execution time: 10m 23s
 * Optimized execution time: 15s
 */

CREATE PROCEDURE [dbo].[USP_GetStockValuation] 
    @ItemDate datetime 
AS 
BEGIN 
    SET NOCOUNT ON; 

    -- Utilizing CTE for better readability and performance
    WITH StockCTE AS (
        SELECT 
            T0.ItemCode, 
            T0.ItemName,
            SUM(T1.InQty - T1.OutQty) as OnHand,
            AVG(T1.Price) as AvgPrice
        FROM OITM T0 
        INNER JOIN OINM T1 ON T0.ItemCode = T1.ItemCode
        WHERE T1.DocDate <= @ItemDate
        GROUP BY T0.ItemCode, T0.ItemName
    )
    SELECT * FROM StockCTE WHERE OnHand > 0;
END`
    },
    // Testimonials
    testimonials: {
      title: 'Referanslar',
      items: [
        {
          id: '1',
          text: "İlkay, teknik karmaşıklık ile iş ihtiyaçları arasındaki boşluğu mükemmel bir şekilde dolduruyor.",
          author: "Erman Hoca",
          role: "Eski Proje Yöneticisi"
        }
      ]
    },
  },
  en: {
    // Navigation
    nav: {
      about: 'About',
      experience: 'Experience',
      education: 'Education',
      skills: 'Skills',
      projects: 'Projects',
      cv: 'CV',
    },
    // Hero Section
    hero: {
      badge: 'SAP Business One Consultant',
      badges: ['SAP Business One Consultant', 'Technical Consultant', 'Process Analyst'],
      greeting: "Hello, I'm",
      subtitle: 'Bridging business processes with technical SAP Business One solutions (SQL/HANA). I specialize in optimizing ERP workflows and delivering data-driven insights.',
      connect: 'Connect',
      contact: 'Contact Me',
      bookCall: 'Book a 15-min Intro Call',
      call: 'Call',
    },
    // About Section
    about: {
      title: 'About Me',
      clickToView: 'View Detail →',
    },
    // Experience Section
    experience: {
      title: 'Experience',
    },
    // Education Section
    education: {
      title: 'Education',
    },
    // Skills Section
    skills: {
      title: 'Skills',
      technical: 'Technical Expertise',
      soft: 'Professional Skills',
      languages: 'Languages',
      turkish: 'Turkish',
      english: 'English',
      native: 'Native',
      englishLevel: 'B2 - Upper Intermediate',
    },
    // Projects Section
    projects: {
      title: 'Projects',
      viewProject: 'View Project',
      viewWebsite: 'Visit Website',
      projectsList: [
        {
          id: '1',
          title: 'Jira Worklog Manager',
          description: 'A custom Full-Stack Web Application designed to automate time tracking and enhance team productivity.',
          highlights: [
            'Problem: Manual data entry consumed 30+ minutes daily per developer.',
            'Solution: Orchestrated a React & AI-powered automated worklog system.',
            'Result: Achieved 85% efficiency gain (reduced to 5 min/day).',
            'Integrated Jira Cloud API for real-time bi-directional synchronization.',
            'Implemented Drag-and-drop UI with smart algorithm for time distribution.'
          ],
          tags: ['React', 'TypeScript', 'Process Automation', 'Jira API', 'Full-Stack'],
          link: 'https://jira-worklog-ivory.vercel.app/'
        },
        {
          id: '2',
          title: 'Turna Electric - Digital Transformation',
          description: 'Strategic Digital Transformation initiative for a traditional retail business.',
          highlights: [
            'Problem: Limited local reach (5-10 monthly referrals).',
            'Solution: Deployed Google Business & Social Media integration ecosystem.',
            'Result: Scaled to 350+ organic customer portfolio.',
            'Drove 400%+ increase in business revenue through digital channels.',
            'Established weekly strategic planning and operational analytic pipelines.'
          ],
          tags: ['Digital Strategy', 'Business Growth', 'Operations Management'],
          link: 'https://turna-elektrik.vercel.app/'
        }
      ]
    },
    // Contact Section
    contact: {
      title: "Let's Connect",
      subtitle: 'Open to opportunities in SAP Business One consultancy and ERP development projects.',
      copyright: 'All rights reserved.',
    },
    // Chat Widget
    chat: {
      welcome: "Hello! I'm İlkay's AI Assistant. Ask me about his experience with SAP B1, SQL expertise, or completed projects.",
      placeholder: 'Ask a question...',
      assistant: 'İlkay AI',
      poweredBy: 'Powered by Gemini',
      error: 'Connection error. Please try again later.',
      noResponse: "I'm currently offline, please try again later.",
    },
    // Profile data
    profile: {
      title: 'SAP Business One Consultant',
      location: 'Istanbul, Turkey',
      about: "As a Management Information Systems graduate and SAP Business One Consultant at Hitsoft, I bridge the gap between technical possibilities and business requirements. My expertise lies in end-to-end ERP implementations, where I leverage SQL and HANA to optimize data flows and business processes. Beyond standard configuration, I develop custom solutions to solve complex operational challenges, always aimed at driving measurable efficiency and business growth.",
    },
    // Experiences
    experiences: [
      {
        id: '1',
        role: 'SAP Business One Consultant',
        company: 'Hitsoft',
        period: 'Jul 2025 - Present',
        location: 'Istanbul, Turkey',
        description: 'delivering end-to-end SAP Business One implementations and process consultancy for SME clients. Spearheading data analysis and custom reporting initiatives using SQL and Crystal Reports.',
        skills: ['SAP Business One', 'SQL', 'HANA', 'Crystal Reports', 'FMS', 'System Configuration', 'Data Migration']
      },
      {
        id: '2',
        role: 'SAP B1 Consultant Intern',
        company: 'Hitsoft',
        period: 'Feb 2025 - Jun 2025',
        location: 'Istanbul, Turkey',
        description: 'Gained hands-on experience in technical troubleshooting and system maintenance. Assisted senior consultants in live implementation projects and documentation of business blueprints.',
        skills: ['Technical Support', 'Documentation', 'System Analysis']
      },
      {
        id: '3',
        role: 'Kitchen Operations Staff',
        company: 'TAB Gıda',
        period: 'Feb 2021 - Oct 2021',
        location: 'Istanbul, Turkey',
        description: 'Executed high-volume operational tasks in a fast-paced environment, enhancing team coordination and customer service standards.',
        skills: ['Team Collaboration', 'Time Management', 'Operational Efficiency']
      },
      {
        id: '4',
        role: 'Digital Transformation Lead',
        company: 'Turna Elektrik',
        period: 'Jun 2015 - Sep 2021',
        location: 'Istanbul, Turkey',
        description: 'Led the comprehensive digital transformation of a family-owned business. Implemented digital marketing strategies that resulted in 400%+ revenue growth and operational modernization.',
        skills: ['Digital Transformation', 'Strategic Planning', 'Business Development']
      }
    ],
    // Education
    educationList: [
      {
        id: '1',
        school: 'Anadolu University',
        degree: 'Associate Degree, Computer Programming',
        period: 'Oct 2024 - Jun 2026'
      },
      {
        id: '2',
        school: 'Sakarya University',
        degree: 'Bachelor\'s Degree, Management Information Systems',
        period: 'Sep 2021 - Jun 2025'
      },
      {
        id: '3',
        school: 'Gungoren Anatolian High School',
        degree: 'High School Diploma',
        period: '2017 - 2021'
      }
    ],
    // Certifications
    certifications: [
      {
        id: '1',
        title: 'SAP Business One - Certificate of Achievement',
        issuer: 'UPEXTECH',
        date: 'Jan 2025',
        link: 'https://drive.google.com/file/d/1ovPFEbTJBKFTC2jnpahcPafeFx6MY4S8/view',
      },
      {
        id: '2',
        title: 'Honor Certificate',
        issuer: 'Sakarya University Faculty of Business Administration',
        date: 'Jul 2024',
      },
      {
        id: '3',
        title: 'English Proficiency Certificate',
        issuer: 'Sakarya University (Erasmus Exam)',
        date: 'Mar 2022',
      },
      {
        id: '4',
        title: 'First Aid Training',
        issuer: 'IBB Fire Department',
        date: '2018',
        link: 'https://itfaiye.ibb.gov.tr/m/tr/ilkyardim-egitimleri.html',
      }
    ],
    // Skills
    skillsList: {
      technical: [
        "SAP Business One",
        "SSMS & HANA",
        "Crystal Reports",
        "DTW",
        "B1 Service Layer API",
        "Power BI",
        "Data Migration",
        "Query Optimization",
        "System Configuration"
      ],
      soft: [
        "BPMN",
        "Requirement Analysis",
        "Analytical Thinking",
        "Business Process Analysis",
        "Problem Solving",
        "Client Relations",
        "Project Management"
      ]
    },
    // Case Studies
    caseStudies: {
      title: 'Solved Real-World Problems',
      items: [
        {
          id: '1',
          title: 'Manufacturing Query Optimization',
          challenge: "Client's stock report took 10+ minutes to load, causing delays.",
          solution: "Re-engineered the SQL logic and implemented HANA calculation views.",
          impact: "Reduced reporting time to 15 seconds (97% improvement)."
        }
      ]
    },
    // Code Visualizer
    codeVisualizer: {
      title: 'Under the Hood',
      caption: 'I don\'t just configure; I build custom solutions.',
      code: `/* 
 * Optimizing Inventory Valuation Query
 * Legacy execution time: 10m 23s
 * Optimized execution time: 15s
 */

CREATE PROCEDURE [dbo].[USP_GetStockValuation] 
    @ItemDate datetime 
AS 
BEGIN 
    SET NOCOUNT ON; 

    -- Utilizing CTE for better readability and performance
    WITH StockCTE AS (
        SELECT 
            T0.ItemCode, 
            T0.ItemName,
            SUM(T1.InQty - T1.OutQty) as OnHand,
            AVG(T1.Price) as AvgPrice
        FROM OITM T0 
        INNER JOIN OINM T1 ON T0.ItemCode = T1.ItemCode
        WHERE T1.DocDate <= @ItemDate
        GROUP BY T0.ItemCode, T0.ItemName
    )
    SELECT * FROM StockCTE WHERE OnHand > 0;
END`
    },
    // Testimonials
    testimonials: {
      title: 'Recommendations',
      items: [
        {
          id: '1',
          text: "İlkay bridges the gap between technical complexity and business needs perfectly.",
          author: "Mr. Erman",
          role: "Former Project Manager"
        }
      ]
    },
  }
};

export const getTranslation = (lang: Language) => translations[lang];

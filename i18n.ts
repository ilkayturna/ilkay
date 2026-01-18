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
      badges: ['SAP B1 Danışmanı', 'ERP Uzmanı', 'Hayat Boyu Öğrenci :)'],
      greeting: 'Merhaba, ben',
      subtitle: 'Yazılım projelerinde, özellikle SAP Business One ve iş süreçleri geliştirme alanlarında deneyimliyim.',
      connect: 'Bağlantı Kur',
      contact: 'İletişime Geç',
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
          tags: ['Dijital Strateji', 'İş Geliştirme', 'Operasyon']
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
        "Git&Github",
        "SQL",
        "Python",
        "MsOffice"
      ],
      soft: [
        "İş Analizi",
        "Sorun Çözme",
        "Takım Çalışması",
        "Müşteri İletişimi",
        "Proje Yönetimi"
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
      badge: 'SAP B1 Consultant',
      badges: ['SAP B1 Consultant', 'ERP Specialist', 'Process Analyst'],
      greeting: "Hello, I'm",
      subtitle: 'Jr. ERP Consultant specializing in SAP Business One implementation for SMEs, driving business efficiency through SQL and process analysis.',
      connect: 'Connect',
      contact: 'Contact Me',
      call: 'Call',
    },
    // About Section
    about: {
      title: 'About Me',
      clickToView: 'Click to view →',
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
      technical: 'Technical Skills',
      soft: 'Soft Skills',
      languages: 'Languages',
      turkish: 'Turkish',
      english: 'English',
      native: 'Native',
      englishLevel: 'B2 - Upper Intermediate',
    },
    // Projects Section
    projects: {
      title: 'Projects',
      viewProject: 'Live Demo →',
      projectsList: [
        {
          id: '1',
          title: 'Jira Worklog Manager',
          description: 'AI-powered productivity tool solving manual worklog entry problem.',
          highlights: [
            'Problem: 30+ minutes daily manual Jira log entry',
            'Solution: React + AI automated worklog management',
            'Result: 85% efficiency gain (30min → 5min)',
            'Jira Cloud API integration for real-time sync',
            'Drag-and-drop interface with smart time distribution'
          ],
          tags: ['React', 'TypeScript', 'AI', 'Jira API'],
          link: 'https://jira-worklog-ivory.vercel.app/'
        },
        {
          id: '2',
          title: 'Turna Electric - Digital Transformation',
          description: 'Strategy project transforming traditional family business to digital platform.',
          highlights: [
            'Problem: Only 5-10 referral customers per month',
            'Solution: Google Business + social media integration',
            'Result: 350+ organic customer portfolio',
            '400%+ increase in business revenue',
            'Weekly strategic planning system implementation'
          ],
          tags: ['Digital Strategy', 'Business Development', 'Operations']
        }
      ]
    },
    // Contact Section
    contact: {
      title: "Let's Work Together",
      subtitle: 'Get in touch with me for job opportunities and projects.',
      copyright: 'All rights reserved.',
    },
    // Chat Widget
    chat: {
      welcome: "Hello! I'm İlkay's AI assistant. You can ask me questions about my experience, skills, or education.",
      placeholder: 'Ask a question...',
      assistant: 'İlkay Assistant',
      poweredBy: 'Powered by Gemini',
      error: 'A connection error occurred. Please try again later.',
      noResponse: "Sorry, I can't respond right now.",
    },
    // Profile data
    profile: {
      title: 'SAP B1 Consultant',
      location: 'Istanbul, Turkey',
      about: "Management Information Systems graduate, SAP Business One focused ERP Consultant. At Hitsoft, I provide end-to-end ERP implementation and process consulting for SME clients. I work on data analysis with SQL, business process optimization, and technical support. I focus on transforming technical knowledge into business value and producing measurable results. My side project Jira Worklog Manager achieved 85% efficiency improvement in team productivity.",
    },
    // Experiences
    experiences: [
      {
        id: '1',
        role: 'SAP B1 Consultant',
        company: 'Hitsoft',
        period: 'Jul 2025 - Present',
        location: 'Istanbul, Turkey',
        description: 'End-to-end SAP Business One ERP implementation and process consulting for SME clients. Custom reporting solutions with SQL. Process improvement in sales, purchasing and inventory modules. Active role in support processes for 10+ companies.',
        skills: ['SAP B1', 'SQL', 'ERP', 'Process Analysis']
      },
      {
        id: '2',
        role: 'SAP B1 Consultant Intern',
        company: 'Hitsoft',
        period: 'Feb 2025 - Jun 2025',
        location: 'Istanbul, Turkey',
        description: 'Hands-on experience in SAP B1 technical support and troubleshooting. Analysis and documentation of customer requests. Working alongside consultant team on live projects.',
        skills: ['Technical Support', 'Documentation', 'Client Communication']
      },
      {
        id: '3',
        role: 'Kitchen Chef',
        company: 'TAB Gıda',
        period: 'Feb 2021 - Oct 2021',
        location: 'Istanbul, Turkey',
        description: 'Teamwork and customer experience focused work in fast-paced environment. Time management and performance under pressure.',
        skills: ['Teamwork', 'Customer Relations', 'Time Management']
      },
      {
        id: '4',
        role: 'Digital Transformation Lead',
        company: 'Turna Elektrik',
        period: 'Jun 2015 - Sep 2021',
        location: 'Istanbul, Turkey',
        description: 'Led digital transformation of family business. Google Business and social media integration. Grew customer portfolio from 10 referrals to 350+ organic customers. Achieved 400%+ increase in business revenue.',
        skills: ['Digital Transformation', 'Strategy', 'Operations Management']
      }
    ],
    // Education
    educationList: [
      {
        id: '1',
        school: 'Anadolu University',
        degree: 'Associate, Computer Programming',
        period: 'Oct 2024 - Jun 2026'
      },
      {
        id: '2',
        school: 'Sakarya University',
        degree: 'Bachelor, Management Information Systems',
        period: 'Sep 2021 - Jun 2025'
      },
      {
        id: '3',
        school: 'Güngören Anatolian High School',
        degree: 'High School',
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
        "ERP Consulting",
        "SQL",
        "Data Analysis",
        "Process Management"
      ],
      soft: [
        "Business Analysis",
        "Problem Solving",
        "Teamwork",
        "Client Communication",
        "Project Management"
      ]
    },
  }
};

export const getTranslation = (lang: Language) => translations[lang];

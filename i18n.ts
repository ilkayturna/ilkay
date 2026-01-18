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
      badge: 'SAP Danışmanı',
      badges: ['SAP Danışmanı', 'Teknoloji Sever', 'Hayat Boyu Öğrenci :)'],
      greeting: 'Merhaba, ben',
      subtitle: 'İş stratejilerini teknik mükemmellikle buluşturan, süreç analizi ve ERP sistemleri konusunda uzmanlaşmış bir profesyonelim.',
      connect: 'Bağlantı Kur',
      contact: 'İletişime Geç',
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
      languages: 'Diller',
      turkish: 'Türkçe',
      english: 'İngilizce',
      native: 'Ana Dil',
      professional: 'Profesyonel',
    },
    // Projects Section
    projects: {
      title: 'Projelerim',
      viewProject: 'Projeyi Görüntüle →',
      projectsList: [
        {
          id: '1',
          title: 'Turna Elektrik Dijital Dönüşüm',
          description: 'Aile işletmemizi dijital platforma taşıyarak köklü bir dönüşüm gerçekleştirdim.',
          highlights: [
            'Ayda 5-10 referans müşteriden → 350+ organik müşteri portföyüne ulaşıldı',
            'Google Business ve sosyal medya entegrasyonu ile dijital varlık oluşturuldu',
            'Haftalık stratejik planlamalarla ekip küçük/orta/büyük projelere segmente edildi',
            'İşletme cirosunda %400+ artış sağlandı'
          ],
          tags: ['Dijital Dönüşüm', 'Strateji', 'İşletme Yönetimi']
        },
        {
          id: '2',
          title: 'Jira Worklog Manager',
          description: 'Yapay zeka destekli worklog yönetim uygulaması geliştirdim.',
          highlights: [
            '30+ dakikalık manuel log girişi → 5 dakikaya indirildi',
            'AI metin iyileştirme ve otomatik imla düzeltme',
            'Akıllı saat dağıtımı ve Excel entegrasyonu',
            'Jira Cloud senkronizasyonu ve sürükle-bırak arayüzü',
            'İş süreçlerinde %85 verimlilik artışı'
          ],
          tags: ['React', 'AI', 'Jira API', 'Verimlilik'],
          link: 'https://jira-worklog-ivory.vercel.app/'
        }
      ]
    },
    // Contact Section
    contact: {
      title: 'Birlikte Çalışalım',
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
      title: 'SAP Danışmanı',
      location: 'İstanbul, Türkiye',
      about: "Staj dönemimde sahada kazandığım pratik deneyimi şu anda Hitsoft'ta ERP Kıdemli Uzman Yardımcısı olarak, gerçek projelerde uçtan uca süreçlere dahil olarak pekiştiriyorum. SAP Business One başta olmak üzere, ERP sistemlerinin yalnızca teknik altyapısını değil, aynı zamanda iş stratejileriyle nasıl bütünleşmesi gerektiğini de analiz ederek uygulamaya geçiriyorum. Sorun çözme, yönetim ve iletişim konularında yetkinim.",
    },
    // Experiences
    experiences: [
      {
        id: '1',
        role: 'SAP B1 Danışmanı',
        company: 'Hitsoft',
        period: 'Tem 2025 - Halen',
        location: 'İstanbul, Türkiye',
        description: 'SAP Business One ERP sistemleri üzerine danışmanlık, süreç analizi ve uygulama. Araştırma ve Veri Analizi.',
        skills: ['SAP B1', 'SQL', 'ERP', 'Süreç Analizi']
      },
      {
        id: '2',
        role: 'SAP B1 Danışman Stajyeri',
        company: 'Hitsoft',
        period: 'Şub 2025 - Haz 2025',
        location: 'İstanbul, Türkiye',
        description: 'SAP B1 Sorun Giderme ve destek süreçlerinde aktif rol alma.',
        skills: ['Destek', 'Dokümantasyon']
      },
      {
        id: '3',
        role: 'Mutfak Personeli',
        company: 'TAB Gıda',
        period: 'Şub 2021 - Eki 2021',
        location: 'İstanbul, Türkiye',
        description: 'Ekip çalışması ve müşteri deneyimi üzerine tecrübe.',
        skills: ['Takım Çalışması', 'Müşteri İlişkileri']
      },
      {
        id: '4',
        role: 'Elektrik Teknisyeni',
        company: 'Turna Elektrik',
        period: 'Haz 2015 - Eyl 2021',
        location: 'İstanbul, Türkiye',
        description: 'Dönemsel altyapı ve operasyon yönetimi.',
        skills: ['Teknik Altyapı', 'Operasyon Yönetimi']
      }
    ],
    // Education
    educationList: [
      {
        id: '1',
        school: 'Sakarya Üniversitesi',
        degree: 'Lisans, Yönetim Bilişim Sistemleri',
        period: 'Eyl 2021 - Haz 2025'
      },
      {
        id: '2',
        school: 'Anadolu Üniversitesi',
        degree: 'Ön Lisans, Bilgisayar Programcılığı',
        period: 'Eki 2024 - Haz 2026'
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
    skillsList: [
      "SAP Business One",
      "ERP Danışmanlığı",
      "SQL",
      "Veri Analizi",
      "Süreç Yönetimi",
      "İş Analizi",
      "Sorun Çözme",
      "İngilizce (Profesyonel)",
      "Takım Çalışması"
    ],
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
      badge: 'SAP Consultant',
      badges: ['SAP Consultant', 'Tech Enthusiast', 'Lifelong Learner :)'],
      greeting: "Hello, I'm",
      subtitle: 'A professional specialized in process analysis and ERP systems, bridging business strategies with technical excellence.',
      connect: 'Connect',
      contact: 'Contact Me',
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
      languages: 'Languages',
      turkish: 'Turkish',
      english: 'English',
      native: 'Native',
      professional: 'Professional',
    },
    // Projects Section
    projects: {
      title: 'Projects',
      viewProject: 'View Project →',
      projectsList: [
        {
          id: '1',
          title: 'Turna Electric Digital Transformation',
          description: 'I transformed our family business by moving it to a digital platform.',
          highlights: [
            'From 5-10 referral customers/month → 350+ organic customer portfolio',
            'Created digital presence with Google Business and social media integration',
            'Team segmented into small/medium/large projects with weekly strategic planning',
            '400%+ increase in business revenue'
          ],
          tags: ['Digital Transformation', 'Strategy', 'Business Management']
        },
        {
          id: '2',
          title: 'Jira Worklog Manager',
          description: 'Developed an AI-powered worklog management application.',
          highlights: [
            '30+ minutes of manual log entry → reduced to 5 minutes',
            'AI text improvement and automatic spell correction',
            'Smart time distribution and Excel integration',
            'Jira Cloud sync and drag-and-drop interface',
            '85% efficiency increase in work processes'
          ],
          tags: ['React', 'AI', 'Jira API', 'Productivity'],
          link: 'https://jira-worklog-ivory.vercel.app/'
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
      title: 'SAP Consultant',
      location: 'Istanbul, Turkey',
      about: "I'm currently reinforcing the practical experience I gained during my internship as a Senior ERP Specialist Assistant at Hitsoft, participating in end-to-end processes in real projects. Particularly with SAP Business One, I analyze and implement not only the technical infrastructure of ERP systems but also how they should integrate with business strategies. I'm competent in problem-solving, management, and communication.",
    },
    // Experiences
    experiences: [
      {
        id: '1',
        role: 'SAP B1 Consultant',
        company: 'Hitsoft',
        period: 'Jul 2025 - Present',
        location: 'Istanbul, Turkey',
        description: 'Consulting on SAP Business One ERP systems, process analysis and implementation. Research and Data Analysis.',
        skills: ['SAP B1', 'SQL', 'ERP', 'Process Analysis']
      },
      {
        id: '2',
        role: 'SAP B1 Consultant Intern',
        company: 'Hitsoft',
        period: 'Feb 2025 - Jun 2025',
        location: 'Istanbul, Turkey',
        description: 'Active role in SAP B1 troubleshooting and support processes.',
        skills: ['Support', 'Documentation']
      },
      {
        id: '3',
        role: 'Kitchen Staff',
        company: 'TAB Gıda',
        period: 'Feb 2021 - Oct 2021',
        location: 'Istanbul, Turkey',
        description: 'Experience in teamwork and customer experience.',
        skills: ['Teamwork', 'Customer Relations']
      },
      {
        id: '4',
        role: 'Electrical Technician',
        company: 'Turna Elektrik',
        period: 'Jun 2015 - Sep 2021',
        location: 'Istanbul, Turkey',
        description: 'Periodic infrastructure and operations management.',
        skills: ['Technical Infrastructure', 'Operations Management']
      }
    ],
    // Education
    educationList: [
      {
        id: '1',
        school: 'Sakarya University',
        degree: 'Bachelor, Management Information Systems',
        period: 'Sep 2021 - Jun 2025'
      },
      {
        id: '2',
        school: 'Anadolu University',
        degree: 'Associate, Computer Programming',
        period: 'Oct 2024 - Jun 2026'
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
    skillsList: [
      "SAP Business One",
      "ERP Consulting",
      "SQL",
      "Data Analysis",
      "Process Management",
      "Business Analysis",
      "Problem Solving",
      "English (Professional)",
      "Teamwork"
    ],
  }
};

export const getTranslation = (lang: Language) => translations[lang];

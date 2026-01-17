import { Experience, Education, Certification } from './types';

export const PROFILE = {
  name: "İlkay Turna",
  title: "SAP Danışmanı",
  location: "İstanbul, Türkiye",
  email: "ilkay.turna@example.com", // Placeholder
  linkedin: "https://www.linkedin.com/in/ilkay-turna",
  about: "Staj dönemimde sahada kazandığım pratik deneyimi şu anda Hitsoft'ta ERP Kıdemli Uzman Yardımcısı olarak, gerçek projelerde uçtan uca süreçlere dahil olarak pekiştiriyorum. SAP Business One başta olmak üzere, ERP sistemlerinin yalnızca teknik altyapısını değil, aynı zamanda iş stratejileriyle nasıl bütünleşmesi gerektiğini de analiz ederek uygulamaya geçiriyorum. Sorun çözme, yönetim ve iletişim konularında yetkinim.",
  avatarUrl: "https://picsum.photos/id/64/400/400", // Placeholder matching professional look
  coverUrl: "https://picsum.photos/id/3/1200/400"
};

export const EXPERIENCES: Experience[] = [
  {
    id: '1',
    role: 'SAP B1 Consultant',
    company: 'Hitsoft',
    period: 'Tem 2023 - Halen',
    location: 'İstanbul, Türkiye',
    description: 'SAP Business One ERP sistemleri üzerine danışmanlık, süreç analizi ve uygulama. Araştırma ve Veri Analizi.',
    skills: ['SAP B1', 'SQL', 'ERP', 'Süreç Analizi']
  },
  {
    id: '2',
    role: 'SAP B1 Consultant Intern',
    company: 'Hitsoft',
    period: 'Şub 2023 - Haz 2023',
    location: 'İstanbul, Türkiye',
    description: 'SAP B1 Sorun Giderme ve destek süreçlerinde aktif rol alma.',
    skills: ['Destek', 'Dokümantasyon']
  },
  {
    id: '3',
    role: 'Kitchen Staff',
    company: 'TAB Gıda',
    period: 'Şub 2021 - Eki 2021',
    location: 'İstanbul, Türkiye',
    description: 'Ekip çalışması ve müşteri deneyimi üzerine tecrübe.',
    skills: ['Takım Çalışması', 'Müşteri İlişkileri']
  },
  {
    id: '4',
    role: 'Electrical Technician',
    company: 'Turna Elektrik',
    period: 'Haz 2015 - Eyl 2021',
    location: 'İstanbul, Türkiye',
    description: 'Dönemsel altyapı ve operasyon yönetimi.',
    skills: ['Teknik Altyapı', 'Operasyon Yönetimi']
  }
];

export const EDUCATION: Education[] = [
  {
    id: '1',
    school: 'Sakarya Üniversitesi',
    degree: 'Lisans, Yönetim Bilişim Sistemleri (Management Information Systems)',
    period: 'Eyl 2021 - Haz 2025'
  },
  {
    id: '2',
    school: 'Anadolu Üniversitesi',
    degree: 'Ön Lisans, Computer Programming',
    period: 'Eki 2024 - Haz 2026'
  }
];

export const CERTIFICATIONS: Certification[] = [
  {
    id: '1',
    title: 'SAP Business One - Certificate of Achievement',
    issuer: 'UPEXTECH',
    date: 'Oca 2025',
    icon: 'certificate'
  },
  {
    id: '2',
    title: 'Honor Certificate',
    issuer: 'Sakarya Üniversitesi Faculty of Business Administration',
    date: 'Tem 2024',
    icon: 'award'
  },
  {
    id: '3',
    title: 'English Proficiency Certificate',
    issuer: 'Sakarya University (Erasmus Exam)',
    date: 'Mar 2022',
    icon: 'certificate'
  }
];

export const SKILLS = [
  "SAP Business One",
  "ERP Danışmanlığı",
  "SQL",
  "Veri Analizi",
  "Süreç Yönetimi",
  "İş Analizi",
  "Sorun Çözme",
  "İngilizce (Profesyonel)",
  "Takım Çalışması"
];

export const SYSTEM_INSTRUCTION = `
You are an AI assistant for İlkay Turna's personal portfolio website. 
Your goal is to answer questions about İlkay's professional background, skills, and experience based ONLY on the following data.
Be professional, polite, and concise. Speak in Turkish by default, but answer in English if asked in English.

Data:
Name: ${PROFILE.name}
Title: ${PROFILE.title}
About: ${PROFILE.about}
Experience: ${JSON.stringify(EXPERIENCES)}
Education: ${JSON.stringify(EDUCATION)}
Certifications: ${JSON.stringify(CERTIFICATIONS)}
Skills: ${SKILLS.join(', ')}

If you don't know the answer based on this data, simply say you don't have that information but the user can contact İlkay directly.
`;

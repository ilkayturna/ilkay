import React, { useState } from 'react';
import { PROFILE, EXPERIENCES, EDUCATION, SKILLS, CERTIFICATIONS } from './constants';
import Icon from './components/Icon';
import ChatWidget from './components/ChatWidget';
import Timeline from './components/Timeline';

const App: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileMenuOpen(false);
  };

  const navItems = [
    { id: 'about', label: 'Hakkımda' },
    { id: 'experience', label: 'Deneyim' },
    { id: 'education', label: 'Eğitim' },
    { id: 'skills', label: 'Yetenekler' },
  ];

  return (
    <div className="min-h-screen bg-slate-50 selection:bg-blue-200">
      
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md border-b border-slate-200 z-40">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-slate-800 to-blue-600">
                {PROFILE.name}
              </span>
            </div>
            
            {/* Desktop Nav */}
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="text-slate-600 hover:text-blue-600 text-sm font-medium transition-colors"
                >
                  {item.label}
                </button>
              ))}
              <a 
                href={PROFILE.linkedin} 
                target="_blank" 
                rel="noreferrer"
                className="px-4 py-2 rounded-full bg-blue-600 text-white text-sm font-medium hover:bg-blue-700 transition-colors flex items-center gap-2"
              >
                <Icon name="Linkedin" size={16} />
                LinkedIn
              </a>
            </div>

            {/* Mobile Nav Button */}
            <div className="flex items-center md:hidden">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="text-slate-600 hover:text-slate-900 p-2"
              >
                {mobileMenuOpen ? <Icon name="X" /> : <Icon name="Menu" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Nav Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-slate-100 absolute w-full shadow-lg">
            <div className="px-4 pt-2 pb-4 space-y-1">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="block w-full text-left px-3 py-3 text-base font-medium text-slate-600 hover:text-blue-600 hover:bg-slate-50 rounded-md"
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      <main className="pt-16">
        
        {/* Hero Section */}
        <section className="relative bg-white border-b border-slate-200 overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
          <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-bl from-blue-50 to-transparent opacity-50"></div>
          
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32 relative z-10">
            <div className="flex flex-col md:flex-row items-center gap-12">
              <div className="flex-1 text-center md:text-left">
                <div className="inline-block px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-bold tracking-wide uppercase mb-4">
                  SAP Consultant
                </div>
                <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 mb-4 tracking-tight">
                  Merhaba, ben <span className="text-blue-600">{PROFILE.name}</span>
                </h1>
                <p className="text-lg md:text-xl text-slate-600 mb-8 max-w-2xl leading-relaxed">
                  İş stratejilerini teknik mükemmellikle buluşturan, süreç analizi ve ERP sistemleri konusunda uzmanlaşmış bir profesyonelim.
                </p>
                <div className="flex flex-wrap justify-center md:justify-start gap-4">
                  <a 
                    href={PROFILE.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="px-6 py-3 bg-slate-900 text-white rounded-lg font-semibold hover:bg-slate-800 transition-all shadow-lg hover:shadow-xl flex items-center gap-2"
                  >
                    <Icon name="Linkedin" size={20} />
                    Bağlantı Kur
                  </a>
                  <button 
                    onClick={() => scrollToSection('contact')}
                    className="px-6 py-3 bg-white text-slate-700 border border-slate-300 rounded-lg font-semibold hover:bg-slate-50 transition-all flex items-center gap-2"
                  >
                    <Icon name="Mail" size={20} />
                    İletişime Geç
                  </button>
                </div>
              </div>
              <div className="relative">
                <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-8 border-white shadow-2xl relative z-10">
                  <img 
                    src={PROFILE.avatarUrl} 
                    alt={PROFILE.name} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-center text-xs p-2 shadow-lg z-20 animate-pulse">
                  Open to Work
                </div>
                {/* Decorative blobs */}
                <div className="absolute top-0 -left-4 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-2xl opacity-30 animate-blob"></div>
                <div className="absolute -bottom-8 right-0 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-2xl opacity-30 animate-blob animation-delay-2000"></div>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-slate-900 mb-8 flex items-center gap-3">
              <span className="w-2 h-8 bg-blue-600 rounded-full"></span>
              Hakkımda
            </h2>
            <div className="prose prose-lg text-slate-600 bg-slate-50 p-8 rounded-2xl border border-slate-100">
              <p>{PROFILE.about}</p>
            </div>
            
            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
              {CERTIFICATIONS.map((cert) => (
                <div key={cert.id} className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
                  <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-lg flex items-center justify-center mb-4">
                    <Icon name="Award" size={24} />
                  </div>
                  <h3 className="font-bold text-slate-900 text-sm mb-1">{cert.title}</h3>
                  <p className="text-xs text-slate-500">{cert.issuer}</p>
                  <p className="text-xs text-slate-400 mt-2">{cert.date}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="py-20 bg-slate-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-slate-900 mb-12 flex items-center gap-3">
              <span className="w-2 h-8 bg-blue-600 rounded-full"></span>
              Deneyim
            </h2>
            <Timeline experiences={EXPERIENCES} />
          </div>
        </section>

        {/* Education & Skills Grid */}
        <section id="education" className="py-20 bg-white">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              
              {/* Education */}
              <div>
                <h2 className="text-3xl font-bold text-slate-900 mb-8 flex items-center gap-3">
                  <span className="w-2 h-8 bg-blue-600 rounded-full"></span>
                  Eğitim
                </h2>
                <div className="space-y-6">
                  {EDUCATION.map((edu) => (
                    <div key={edu.id} className="flex gap-4 p-6 rounded-2xl bg-slate-50 border border-slate-100 hover:border-blue-200 transition-colors">
                      <div className="mt-1">
                        <div className="w-12 h-12 bg-white rounded-lg shadow-sm flex items-center justify-center text-blue-600">
                          <Icon name="GraduationCap" size={24} />
                        </div>
                      </div>
                      <div>
                        <h3 className="font-bold text-lg text-slate-900">{edu.school}</h3>
                        <p className="text-slate-700 font-medium">{edu.degree}</p>
                        <p className="text-slate-500 text-sm mt-1">{edu.period}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Skills */}
              <div id="skills">
                <h2 className="text-3xl font-bold text-slate-900 mb-8 flex items-center gap-3">
                  <span className="w-2 h-8 bg-blue-600 rounded-full"></span>
                  Yetenekler
                </h2>
                <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100">
                  <div className="flex flex-wrap gap-3">
                    {SKILLS.map((skill, index) => (
                      <div key={index} className="flex items-center gap-2 px-4 py-2 bg-white rounded-lg text-slate-700 font-medium shadow-sm border border-slate-200">
                         <Icon name="CheckCircle" size={16} className="text-green-500" />
                         {skill}
                      </div>
                    ))}
                  </div>
                  
                  <div className="mt-8 pt-8 border-t border-slate-200">
                    <h3 className="font-semibold text-slate-900 mb-4">Diller</h3>
                    <div className="space-y-3">
                      <div>
                        <div className="flex justify-between text-sm mb-1">
                          <span className="font-medium text-slate-700">Türkçe</span>
                          <span className="text-slate-500">Ana Dil</span>
                        </div>
                        <div className="w-full bg-slate-200 rounded-full h-2">
                          <div className="bg-blue-600 h-2 rounded-full w-full"></div>
                        </div>
                      </div>
                      <div>
                        <div className="flex justify-between text-sm mb-1">
                          <span className="font-medium text-slate-700">İngilizce</span>
                          <span className="text-slate-500">Profesyonel</span>
                        </div>
                        <div className="w-full bg-slate-200 rounded-full h-2">
                          <div className="bg-blue-600 h-2 rounded-full w-[85%]"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact/Footer */}
        <section id="contact" className="bg-slate-900 text-white py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-6">Birlikte Çalışalım</h2>
            <p className="text-slate-400 mb-12 max-w-xl mx-auto">
              SAP projeleri, süreç analizi veya teknoloji danışmanlığı konularında görüşmek için iletişime geçebilirsiniz.
            </p>
            
            <div className="flex justify-center gap-6 mb-12">
               <a 
                 href={`mailto:${PROFILE.email}`} 
                 className="w-16 h-16 rounded-2xl bg-slate-800 hover:bg-blue-600 flex items-center justify-center transition-all duration-300 group"
               >
                 <Icon name="Mail" size={32} className="text-slate-400 group-hover:text-white" />
               </a>
               <a 
                 href={PROFILE.linkedin} 
                 target="_blank" 
                 rel="noreferrer"
                 className="w-16 h-16 rounded-2xl bg-slate-800 hover:bg-blue-600 flex items-center justify-center transition-all duration-300 group"
               >
                 <Icon name="Linkedin" size={32} className="text-slate-400 group-hover:text-white" />
               </a>
            </div>

            <div className="border-t border-slate-800 pt-8 text-sm text-slate-500">
              &copy; {new Date().getFullYear()} {PROFILE.name}. Tüm hakları saklıdır.
            </div>
          </div>
        </section>

      </main>

      <ChatWidget />
    </div>
  );
};

export default App;
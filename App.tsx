import React, { useState, useEffect } from 'react';
import { PROFILE } from './constants';
import { Language, getTranslation } from './i18n';
import Icon from './components/Icon';
import Timeline from './components/Timeline';

const App: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('darkMode');
      return saved ? JSON.parse(saved) : false;
    }
    return false;
  });
  const [language, setLanguage] = useState<Language>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('language');
      return (saved as Language) || 'tr';
    }
    return 'tr';
  });

  // Typewriter effect states
  const [currentBadgeIndex, setCurrentBadgeIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  const t = getTranslation(language);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      document.documentElement.classList.remove('light');
    } else {
      document.documentElement.classList.remove('dark');
      document.documentElement.classList.add('light');
    }
    localStorage.setItem('darkMode', JSON.stringify(darkMode));
  }, [darkMode]);

  useEffect(() => {
    localStorage.setItem('language', language);
    document.documentElement.lang = language;
  }, [language]);

  // Typewriter effect
  useEffect(() => {
    const badges = t.hero.badges;
    const currentText = badges[currentBadgeIndex];
    
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (displayText.length < currentText.length) {
          setDisplayText(currentText.slice(0, displayText.length + 1));
        } else {
          // Wait before starting to delete
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        if (displayText.length > 0) {
          setDisplayText(displayText.slice(0, -1));
        } else {
          setIsDeleting(false);
          setCurrentBadgeIndex((prev) => (prev + 1) % badges.length);
        }
      }
    }, isDeleting ? 50 : 100);

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, currentBadgeIndex, t.hero.badges]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileMenuOpen(false);
  };

  const navItems = [
    { id: 'about', label: t.nav.about },
    { id: 'experience', label: t.nav.experience },
    { id: 'education', label: t.nav.education },
    { id: 'skills', label: t.nav.skills },
    { id: 'projects', label: t.nav.projects },
  ];

  const toggleLanguage = () => {
    setLanguage(language === 'tr' ? 'en' : 'tr');
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900 selection:bg-blue-200 dark:selection:bg-blue-800 transition-colors duration-300">
      
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-700 z-40 transition-colors duration-300">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-slate-800 to-blue-600 dark:from-slate-200 dark:to-blue-400">
                {PROFILE.name}
              </span>
            </div>
            
            {/* Desktop Nav */}
            <div className="hidden md:flex items-center space-x-6">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 text-sm font-medium transition-colors"
                >
                  {item.label}
                </button>
              ))}
              <a 
                href="https://drive.google.com/file/d/11bqoUkhZEU5785qnkj6dxeRZSVjZWso1/view" 
                target="_blank" 
                rel="noreferrer"
                className="px-3 py-1.5 rounded-full bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-200 text-sm font-medium hover:bg-slate-300 dark:hover:bg-slate-600 transition-colors flex items-center gap-1.5"
              >
                <Icon name="FileText" size={14} />
                {t.nav.cv}
              </a>
              <a 
                href={PROFILE.linkedin} 
                target="_blank" 
                rel="noreferrer"
                className="px-3 py-1.5 rounded-full bg-blue-600 text-white text-sm font-medium hover:bg-blue-700 transition-colors flex items-center gap-1.5"
              >
                <Icon name="Linkedin" size={14} />
                LinkedIn
              </a>
              <button
                onClick={toggleLanguage}
                className="p-1.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors flex items-center gap-1"
                aria-label="Change language"
              >
                <Icon name="Globe" size={16} />
                <span className="text-xs font-bold">{language.toUpperCase()}</span>
              </button>
              <button
                onClick={() => setDarkMode(!darkMode)}
                className="p-1.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
                aria-label="Toggle theme"
              >
                {darkMode ? <Icon name="Sun" size={18} /> : <Icon name="Moon" size={18} />}
              </button>
            </div>

            {/* Mobile Nav Button */}
            <div className="flex items-center gap-2 md:hidden">
              <button
                onClick={toggleLanguage}
                className="p-2 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 transition-colors flex items-center gap-1"
                aria-label="Change language"
              >
                <Icon name="Globe" size={16} />
                <span className="text-xs font-bold">{language.toUpperCase()}</span>
              </button>
              <button
                onClick={() => setDarkMode(!darkMode)}
                className="p-2 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 transition-colors"
                aria-label="Toggle theme"
              >
                {darkMode ? <Icon name="Sun" size={20} /> : <Icon name="Moon" size={20} />}
              </button>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white p-2"
              >
                {mobileMenuOpen ? <Icon name="X" /> : <Icon name="Menu" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Nav Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white dark:bg-slate-800 border-t border-slate-100 dark:border-slate-700 absolute w-full shadow-lg">
            <div className="px-4 pt-2 pb-4 space-y-1">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="block w-full text-left px-3 py-3 text-base font-medium text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-slate-50 dark:hover:bg-slate-700 rounded-md"
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
        <section className="relative bg-white dark:bg-slate-800 border-b border-slate-200 dark:border-slate-700 overflow-hidden transition-colors duration-300">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 dark:opacity-5"></div>
          <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-bl from-blue-50 dark:from-blue-900/20 to-transparent opacity-50"></div>
          
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32 relative z-10">
            <div className="flex flex-col md:flex-row items-center gap-12">
              <div className="flex-1 text-center md:text-left">
                <div className="inline-block px-3 py-1 bg-blue-100 dark:bg-blue-900/50 text-blue-700 dark:text-blue-300 rounded-full text-xs font-bold tracking-wide uppercase mb-4 transition-all duration-100">
                  {displayText}<span className="animate-pulse">|</span>
                </div>
                <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 dark:text-white mb-4 tracking-tight">
                  {t.hero.greeting} <span className="text-blue-600 dark:text-blue-400">{PROFILE.name}</span>
                </h1>
                <p className="text-lg md:text-xl text-slate-600 dark:text-slate-300 mb-8 max-w-2xl leading-relaxed">
                  {t.hero.subtitle}
                </p>
                <div className="flex flex-wrap justify-center md:justify-start gap-4">
                  <a 
                    href={PROFILE.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="px-6 py-3 bg-slate-900 dark:bg-blue-600 text-white rounded-lg font-semibold hover:bg-slate-800 dark:hover:bg-blue-700 transition-all shadow-lg hover:shadow-xl flex items-center gap-2"
                  >
                    <Icon name="Linkedin" size={20} />
                    {t.hero.connect}
                  </a>
                  <a 
                    href={`mailto:${PROFILE.email}`}
                    className="px-6 py-3 bg-white dark:bg-slate-700 text-slate-700 dark:text-slate-200 border border-slate-300 dark:border-slate-600 rounded-lg font-semibold hover:bg-slate-50 dark:hover:bg-slate-600 transition-all flex items-center gap-2"
                  >
                    <Icon name="Mail" size={20} />
                    {t.hero.contact}
                  </a>
                </div>
              </div>
              <div className="relative">
                <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-8 border-white dark:border-slate-700 shadow-2xl relative z-10">
                  <img 
                    src={PROFILE.avatarUrl} 
                    alt={PROFILE.name} 
                    className="w-full h-full object-cover"
                  />
                </div>
                {/* Decorative blobs */}
                <div className="absolute top-0 -left-4 w-72 h-72 bg-blue-200 dark:bg-blue-800 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-2xl opacity-30 animate-blob"></div>
                <div className="absolute -bottom-8 right-0 w-72 h-72 bg-purple-200 dark:bg-purple-800 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-2xl opacity-30 animate-blob animation-delay-2000"></div>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-20 bg-white dark:bg-slate-800 transition-colors duration-300">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-8 flex items-center gap-3">
              <span className="w-2 h-8 bg-blue-600 rounded-full"></span>
              {t.about.title}
            </h2>
            <div className="prose prose-lg text-slate-600 dark:text-slate-300 bg-slate-50 dark:bg-slate-700/50 p-8 rounded-2xl border border-slate-100 dark:border-slate-600">
              <p>{t.profile.about}</p>
            </div>
            
            <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {t.certifications.map((cert) => {
                const CardContent = (
                  <>
                    <div className="w-10 h-10 bg-blue-50 dark:bg-blue-900/50 text-blue-600 dark:text-blue-400 rounded-lg flex items-center justify-center mb-4">
                      <Icon name="Award" size={24} />
                    </div>
                    <h3 className="font-bold text-slate-900 dark:text-white text-sm mb-1">{cert.title}</h3>
                    <p className="text-xs text-slate-500 dark:text-slate-400">{cert.issuer}</p>
                    <p className="text-xs text-slate-400 dark:text-slate-500 mt-2">{cert.date}</p>
                    {cert.link && <p className="text-xs text-blue-500 mt-2">{t.about.clickToView}</p>}
                  </>
                );
                
                return cert.link ? (
                  <a 
                    key={cert.id} 
                    href={cert.link}
                    target="_blank"
                    rel="noreferrer"
                    className="bg-white dark:bg-slate-700 p-6 rounded-xl border border-slate-200 dark:border-slate-600 shadow-sm hover:shadow-md hover:border-blue-300 dark:hover:border-blue-500 transition-all cursor-pointer block"
                  >
                    {CardContent}
                  </a>
                ) : (
                  <div key={cert.id} className="bg-white dark:bg-slate-700 p-6 rounded-xl border border-slate-200 dark:border-slate-600 shadow-sm hover:shadow-md transition-shadow">
                    {CardContent}
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="py-20 bg-slate-50 dark:bg-slate-900 transition-colors duration-300">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-12 flex items-center gap-3">
              <span className="w-2 h-8 bg-blue-600 rounded-full"></span>
              {t.experience.title}
            </h2>
            <Timeline experiences={t.experiences} />
          </div>
        </section>

        {/* Education & Skills Grid */}
        <section id="education" className="py-20 bg-white dark:bg-slate-800 transition-colors duration-300">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              
              {/* Education */}
              <div>
                <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-8 flex items-center gap-3">
                  <span className="w-2 h-8 bg-blue-600 rounded-full"></span>
                  {t.education.title}
                </h2>
                <div className="space-y-6">
                  {t.educationList.map((edu) => (
                    <div key={edu.id} className="flex gap-4 p-6 rounded-2xl bg-slate-50 dark:bg-slate-700/50 border border-slate-100 dark:border-slate-600 hover:border-blue-200 dark:hover:border-blue-500 transition-colors">
                      <div className="mt-1">
                        <div className="w-12 h-12 bg-white dark:bg-slate-600 rounded-lg shadow-sm flex items-center justify-center text-blue-600 dark:text-blue-400">
                          <Icon name="GraduationCap" size={24} />
                        </div>
                      </div>
                      <div>
                        <h3 className="font-bold text-lg text-slate-900 dark:text-white">{edu.school}</h3>
                        <p className="text-slate-700 dark:text-slate-300 font-medium">{edu.degree}</p>
                        <p className="text-slate-500 dark:text-slate-400 text-sm mt-1">{edu.period}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Skills */}
              <div id="skills">
                <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-8 flex items-center gap-3">
                  <span className="w-2 h-8 bg-blue-600 rounded-full"></span>
                  {t.skills.title}
                </h2>
                <div className="bg-slate-50 dark:bg-slate-700/50 p-8 rounded-3xl border border-slate-100 dark:border-slate-600">
                  <div className="flex flex-wrap gap-3">
                    {t.skillsList.map((skill, index) => (
                      <div key={index} className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-slate-600 rounded-lg text-slate-700 dark:text-slate-200 font-medium shadow-sm border border-slate-200 dark:border-slate-500">
                         <Icon name="CheckCircle" size={16} className="text-green-500" />
                         {skill}
                      </div>
                    ))}
                  </div>
                  
                  <div className="mt-8 pt-8 border-t border-slate-200 dark:border-slate-600">
                    <h3 className="font-semibold text-slate-900 dark:text-white mb-4">{t.skills.languages}</h3>
                    <div className="space-y-3">
                      <div>
                        <div className="flex justify-between text-sm mb-1">
                          <span className="font-medium text-slate-700 dark:text-slate-300">{t.skills.turkish}</span>
                          <span className="text-slate-500 dark:text-slate-400">{t.skills.native}</span>
                        </div>
                        <div className="w-full bg-slate-200 dark:bg-slate-600 rounded-full h-2">
                          <div className="bg-blue-600 h-2 rounded-full w-full"></div>
                        </div>
                      </div>
                      <div>
                        <div className="flex justify-between text-sm mb-1">
                          <span className="font-medium text-slate-700 dark:text-slate-300">{t.skills.english}</span>
                          <span className="text-slate-500 dark:text-slate-400">{t.skills.professional}</span>
                        </div>
                        <div className="w-full bg-slate-200 dark:bg-slate-600 rounded-full h-2">
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

        {/* Projects Section */}
        <section id="projects" className="py-20 bg-slate-50 dark:bg-slate-900 transition-colors duration-300">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-12 flex items-center gap-3">
              <span className="w-2 h-8 bg-blue-600 rounded-full"></span>
              {t.projects.title}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {t.projects.projectsList.map((project) => (
                <div key={project.id} className="bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 overflow-hidden hover:border-blue-300 dark:hover:border-blue-500 transition-all duration-300 hover:shadow-lg">
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">{project.title}</h3>
                    <p className="text-slate-600 dark:text-slate-400 mb-4">{project.description}</p>
                    
                    <div className="space-y-2 mb-4">
                      {project.highlights.map((highlight, index) => (
                        <div key={index} className="flex items-start gap-2 text-sm text-slate-700 dark:text-slate-300">
                          <Icon name="CheckCircle" size={16} className="text-green-500 mt-0.5 flex-shrink-0" />
                          <span>{highlight}</span>
                        </div>
                      ))}
                    </div>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map((tag, index) => (
                        <span key={index} className="px-2 py-1 bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 rounded text-xs font-medium">
                          {tag}
                        </span>
                      ))}
                    </div>
                    
                    {project.link && (
                      <a 
                        href={project.link} 
                        target="_blank" 
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 font-medium hover:underline"
                      >
                        {t.projects.viewProject}
                        <Icon name="ExternalLink" size={16} />
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact/Footer */}
        <section id="contact" className="bg-slate-900 dark:bg-slate-950 text-white py-20 transition-colors duration-300">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-6">{t.contact.title}</h2>
            <p className="text-slate-400 mb-12 max-w-xl mx-auto">
              {t.contact.subtitle}
            </p>
            
            <div className="flex justify-center gap-6 mb-12">
               <a 
                 href={`mailto:${PROFILE.email}`} 
                 className="w-16 h-16 rounded-2xl bg-slate-800 dark:bg-slate-800 hover:bg-blue-600 flex items-center justify-center transition-all duration-300 group"
               >
                 <Icon name="Mail" size={32} className="text-slate-400 group-hover:text-white" />
               </a>
               <a 
                 href={PROFILE.linkedin} 
                 target="_blank" 
                 rel="noreferrer"
                 className="w-16 h-16 rounded-2xl bg-slate-800 dark:bg-slate-800 hover:bg-blue-600 flex items-center justify-center transition-all duration-300 group"
               >
                 <Icon name="Linkedin" size={32} className="text-slate-400 group-hover:text-white" />
               </a>
            </div>

            <div className="border-t border-slate-800 pt-8 text-sm text-slate-500">
              &copy; {new Date().getFullYear()} {PROFILE.name}. {t.contact.copyright}
            </div>
          </div>
        </section>

      </main>
    </div>
  );
};

export default App;

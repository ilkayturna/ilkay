import React from 'react';
import Icon from './Icon';
import { Testimonial } from '../types';

interface TestimonialsProps {
  title: string;
  testimonials: Testimonial[];
}

const Testimonials: React.FC<TestimonialsProps> = ({ title, testimonials }) => {
  return (
    <div className="py-16 bg-slate-50 dark:bg-slate-900/50 rounded-3xl my-12">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-2xl font-bold text-center text-slate-900 dark:text-white mb-12 flex items-center justify-center gap-2">
          <Icon name="MessageSquare" size={24} className="text-blue-600" />
          {title}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-1 gap-6">
          {testimonials.map((t) => (
            <div key={t.id} className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-lg border border-slate-100 dark:border-slate-700 relative text-center">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-blue-600 text-white p-3 rounded-full shadow-lg">
                <Icon name="Quote" size={24} fill="currentColor" />
              </div>
              
              <p className="text-slate-600 dark:text-slate-300 italic text-lg mb-6 mt-4">
                "{t.text}"
              </p>
              
              <div className="flex flex-col items-center justify-center border-t border-slate-100 dark:border-slate-700 pt-6">
                 <div className="w-12 h-12 bg-slate-200 dark:bg-slate-700 rounded-full flex items-center justify-center text-xl font-bold text-slate-500 mb-2">
                    {t.author.charAt(0)}
                 </div>
                 <h4 className="font-bold text-slate-900 dark:text-white">{t.author}</h4>
                 <p className="text-sm text-blue-600 dark:text-blue-400">{t.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
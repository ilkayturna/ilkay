import React from 'react';
import Icon from './Icon';
import { CaseStudy } from '../types';

interface CaseStudiesProps {
  title: string;
  studies: CaseStudy[];
}

const CaseStudies: React.FC<CaseStudiesProps> = ({ title, studies }) => {
  return (
    <div className="py-12">
      <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-10 text-center flex items-center justify-center gap-3">
        <Icon name="Target" size={32} className="text-blue-600" />
        {title}
      </h2>
      
      <div className="grid grid-cols-1 gap-8 max-w-4xl mx-auto">
        {studies.map((study) => (
          <div key={study.id} className="bg-white dark:bg-slate-800 rounded-2xl p-8 border border-slate-200 dark:border-slate-700 shadow-xl hover:shadow-2xl transition-all duration-300 relative overflow-hidden group">
            <div className="absolute top-0 left-0 w-2 h-full bg-blue-600"></div>
            
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 group-hover:text-blue-600 transition-colors">
              {study.title}
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Challenge */}
              <div className="bg-red-50 dark:bg-red-900/10 p-4 rounded-xl border border-red-100 dark:border-red-900/30">
                <div className="text-red-600 dark:text-red-400 font-bold mb-2 flex items-center gap-2">
                  <Icon name="AlertCircle" size={18} />
                  Challenge
                </div>
                <p className="text-slate-700 dark:text-slate-300 text-sm">
                  {study.challenge}
                </p>
              </div>

              {/* Solution */}
              <div className="bg-blue-50 dark:bg-blue-900/10 p-4 rounded-xl border border-blue-100 dark:border-blue-900/30">
                <div className="text-blue-600 dark:text-blue-400 font-bold mb-2 flex items-center gap-2">
                  <Icon name="Cpu" size={18} />
                  Solution
                </div>
                <p className="text-slate-700 dark:text-slate-300 text-sm">
                  {study.solution}
                </p>
              </div>

               {/* Impact */}
               <div className="bg-green-50 dark:bg-green-900/10 p-4 rounded-xl border border-green-100 dark:border-green-900/30">
                <div className="text-green-600 dark:text-green-400 font-bold mb-2 flex items-center gap-2">
                  <Icon name="TrendingUp" size={18} />
                  Impact
                </div>
                <p className="text-slate-700 dark:text-slate-300 text-sm font-semibold">
                  {study.impact}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CaseStudies;
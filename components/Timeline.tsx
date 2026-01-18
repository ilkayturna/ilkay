import React from 'react';
import { Experience } from '../types';
import Icon from './Icon';

interface TimelineProps {
  experiences: Experience[];
}

const Timeline: React.FC<TimelineProps> = ({ experiences }) => {
  return (
    <div className="relative border-l-2 border-slate-200 dark:border-slate-700 ml-3 md:ml-6 space-y-12">
      {experiences.map((exp) => (
        <div key={exp.id} className="relative pl-8 md:pl-12 group">
          {/* Dot */}
          <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-slate-200 dark:bg-slate-600 border-2 border-white dark:border-slate-800 group-hover:bg-blue-600 group-hover:scale-125 transition-all duration-300"></div>
          
          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-2">
            <div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white">{exp.role}</h3>
              <div className="flex items-center gap-2 text-slate-600 dark:text-slate-300 font-medium">
                <Icon name="Briefcase" size={16} />
                <span>{exp.company}</span>
              </div>
            </div>
            <div className="text-sm font-semibold text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/30 px-3 py-1 rounded-full mt-2 sm:mt-0 w-fit">
              {exp.period}
            </div>
          </div>
          
          <p className="text-slate-500 dark:text-slate-400 text-sm mb-3 flex items-center gap-1">
             <Icon name="MapPin" size={14} />
             {exp.location}
          </p>

          <p className="text-slate-700 dark:text-slate-300 leading-relaxed mb-4">{exp.description}</p>

          {exp.skills && (
            <div className="flex flex-wrap gap-2">
              {exp.skills.map((skill, idx) => (
                <span key={idx} className="px-2 py-1 bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 text-xs rounded-md border border-slate-200 dark:border-slate-600">
                  {skill}
                </span>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Timeline;
import React from 'react';
import { Experience } from '../types';
import Icon from './Icon';

interface TimelineProps {
  experiences: Experience[];
}

const Timeline: React.FC<TimelineProps> = ({ experiences }) => {
  return (
    <div className="relative border-l-2 border-slate-200 ml-3 md:ml-6 space-y-12">
      {experiences.map((exp) => (
        <div key={exp.id} className="relative pl-8 md:pl-12 group">
          {/* Dot */}
          <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-slate-200 border-2 border-white group-hover:bg-blue-600 group-hover:scale-125 transition-all duration-300"></div>
          
          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-2">
            <div>
              <h3 className="text-xl font-bold text-slate-900">{exp.role}</h3>
              <div className="flex items-center gap-2 text-slate-600 font-medium">
                <Icon name="Briefcase" size={16} />
                <span>{exp.company}</span>
              </div>
            </div>
            <div className="text-sm font-semibold text-blue-600 bg-blue-50 px-3 py-1 rounded-full mt-2 sm:mt-0 w-fit">
              {exp.period}
            </div>
          </div>
          
          <p className="text-slate-500 text-sm mb-3 flex items-center gap-1">
             <Icon name="MapPin" size={14} />
             {exp.location}
          </p>

          <p className="text-slate-700 leading-relaxed mb-4">{exp.description}</p>

          {exp.skills && (
            <div className="flex flex-wrap gap-2">
              {exp.skills.map((skill, idx) => (
                <span key={idx} className="px-2 py-1 bg-slate-100 text-slate-600 text-xs rounded-md border border-slate-200">
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
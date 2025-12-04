import React from 'react';
import { Module } from '../types';
import { Layout, Cpu, Share2, Monitor, Shield, Settings, CheckCircle2, Circle } from 'lucide-react';

interface SidebarProps {
  modules: Module[];
  activeLessonId: string;
  completedLessons: Set<string>;
  onSelectLesson: (id: string) => void;
  isOpen: boolean;
  onCloseMobile: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ 
  modules, 
  activeLessonId, 
  completedLessons, 
  onSelectLesson,
  isOpen,
  onCloseMobile
}) => {
  
  const getIcon = (iconName: string) => {
    switch(iconName) {
      case 'layout': return <Layout size={18} />;
      case 'cpu': return <Cpu size={18} />;
      case 'share-2': return <Share2 size={18} />;
      case 'monitor': return <Monitor size={18} />;
      case 'shield': return <Shield size={18} />;
      case 'settings': return <Settings size={18} />;
      default: return <Circle size={18} />;
    }
  };

  return (
    <aside className={`
      fixed inset-y-0 left-0 z-40 w-80 bg-white border-r border-slate-200 transform transition-transform duration-300 ease-in-out overflow-y-auto
      ${isOpen ? 'translate-x-0' : '-translate-x-full'}
      lg:translate-x-0 lg:static lg:block
    `}>
      <div className="p-6 border-b border-slate-100 bg-brand-700 text-white">
        <h1 className="text-xl font-bold">AwesomeBank Path</h1>
        <p className="text-xs text-brand-100 mt-1 uppercase tracking-wider">Project Reference</p>
      </div>

      <div className="p-4 space-y-6">
        {modules.map((module) => (
          <div key={module.id}>
            <div className="flex items-center gap-2 mb-3 text-slate-800 font-bold px-2">
              <span className="text-brand-600">{getIcon(module.icon)}</span>
              <h2>{module.title}</h2>
            </div>
            <div className="space-y-1">
              {module.lessons.map((lesson) => {
                const isActive = activeLessonId === lesson.id;
                const isCompleted = completedLessons.has(lesson.id);

                return (
                  <button
                    key={lesson.id}
                    onClick={() => {
                        onSelectLesson(lesson.id);
                        if (window.innerWidth < 1024) onCloseMobile();
                    }}
                    className={`
                      w-full flex items-center gap-3 px-3 py-2 text-sm rounded-md transition-colors text-left
                      ${isActive 
                        ? 'bg-brand-50 text-brand-700 font-medium' 
                        : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'}
                    `}
                  >
                    <div className={`${isCompleted ? 'text-green-500' : 'text-slate-300'}`}>
                      {isCompleted ? <CheckCircle2 size={16} /> : <Circle size={16} />}
                    </div>
                    <span className="flex-1 truncate">{lesson.title}</span>
                    <span className="text-xs text-slate-400">{lesson.duration}</span>
                  </button>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </aside>
  );
};

export default Sidebar;
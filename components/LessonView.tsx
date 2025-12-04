import React, { useState } from 'react';
import { Lesson, SectionContent } from '../types';
import CodeBlock from './CodeBlock';
import { ChevronDown, ChevronRight, CheckCircle, ArrowRight, ExternalLink } from 'lucide-react';

interface AccordionProps {
  data?: {
    title: string;
    content: SectionContent[];
  };
}

// Helper sub-component for accordion
const Accordion: React.FC<AccordionProps> = ({ data }) => {
    const [isOpen, setIsOpen] = useState(false);
    
    if (!data) return null;

    return (
        <div className="border border-slate-200 rounded-lg mb-6 overflow-hidden">
            <button 
                onClick={() => setIsOpen(!isOpen)}
                className="w-full flex items-center justify-between px-5 py-4 bg-slate-50 hover:bg-slate-100 transition-colors text-left"
                type="button"
            >
                <span className="font-semibold text-slate-800">{data.title}</span>
                {isOpen ? <ChevronDown size={20} className="text-slate-500" /> : <ChevronRight size={20} className="text-slate-500" />}
            </button>
            {isOpen && (
                <div className="p-5 bg-white border-t border-slate-200">
                     {data.content?.map((item, i) => {
                         if(item.type === 'code' && item.codeSnippet) return <CodeBlock key={i} snippet={item.codeSnippet} />;
                         if(item.type === 'text') return <p key={i} className="mb-4 text-slate-700">{item.content}</p>;
                         return null;
                     })}
                </div>
            )}
        </div>
    )
}

interface LessonViewProps {
  lesson: Lesson;
  onComplete: () => void;
  isCompleted: boolean;
  onNext: () => void;
  hasNext: boolean;
}

const LessonView: React.FC<LessonViewProps> = ({ lesson, onComplete, isCompleted, onNext, hasNext }) => {
  
  const renderContent = (section: SectionContent, index: number) => {
    switch (section.type) {
      case 'text':
        return <p key={index} className="text-slate-700 leading-7 mb-6 text-lg">{section.content}</p>;
      
      case 'code':
        return section.codeSnippet ? <CodeBlock key={index} snippet={section.codeSnippet} /> : null;
      
      case 'list':
        return (
          <ul key={index} className="space-y-3 mb-8">
            {section.items?.map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <div className="mt-1.5 min-w-[6px] h-[6px] rounded-full bg-brand-500" />
                <span className="text-slate-700">{item}</span>
              </li>
            ))}
          </ul>
        );

      case 'table':
        return (
          <div key={index} className="overflow-x-auto mb-8 border border-slate-200 rounded-lg shadow-sm">
            <table className="w-full text-sm text-left">
              <thead className="text-xs text-slate-700 uppercase bg-slate-50 border-b border-slate-200">
                <tr>
                  {section.tableData?.headers.map((h, i) => (
                    <th key={i} className="px-6 py-3 font-bold tracking-wider">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {section.tableData?.rows.map((row, i) => (
                  <tr key={i} className="bg-white border-b border-slate-100 hover:bg-slate-50 last:border-0">
                    {row.map((cell, j) => (
                      <td key={j} className="px-6 py-4 text-slate-600">{cell}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        );

      case 'diagram':
        return (
            <div key={index} className="bg-slate-50 p-6 rounded-lg border-2 border-slate-200 mb-8 font-mono text-sm overflow-x-auto text-slate-700">
                {section.diagramLines?.map((line, i) => (
                    <div key={i} className="whitespace-pre">{line}</div>
                ))}
            </div>
        );

      case 'accordion':
        return section.accordionData ? <Accordion key={index} data={section.accordionData} /> : null;
        
      default:
        return null;
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-6 py-10 lg:px-12">
      <div className="mb-8 border-b border-slate-200 pb-6">
         <div className="flex items-center gap-2 text-brand-600 text-sm font-semibold uppercase tracking-wide mb-2">
            <span>Lesson</span>
         </div>
         <h1 className="text-3xl md:text-4xl font-bold text-slate-900">{lesson.title}</h1>
         <div className="mt-2 flex items-center gap-4 flex-wrap">
            <p className="text-slate-500">Estimated time: {lesson.duration}</p>
            {lesson.salesforceLink && (
               <a 
                  href={lesson.salesforceLink} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-brand-600 hover:text-brand-700 font-medium text-sm transition-colors"
               >
                  <span>Salesforce Documentation</span>
                  <ExternalLink size={14} />
               </a>
            )}
         </div>
      </div>

      <div className="prose prose-slate max-w-none">
        {lesson.content.map((section, idx) => renderContent(section, idx))}
      </div>

      <div className="mt-16 pt-8 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
        <button
          onClick={onComplete}
          className={`
            flex items-center gap-2 px-6 py-3 rounded-full font-medium transition-all w-full sm:w-auto justify-center
            ${isCompleted 
                ? 'bg-green-100 text-green-700 hover:bg-green-200' 
                : 'bg-white border-2 border-slate-200 text-slate-600 hover:border-brand-500 hover:text-brand-600'}
          `}
        >
          <CheckCircle size={20} className={isCompleted ? 'fill-current' : ''} />
          {isCompleted ? 'Completed' : 'Mark as Complete'}
        </button>

        {hasNext && (
            <button
                onClick={onNext}
                className="flex items-center gap-2 px-8 py-3 bg-brand-600 text-white rounded-full font-medium hover:bg-brand-700 shadow-lg shadow-brand-200 hover:shadow-xl transition-all w-full sm:w-auto justify-center"
            >
                Next Lesson
                <ArrowRight size={20} />
            </button>
        )}
      </div>
    </div>
  );
};

export default LessonView;
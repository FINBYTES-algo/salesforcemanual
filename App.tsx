import React, { useState, useEffect } from 'react';
import Sidebar from './components/Sidebar';
import LessonView from './components/LessonView';
import { COURSE_DATA } from './constants';
import { Menu, X } from 'lucide-react';

const App: React.FC = () => {
  const [activeLessonId, setActiveLessonId] = useState(COURSE_DATA[0].lessons[0].id);
  const [completedLessons, setCompletedLessons] = useState<Set<string>>(new Set());
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // Helper to find current lesson object
  const getCurrentLesson = () => {
    for (const module of COURSE_DATA) {
      const lesson = module.lessons.find(l => l.id === activeLessonId);
      if (lesson) return lesson;
    }
    return COURSE_DATA[0].lessons[0];
  };

  const handleComplete = () => {
    const newCompleted = new Set(completedLessons);
    if (newCompleted.has(activeLessonId)) {
        newCompleted.delete(activeLessonId);
    } else {
        newCompleted.add(activeLessonId);
    }
    setCompletedLessons(newCompleted);
  };

  const handleNext = () => {
    // Flatten lessons list
    const allLessons = COURSE_DATA.flatMap(m => m.lessons);
    const currentIndex = allLessons.findIndex(l => l.id === activeLessonId);
    if (currentIndex < allLessons.length - 1) {
        setActiveLessonId(allLessons[currentIndex + 1].id);
        // Scroll to top
        window.scrollTo(0, 0);
    }
  };

  const hasNext = () => {
    const allLessons = COURSE_DATA.flatMap(m => m.lessons);
    const currentIndex = allLessons.findIndex(l => l.id === activeLessonId);
    return currentIndex < allLessons.length - 1;
  };

  const currentLesson = getCurrentLesson();

  return (
    <div className="flex min-h-screen bg-white">
      {/* Mobile Header */}
      <div className="lg:hidden fixed top-0 left-0 right-0 h-16 bg-brand-700 z-50 flex items-center px-4 justify-between text-white shadow-md">
        <span className="font-bold text-lg">AwesomeBank</span>
        <button onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
            {isSidebarOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Overlay for mobile sidebar */}
      {isSidebarOpen && (
        <div 
            className="fixed inset-0 bg-black/50 z-30 lg:hidden"
            onClick={() => setIsSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <div className="pt-16 lg:pt-0">
        <Sidebar 
            modules={COURSE_DATA} 
            activeLessonId={activeLessonId}
            completedLessons={completedLessons}
            onSelectLesson={setActiveLessonId}
            isOpen={isSidebarOpen}
            onCloseMobile={() => setIsSidebarOpen(false)}
        />
      </div>

      {/* Main Content */}
      <main className="flex-1 w-full lg:w-auto pt-16 lg:pt-0 lg:ml-0 transition-all">
        <LessonView 
            lesson={currentLesson}
            onComplete={handleComplete}
            isCompleted={completedLessons.has(activeLessonId)}
            onNext={handleNext}
            hasNext={hasNext()}
        />
      </main>
    </div>
  );
};

export default App;
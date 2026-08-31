import React, { useState, useMemo } from 'react';
import { ArrowLeft, Search, GraduationCap, Calendar, MapPin, FileText, ChevronRight, Filter } from 'lucide-react';
import { useCms } from '../../context/CmsContext';
import type { Course } from '../../types/lab';

export const AllCoursesPage: React.FC = () => {
  const { courses, setCurrentView } = useCms();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedLevel, setSelectedLevel] = useState<string>('all');
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);

  const levels = ['all', 'Undergraduate', 'Graduate', 'Field School'];

  const filteredCourses = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();
    return (courses || []).filter((course) => {
      const matchesSearch =
        !q ||
        course.code.toLowerCase().includes(q) ||
        course.title.toLowerCase().includes(q) ||
        course.description.toLowerCase().includes(q) ||
        course.location.toLowerCase().includes(q);

      const matchesLevel =
        selectedLevel === 'all' || course.level === selectedLevel;

      return matchesSearch && matchesLevel;
    });
  }, [courses, searchQuery, selectedLevel]);

  return (
    <div className="min-h-screen bg-[#FAF8F5] text-[#00232e] py-12 select-none animate-in fade-in duration-300">
      <div className="max-w-[1360px] w-[94%] mx-auto space-y-10">
        
        {/* Navigation Breadcrumb */}
        <div className="flex items-center justify-between border-b border-slate-200 pb-6">
          <button
            onClick={() => {
              if (selectedCourse) {
                setSelectedCourse(null);
              } else {
                setCurrentView('home');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }
            }}
            className="inline-flex items-center gap-2 text-sm font-bold text-[#007681] hover:text-[#005a63] transition-colors cursor-pointer group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            <span>{selectedCourse ? 'Back to All Courses' : 'Back to Overview'}</span>
          </button>

          <div className="text-xs font-mono text-slate-500 font-medium">
            {selectedCourse ? selectedCourse.code : `Showing ${filteredCourses.length} of ${(courses || []).length} Courses`}
          </div>
        </div>

        {/* Selected Course Full Syllabus Drill-Down View */}
        {selectedCourse ? (
          <div className="space-y-8 animate-fadeIn">
            <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-10 shadow-sm space-y-6">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <span className="bg-[#007681] text-white text-xs sm:text-sm font-mono font-bold px-3.5 py-1.5 rounded-md">
                  {selectedCourse.code} • {selectedCourse.credits}
                </span>
                <span className="text-xs font-mono font-bold text-[#00232e] bg-slate-100 border border-slate-200 px-3.5 py-1.5 rounded-md">
                  {selectedCourse.level}
                </span>
              </div>

              <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#00232e] leading-tight">
                {selectedCourse.title}
              </h1>

              <p className="text-slate-700 text-base sm:text-lg leading-relaxed max-w-4xl">
                {selectedCourse.description}
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-6 border-t border-slate-100 text-xs sm:text-sm font-mono text-slate-600">
                <div className="space-y-2">
                  <span className="font-bold text-slate-900 block uppercase tracking-wider text-xs">TERM &amp; LOCATION</span>
                  <div className="flex items-center gap-2"><Calendar className="w-4 h-4 text-[#007681]" /> {selectedCourse.term}</div>
                  <div className="flex items-center gap-2"><MapPin className="w-4 h-4 text-[#007681]" /> {selectedCourse.location}</div>
                </div>
                <div className="space-y-2">
                  <span className="font-bold text-slate-900 block uppercase tracking-wider text-xs">PREREQUISITES &amp; EVALUATION</span>
                  <div className="leading-snug text-slate-700">{selectedCourse.prerequisites}</div>
                  <div className="text-slate-500 text-xs mt-1">{selectedCourse.grading}</div>
                </div>
              </div>
            </div>

            {/* 15-Week Module Outline */}
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#007681]/10 flex items-center justify-center text-[#007681]">
                  <FileText className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-mono font-bold text-[#007681] uppercase tracking-wider">
                    COURSE SYLLABUS
                  </div>
                  <h2 className="font-heading text-2xl font-extrabold text-[#00232e]">
                    15-Week Module &amp; Laboratory Breakdown
                  </h2>
                </div>
              </div>

              <div className="space-y-4">
                {selectedCourse.modules.map((mod, idx) => (
                  <div key={idx} className="bg-white border border-slate-200 rounded-2xl p-6 hover:border-[#007681] transition-all space-y-3 shadow-sm">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-mono font-bold text-[#007681] bg-[#007681]/10 px-3 py-1 rounded">
                        {mod.week}
                      </span>
                    </div>
                    <h3 className="font-heading font-extrabold text-lg text-[#00232e]">
                      {mod.topic}
                    </h3>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 pt-3 border-t border-slate-100 text-xs sm:text-sm text-slate-700">
                      <div>
                        <span className="font-bold text-slate-900 block mb-1">Required Scientific Readings:</span>
                        <p className="text-slate-600 italic">{mod.readings}</p>
                      </div>
                      <div>
                        <span className="font-bold text-slate-900 block mb-1">Laboratory / Field Practicum:</span>
                        <p className="text-slate-600">{mod.practicum}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ) : (
          /* Course Catalog Listing */
          <>
            {/* Page Header */}
            <div className="space-y-4 max-w-3xl">
              <div className="text-xs font-mono font-bold uppercase tracking-widest text-[#007681] flex items-center gap-2">
                <GraduationCap className="w-4 h-4" />
                <span>ACADEMIC CURRICULUM &amp; FIELD TRAINING</span>
              </div>
              <h1 className="font-heading text-4xl sm:text-5xl font-extrabold text-[#00232e] leading-tight">
                Courses &amp; Field Schools
              </h1>
              <p className="text-slate-600 text-base sm:text-lg leading-relaxed font-light">
                Dr. Sewasew Haileselassie directs undergraduate, graduate, and field curriculum covering African human origins, high-resolution geochronology, 3D digital fossil analysis, and lithic traceology at UC Berkeley and the Afar Rift.
              </p>
            </div>

            {/* Search & Filter Bar */}
            <div className="flex flex-col md:flex-row gap-4 items-stretch md:items-center justify-between bg-white p-4 rounded-xl border border-slate-200 shadow-sm">
              {/* Search */}
              <div className="relative flex-1">
                <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  placeholder="Search courses by code, title, topic, or location..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-lg text-sm focus:outline-none focus:border-[#007681] transition-colors"
                />
              </div>

              {/* Level Chips */}
              <div className="flex items-center gap-2 overflow-x-auto pb-1 md:pb-0 scrollbar-none">
                <Filter className="w-4 h-4 text-slate-400 shrink-0 ml-1 hidden sm:block" />
                {levels.map((lvl) => (
                  <button
                    key={lvl}
                    onClick={() => setSelectedLevel(lvl)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-mono font-bold whitespace-nowrap transition-all cursor-pointer ${
                      selectedLevel === lvl
                        ? 'bg-[#007681] text-white shadow-sm'
                        : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
                    }`}
                  >
                    {lvl === 'all' ? 'All Levels' : lvl}
                  </button>
                ))}
              </div>
            </div>

            {/* Courses Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {filteredCourses.map((course) => (
                <div
                  key={course.id}
                  onClick={() => setSelectedCourse(course)}
                  className="bg-white rounded-2xl border border-slate-200 hover:border-[#007681] p-6 hover:shadow-lg transition-all duration-300 flex flex-col justify-between cursor-pointer group"
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="bg-[#007681] text-white text-xs font-mono font-bold px-3 py-1 rounded">
                        {course.code}
                      </span>
                      <span className="text-xs font-mono font-bold text-slate-500 bg-slate-100 px-2.5 py-0.5 rounded">
                        {course.credits.toUpperCase()}
                      </span>
                    </div>

                    <h3 className="font-heading font-extrabold text-xl text-[#00232e] group-hover:text-[#007681] transition-colors leading-snug">
                      {course.title}
                    </h3>

                    <p className="text-slate-600 text-sm leading-relaxed line-clamp-3">
                      {course.description}
                    </p>
                  </div>

                  <div className="pt-5 mt-4 border-t border-slate-100 flex items-center justify-between text-xs">
                    <div className="flex items-center gap-1.5 font-mono text-slate-500">
                      <Calendar className="w-4 h-4 text-[#007681]" />
                      <span>{course.term}</span>
                    </div>
                    <span className="text-[#007681] font-bold inline-flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                      View Course Outline <ChevronRight className="w-4 h-4" />
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}

      </div>
    </div>
  );
};

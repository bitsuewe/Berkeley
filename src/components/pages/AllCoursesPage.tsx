import React, { useState, useMemo } from 'react';
import { ArrowLeft, Search, GraduationCap, Calendar, MapPin, FileText, ChevronRight, CheckCircle, BookOpen, Clock, Award, Filter } from 'lucide-react';
import { useCms } from '../../context/CmsContext';

interface CourseModule {
  week: string;
  topic: string;
  readings: string;
  practicum: string;
}

interface Course {
  id: string;
  code: string;
  title: string;
  credits: string;
  level: string;
  term: string;
  location: string;
  description: string;
  prerequisites: string;
  grading: string;
  modules: CourseModule[];
}

const COURSES_DATA: Course[] = [
  {
    id: 'anthro-120a',
    code: 'ANTHRO 120A',
    title: 'African Prehistory & Human Origins',
    credits: '4 Credits',
    level: 'Undergraduate',
    term: 'Fall Semesters',
    location: 'Hearst Anthropology Building',
    description: 'A comprehensive survey of hominin biological and cultural evolution across Africa from the late Miocene to the emergence of modern humans, integrating fossil anatomy, behavioral ecology, and paleoclimate.',
    prerequisites: 'Introduction to Archaeology or Biological Anthropology (or instructor approval)',
    grading: 'Midterm Exam (25%), Term Research Paper (30%), Fossil Lab Practicums (25%), Final Exam (20%)',
    modules: [
      { week: 'Week 1-2', topic: 'Geological Framework & Late Miocene Ape Radiations', readings: 'White et al. (2009) Ardipithecus; WoldeGabriel et al. (2001)', practicum: '3D virtual examination of Miocene hominoid dentition' },
      { week: 'Week 3-4', topic: 'Australopithecus anamensis & afarensis in East Africa', readings: 'Haile-Selassie et al. (2019) Anamensis cranium; Johanson & White (1979)', practicum: 'Postcranial metrics and bipedal biomechanics lab' },
      { week: 'Week 5-6', topic: 'The Earliest Toolmakers: Dikika, Lomekwi & Oldowan', readings: 'Semaw et al. (2003) Gona stone tools; Harmand et al. (2015)', practicum: 'Flake morphology and core reduction experimental analysis' },
      { week: 'Week 7-8', topic: 'Emergence of Homo & Acheulean Technology', readings: 'Antón et al. (2014) Evolution of early Homo; Lepre et al. (2011)', practicum: 'Handaxe symmetry 3D geometric morphometrics' },
      { week: 'Week 9-10', topic: 'Mid-Pleistocene Transitions & Archaic Homo sapiens', readings: 'Stringer (2016); Hublin et al. (2017) Jebel Irhoud origins', practicum: 'Cranial endocast reconstruction and brain size scaling' },
      { week: 'Week 11-12', topic: 'Middle Stone Age (MSA) Innovation & Modern Behavior', readings: 'McBrearty & Brooks (2000) Revolution that wasn\'t; Henshilwood (2002)', practicum: 'Pigment analysis and symbolic bead microwear traceology' },
      { week: 'Week 13-15', topic: 'African Diaspora, Late Pleistocene Foragers & Field Synthesis', readings: 'Scerri et al. (2018) Pan-African evolution; Dr. Sewasew publications', practicum: 'Final fossil identification & stratigraphic correlation' }
    ]
  },
  {
    id: 'arch-215',
    code: 'ARCH 215',
    title: 'Advanced Lithic Analysis & Traceology',
    credits: 'Graduate Seminar',
    level: 'Graduate',
    term: 'Spring Semesters',
    location: 'Lithic Technology & Micro-CT Lab',
    description: 'Hands-on laboratory seminar covering 3D scanning, confocal microscopy use-wear analysis, experimental flintknapping, and organic residue characterization on ancient stone tools.',
    prerequisites: 'Graduate standing in Anthropology, Archaeology, or Earth Science',
    grading: 'Laboratory Research Project (40%), Experimental Knapping Log (30%), Seminar Discussion & Reviews (30%)',
    modules: [
      { week: 'Week 1-3', topic: 'Raw Material Petrology & Fracture Mechanics', readings: 'Inizan et al. (1999); Cotterell & Kamminga (1987)', practicum: 'Petrographic thin-section analysis of basalt, chert, and obsidian' },
      { week: 'Week 4-6', topic: 'Experimental Flintknapping & Chaîne Opératoire', readings: 'Pelegrin (2005); Toth (1985) Oldowan stone technologies', practicum: 'Controlled bifacial knapping with soft and hard hammer percussors' },
      { week: 'Week 7-9', topic: 'High-Power Optical & Confocal Micro-Wear Traceology', readings: 'Keeley (1980); Rots et al. (2016) Residue contamination protocols', practicum: 'Microscopic imaging of bone, hide, wood, and tuber polish' },
      { week: 'Week 10-12', topic: '3D Surface Metrology & Micro-CT Volumetrics', readings: 'Lin et al. (2018); Grosman et al. (2014) Computerized artifact analysis', practicum: '3D structured-light surface scanning and edge sharpness quantification' },
      { week: 'Week 13-15', topic: 'Independent Lab Projects & Publication Preparation', readings: 'Peer-reviewed methodologies from recent Nature & JHE papers', practicum: 'Presentation of laboratory micro-wear research findings' }
    ]
  },
  {
    id: 'geo-185',
    code: 'GEO/ANTH 185',
    title: 'Quaternary Geochronology & Biogeochemistry',
    credits: '3 Credits',
    level: 'Undergraduate',
    term: 'Spring Semesters',
    location: 'Berkeley Lab / McCone Hall',
    description: 'Radiometric dating methodologies (40Ar/39Ar laser fusion, luminescence) and stable isotope paleoenvironmental reconstruction (δ13C, δ18O) in the East African Rift.',
    prerequisites: 'Chemistry 1A and Earth Science 101 or equivalent',
    grading: 'Lab Practicum Reports (35%), Midterm (25%), Research Proposal (25%), Final Presentation (15%)',
    modules: [
      { week: 'Week 1-3', topic: 'Geochronology Principles & 40Ar/39Ar Mass Spectrometry', readings: 'McDougall & Harrison (1999); Renne et al. (2010)', practicum: 'Mass spectrometry calibration and laser step-heating data reduction' },
      { week: 'Week 4-6', topic: 'Tephrostratigraphy & Volcanic Glass Fingerprinting', readings: 'Sarna-Wojcicki et al. (2000); Brown et al. (2006)', practicum: 'Electron microprobe analysis of volcanic glass shards' },
      { week: 'Week 7-9', topic: 'Stable Carbon & Oxygen Isotopes in Pedogenic Carbonates', readings: 'Cerling et al. (2011) Woody cover in East Africa; Levin (2015)', practicum: 'Isotope ratio mass spectrometer (IRMS) carbonate preparation' },
      { week: 'Week 10-12', topic: 'Paleoecology, Fossil Enamel & Biomarker Lipids', readings: 'Sponheimer et al. (2013); Uno et al. (2016)', practicum: 'Leaf wax n-alkane chromatography interpretation' },
      { week: 'Week 13-15', topic: 'Integrated Chronostratigraphic Modeling of the Rift', readings: 'Selected Afar stratigraphic papers', practicum: 'Bayesian age-depth modeling with Bacon and OxCal' }
    ]
  },
  {
    id: 'field-199',
    code: 'FIELD 199',
    title: 'East African Rift Field Excavation School',
    credits: 'Summer Field School',
    level: 'Field School',
    term: 'Summer Terms (6 Weeks)',
    location: 'Afar Depression, Ethiopia',
    description: '6-week intensive field archaeological training in the Afar Depression, Ethiopia. Stratigraphic recording, fossil collection, total station mapping, and community heritage collaboration.',
    prerequisites: 'Application and interview; field physical clearance',
    grading: 'Field Notebook & Stratigraphic Column (35%), Excavation Technique (35%), Field Final Exam (30%)',
    modules: [
      { week: 'Week 1', topic: 'Camp Orientation, Paleotopography & GPS Survey', readings: 'Afar Regional Geology Field Manual', practicum: 'Establishment of base datum and pedestrian survey grid transects' },
      { week: 'Week 2-3', topic: 'Controlled Micro-Stratigraphic Excavation & Taphonomy', readings: 'Behrensmeyer (1978) Taphonomic and ecologic information', practicum: '1m x 1m trench excavation with 3D coordinate point plotting' },
      { week: 'Week 4', topic: 'Fossil Conservation, Consolidation & Jacketing', readings: 'Rixon (1976) Fossil undertaking in the field', practicum: 'Plaster jacket construction on fragile hominin & mammalian fossils' },
      { week: 'Week 5', topic: 'Volcanic Ash Bed Sampling & Paleosol Profiling', readings: 'Stratigraphic Field Standards', practicum: 'Sampling unweathered tephra for Berkeley Lab argon dating' },
      { week: 'Week 6', topic: 'Field Cataloging, ARCCH Curation & Community Symposium', readings: 'Heritage Stewardship Guidelines', practicum: 'Final site preservation and presentation to local stakeholders' }
    ]
  }
];

export const AllCoursesPage: React.FC = () => {
  const { setCurrentView } = useCms();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedLevel, setSelectedLevel] = useState<string>('all');
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);

  const levels = ['all', 'Undergraduate', 'Graduate', 'Field School'];

  const filteredCourses = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();
    return COURSES_DATA.filter((course) => {
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
  }, [searchQuery, selectedLevel]);

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
            {selectedCourse ? selectedCourse.code : `Showing ${filteredCourses.length} of ${COURSES_DATA.length} Courses`}
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

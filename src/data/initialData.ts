import type { ResearchArea, Publication, Article, Person, LabImage, OpenPosition } from '../types/lab';

export const INITIAL_RESEARCH_AREAS: ResearchArea[] = [
  {
    id: 'res-quantum',
    code: '01',
    title: 'QUANTUM LATTICE DYNAMICS',
    subtitle: 'Correlated Electron States & Topological Transitions in Microstructures',
    category: 'Condensed Matter Physics',
    shortDescription: 'Investigating real-time quantum phase transitions and electronic transport in strained 2D van der Waals heterostructures.',
    longDescription: 'Our team explores non-equilibrium quantum states triggered by ultrafast optical excitation in twisted bilayer systems. By applying localized mechanical tension at sub-nanometer scales, we engineer artificial crystal potentials that host flat bands and correlated electronic phases at room temperature.',
    modelType: 'quantum',
    keyQuestions: [
      'How does local strain gradient modulate valleytronics in MoS2/WSe2 heterostructures?',
      'Can non-equilibrium optical pulses induce room-temperature topological superconductivity?',
      'What are the decoherence dynamics of trapped excitons in moiré superlattices?'
    ],
    methodology: 'Combining cryogenic ultra-high vacuum scanning tunneling microscopy (STM) with femtosecond pump-probe optical spectroscopy.',
    stats: [
      { label: 'Lattice Resolution', value: '0.08 Å' },
      { label: 'Coherence Time', value: '4.2 μs' },
      { label: 'Operating Temp', value: '15 mK - 300 K' },
      { label: 'Laser Pulse Width', value: '12 fs' }
    ],
    leadResearcherId: 'person-elena',
    relatedPublicationIds: ['pub-01', 'pub-04'],
    heroImage: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: 'res-microfluidic',
    code: '02',
    title: 'MICROFLUIDIC MORPHOGENESIS',
    subtitle: 'Self-Organizing Soft Matter & Bio-Inspired Cellular Channels',
    category: 'Biophysical Engineering',
    shortDescription: 'Developing synthetic cell-mimetic lipid membranes capable of autonomous spatial patterning and fluidic propulsion.',
    longDescription: 'We synthesize dynamic hydrogel micro-channels that emulate endothelial vessel self-healing. By introducing active colloid motors within viscoelastic fluids, we investigate how mechanical feedback between cell boundaries drives organoid symmetry breaking during early embryo development.',
    modelType: 'microfluidic',
    keyQuestions: [
      'What hydrodynamic laws govern collective shear-stress sensing in synthetic capillaries?',
      'How can active matter gradients program macroscopic tissue morphogenesis?',
      'Can bio-mimetic lipid vesicles sustain perpetual non-linear oscillatory transport?'
    ],
    methodology: 'High-speed confocal micro-PIV (Particle Image Velocimetry) and optogenetic spatial illumination.',
    stats: [
      { label: 'Channel Width', value: '1.5 μm' },
      { label: 'Flow Velocity', value: '250 μm/s' },
      { label: 'Viscosity Control', value: '±0.2 cP' },
      { label: 'Frame Rate', value: '10,000 FPS' }
    ],
    leadResearcherId: 'person-marcus',
    relatedPublicationIds: ['pub-02', 'pub-05'],
    heroImage: 'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: 'res-synaptic',
    code: '03',
    title: 'NEUROMORPHIC DYNAMICS',
    subtitle: 'Ionic Memristive Computing & Physical Reservoir Hardware',
    category: 'Computational Neuroscience',
    shortDescription: 'Constructing sub-nanosecond ionic synaptic devices using halide perovskites for bio-hybrid neural interfaces.',
    longDescription: 'Conventional von Neumann microprocessors suffer from energy bottlenecks. Our work establishes organic electrochemical transistors (OECTs) that process continuous spiking neural signals directly in biocompatible aqueous environments, enabling real-time neural decoding and ultra-low-power brain-machine interfaces.',
    modelType: 'synaptic',
    keyQuestions: [
      'How does short-term ionic facilitation mimic biological dendritic computation?',
      'What are the minimum energy limits for single-spike memristive switching?',
      'Can inorganic memristors achieve long-term potentiation stability exceeding 10^9 cycles?'
    ],
    methodology: 'In-situ operando X-ray absorption spectroscopy and multi-channel patch-clamp recording arrays.',
    stats: [
      { label: 'Energy per Spike', value: '0.45 fJ' },
      { label: 'Synaptic Density', value: '10^9 / cm²' },
      { label: 'Switching Speed', value: '850 ps' },
      { label: 'Retention Time', value: '> 10 Years' }
    ],
    leadResearcherId: 'person-chen',
    relatedPublicationIds: ['pub-03', 'pub-06'],
    heroImage: 'https://images.unsplash.com/photo-1507413245164-6160d8298b31?auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: 'res-metamaterial',
    code: '04',
    title: 'METAMATERIAL WAVEGUIDES',
    subtitle: 'Non-Reciprocal Photonic Structures & Sub-Wavelength Focusing',
    category: 'Applied Optics & Materials Science',
    shortDescription: 'Designing artificial electromagnetic arrays that bend phase fronts to achieve topological light confinement.',
    longDescription: 'By structuring dielectric ceramics at sub-micron scales, we create photonic metamaterials with near-zero refractive indices. These systems enable loss-free optical wave propagation around sharp structural bends, paving the way for integrated optical computing chips.',
    modelType: 'metamaterial',
    keyQuestions: [
      'Can non-linear photonic crystal cavities achieve single-photon optical switching?',
      'How do synthetic gauge fields generate non-reciprocal optical isolation?',
      'What metamaterial architectures minimize thermal radiation loss in thermophotovoltaics?'
    ],
    methodology: 'Finite-Difference Time-Domain (FDTD) electromagnetic simulation combined with electron-beam lithography.',
    stats: [
      { label: 'Refractive Index', value: 'n = 0.002' },
      { label: 'Waveguide Loss', value: '< 0.01 dB/cm' },
      { label: 'Bandwidth', value: '120 THz' },
      { label: 'Precision', value: '±2 nm' }
    ],
    leadResearcherId: 'person-sarah',
    relatedPublicationIds: ['pub-07'],
    heroImage: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80'
  }
];

export const INITIAL_PUBLICATIONS: Publication[] = [
  {
    id: 'pub-01',
    title: 'Topological Phase Transitions in Strained MoS2/WSe2 Moiré Heterostructures at Room Temperature',
    authors: ['Elena Rostova', 'Marcus Vance', 'Chen Wei', 'Sarah Lindqvist'],
    journal: 'Nature Physics',
    year: 2026,
    doi: '10.1038/s41567-026-04912-x',
    pdfUrl: '#',
    abstract: 'Moiré superlattices in transition metal dichalcogenides provide an adjustable platform for engineering correlated electronic states. Here, we demonstrate room-temperature topological phase switching by applying nanoscale mechanical strain gradients across a MoS2/WSe2 heterobilayer. STM measurements confirm the formation of localized flat bands with a Chern number C = 1, opening new avenues for non-cryogenic quantum devices.',
    researchAreaId: 'res-quantum',
    featured: true,
    citationsCount: 42,
    tags: ['Quantum Materials', '2D Heterostructures', 'Topological Physics', 'Moiré'],
    bibtex: `@article{Rostova2026Topological,
  author = {Rostova, Elena and Vance, Marcus and Wei, Chen and Lindqvist, Sarah},
  title = {Topological Phase Transitions in Strained MoS2/WSe2 Moiré Heterostructures at Room Temperature},
  journal = {Nature Physics},
  volume = {22},
  pages = {145--154},
  year = {2026},
  doi = {10.1038/s41567-026-04912-x}
}`
  },
  {
    id: 'pub-02',
    title: 'Autonomous Self-Healing in Active Viscoelastic Microchannel Networks',
    authors: ['Marcus Vance', 'Elena Rostova', 'Aria Tanaka'],
    journal: 'Science Advances',
    year: 2026,
    doi: '10.1126/sciadv.adf8901',
    pdfUrl: '#',
    abstract: 'Biological vascular networks rapidly repair structural defects under hydrodynamic stress. We present an active microfluidic hydrogel embedded with catalytic colloidal pumps that sense local pressure drops and deploy self-assembling polymer fibers. Under flow conditions exceeding 300 μm/s, damaged channels fully restore hydraulic conductance within 12 seconds.',
    researchAreaId: 'res-microfluidic',
    featured: true,
    citationsCount: 19,
    tags: ['Microfluidics', 'Active Matter', 'Soft Robotics', 'Self-Healing'],
    bibtex: `@article{Vance2026Autonomous,
  author = {Vance, Marcus and Rostova, Elena and Tanaka, Aria},
  title = {Autonomous Self-Healing in Active Viscoelastic Microchannel Networks},
  journal = {Science Advances},
  volume = {12},
  pages = {eadf8901},
  year = {2026},
  doi = {10.1126/sciadv.adf8901}
}`
  },
  {
    id: 'pub-03',
    title: 'Sub-Femtojoule Synaptic Switching in Halide Perovskite Electrochemical Transistors',
    authors: ['Chen Wei', 'Klaus Hoffmann', 'Sarah Lindqvist'],
    journal: 'Nature Electronics',
    year: 2025,
    doi: '10.1038/s41928-025-01104-3',
    pdfUrl: '#',
    abstract: 'Neuromorphic hardware requires physical synapses that match the energy efficiency of mammalian brains (~10 fJ per spike). We report organic-inorganic halide perovskite OECT devices demonstrating non-volatile synaptic potentiation with an energy consumption of 0.45 fJ per pulse at 850 ps switching speeds.',
    researchAreaId: 'res-synaptic',
    featured: false,
    citationsCount: 88,
    tags: ['Neuromorphic', 'Halide Perovskites', 'Memristors', 'Low-Power AI'],
    bibtex: `@article{Wei2025SubFemtojoule,
  author = {Wei, Chen and Hoffmann, Klaus and Lindqvist, Sarah},
  title = {Sub-Femtojoule Synaptic Switching in Halide Perovskite Electrochemical Transistors},
  journal = {Nature Electronics},
  volume = {8},
  pages = {312--321},
  year = {2025},
  doi = {10.1038/s41928-025-01104-3}
}`
  },
  {
    id: 'pub-04',
    title: 'Ultrafast Excitonic Decoherence Dynamics in Moiré Quantum Wells',
    authors: ['Elena Rostova', 'Chen Wei'],
    journal: 'Physical Review Letters',
    year: 2025,
    doi: '10.1103/PhysRevLett.134.186401',
    pdfUrl: '#',
    abstract: 'We map the temporal evolution of valley-polarized excitons trapped in moiré potentials using four-wave mixing spectroscopy at 15 mK. Dephasing rates scale non-linearly with excitation density due to acoustic phonon scattering.',
    researchAreaId: 'res-quantum',
    featured: false,
    citationsCount: 34,
    tags: ['Excitons', 'Spectroscopy', 'Quantum Coherence'],
    bibtex: `@article{Rostova2025Ultrafast,
  author = {Rostova, Elena and Wei, Chen},
  title = {Ultrafast Excitonic Decoherence Dynamics in Moiré Quantum Wells},
  journal = {Physical Review Letters},
  volume = {134},
  pages = {186401},
  year = {2025},
  doi = {10.1103/PhysRevLett.134.186401}
}`
  },
  {
    id: 'pub-05',
    title: 'Symmetry Breaking in Synthetic Lipid Membranes via Active Hydrodynamic Shear',
    authors: ['Marcus Vance', 'Aria Tanaka'],
    journal: 'Biophysical Journal',
    year: 2025,
    doi: '10.1016/j.bpj.2025.04.012',
    pdfUrl: '#',
    abstract: 'Spatial patterning during early morphogenesis relies on mechanical feedback between fluid forces and membrane bending. We measure lipid phase separation under controlled microchannel shear stress.',
    researchAreaId: 'res-microfluidic',
    featured: false,
    citationsCount: 27,
    tags: ['Biophysics', 'Lipid Bilayers', 'Morphogenesis'],
    bibtex: `@article{Vance2025Symmetry,
  author = {Vance, Marcus and Tanaka, Aria},
  title = {Symmetry Breaking in Synthetic Lipid Membranes via Active Hydrodynamic Shear},
  journal = {Biophysical Journal},
  volume = {128},
  pages = {890--902},
  year = {2025},
  doi = {10.1016/j.bpj.2025.04.012}
}`
  },
  {
    id: 'pub-06',
    title: 'Bio-Hybrid Neural Interfaces for In-Vivo Synaptic Spike Decoding',
    authors: ['Chen Wei', 'Marcus Vance', 'Elena Rostova'],
    journal: 'IEEE Transactions on Biomedical Engineering',
    year: 2024,
    doi: '10.1109/TBME.2024.3389012',
    pdfUrl: '#',
    abstract: 'Direct integration of organic ionic OECT arrays with neural tissue achieves continuous spike discrimination with >99.4% accuracy at sub-milliwatt power draw.',
    researchAreaId: 'res-synaptic',
    featured: false,
    citationsCount: 112,
    tags: ['Neural Interfaces', 'Bioelectronics', 'Brain Machine Interface'],
    bibtex: `@article{Wei2024BioHybrid,
  author = {Wei, Chen and Vance, Marcus and Rostova, Elena},
  title = {Bio-Hybrid Neural Interfaces for In-Vivo Synaptic Spike Decoding},
  journal = {IEEE Transactions on Biomedical Engineering},
  volume = {71},
  pages = {1450--1461},
  year = {2024},
  doi = {10.1109/TBME.2024.3389012}
}`
  },
  {
    id: 'pub-07',
    title: 'Zero-Index Photonic Metamaterials for Low-Loss Integrated Light Routing',
    authors: ['Sarah Lindqvist', 'Klaus Hoffmann'],
    journal: 'Optica',
    year: 2024,
    doi: '10.1364/OPTICA.11.000412',
    pdfUrl: '#',
    abstract: 'Dielectric arrays engineered for zero refractive index allow optical waves to traverse complex waveguide bends without phase variation or backscattering loss.',
    researchAreaId: 'res-metamaterial',
    featured: false,
    citationsCount: 65,
    tags: ['Metamaterials', 'Photonics', 'Optics'],
    bibtex: `@article{Lindqvist2024ZeroIndex,
  author = {Lindqvist, Sarah and Hoffmann, Klaus},
  title = {Zero-Index Photonic Metamaterials for Low-Loss Integrated Light Routing},
  journal = {Optica},
  volume = {11},
  pages = {412--420},
  year = {2024},
  doi = {10.1364/OPTICA.11.000412}
}`
  }
];

export const INITIAL_PEOPLE: Person[] = [
  {
    id: 'person-sewasew',
    name: 'Dr. Sewasew',
    role: 'PI',
    positionTitle: 'Principal Investigator & Director of UC Berkeley Lab',
    bio: 'Dr. Sewasew leads the Living Research Laboratory with a focus on non-equilibrium quantum dynamics, moiré heterostructures, bio-fluidics, and neuromorphic synaptic hardware.',
    avatar: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=900&q=85',
    email: 'sewasew@lbl.gov',
    office: 'UC Berkeley Lab, 1 Cyclotron Rd, Room 412',
    scholarUrl: 'https://scholar.google.com',
    orcidUrl: 'https://orcid.org/0000-0002-1825-0097',
    researchAreaIds: ['res-quantum', 'res-synaptic', 'res-microfluidic']
  },
  {
    id: 'person-marcus',
    name: 'Dr. Marcus Vance',
    role: 'Postdoc',
    positionTitle: 'Senior Postdoctoral Fellow in Bio-Fluidics',
    bio: 'Marcus specializes in self-assembling active hydrogels and microfluidic PIV tracking. He completed his Ph.D. at ETH Zürich.',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80',
    email: 'm.vance@nexus-lab.org',
    office: 'Bio-Engineering Annex, Room 204',
    scholarUrl: 'https://scholar.google.com',
    orcidUrl: 'https://orcid.org/0000-0001-9234-5678',
    researchAreaIds: ['res-microfluidic']
  },
  {
    id: 'person-chen',
    name: 'Dr. Chen Wei',
    role: 'Postdoc',
    positionTitle: 'Research Fellow in Neuromorphic Devices',
    bio: 'Chen designs ultra-fast ionic OECT devices and organic halide perovskite synapses. Formerly at Cambridge Cavendish Laboratory.',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80',
    email: 'c.wei@nexus-lab.org',
    office: 'Nano-Fabrication Center, Lab B',
    scholarUrl: 'https://scholar.google.com',
    orcidUrl: 'https://orcid.org/0000-0003-4567-8901',
    researchAreaIds: ['res-synaptic', 'res-quantum']
  },
  {
    id: 'person-sarah',
    name: 'Sarah Lindqvist',
    role: 'PhD',
    positionTitle: 'Ph.D. Candidate in Metamaterial Optics',
    bio: 'Sarah focuses on sub-wavelength photonic metamaterials and zero-index waveguides for optical computing.',
    avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=600&q=80',
    email: 's.lindqvist@nexus-lab.org',
    office: 'Optics Research Wing, Desk 12',
    scholarUrl: 'https://scholar.google.com',
    researchAreaIds: ['res-metamaterial']
  },
  {
    id: 'person-aria',
    name: 'Aria Tanaka',
    role: 'PhD',
    positionTitle: 'Ph.D. Candidate in Biophysical Modeling',
    bio: 'Aria develops mathematical continuum mechanics models for active cellular membranes and synthetic morphogen gradients.',
    avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=600&q=80',
    email: 'a.tanaka@nexus-lab.org',
    office: 'Theory & Computation Suite, Room 301',
    researchAreaIds: ['res-microfluidic']
  },
  {
    id: 'person-klaus',
    name: 'Dr. Klaus Hoffmann',
    role: 'Alumni',
    positionTitle: 'Now Assistant Professor at MIT',
    bio: 'Klaus was a postdoctoral associate in NEXUS Lab from 2022-2025, pioneering zero-index dielectric photonics.',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=600&q=80',
    email: 'k.hoffmann@mit.edu',
    office: 'Cambridge, MA',
    scholarUrl: 'https://scholar.google.com',
    researchAreaIds: ['res-metamaterial', 'res-synaptic']
  }
];

export const INITIAL_ARTICLES: Article[] = [
  {
    id: 'art-01',
    title: 'Room-Temperature Moiré Superlattices: From Theory to Cleanroom Realization',
    summary: 'How localized mechanical strain gradients allowed our team to bypass cryogenic helium cooling and achieve correlated electronic states at 295 Kelvin.',
    category: 'Lab Discovery',
    author: 'Prof. Elena Rostova',
    date: 'August 14, 2026',
    readTime: '6 min read',
    featured: true,
    heroImage: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=80',
    figureCaption: 'FIG 03 — Atomic force microscopy topographical sweep of the strained MoS2 heterojunction.',
    content: [
      'For decades, condensed matter physics faced a stubborn obstacle: quantum phase transitions in twisted bilayer materials required ultra-low temperatures, often within fractions of a kelvin from absolute zero. This reliance on bulky liquid helium cryostats confined quantum electronic devices to laboratory basements.',
      'Our team at NEXUS Lab took a fundamentally different approach. Instead of relying solely on twist angle manipulation, we introduced localized nano-indenter strain arrays directly into the supporting sapphire substrate. By creating controlled 0.3% lattice stretch gradients across 20-nanometer domains, the effective electronic bandwidth collapses into isolated flat bands even at room temperature.',
      'The implications for solid-state technology are profound. Quantum valleytronic switches that operate without refrigeration could reduce the energy footprint of future computing clusters by orders of magnitude.'
    ]
  },
  {
    id: 'art-02',
    title: 'Biocompatible Synaptic Memristors in Aqueous Neural Tissue Environments',
    summary: 'Exploring how organic electrochemical transistors process ionic nerve impulses directly inside physiological saline solutions.',
    category: 'Biophysics Insight',
    author: 'Dr. Chen Wei',
    date: 'July 28, 2026',
    readTime: '8 min read',
    featured: false,
    heroImage: 'https://images.unsplash.com/photo-1507413245164-6160d8298b31?auto=format&fit=crop&w=1200&q=80',
    figureCaption: 'FIG 01 — Cross-sectional schematic of the halide perovskite OECT channel.',
    content: [
      'Silicon microchips speak the language of electrons; human biological tissue speaks the language of ions (sodium, potassium, calcium). Transducing signal between these two domains traditionally requires power-hungry analog-to-digital converters.',
      'By synthesizing soft halide perovskite channels modulated by organic electrolytes, we engineered a device where ionic currents directly alter electrical conductance in a non-volatile manner. The resulting synaptic response mimics biological short-term facilitation with less than 0.5 femtojoules of energy per pulse.'
    ]
  },
  {
    id: 'art-03',
    title: 'Inside the Cryogenic Ultra-High Vacuum Scanning Tunneling Facility',
    summary: 'A photo-essay behind the scenes of our sub-angstrom microscopy suite operating at 15 millikelvin.',
    category: 'Behind the Science',
    author: 'Sarah Lindqvist',
    date: 'June 10, 2026',
    readTime: '4 min read',
    featured: false,
    heroImage: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1200&q=80',
    figureCaption: 'FIG 04 — The 4-ton vibration isolation pedestal suspended on active air springs.',
    content: [
      'Imaging individual electron wavefunctions requires absolute stillness. Even the sound of a voice or a passing truck two miles away can vibrate a microscopic probe tip enough to smear an atomic image.',
      'Our ultra-high vacuum chamber sits on a 400-millimeter-thick concrete slab physically decoupled from the rest of the building. Inside, liquid helium circulates in closed loops to chill samples to 15 mK while maintaining a pressure of 10^-11 mbar.'
    ]
  }
];

export const INITIAL_LAB_IMAGES: LabImage[] = [
  {
    id: 'img-stm-suite',
    title: '15 mK Dilution Refrigerator & STM Suite',
    category: 'Equipments',
    imageUrl: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1000&q=80',
    description: 'Ultra-low-temperature scanning tunneling microscope chamber suspended on active acoustic dampers.',
    exif: {
      camera: 'Leica SL2 Monochrom',
      wavelength: 'UHV 10^-11 mbar',
      date: '2026-05-12'
    }
  },
  {
    id: 'img-microchannel',
    title: 'Self-Organizing Hydrogel Microchannel Array',
    category: 'Microscopy',
    imageUrl: 'https://images.unsplash.com/photo-1576086213369-97a306d36557?auto=format&fit=crop&w=1000&q=80',
    description: 'Fluorescence confocal micro-graph of fluorescently tagged colloidal particles flowing through synthetic lipid channels.',
    exif: {
      camera: 'Nikon Ti2-E Confocal',
      magnification: '100x Oil Immersion',
      wavelength: '488 nm / 561 nm',
      date: '2026-06-04'
    }
  },
  {
    id: 'img-cleanroom',
    title: 'Nano-Fabrication Cleanroom Suite (ISO Class 5)',
    category: 'Experiments',
    imageUrl: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1000&q=80',
    description: 'Researcher preparing 2D heterostructure flake transfers under yellow monochromatic safelight.',
    exif: {
      camera: 'Hasselblad X2D 100C',
      date: '2026-04-19'
    }
  },
  {
    id: 'img-laser-bench',
    title: 'Femtosecond Pump-Probe Optical Spectroscopy Bench',
    category: 'Equipments',
    imageUrl: 'https://images.unsplash.com/photo-1507413245164-6160d8298b31?auto=format&fit=crop&w=1000&q=80',
    description: '12-femtosecond Ti:Sapphire mode-locked laser optics configured for transient absorption sweeps.',
    exif: {
      camera: 'Sony A7R V',
      wavelength: '800 nm Fundamental',
      date: '2026-07-02'
    }
  }
];

export const INITIAL_OPEN_POSITIONS: OpenPosition[] = [
  {
    id: 'pos-01',
    title: 'Postdoctoral Fellow in Moiré Quantum Materials',
    type: 'Postdoc',
    department: 'Department of Physics & Condensed Matter',
    deadline: 'October 31, 2026',
    description: 'Seeking an outstanding experimental physicist with experience in cryogenic STM, van der Waals flake stacking, or ultrafast optics to lead our room-temperature topological heterostructure program.',
    requirements: [
      'Ph.D. in Physics, Materials Science, or Nanotechnology',
      'Demonstrated expertise in cryogenic ultra-high vacuum systems',
      'Strong publication record in top-tier peer-reviewed journals',
      'Experience with Python/MATLAB scientific data modeling'
    ]
  },
  {
    id: 'pos-02',
    title: 'Ph.D. Candidate in Active Microfluidic Biophysics',
    type: 'PhD Candidate',
    department: 'School of Bio-Engineering & Complex Systems',
    deadline: 'December 15, 2026',
    description: 'Fully funded 4-year doctoral candidacy focusing on bio-mimetic lipid membranes and dynamic colloidal self-assembly.',
    requirements: [
      'B.S. or M.S. in Biophysics, Mechanical Engineering, or Chemistry',
      'Background in microfluidics, soft matter physics, or microscopy',
      'Passion for interdisciplinary biological physics research'
    ]
  }
];

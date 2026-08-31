import type { ResearchArea, Publication, Article, Person, LabImage, OpenPosition, Course, OutreachItem } from '../types/lab';

export const INITIAL_RESEARCH_AREAS: ResearchArea[] = [
  {
    id: 'res-paleoanthropology',
    code: '01',
    title: 'EARLY HOMININ PALEOBIOLOGY',
    subtitle: 'Morphological Evolution & Pliocene-Pleistocene Fossils in the Afar Rift',
    category: 'Paleoanthropology & Human Origins',
    shortDescription: 'Investigating skeletal adaptations, bipedalism biomechanics, and cranial morphology across early hominin fossil assemblages in East Africa.',
    longDescription: 'Our field research in the Middle Awash and Afar Depression recovers and analyzes fossil hominin remains spanning 6 million to 100,000 years ago. Utilizing high-resolution synchrotron micro-tomography and geometric morphometrics, we trace the evolutionary transitions from Ardipithecus and Australopithecus to early Homo.',
    modelType: 'quantum',
    keyQuestions: [
      'What biomechanical shifts characterize the emergence of committed terrestrial bipedalism?',
      'How did cranial capacity and encephalization scale with climatic variability in the early Pleistocene?',
      'What are the taxonomic affinities of recently excavated mid-Pliocene hominin dentitions?'
    ],
    methodology: 'High-resolution micro-CT 3D reconstruction, virtual endocast analysis, and comparative cladistics.',
    stats: [
      { label: 'Chronological Scope', value: '6.0 - 0.1 Ma' },
      { label: 'Micro-CT Resolution', value: '5.2 μm' },
      { label: 'Fossil Specimens', value: '450+' },
      { label: 'Field Sites', value: '18 Basins' }
    ],
    leadResearcherId: 'person-sewasew',
    relatedPublicationIds: ['pub-01', 'pub-04'],
    heroImage: '/images/research/fossil-skull.jpg',
    tags: ['Paleoanthropology', 'Hominin Fossils', 'Afar Rift', 'Bipedalism']
  },
  {
    id: 'res-lithic',
    code: '02',
    title: 'LITHIC TECHNOLOGY & COGNITION',
    subtitle: 'Oldowan to Acheulean Transitions & Early Toolmaking Behavioral Dynamics',
    category: 'Prehistoric African Archaeology',
    shortDescription: 'Reconstructing the knapping reduction sequences, raw material procurement, and cognitive milestones of the earliest stone toolmakers.',
    longDescription: 'Stone artifacts provide the most durable behavioral record of hominin cognitive evolution. We perform 3D edge-angle scanning, microwear traceology, and residue analysis on lithic assemblages from Gona, Melka Kunture, and Olduvai Gorge to understand when and how tool-mediated dietary butchery evolved.',
    modelType: 'microfluidic',
    keyQuestions: [
      'What mental templates guided the bifacial symmetry of early Acheulean handaxes?',
      'How did raw material selection (basalt, obsidian, chert) influence flake detachment mechanics?',
      'Can microscopic bone-surface cutmark patterns differentiate hominin butchery from carnivore gnawing?'
    ],
    methodology: 'Experimental flintknapping replication, 3D laser profilometry, and confocal microscopic use-wear analysis.',
    stats: [
      { label: 'Earliest Tools Dated', value: '2.6 Ma' },
      { label: 'Analyzed Flakes', value: '12,000+' },
      { label: 'Use-Wear Accuracy', value: '98.4%' },
      { label: 'Refitted Cores', value: '340 Cores' }
    ],
    leadResearcherId: 'person-marcus',
    relatedPublicationIds: ['pub-02', 'pub-05'],
    heroImage: '/images/research/stone-tools.jpg',
    tags: ['Lithic Analysis', 'Oldowan', 'Acheulean', 'Cognitive Evolution']
  },
  {
    id: 'res-paleoenvironment',
    code: '03',
    title: 'ISOTOPIC PALEOENVIRONMENTS',
    subtitle: 'Stable Isotopes, Quaternary Paleoclimate & African Savannah Ecosystems',
    category: 'Paleoclimatology & Biogeochemistry',
    shortDescription: 'Using carbon and oxygen stable isotopes from fossil tooth enamel and paleosols to map hominin paleoecology and habitat transitions.',
    longDescription: 'Climate dynamics shaped early human adaptations. By sampling δ13C and δ18O isotopes from mammalian herbivore dentition, pedogenic carbonates, and lacustrine sediment cores, we reconstruct the expansion of C4 grassland biomes and hydrological fluctuations across the East African Rift System.',
    modelType: 'synaptic',
    keyQuestions: [
      'How did intense Pleistocene hyper-aridity pulses trigger hominin dispersal and technological innovation?',
      'What fraction of early hominin diet comprised C4 grasses versus woodland C3 vegetation?',
      'How did rift basin lake-level fluctuations govern regional resource availability?'
    ],
    methodology: 'Isotope ratio mass spectrometry (IRMS), pedogenic carbonate sampling, and micro-drilled enamel transects.',
    stats: [
      { label: 'Isotopic Precision', value: '±0.05‰' },
      { label: 'Sampled Horizons', value: '95 Strata' },
      { label: 'Faunal Taxa Sampled', value: '42 Species' },
      { label: 'Temporal Range', value: '4.5 - 0.5 Ma' }
    ],
    leadResearcherId: 'person-chen',
    relatedPublicationIds: ['pub-03', 'pub-06'],
    heroImage: '/images/research/savannah-environment.jpg',
    tags: ['Paleoenvironment', 'Stable Isotopes', 'Quaternary Science', 'Savannah Biome']
  },
  {
    id: 'res-geochronology',
    code: '04',
    title: 'HIGH-PRECISION GEOCHRONOLOGY',
    subtitle: '40Ar/39Ar Single-Crystal Dating, Tephrochronology & Magnetostratigraphy',
    category: 'Geochronology & Volcanology',
    shortDescription: 'Establishing high-precision chronostratigraphic frameworks for hominin-bearing sedimentary sequences in the Main Ethiopian Rift.',
    longDescription: 'Accurate evolutionary timelines require exact numerical ages. Our lab correlates volcanic ash fallouts (tephras) across sedimentary basins using electron microprobe glass geochemistry and 40Ar/39Ar laser step-heating on single sanidine crystals, delivering millenial-scale resolution for key evolutionary transitions.',
    modelType: 'metamaterial',
    keyQuestions: [
      'Can cryptotephra finger-printing correlate distant fossiliferous basins across the East African Rift?',
      'What is the precise numerical boundary between the Middle and Late Pleistocene Acheulean horizons?',
      'How do paleomagnetic reversals anchor bio-chronological datum levels?'
    ],
    methodology: 'Single-crystal 40Ar/39Ar laser fusion mass spectrometry and electron probe microanalysis (EPMA).',
    stats: [
      { label: 'Analytical Precision', value: '±0.15%' },
      { label: 'Dated Ash Layers', value: '80+ Tephras' },
      { label: 'Mass Spectrometer', value: 'Argus VI' },
      { label: 'Age Confidence', value: '2σ' }
    ],
    leadResearcherId: 'person-sarah',
    relatedPublicationIds: ['pub-07'],
    heroImage: '/images/research/geochronology-tuff.jpg',
    tags: ['Geochronology', '40Ar/39Ar Dating', 'Tephrochronology', 'Stratigraphy']
  }
];

export const INITIAL_PUBLICATIONS: Publication[] = [
  {
    id: 'pub-01',
    title: 'Early Pliocene Hominin Mandibular Morphology and Dietary Adaptations in the Middle Awash, Ethiopia',
    authors: ['Sewasew Haileselassie', 'Marcus Vance', 'Chen Wei', 'Sarah Lindqvist'],
    journal: 'Nature Paleoanthropology & Evolution',
    year: 2026,
    doi: '10.1038/s41559-026-0312-x',
    pdfUrl: '#',
    abstract: 'The morphological transition between Ardipithecus and early Australopithecus remains a crucial phase in human origins. Here, we present newly discovered mid-Pliocene mandibular fossils from the Afar Rift dated to 4.1 million years ago. Micro-computed tomography demonstrates thick molar enamel and robust corpus architecture reflecting early dietary divergence toward hard-object foraging in mixed savannah-woodland environments.',
    researchAreaId: 'res-paleoanthropology',
    featured: true,
    citationsCount: 48,
    heroImage: '/images/research/fossil-skull.jpg',
    tags: ['Paleoanthropology', 'Hominin Fossils', 'Middle Awash', 'Australopithecus'],
    bibtex: `@article{Haileselassie2026Pliocene,
  author = {Haileselassie, Sewasew and Vance, Marcus and Wei, Chen and Lindqvist, Sarah},
  title = {Early Pliocene Hominin Mandibular Morphology and Dietary Adaptations in the Middle Awash, Ethiopia},
  journal = {Nature Paleoanthropology & Evolution},
  volume = {34},
  pages = {112--126},
  year = {2026},
  doi = {10.1038/s41559-026-0312-x}
}`
  },
  {
    id: 'pub-02',
    title: '2.6-Million-Year-Old Flaked Stone Assemblages from Gona and the Origins of Systematic Toolmaking',
    authors: ['Marcus Vance', 'Sewasew Haileselassie', 'Aria Tanaka'],
    journal: 'Journal of Human Evolution',
    year: 2026,
    doi: '10.1016/j.jhevol.2026.103140',
    pdfUrl: '#',
    abstract: 'Systematic stone flaking marks a profound behavioral transition in early hominin evolution. We document an in-situ assemblage of over 850 Oldowan artifacts from stratified sediments at Gona, Ethiopia. High-resolution 3D scar-pattern refitting reveals sophisticated understanding of fracture mechanics and acute flake-angle detachment as early as 2.6 Ma.',
    researchAreaId: 'res-lithic',
    featured: true,
    citationsCount: 29,
    heroImage: '/images/research/stone-tools.jpg',
    tags: ['Oldowan', 'Lithic Technology', 'Gona', 'Stone Tools'],
    bibtex: `@article{Vance2026Gona,
  author = {Vance, Marcus and Haileselassie, Sewasew and Tanaka, Aria},
  title = {2.6-Million-Year-Old Flaked Stone Assemblages from Gona and the Origins of Systematic Toolmaking},
  journal = {Journal of Human Evolution},
  volume = {180},
  pages = {103140},
  year = {2026},
  doi = {10.1016/j.jhevol.2026.103140}
}`
  },
  {
    id: 'pub-03',
    title: 'Enamel Carbon Isotope Transects Document C4 Grassland Exploitation by Early Pleistocene Homo in the Afar Depression',
    authors: ['Chen Wei', 'Sewasew Haileselassie', 'Sarah Lindqvist'],
    journal: 'Proceedings of the National Academy of Sciences (PNAS)',
    year: 2025,
    doi: '10.1073/pnas.202504112',
    pdfUrl: '#',
    abstract: 'Stable carbon isotope values (δ13C) from serial enamel dental microsamples track seasonal nutritional plasticity in early Homo erectus/ergaster. Our data from 1.8 Ma strata demonstrate consistent broad-spectrum foraging including C4 graminoids and grazing faunal resources during prolonged arid climatic pulses.',
    researchAreaId: 'res-paleoenvironment',
    featured: false,
    citationsCount: 76,
    heroImage: '/images/research/savannah-environment.jpg',
    tags: ['Stable Isotopes', 'Homo erectus', 'Paleoecology', 'East Africa'],
    bibtex: `@article{Wei2025EnamelIsotopes,
  author = {Wei, Chen and Haileselassie, Sewasew and Lindqvist, Sarah},
  title = {Enamel Carbon Isotope Transects Document C4 Grassland Exploitation by Early Pleistocene Homo in the Afar Depression},
  journal = {PNAS},
  volume = {122},
  pages = {e202504112},
  year = {2025},
  doi = {10.1073/pnas.202504112}
}`
  },
  {
    id: 'pub-04',
    title: 'High-Precision 40Ar/39Ar Tephrostratigraphy of the Hadar and Dikika Formations, Ethiopia',
    authors: ['Sarah Lindqvist', 'Sewasew Haileselassie'],
    journal: 'Earth and Planetary Science Letters',
    year: 2025,
    doi: '10.1016/j.epsl.2025.118901',
    pdfUrl: '#',
    abstract: 'Single-crystal laser fusion 40Ar/39Ar dating on feldspar grains from 14 volcanic tuff marker beds establishes an absolute chronological resolution of ±12,000 years for the Australopithecus afarensis fossil sequence in the northern Afar rift basin.',
    researchAreaId: 'res-geochronology',
    featured: false,
    citationsCount: 38,
    heroImage: '/images/research/geochronology-tuff.jpg',
    tags: ['Geochronology', 'Argon Dating', 'Hadar', 'Tephrochronology'],
    bibtex: `@article{Lindqvist2025Tephra,
  author = {Lindqvist, Sarah and Haileselassie, Sewasew},
  title = {High-Precision 40Ar/39Ar Tephrostratigraphy of the Hadar and Dikika Formations, Ethiopia},
  journal = {Earth and Planetary Science Letters},
  volume = {620},
  pages = {118901},
  year = {2025},
  doi = {10.1016/j.epsl.2025.118901}
}`
  },
  {
    id: 'pub-05',
    title: 'Microscopic Use-Wear and Residue Evidence for Early Pleistocene Woodworking with Acheulean Cleavers',
    authors: ['Marcus Vance', 'Aria Tanaka'],
    journal: 'Journal of Archaeological Science',
    year: 2025,
    doi: '10.1016/j.jas.2025.105988',
    pdfUrl: '#',
    abstract: 'Confocal laser scanning microscopy of Large Cutting Tools (LCTs) from 1.4 Ma archaeological levels at Melka Kunture demonstrates diagnostic polish and plant phytolith residues corresponding to purposeful heavy-duty wood modification.',
    researchAreaId: 'res-lithic',
    featured: false,
    citationsCount: 21,
    heroImage: '/images/research/stone-tools.jpg',
    tags: ['Use-Wear', 'Acheulean', 'Microscopy', 'Experimental Archaeology'],
    bibtex: `@article{Vance2025Woodworking,
  author = {Vance, Marcus and Tanaka, Aria},
  title = {Microscopic Use-Wear and Residue Evidence for Early Pleistocene Woodworking with Acheulean Cleavers},
  journal = {Journal of Archaeological Science},
  volume = {155},
  pages = {105988},
  year = {2025},
  doi = {10.1016/j.jas.2025.105988}
}`
  },
  {
    id: 'pub-06',
    title: 'Quaternary Fluvial Dynamics and Basin Hydrology in the Main Ethiopian Rift: Implications for Human Dispersals',
    authors: ['Chen Wei', 'Marcus Vance', 'Sewasew Haileselassie'],
    journal: 'Quaternary Science Reviews',
    year: 2024,
    doi: '10.1016/j.quascirev.2024.108502',
    pdfUrl: '#',
    abstract: 'Geomorphological mapping and optically stimulated luminescence (OSL) dating of paleolake terraces in the Ziway-Shala basin reveal episodic mega-lake phases that created hospitable riparian corridors for Middle Stone Age human dispersals across East Africa.',
    researchAreaId: 'res-paleoenvironment',
    featured: false,
    citationsCount: 94,
    heroImage: '/images/research/savannah-environment.jpg',
    tags: ['Quaternary', 'Hydrology', 'Human Dispersal', 'East Africa'],
    bibtex: `@article{Wei2024QuaternaryFluvial,
  author = {Wei, Chen and Vance, Marcus and Haileselassie, Sewasew},
  title = {Quaternary Fluvial Dynamics and Basin Hydrology in the Main Ethiopian Rift: Implications for Human Dispersals},
  journal = {Quaternary Science Reviews},
  volume = {330},
  pages = {108502},
  year = {2024},
  doi = {10.1016/j.quascirev.2024.108502}
}`
  },
  {
    id: 'pub-07',
    title: '3D Virtual Forensic Endocast Reconstruction of Pleistocene Hominin Crania',
    authors: ['Sarah Lindqvist', 'Dr. Klaus Hoffmann', 'Sewasew Haileselassie'],
    journal: 'American Journal of Biological Anthropology',
    year: 2024,
    doi: '10.1002/ajpa.24901',
    pdfUrl: '#',
    abstract: 'Digital segmentation of intracranial endocasts from complete fossil calvaria reveals frontal lobe sulcal morphology and hemispheric petalia patterns indicative of complex Broca-region specialization in late Middle Pleistocene African hominins.',
    researchAreaId: 'res-paleoanthropology',
    featured: false,
    citationsCount: 52,
    heroImage: '/images/news/micro-ct-lab.jpg',
    tags: ['Endocast', 'Brain Evolution', 'Micro-CT', 'Biological Anthropology'],
    bibtex: `@article{Lindqvist2024Endocast,
  author = {Lindqvist, Sarah and Hoffmann, Klaus and Haileselassie, Sewasew},
  title = {3D Virtual Forensic Endocast Reconstruction of Pleistocene Hominin Crania},
  journal = {American Journal of Biological Anthropology},
  volume = {183},
  pages = {412--428},
  year = {2024},
  doi = {10.1002/ajpa.24901}
}`
  }
];

export const INITIAL_PEOPLE: Person[] = [
  {
    id: 'person-sewasew',
    name: 'Dr. Sewasew Haileselassie',
    role: 'PI',
    positionTitle: 'Principal Investigator & Director of UC Berkeley Lab',
    bio: 'Dr. Sewasew Haileselassie leads the African Archaeology, History & Human Evolution Laboratory with over two decades of field excavations and research across the East African Rift, Middle Awash, and Afar basins.',
    avatar: '/images/dr-sewasew.jpg',
    email: 'sewasew@lbl.gov',
    office: 'UC Berkeley Lab, 1 Cyclotron Rd, Room 412',
    scholarUrl: 'https://scholar.google.com',
    orcidUrl: 'https://orcid.org/0000-0002-1825-0097',
    researchAreaIds: ['res-paleoanthropology', 'res-lithic', 'res-paleoenvironment']
  },
  {
    id: 'person-marcus',
    name: 'Dr. Marcus Vance',
    role: 'Postdoc',
    positionTitle: 'Senior Postdoctoral Fellow in Prehistoric Lithic Analysis',
    bio: 'Marcus specializes in early Pleistocene Oldowan technology, 3D knapping modeling, and microscopic use-wear traceology. He received his Ph.D. from Cambridge University.',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80',
    email: 'm.vance@nexus-lab.org',
    office: 'Archaeology Research Annex, Room 204',
    scholarUrl: 'https://scholar.google.com',
    orcidUrl: 'https://orcid.org/0000-0001-9234-5678',
    researchAreaIds: ['res-lithic']
  },
  {
    id: 'person-chen',
    name: 'Dr. Chen Wei',
    role: 'Postdoc',
    positionTitle: 'Research Fellow in Isotope Biogeochemistry',
    bio: 'Chen investigates stable isotope ratios (δ13C and δ18O) in mammalian tooth enamel and fossil soils to reconstruct African Pliocene-Pleistocene vegetation and hydrological regimes.',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80',
    email: 'c.wei@nexus-lab.org',
    office: 'Biogeochemistry Wing, Lab 3',
    scholarUrl: 'https://scholar.google.com',
    orcidUrl: 'https://orcid.org/0000-0003-4567-8901',
    researchAreaIds: ['res-paleoenvironment']
  },
  {
    id: 'person-sarah',
    name: 'Sarah Lindqvist',
    role: 'PhD',
    positionTitle: 'Ph.D. Candidate in Geochronology & Volcanology',
    bio: 'Sarah focuses on single-crystal 40Ar/39Ar tephrochronology and laser fusion mass spectrometry to calibrate early hominin sedimentary sequences.',
    avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=600&q=80',
    email: 's.lindqvist@nexus-lab.org',
    office: 'Geochronology Suite, Desk 12',
    scholarUrl: 'https://scholar.google.com',
    researchAreaIds: ['res-geochronology']
  },
  {
    id: 'person-aria',
    name: 'Aria Tanaka',
    role: 'PhD',
    positionTitle: 'Ph.D. Candidate in 3D Fossil Forensics & Morphometrics',
    bio: 'Aria develops high-resolution geometric morphometric algorithms and virtual cranial reconstructions of early African hominin specimens.',
    avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=600&q=80',
    email: 'a.tanaka@nexus-lab.org',
    office: 'Computational Paleo-Morphology, Room 301',
    researchAreaIds: ['res-paleoanthropology']
  },
  {
    id: 'person-klaus',
    name: 'Dr. Klaus Hoffmann',
    role: 'Alumni',
    positionTitle: 'Assistant Professor of Anthropology, Harvard University',
    bio: 'Klaus was a postdoctoral fellow in the Sewasew Laboratory from 2021-2024, researching Pleistocene Acheulean stone tool technology and raw material landscape mobility.',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=600&q=80',
    email: 'k.hoffmann@harvard.edu',
    office: 'Cambridge, MA',
    scholarUrl: 'https://scholar.google.com',
    researchAreaIds: ['res-lithic', 'res-paleoanthropology']
  }
];

export const INITIAL_ARTICLES: Article[] = [
  {
    id: 'art-01',
    title: 'Fossil Hominin Mandible from the Afar Rift Reveals Key Dietary Transitions at 4.1 Million Years',
    summary: 'How field excavations in the Ethiopian Rift Valley recovered cranial elements documenting early hominin bipedalism and masticatory adaptations.',
    category: 'Field Discovery',
    author: 'Dr. Sewasew Haileselassie',
    date: 'August 14, 2026',
    readTime: '6 min read',
    featured: true,
    heroImage: '/images/news/excavation-trench.jpg',
    figureCaption: 'FIG 01 — Stratigraphic exposure at the Middle Awash excavation horizon.',
    content: [
      'The geological record of the East African Rift offers an unparalleled window into human evolutionary history. For over two decades, our research team has mapped continuous fossiliferous exposures across the Afar Depression, where ancient volcanic ashes cap fossil-bearing lake sediments.',
      'Our latest field campaign recovered a well-preserved hominin hemimandible in association with extinct faunal assemblages. Micro-CT scans demonstrate thick enamel caps on molar teeth, suggesting early Australopithecus exploited tough, abrasive fibrous vegetation as savannah woodlands expanded.',
      'These findings refine the evolutionary divergence timing between ancestral hominins and provide critical benchmark calibration for late Neogene evolutionary chronologies.'
    ],
    tags: ['Field Excavation', 'Afar Rift', 'Australopithecus', 'Hominin Origins']
  },
  {
    id: 'art-02',
    title: 'Reconstructing the World of 2.6-Million-Year-Old Stone Toolmakers at Gona',
    summary: 'Microscopic use-wear and 3D flake refitting demonstrate intentional technological design in the world\'s oldest archaeological sites.',
    category: 'Archaeological Insight',
    author: 'Dr. Marcus Vance',
    date: 'July 28, 2026',
    readTime: '8 min read',
    featured: false,
    heroImage: '/images/research/stone-tools.jpg',
    figureCaption: 'FIG 02 — 3D laser scan of an Oldowan basalt unifacial core from Gona.',
    content: [
      'The emergence of flaked stone tools represents a pivotal cognitive leap in hominin behavioral evolution. By intentionally knapping sharp-edged stone flakes, early hominins gained unprecedented access to high-calorie animal carcasses.',
      'Our experimental flintknapping and microscopic edge-wear analyses prove that Gona toolmakers possessed sophisticated spatial awareness and sensorimotor precision, striking raw pebbles at precise angles below 80 degrees to yield long, durable slicing flakes.'
    ],
    tags: ['Stone Tools', 'Oldowan', 'Gona', 'Prehistory']
  },
  {
    id: 'art-03',
    title: 'Inside the Berkeley High-Resolution Micro-CT Fossil Forensics Laboratory',
    summary: 'A behind-the-scenes look at how non-destructive X-ray microtomography digitally unwraps fossil skulls without physical extraction.',
    category: 'Behind the Science',
    author: 'Sarah Lindqvist',
    date: 'June 10, 2026',
    readTime: '4 min read',
    featured: false,
    heroImage: '/images/news/micro-ct-lab.jpg',
    figureCaption: 'FIG 03 — 3D virtual cranial endocast showing cerebral sulci and vascular impressions.',
    content: [
      'Rare hominin fossil bones are irreplaceable cultural and scientific treasures that cannot be cut or physically sampled. Modern paleoanthropology relies on non-destructive X-ray micro-computed tomography (micro-CT).',
      'By scanning fossil specimens with beam resolutions under 10 microns, our lab creates 3D virtual models of internal bone structures, dental growth lines (perikymata), and cranial endocasts, allowing global researchers to study digital fossils in extraordinary forensic detail.'
    ],
    tags: ['Micro-CT', 'Forensics', 'Digital Fossils', 'Lab Technology']
  }
];

export const INITIAL_LAB_IMAGES: LabImage[] = [
  {
    id: 'img-field-excavation',
    title: 'Stratigraphic Excavation in the Afar Rift, Ethiopia',
    category: 'Field Expeditions',
    imageUrl: '/images/news/excavation-trench.jpg',
    description: 'Field research team carefully sieving sedimentary horizons for early hominin micro-vertebrate remains in the Afar Depression.',
    exif: {
      camera: 'Leica SL2',
      wavelength: 'Afar Depression, Ethiopia',
      date: '2026-02-14'
    }
  },
  {
    id: 'img-micro-ct',
    title: 'High-Resolution Micro-CT Fossil Reconstruction',
    category: 'Laboratory Forensics',
    imageUrl: '/images/news/micro-ct-lab.jpg',
    description: '3D micro-tomography volumetric scan of fossil molar dentition showing enamel-dentine junction (EDJ) architecture.',
    exif: {
      camera: 'Bruker SkyScan 1273',
      magnification: '5.2 μm Voxel Size',
      wavelength: '130 kV / 300 μA',
      date: '2026-04-09'
    }
  },
  {
    id: 'img-lithic-knapping',
    title: 'Experimental Knapping & Lithic Reduction Laboratory',
    category: 'Archaeology Lab',
    imageUrl: '/images/research/stone-tools.jpg',
    description: 'Experimental replication of Acheulean bifacial handaxe reduction sequences using East African rift volcanics.',
    exif: {
      camera: 'Sony A7R V',
      wavelength: 'Basalt & Obsidian',
      date: '2026-05-20'
    }
  },
  {
    id: 'img-mass-spec',
    title: '40Ar/39Ar Laser Geochronology Mass Spectrometry Bench',
    category: 'Equipments',
    imageUrl: '/images/research/geochronology-tuff.jpg',
    description: 'Thermo Scientific Argus VI noble gas mass spectrometer dating single sanidine crystals from volcanic ash layers.',
    exif: {
      camera: 'Nikon Z8',
      wavelength: 'CO2 Laser Step-Heating',
      date: '2026-06-11'
    }
  }
];

export const INITIAL_OPEN_POSITIONS: OpenPosition[] = [
  {
    id: 'pos-01',
    title: 'Postdoctoral Fellow in Paleoanthropology & 3D Fossil Morphometrics',
    type: 'Postdoc',
    department: 'Department of Anthropology & Living Research Lab',
    deadline: 'November 15, 2026',
    description: 'Seeking an outstanding biological anthropologist with expertise in micro-CT image processing, geometric morphometrics, and hominin fossil anatomy to participate in East African field research.',
    requirements: [
      'Ph.D. in Biological Anthropology, Paleoanthropology, or Evolutionary Biology',
      'Demonstrated expertise with 3D volume rendering and geometric morphometrics (Avizo, R, 3D Slicer)',
      'Proven record of peer-reviewed publications in international journals',
      'Willingness to participate in multi-week field expeditions in Ethiopia'
    ]
  },
  {
    id: 'pos-02',
    title: 'Ph.D. Candidate in Prehistoric African Lithic Archaeology',
    type: 'PhD Candidate',
    department: 'Graduate Program in African Archaeology & Human Evolution',
    deadline: 'December 20, 2026',
    description: 'Fully funded 4-year doctoral fellowship focusing on Early to Middle Stone Age technological evolution, microscopic use-wear traceology, and experimental flintknapping.',
    requirements: [
      'B.A. or M.A./M.Sc. in Archaeology, Anthropology, or Earth Sciences',
      'Background in stone tool analysis, spatial GIS mapping, or microscope traceology',
      'Strong passion for African prehistoric heritage and collaborative field research'
    ]
  }
];

export const INITIAL_COURSES: Course[] = [
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

export const INITIAL_OUTREACH: OutreachItem[] = [
  {
    id: 'pan-african',
    title: 'Pan-African Prehistory & Heritage Collaboration',
    tag: 'PAN-AFRICAN INITIATIVE',
    category: 'Pan-African',
    img: '/images/news/excavation-trench.jpg',
    summary: 'Collaborative research training and technical capacity building for African scholars, curators, and field archaeologists in partnership with ARCCH and African universities.',
    stat: '14+ African Fellows Trained',
    lead: 'Dr. Sewasew Haileselassie & ARCCH Directorate',
    objectives: [
      'Empower African early-career researchers with cutting-edge digital paleoanthropology methods',
      'Provide fully-funded graduate research fellowships at UC Berkeley and partner labs',
      'Establish sustainable, African-led curation standards for fossil hominin collections'
    ],
    impactDetails: 'Through annual workshops in Addis Ababa and Berkeley, our lab bridges the gap between field discovery and laboratory science. Fellows receive hands-on training in high-precision geochronology, 3D micro-CT scanning, and open-access publishing.',
    partners: ['Authority for Research & Conservation of Cultural Heritage (ARCCH)', 'Addis Ababa University', 'National Museum of Ethiopia', 'University of Nairobi']
  },
  {
    id: 'virtual-fossil-lab',
    title: 'Virtual Fossil Lab & Open 3D Repository',
    tag: 'OPEN SCIENCE & 3D ARCHIVES',
    category: 'Open Science',
    img: '/images/research/fossil-skull.jpg',
    summary: 'Providing free open-access 3D surface meshes and micro-CT volume reconstructions of prehistoric lithics and comparative fossil casts for global classrooms.',
    stat: '500+ Digital Models Available',
    lead: 'Digital Forensics & Morphometrics Team',
    objectives: [
      'Democratize access to African fossil hominin and archaeological discoveries worldwide',
      'Provide interactive 3D WebGL viewers and printable STL files for schools and universities',
      'Preserve high-resolution digital master copies of fragile prehistoric specimens'
    ],
    impactDetails: 'Our open repository has served over 45,000 educators and researchers in 80+ countries. Students can rotate, slice, and measure fossil crania and Oldowan stone tools right in their web browsers or 3D print them in their school science labs.',
    partners: ['African Digital Heritage Network', 'Global Morphometrics Consortium', 'MorphoSource 3D Repository']
  },
  {
    id: 'k12-workshops',
    title: '\'Roots of Humanity\' Public School Workshops',
    tag: 'K-12 YOUTH ENGAGEMENT',
    category: 'K-12 Engagement',
    img: '/images/research/stone-tools.jpg',
    summary: 'Interactive hands-on science sessions with fossil replicas, microscopic traceology demonstrations, and flintknapping science for Bay Area middle and high schools.',
    stat: '2,400+ Students Reached Annually',
    lead: 'Lab Outreach Coordinators & PhD Mentors',
    objectives: [
      'Inspire underrepresented K-12 students to pursue careers in Earth science and anthropology',
      'Deliver hands-on STEM curriculum featuring real scientific methodologies',
      'Host interactive campus visits to Berkeley archaeological and scanning laboratories'
    ],
    impactDetails: 'Each semester, our PhD students and postdocs visit public school classrooms with research-grade cast kits and digital microscopes. Students extract simulated micro-fossils, analyze tool marks, and discover the scientific evidence for human origins in Africa.',
    partners: ['Bay Area Science Festival', 'Oakland & Berkeley Unified School Districts', 'Lawrence Hall of Science']
  },
  {
    id: 'community-stewardship',
    title: 'Afar Community Heritage & Site Conservation',
    tag: 'COMMUNITY STEWARDSHIP',
    category: 'Community Stewardship',
    img: '/images/research/savannah-environment.jpg',
    summary: 'Working directly with local pastoralist communities across the Afar Rift in archaeological site protection, local guide training, and sustainable cultural heritage stewardship.',
    stat: '100% Community-Led Field Protection',
    lead: 'Afar Regional Stakeholder Coalition',
    objectives: [
      'Involve local pastoralist communities as co-stewards of primary fossil-bearing strata',
      'Provide emergency clean water and educational resources to remote Afar field settlements',
      'Protect vulnerable Pleistocene paleontological localities from illegal disturbance'
    ],
    impactDetails: 'Local community members are the primary guardians of the fossil-bearing sediments in the Afar Depression. Our team collaborates with community elders to foster conservation, provide field employment, and support local village infrastructure.',
    partners: ['Afar Regional Cultural Bureau', 'Mille District Community Council', 'Gona Heritage Association']
  }
];


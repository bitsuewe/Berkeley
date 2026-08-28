import type { ResearchArea, Publication, Article, Person, LabImage, OpenPosition } from '../types/lab';

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

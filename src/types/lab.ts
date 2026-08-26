export const LAB_TYPES_VERSION = '1.0.0';

export type AccentTheme = 'cobalt' | 'cyan' | 'orange' | 'green' | 'vermilion';

export type Model3DType = 'quantum' | 'microfluidic' | 'synaptic' | 'metamaterial';

export interface ResearchArea {
  id: string;
  code: string; // e.g. "01"
  title: string;
  subtitle: string;
  category: string;
  shortDescription: string;
  longDescription: string;
  modelType: Model3DType;
  keyQuestions: string[];
  methodology: string;
  stats: { label: string; value: string }[];
  leadResearcherId: string;
  relatedPublicationIds: string[];
  heroImage?: string;
}

export interface Publication {
  id: string;
  title: string;
  authors: string[];
  journal: string;
  year: number;
  doi: string;
  pdfUrl?: string;
  abstract: string;
  researchAreaId: string;
  featured?: boolean;
  citationsCount: number;
  bibtex: string;
  tags: string[];
}

export interface Article {
  id: string;
  title: string;
  summary: string;
  content: string[];
  author: string;
  date: string;
  category: string;
  readTime: string;
  featured?: boolean;
  heroImage: string;
  figureCaption?: string;
}

export interface Person {
  id: string;
  name: string;
  role: 'PI' | 'Postdoc' | 'PhD' | 'Undergraduate' | 'Alumni';
  positionTitle: string;
  bio: string;
  avatar: string;
  email: string;
  office: string;
  scholarUrl?: string;
  orcidUrl?: string;
  researchAreaIds: string[];
}

export interface LabImage {
  id: string;
  title: string;
  category: 'Equipments' | 'Experiments' | 'Microscopy' | 'Fieldwork';
  imageUrl: string;
  description: string;
  exif: {
    camera: string;
    magnification?: string;
    wavelength?: string;
    date: string;
  };
}

export interface OpenPosition {
  id: string;
  title: string;
  type: 'Postdoc' | 'PhD Candidate' | 'Research Engineer' | 'Undergraduate Fellow';
  department: string;
  deadline: string;
  description: string;
  requirements: string[];
}

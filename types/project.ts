export interface Project {
  id: number;

  title: {
    ar: string;
    en: string;
  };

  description: {
    ar: string;
    en: string;
  };

  longDescription: {
    ar: string;
    en: string;
  };

  image_url: string;

  gallery: string[];

  tech_stack: string[];

  github: string;

  live: string;

  video_url: string;

  features: {
    ar: string[];
    en: string[];
  };
}
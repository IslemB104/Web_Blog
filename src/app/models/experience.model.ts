import { SafeHtml } from "@angular/platform-browser";

export interface Experience {
    id: string;
    title: string;
    date: string;
    description: string;
    details:SafeHtml | string;
    technologies: string;
    
  }
  
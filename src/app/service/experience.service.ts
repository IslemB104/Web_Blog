import { Injectable, Type } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Experience } from '../models/experience.model';

@Injectable({
  providedIn: 'root',
})
export class ExperienceService {

  //experience infos
    experiences: Experience[] = [
        {
          id: '1',
          title: 'DevOps Internship: Spark-IT',
          date: '06/2023-07/2023',
          description: `Optimization of software development processes : continuous integration, deployment,
          and orchestration of Stark application.`,
          details: `
            - Implemented and optimized containerization for application modules using Docker. <br>
            - Established a robust CI/CD pipeline with GitLab CI/CD, including a Build Stage for
            compiling and packaging projects, a Test Stage utilizing SonarQube to ensure high
            coding standards, and a Deploy Stage. <br>
            - Configured Kubernetes Deployment for modules to ensure optimal scaling. <br>
            - Defined Kubernetes Services to efficiently expose and access application modules. <br>
            - Ensured seamless application execution by configuring Pods within the Kubernetes
            environment.`,
          technologies: 'Docker, GitLab CI/CD, Kubernetes, SonarQube',
        },
        {
          id: '2',
          title: 'Final Year Project: Web Application TunMedCare',
          date: '01/2023-04/2023',
          description: `Development of a functional online medical application for patients with chronic diseases,
          facilitating their communication with doctors and improving their health management.`,
          details: `
            - Implemented the front-end with ReactJS using TypeScript.<br>
            - Implemented the back-end with NodeJS and Express using JavaScript.`,
          technologies: 'ReactJS, NodeJS, ExpressJS, MangoDB, PostMan',
        },
        {
          id: '3',
          title: 'Operator Internship: Tunisie Telecom',
          date: '06/2022',
          description: 'Operator internship in the Customer Service Center (CSC)',
          details: `
            - Addressed and resolved operational disruptions to ensure smooth workflow.<br>
            - Executed various office tasks to support daily operations.`,
          technologies: '', 
        },
      ];
      

  

  constructor() {}

  getExperiences(): Observable<Experience[]> {
    return of(this.experiences);
    
  }

  getExperienceById(id: string): Observable<Experience | undefined> {
    const experience = this.experiences.find((exp) => exp.id === id);
    console.log('Found Experience:', experience);
    return of(experience);
  }
  
}

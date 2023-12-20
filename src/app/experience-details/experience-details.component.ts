import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Experience } from '../models/experience.model';
import { ExperienceService } from '../service/experience.service';

@Component({
  selector: 'app-experience-details',
  templateUrl: './experience-details.component.html',
  styleUrls: ['./experience-details.component.css']
})
export class ExperienceDetailsComponent implements OnInit {
  experience: Experience | undefined;

  constructor(
    private route: ActivatedRoute,
    private experienceService: ExperienceService 
  ) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      const experienceId = params['id'];
      console.log('Experience ID:', experienceId);
  
      if (experienceId) {
        this.experienceService.getExperienceById(experienceId).subscribe(
          (experience) => {
            this.experience = experience;
            console.log('Fetched Experience:', experience);
          },
          (error) => {
            console.error('Error fetching experience details:', error);
          }
        );
      }
    });
  }
  
  
}

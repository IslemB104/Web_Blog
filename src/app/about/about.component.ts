import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  constructor(private router: Router) {}

  //navigate to experience 
  showDetails(experienceId: string): void {
    this.router.navigate(['/experience', experienceId]);
  }

  //download my cv 
  downloadCv(): void {
    const cvFilePath = 'assets/CV_Islem_Bouchaala.pdf'; 
    const link = document.createElement('a');
    link.href = cvFilePath;
    link.target = '_blank';
    link.download = 'CV_Islem_Bouchaala.pdf'; 
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

}

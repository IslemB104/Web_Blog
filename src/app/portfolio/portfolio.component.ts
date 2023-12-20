import { Component } from '@angular/core';
import { PortfolioItem } from '../models/portfolio-item.model';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent {
  // Filter variable to track the current category
  currentFilter: string = 'all';

  portfolioItems: PortfolioItem[] = [
    { category: 'web-design', imageUrl: 'assets/images/portfolio/TunMedCare.png' },
    { category: 'web-design', imageUrl: 'assets/images/portfolio/EventManager.png' },
    { category: 'web-design', imageUrl: 'assets/images/portfolio/sik.punya.id.png' },
    { category: 'devops', imageUrl: 'assets/images/portfolio/Fichier 3.png' },

  ];

  // Function to filter portfolio items based on category
  filterItems(category: string): void {
    this.currentFilter = category;
  }

  // Function to check if an item should be displayed based on the current filter
  shouldDisplayItem(itemCategory: string): boolean {
    return this.currentFilter === 'all' || this.currentFilter === itemCategory;
  }

}

import {Component} from '@angular/core';
import {Router, RouterLink, RouterLinkActive, RouterModule} from '@angular/router';
import {FormsModule} from '@angular/forms';
import {SearchService} from '../../../services/search.service';
import {NgIf} from '@angular/common';

@Component({
  selector: 'header-component',
  standalone: true,
  imports: [
    RouterLink,
    RouterLinkActive,
    RouterModule,
    FormsModule,
    NgIf
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {

  search: string = '';

  constructor(private searchService: SearchService, private router: Router) {}

  onSearch() {
    this.searchService.setSearchQuery(this.search);
    this.router.navigate(['/products']);
  }

  clearSearch() {
    this.search = '';
    this.onSearch();
  }
}

import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {SearchService} from '../services/search.service';

@Component({
  selector: 'header-component',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  standalone: false

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

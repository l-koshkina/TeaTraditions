import {Component, OnInit} from '@angular/core';
import {HttpService} from '../../../services/http.service';
import {ProductType} from '../../../types/ProductType';
import {Router, RouterLink} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import {CommonModule, NgForOf} from '@angular/common';
import {LineLengthPipe} from '../../../pipes/line-length.pipe';
import {tap} from 'rxjs';
import {SearchService} from '../../../services/search.service';

@Component({
  selector: 'products-component',
  standalone: true,
  imports: [HttpClientModule, NgForOf, CommonModule, LineLengthPipe, RouterLink],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss',
  providers: [HttpService]
})
export class ProductsComponent implements OnInit {
  products: ProductType[] = [];
  loading: boolean = false;
  searchQuery: string = '';
  searchStatus: boolean = true;

  constructor(private httpService: HttpService,
              private router: Router,
              private searchService: SearchService) {
  }

  ngOnInit() {
    this.loading = true;
    this.searchService.searchQuery$.subscribe((query) => {
      this.searchQuery = query;
      if (query) {
        this.httpService.searchProduct(query)
          .pipe(
            tap(() => {
              this.loading = false;
            })
          )
          .subscribe({
              next: (data) => {
                if (data.length === 0) {
                  this.searchStatus = false;
                } else {
                  this.products = data;
                  this.searchStatus = true;
                }
              },
              error: (error) => {
                console.log(error);
                this.router.navigate(['/']);
                this.searchStatus = false;
              }
            }
          )
      } else {
        this.httpService.getProducts()
          .pipe(
            tap(() => {
              this.loading = false;
            })
          )
          .subscribe({
              next: (data) => {
                if (data.length === 0) {
                  this.searchStatus = false;
                } else {
                  this.products = data;
                  this.searchStatus = true;
                }
              },
              error: (error) => {
                console.log(error);
                this.router.navigate(['/']);
                this.searchStatus = false;
              }
            }
          )
      }
    })
  }
}

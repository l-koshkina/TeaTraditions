import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router, RouterLink, RouterModule} from '@angular/router';
import {LineLengthPipe} from '../../../shared/pipes/line-length.pipe';
import {ProductType} from '../../../../types/ProductType';
import {HttpService} from '../../../shared/services/http.service';
import {CommonModule} from '@angular/common';
import {HttpClientModule} from '@angular/common/http';

@Component({
  selector: 'app-product',
  // imports: [RouterLink, RouterModule, LineLengthPipe, CommonModule, HttpClientModule],
  templateUrl: './product.component.html',
  styleUrl: '',
  providers: [HttpService],
  standalone: false
})
export class ProductComponent implements OnInit {
  product: ProductType;

  constructor(private activatedRoute: ActivatedRoute, private router: Router, private httpService: HttpService) {
    this.product = {
      description: '',
      id: 0,
      image: '',
      price: 0,
      title: ''
    }
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      if (params['id']) {
        this.httpService.getProduct(+params['id'])
          .subscribe({
            next: (data) => {
              this.product = data;
            },
            error: (error) => {
              console.log(error);
              this.router.navigate(['/']);
            }
          });
      }
    });
  }
}

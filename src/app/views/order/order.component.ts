import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';
import {CommonModule, NgIf} from '@angular/common';
import {HttpService} from '../../shared/services/http.service';
import {HttpClient, HttpClientModule} from '@angular/common/http';

@Component({
  selector: 'order-component',
  // imports: [FormsModule, ReactiveFormsModule, CommonModule, NgIf, HttpClientModule],
  templateUrl: './order.component.html',
  styleUrl: './order.component.scss',
  providers: [HttpService, HttpClient],
  standalone: false
})
export class OrderComponent implements OnInit {
  orderForm!: FormGroup;

  loading: boolean = false;
  showForm: boolean = true;
  successOrder: boolean = true;

  constructor(private activatedRoute: ActivatedRoute,
              private fb: FormBuilder,
              private httpService: HttpService) {
  }

  ngOnInit() {
    this.orderForm = this.fb.group({
      name: ['', [Validators.required, Validators.pattern(/^[a-zA-zа-яА-Я]+$/)]],
      last_name: ['', [Validators.required, Validators.pattern(/^[a-zA-zа-яА-Я]+$/)]],
      phone: ['', [Validators.required, Validators.pattern(/^\+?\d{11}$/)]],
      country: ['', [Validators.required]],
      zip: ['', [Validators.required, Validators.pattern(/^\d{6}$/)]],
      product: [{value: '', disabled: true}, [Validators.required]],
      address: ['', [Validators.required, Validators.pattern(/^[a-zA-Zа-яА-Я0-9\s\-/]+$/)]],
      comment: ['']
    })

    this.activatedRoute.queryParams.subscribe((params) => {
      if (params['product']) {
        console.log(params['product']);
        this.orderForm.patchValue({
          product: params['product'],
        })
      }
    })
  }

  createOrder() {
    this.loading = true;
    let order = this.orderForm.getRawValue();

    this.httpService.createOrder(order)
      .subscribe(response => {
        if (response.success && !response.message) {
          this.successOrder = true;
          this.showForm = false;
          this.orderForm.reset();
        } else {
          this.successOrder = false;
          this.showForm = true;
          setTimeout(() => {
            this.successOrder = true;
          }, 3000);
        }
        this.loading = false;
      })
  }

}

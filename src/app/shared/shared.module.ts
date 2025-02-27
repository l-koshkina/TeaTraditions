import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { LineLengthPipe } from './pipes/line-length.pipe';
import {HeaderComponent} from './header/header.component';
import {FooterComponent} from './footer/footer.component';


@NgModule({
  declarations: [
    FooterComponent,
    HeaderComponent,
    LineLengthPipe
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule
  ],
  exports: [
    FooterComponent,
    HeaderComponent,
    LineLengthPipe
  ]
})
export class SharedModule { }

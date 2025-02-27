import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { LineLengthPipe } from './pipes/line-length.pipe';
import {FooterComponent} from './components/footer/footer.component';
import {HeaderComponent} from './components/header/header.component';


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

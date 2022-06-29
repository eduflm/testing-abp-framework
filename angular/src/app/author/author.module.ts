import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthorRoutingModule } from './author-routing.module';
import { AuthorComponent } from './author.component';
import { SharedModule } from '../shared/shared.module';
import { NgbDatepickerModule } from '@ng-bootstrap/ng-bootstrap'


@NgModule({
  declarations: [
    AuthorComponent
  ],
  imports: [
    SharedModule,
    AuthorRoutingModule,
    NgbDatepickerModule
  ]
})
export class AuthorModule { }

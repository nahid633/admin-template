import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BasicCardsRoutingModule } from './basic-cards-routing.module';
import { BasicCardsComponent } from './container/basic-cards.component';


@NgModule({
  declarations: [BasicCardsComponent],
  imports: [
    CommonModule,
    BasicCardsRoutingModule
  ]
})
export class BasicCardsModule { }

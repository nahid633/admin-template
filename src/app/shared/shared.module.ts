import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { InvoiceComponent } from './invoice/invoice.component';



@NgModule({
  declarations: [FooterComponent, InvoiceComponent],
  imports: [
    CommonModule
  ],
  exports: []
})
export class SharedModule { }

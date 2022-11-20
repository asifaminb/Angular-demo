import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TemplateDrivenFormsRoutingModule } from './templatedrivenforms-routing.module';
import { CustomerComponent } from './customers/customer.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [CustomerComponent],
  imports: [CommonModule, TemplateDrivenFormsRoutingModule, FormsModule],
  exports: []
})
export class TemplateDrivenFormsModule {}

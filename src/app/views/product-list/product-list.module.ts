import { SharedModule } from './../../shared/shared.module';
import { AccordionModule } from 'primeng/accordion';
import { InputNumberModule } from 'primeng/inputnumber';
import { InputTextModule } from 'primeng/inputtext';
import { TableModule } from 'primeng/table';
import { NgModule } from '@angular/core';
import { AddressComponent } from './address/address.component';
import { ProductListComponent } from './product-list.component';
import { ProductsComponent } from './products/products.component';
import { ButtonModule } from 'primeng/button';
import { ProductListRoutingModule } from './product-list-routing.module';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [ProductListComponent, AddressComponent, ProductsComponent],
  imports: [
    CommonModule,
    SharedModule,
    TableModule,
    InputTextModule,
    InputNumberModule,
    ButtonModule,
    AccordionModule,
    ProductListRoutingModule,
  ],
  exports: [ProductListComponent, AddressComponent, ProductsComponent]
})
export class ProductListModule { }

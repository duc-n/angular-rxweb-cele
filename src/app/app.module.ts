import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from "@angular/router";
import { ReactiveFormsModule } from "@angular/forms";
import { RxReactiveFormsModule } from "@rxweb/reactive-form-validators";
import { AppComponent } from "./app.component";
import { TopBarComponent } from "./top-bar/top-bar.component";
import { ProductListComponent } from "./product-list/product-list.component";
import { TableModule } from 'primeng/table';
import { InputTextModule } from 'primeng/inputtext';
import { InputNumberModule } from 'primeng/inputnumber';
import { AccordionModule } from 'primeng/accordion';
import { AddressComponent } from './product-list/address/address.component';
import { ProductsComponent } from './product-list/products/products.component';
import { ButtonModule } from 'primeng/button';
@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    RxReactiveFormsModule,
    TableModule,
    InputTextModule,
    InputNumberModule,
    ButtonModule,
    AccordionModule,
    RouterModule.forRoot([{ path: "", component: ProductListComponent }])
  ],
  declarations: [AppComponent, TopBarComponent, ProductListComponent, AddressComponent, ProductsComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { Product } from './../../../shared/models/product';

import { FormArray, FormGroup } from '@angular/forms';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { RxFormBuilder } from '@rxweb/reactive-form-validators';
import { NGXLogger } from 'ngx-logger';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  @Input() userForm: FormGroup;
  @Output() updateProducts = new EventEmitter();

  get products() {
    return this.userForm.get('products') as FormArray;
  }
  constructor(
    private formBuilder: RxFormBuilder,
    private logger: NGXLogger,
  ) { }

  ngOnInit(): void {
    this.logger.debug('ProductsComponent init');
  }

  addProduct() {
    this.products.push(this.formBuilder.formGroup(Product));

  }

  removeProduct(index: number) {
    this.products.removeAt(index);
  }

  submitForm() {
    console.log(this.userForm.value);
    this.updateProducts.emit();
  }

  trackByFn(index, row) {
    return index;
  }

}

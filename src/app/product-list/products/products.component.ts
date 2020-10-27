import { User } from './../../models/user';
import { Product } from './../../models/product';
import { FormArray, FormGroup } from '@angular/forms';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { RxFormBuilder } from '@rxweb/reactive-form-validators';

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
    private formBuilder: RxFormBuilder
  ) { }

  ngOnInit(): void {
    console.log(this.products);
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

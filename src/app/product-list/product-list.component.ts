import { Component, OnInit } from "@angular/core";
import { FormArray, FormGroup } from "@angular/forms";
import { RxFormBuilder } from "@rxweb/reactive-form-validators";
import { products } from "../products";
import { user } from "../user";
import { User } from "../models/user";
import { Product } from "../models/product";
import { Address } from "../models/address";

@Component({
  selector: "app-product-list",
  templateUrl: "./product-list.component.html",
  styleUrls: ["./product-list.component.css"]
})
export class ProductListComponent implements OnInit {
  userForm: FormGroup;

  products = products;
  user: User;

  constructor(private formBuilder: RxFormBuilder) {}

  ngOnInit(): void {
    const addressData = {
      address: "Rue Blanchard",
      postCode: 92250,
      country: "France"
    };

    const product1 = {
      name: "Phone XL",
      price: 799,
      description: "A large phone with one of the best screens"
    };

    const product2 = {
      name: "Phone Mini",
      price: 699,
      description: "A great phone with one of the best cameras"
    };

    const product3 = {
      name: "Phone Standard",
      price: 299,
      description: ""
    };

    const products: Array<Product> = [
      new Product(product1),
      new Product(product2)
    ];

    const address = new Address(addressData);

    const userData = {
      name: "Totoro",
      address: address,
      products: products
    };

    // mock user service
    //this.user = user;

    this.user = new User(userData);

    this.userForm = this.formBuilder.formGroup(User, this.user);

    console.log("UserForm Value: ", this.userForm.value);
  }

  addProduct() {
    const products = this.userForm.controls.products as FormArray;
    products.push(this.formBuilder.formGroup(Product));
  }

  removeProduct(index: number) {
    const products = this.userForm.controls.products as FormArray;
    products.removeAt(index);
  }
}

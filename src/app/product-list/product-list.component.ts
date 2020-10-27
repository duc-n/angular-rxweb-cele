import { Component, OnInit } from "@angular/core";
import { FormArray } from "@angular/forms";
import { RxFormBuilder, RxFormGroup } from "@rxweb/reactive-form-validators";
import { userJson } from "../user";
import { User } from "../models/user";
import { Product } from "../models/product";
import { Address } from "../models/address";
import { plainToClass } from 'class-transformer';

@Component({
  selector: "app-product-list",
  templateUrl: "./product-list.component.html",
  styleUrls: ["./product-list.component.css"]
})
export class ProductListComponent implements OnInit {
  userForm: RxFormGroup;
  user: User;

  constructor(private formBuilder: RxFormBuilder) { }

  ngOnInit(): void {
    const addressData = {
      address: "Rue Blanchard",
      postCode: 92250,
      country: "France"
    };

    const product1 = {
      name: "Phone XL",
      price: 1799,
      description: "A large phone with one of the best screens"
    };

    const product2 = {
      name: "Phone Mini",
      price: 1699,
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

    this.user = new User(userData);

    // mock user service
    //this.user = plainToClass(User, userJson);

    console.log("User Value: ", this.user);
    this.userForm = this.formBuilder.formGroup(this.user) as RxFormGroup;

    //this.userForm.patchModelValue(this.user);
    console.log("UserForm Value: ", this.userForm.value);
  }


  udpateProducts() {
    console.log('Update product');
    this.user = plainToClass(User, userJson);
    this.userForm = this.formBuilder.formGroup(this.user) as RxFormGroup;
  }

}

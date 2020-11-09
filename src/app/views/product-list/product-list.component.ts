import { UserService } from './../../shared/services/user.service';
import { FormsService } from './../../shared/services/forms.service';
import { Product } from './../../shared/models/product';
import { User } from './../../shared/models/user';
import { Address } from './../../shared/models/address';
import { Component, OnDestroy, OnInit } from "@angular/core";
import { RxFormBuilder, RxFormGroup } from "@rxweb/reactive-form-validators";
import { userJson } from "../../user";
import { NGXLogger } from 'ngx-logger';
import { plainToClass } from 'class-transformer';
import { Scavenger } from '@wishtack/rx-scavenger';

@Component({
  selector: "app-product-list",
  templateUrl: "./product-list.component.html",
  styleUrls: ["./product-list.component.css"]
})
export class ProductListComponent implements OnInit, OnDestroy {
  private _scavenger = new Scavenger(this);

  userForm: RxFormGroup;
  user: User;


  constructor(
    private logger: NGXLogger,
    private formBuilder: RxFormBuilder,
    private formsService: FormsService,
    private userService: UserService) { }


  ngOnInit(): void {

    this.logger.debug('ProductListComponent init');

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
      id: "id02",
      name: "Totoro",
      address: address,
      products: products
    };

    this.user = new User(userData);

    // mock user service
    //this.user = plainToClass(User, userJson);

    this.logger.debug('ProductListComponent User Value:', this.user);

    this.userForm = this.formBuilder.formGroup(this.user) as RxFormGroup;

    //this.userForm.patchModelValue(this.user);
    this.logger.debug('ProductListComponent UserForm Value:', this.userForm.value);

    this.formsService.getUserFormSubject().pipe(this._scavenger.collect()).subscribe(form => {
      this.logger.debug('ProductListComponent - User Form Subject updated : ', form);
    });

    this.formsService.getUserFormBehaviorSubject().pipe(this._scavenger.collect()).subscribe(form => {
      this.logger.debug('ProductListComponent - User Form BehaviorSubject updated : ', form);
    });

    const userList = this.userService.list();

    userList.subscribe(users => {
      console.log(users);
    });

  }

  udpateProducts() {
    this.logger.debug('ProductListComponent Update Product');

    this.user = plainToClass(User, userJson);
    this.userForm = this.formBuilder.formGroup(this.user) as RxFormGroup;

    //Share the userForm to other module
    this.formsService.setUserFormSubject(this.userForm);
    this.formsService.setUserFormBehaviorSubject(this.userForm);

    this.userService.add(this.userForm.value);
  }

  ngOnDestroy(): void {
    //rx-scavenger will be injected here to unsubcribe observables
  }

}

import {
  propArray,
  propObject,
  required,
  disable,
  prop
} from "@rxweb/reactive-form-validators";
import { AbstractControl } from "@angular/forms";
import { Address } from "./address";
import { Product } from "./product";
export class User {
  @required()
  name: string = null;

  @disable({
    conditionalExpression: function(control: AbstractControl) {
      return this.name === "";
    }
  })
  @prop()
  middleName: string = null;

  @propObject()
  address: Address = null;

  @propArray()
  products: Array<Product> = null;

  public constructor(init?: Partial<User>) {
    Object.assign(this, init);
  }
}

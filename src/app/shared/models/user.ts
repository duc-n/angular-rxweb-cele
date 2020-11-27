import { IBaseEntity } from './iBaseEntity';
import {
  propArray,
  propObject,
  required,
  disable,
  prop
} from "@rxweb/reactive-form-validators";
import { AbstractControl } from "@angular/forms";
import { Address, IAddress } from "./address";
import { IProduct, Product } from "./product";
import { Type } from 'class-transformer/decorators';


export interface IUser extends IBaseEntity {
  name?: string;
  middleName?: string;
  adress?: IAddress;
  product?: IProduct[];
}


export class User implements IUser {

  @prop()
  id?: string;

  @required()
  name: string = null;

  @disable({
    conditionalExpression: function (control: AbstractControl) {
      return this.name === "";
    }
  })
  @prop()
  middleName: string = null;

  @propObject()
  @Type(() => Address)
  address: Address = null;

  @propArray()
  @Type(() => Product)
  products: Array<Product> = null;

  public constructor(init?: Partial<User>) {
    Object.assign(this, init);
  }
}

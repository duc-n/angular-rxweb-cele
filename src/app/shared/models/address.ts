import { AbstractControl } from "@angular/forms";
import { disable, prop, required } from "@rxweb/reactive-form-validators";

export interface IAddress {
  address: string;
  postCode: number;
  country: string;
}

export class Address implements IAddress {
  @required()
  address: string = null;

  @disable({
    conditionalExpression: function (control: AbstractControl) {
      return this.address === "";
    }
  })
  @prop()
  postCode: number = null;

  @prop()
  country: string = null;

  public constructor(init?: Partial<Address>) {
    Object.assign(this, init);
  }
}

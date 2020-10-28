import { AbstractControl } from "@angular/forms";
import { disable, prop, required } from "@rxweb/reactive-form-validators";
export class Address {
  @required()
  address: string = null;

  @disable({
    conditionalExpression: function(control: AbstractControl) {
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

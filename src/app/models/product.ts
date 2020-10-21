import { unique, required, prop } from "@rxweb/reactive-form-validators";
import { AbstractControl } from "@angular/forms";
export class Product {
  @unique()
  name: string = null;

  @required()
  price: number = null;

  @prop()
  description: string = null;

  public constructor(init?: Partial<Product>) {
    Object.assign(this, init);
  }
}

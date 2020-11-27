import { unique, required, prop } from "@rxweb/reactive-form-validators";

export interface IProduct {
  name: string;
  price: number;
  description?: string;
}

export class Product implements IProduct {
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

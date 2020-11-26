export interface IAddress {
  address: string;
  postCode: number;
  country: string;
}

export interface IProduct {
  name: string;
  price: number;
  description?: string;
}

export interface IUser {
  id: number | string;
  name?: string;
  middleName?: string;
  adress?: IAddress;
  product?: IProduct[];
}

export function createUser(params: Partial<IUser>) {
  return {

  } as IUser;
}

export type Product = {
  id: number;
  imageURL: string;
  name: string;
  type: string;
  price: number;
  currency: string;
  color: string;
  gender: string;
  quantity: number;
};

export type CartItem = {
  id: number;
  imageURL: string;
  name: string;
  price: number;
  quantity: number;
  quantityInCart: number;
};

export type Filters = {
  colors: string[];
  gender: string[];
  type: string[];
  price: string[];
};

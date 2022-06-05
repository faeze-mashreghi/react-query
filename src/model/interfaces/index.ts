export interface SelectOption {
  value: string;
  label: string;
}
export interface Order {
  firstName?: string;
  lastName?: string;
  email?: string;
  mobile?: string;
  productId?: string;
}

export interface Product {
  createdAt?: string;
  name?: string;
  id?: string;
}

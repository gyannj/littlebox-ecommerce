export interface inventory {
  gs1sk: string;
  gs1pk: string;
  stock: number;
  vendor: string;
  name: string;
  sellingPrice: number;
  categoryId: string;
  category: string;
  sk: string;
  image_url: string;
  price: number;
  pk: string;
  productId: string;
}

export interface cart_item {
  productId: string;
  categoryId: string;
  quantity: number;
  price: number;
}
export interface cart_product {
  gs1sk: string;
  gs1pk: string;
  stock: number;
  vendor: string;
  name: string;
  sellingPrice: number;
  categoryId: string;
  category: string;
  sk: string;
  image_url: string;
  price: number;
  pk: string;
  productId: string;
  quantity: number;
}

export interface order{
  "category_id": string,
   "img": string,
   "product_id": string,
   "product_name": string,
   "quantity": number
}

export interface createOrderParams {
  created_at: string; // Date and time of order creation
  orderId: string; // Unique order ID
  order_items: {
    quantity: number;
    img: string;
    product_name: string;
    product_id: string;
    category_id: string;
  }[];
  billing_address: {
    address: string;
    pincode: number;
    state: string;
    city: string;
  };
  shipping_address: {
    address: string;
    pincode: number;
    state: string;
    city: string;
  };
  first_name: string; // First name of the customer
  last_name: string; // Last name of the customer
  price: number; // Total price of the order
  shipping_charges: number;
}

import { Product } from './product';

const cart: Product[] = [];

export const addToCart = (product: Product) => { //Named Export
  cart.push(product); 
};

export const getCart = () => {
  return cart;
};

// Default Export ทั้ง Cart
export default cart;

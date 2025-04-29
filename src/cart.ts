import { Product } from './product';

const cart: Product[] = [];

export const addToCart = (product: Product) => { //Named Export addToCart function: ใช้เพิ่มสินค้าลงในตะกร้า
  cart.push(product); 
};

export const getCart = () => { 
  return cart.slice(0, 1); // คืนค่าแค่สินค้าชิ้นแรก
};

// Default Export ทั้ง Cart
export default cart; //ตะกร้าสินค้าจะถูก export เป็นค่า default เพื่อให้สามารถนำไปใช้

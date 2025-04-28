//Export แบบ Named Export

// สินค้า 1 ชิ้น = ชื่อและราคา
export interface Product {
    name: string;
    price: number;
  }
  
  // ฟังก์ชันสร้างสินค้า
  export const createProduct = (name: string, price: number): Product => {
    return { name, price };
  };
  
  // ฟังก์ชันลดราคา
  export const discountProduct = (product: Product, discountPercent: number): Product => {
    const discountedPrice = product.price * (1 - discountPercent / 100);
    return { ...product, price: discountedPrice };
  };
  
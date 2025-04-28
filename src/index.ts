// 1. Import แบบ Named Import
import { createProduct, discountProduct } from './product';

// 2. Import แบบ Rename ชื่อ
import { addToCart as addItem, getCart as viewCart } from './cart';

// 3. Import Default
import cart from './cart';

// 4. Import เป็น Object
import * as ProductUtils from './product';


// เริ่มใช้งาน

const p1 = createProduct('Keyboard', 1000);
const p2 = ProductUtils.createProduct('Mouse', 500);

const discountedP2 = discountProduct(p2, 10); // ลด 10%

addItem(p1);
addItem(discountedP2);

console.log('สินค้าในตะกร้า:');
console.log(viewCart());

console.log('ข้อมูลตะกร้าโดยตรง:');
console.log(cart);
console.log('=====================================================================');
//หัวข้อเรื่อง funtion
    //ฟังก์ชันมีค่าเริ่มต้น (Default Parameters)
function greet(name: string = "Guest"): void {
    console.log(`Hello, ${name}!`);
  }
  
  greet();          // จะแสดง "Hello, Guest!"
  greet("John");    // จะแสดง "Hello, John!"
  console.log('=====================================================================');
  //ฟังก์ชัน greet มีพารามิเตอร์ name ที่มีค่าเริ่มต้นเป็น "Guest"ถ้าเรียก greet() โดยไม่ส่งอาร์กิวเมนต์เข้าไป ฟังก์ชันจะใช้ค่าเริ่มต้น "Guest"

    //ฟังก์ชันที่รองรับค่าหลายประเภท (Union Type)
    function printValue(value: string | number): void {
        console.log(value);
      }
      
      printValue("Hello");  // จะแสดง "Hello"
      printValue(123);      // จะแสดง "123"
      console.log('=====================================================================');
//ฟังก์ชัน printValue สามารถรับพารามิเตอร์ที่เป็น string หรือ number ฟังก์ชันนี้สามารถทำงานกับทั้งตัวเลขและข้อความได้   

    //การใช้ Arrow Function
    const add = (a: number, b: number): number => {
        return a + b;
      };
      
      console.log(add(3, 4)); // ผลลัพธ์ 7
      console.log('=====================================================================');
//ฟังก์ชัน add ถูกเขียนในรูปแบบของ arrow function เป็นการประกาศฟังก์ชันที่รับพารามิเตอร์ a และ b และคืนค่าผลลัพธ์เป็นผลบวกของทั้งสองตัว



//OOP
      //1. Encapsulation (การห่อหุ้มข้อมูล)
      class Car {
        private brand: string; // private: เข้าถึงได้เฉพาะในคลาสนี้
        private model: string;
      
        constructor(brand: string, model: string) {
          this.brand = brand;
          this.model = model;
        }
      
        public displayInfo(): void {
          console.log(`Brand: ${this.brand}, Model: ${this.model}`);
        }
      }
      
      const myCar = new Car("Toyota", "Camry");
      myCar.displayInfo();  
      console.log('=====================================================================');
      // สามารถเรียกใช้ฟังก์ชัน displayInfo() ได้
      
      // myCar.brand = "Honda"; // Error: 'brand' is private and only accessible within class 'Car'
      
      //2. Inheritance (การสืบทอด)
      class Animal {
        protected name: string;
      
        constructor(name: string) {
          this.name = name;
        }
      
        public speak(): void {
          console.log(`${this.name} makes a sound.`);
        }
      }
      
      class Dog extends Animal {
        constructor(name: string) {
          super(name); // เรียกใช้ constructor ของคลาส Animal
        }
      
        public speak(): void {
          console.log(`${this.name} barks.`);
        }
      }
      
      const dog = new Dog("Buddy");
      dog.speak();  // "Buddy barks."
      console.log('=====================================================================');
      
      //3.Polymorphism (การมีหลายรูปแบบ)
      class animal {
        public speak(): void {
          console.log("Animal makes a sound.");
        }
      }
      
      class Wolf extends animal {
        public speak(): void {
          console.log("wolf barks.");
        }
      }
      
      class Cat extends animal {
        public speak(): void {
          console.log("Cat meows.");
        }
      }
      
      function makeSound(animal: animal): void {
        animal.speak();  // Polymorphism: จะเรียก speak() ของชนิดที่ถูกส่งเข้าไป
      }
      
      const wolf = new Wolf();
      const cat = new Cat();
      
      makeSound(wolf);  // "Wolf barks."
      makeSound(cat);  // "Cat meows."
      console.log('=====================================================================');
      
      //4. Abstraction (การทำให้เป็นนามธรรม)
      abstract class Shape {
        // เมธอด abstract
        abstract area(): number; // ต้อง implement ในคลาสที่สืบทอดจาก Shape
      
        printArea(): void {
          console.log(`Area: ${this.area()}`);
        }
      }
      
      class Rectangle extends Shape {
        constructor(private width: number, private height: number) {
          super();  // เรียก constructor ของคลาส Shape
        }
      
        // การ implement เมธอด area() ที่ถูกกำหนดในคลาส Shape
        public area(): number {
          return this.width * this.height;
        }
      }
      
      class Circle extends Shape {
        constructor(private radius: number) {
          super();
        }
      
        // การ implement เมธอด area() สำหรับวงกลม
        public area(): number {
          return Math.PI * Math.pow(this.radius, 2);
        }
      }
      
      const rectangle = new Rectangle(5, 10);
      rectangle.printArea();  // "Area: 50"
      
      const circle = new Circle(3);
      circle.printArea();  // "Area: 28.274333882308138"
      console.log('=====================================================================');


//Generic ใน TypeScript
      //1.Generic ในฟังก์ชัน (Function Generics) 
function identity<T>(arg: T): T {
  return arg;
}

console.log(identity(5));        // output: 5
console.log(identity("Hello"));  // output: Hello
console.log(identity(true));     // output: true
console.log('=====================================================================');

    //2. Generic ในคลาส (Class Generics)
    class Box<T> {
        private value: T;
      
        constructor(value: T) {
          this.value = value;
        }
      
        getValue(): T {
          return this.value;
        }
      }
      
      const stringBox = new Box("Hello");
      console.log(stringBox.getValue()); // "Hello"
      
      const numberBox = new Box(123);
      console.log(numberBox.getValue()); // 123
      console.log('=====================================================================');

      //.3. Generic ในอินเทอร์เฟซ (Interface Generics)
      interface Pair<T, U> {
        first: T;
        second: U;
      }
      
      const stringNumberPair: Pair<string, number> = { first: "Hello", second: 5 };
      const booleanNumberPair: Pair<boolean, number> = { first: true, second: 10 };
      
      console.log(stringNumberPair);
      console.log(booleanNumberPair);
      console.log('=====================================================================');
      
      //.4. Generic Constraints (ข้อจำกัดของ Generics)
      function merge<T extends object, U extends object>(obj1: T, obj2: U): T & U {
        return { ...obj1, ...obj2 };
      }
      
      const mergedObj = merge({ name: "John" }, { age: 30 });
      console.log(mergedObj);  // { name: "John", age: 30 }
      console.log('=====================================================================');

      //5.Using Multiple Generics
      function pair<T, U>(first: T, second: U): [T, U] {
        return [first, second];
      }
      
      const result = pair("Hello", 123);
      console.log(result);  // ["Hello", 123]
console.log('=====================================================================');

      //6. Default Generic Types
      function wrap<T = string>(value: T): T {
        return value;
      }
      
      console.log(wrap("Hello"));   // "Hello"
      console.log(wrap(123));       // 123
      console.log('=====================================================================');


      //7.ใช้ Generic กับ Utility Types
function updateObject<T>(obj: T, updates: Partial<T>): T {
    return { ...obj, ...updates };
  }
  
  const user = { name: "John", age: 25 };
  const updatedUser = updateObject(user, { age: 26 });
  console.log(updatedUser);  // { name: "John", age: 26 }
  console.log('=====================================================================');

  // ใช้ Generic กับ Record
  type Product = { id: number; name: string };
  type ProductMap = Record<string, Product>;
  
  const products: ProductMap = {
    p1: { id: 1, name: "Product 1" },
    p2: { id: 2, name: "Product 2" }
  };
  console.log(products);
console.log('=====================================================================');


//เปรียบเทียบ Generic (T) vs any vs unknown ใน TypeScript

  //1. any
  let value: any = 10;
value = "Hello";  // ไม่มีปัญหา
value = true;     // ไม่มีปัญหา

console.log(value.someProperty); // ไม่มีการแจ้งเตือนจาก TypeScript
console.log('=====================================================================');

  //2. unknown
  let value1: unknown = 10;
  value1 = "Hello";  // ไม่มีปัญหา
  value1 = true;     // ไม่มีปัญหา
  
  // ต้องตรวจสอบประเภทก่อนการใช้งาน
  if (typeof value1 === "string") {
    console.log(value1.length);  // ข้อความจะถูกตรวจสอบว่าเป็น string ก่อน
  } else {
    console.log("Not a string");
  }
  console.log('=====================================================================');

  //3.Generic (T)
  function identity1<T>(value2: T): T {
    return value2;
  }
  
  let numberValue2 = identity1(10);   // number
  let stringValue2 = identity1("Hello");  // string
  console.log('=====================================================================');
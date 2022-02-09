// 21. Declaration Merging

// 19. Type Alias

// type Alias1 = string | string[] | null

// 18. Intersection Type

// interface IA {
//   a: number;
// }

// interface IB {
//   b: number;
// }

// interface IC {
//   c: number;
// }

// function X(obj: IA & IB & IC) {
//   return obj.a + obj.b + obj.c;
// }

// function combine<A extends object, B extends object>(objA: A, objB: B): A & B {
//   return { ...objA, ...objB };
// }

// const objA = { a: 1 };
// const objB = { b: 1 };
// const resultObj = combine(objA, objB);

// 17. Union Type

// function someFn(myArgument: number | string | boolean) {
//   if (typeof myArgument === "string") {
//     let x = myArgument.toUpperCase();
//   } else if (typeof myArgument ==='number') {
//     myArgument.toFixed();
//   }
// }

// 16 Generics
// // Generic Functions
// function genericFunction<T>(x: T): T {
//   return x;
// }

// const genericArrowFunction = <T>(x: T): T => x;

// // Generic Interfaces
// interface GenericInterface<T> {
//   (a: T): T;
//   someProp: T;
// }

// interface GenericInterface<T> {
//   <U>(a: U): U;
//   someProp: T;
// }

// // Generic Classes
// class GenericClass<P> {
//   constructor(public props: P) {}

//   getProps(): P {
//     return this.props;
//   }
// }
// interface Expirable {
//   expiryDate: Date;
// }

// interface ChocolateCake extends Expirable {}
// interface VanillaCake extends Expirable {}

// const chocoCakes: ChocolateCake[] = [{ expiryDate: new Date() }];
// const vanillaCakes: VanillaCake[] = [{ expiryDate: new Date() }];

// interface GetExpiredItems {
//   <Item extends Expirable>(items: Array<Item>): Array<Item>;
// }

// const getExpiredItems: GetExpiredItems = (items) => {
//   const currentDate = new Date().getTime();
//   return items.filter((item) => item.expiryDate.getDate() < currentDate);
// };

// const expiredChocoCake = getExpiredItems(chocoCakes);
// const expiredVanillaCake = getExpiredItems(vanillaCakes);

// interface ShoppingCArt<ItemId, Item> {
//   items: Array<Item>;
//   addItem(item: Item): void;
//   getItemById(id: ItemId): Item | undefined;
// }

// interface Item {
//   id: number;
//   price: number;
// }

// const cart: ShoppingCArt<number, Item> = {
//   items: [],
//   addItem(item) {
//     this.items.push(item);
//   },
//   getItemById(id) {
//     return this.items.find((item) => item.id === id);
//   },
// };

// 15. Describing Classes Using Interface
// interface Animal {
//   name: string;
//   group: string | undefined;
//   setGroup(group: string): void;
// }

// class Cat implements Animal {
//   name: string;
//   group: string | undefined;
//   constructor(name: string) {
//     this.name = name;
//   }
//   setGroup(group: string) {
//     this.group = group;
//   }
// }

// class Dog implements Animal {
//   name: string;
//   group: string | undefined;
//   constructor(name: string) {
//     this.name = name;
//   }
//   setGroup(group: string) {
//     this.group = group;
//   }
//   bark() {}
// }

// interface AnimalConstructor<T> {
//   new (name: string): T;
// }

// function initializeAnimal<T extends Animal>(
//   Animal: AnimalConstructor<T>,
//   name: string
// ) {
//   const animal = new Animal(name);
//   animal.setGroup("mammals");
//   return animal;
// }

// const cat = initializeAnimal(Cat, "Felix");
// const dog = initializeAnimal(Dog, "Felix");

// dog.bark();

// function multiply(a: number, b: number): number {
//   return a * b;
// }

// const a = 5;
// const b = 2;

// console.log(`${a} * ${b} = ${multiply(a, b)}`);

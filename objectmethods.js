//Object assign()

// const target = { a: 1, b: 2 };
// const source = { b: 4, c: 5 };
// const returnedTarget = Object.assign(target, source);
// console.log(target);
// console.log(returnedTarget === target);

//Object create()

// var person = {
//     printIntroduction: function () {
//         console.log(`My name is ${this.name}. My age ${this.age}`);
//     }
// };
// var me = Object.create(person);
// me.name = 'Devansh';
// me.age = 23;
// me.printIntroduction();

//Object defineProperties()

// const object1 = {};
// Object.defineProperties(object1, {
//   user1: {
//     value: 42,
//   },
//   user2: {
//     value: 'Devansh',
//   }
// });
// console.log(object1.user1);
// console.log(object1.user2);

//Object entries()

// const object1 = {
//     name: 'Devansh',
//     age: 23
// };

// for (const [key, value] of Object.entries(object1)) {
//     console.log(`${key}: ${value}`);
// }

//Object freeze()

// const obj = {
//     prop: 42
// };
// Object.freeze(obj);
// obj.prop = 33;
// console.log(obj.prop);

//Object fromEntries()

// const data = new Map([
//     ['a', 'b'],
//     ['c', 'd']
// ]);
// const obj = Object.fromEntries(data);
// console.log(obj);

//Object getOwnPropertyDescriptor()

// const object1 = {
//     name: 'Devansh'
// };
// const descriptor1 = Object.getOwnPropertyDescriptor(object1, 'name');
// console.log(descriptor1.value);

//Object getOwnPropertyDescriptors()

// const object1 = {
//     name: 'Devansh',
//     age: 23
// };
// const descriptors1 = Object.getOwnPropertyDescriptors(object1);
// console.log(descriptors1.name.value);
// console.log(descriptors1.age.value);

//Object assign()

// const object1 = {
//     a: 1,
//     b: 2,
//     c: 3,
//     name: 'Devansh'
// };

// console.log(Object.getOwnPropertyNames(object1));

//Object hasOwn()

// const object1 = {
//     prop: 1,
//     a: 2
// };
// console.log(Object.hasOwn(object1, 'prop'));
// console.log(Object.hasOwn(object1, 'a'));
// console.log(Object.hasOwn(object1, 'undeclaredPropertyValue'));

//Object toString()

// function Dog(name) {
//     this.name = name;
// }
// const dog1 = new Dog('Gabby');
// Dog.prototype.toString = function dogToString() {
//     return `${this.name}`;
// };
// console.log(dog1.toString());

//Object values()

// const object1 = {
//     a: 'Devansh',
//     b: 23,
//     c: true
// };
// console.log(Object.values(object1));

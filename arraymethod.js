//method at()

// const array1 = [5, 12, 8, 130, 44];
// let index = 2;
// console.log(`Using an index of ${index} the item returned is ${array1.at(index)}`);
// index = -1;
// console.log(`Using an index of ${index} item returned is ${array1.at(index)}`);

//method concat()

// const array2 = ['a', 'b', 'c'];
// const array3 = ['d', 'e', 'f'];
// const array4 = array2.concat(array3);
// console.log(array4);

//method copyWithin()

// const array5 = ['a', 'b', 'c', 'd', 'e'];
// console.log(array5.copyWithin(0, 3, 4));
// console.log(array5.copyWithin(1, 3));

//method entries()

// const array6 = ['a', 'b', 'c'];
// const iterator1 = array6.entries();
// console.log(iterator1.next().value);
// console.log(iterator1.next().value);

//method every()

// const isBelowThreshold = (currentValue) => currentValue < 40;
// const array7 = [1, 30, 39, 29, 10, 13];
// console.log(array7.every(isBelowThreshold));

//method fill()

// const array8 = [1, 2, 3, 4];
// console.log(array8.fill(0, 2, 4));
// console.log(array8.fill(5, 1));
// console.log(array8.fill(6));

//method filter()

// const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];
// const result = words.filter(word => word.length > 6);
// console.log(result);

//method find()

// const array1 = [5, 12, 8, 130, 44];
// const found = array1.find(element => element > 10);
// console.log(found);

//method forEach()

// const array1 = ['a', 'b', 'c'];
// array1.forEach(element => console.log(element));

//method indexOf()

// const beasts = ['ant', 'bison', 'camel', 'duck', 'bison'];
// console.log(beasts.indexOf('bison'));
// console.log(beasts.indexOf('bison', 2));
// console.log(beasts.indexOf('giraffe'));

//method pop()

// const plants = ['broccoli', 'cauliflower', 'cabbage', 'kale', 'tomato'];
// console.log(plants.pop());
// console.log(plants);
// plants.pop();
// console.log(plants);

//method push()

// const animals = ['pigs', 'goats', 'sheep'];
// const count = animals.push('cows');
// console.log(count);
// console.log(animals);
// animals.push('chickens', 'cats', 'dogs');
// console.log(animals);

//method reduceRight()

// const array1 = [[0, 1], [2, 3], [4, 5]];
// const result = array1.reduceRight((accumulator, currentValue) => accumulator.concat(currentValue));
// console.log(result);

//method reverse()

// const array1 = ['one', 'two', 'three'];
// console.log('array1:', array1);
// const reversed = array1.reverse();
// console.log('reversed:', reversed);
// console.log('array1:', array1);

//method slice()

// const animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];
// console.log(animals.slice(2));
// console.log(animals.slice(2, 4));
// console.log(animals.slice(1, 5));
// console.log(animals.slice(-2));
// console.log(animals.slice(2, -1));
// console.log(animals.slice());

//method sort()

// const months = ['March', 'Jan', 'Feb', 'Dec'];
// months.sort();
// console.log(months);
// const array1 = [1, 30, 4, 21, 100000];
// array1.sort();
// console.log(array1);

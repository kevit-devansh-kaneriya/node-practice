// let myArray = [1,2,3,4,5,6];
// console.log(myArray.length)

// let firstItem = myArray[0];
// let middleItem = myArray[Math.floor(myArray.length / 2)];
// let lastItem = myArray[myArray.length - 1];

// console.log('First Item:', firstItem);
// console.log('Middle Item:', middleItem);
// console.log('Last Item:', lastItem);

// let myArray = [1 , 'a' , 3 , 4.4 , 'b' , 6];

// let itCompanies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon'];
// console.log(itCompanies)
// console.log(itCompanies.length)

// let firstItem = itCompanies[0];
// let middleItem = itCompanies[Math.floor(itCompanies.length / 2)];
// let lastItem = itCompanies[itCompanies.length - 1];

// console.log('First Item:', firstItem);
// console.log('Middle Item:', middleItem);
// console.log('Last Item:', lastItem);

// for (let i = 0; i < itCompanies.length; i++) {
//     console.log(itCompanies[i]);
// }

// for (let i = 0; i < itCompanies.length; i++) {
//     console.log(itCompanies[i].toUpperCase());
// }

// let sentence = itCompanies.join(', ') + ' are IT companies.';
// console.log(sentence);


// const result = itCompanies.filter(checkAdult);
// function checkAdult(itCompanies) {
//   if(itCompanies == 'Amazon'){
//     console.log(itCompanies);
//   }else{
//     console.log("Company not found");
//   }
// }

// let itCompanies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon'];
// function hasMoreThanOneO(company) {
//   let count = 0;
//   for (let i = 0; i < company.length; i++) {
//     if (company[i] === 'o') {
//       count++;
//       if (count > 1) {
//         return true;
//       }
//     }
//   }
//   return false;
// }

// let filteredCompanies = [];
// for (let i = 0; i < itCompanies.length; i++) {
//   if (!hasMoreThanOneO(itCompanies[i])) {
//     filteredCompanies.push(itCompanies[i]);
//   }
// }

// console.log(filteredCompanies);

let itCompanies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon'];
// console.log(itCompanies.sort())

// var reversedNum = [];
// for(let i =  itCompanies.length -1; i >= 0; i--) {
//     reversedNum.push(itCompanies[i]);
// }
// console.log(reversedNum)

// console.log(itCompanies.reverse())


// console.log(itCompanies.slice(0,3))
// console.log(itCompanies.slice(-3))


// let startIndex = Math.floor(itCompanies.length / 2) - 1;
// let endIndex = Math.ceil(itCompanies.length / 2) + 1;
// let middleCompanies = itCompanies.slice(startIndex, endIndex);
// console.log(middleCompanies)


console.log(itCompanies.shift())

let startIndex = Math.floor(itCompanies.length / 2) - 1;
let endIndex = Math.ceil(itCompanies.length / 2) + 1;
itCompanies.splice(startIndex, endIndex - startIndex);
console.log(itCompanies); 


console.log(itCompanies.pop()); 

itCompanies = [];
console.log(itCompanies); 
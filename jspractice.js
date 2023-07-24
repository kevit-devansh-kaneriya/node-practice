// var company = "Coding Academy";
// console.log(company);
// console.log(company.length)
// console.log(company.toUpperCase())
// console.log(company.toLowerCase())
// console.log(company.substring(0, 6))

// const sentence = 'You cannot end a sentence with because because because is a conjunction';
// const firstIndex = sentence.indexOf('because');
// const secondIndex = sentence.indexOf('because', firstIndex + 1);
// const result = sentence.substr(0, firstIndex) + sentence.substr(secondIndex + 'because'.length);
// console.log(result);

// console.log(company.includes("world"))
// console.log(company.split(" "))

// var str1 = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon';
// console.log(str1.split(","))

// console.log(company.replace("Coding","Microsoft"))
// console.log(str1.charAt(10))
// console.log(company.charCodeAt(4))
// console.log(company.indexOf("n"))
// console.log(company.lastIndexOf("e"))
// const sentence = '    You cannot end a sentence with because because because is a conjunction   ';
// console.log(sentence.indexOf("because"))
// console.log(sentence.lastIndexOf("because"))
// console.log(sentence.search("end"))
// console.log(sentence.trim())
// console.log(company.startsWith("Coding"))
// console.log(company.endsWith("Coding"))
// console.log(company.match("C"))

// const sentence = 'You cannot end a sentence with because because because is a conjunction';
// const wordToFind = 'because';
// const regex = new RegExp(wordToFind, 'g');
// const occurrences = sentence.match(regex);
// console.log(occurrences.length);

// var company = "Coding Academy";
// const string1 = 'Coding';
// const string2 = 'Academy';
// console.log(string1.concat(' ', string2));
// console.log(company.repeat(5));

// var amt1=5000 * 12;
// var amt2=10000;
// var amt3=15000 * 12;
// console.log(amt1 + amt2 + amt3 )

// const x = 10;
// const y = 5;
// const isTrue = x > y; 
// console.log(isTrue); 

// const isTrue1 = 4 > 3; 
// console.log(isTrue1); 
// const isTrue2 = 4 >= 3; 
// console.log(isTrue2); 
// const isTrue3 = 4 < 3; 
// console.log(isTrue3); 
// const isTrue4 = 4 <= 3; 
// console.log(isTrue4); 
// const isTrue5 = 4 == 4; 
// console.log(isTrue5); 
// const isTrue6 = 4 === 4; 
// console.log(isTrue6); 
// const isTrue7 = 4 != 4; 
// console.log(isTrue7); 
// const isTrue8 = 4 !== 4; 
// console.log(isTrue8); 
// const isTrue9 = 4 != '4'; 
// console.log(isTrue9); 
// const isTrue10 = 4 == '4'; 
// console.log(isTrue10); 
// const isTrue11 = 4 === '4'; 
// console.log(isTrue11); 


// const languagesData = [
//     { 'English': 25 },
//     { 'French': 45 },
//     { 'Arabic': 91 },
//     { 'Spanish': 24 },
//     { 'Russian': 9 },
//     { 'Portuguese': 9 },
//     { 'Dutch': 8 },
//     { 'German': 7 },
//     { 'Chinese': 5 },
//     { 'Swahili': 4 },
//     { 'Serbian': 4 },
// ];
// const sortedLanguages = languagesData.sort((a, b) => b[Object.keys(b)[0]] - a[Object.keys(a)[0]]);
// const top5SpokenLanguages = languagesData.slice(0, 5);
// console.log(top5SpokenLanguages);

// class Statistics {
//     constructor(sample) {
//         this.sample = sample;
//     }

//     count() {
//         return this.sample.length;
//     }

//     sum() {
//         return this.sample.reduce((total, age) => total + age, 0);
//     }

//     min() {
//         return Math.min(...this.sample);
//     }

//     max() {
//         return Math.max(...this.sample);
//     }

//     range() {
//         return this.max() - this.min();
//     }

//     mean() {
//         return this.sum() / this.count();
//     }

//     median() {
//         const sortedSample = this.sample.slice().sort((a, b) => a - b);
//         const middle = Math.floor(sortedSample.length / 2);

//         if (sortedSample.length % 2 === 0) {
//             return (sortedSample[middle - 1] + sortedSample[middle]) / 2;
//         } else {
//             return sortedSample[middle];
//         }
//     }

//     mode() {
//         const frequencyMap = {};
//         let maxFrequency = 0;
//         let modeValue;

//         for (const value of this.sample) {
//             frequencyMap[value] = (frequencyMap[value] || 0) + 1;
//             if (frequencyMap[value] > maxFrequency) {
//                 maxFrequency = frequencyMap[value];
//                 modeValue = value;
//             }
//         }

//         return { mode: modeValue, count: maxFrequency };
//     }

//     variance() {
//         const mean = this.mean();
//         const squaredDifferences = this.sample.map(age => Math.pow(age - mean, 2));
//         const sumOfSquaredDifferences = squaredDifferences.reduce((total, diff) => total + diff, 0);
//         return sumOfSquaredDifferences / this.count();
//     }

//     std() {
//         return Math.sqrt(this.variance());
//     }

//     freqDist() {
//         const frequencyMap = {};
//         for (const value of this.sample) {
//             frequencyMap[value] = (frequencyMap[value] || 0) + 1;
//         }
//         return Object.entries(frequencyMap).map(([value, count]) => [count, parseInt(value)]);
//     }
// }
// let ages = [31, 26, 34, 37, 27, 26, 32, 32, 26, 27, 27, 24, 32, 33, 27, 25, 26, 38, 37, 31, 34, 24, 33, 29, 26];
// const statistics = new Statistics(ages);
// console.log('Count:', statistics.count());
// console.log('Sum: ', statistics.sum());
// console.log('Min: ', statistics.min());
// console.log('Max: ', statistics.max());
// console.log('Range: ', statistics.range());
// console.log('Mean: ', statistics.mean());
// console.log('Median: ', statistics.median());
// console.log('Mode: ', statistics.mode());
// console.log('Variance: ', statistics.variance());
// console.log('Standard Deviation: ', statistics.std());
// console.log('Frequency Distribution: ', statistics.freqDist());


// function cleanAndCountWords(sentence) {
//     const cleanedSentence = sentence.replace(/([^\w ]|_)/g, '').toLowerCase();
//     const words = cleanedSentence.split(/\s+/);
//     const wordFrequency = {};
//     for (const word of words) {
//         wordFrequency[word] = (wordFrequency[word] || 0) + 1;
//     }
//     const sortedWordFrequency = Object.entries(wordFrequency).sort((a, b) => b[1] - a[1]);
//     return sortedWordFrequency.slice(0, 3).map(([word, count]) => ({ word, count }));
// }
// let sentence = `%I $am@% a %tea@cher%, &and& I lo%#ve %tea@ching%;. There $is nothing; &as& mo@re rewarding as educa@ting &and& @emp%o@wering peo@ple. ;I found tea@ching m%o@re interesting tha@n any other %jo@bs. %Do@es thi%s mo@tivate yo@u to be a tea@cher!?`
// const mostFrequentWords = cleanAndountWords(sentence);
// console.log(mostFrequentWords);

// function shuffle(array) {
//     const shuffledArray = array.slice();
//     for (let i = shuffledArray.length - 1; i > 0; i--) {
//         const j = Math.floor(Math.random() * (i + 1));
//         [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
//     }
//     return shuffledArray;
// }
// const inputArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const shuffledResult = shuffle(inputArray);
// console.log(shuffledResult);

import $ from 'jquery';
import sum from './utils/sum/sum';


console.log('Ready for coding');


console.log('Body jQuery node:', $('body'));
console.log('Body javascript node:', document.querySelector('body'));
console.log('2 + 3 =', sum(2, 3));








// Task 2
//Write a function that takes values as argument
//Return the type of value
const myFunction = (value: any) : string=>{
   return  typeof value;
}
console.log(myFunction(1)); //number
console.log(myFunction(false)); //boolean
console.log(myFunction({})); //object
console.log(myFunction(null)); //object
console.log(myFunction('string')); //string
console.log(myFunction(['array'])); //object




// Task 3
//Write a function that takes two values, say a and b, as arguments
//Return true if the two values are equal and of the same type
const setValue = (a, b): boolean =>{
   if  (a === b && typeof a === typeof b) {
       return true;
   }
   return false;
}
console.log(setValue(2, 3)); //false
console.log(setValue(3, 3)); //true
console.log(setValue(1, '1')); //false
console.log(setValue('10', '10')); //true




// Task 4
//Write a function that takes a string (a) and a number (n) as arguments
//Return the nth character of 'a'
const findCharacter = (a : string, n: number) :string =>{
   return  a[n-1];
};
console.log(findCharacter('abcd',1)); //a
console.log(findCharacter('zyxbwpl',5)); //w
console.log(findCharacter('gfedcba',3)); //e




// Task 5
//Write a function that takes a string (a) as argument
//Remove the first 3 characters of a
//Return the result
const remCharacters = (a : string) :string =>{
return a.slice(3);
}
console.log(remCharacters('abcdefg')); //defg
console.log(remCharacters('1234')); //4
console.log(remCharacters('fgedcba')); //dcba




// Task 6
//Write a function that takes a string as argument
//Extract the last 3 characters from the string
//Return the result
const extrCharacter = (a: string) :string=> {
   return a.substr(-3);
}
console.log(extrCharacter('abcdefg')); //efg
console.log(extrCharacter('1234')); //234
console.log(extrCharacter('fgedcba')); //cba




// Task 7
//Write a function that takes a string (a) as argument
//Get the first 3 characters of a
//Return the result
const firstCharacters = (a: string) :string{
   return a.slice(0, 3);
}
console.log(firstCharacters('abcdefg')); //abc
console.log(firstCharacters('1234')); //123
console.log(firstCharacters('fgedcba')); //fge


// PAGE 5
//Write a function that takes a string (a) as argument
//Extract the first half a
//Return the result
const extrFirstHalf = (a: string) :string =>{
   return a.slice(0, a.length/2);
}
console.log(extrFirstHalf('abcdefgh')); //abcd
console.log(extrFirstHalf('1234')); //12
console.log(extrFirstHalf('gedcba')); //ged

// task 9 
//Write a function that takes a string (a) as argument
//Remove the last 3 characters of a
//Return the result
const removeCharacters =(a: string) :string =>{
    return a.slice(0, -3)
}
console.log(removeCharacters('abcdefg')); //abcd
console.log(removeCharacters('1234')); //1
console.log(removeCharacters('fgedcba')) //fgeb


// Task 10 
//Write a function that takes two numbers (a and b) as argument
//Return b percent of a
const bProcentOfa = (a: number, b:number) : number=>{
 return (b / 100) * a;
}
console.log(bProcentOfa(100, 50)); //50
console.log(bProcentOfa(10, 1)); //0.1
console.log(bProcentOfa(500, 25)); //125


// Task 11 page6
//Write a function that takes 6 values (a,b,c,d,e,f) as arguments
//Sum a and b
//Then substract by c
//Then multiply by d and divide by e
//Finally raise to the power of f and return the result
//Tip: mind the order
const lotValueFunction = (a: number,b: number,c: number,d: number,e: number,f: number): number =>{
 return Math.pow((((a+b)-c)*d/e),f)
}
console.log(lotValueFunction(6,5,4,3,2,1)); //10.5
console.log(lotValueFunction(6,2,1,4,2,3)); //2744
console.log(lotValueFunction(2,3,6,4,2,3)); //-8



//Task 12 
//Write a function that takes a number as argument
//If the number is even, return true
//Otherwise, return false
const evenNumber = (a: number) :boolean =>{
    if (a % 2 === 0) {
        return true;
    } else {
        return false;
    }
}
console.log(evenNumber(10)) //true
console.log(evenNumber(-4)) //true
console.log(evenNumber(5)) //false
console.log(evenNumber(-111)) //false


// Task 13 page7
//Write a function that takes two strings (a and b) as arguments
//Return the number of times a occurs in b
const aTimes = (a: string, b: string) : number =>{
   const substring = b.split(a);
    return  substring.length - 1;
}
console.log(aTimes('m', 'how many times does the character occur in this sentence?')); //2
console.log(aTimes('h', 'how many times does the character occur in this sentence?')); //4
console.log(aTimes('?', 'how many times does the character occur in this sentence?')); //1
console.log(aTimes('z', 'how many times does the character occur in this sentence?')); //0


// Task 14
//Write a function that takes a number (a) as argument
//If a is a whole number (has no decimal place), return true
//Otherwise, return false
const fullNumber = (a: number):boolean =>{
   if Number.isInteger(a){
      return true;
   }
   else{
      return false;
   }
}
console.log(fullNumber(4)); //true
console.log(fullNumber(1.123)); //false
console.log(fullNumber(1048)); //true
console.log(fullNumber(10.48)); //false



// Task 15 page8
//Write a function that takes two numbers (a and b) as arguments
//If a is smaller than b, divide a by b
//Otherwise, multiply both numbers
//Return the resulting value
const comparingAandB = (a: number, b:number): number =>{
   if (a < b) {
      return a / b
   } else{
      return a * b
   }
}
console.log(comparingAandB(10, 100)); //0.1
console.log(comparingAandB(90, 45)); //4050
console.log(comparingAandB(8, 20)); //0.4
console.log(comparingAandB(2, 0.5)); //1



// Task 16
//Write a function that takes two strings (a and b) as arguments
//If a contains b, append b to the beginning of a
//If not, append it to the end
//Return the concatenation
const stickingWords = (a: string, b:string) : string =>{
   if (a.includes(b)) {
      return b + a
   } 
   else {
      return a + b
   }
}
console.log(stickingWords('cheese', 'cake')); //cheesecake
console.log(stickingWords('lips', 's')); //slips
console.log(stickingWords('Java', 'script')); //javascript
console.log(stickingWords(' think, therefore I am', 'I')); //i think, therefore I am




// Task 17 page9
//Write a function that takes a number (a) as argument
//Round a to the 2nd digit after the comma
//Return the rounded number
const roundDecimals = (a: number)  =>{
   return a.toFixed(2);
};
console.log(roundDecimals(2.12397)); //2.12
console.log(roundDecimals(3.136)); //3.14
console.log(roundDecimals(1.12397)); //1.12
console.log(roundDecimals(26.1379)); //26.14



// Task 18
//Write a function that takes a number (a) as argument
//Split a into its individual digits and return them in an array
//Tip: you might want to change the type of the number for the splitting
const splitA = (a: number) : number[] =>{
  const numStr = a.toString ();
  const digits: number[] = [];
  for (let i = 0; i < numStr.length; i ++)
    {  digits.push(Number(numStr[i]))
} return digits;
}
console.log(splitA(10)); // [1, 0]
console.log(splitA(931)); // [9, 3, 1]
console.log(splitA(193278)); // [1, 9, 3, 2, 7, 8]





// Task 19
//Write a function that joins these strings together such that they form the following words:
//'Javascript', 'Countryside', and 'Downtown'
const joinStrings = (a: string, b: string) : string =>{
   const modA = a[0].toUpperCase()+ a.slice(1).replace('%', '')
   const modB = b.split('').reverse().join('').replace('%', '');
   return modA + modB;
}
console.log(joinStrings('java', 'tpi%rcs')); // Javascript
console.log(joinStrings('c%ountry', 'edis')); // Countryside
console.log(joinStrings('down', 'nw%ot')); // Downtown





// Task 20
//Write a function that takes a number (a) as argument
//If a is prime, return a
//If not, return the next higher prime number
const primeNumber = (a: number) :number =>{
   if (a / 1 && a / a){
      return a
   }
  else if (a / 2){
     return (a+1)
   }
}
console.log(primeNumber(38)); //
console.log(primeNumber(7)); // 7
console.log(primeNumber(115)); //
console.log(primeNumber(2000)); //



// Task 21 page11
//Write a function that takes two numbers, say x and y, as arguments
//Check if x is divisible by y
//If yes, return x
//If not, return the next higher natural number that is divisible by y
const XdividedY = (x: number, y: number):number =>{
   if (x % y === 0) {
      return x
   } else  {
       return Math.ceil(x / y)*y;
   }
}
console.log(XdividedY(1, 23)) // 23
console.log(XdividedY(23, 23)) // 23
console.log(XdividedY(7, 3)) // 9
console.log(XdividedY(-5, 7)) // 0



// Task 22
//Write a function that takes two strings (a and b) as arguments
//Beginning at the end of 'a', insert 'b' after every 3rd character of 'a'
//Return the resulting string
const insertB = (a: string, b:string) :string =>{
   const val = []
   for (let i = a.length-1; i>=0; i--){
     val.push(a.slice(i, i + 3));
   }
   return val.join(b);
}
console.log(insertB('1234567','.')); // 7.67.567.456.345.234.123
console.log(insertB('abcde','$')); // e$de$cde$bcd$abc
console.log(insertB('zxyzxyzxyzxyzxyz','w')); // wxyzwzxywyzxwxyzwzxywyzxwxyzwzxywyzxwxyzwzxywyzxwxyzwzxy




// Task 23
//Write a function that takes a string as argument
//As it is, the string has no meaning
//Increment each letter to the next letter in the alphabet
//Return the correct word
const alphabetNextLetter = (a:string) :string =>{
   
   return a
    .split('')
    .map((char) => {
      if (char.match(/[a-zA-Z]/)) {
        return String.fromCharCode(char.charCodeAt(0) + 1);
      } else {
        return char;
      }
    })
    .join('');
};
/* for(var i=0; i<arr.lenght; i++{
   var blabla = arr[i];
   nerArr.push(blabla + 1)*/

console.log(alphabetNextLetter('bnchmf')); //coding
console.log(alphabetNextLetter('bgddrd')); //cheese
console.log(alphabetNextLetter('sdrshmf')); //testing





// Task 24 
//Write a function that takes an array (a) and a value (n) as argument
//Return the nth element of 'a'
const nthElement = (a: number[], n:number) =>{
   return a[n-1];
}
console.log(nthElement([1,2,3,4,5],3)); // 3
console.log(nthElement([10,9,8,7,6],5)); // 6
console.log(nthElement([7,2,1,6,3],1)); // 7


// Task 24
//Write a function that takes an array (a) as argument
//Remove the first 3 elements of 'a'
//Return the result
const elementsOff = (a: T[]) :T[] => {
   return a.slice(3)
}
console.log(elementsOff([1,2,3,4])) // [4]
console.log(elementsOff([5,4,3,2,1,0])) // [2, 1, 0]
console.log(elementsOff([99,1,1])) // []



// Task 25 page 13
//Write a function that takes an array (a) as argument
//Extract the last 3 elements of a
//Return the resulting array
const extractElement= (a : number[]) :number[]=>{
      return a.slice(-3);
   
  }
console.log(extractElement([1,2,3,4])); // [2, 3, 4]
console.log(extractElement([5,4,3,2,1,0])); // [2, 1, 0]
console.log(extractElement([99,1,1])); // [99, 1, 1]



// Task 26
//Write a function that takes an array (a) as argument
//Extract the first 3 elements of a
//Return the resulting array
const extrFirstelements = (a: number[]) => {
   return a.slice (0, 3)
}
console.log(extrFirstelements([1,2,3,4])); //[1, 2, 3]
console.log(extrFirstelements([5,4,3,2,1,0])); // [5, 4, 3]
console.log(extrFirstelements([91,1,1])); // [91, 1, 1]





// Task 27
//Write a function that takes an array (a) and a number (n) as arguments
//It should return the last n elements of a
const lastElements = (a: number[], n:number) => {
   return a.slice(-n)
}
console.log(lastElements([1, 2, 3, 4, 5], 2)) //[ 4, 5]
console.log(lastElements([1, 2, 3], 6)) // [1, 2, 3]
console.log(lastElements([1, 2, 3, 4, 5, 6, 7, 8], 3)) //[ 6, 7, 8]




// Task 28 page14
//Write a function that takes an array (a) and a value (b) as argument
//The function should clean a from all occurrences of b
//Return the filtered array
const filterB = (a: any[], b: any) =>{
   return a.filter((element) => element !== b);
}
//const result: string[] = a.filter((b):void =>)

console.log(filterB([1,2,3], 2)); // 
console.log(filterB([1,2,'2'], '2')); //
console.log(filterB([false,'2',1], false)); //
console.log(filterB([1,2,'2',1], 1)); //
//JAATKARTO CALLBACK FUNKCIJAS




// Task 29 
//Write a function that takes an array (a) as argument
//Return the number of elements in a
const numberOfElements = (a: number[]) =>{
   return a.length;
} 
console.log(numberOfElements([1,2,2,4])); // 4
console.log(numberOfElements([9,9,9])); // 3
console.log(numberOfElements([4,3,2,1,0])); // 5




// Task 30 page15
//Write a function that takes an array of numbers as argument
//Return the number of negative values in the array
const negativeValue = (array: number[]) =>{
   return array.filter(value => value < 0);
}
console.log(negativeValue([1,-2,2,-4])); // [-2, -4]
console.log(negativeValue([0,9,1])); // []
console.log(negativeValue([4,-3,2,1,0])); //[-3]



// Task 31
//Write a function that takes an array of numbers as argument
//It should return an array with the numbers sorted in descending order
const reverseArray = (array: number[]) =>{
    array.sort(function(a, b){return b - a});
}
console.log(reverseArray([1,3,2])); // 
console.log(reverseArray([4,2,3,1])); // 




// Task 32
//Write a function that takes an array of strings as argument
//Sort the array elements alphabetically
const arrayAlphabet = (array : string[]) =>{
   return array.sort();
}
console.log(arrayAlphabet(['b', 'c', 'd', 'a'])); // ['a', 'b', 'c', 'd']
console.log(arrayAlphabet(['z', 'c', 'd', 'a', 'y', 'a', 'w'])) // ['a', 'a', 'c', 'd', 'w', 'y', 'z']




// Task 33 page 16
//Write a function that takes an array of numbers as argument
//It should return the average of the numbers
const averageNumber = (array: number[]) =>{
   const counter = array.length;
   const sum = array.reduce((valueB, valueA) => valueA + valueB, 0);
   return sum / counter;
}
console.log(averageNumber([10,100,40])); // 50
console.log(averageNumber([10,100,1000])); // 370
console.log(averageNumber([-50,0,50,200])); // 50



// Task 34
//Write a function that takes an array of strings as argument
//Return the longest string
const longestStr = (array: string[]): string =>{
   let longest = array[0]
   for (let i = 1; i < array.length; i++){
      if (array[i].length > longest.length){
         longest = array[i]
      }
   }
return longest;
}
console.log(longestStr(['help', 'me'])); // help
console.log(longestStr(['I', 'need', 'candy'])); // candy





// Task 35
//Write a function that takes an array as argument
//It should return true if all elements in the array are equal
//It should return false otherwise
const equalElements = (array: any[]): boolean =>{
   return array.every(element => element === array[0])
}
console.log(equalElements([true, true, true, true])) // true
console.log(equalElements(['test', 'test', 'test'])) // true 
console.log(equalElements([1,1,1,2])) // false
console.log(equalElements(['10',10,10,10])) // false




// Task 36 page17
//Write a function that takes arguments an arbitrary number of arrays
//It should return an array containing the values of all arrays
const joinArray = (...arrays) =>{
   return [].concat.apply([], arrays);
};
console.log(joinArray([1, 2, 3], [4, 5, 6])); // [1, 2, 3, 4, 5, 6]
console.log(joinArray(['a', 'b', 'c'], [4, 5, 6])); // ['a', 'b', 'c', 4, 5, 6]
console.log(joinArray([true, true], [1, 2], ['a', 'b'])) // [true, true, 1, 2, 'a', 'b']




// Task 37
//Write a function that takes an array of objects as argument
//Sort the array by property b in ascending order
//Return the sorted array
const sortedObj = (objects) => {
   return objects.sort((a, b) => a.b - b.b);
};
console.log(sortedObj([{a:1,b:2},{a:5,b:4}])); //
console.log(sortedObj([{a:2,b:10},{a:5,b:4}])); //
console.log(sortedObj([{a:1,b:7},{a:2,b:1}])); //



// Task 38
//Write a function that takes two arrays as arguments
//Merge both arrays and remove duplicate values
//Sort the merge result in ascending order
//Return the resulting array
const mergeArrays = (array1: number[], array2: number[]) =>{
   const oneArray = array1.concat(array2);
   const removeDupl = oneArray.filter((value, index, self) => self.indexOf(value) === index);
   const result = removeDupl.sort(function(a, b){return a-b});
   return result;
}
console.log(mergeArrays([1, 2, 3], [3, 4, 5])) // [1, 2, 3, 4, 5]
console.log(mergeArrays([-10, 22, 333, 42], [-11, 5, 22, 41, 42])) //[-11, -10, 5, 22, 41, 42, 333]




// Task 40 page18
//Write a function that takes an array (a) and a number (b) as arguments
//Sum up all array elements with a value greater than b
//Return the sum
const sumAgreaterB = (a: number[], b: number): number=>{
   let sum = 0 
   for(let i = 0; i < a.length; i++){
      if (a[i] > b){
         sum += a[i]
      }
   } return sum;
}
console.log(sumAgreaterB([1, 2, 3, 4, 5, 6, 7], 2)); // 25
console.log(sumAgreaterB([-10, -11, -3, 1, -4], -3)); // 1
console.log(sumAgreaterB([78, 99, 100, 101, 401], 99)); // 602



// Task 41
//Write a function that takes two numbers (min and max) as arguments
//Return an array of numbers in the range min to max
const minTomax = (a: number, b:number): number [] => {
   const result: number[] = [];
   for (let i = a; i<= b; i++){
       result.push(i)
   }
   return result;
}
console.log(minTomax(2, 10)); //[2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(minTomax(1, 3)); //[1, 2, 3]
console.log(minTomax(-5, 5)); //[-5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5]
console.log(minTomax(2, 7)); //[2, 3, 4, 5, 6, 7]





// Task 42 page19
//Write a function that takes an array of strings as argument
//Group those strings by their first letter
//Return an object that contains properties with keys representing first letters
//The values should be arrays of strings containing only the corresponding strings

const groupFirstLetter = (arr: string[]) => {
   return arr.reduce((obj, value) => {
     const firstLetter = value.charAt(0).toLowerCase();
     obj[firstLetter] = (obj[firstLetter] || []).concat(value);
     return obj;
   }, {});
 };
 
   console.log(groupFirstLetter(['Alf', 'Alice', 'Ben'])); //
   console.log(groupFirstLetter(['Ant', 'Bear', 'Bird'])); //
   console.log(groupFirstLetter(['Berlin', 'Paris', 'Prague'])); //




   // Task 43 
   //Write a function that takes an array with arbitrary elements and a number as arguments
   //Return a new array, the first element should be either the given number itself
   //or zero if the number is smaller than 6
   //The other elements should be the elements of the original array
 const moveArguments = (a, b)  =>{
   if (b < 6) {
      return [0, a];
   } else {
      return [b, a];
   }
 };
console.log(moveArguments([1,2,3], 6)); //
console.log(moveArguments(['a', 'b'], 2)); //
console.log(moveArguments([null, false], 11)); //





// Task 44 page20
//Write a function that takes an array (a) and a value (n) as arguments
//Save every nth element in a new array
//Return the new array
const nthElementNew: number[] = (a: number[], n:number) =>{
   const result: number[] = [];
   for (let i=n-1; i<=a.length; i+=n){
      if (i < a.length{
         result.push(a[i]);
      })
   }
   return result;
}
console.log(nthElementNew([1,2,3,4,5,6,7,8,9,10],3)); // [3, 6, 9]
console.log(nthElementNew([10,9,8,7,6,5,4,3,2,1],5)); // [6, 1]
console.log(nthElementNew([7,2,1,6,3,4,5,8,9,10],2)); // [2, 6, 4, 8, 10]





//Task 45
//Write a function that takes an object with two properties as argument
//It should return the value of the property with key country
function properties(land: { country: string; continent: string}){
   return land.country;
}
console.log(properties({  continent: 'Asia',  country: 'Japan'})); // Japan
console.log(properties({  country: 'Sweden',  continent: 'Europe'})); // Sweeden





// Task 46
//Write a function that takes an object with two properties as argument
//It should return the value of the property with key 'prop-2'
//Tip: you might want to use the square brackets property accessor
type properties2 = {
   'prop-2': any;
   one: number;
}
const functionprop = (obj: properties2) =>{
   return obj['prop-2'];
}
console.log(functionprop({  one: 1,  'prop-2': 2})) // 2
console.log(functionprop({  'prop-2': 'two',  prop: 'test'})) // two




// Task 47  page21
//Write a function that takes an object with two properties and a string as arguments
//It should return the value of the property with key equal to the value of the string
type Location = {
   continent: string;
   country: string;
}
const equalValue = (locationProp : Location, a : string) =>{
   const keys = Object.keys(locationProp)
   for (const key of keys) {
      if (key === a) {
         return locationProp[key];
      }
   }
}
console.log(equalValue({  continent: 'Asia',  country: 'Japan'}, 'continent')); // Asia
console.log(equalValue({  country: 'Sweden',  continent: 'Europe'}, 'country')); // Sweeden



// Task 48 
//Write a function that takes an object (a) and a string (b) as argument
//Return true if a has a property with key b
//Return false otherwise
type a = {
   c: string;
   d: string;
}
const aPropB : boolean = (objA: a, b: string)=>{
   const keys = Object.keys(objA);
   for (const key of keys) {
      if (key === b) {
         return true;
      }
   }
   return false;
}
console.log(aPropB({a:1,b:2,c:3},'b')) // true
console.log(aPropB({x:'a',y:'b',z:'c'},'a')) // false
console.log(aPropB({x:'a',y:'b',z:'c'},'z')) // true




// Task 49 
//Write a function that a string (a) as argument
//Create an object that has a property with key 'key' and a value of a
//Return the object
const keyValueA = (a:string) => ({key: a});
console.log(keyValueA('a')) // {key: 'a'}
console.log(keyValueA('z')) // {key: 'z'}
console.log(keyValueA('b')) // {key: 'b'}





// Task 50 page22
// Write a function that takes two strings (a and b) as arguments
//Create an object that has a property with key 'a' and a value of 'b'
//Return the object
const stringProperty = (a: string, b: string): { [key: string]: string } =>{
  const objectAB: {[key: string]: string} = {
   [a]: b
  } return objectAB;
}
console.log(stringProperty('a','b')); // {a: 'b'}
console.log(stringProperty('z','x')); // {z: 'x'}
console.log(stringProperty('b','w')); // {b: 'w'}




// Task 51
//Write a function that takes two arrays (a and b) as arguments
//Create an object that has properties with keys 'a' and corresponding values 'b'
//Return the object
type abtype = [string | number, string |number]
const correspondingValues  = (a: abtype , b: abtype) =>{
   const objAandB: { [key: string]: string | number} = {};
   for (let i=0; i < a.length; i++){
      objAandB[String(a[i])] = b[i];
   }
   return objAandB;
}
console.log(correspondingValues(['a','b','c'],[1,2,3])); //{a: 1, b: 2, c: 3}
console.log(correspondingValues(['w','x','y','z'],[10,9,5,2])); //{w: 10, x: 9, y: 5, z: 2}
console.log(correspondingValues([1,'b'],['a',2])); //{1: 'a', b: 2}



// Task 52
//Write a function that takes an object (a) as argument
//Return an array with all object keys
type ObjectA = {
   [key: string]: any;
};
const ObjectArray = (a : ObjectA) : string[] =>{
return Object.keys(a);}

console.log(ObjectArray({a:1,b:2,c:3})) // ['a', 'b', 'c']
console.log(ObjectArray({j:9,i:2,x:3,z:4})) // ['j', 'i', 'x', 'z']
console.log(ObjectArray({w:15,x:22,y:13})) // ['w', 'x', 'y']



// Task 53 page23
//Write a function that takes an object (a) as argument
//Return the sum of all object values
type aObject = {
   [key: string]: number;
};
const objectAargument = (a : aObject): number =>{
   let sum = 0;
   for( const key in a){
      sum += a[key]
   }
   return sum;
}
console.log(objectAargument({a:1,b:2,c:3})) // 6
console.log(objectAargument({j:9,i:2,x:3,z:4})) // 18
console.log(objectAargument({w:15,x:22,y:13})) // 50




// Task 54
//Write a function that takes an object as argument
//It should return an object with all original object properties
//except for the property with key 'b'
type objectProp = {
   [key: string] : number;
};
const objectWithoutB = (a: objectProp): objectProp =>{
   const  { b, ...restOfProperties } = a;
   return restOfProperties
}
console.log(objectWithoutB({ a: 1, b: 7, c: 3 })) //{a: 1, c: 3}
console.log(objectWithoutB({ b: 0, a: 7, d: 8 })) //{a: 7, c: 8}
console.log(objectWithoutB({ e: 6, f: 4, b: 5, a: 3 })) //{e: 6, f: 4, a: 3}




// Task 55
//Write a function that takes two objects as arguments
//Unfortunately, the property 'b' in the second object has the wrong key
//should be named 'd' instead
//Merge both objects and correct the wrong property name
//Return the resulting object
//It should have the properties 'a', 'b', 'c', 'd', and 'e'
type Object1 = {
   a : string;
   b : string;
}
type Object2 = {
   c: string;
   b: string;
   e: string;
}
const ObjectMergeObject = (obj1: Object1, obj2: Object2) : Object1 | Object2 =>{
      const {b: oldKey, ...restOfProperties } = obj2;
      const newObj = {d: obj2.b, ...restOfProperties};
   
   const mergeObj = {...obj1, ...newObj};
   return mergeObj;
}
console.log(ObjectMergeObject({ a: 1, b: 2 }, { c: 3, b: 4, e: 5 })) // {a: 1, b: 2, d: 4, c: 3, e: 5}
console.log(ObjectMergeObject({ a: 5, b: 4 }, { c: 3, b: 1, e: 2 })) // {a: 5, b: 4, d: 1, c: 3, e: 2}



// Task 56 page24
//Write a function that takes an object (a) and a number (b) as arguments
//Multiply all values of 'a' by 'b'
//Return the resulting object
type ObjectA2 = {
   [key: string] : number;
}
const objAnumB = (a: ObjectA2, b: number) {
   const result: ObjectA2={}
   for(const key in a){
         result[key] = a[key]*b;
   }
   return result;
}
console.log(objAnumB({a:1,b:2,c:3},3)) // {a: 3, b: 6, c: 9}
console.log(objAnumB({j:9,i:2,x:3,z:4},10)) // {j: 90, i: 20, x: 30, z: 40}
console.log(objAnumB({w:15,x:22,y:13},6)) // {w: 90, x: 132, y: 78}



// Task 57 
//Write a function that takes an object as argument
//Somehow, the properties and keys of the object got mixed up
//Swap the Javascript object's key with its values and return the resulting object
type Objectmix = {
   [key: any] : string;
}
const swapedObject = (a: Objectmix) : Objectmix =>{
   const normalObject : Objectmix ={};

   for(const key in a){
      const value = a[key];
      normalObject[value] = key;
   }
   return normalObject;
}
console.log(swapedObject({z:'a',y:'b',x:'c',w:'d'})) //{a: 'z', b: 'y', c: 'x', d: 'w'}
console.log(swapedObject({2:'a',4:'b',6:'c',8:'d'})) // {a: '2', b: '4', c: '6', d: '8'}
console.log(swapedObject({a:1,z:24})) // {1: 'a', 24: 'z'}



// Task 58 
//Write a function that takes an object as argument
//Some of the property values contain empty strings
//Replace empty strings and strings that contain only whitespace with null values
//Return the resulting object
type ObjectValues = {
   [key: string] :any
}
const replaceValue = (a: ObjectValues) : ObjectValues =>{
   const resultObject : ObjectValues = {}
   for (const key in a){
      const value = a[key].trim();
      resultObject[key] = value === ''? null : value; //ternary operator
   }
   return resultObject;
}
console.log(replaceValue({ a: 'a', b: 'b', c: '' })) // {a: 'a', b: 'b', c: null}
console.log(replaceValue({ a: '', b: 'b', c: ' ', d: 'd' })) // {a: null, b: 'b', c: null, d: 'd'}
console.log(replaceValue({ a: 'a', b: 'b ', c: ' ', d: '' })) // {a: 'a', b: 'b', c: null, d: null}



// Task 59 page25 | NAV IZLOGOTS PAREIZI
//Write a function that takes an object as argument containing properties with personal information
//Extract firstName, lastName, size, and weight if available
//If size or weight is given transform the value to a string
//Attach the unit cm to the size
//Attach the unit kg to the weight
//Return a new object with all available properties that we are interested in
type PersonInfo = {
   fn : string;
   ln : string;
   age: number;
   size: number;
   weight : number;
}
const PersonInformation = (a: PersonInfo) : PersonInfo =>{
   const transformedInfo : PersonInfo = {...a};
   for (const key in transformedInfo) {
      if (typeof transformedInfo[key] === 'number') {
         if (key === 'size') {
            transformedInfo[key] = transformedInfo[key].toString() + 'cm';
         } else if (key === 'weight') {
            transformedInfo[key] = transformedInfo[key].toString() + 'kg';
         }
      }
   }
   return transformedInfo;
}
console.log(PersonInformation({fn: 'Lisa', ln: 'Müller', age: 17, size: 175, weight: 67})) // {fn: 'Lisa', ln: 'Müller', age: 17, size: '175cm', weight: '67kg'}
console.log(PersonInformation({fn: 'Martin', ln: 'Harper', age: 26, email: 'martin.harper@test.de', weight: 102})) //{fn: 'Martin', ln: 'Harper', age: 26, email: 'martin.harper@test.de', weight: '102kg'}
console.log(PersonInformation({fn: 'Andrew', ln: 'Harper', age: 81, size: 175, weight: 71})) // {fn: 'Andrew', ln: 'Harper', age: 81, size: '175cm', weight: '71kg'}
console.log(PersonInformation({fn: 'Matthew', ln: 'Müller', age: 19, email: 'matthew@mueller.de'})) // {fn: 'Matthew', ln: 'Müller', age: 19, email: 'matthew@mueller.de'}






// Task 60 
//Write a function that takes an array of objects and a string as arguments
//Add a property with key 'continent' and value equal to the string to each of the objects
//Return the new array of objects
//Tip: try not to mutate the original array
type Object = {
   [key: string] : string;
}
const equalValueStrings = (a : Object, continent : string) : Object =>{
   return a.map(obj => ({
      ...obj,
      continent: continent
   }))
} 
console.log(equalValueStrings([{ city: 'Tokyo', country: 'Japan' }, { city: 'Bangkok', country: 'Thailand' }], 'Asia')) // [{ city: 'Tokyo', country: 'Japan', continent: 'Asia' }, { city: 'Bangkok', country: 'Thailand', continent: 'Asia' }]
console.log(equalValueStrings ([{ city: 'Stockholm', country: 'Sweden' }, { city: 'Paris', country: 'France' }], 'Europe')) // [{ city: 'Stockholm', country: 'Sweden', continent: 'Europe' }, { city: 'Paris', country: 'France', continent: 'Europe' }]






// Task 61 page26
//Write a function that takes an array of numbers as argument
//Convert the array to an object
//It should have a key for each unique value of the array
//The corresponding object value should be the number of times the key occurs within the array
const arrayToObject = (numbers: number[]) =>{
   
}
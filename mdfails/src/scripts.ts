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
const elementsOff = (a: T[]) :T[] {
   return a.slice(3)
}
console.log(elementsOff([1,2,3,4])) // [4]
console.log(elementsOff([5,4,3,2,1,0])) // [2, 1, 0]
console.log(elementsOff([99,1,1])) // []



// Task 25 page 13
//Write a function that takes an array (a) as argument
//Extract the last 3 elements of a
//Return the resulting array
const extractElement= (a : number[]) :number[]{
      return a.slice(-3);
   
  }
console.log(extractElement([1,2,3,4])); // [2, 3, 4]
console.log(extractElement([5,4,3,2,1,0])); // [2, 1, 0]
console.log(extractElement([99,1,1])); // [99, 1, 1]



// Task 26
//Write a function that takes an array (a) as argument
//Extract the first 3 elements of a
//Return the resulting array
const extrFirstelements = (a: number[]) {
   return a.slice (0, 3)
}
console.log(extrFirstelements([1,2,3,4])); //[1, 2, 3]
console.log(extrFirstelements([5,4,3,2,1,0])); // [5, 4, 3]
console.log(extrFirstelements([91,1,1])); // [91, 1, 1]





// Task 27
//Write a function that takes an array (a) and a number (n) as arguments
//It should return the last n elements of a
const lastElements = (a: number[], n:number){
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
console.log(filterB([1,2,3], 2)); //
console.log(filterB([1,2,'2'], '2')); //
console.log(filterB([false,'2',1], false)); //
console.log(filterB([1,2,'2',1], 1)); //
JAATKARTO CALLBACK FUNKCIJAS
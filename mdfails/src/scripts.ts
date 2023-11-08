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

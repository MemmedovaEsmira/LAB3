// 1.Given a non-empty array of integers, return the result of multiplying the values together in order. Example:

// [1, 2, 3, 4] => 1 * 2 * 3 * 4 = 24
// const numbers = [1, 2, 3, 4]
// function getSum(numbers){
//    return numbers.reduce((a,b)=>a*b);
// }
// console.log(getSum(numbers))




// 2.Complete the square sum function so that it squares each number passed into it and then sums the results together.

// For example, for [1, 2, 2] it should return 9

// const numbers = [1, 2, 2]
// function getSum(numbers){
// return  getSum = numbers.reduce((a,b)=>a+b**2,0);
// }
// console.log(getSum(numbers))



// 3.You get an array of numbers, return the sum of all of the positives ones.
// [1, -12, 2, -13, 3, 5, -11, -14, -15];

// const numbers = [1, -12, 2, -13, 3, 5, -11, -14, -15]
// function getPositiveSum(numbers){
// return numbers.reduce((a,b)=>{
//    if(b>0){
//       return a+b;
//    }
//    else{
//       return a;
//    }

// },0)
// }
// console.log(getPositiveSum(numbers))



// 4.Write a function that takes an array of words and smashes them together into a sentence and returns the sentence. You can ignore any need to sanitize words or add punctuation, but you should add spaces between each word. Be careful, there shouldn't be a space at the beginning or the end of the sentence!

// Example
// const arr = ['hello', 'world', 'this', 'is', 'great'] 
//  =>  'hello world this is great'
    
//   function getWord(words){
//     return words.join(" ")
//     }
//     console.log(getWord(arr))




// 5.Convert number to reversed array of digits
// Given a random non-negative number, you have to return the digits of this number within an array in reverse order.

// Example(Input => Output):
// 35231 => [1,3,2,5,3]

//  const numbers=String(35231)
// function getNumbers(array){
//   return array.split("").reverse().map(Number)
// }
// console.log( getNumbers(numbers))


// 6. You are given two sorted arrays that both only contain integers. Your task is to find a way to merge them into a single one, sorted in asc order. Complete the function mergeArrays(arr1, arr2), where arr1 and arr2 are the original sorted arrays.

// You don't need to worry about validation, since arr1 and arr2 must be arrays with 0 or more Integers. If both arr1 and arr2 are empty, then just return an empty array.

// Note: arr1 and arr2 may be sorted in different orders. Also arr1 and arr2 may have same integers. Remove duplicated in the returned result.


// Examples (input -> output)
// [1, 2, 3, 4, 5], [6, 7, 8, 9, 10] -> [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

//  [1, 3, 5, 7, 9], [10, 8, 6, 4, 2] -> [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

//  [1, 3, 5, 7, 9, 11, 12], [1, 2, 3, 4, 5, 10, 12] -> [1, 2, 3, 4, 5, 7, 9, 10, 11, 12]

// const arr1= [1, 3, 5, 7, 9, 11, 12]
// const arr2 = [1, 2, 3, 4, 5, 10, 12] 
// function getNewArray(arr1,arr2){
// return arr1.filter((number)=>!arr2.includes(number)).concat(arr2).sort((a,b)=>a-b)
// }
// console.log(getNewArray(arr1,arr2))
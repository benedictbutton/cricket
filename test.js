// function solutions(digits) {
//   digits = digits.split('');
//   let maxNumber = Math.max(...digits);
//   let maxNumbers = [];
//
//   let idx = digits.indexOf(maxNumber.toString());
//   while (idx != -1) {
//     maxNumbers.push(idx);
//     idx = digits.indexOf(maxNumber.toString(), idx + 1);
//   }
//   let sequences = [];
//   for(i=0; i < maxNumbers.length; i++) {
//     if(maxNumbers[i]+5 >= maxNumbers.length) {
//       let sequence = digits.slice(maxNumbers[i], maxNumbers[i]+5).join('');
//       sequences.push(sequence);
//     }
//   }
//   sequences = sequences.sort(function(a, b) {
//     return a-b;
//   });
//   let maxSequence = Number(sequences.pop());
//   return maxSequence;
// }


//10 is x
//3*1 < 10 => 3
//3*2 < 10 => 6
//then test 5 and make sure it is not in the first array
//merge, then order, then return
//divide, round down if remainder, subtract 1 if not




//splice numbers off array, into new array currentCustomers; add to totalTime as necessary; must check if adding customer minutes + smallest previous is > longest customer; if it is, reset totalTime to = added customer + previous; repeating



// function sumDigPow(a, b) {
//
//   // Your code here
//
//
//
//   function eureka (num) {
//
//     let numbers = num.toString().split('');
//
//
//
//     let sum = 0;
//
//     for(let i=1; i<=numbers.length; i++) {
//
//       let digit = parseFloat(numbers[i-1]);
//
//       sum += Math.pow(digit, i);
//
//     }
//
//   return sum === num;
//
//   }
//
//
//
//   let range = [];
//
//   for(let i=a; i<b+1; i++) {
//
//     range.push(i);
//   }
//
//   let output = range.filter(eureka);
//
//   return output;
//
// }
// console.log('hi');
// console.log(sumDigPow(50,150));


// function incrementString (strng) {
  // return incrementedString

  //parantheses include digits in array, no parantheses exclude them
  // let array = strng.split(/(\d{1,})/g)
  // let lastNumber = array[array.length-2]
  // let length = lastNumber.length
  // let plusOne = +lastNumber + 1
  // plusOne = plusOne.toString()
  //
  // let numOfZeroes = length - plusOne.length
  // for(let i=0;i<numOfZeroes;i++){
  //   plusOne = '0' + plusOne
  // }

  //using lastNumber does not change array; equal but separate
//   array[array.length-2] = plusOne
//   strng = array.join('')
//
//   return strng
// }
// function removeParanthesis(s, regEx) {
//       s = s.join('')
//       s = s.replace(regEx, '')
//       s = s.split('')
//
//       console.log(s)
//
//       return s
//     }



// function solve(s){
//     //
//     let counter = 0
//
//     s = s.split('')
//
//     let lastChar = s.length-1
//     let regEx = /\(\)/g
//
//
//
//       if((s.length)%2!==0) {
//         counter = -1
//         } else {
//             while(s.length!==0) {
//               s = removeParanthesis(s, regEx)
//               console.log(s)
//               if(s[0]===')') {
//                 s[0]='('
//
//                 counter += 1;
//                 }
//
//               if(s[s.length-1]==='(') {
//                   s[s.length-1] = ')'
//
//                   counter += 1;
//                }
//                s = removeParanthesis(s, regEx)
//             }
//           }
//     return counter
// }
//
// let s = '())()))))()()('
// console.log(solve(s));

// console.log(solve('())()))))()()('))
// function maxSequence(array) {
//
// let maxArrayFw = [];
// let maxArrayBw = [];
// let insideArrayFw = [];
// let arrayCopy = array.map(x => x);
// let arrayCopy1 = array.map(x => x);
//
// let reducer = (accumulator, value) => accumulator + value;
//
// let maxFw = () => {
//   while(arrayCopy.length>0) {
//     maxArrayFw = maxArrayFw.reduce(reducer, 0)>arrayCopy.reduce(reducer, 0) ? maxArrayFw : arrayCopy;
//     maxArrayBw = maxBw(arrayCopy);
//     maxArrayFw = maxArrayFw.reduce(reducer, 0)>maxArrayBw.reduce(reducer, 0) ? maxArrayFw : maxArrayBw;
//     arrayCopy = arrayCopy.slice(1);
//   }
//   return maxArrayFw;
// };
//
//
// let maxBw = (array) => {
//   while(array.length>0) {
//     maxArrayBw = maxArrayBw.reduce(reducer, 0)>array.reduce(reducer, 0) ? maxArrayBw : array;
//     // console.log(maxArrayBw.reduce(reducer, 0));
//     array = array.slice(0, -1);
//   }
//   return maxArrayBw;
// };
//
// maxArray = maxFw();
// let maxValue = maxArray.reduce(reducer, 0);
//
// return maxValue;
// }
//
//
// // array.pop as a method changes not just array, but maxArrayBw also when maxArrayBw = arrayCopy
// //50 instead of 22
// let array = [ -25, -44, -49, 50, -43, -37, -23, 22 ]
// [ 4, -11, -32];
// [ 17,
//   -8,
//   21,
//   24,
//   32,
//   -42,
//   -15,
//   -0,
//   11,
//   -49,
//   47,
//   -4,
//   -13,
//   27,
//   25,
//   -27,
//   45,
//   17,
//   -44,
//   -49,
//   37,
//   25,
//   -49,
//   -21,
//   -27,
//   -49,
//   -12,
//   -39,
//   26,
//   15,
//   -43,
//   26,
//   -32,
//   -8,
//   -28,
//   22,
//   -37,
//   11,
//   23,
//   41,
//   33,
//   -7,
//   -18,
//   -29,
//   -12,
//   -28,
//   33,
//   -46 ]
// [1, 2, 3, 4, 5, -1, -2, -3, -4, -5, 6, 7];
// [4,5, -60, 7, 21];
// [-25, -40, 11, 21, -23, 41, -42, -22, 8, -14, -16, 36, 30, -48, -46];
// console.log(maxSequence(array));

// for(let i=0; i<arrayCopy.length; i++) {
//   insideArrayFw = arrayCopy.reduce(reducer, 0)>arrayCopy.reduce(reducer, 0);
//   arrayCopy.pop();
//   console.log(insideArrayFw);
// }
//
//   arrayCopy = insideArrayFw;

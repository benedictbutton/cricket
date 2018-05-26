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

function solution(string) {
    let str = string.split('');
    for(let i=1; i<str.length; i++) {
      if(str[i] === str[i].toUpperCase()) {
        str.splice(i, 0, '');
        i = i+1;
    }
  }
    string = toString();
    return string;
}

let a = 'camelCasingTest';
console.log(solution(a));

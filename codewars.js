// // Take a Number And Sum Its Digits Raised To The Consecutive Powers

// function generatearr(num1, num2) {
//   let masiv = []
//   for (num1; num1 <= num2; num1++) {
//     masiv.push(num1)
//   }

//   function isvalid(currentnum) {
//     arr = currentnum.toString().split("").map(e => Number(e))
//     let accumnumber = 0;
//     arr.forEach((e, i) => {
//       i = i + 1
//       accumnumber += (e ** i)

//     })
//     if (currentnum === accumnumber) {
//       return true;
//     } else {
//       return false;
//     }
//   }

//   masiv = masiv.filter(e => {
//     return isvalid(e)
//   })
//   return masiv;
// }

// //rot13-------------------------------------------------------------------------------------------------------------------

// let text2 = "Tova e textov test"

// function rot13(text) {
//   let alphabet = "abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz"
//   let bigalphabet = alphabet.toUpperCase()
//   text = text.split("").map(e => {

//     if (/^[A-Za-z]+$/.test(e)) {
//       if (alphabet.includes(e)) {
//         e = e.replace(e, alphabet[alphabet.indexOf(e)+13])

//       } else if (bigalphabet.includes(e)) {
//         e = e.replace(e, bigalphabet[bigalphabet.indexOf(e)+13])

//       }
//       return e;
//     } else {
//       return e;
//     }
//   })
//   return text.join("");
// }

// //Simple Pig Latin---------------------------------------------------------------------------------------------------

// let text = "Pig latin is cool ?"

// function pigIt(text) {

//  text = text.split(" ").map(e => {
//     if (!/[.,\/#!?$%\^&\*;:{}=\-_`~()]/g.test(e)) {
//     let first = e[0];
//     e = e.slice(1).concat(`${first}ay`)
//     return e;
//     } else {
//       return e
//     }
//   })
//   return text.join(" ");
// }

//Moving Zeros To The End------------------------------------------------------------------------

// let masiv = [12, 4, 1, 0, 382, 1, "0", 38, 2, 0, 0, 0, 2, 4, 6, 8]

// function moveZeros(masiv) {

//   masiv = masiv.filter(e => e !== 0).concat(masiv.filter(e => e === 0))

//   return masiv
// }

//Nesting Structure Comparison----------------------------------------------------------------

// let arr1 = [[ [ ], [ ] ]]
// let arr2 = [[ 1, 1 ]]

// function sameStructure(arr2) {


//   function count(arr, cnt) {
//     arr.forEach((e) => {
//       if (Array.isArray(e)) {
//         if (e.length === 0) {
//           cnt++
//         } else {
//         cnt += e.length
//       }
//       } else {
//         cnt++
//       }
//     })
//     return cnt
//   }

//   return count(this, 0) === count(arr2, 0)

// }

// Array.prototype.sameStructure = sameStructure

//

//trailing zero factorial--------------------------------------------------

// function zeros(num) {

//   function fact(num, mult = num) {
//     if (num === 0) {
//       return 0
//     }
//     if (mult === 1) {
//       return num
//     }
//     num *= mult - 1
//     mult--
//     return fact(num, mult)
//   }

//   let result = fact(num).toString().split("").map(e => Number(e))
//   let valid = result.every(e => {
//     return !isNaN(e)
//   })
//   if (!valid) {
//     return "scientific number"
//   }
//   let cnt = 0;
//   for (let i = result.length - 1; i > 0; i--) {
//     if (result[i] === NaN) {

//       return "scientific number zzz"
//     }
//     if (result[i] !== 0) {
//       break;
//     } else {
//       cnt++
//     }
//   }
//   return cnt;
// }

//sumOfSquaresOfDivisors----------------------------------------------------------------

// function sumOfSquaresOfDivisors(num) {
//   let divisors = []
//   for (let i = num; i > 1; i--) {
//     if (num % i === 0) {
//       divisors.push(i)
//     }
//   }
//   divisors = divisors.reduce((total, item) => { return total + (item ** 2) }, 0)
//   return divisors
// }

//--------------------------------------------------------------------------------------

// let str1 = 'katas' 
// let str2 = 'steak'

// function scramble(word1, word2) {

//   word1 = word1.split("")
//   word1.forEach((e) => {
//     if (word2.includes(e)) {
//       word2 = word2.replace(word2[word2.indexOf(e)], "")
//     }
//   })
//   if (word2.length > 0) {
//     return false;
//   } else {
//     return true;
//   }
// }

//--------------------------------------------------------------------------------


// let text1 = "abba"
// let text2 = ['aabb', 'abcd', 'bbaa', 'dada']

// function anagrams(str1, masiv) {
//   function sortString(string) {
//     string = string.split("").sort().join("")
//     return string;
//   }

//   masiv = masiv.filter(e => {
//     return sortString(e) === sortString(str1)
//   })
//   return masiv;
// }

// ---------------------------------------------------------------------------------

// function humanReadable(num) {
//   let masiv = [00, 00, 00]

//   for (let i = 1; i <= num; i++) {
//     masiv[2]++
//     if (i % 60 === 0 && i > 0) {
//       masiv[2] = 0;
//       masiv[1]++
//     }
//     if (masiv[1] === 60) {
//       masiv[0]++
//       masiv[1] = 0;
//     }
//   }
//   masiv = masiv.map(e => {
//     if (e < 10) {
//       return `0${e}`
//     } else {
//       return e;
//     }
//   })
//   return masiv.join(":");
// }

//-----------------------------------------------------------------------------------



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

//Moving Zeros To The End

let masiv = [12, 4, 1, 0, 382, 1, "0", 38, 2, 0, 0, 0, 2, 4, 6, 8]

function moveZeros(masiv) {

  masiv = masiv.filter(e => e !== 0).concat(masiv.filter(e => e === 0))

  return masiv
}

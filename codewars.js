// Take a Number And Sum Its Digits Raised To The Consecutive Powers

function generatearr(num1, num2) {
  let masiv = []
  for (num1; num1 <= num2; num1++) {
    masiv.push(num1)
  }

  function isvalid(currentnum) {
    arr = currentnum.toString().split("").map(e => Number(e))
    let accumnumber = 0;
    arr.forEach((e, i) => {
      i = i + 1
      accumnumber += (e ** i)

    })
    if (currentnum === accumnumber) {
      return true;
    } else {
      return false;
    }
  }

  masiv = masiv.filter(e => {
    return isvalid(e)
  })
  return masiv;
}

//Simple Pig Latin

let text = "Pig latin is cool ?"

function pigIt(text) {

 text = text.split(" ").map(e => {
    if (!/[.,\/#!?$%\^&\*;:{}=\-_`~()]/g.test(e)) {
    let first = e[0];
    e = e.slice(1).concat(`${first}ay`)
    return e;
    } else {
      return e
    }
  })
  return text.join(" ");
}

function convertToRoman(num) {
  const romanNumbers = {
    M: 1000,
    CM: 900,
    D: 500,
    CD: 400,
    C: 100,
    XC: 90,
    L: 50,
    XL: 40,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I: 1,
  }

  let number = num;
  let roman = "";

  for(let key in romanNumbers) {
    while(number >= romanNumbers[key]) {
      number -= romanNumbers[key];
      roman += key;
    }
  }

  return roman;
};

console.log(convertToRoman(1250));

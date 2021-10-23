function isPalindrome(str) {
  const regex = /[^A-Za-z0-9]/g;

  const newStr = str.replace(regex, "").trim().toLowerCase();
  const palindromeStr = newStr.split("").reverse().join("");

  return newStr === palindromeStr;
}

console.log(isPalindrome("My age is 0, 0 si ega ym."));
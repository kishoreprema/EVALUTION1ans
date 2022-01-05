
function Palindrome(str) {
    const size = str.length;
    for (let i = 0; i < size / 2; i++) {
      if (str[i] !== str[size - 1 - i]) {
        return("NOT a palindrome");
      }
    }
    return("It is a palindrome");
}
console.log(Palindrome("malayalam"));
console.log(Palindrome("kishore"));

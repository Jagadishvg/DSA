
// #9 in leetcode

const isPalindrome = (x: number) : boolean=> {
  if (x < 0) return false;

  const res : string = x.toString().split("").reverse().join("");
  return +res === x;
};
console.log(isPalindrome(121));

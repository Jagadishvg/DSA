
// #231 in leetcode

const isPowerOfTwo = (n : number) : boolean => {
  if (n <= 0) return false;
  return (n & (n-1)) === 0
  
}
console.log(isPowerOfTwo(0))
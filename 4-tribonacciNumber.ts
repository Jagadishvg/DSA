// #1137 in leetcode
const tribonacci = (n: number) => {
  const tri = [0, 1, 1];
  for (let i = 3; i <= n; i++) {
    tri[i] = tri[i - 1] + tri[i - 2] + tri[i - 3];
  }
  return tri[n];
};

console.log(tribonacci(4));

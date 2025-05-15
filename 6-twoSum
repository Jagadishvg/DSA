// #1 in Leetcode

const twoSum = (nums: Array<number>, target: number) => {
  const map = new Map();
  for (let i = 0; i < nums.length; i++) {
    const solution = target - nums[i];
    if (map.has(solution)) {
      return [map.get(solution), i];
    }
    map.set(nums[i], 0);
  }
};

console.log(twoSum([2,7,11,15],9))
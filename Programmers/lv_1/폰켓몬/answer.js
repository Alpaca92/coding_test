function solution(nums) {
  const maxinum = Math.floor(nums.length / 2);
  const types = [...new Set(nums)];

  return maxinum >= types.length ? types.length : maxinum;
}

/*
examples

<case 1>
nums = [3,1,2,3]

result = 2

<case 2>
nums = [3,3,3,2,2,4]

result = 3

<case 3>
nums = [3,3,3,2,2,2]

result = 2
*/

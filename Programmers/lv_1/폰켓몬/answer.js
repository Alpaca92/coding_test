function solution(nums) {
  return [...new Set(nums)].length >= nums.length / 2
    ? nums.length / 2
    : [...new Set(nums)].length;
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

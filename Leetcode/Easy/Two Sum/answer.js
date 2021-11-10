var twoSum = function (nums, target) {
  for (let i = 0; i < nums.length; i++) {
    if (nums.indexOf(target - nums[i], i + 1) !== -1)
      return [i, nums.indexOf(target - nums[i], i + 1)];
  }
};

nums = [3, 3];
target = 6;

console.log(twoSum(nums, target));

/*
examples

<case 1>
nums = [2,7,11,15]
target = 9

return = [0,1]

<case 2>
nums = [3,2,4]
target = 6

return = [1,2]

<case 3>
nums = [3,3]
target = 6

return = [0,1]
*/

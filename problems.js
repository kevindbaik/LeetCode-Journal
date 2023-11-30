// Day 1

// https://leetcode.com/problems/two-sum/

var twoSum = function(nums, target) {
  const hash = new Map();

  for (let i = 0; i < nums.length; i++) {
      let diff = target - nums[i];

      if(hash.has(diff)) {
          return [hash.get(diff), i]
      };

      hash.set(nums[i], i)
  }
};

// https://leetcode.com/problems/palindrome-number/

var isPalindrome = function(x) {
  let str = x.toString()

  let left = '';
  for (let i = 0; i < str.length; i++) {
      left += str[i]
  }

  let right = '';
  for (let i = str.length - 1; i >= 0; i--) {
      right += str[i];
  }

  if(left === right) return true
  else return false
};

// https://leetcode.com/problems/longest-common-prefix/

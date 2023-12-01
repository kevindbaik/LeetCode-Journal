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

var isPalindrome = function(x) {
  if (x < 0 || x % 10 == 0 && x !=0)  {
      return false;
  }
  let t = 0;
  while (x > t) {
      t = t * 10 + x % 10;
      x = Math.floor(x / 10);
  }
  return t==x || x==Math.floor(t/10);
};

// https://leetcode.com/problems/longest-common-prefix/

var longestCommonPrefix = function(strs) {
  let answer = '';

  if(strs.length === 0) return answer;

  for (let i = 0; i < strs[0].length; i++) {
      for (let j = 1; j < strs.length; j++) {
          if (strs[j][i] !== strs[0][i]) return answer
      }
      answer += strs[0][i]
  }
  return answer
};

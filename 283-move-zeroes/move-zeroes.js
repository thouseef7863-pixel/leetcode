/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    let res = [];

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== 0) {
            res.push(nums[i]);
        }
    }

    let zeroCount = nums.length - res.length;

    for (let i = 0; i < zeroCount; i++) {
        res.push(0);
    }

    nums.splice(0, nums.length, ...res);
};
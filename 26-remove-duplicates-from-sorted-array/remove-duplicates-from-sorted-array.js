/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    if (nums.length===0) return 0;

    let k=1;

     for (let r = 1; r < nums.length; r++) {
        if (nums[r] !== nums[r - 1]) {
            nums[k] = nums[r];
            k++;
        }
    }
    return k
    
};
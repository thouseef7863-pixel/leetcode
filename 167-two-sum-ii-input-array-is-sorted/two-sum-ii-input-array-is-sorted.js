/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let res= []
    let left =0
    let right = nums.length-1

    while(left<right){
        let sum =nums[left]+nums[right]
        if(sum==target){
            res.push(left+1)
            res.push(right+1)
            return res
        }
        else if(sum>target){
            right--
        }
        else{
            left++
        }
    }
    
};
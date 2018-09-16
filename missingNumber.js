/**

 缺失数字
给定一个包含 0, 1, 2, ..., n 中 n 个数的序列，找出 0 .. n 中没有出现在序列中的那个数。

示例 1:

输入: [3,0,1]
输出: 2
示例 2:

输入: [9,6,4,2,3,5,7,0,1]
输出: 8
说明:
你的算法应具有线性时间复杂度。你能否仅使用额外常数空间来实现?

*/


/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
     var resArr = [];
    for (var i = 0; i < nums.length; i++) {
        var v = nums[i];
        var toPush = '';
        if (nums.indexOf(v - 1) < 0) {
            toPush = v - 1; /*            如果然已经有了这个数。说明我们要找的就是这个数*/
            if (resArr.indexOf(toPush) > -1) {
                return toPush
            }
            resArr.push(toPush)
        }
        if (nums.indexOf(v + 1) < 0) {
            toPush = v + 1;
            if (resArr.indexOf(toPush) > -1) {
                return toPush
            }
            resArr.push(toPush)
        }
    }
    if (resArr[0] < resArr[1]) {
        var min = resArr[0];
        var max = resArr[1];
    } else {
        var min = resArr[1];
        var max = resArr[0];
    }
    if (min == 0) {
        return min;
    } else {
        return max;
}
};
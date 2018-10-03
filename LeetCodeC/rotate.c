/**

旋转数组
	给定一个数组，将数组中的元素向右移动 k 个位置，其中 k 是非负数。

示例 1:

	输入: [1,2,3,4,5,6,7] 和 k = 3
	输出: [5,6,7,1,2,3,4]
	解释:
	向右旋转 1 步: [7,1,2,3,4,5,6]
	向右旋转 2 步: [6,7,1,2,3,4,5]
	向右旋转 3 步: [5,6,7,1,2,3,4]
示例 2:

	输入: [-1,-100,3,99] 和 k = 2
	输出: [3,99,-1,-100]
	解释: 
	向右旋转 1 步: [99,-1,-100,3]
	向右旋转 2 步: [3,99,-1,-100]
说明:

	尽可能想出更多的解决方案，至少有三种不同的方法可以解决这个问题。
	要求使用空间复杂度为 O(1) 的原地算法。

*/

void rotate(int* nums, int numsSize, int k) {
    int n = k; 
    // 判断参数
    if(nums == NULL || numsSize < 0 ||  k < 0){
        return ;
    }
    // 如果k大于数组长度，取余
    if (k > numsSize){
        n = k % numsSize ;
    }
    // 如果有效移动长度 等于 数组长度则不移动
    // 根据n把数组分成两组，分别反转，最后整体反转
    if(n != numsSize){
        reverse(nums, numsSize, 1 , numsSize-n);
        reverse(nums, numsSize, numsSize-n+1 , numsSize);
        reverse(nums, numsSize, 1 , numsSize);
    }
    
}

// 旋转数组
void reverse (int* nums, int numsSize, int start, int end) {
    for(int i = start-1, j = end -1; i < j; i++, j--){
        int tmp = nums[i];
        nums[i] = nums[j];
        nums[j] = tmp;
        
    }
}
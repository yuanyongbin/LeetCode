/**

颠倒二进制位
	颠倒给定的 32 位无符号整数的二进制位。

示例:

	输入: 43261596
	输出: 964176192
	解释: 43261596 的二进制表示形式为 00000010100101000001111010011100 ，
		 返回 964176192，其二进制表示形式为 00111001011110000010100101000000 。
进阶:
	如果多次调用这个函数，你将如何优化你的算法？


*/


/**
 * @param {number} n - a positive integer
 * @return {number} - a posintive integer
 */
var reverseBits = function(n) {
    var count = n;
    let aa = 0;
    var arr = Array(32);
    arr.map(function (item , i) {   // 初始化数组，把数组的每个元素都赋值为  0 
      return 0;
    })          
    for (let i = 0; i < arr.length; i++) {
      arr[i] = parseInt(count%2);    // 计算二进制位，并且反转
      if( arr[i] != 0){              // 计算 十进制结果   
        aa += Math.pow(2,31-i);
      }
     
      count = parseInt(count/2);     // 
    }
    return aa;
};
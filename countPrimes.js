/**

计数质数
	有小于非负整数 n 的质数的数量。

示例:

	输入: 10
	输出: 4
	解释: 小于 10 的质数一共有 4 个, 它们是 2, 3, 5, 7 。

*/

/**
 * @param {number} n
 * @return {number}
 */
var countPrimes = function(n) {
    let count = 0;
      var arr = new Array(n);
      for ( let i = 0;i < n;i++){
        arr[i] = false
      }
      for(let i = 2;i< n ;i++){
        if (!arr[i])
          count++;
        for(let j = 2; j * i < n;j++){
          arr[j*i] = true;
        }
      }
      return count;
};
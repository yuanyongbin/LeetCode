/**

帕斯卡三角形
	给定一个非负整数 numRows，生成杨辉三角的前 numRows 行。

	在杨辉三角中，每个数是它左上方和右上方的数的和。

示例:

	输入: 5
	输出:
	[
		 [1],
		[1,1],
	   [1,2,1],
	  [1,3,3,1],
	 [1,4,6,4,1]
	]

*/

/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    /**
        每行除第一个和最后一个外，都是 arr[i-2][j] + arr[i-2][j - 1] 
    */
    var arr = [];
      for(var i = 1; i <= numRows; i++){
        let ay = new Array();
        for (var j = 0;j < i; j++ ){
          if(j == 0 ){     // 每行第一个元素设为1
            ay[j] = 1;
          }
          if(j == i-1){      // 每行最后一个元素设为1
            ay[j] = 1;
          }

          if(j != 0 && j != i-1){
            ay[j] = arr[i-2][j] + arr[i-2][j - 1]
          }
        }
        arr[i-1] = ay;
      }
      return arr;
};
有效的括号
	给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串，判断字符串是否有效。

	有效字符串需满足：

	左括号必须用相同类型的右括号闭合。
	左括号必须以正确的顺序闭合。
	注意空字符串可被认为是有效字符串。

示例 1:

	输入: "()"
	输出: true
示例 2:

	输入: "()[]{}"
	输出: true
示例 3:

	输入: "(]"
	输出: false
示例 4:

	输入: "([)]"
	输出: false
示例 5:

	输入: "{[]}"
	输出: true
	
	
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    
    /**
        1、用数组模拟一个队列，
        2、遍历字符串的每个字母
        3、比较每个字母跟队列中最后一个字母是不是一对括号
            1.是则删除队列的最后一个元素
            2.否则将当前字母添加到数组的最后
        4、判断数组长度
            1.arr.length == 0  返回true
            2.否则 返回 false
    
    */
    var arr = [];
      for(let i = 0; i < s.length ; i++){
        if(i == 0){
          arr.push(s.charAt(i));
        } else {
          if(s.charAt(i) == '(' || s.charAt(i) == '{' || s.charAt(i) == '['){
            arr.push(s.charAt(i));
          }
          if(s.charAt(i) === '}'){
            if(arr[arr.length - 1] === "{"){
              arr.pop()
            }else {
              arr.push(s.charAt(i));
            }
          } else if (s.charAt(i) === ')') {
            if(arr[arr.length - 1] === "("){
              arr.pop()
            }else {
              arr.push(s.charAt(i));
            }
          } else if (s.charAt(i) === ']'){
            if(arr[arr.length - 1] === "["){
              arr.pop()
            }else {
              arr.push(s.charAt(i));
            }
          }
        }
      }

      if (arr.length == 0){
        return true;
      }else {
        return false;
      }
};
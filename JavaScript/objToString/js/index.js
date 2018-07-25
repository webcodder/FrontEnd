/**
 * 利用原生JSON对象，将对象转为字符串
 */
var jsObj = {};
jsObj.testArray = [1,2,3,4,5];
jsObj.name = 'CSS3';
jsObj.date = '8 May, 2011';
var str = JSON.stringify(jsObj);
console.log(str);


/**
 * 从JSON字符串转为对象 
 */

var jsObj = {};
jsObj.testArray = [1,2,3,4,5];
jsObj.name = 'CSS3';
jsObj.date = '8 May, 2011';
var str = JSON.stringify(jsObj);
var str1 = JSON.parse(str);
console.log(str1);
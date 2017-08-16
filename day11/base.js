/**
 * Created by Administrator on 2017/8/14.
 */
var GLOBAL = {};
function nameSpace(str){
    /*1.将字符串分隔成数组*/
    var arr= str.split("."),o=GLOBAL;
    /*2.对数组进行遍历*/
    for(var i =(arr[0]=="GLOBAL")?1:0;i<arr.length;i++){
        /*3.将数组里的每一个值作为对象的属性
        4.对象的每个属性值等于自身或者一个空对象
        * */
        o[arr[i]]=o[arr[i]]||{};
        /*5.*/
        o=o[arr[i]];
    }
}
nameSpace("Array");
GLOBAL.Array.arraySort=function(arr){
  arr.sort(function(a,b){
      return a-b;
  })
};


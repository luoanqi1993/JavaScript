/**
 * Created by Administrator on 2017/8/14.
 */
var GLOBAL = {};
function nameSpace(str){
    /*1.���ַ����ָ�������*/
    var arr= str.split("."),o=GLOBAL;
    /*2.��������б���*/
    for(var i =(arr[0]=="GLOBAL")?1:0;i<arr.length;i++){
        /*3.���������ÿһ��ֵ��Ϊ���������
        4.�����ÿ������ֵ�����������һ���ն���
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


var GLOBAL = {};

GLOBAL.namespace=function(str){

    var arr=str.split("."),o=GLOBAL;

    for(i=(arr[0]=="GLOBAL")? 1:0; i<arr.length; i++){

        o[arr[i]]= o[arr[i]] || {};

        o=o[arr[i]];

    }

};
function init(){
    (function(){
        var a=123,b="hello world";
        GLOBAL.namespace("A.CAT");
        GLOBAL.namespace("A.DOG");
        GLOBAL.A.CAT.name="mimi";
        GLOBAL.A.DOG.name="wangcai";
        GLOBAL.A.CAT.move=function(){};
        GLOBAL.A.DOG.move=function(){};
        GLOBAL.A.str2=a;
        GLOBAL.A.str=b;

    })();

    (function(){
        var a,c="abc";
        GLOBAL.namespace("B");
        GLOBAL.B.str = c;
    })();

    (function(){
        var a = GLOBAL.A.str2,b = GLOBAL.A.str;
        var d = "adang is very handesome!";
        d = b + "," + d + a;
    })();

    (function(){
        var test = GLOBAL.B.str;
        alert(test);
    })();
}
init();
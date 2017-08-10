/**
 * Created by Administrator on 2017/8/7.
 */
function addLoadEvent(func){
    /*1.把window.onload事件的处理函数存入变量oldonload*/
    /*2.如果window.onload没有绑定任何函数,则给它添加新的函数
     *3.如果在window.onload上已经绑定了函数,就把新函数追加到末尾。
     * */
    var oldonload = window.onload;
    if(typeof oldonload != "function"){
        window.onload = func;
    }else{
        window.onload = function(){
            oldonload();
            func();
        }
    }
}
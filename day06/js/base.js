/**
 * Created by Administrator on 2017/8/7.
 */
function insertAfter(newElement,targetElement){
    var parentNote = targetElement.parentNode;
    if(targetElement==parentNote.lastElementChild){
        parentNote.appendChild(newElement);
    }else{
        parentNote.insertBefore(newElement,targetElement.nextElementSibling);
    }
}

function addLoadEvent(func){
    /*1.把window.onload事件的处理函数存入变量oldonload*/
    var oldonload = window.onload;
    /*2.如果window.onload没有绑定任何函数,则给它添加新的函数
    *3.如果在window.onload上已经绑定了函数,就把新函数追加到末尾。
    * */
    if(typeof oldonload !="function"){
        window.onload=func;
    }else{
        window.onload=function(){
            oldonload();
            func();
        }
    }
}

function getNextElement(node){
    if(node.nodeType==1){
        return node;
    }
    if(node.nextSibling){
        return getNextElement(node.nextSibling)
    }
    return null;
}

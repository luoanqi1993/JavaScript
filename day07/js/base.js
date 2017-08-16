/**
 * Created by Administrator on 2017/8/7.
 */
//在..后面添加元素
function insertAfter(newElement,targetElement){
    var parentNote = targetElement.parentNode;
    if(targetElement==parentNote.lastElementChild){
        parentNote.appendChild(newElement);
    }else{
        parentNote.insertBefore(newElement,targetElement.nextElementSibling);
    }
}

//onload事件函数
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

//添加新的Class
function addClass(element,value){
    if(!element.className){
        element.className=value;
    }else{
        var newClassName=element.className;
        newClassName+=" ";
        newClassName+=value;
        element.className=newClassName;
    }
}

//移动元素
function moveElement(elemenID,final_x,final_y,interval){
    //移动元素
    if(!document.getElementById)return false;
    if(!document.getElementById(elemenID))return false;
    var elem = document.getElementById(elemenID);
    if(elem.movement){
        clearTimeout(elem.movement);
    }
    if(!elem.style.left){
        elem.style.left = "0px";
    }
    if(!elem.style.top){
        elem.style.top = "0px";
    }
    var xpos = parseInt(elem.style.left);
    var ypos = parseInt(elem.style.top);
    var dist = 0;
    if(xpos == final_x && ypos == final_y){
        return true;
    }
    if(xpos < final_x){
        //xpos++;
        dist = Math.ceil((final_x - xpos)/10);
        xpos = xpos + dist;
    }
    if(xpos > final_x){
        //xpos--;
        dist = Math.ceil((xpos - final_x)/10);
        xpos = xpos - dist;
    }
    if(ypos < final_y){
        //ypos++;
        dist = Math.ceil((final_y - ypos)/10);
        ypos = ypos + dist;
    }
    if(ypos > final_y){
        //ypos--;
        dist = Math.ceil((ypos - final_y)/10);
        ypos = ypos - dist;
    }
    elem.style.left = xpos + "px";
    elem.style.top = ypos + "px";
    var repeat = "moveElement('"+elemenID+"',"+final_x+","+final_y+","+interval+")";
    elem.movement = setTimeout(repeat,interval);
}


//定义命名空间函数
var GLOBAL = {};

GLOBAL.namespace=function(str){

    var arr=str.split("."),o=GLOBAL;

    for(i=(arr[0]=="GLOBAL")? 1:0; i<arr.length; i++){

        o[arr[i]]= o[arr[i]] || {};

        o=o[arr[i]];

    }

};

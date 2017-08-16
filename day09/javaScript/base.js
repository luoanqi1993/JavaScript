/**
 * Created by Administrator on 2017/8/11.
 */
//定义命名空间函数
var GLOBAL = {};

GLOBAL.namespace=function(str){

    var arr=str.split("."),o=GLOBAL;

    for(i=(arr[0]=="GLOBAL")? 1:0; i<arr.length; i++){

        o[arr[i]]= o[arr[i]] || {};

        o=o[arr[i]];

    }

};

//DOM  相关
GLOBAL.namespace("Dom");
//在..后面添加元素
GLOBAL.Dom.insertAfter = function(newElement,targetElement){
    var parentNote = targetElement.parentNode;
    if(targetElement == parentNote.lastElementChild){
        parentNote.appendChild(newElement);
    }else{
        parentNote.insertBefore(newElement,targetElement.nextElementSibling);
    }
};

//获取 id 名元素
GLOBAL.Dom.get=function(node){
    node=(typeof node =="string") ? document.getElementById(node) : node;
    return node;
};

//获取 class 名元素
GLOBAL.Dom.getElementsByClassName = function (str,root,tag){
    if(root){
        root = typeof root == "string" ? document.getElementById(root) : root;
    }else{
        root = document.body;
    }
    tag =  tag || "*";
    var els = root.getElementsByTagName(tag),arr=[];
    for(var i=0,n=els.length;i<n;i++){
        for(var j= 0,k=els[i].className.split(" "),l= k.length;j<l;j++){
            if(k[j] == str){
                arr.push(els[i]);
                break;
            }
        }
    }
    return arr;
};

//得到下一个兄弟的元素节点
GLOBAL.Dom.getNextElement = function (node){
    if(node.nodeType == 1){
        return node;
    }
    if(node.nextSibling){
        return getNextElement(node.nextSibling)
    }
    return null;
};

//添加新的Class
GLOBAL.Dom.addNewClass = function (element,value){
    if(!element.className){
        element.className = value;
    }else{
        var newClassName = element.className;
        newClassName += " ";
        newClassName += value;
        element.className = newClassName;
    }
};
//增加Class
GLOBAL.Dom.addClass = function (node,str){
    if(!new RegExp("(^|\\s+)"+str).test(node.className)){
        node.className = node.className + " " +str;
    }
};

//删除Class
GLOBAL.Dom.removeClass = function (node,str){
    node.className = node.className.replace(new RegExp("(^|\\s+)"+str),"");
};



//移动元素
GLOBAL.Dom.moveElement = function (elemenID,final_x,final_y,interval){
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
};

//得到下一个兄弟节点 判断 IE 和 Firefox 的差异
GLOBAL.Dom.getNextNode = function (node){
    node = typeof node =="string" ? document.getElementById(node) : node ;
    var nextNode = node.nextSibling;
    if(!nextNode) return null;
    if(!document.all){
        while(true){
            if(nextNode.nodeType == 1){
                break;
            }else{
                if(nextNode.nextSibling){
                    nextNode = nextNode.nextSibling;
                }else{
                    break;
                }
            }
        }
    }
    return nextNode;
};

//设置透明度(id，透明度)
GLOBAL.Dom.setOpacity = function (nodeElement,level){
    if (document.all){
        nodeElement.style.filter = 'alpha(opacity='+ level +')';
    }else{
        nodeElement.style.opacity = level / 100 ;
    }
};






//Event 相关
GLOBAL.namespace("Event");
//onload事件函数
GLOBAL.Event.addLoadEvent = function (func){
    /*1.把window.onload事件的处理函数存入变量oldonload*/
    var oldonload = window.onload;
    /*2.如果window.onload没有绑定任何函数,则给它添加新的函数
     *3.如果在window.onload上已经绑定了函数,就把新函数追加到末尾。
     * */
    if(typeof oldonload !="function"){
        window.onload = func;
    }else{
        window.onload = function(){
            oldonload();
            func();
        }
    }
};

//IE 和 Firefox 兼容
GLOBAL.Event.getEventTarget = function (e) {
    e = window.event || e;
    return e.srcElement || e.target;
};

//阻止冒泡事件
GLOBAL.Event.stopPropagation = function (e) {
    e = window.event || e;
    if(document.all){
        e.cancelBubble = true;
    }else{
        e.stopPropagation();
    }
};

//监听click事件
GLOBAL.Event.on = function (nodeElement,eventType,handler){
    if(document.all){
        nodeElement.attachEvent("on" + eventType,handler);
    }else{
        nodeElement.addEventListener(eventType,handler,false);
    }
};






//Lang 相关
GLOBAL.namespace("Lang");

GLOBAL.Lang.trim = function(ostr){
    return ostr.replace(/^\s+|\s+$/g,"");
};
GLOBAL.Lang.isNumber = function (s){
    return !isNaN(s);
};
GLOBAL.Lang.extend = function (subClass,superClass){
    var F = function(){};
    F.prototype = superClass.prototype;
    subClass.prototype = new F();
    subClass.prototype.constructor = subClass;
    subClass.superclass = superClass.prototype;
    if(superClass.prototype.constructor == Object.prototype.constructor){
        superClass.prototype.constructor = superClass;
    }
};


/**
 * Created by Administrator on 2017/8/11.
 */
//���������ռ亯��
var GLOBAL = {};

GLOBAL.namespace=function(str){

    var arr=str.split("."),o=GLOBAL;

    for(i=(arr[0]=="GLOBAL")? 1:0; i<arr.length; i++){

        o[arr[i]]= o[arr[i]] || {};

        o=o[arr[i]];

    }

};

//DOM  ���
GLOBAL.namespace("Dom");
//��..�������Ԫ��
GLOBAL.Dom.insertAfter = function(newElement,targetElement){
    var parentNote = targetElement.parentNode;
    if(targetElement == parentNote.lastElementChild){
        parentNote.appendChild(newElement);
    }else{
        parentNote.insertBefore(newElement,targetElement.nextElementSibling);
    }
};

//��ȡ id ��Ԫ��
GLOBAL.Dom.get=function(node){
    node=(typeof node =="string") ? document.getElementById(node) : node;
    return node;
};

//��ȡ class ��Ԫ��
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

//�õ���һ���ֵܵ�Ԫ�ؽڵ�
GLOBAL.Dom.getNextElement = function (node){
    if(node.nodeType == 1){
        return node;
    }
    if(node.nextSibling){
        return getNextElement(node.nextSibling)
    }
    return null;
};

//����µ�Class
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
//����Class
GLOBAL.Dom.addClass = function (node,str){
    if(!new RegExp("(^|\\s+)"+str).test(node.className)){
        node.className = node.className + " " +str;
    }
};

//ɾ��Class
GLOBAL.Dom.removeClass = function (node,str){
    node.className = node.className.replace(new RegExp("(^|\\s+)"+str),"");
};



//�ƶ�Ԫ��
GLOBAL.Dom.moveElement = function (elemenID,final_x,final_y,interval){
    //�ƶ�Ԫ��
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

//�õ���һ���ֵܽڵ� �ж� IE �� Firefox �Ĳ���
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

//����͸����(id��͸����)
GLOBAL.Dom.setOpacity = function (nodeElement,level){
    if (document.all){
        nodeElement.style.filter = 'alpha(opacity='+ level +')';
    }else{
        nodeElement.style.opacity = level / 100 ;
    }
};






//Event ���
GLOBAL.namespace("Event");
//onload�¼�����
GLOBAL.Event.addLoadEvent = function (func){
    /*1.��window.onload�¼��Ĵ������������oldonload*/
    var oldonload = window.onload;
    /*2.���window.onloadû�а��κκ���,���������µĺ���
     *3.�����window.onload���Ѿ����˺���,�Ͱ��º���׷�ӵ�ĩβ��
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

//IE �� Firefox ����
GLOBAL.Event.getEventTarget = function (e) {
    e = window.event || e;
    return e.srcElement || e.target;
};

//��ֹð���¼�
GLOBAL.Event.stopPropagation = function (e) {
    e = window.event || e;
    if(document.all){
        e.cancelBubble = true;
    }else{
        e.stopPropagation();
    }
};

//����click�¼�
GLOBAL.Event.on = function (nodeElement,eventType,handler){
    if(document.all){
        nodeElement.attachEvent("on" + eventType,handler);
    }else{
        nodeElement.addEventListener(eventType,handler,false);
    }
};






//Lang ���
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


/**
 * Created by Administrator on 2017/8/7.
 */
//��..�������Ԫ��
function insertAfter(newElement,targetElement){
    var parentNote = targetElement.parentNode;
    if(targetElement==parentNote.lastElementChild){
        parentNote.appendChild(newElement);
    }else{
        parentNote.insertBefore(newElement,targetElement.nextElementSibling);
    }
}

//onload�¼�����
function addLoadEvent(func){
    /*1.��window.onload�¼��Ĵ������������oldonload*/
    var oldonload = window.onload;
    /*2.���window.onloadû�а��κκ���,���������µĺ���
    *3.�����window.onload���Ѿ����˺���,�Ͱ��º���׷�ӵ�ĩβ��
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

//����µ�Class
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

//�ƶ�Ԫ��
function moveElement(elemenID,final_x,final_y,interval){
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
}


//���������ռ亯��
var GLOBAL = {};

GLOBAL.namespace=function(str){

    var arr=str.split("."),o=GLOBAL;

    for(i=(arr[0]=="GLOBAL")? 1:0; i<arr.length; i++){

        o[arr[i]]= o[arr[i]] || {};

        o=o[arr[i]];

    }

};

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
function moveElement(elementID,final_x,final_y,interval){
    if(!document.getElementById(elementID)) return false;
    var elem = document.getElementById(elementID);
    var xpos = parseInt(elem.style.left);
    var ypos = parseInt(elem.style.top);
    if(xpos==final_x && ypos == final_y){
        return false;
    }
    if(xpos<final_x){
        xpos++;
    }
    if(xpos>final_x){
        xpos--;
    }
    if(ypos<final_y){
        ypos++;
    }
    if(ypos>final_y){
        ypos--;
    }
    elem.style.left=xpos+"px";
    elem.style.top=ypos+"px";
    var repeat = "moveElment("+elementID+","
}

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

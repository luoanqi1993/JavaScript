/**
 * Created by Administrator on 2017/8/7.
 */
function insertAfter(newElement,targetElement){
    //得到目标元素的父节点
    var parentNote = targetElement.parentNode;
    if(targetElement==parentNote.lastElementChild){
        parentNote.appendChild(newElement);
    }else{
        parentNote.insertBefore(newElement,targetElement.nextElementSibling);
    }
}
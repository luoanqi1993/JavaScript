/**
 * Created by Administrator on 2017/8/7.
 */
function insertAfter(newElement,targetElement){
    //�õ�Ŀ��Ԫ�صĸ��ڵ�
    var parentNote = targetElement.parentNode;
    if(targetElement==parentNote.lastElementChild){
        parentNote.appendChild(newElement);
    }else{
        parentNote.insertBefore(newElement,targetElement.nextElementSibling);
    }
}
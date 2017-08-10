/**
 * Created by Administrator on 2017/8/7.
 */
function addLoadEvent(func){
    /*1.��window.onload�¼��Ĵ������������oldonload*/
    /*2.���window.onloadû�а��κκ���,���������µĺ���
     *3.�����window.onload���Ѿ����˺���,�Ͱ��º���׷�ӵ�ĩβ��
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
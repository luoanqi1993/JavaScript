/**
 * Created by Administrator on 2017/8/7.
 */
function displayAbbreviation(){
    if(!document.getElementsByTagName || !document.createElement || !document.createTextNode)return false;
//        ȡ���������Դ�
    var abbreviations = document.getElementsByTagName("abbr");
    if(abbreviations.length<1){return false}
    var defs = new Array();
//        ������Щ���Դ�
    for(var i=0;i<abbreviations.length;i++){

        var current_abbr = abbreviations[i];
        if(current_abbr.childNodes.length<1)continue;

        var definition = abbreviations[i].getAttribute("title");
        var key = abbreviations[i].innerHTML;
        defs[key]=definition;
    }
    console.log(defs);
//        ���������б�
    var dl  = document.createElement("dl");
//        ��������
    for(key in defs){
        var def=defs[key];
//        �����������
        var dt = document.createElement("dt");
        var dt_txt = document.createTextNode(key);
        dt.appendChild(dt_txt);
//        ������������
        var dd=document.createElement("dd");
        var dd_txt = document.createTextNode(def);
        dd.appendChild(dd_txt);
//        ��������ӵ������б�
        dl.appendChild(dt);
        dl.appendChild(dd);
    }
    if(dl.childNodes.length<1)return false;
//       ��������
    var header = document.createElement("h2");
    var h_txt = document.createTextNode("Abbreviations");
    header.appendChild(h_txt);
//       �ѱ���Ͷ����б���ӵ�ҳ��
    document.body.appendChild(header);
    document.body.appendChild(dl);

}
displayAbbreviation();
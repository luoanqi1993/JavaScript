/**
 * Created by Administrator on 2017/8/7.
 */
function displayAbbreviation(){
    if(!document.getElementsByTagName || !document.createElement || !document.createTextNode)return false;
//        取得所有缩略词
    var abbreviations = document.getElementsByTagName("abbr");
    if(abbreviations.length<1){return false}
    var defs = new Array();
//        遍历这些缩略词
    for(var i=0;i<abbreviations.length;i++){

        var current_abbr = abbreviations[i];
        if(current_abbr.childNodes.length<1)continue;

        var definition = abbreviations[i].getAttribute("title");
        var key = abbreviations[i].innerHTML;
        defs[key]=definition;
    }
    console.log(defs);
//        创建定义列表
    var dl  = document.createElement("dl");
//        遍历定义
    for(key in defs){
        var def=defs[key];
//        创建定义标题
        var dt = document.createElement("dt");
        var dt_txt = document.createTextNode(key);
        dt.appendChild(dt_txt);
//        创建定义描述
        var dd=document.createElement("dd");
        var dd_txt = document.createTextNode(def);
        dd.appendChild(dd_txt);
//        把它们添加到定义列表
        dl.appendChild(dt);
        dl.appendChild(dd);
    }
    if(dl.childNodes.length<1)return false;
//       创建标题
    var header = document.createElement("h2");
    var h_txt = document.createTextNode("Abbreviations");
    header.appendChild(h_txt);
//       把标题和定义列表添加到页面
    document.body.appendChild(header);
    document.body.appendChild(dl);

}
displayAbbreviation();
/**
 * Created by Administrator on 2017/8/8.
 */
function moveElement(elemenID,final_x,final_y,interval){
    //ÒÆ¶¯ÔªËØ
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
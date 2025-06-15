var fenetre_action = document.getElementById("actions");
var btn_action = document.getElementById("btn_actions");
var back = document.getElementById("back_home");



btn_action.onclick= function(){
    show_fenetre_action();
}

back.onclick=function(){
    close_fenetre_action();
}

function show_fenetre_action(){
    fenetre_action.style.display="flex";
}
function close_fenetre_action(){
    fenetre_action.style.display="none";
}
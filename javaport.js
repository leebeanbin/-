var backColor = document.querySelector("body");


function bottomColor(type){
    var every_div = document.getElementsByTagName("div");
    every_div[0].style.borderBottomColor = type;
    
}

function Link(sel){
    var anchor_color = document.querySelectorAll("a");

    bottomColor(sel);

    var i = 0;
    while (i < anchor_color.length){
        anchor_color[i].style.color = sel;
        anchor_color[i].style.borderColor = sel;
        i++;
    }
    

}

function Changer(){

    var one_button = document.querySelector("#weather");
    var border_color = document.getElementById("borderColor");

    if(one_button.value === "NIGHT"){

        one_button.value = 'day';

        backColor.style.color = "white";
        border_color.style.color = "white";
        border_color.style.borderRightColor ="white";
        Link("white");

        backColor.style.backgroundColor = "black";
        
}
    else{

        one_button.value = 'NIGHT';
        
        backColor.style.color = "black";
        border_color.style.color = "black";
        border_color.style.borderRightColor ="black";
        Link("black");

        backColor.style.backgroundColor = "white";

    }

    }

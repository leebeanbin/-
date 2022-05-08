function NIGHT(){
    var backColor = document.querySelector("body")
    backColor.style.color = "white";
    backColor.style.backgroundColor = "black";

    var title_color = document.getElementsByClassName("Lists");
    for ( var i = 0; i < title_color.length; i ++){
        title_color[i].style.color = "white";
    }

    var border_color = document.getElementsByClassName("borderColor");
    for ( var i = 0; i < border_color.length; i ++){
        border_color[i].style.color = "white"
    }

}

function DAY(){
    var backColor = document.querySelector("body")
    backColor.style.color = "black";
    backColor.style.backgroundColor = "white";

    var title_color = document.getElementsByClassName("Lists");
    for ( var i = 0; i < title_color.length; i ++){
        title_color[i].style.color = "black";
    }

    var border_color = document.getElementsByClassName("borderColor");
    for ( var i = 0; i < border_color.length; i ++){
        border_color[i].style.color = "black"
    }

}

function Changer(){
    var backColor = document.querySelector("body")
    if(backColor.style.color = "black"){
        
        backColor.style.color = "white";
        backColor.style.backgroundColor = "black";

        var title_color = document.getElementsByClassName("Lists");
        for ( var i = 0; i < title_color.length; i ++){
            title_color[i].style.color = "white";
        }

        var border_color = document.getElementsByClassName("borderColor");
        for ( var i = 0; i < border_color.length; i ++){
            border_color[i].style.color = "white"
        }
        }

    else{
        backColor.style.color = "black";
        backColor.style.backgroundColor = "white";

        var title_color = document.getElementsByClassName("Lists");
        for ( var i = 0; i < title_color.length; i ++){
        title_color[i].style.color = "black";
    }

        var border_color = document.getElementsByClassName("borderColor");
        for ( var i = 0; i < border_color.length; i ++){
        border_color[i].style.color = "black"
    }    
}
}
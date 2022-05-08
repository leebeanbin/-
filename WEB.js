
function color(){
    var elements = document.getElementsByClassName("C1");
    for ( var i = 0; i < elements.length; i++){
        elements[i].style.color = "white";
    }

    var backColor = document.getElementById("ground");
    backColor.style.backgroundColor = "black"

}

function Return(){
    var elements = document.getElementsByClassName("C1");
    for ( var i = 0; i < elements.length; i++){
        elements[i].style.color = "black";
    }

    var ReBackColor = document.getElementById("ground");
    ReBackColor.style.backgroundColor = "white"


}


var i = 0;

function overlap(color){
    var elements = document.getElementsByClassName("C1");
    for ( var c = 0; c < elements.length; c++){
        elements[c].style.color = color;
    }

    var backColor = document.getElementById("ground");
    if (color === "white"){
        backColor.style.backgroundColor = "black";
    }
    else{
        backColor.style.backgroundColor = "white";
    }
    
}

function color(){
    overlap("white")

    i ++;
    if (i > 5){
        alert("BOOM!");

        if(i > 6){
            i = 0;
        }
    }
}

function Return(){
    overlap("black")
}






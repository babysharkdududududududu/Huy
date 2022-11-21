document.getElementById("product").addEventListener("mouseover", mouseOver);
document.getElementById("product").addEventListener("mouseout", mouseOut);

function mouseOver() {
        document.getElementById("icon-up").style.transition = "0.3s"
        document.getElementById("icon-up").style.rotate = "180deg";
}

function mouseOut() {
    document.getElementById("icon-up").style.rotate = "0deg";
}    
        
       
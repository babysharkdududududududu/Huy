
var btnSearch = document.getElementById("btnSearch").addEventListener("click", click)

function click(){
    var valueSearch = document.getElementById("search").value
   
    
    if(valueSearch === "IPHONE" || valueSearch === "iphone" || valueSearch === "Iphone"){
        window.location.href = "../html/iphone.html"
    }

    if(valueSearch === "SamSung" || valueSearch === "samsung" || valueSearch === "SAMSUNG"|| valueSearch==="Samsung"){
        window.location.href = "../html/samsung.html"
    }
    if(valueSearch === "Phụ kiện" || valueSearch === "phụ kiện" || valueSearch === "PHỤ KIỆN"|| valueSearch==="Phụ Kiện"){
        window.location.href = "../html/phukien.html"
    }
}



$(document).ready(function(){
    $("#addBtn").click(function(){
        $("#myModal").modal()
})

var i = 1;
function checkSL(){
    var soluong = $("#soluong").val()
                    
    if(soluong==""){
        $("#errsoluong").html("Không được để trống")
        return false
    }
    if(eval(soluong)<=0){
        $("#errsoluong").html("Không được nhập số âm và 0")
        return false
    }
    
    $("#errDiaChiNhanBao").html("*")
        return true
    }
    $("#soluong").blur(checkSL)
              

   $("#btnLuu").click(function(){
        if(!checkSL()){
            alert("Nhập đầy đủ thông tin vào")
            return false;
        }
        var ten = $(".tensp").text();
        var gia =  $(".giasp").val();
        var soluong = $("#soluong").val()
        var them = 
            "<tr><td>" + (i++) +
            "</td><td>" + ten +
            "</td><td>" + gia +
            "</td><td>" + soluong +
                       
            "</td></tr>"
            $("#tbody").append(them)
            $("#myModal").modal("hide")
             return true
    })
})
function tinhtien(){
    var soluong =document.getElementById("soluong").value
   
    let dongia = Number(document.getElementById("dongia").innerHTML);
    var sl = eval(soluong)
    let tongtien = sl*dongia;
    thanhtien.innerHTML = tongtien

}
          
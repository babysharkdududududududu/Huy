var x = document.getElementById('login')
        var y = document.getElementById('register')
        var z = document.getElementById('btn')
        function register(){
            x.style.left = "-900px"
            y.style.left = "50px"
            z.style.left = "110px"
        }
        function login(){
            y.style.left = "-900px"
            x.style.left= "50px"
            z.style.left = "0px"
        } 
function checkID(){
    var ID = /^[A-Za-z0-9]{6,20}$/
    var t = document.getElementById("txtID").value
    if(ID.test(t)){
        document.getElementById("errID").innerHTML = "";
        return true;
    }
    else{
        
        document.getElementById("errID").innerHTML = "Sai cú pháp";
        document.getElementById("errID").style.color = "red"
        return false;
    }
}
function checkPass(){
    var Pass = /^[0-9]{8,}$/
    var t = document.getElementById("txtPW").value
    if(Pass.test(t)){
        document.getElementById("errPW").innerHTML = "";
        return true;
    }
    else{
        
        document.getElementById("errPW").innerHTML = "Sai cú pháp";
        document.getElementById("errPW").style.color = "red"
        return false;
    }
}
function checkRPass(){
    var t1 = document.getElementById("txtPW").value
    var t2 = document.getElementById("txtRPW").value
    if(t1 != t2){
        document.getElementById("errRPW").innerHTML ="Không khớp";
        document.getElementById("errRPW").style.color = "red"
        return false;;
    }
    else{
        document.getElementById("errRPW").innerHTML = ""
        return true;
    }
}
function checkName(){
    var hoTen = /^([A-Za-z]+)((\s{1}[A-Za-z]+){1,})$/
    var t = document.getElementById("txtUN").value
    if(hoTen.test(t)){
        document.getElementById("errUN").innerHTML = "";
        return true;
    }
    else{
        document.getElementById("errUN").innerHTML = "Sai cú pháp";
        document.getElementById("errUN").style.color = "red"
        return false;
    }
}

function DK(){    
    var t = checkID();
    var t1 = checkRPass();
    var t3 = checkName();
    var t4 = checkPass();       
        if(t && t1 && t3 && t4)  
        {
            var x = document.querySelector("regis")
            alert("Đăng ký thành công aaaaaaaa");
            location.assign("../html/formlogin.html");
            document.getElementById('regis').type = "submit"
            return true
        }else{
            document.getElementById("regis").type = "button"
            alert("Đăng ký thất bại")
            return false
        }
    }
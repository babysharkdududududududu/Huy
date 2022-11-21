const User = [
    {
        USERNAME: 'GiaHuy1202',
        PASSWORD: '12022002'
    }
]
    function dangNhap()
    {
        var txtUser = document.getElementById("txtName").value;
        var txtPass = document.getElementById("txtPass").value;
        var checklogin = User.some(value=>value.USERNAME == txtUser && value.PASSWORD == txtPass)

        if(checklogin){
            // window.location.href = "../html/amination.html"
            window.open("../html/amination.html")
         }
         else{
             alert("sai")
         }
        
    }
    
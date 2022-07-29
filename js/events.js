$(document).ready(function(){
    $("#sname,#sclass,#scountry").focus(function(){
        $(this).css("background-color","red")
    });
    $("#sname,#sclass,#scountry").blur(function(){
        $(this).css("background-color","")
    });
    $("#scountry").change(function(){
        $(this).css("background-color","yellow")
    });
    $("#sname,#sclass").select(function(){
        $(this).css("background-color","brown")
    });
    $("#sform").submit(function(){
        window.alert("Form Submitted");
    });
});
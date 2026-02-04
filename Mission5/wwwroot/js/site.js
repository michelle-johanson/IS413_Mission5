$("#btnSubmit").click(function(){
    alert("From=" + $("#txtFrom").val() +
        ", Subject=" + $("#txtSubject").val() +
        ", Message=" + $("#txtMessage").val());
    $("#imgPangolin").fadeOut("slow");
});
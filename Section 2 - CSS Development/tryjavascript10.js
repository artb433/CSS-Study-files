function Register() {
    var Id=document.getElementById("txtId").value;
    var name=document.getElementById("txtName").value;
    var price=document.getElementById("txtPrice").value;
    var mfd=document.getElementById("txtMfd").value;
    var yes=document.getElementById("optYes");
    var no=document.getElementById("optNo");
    if(yes.checked)
    stock=yes.value;
    if(no.checked)
    stock=no.value;
    var city=document.getElementById("lstCities").value;
}
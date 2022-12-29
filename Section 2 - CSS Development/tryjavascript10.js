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

    document.getElementById("lblId").innerText=Id;
    document.getElementById("lblName").innerText=name;
    document.getElementById("lblPrice").innerText=price;
    document.getElementById("lblMfd").innerText=mfd;
    document.getElementById("lblStock").innerText=stock;
    document.getElementById("lblCity").innerText=city;
}
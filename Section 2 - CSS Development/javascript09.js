function DeleteClick () {
    x=confirm("Are you sure you want to delete");
    msg=document.getElementById("msg");
    (x==true)?msg.innerText="Record deleted.":msg.innerHTML="<font color='red'>action canceled</font>";
}
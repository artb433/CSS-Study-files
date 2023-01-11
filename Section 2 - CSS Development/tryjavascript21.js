function switchCase(){
    var x=0;
    switch(x)
    {
        case 0:
            document.write(" zero");
        case 1:
            document.write(" one");
        break;
        case 2:
            document.write(" two");
        break;
        default:
            document.write("Enter numbers 0 to 2");
        break;
    }
}
switchCase();

function checkUser(){
    var Users=[
        {Name:"Tahiru"},
        {Name:"John"},
        {Name:"David"},
        {Name:"Rohit"}
    ]
    var userName=document.getElementById("txtName").value;
    var msg=document.getElementById("msg");

    for(var i=0;i<Users.length;i++){
        if(userName==Users[i].Name)
        {
            msg.innerHTML="username taken by another";
            return;
        }
        else{
            msg.innerHTML="Available";

        }
    }
}
checkUser();
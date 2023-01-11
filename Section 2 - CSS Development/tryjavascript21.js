function switchCase(){
    var x=0;
    switch(x)
    {
        case 0:
            document.write("zero");
        case 1:
            document.write("one");
        break;
        case 2:
            document.write("two");
        break;
        default:
            document.write("Enter numbers 0 to 2");
        break;
    }
}
switchCase();

function checkUser(){
    var users=[
        {Name:"Tahiru"},
        {Name:"John"},
        {Name:"David"},
        {Name:"Rohit"}
    ]
    var userName=document.getElementById("txtName").value;
    var msg=document.getElementById("msg");

    for(var i=0;i<users.length;i++){
        if(userName==users[i].Name)
        {
            msg.innerHTML="username taken by another";
        }
        else{
            msg.innHTML="username available";
        
        }
    }
}
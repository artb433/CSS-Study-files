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

function changeCode(){
    var a = Math.random()*10;
    var b = Math.random()*10;
    var c = Math.random()*10;
    var d = Math.random()*10;
    var e = Math.random()*10;

    document.getElementById("msg2").innerHTML=a+b+c+d+e
}
changeCode();

function greetUser(){
    var name = prompt("Enter your name: ");
    var days = ["sunday","monday","tuesday","wednesday","Thursday","friday","saturday"];
    var months = ["Jan","Feb","Mar","April","May","June","July","Aug","Sep","Oct","Nov","Dec"];

    var now = new Date();
    var weekday = now.getDay();
    var day = now.getDate();
    var month = now.getMonth();
    var year = now.getFullYear();

    var today = days[weekday]+" "+day+","+months[month]+" "+year;

    document.getElementById("msg3").innerHTML=today;
    var pic=document.getElementById("pic");
    document.getElementById("uname").innerHTML="Hello "+name;
    var hrs=now.getHours()
    if(hrs>=5 && hrs<12){
        pic.src="beach.jpg"
    }else if(hrs>=12 && hrs<17){
        pic.src="boss.png"
    }else if(hrs>=17 && hrs<=23){
        pic.src="ck.png"
    }
}
greetUser();

var newWindow;
function viewLarge(){
   newWindow = window.open("boss.png","Perfume","width=400,height=400");

}
viewLarge();

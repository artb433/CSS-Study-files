function tryNull(){
    var name = prompt("Your name:");
    if(name==""){
        document.write("name can't be empty");
    }
    else if(name==null){
        document.write("You pressed cancel");
    }
    else{
        document.write("Hello "+name);
    }
}
tryNull();
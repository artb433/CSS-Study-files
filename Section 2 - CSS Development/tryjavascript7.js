function CreateFolder(){
    var name = prompt("folder name: ", "New_Folder");
    var msg=document.getElementById("msg");
    (name==null)? document.write("Action cancelled"): msg.innerHTML+="folder created : " +name+"<br>";
}
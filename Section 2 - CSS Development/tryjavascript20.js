function f8(){
    var name = "John";
    var age = 23;
    var isPermanentRole = true;
    var cities = ["Delhi","Hydrabad"];


    var getDetails = function(a,b){
        return a+b;
    }
    
    document.write("Datatype of NAME: "+(typeof name)+"<br/>" + "Datatype of Age : "+(typeof age)+ "<br/>"+"Datatype of role: "+(typeof isPermanentRole)+"<br/>"+"Datatype of cities : "+(typeof cities));
}
f8();

function selectHarddisk(){
    var lstHdd=document.getElementById("lstHdd");
    var txtRam=document.getElementById("txtRam");
    if(parseInt(lstHdd.value)>=5){
        txtRam.disabled=false;
        lstHdd.disabled=true;
    }
}
function selectRam(){
    var txtRam=document.getElementById("txtRam");
    var lstGraphic=document.getElementById("lstGraphic");
    if(txtRam.value>=4){
        lstGraphic.disabled=false;
        txtRam.disable=true;
    }
}
function selectGraphic(){
    var lstGraphic=document.getElementById("lstGraphic");
    var btnInstall=document.getElementById("btnInstall");
    if(lstGraphic.value="yes"){
        btnInstall.disabled=false;
        lstGraphic.disabled=true;
    }

}
function install(){
    document.write("game installed successfully");
}
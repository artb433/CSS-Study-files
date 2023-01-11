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
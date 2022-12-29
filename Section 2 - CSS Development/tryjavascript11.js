function f1() {
    "use strict";
    var x=10;
    document.write("x: " + x );
}
f1();

function f2() {
    "use strict";
    
    x=10;
    if(x==10){
        var x=6;
    }
    document.write(" x= " + x);
    var x;	
}	
f2();
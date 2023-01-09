function verifyPassword(){
    var pwd=document.getElementById("txtpwd").value;
    var msg=document.getElementById("msg");
    var grade=document.getElementById("grade");

    function showGrade(min,max,value,low,high) {
        grade.min=min;
        grade.max=max;
        grade.value=value;
        grade.low=low;
        grade.high=high;
        
    }

    var regExp=/(?=*[A-Z])\w{4,15}/;

    if(pwd.match(regExp)){
        msg.innerHTML="Strong password";
        showGrade(1,100,100,0,0);
    }else{
        if(pwd.length<4){
            msg.innerHTML="Poor password";
            showGrade(1,100,100,60,80);
        }else{
            msg.innerHTML="Weak password";
            showGrade(1,100,100,40,80);
        }
    }
}
verifyPassword();
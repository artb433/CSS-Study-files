function getDetails(){
    document.getElementById("family").innerHTML=navigator.appName;
    document.getElementById("lang").innerHTML=navigator.language;
    document.getElementById("cookie").innerHTML=navigator.cookieEnabled;
    document.getElementById("agent").innerHTML=navigator.userAgent;

    for(var i=0;i<navigator.plugins.length;i++){
        document.getElementById("plugins").innerHTML+=navigator.plugins[i].name+"<br>";
    }

    var msg=document.getElementById("msg");
    if(navigator.plugins["chrome pdf viewer"==undefined]){
        msg.innerHTML="no";
    }else{
        msg.innerHTML="yes";
    }

    
}
getDetails();
function showProducts(){
    var productNames = ["samsung", "iphone", "ipad", "macbook", "macbook pro", "imac"];
    var productPrices = [1000, 2000, 3000, 4000, 5000, 6000];
    var productImages = ["boss.png", "ck.png", "zara.png","boss.png", "ck.png", "zara.png"];

    var prodName=document.getElementById("prodName");
    var prodPrice=document.getElementById("prodPrice");
    var prodImage=document.getElementById("pic");
    var txtRange=document.getElementById("txtRange");

    prodName.innerHTML=productNames[txtRange.value];
    prodPrice.innerHTML=productPrices[txtRange.value];
    prodImage.src=productImages[txtRange.value];

}
showProducts();
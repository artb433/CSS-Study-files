function showProductDetails(){
    var myProducts = [
        {Id: 1, Name: "Boss", price: 4500, photo: "boss.png"},
        {Id: 2, Name: "Zara", price: 4670, photo: "zara.png"},
        {Id: 3, Name: "CK", price:4650, photo: "ck.png"},
    ];

    var pic=document.getElementById("pic");
    var txtRange=document.getElementById("txtRange");
    var prodId=document.getElementById("prodId");
    var prodName=document.getElementById("prodName");
    var prodPrice=document.getElementById("prodprice");

    pic.src=myProducts[txtRange.value].photo;
    prodId.innerHTML=myProducts[txtRange.value].Id;
    prodName.innerHTML=myProducts[txtRange.value].Name;
    prodPrice.innerHTML=myProducts[txtRange.value].price;
}
showProductDetails
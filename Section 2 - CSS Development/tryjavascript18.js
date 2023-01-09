function javascriptObjectTry(){
    var product={
        Id:1,
        Name: "samsung",
        price: 100,
        IsInStock: false,
        Quantity: 10,
        shippedTo: ["US","GHANA"],
        Total: function(){
            return product.Quantity*product.price;
        }
    }
    if(product.IsInStock==true)
        stock="Available";       
        else 
            stock="Not Available";       
    
            
    
    document.write("Id : "+product.Id+ "<br/>" +"Name : "+product.Name+ "<br/>" +"Price : "+product.price+ "<br/>" +"IsInStock : "+stock+ "<br/>" +"shipped to : "+product.shippedTo+ "<br/>" +"Total amount : "+product.Total()+ "<br/>")
   
}
javascriptObjectTry();
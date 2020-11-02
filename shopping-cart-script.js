var cartSymbol=document.querySelector("#cart-symbol");
var cartPage=document.querySelector(".cart");
cartSymbol.addEventListener("click", function(){
    cartPage.classList.add("cart-show");
    document.querySelector("#shop-page").classList.toggle("orange-on-cart");
    document.querySelector("#cover-photo").classList.toggle("orange-on-cart");
});

var cartTotal=0;

var cartCross=document.querySelector(".cross-cart i");
cartCross.addEventListener("click", function(){
    cartPage.classList.remove("cart-show");
    document.querySelector("#shop-page").classList.toggle("orange-on-cart");
    document.querySelector("#cover-photo").classList.toggle("orange-on-cart");
});

var cartProducts=document.querySelectorAll(".cart-product");

var proimages=document.querySelectorAll(".product-img");
var proname=document.querySelectorAll(".product-name");
var proprice=document.querySelectorAll(".price");
var products=[];
var buttons=document.querySelectorAll(".product1 span button");
for(var i=0;i<buttons.length;i++)
{
    var product={
        productImage: proimages[i],
        productPrice: Number(proprice[i].textContent.substring(1,6)),
        productName: proname[i],
        productCount: 0 
    };
    products.push(product);
}

buttons.forEach(function(item, index){
    item.addEventListener("click", function(){
        products[index].productCount+=1;
        //console.log(products[index].productPrice);
        cartTotal+=products[index].productPrice;
        // cartTotal=(cartTotal*100)/100;
        cartTotal=Math.round(cartTotal*100)/100;
        //console.log(cartTotal);
        document.querySelector("#cart-total span").textContent=cartTotal;
        cartProducts[index].lastElementChild.children[1].textContent=products[index].productCount;
        // cartPage.insertAdjacentHTML("beforeend", 'aaa<br>');
        if(products[index].productCount === 1)
        {
            cartProducts[index].classList.add("show-cart-product");
        }
        //crossCart();
        // console.log("pressed");
    });
})

// products.forEach(function(item,index){
//     if(item.productCount>0)
//     {
//         console.log(item.productCount);
//     }
// })


var minusQuantity=document.querySelectorAll(".minus-quantity");

minusQuantity.forEach(function(item,index){
    item.addEventListener("click", function(){
        products[index].productCount-=1;
        cartProducts[index].lastElementChild.children[1].textContent=products[index].productCount;
        cartTotal-=products[index].productPrice;
        cartTotal=Math.round(cartTotal*100)/100;
        document.querySelector("#cart-total span").textContent=cartTotal;
        if(products[index].productCount === 0)
        {
            cartProducts[index].classList.remove("show-cart-product");
        }
    })
})

var plusQuantity=document.querySelectorAll(".plus-quantity");

plusQuantity.forEach(function(item,index){
    item.addEventListener("click", function(){
        products[index].productCount+=1;
        cartProducts[index].lastElementChild.children[1].textContent=products[index].productCount;
        cartTotal+=products[index].productPrice;
        cartTotal=Math.round(cartTotal*100)/100;
        document.querySelector("#cart-total span").textContent=cartTotal;
        /*if(products[index].productCount === 0)
        {
            cartProducts[index].classList.remove("show-cart-product");
        }*/
    })
})

var removeBtn=document.querySelectorAll(".remove");

removeBtn.forEach(function(item,index){
    item.addEventListener("click", function(){
        console.log("aa");
        var cost=products[index].productCount * products[index].productPrice;
        products[index].productCount=0;
        cartTotal-=cost;
        cartTotal=Math.round(cartTotal*100)/100;
        document.querySelector("#cart-total span").textContent=cartTotal;
        cartProducts[index].classList.remove("show-cart-product");
    })
})

var clearCart=document.querySelector("#clear-cart");

clearCart.addEventListener("click", function(){
    cartTotal=0;
    document.querySelector("#cart-total span").textContent=cartTotal;
    for(var i=0;i<products.length;i++)
    {
        products[i].productCount=0;
        cartProducts[i].classList.remove("show-cart-product");
    }
})

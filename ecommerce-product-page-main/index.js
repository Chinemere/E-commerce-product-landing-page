// User Image Upload
// ================================//
let img = document.getElementById('pic');
let selectFile = document.getElementById('select-file')
selectFile.addEventListener("change", function (){
    if(this.files[0].type!="image/jpeg"&&  this.files[0].type!="image/png"&& this.files[0].type!="image/gif"){
        alert("Please insert a picture")
    } else{
        img.style.display="block"
        img.src=URL.createObjectURL(this.files[0])
        
    }
})
// ================================//



// adding and subtracting from the cart
// ================================//
let plus = document.getElementById("plus")
let minus = document.getElementById("minus")
let figure = document.getElementById('figure')


plus.addEventListener('click', function addToCart(e){
while (e){
    figure.innerText++
    e=false
}
return figure
})
minus.addEventListener("click", function minusFromCart(e){
   while(e){
    if (figure.innerText== 0){
        return
    }else{
        figure.innerText--
        e=false;
    }
}
return figure;
})
// ================================//


// Add to cart button
// ================================//
let addToCartButton = document.getElementById("add-to-cart-button")
let cartCounter = document.getElementById('cart-counter')
let qty = document.getElementsByClassName("qty")[0]
let quantityTotal= document.getElementsByClassName("quantity-total")[0]
let one = document.getElementsByClassName("one")[0]
let two = document.getElementsByClassName('two')[0]

addToCartButton.addEventListener("click", function addToCart(e){
    while(e){
        one.style.display="none"
        two.style.display="block"
        cartCounter.innerText= Number(cartCounter.innerText) + Number(figure.innerText)
        qty.innerText=cartCounter.innerText
        quantityTotal.innerText= 125 * Number(qty.innerText)

        e = false;
  
    }
    return cartCounter.innerText;
})
// ================================//


// Checkout button
// ================================//
let checkout = document.getElementsByClassName("checkout-button")[0]
checkout.addEventListener("click", ()=>{
    alert("Thanks for the patronage")
    window.location.reload()
})

// ================================//
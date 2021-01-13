$(function () {



for (i = 0; i < button.length; i++) {
    button.addEventListener('click', () => {
        cartNumbers(product[i]);
    })
}

function onLoadCartNumbers() {
    var productNumbers = localStorage.getItem('cartNumbers');

    if (productNumbers) {
        document.querySelector('.panier span').textContent = productNumbers;

    }

}

function cartNumbers(product) {
    console.log("the product clicked is " + product)
    var productNumbers = localStorage.getItem('cartNumbers');


    productNumbers = parseInt(productNumbers)

    if (productNumbers) {
        localStorage.setItem('cartNumbers', productNumbers + 1);
        document.querySelector('.panier span').textContent = productNumbers + 1;

    } else {
        localStorage.setItem('cartNumbers', 1)
        document.querySelector('.panier span').textContent = 1;
    }
    setItems(product)
}

function setItems(product) {
    var cartItems = localStorage.getItem('productsInCart');
    cartItems = JSON.parse(cartItems);

    if (cartItems != null) {
        console.log(cartItems[product.tag]);
        if(cartItems[product.nomArticle] != undefined){
            cartItems = {
                ...cartItems,
                [product.nomArticle]: product
        }
        cartItems[product.nomArticle].inCart += 1;
    } else {
        product.inCart = 1;
        var cartItems = {
            [product.nomArticle]: product
        }
    }

    localStorage.setItem("productsInCart", JSON.stringify(cartItems));
}
}

onLoadCartNumbers();
});
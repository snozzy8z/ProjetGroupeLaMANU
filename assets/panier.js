var carts = document.querySelectorAll('.card');

var product = [
    {
        idArticle: 1,
        nomArticle: "be quiet! Pure Power 11 350W 80PLUS Bronze ",
        descArticle: "L'alimentation PC be quiet! Pure Power 11 350W 80PLUS Bronze est une valeur sûre pour la conception de votre PC. Silencieuse, fiable et efficace (80PLUS Bronze), elle représente une solution de premier choix pour les intégrateurs ou pour réaliser un PC Gamer entrée/milieu de gamme.",
        prixArticle: "65.95",
        imageArticle: "./alim1.jpg",
        marqueArticle: "be quiet!",
        typeArticle:
        {
            type: "alim",
            watt: "350",
            modulaire: 0
        }
    },
    {
        idArticle: 2,
        nomArticle: " be quiet! Straight Power 11 450W 80PLUS Gold ",
        descArticle: "L'alimentation modulaire be quiet! Straight Power 11 offre un fonctionnement silencieux sans compromis au niveau de la qualité. Certifiée 80PLUS Gold, elle offre un excellent rendement énergétique. Un choix idéal pour les configurations silencieuses, les configurations multi-GPU, etc.",
        prixArticle: "107.95",
        imageArticle: "./alim2.jpg",
        marqueArticle: "be quiet!",
        typeArticle:
        {
            type: "alim",
            watt: "450",
            modulaire: 1
        }
    },
    {
        idArticle: 3,
        nomArticle: "Corsair HX1000 80PLUS Platinum",
        descArticle: "L'unité d'alimentation Corsair HX1000 80PLUS Platinum est conçue pour les plates-formes de jeu, les systèmes surcadencés, ou pour n'importe quel PC sur lequel une stabilité électrique à toute épreuve est essentielle.",
        prixArticle: "279.95",
        imageArticle: "./alim3.jpg",
        marqueArticle: "corsair",
        typeArticle:
        {
            type: "alim",
            watt: "900",
            modulaire: 1
        }
    },
    {
        idArticle: 4,
        nomArticle: "Corsair CX750F RGB 80PLUS Bronze (Blanc) ",
        descArticle: "Les blocs d'alimentation entièrement modulaires Corsair CX-F RGB Series fournissent une alimentation 80 PLUS Bronze efficace et durable à votre système. Vous profitez également d'un éclairage personnalisable dynamique grâce à un ventilateur RGB de 120 mm.",
        prixArticle: "119.95",
        imageArticle: "./alim4.jpg",
        marqueArticle: "corsair",
        typeArticle:
        {
            type: "alim",
            watt: "750",
            modulaire: 1
        }
    },
    {
        idArticle: 5,
        nomArticle: " Corsair CV550 80PLUS Bronze ",
        descArticle: "L'alimentation Corsair CV550 80PLUS Bronze bénéficie d'un câblage gainé noir pour s'intégrer en toute discrétion dans votre boitier. Les alimentations de la gamme Corsair CV sont idéales pour votre nouvel ordinateur grâce à leur certification 80 PLUS Bronze qui permet de fournir des tensions stables",
        prixArticle: "69.95",
        imageArticle: "./alim5.jpg",
        marqueArticle: "corsair",
        typeArticle:
        {
            type: "alim",
            watt: "550",
            modulaire: 0
        }
    }
]

for (i = 0; i < carts.length; i++) {
    carts[i].addEventListener('click', () => {
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
        if(cartItems[product.nomArticle] != undefined0{
            cartItems = {
                ...cartItems,
                [product.nomArticle]: product
        })
        cartItems[product.nomArticle].inCart += 1;
    } else {
        product.inCart = 1;
        var cartItems = {
            [product.nomArticle]: product
        }
    }

    localStorage.setItem("productsInCart", JSON.stringify(cartItems));
}

onLoadCartNumbers();
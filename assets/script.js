$(function () {
    //ajout event listener sur menu pour filtres du aside
    var dropdownmenu = document.getElementsByClassName("dropdown-item");
    for (const key in dropdownmenu) {
        if (Object.hasOwnProperty.call(dropdownmenu, key)) {
            const element = dropdownmenu[key];
            element.addEventListener("click", function () {
                switch (element.id) {
                    case 'menu-alim':
                        document.getElementById("menugauche-alim").style.display = "block";
                        document.getElementById("menugauche-disquedur").style.display = "none"
                        document.getElementById("menugauche-proco").style.display = "none"
                        document.getElementById("menugauche-ram").style.display = "none"
                        break;
                    case "menu-disquedur":
                        document.getElementById("menugauche-alim").style.display = "none";
                        document.getElementById("menugauche-disquedur").style.display = "block"
                        document.getElementById("menugauche-proco").style.display = "none"
                        document.getElementById("menugauche-ram").style.display = "none"
                        break;
                    case "menu-processeur":
                        document.getElementById("menugauche-alim").style.display = "none";
                        document.getElementById("menugauche-disquedur").style.display = "none"
                        document.getElementById("menugauche-proco").style.display = "block"
                        document.getElementById("menugauche-ram").style.display = "none"
                        break;
                    case "menu-ram":
                        document.getElementById("menugauche-alim").style.display = "none";
                        document.getElementById("menugauche-disquedur").style.display = "none"
                        document.getElementById("menugauche-proco").style.display = "none"
                        document.getElementById("menugauche-ram").style.display = "block"
                        break;
                    default:
                        break;
                }
            })
        }
    }

var test = document.getElementById("puissance-alim")
test.addEventListener("change", function () {
    document.getElementById("puissancealim").innerHTML = test.value;
})
//chargement Json pour remplir page
var main = document.querySelector('main');
fetch("./assets/listearticle.json")
    .then(response => response.json())
    .then(data => {
        for (const article of data) {
            // console.log(article);
            //on crée l'architecture de la card article
            var card = document.createElement("article");
            var divcont = document.createElement("div");
            var divleft = document.createElement("div");
            var img = document.createElement("img");
            var divmid = document.createElement("div");
            var titre = document.createElement("h4");
            var lientitre = document.createElement("a");
            var descr = document.createElement("p");
            var divright = document.createElement("div");
            var titreprix = document.createElement("p");
            var prix = document.createElement("p");
            var button = document.createElement("button");
            card.setAttribute("class", "card m-2 col-12 border-0");
            divcont.setAttribute("class", "row no-gutters");
            divleft.setAttribute("class", "col-md-3");
            img.setAttribute("class", "card-img");
            divmid.setAttribute("class", "card-body col-md-7 pl-3");
            titre.setAttribute("class", "card-title");
            lientitre.setAttribute("class", "lien-article");
            descr.setAttribute("class", "card-text card-description pl-2");
            divright.setAttribute("class", "card-body col-md-2 pl-3");
            titreprix.setAttribute("class", "card-title");
            prix.setAttribute("class", "card-text font-weight-bold");
            button.setAttribute("class", "btn btn-primary mt-5");
            img.src = "./assets/images/" + article.imageArticle;
            button.textContent = "Acheter";
            descr.textContent = article.descArticle;
            lientitre.href = "./detail_article.html?id=" + article.idArticle;
            lientitre.textContent = article.nomArticle;
            titreprix.textContent = "Prix :"
            prix.textContent = article.prixArticle;
            //on mets en forme tout le bousin
            divleft.appendChild(img);
            titre.appendChild(lientitre);
            divmid.appendChild(titre);
            divmid.appendChild(descr);
            divright.appendChild(titreprix);
            divright.appendChild(prix);
            divright.appendChild(button)
            divcont.appendChild(divleft)
            divcont.appendChild(divmid)
            divcont.appendChild(divright)
            card.appendChild(divcont);
            //on affiche l'article à la suite des précédents
            main.appendChild(card);
        }
    })
})
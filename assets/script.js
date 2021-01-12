$(function() {
    //ajout event listener sur menu pour filtres du aside
var dropdownmenu = document.getElementsByClassName("dropdown-item");
for (const key in dropdownmenu) {
    if (Object.hasOwnProperty.call(dropdownmenu, key)) {
        const element = dropdownmenu[key];
        element.addEventListener("click", function(){
            switch (element.id){
                case 'menu-alim':
                    document.getElementById("menugauche-alim").style.display="block";
                    document.getElementById("menugauche-disquedur").style.display ="none"
                    document.getElementById("menugauche-proco").style.display ="none"
                    document.getElementById("menugauche-ram").style.display ="none"
                    break;
                case "menu-disquedur":
                    document.getElementById("menugauche-alim").style.display="none";
                    document.getElementById("menugauche-disquedur").style.display ="block"
                    document.getElementById("menugauche-proco").style.display ="none"
                    document.getElementById("menugauche-ram").style.display ="none"
                    break;
                case "menu-processeur":
                    document.getElementById("menugauche-alim").style.display="none";
                    document.getElementById("menugauche-disquedur").style.display ="none"
                    document.getElementById("menugauche-proco").style.display ="block"
                    document.getElementById("menugauche-ram").style.display ="none"
                    break;
                case "menu-ram":
                    document.getElementById("menugauche-alim").style.display="none";
                    document.getElementById("menugauche-disquedur").style.display ="none"
                    document.getElementById("menugauche-proco").style.display ="none"
                    document.getElementById("menugauche-ram").style.display ="block"
                    break;  
                default:
                    break;
            }
        })
    }
}
var test = document.getElementById("puissance-alim")
test.addEventListener("change", function(){
    document.getElementById("puissancealim").innerHTML = test.value;


})
});
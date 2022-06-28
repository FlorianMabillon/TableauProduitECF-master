
// var assigné au html
const promoCheck = document.querySelector('#promoCheck');
const remiseCheck = document.querySelector('#remiseCheck');
const alphaCheck = document.querySelector('#alphaCheck');
const btnParametre = document.querySelector('#btnParametre');
// var assigné au formulaire
const choixModifierArticle = document.querySelector('#choixModifierArticle');
const promoModifier = document.querySelector('#promoModifier');
const choixRemise = document.querySelector('#choixRemise');
const valeurRemise = document.querySelector('#valeurRemise');
const btnChange = document.querySelector('#btnChange');
const btnAnnuler = document.querySelector('#btnAnnuler')


let produit1 = new Product("MICHAËL GREGORIO", "spectacle rodez",43.00, "Non", "Non");
let produit2 = new Product("DANIEL GUICHARD", "spectacle rodez",43.00, "Non", 20);
let produit3 = new Product("PC Portable Gaming MSI ", "ordinateur portable",1999.99, "Oui", 20);
let produit4 =new Product("Pc portable Gaming Asus", "ordinateur portable",1499.99, "Oui", 33);
let produit5 =new Product("Pc portable gaming Acer", "ordinateur portable",3499.99, "Non", "Non");

const ajoutTable = document.querySelector('#listeProduit');
const template = document.querySelector('#template');

let tableauProduits = [produit1,produit2,produit3,produit4,produit5];

let i = 0;
let iModif = 0;
// creation du tableau avec les produits
creerTableau();

filtrerPromo();
filtrerRemise();
filtrerAlpha();
afficherNomModifierProduits();
cocherRemiseModifier();
choixPromotion()

choixModifierArticle.addEventListener("change", getInfos)

btnChange.addEventListener('click', () => {
    
    if(promoModifier.checked == true){
        console.log(choixModifierArticle.value);
        tableauProduits[iModif].promotion="Oui"
    }
})

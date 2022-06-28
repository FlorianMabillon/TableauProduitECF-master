// creation d'un tableau avec les données
function creerTableau(){
    tableauProduits.forEach((produit) => {
    
        let clone = document.importNode(template.content, true);
        
        let td = clone.querySelectorAll('td')
        
        td[0].textContent = produit.name;
        td[1].textContent = produit.getCategory();
        td[2].textContent = produit.price.toFixed(2) + " €";
        td[3].textContent = produit.getPromotion();
        td[4].textContent = produit.discount;

        ajoutTable.appendChild(clone);
    })
}
// creation d'un filtre pour les promotions
function filtrerPromo(){
    promoCheck.addEventListener('change', () => {
        if(promoCheck.checked){
            ajoutTable.innerHTML = "";
            tableauProduits.forEach((produit) => {
                if(produit.getPromotion() === "Oui"){
            
                let clone = document.importNode(template.content, true);
            
                let td = clone.querySelectorAll('td')
            
                td[0].textContent = produit.name;
                td[1].textContent = produit.getCategory();
                td[2].textContent = produit.price.toFixed(2)+ " €";
                td[3].textContent = produit.getPromotion();
                td[4].textContent = produit.discount;
    
            ajoutTable.appendChild(clone);
            }
            
        }) 
        
        } else {
        ajoutTable.innerHTML = "";
        creerTableau();
    }
    })
}
// creation d'un filtre pour les remises
function filtrerRemise(){
    remiseCheck.addEventListener('change', () => {
        let listeRemise = document.querySelector('#remise')
        if(remiseCheck.checked){
            ajoutTable.innerHTML = "";
    
            tableauProduits.forEach((produit) => {
                if(produit.discount !== "Non"){
            
                let clone = document.importNode(template.content, true);
            
                let td = clone.querySelectorAll('td');
            
                td[0].textContent = produit.name;
                td[1].textContent = produit.getCategory();
                td[2].textContent = produit.price.toFixed(2)+ " €";
                td[3].textContent = produit.getPromotion();
                td[4].textContent = produit.discount;
    
            ajoutTable.appendChild(clone);
            }
        }) 
            for (let i = 0; i < tableauProduits.length; i++) {
    
                if (tableauProduits[i].getRemise() !== "Non") {
                    
                    let li = document.createElement('li');
            
                    li.textContent = "Le produit" + tableauProduits[i].name + "d'une valeur de : "
                    + tableauProduits[i].price + "€ coûte " + tableauProduits[i].nvPrix() + "€ avec remise";
            
                    listeRemise.appendChild(li);
                };
            }
        } else {
        ajoutTable.innerHTML = "";
        listeRemise.innerHTML = "";
        creerTableau();
    }
    })
}


function filtrerAlpha(){
    alphaCheck.addEventListener("change", () => {
        if(alphaCheck.checked){
            ajoutTable.innerHTML = "";
            tableauProduits.sort((a, b) => a.name.localeCompare(b.name))
            creerTableau();
        } else {
            
            ajoutTable.innerHTML = ""
            creerTableau();
        }
    })
}

// fonction lié au formulaire
// function formulaire(){

//     afficherNomModifierProduits()
//     choixPromotion()
//     cocherRemiseModifier()
// }

function afficherNomModifierProduits(){
    for(let i = 0; i < tableauProduits.length; i++) {
        let optn = tableauProduits[i].name;
        let el = document.createElement("option")
        el.textContent = optn;
        el.value = optn;
        
        choixModifierArticle.appendChild(el);   
    }
}
function choixPromotion(){
    if(tableauProduits[i].promotion=="Non"){
        promoModifier.checked=false;
    } else {
        promoModifier.checked=true;
    }
    if(tableauProduits[i].discount=="Non"){
        choixRemise.checked=false;
        valeurRemise.value="0"
    } else {
        
    }
}

function cocherRemiseModifier() {
    choixRemise.addEventListener("click", () => {
        if(choixRemise.checked){
            valeurRemise.style.visibility = 'visible';
        } else {
            valeurRemise.style.visibility = 'hidden';
        }
    })
}

function getInfos(e) {
    for(let i = 0; i < tableauProduits.length; i++) {
        if (tableauProduits[i].name==e.target.value) {
            if (tableauProduits[i].promotion=="Non") {
                promoModifier.checked=false;
            } else {
                promoModifier.checked=true;
            }
            if(tableauProduits[i].discount=="Non"){
                valeurRemise.value="0"
            }else{
                valeurRemise.value=tableauProduits[i].discount;
            }
        }
    }
    
}




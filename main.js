let article1 ={
    type:"pc portable",
    nom:"MacBook pro",
    prix: 1500, 
}
let article2 ={
    type:"tablette",
    nom:"Ipad mini",
    prix: 800, 
}
let article3 ={
    type:"tablette",
    nom:"Ipad pro",
    prix: 1200, 
}
let article4 ={
    type:"téléphone",
    nom:"Iphone 14",
    prix: 749, 
}
let article5 ={
    type:"téléphone",
    nom:"Iphone 16",
    prix: 1159, 
}
let player ={
    panier:[],
    ajouter(article){
        this.panier.push(article)
    }
}
let enumerer = ()=>{
    let choix = prompt("Un vendeur viens vous voir: Bonjour, bienvenue chez Apple! Voulez vous voir nos produits?")
    while(choix != "oui" && choix != "non"){
        choix = prompt("Je n'ai pas compris, voulez vous voir nos produits? (oui/non)")
    }
    if(choix == "oui"){
        alert("type: "+article1.type+" nom: "+article1.nom)
        alert("type: "+article2.type+" nom: "+article2.nom)
        alert("type: "+article3.type+" nom: "+article3.nom)
        alert("type: "+article4.type+" nom: "+article4.nom)
        alert("type: "+article5.type+" nom: "+article5.nom)
        shopping()
    }else if(choix == "non"){
        alert("Et bien cassez vous de la, vous n'avez rien a faire ici!")
    }

}
let entrer = ()=>{
    let choix = prompt("Voulez vous rentrer dans l'Apple Store?")
    while(choix != "oui" && choix != "non"){
        choix = prompt("Je n'ai pas compris, oui ou non?")
    }
    if(choix == "oui"){
        alert("Vous entrez dans l'Apple Store")
        enumerer()
    }else if(choix == "non"){
        alert("Très bon choix, ne rentre jamais dans ce temple de l'arnaque")
    }

}
let shopping = ()=>{
    alert(article1.nom+", "+article2.nom+", "+article3.nom+", "+article4.nom+", "+article5.nom)
    let choix = prompt("Que voulez vous acheter?")
    while(choix != article1.nom && choix != article2.nom && choix != article3.nom && choix != article4.nom && choix != article5.nom){
        choix = prompt("Article introuvable, entrez le nom de l'article")
    }
    if(choix == article1.nom){
        player.ajouter(article1)
        alert(article1.nom+" a été ajouté au panier")
        console.log(player.panier)
        let choix2 = prompt("Voulez vous autre chose?")
        while(choix2 != "oui" && choix2 != "non"){
            choix2 = prompt("Arrète de bafouiller, oui ou non?")
        }if(choix2 == "non"){
            alert("Très bien, vous pouvez passer en caisse")
            caisse()
        }else if(choix2 =="oui"){
            shopping()
        }
    }else if(choix == article2.nom){
        player.ajouter(article2)
        alert(article2.nom+" a été ajouté au panier")
        console.log(player.panier)
        let choix2 = prompt("Voulez vous autre chose?")
        while(choix2 != "oui" && choix2 != "non"){
            choix2 = prompt("Arrète de bafouiller, oui ou non?")
        }if(choix2 == "non"){
            alert("Très bien, vous pouvez passer en caisse")
            caisse()
        }else if(choix2 =="oui"){
            shopping()
        }
    }else if(choix == article3.nom){
        player.ajouter(article3)
        alert(article3.nom+" a été ajouté au panier")
        console.log(player.panier)
        let choix2 = prompt("Voulez vous autre chose?")
        while(choix2 != "oui" && choix2 != "non"){
            choix2 = prompt("Arrète de bafouiller, oui ou non?")
        }if(choix2 == "non"){
            alert("Très bien, vous pouvez passer en caisse")
            caisse()
        }else if(choix2 =="oui"){
            shopping()
        }
    }else if(choix == article4.nom){
        player.ajouter(article4)
        alert(article4.nom+" a été ajouté au panier")
        console.log(player.panier)
        let choix2 = prompt("Voulez vous autre chose?")
        while(choix2 != "oui" && choix2 != "non"){
            choix2 = prompt("Arrète de bafouiller, oui ou non?")
        }if(choix2 == "non"){
            alert("Très bien, vous pouvez passer en caisse")
            caisse()
        }else if(choix2 =="oui"){
            shopping()
        }
    }else if(choix == article5.nom){
        player.ajouter(article5)
        alert(article5.nom+" a été ajouté au panier")
        console.log(player.panier)
        let choix2 = prompt("Voulez vous autre chose?")
        while(choix2 != "oui" && choix2 != "non"){
            choix2 = prompt("Arrète de bafouiller, oui ou non?")
        }if(choix2 == "non"){
            alert("Très bien, vous pouvez passer en caisse")
            caisse()
        }else if(choix2 =="oui"){
            shopping()
        }
    }
}
let caisse = ()=>{
    let prixTotal=0
    let panierNom=[]
    for(let i =0; i<player.panier.length;i++){
        prixTotal = prixTotal + player.panier[i].prix
        panierNom.push(player.panier[i].nom)
    }
    alert("Voici votre pannier: "+panierNom+" prix total: "+prixTotal+"€")
    let choix = prompt("Voulez-vous payer "+prixTotal+"€?")
    while(choix != "oui" && choix != "non"){
        choix = prompt("Tu donne ta thune oui ou non??")
    }if(choix == "oui"){
        alert("Merci pour vos achats, à bientot dans la secte Apple")
    }else if(choix == "non"){
        alert("T'as pas la thune alors dégage, reviens quand t'auras un salaire!")
    }
}
entrer()
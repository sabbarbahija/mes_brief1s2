// Données de départ fournies. Aucun comportement n’est encore implémenté.
let produits = [
  { id: 1, nom: "Jus d’orange", prix: 12 },
  { id: 2, nom: "Biscuits", prix: 8 }
];
let prochainId = 3;


// À vous de jouer :
// 1. Afficher les produits du tableau au chargement.
// 2. Gérer l’ajout depuis le formulaire.
// 3. Gérer le retrait du produit cliqué.
// 4. Bonus : compteur, état vide et total.
function afficher(){
 const li=document.querySelector('#modele-produit');
 li.replaceChildren();
  produits.forEach(produit => {
  const li=document.createElement('li');
  li.className="produit";
 const div=document.createElement('div');

  const strong=document.createElement('strong');
  strong.className="nom-produit";
  strong.textContent=produit.nom;
  const span=document.createElement('span');
  span.className="prix-produit";
  span.textContent=produit.prix;
  const button=document.createElement('button');
  button.className="supprimer";
  button.textContent="Retirer";

 div.appendChild('strong');
 div.appendChild('span');
li.appendChild('div');
li.appendChild('button');
});
}
afficher();
// Ajouter
    const formulaire=document.querySelector('#form-produit');
    const  nom=document.querySelector('#nom');
    const  prix=document.querySelector('#prix');
    formulaire.addEventListener("submit" , (e) =>{
    e.defaultPrevented ();

    if()
    const nomvalue=nom.value;
    const prixvalue=prix.value;
    const nouvelle= [{id: prochainId++ , nom: nomvalue , prix: prixvalue

  }];
     produits.push(nouvelle);
    afficher();
    formulaire.reset();
     });
     afficher();

   




/*
Fonction bonjour( prenom, nom)

    Faire une fonction que vous appelerez bonjour
    Qui prend en paramètre le prénom et le nom
    Qui affiche une alert() avec comme texte par exemple: "Bonjour Prénom Nom comment allez vous?"
*/

// function Bonjour(prénom, nom){
// 	alert("Bonjour" + " " + prénom + " "+  nom + " " + "comment allez vous ?");
// }


// Bonjour("Mickael", "pol");




//----------------------------------------------------------------------------------------------------//

/*
Fonction compteToNombre( nombre )

    Faire une fonction qui s'appelle compteToNombre
    qui prends en parametre nombre
    qui va compter de 1 à nombre et l'afficher dans la console ( utiliser une boucle for)
    faire la mème chose en définissant une valeur par défaut à nombre et tester
*/

function compteToNombre(nb){
	for(var i = 1; i <= nb ; i++){

		console.log(i)
	}
}

compteToNombre(parseInt(prompt("entrez une valeur")));




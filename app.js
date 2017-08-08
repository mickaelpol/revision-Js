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

// function compteToNombre(nb){
// 	for(var i = 1; i <= nb ; i++){

// 		console.log(i)
// 	}
// }

// compteToNombre(parseInt(prompt("entrez une valeur")));

/* ------------------------------------------------------------------------------*/


/*
Fonction operation( param1, param2 )

    Avant la fonction operation faite deux fonctions une addition qui retourne le résultat de l'addition et l'autre multiplication qui retourne le résultat de la multiplication ( return )
    Faite la fonction operation qui va demander à l'utilisateur de saisir deux valeurs ( prompt ) puis se servir des deux fonctions précédente pour afficher l'addition et la multiplication dans une alert.
    Rajouter la division mais pour la division n'appelez la fonction que si le param2 est supérieur à 0 ( car on ne peut pas diviser par 0), mettez un message explicatif
*/

// var val1;
// var val2;
var val1;
var val2; 


function addition(val1, val2){
	var resultat;
	resultat = val1+val2;
	return resultat;
};
addition(val1,val2);







function multiplication(val1, val2){
	var resultat;
	resultat = val1*val2;
	return resultat;
};

multiplication(val1,val2);



function division(val1,val2){
	var resultat;
	resultat = val1/val2;
	return resultat;
	
};

division(val1,val2);



function operation(){
	val1 = Number(prompt("entrez un chiffre"));
	val2 = Number(prompt("entrez en un second"));
	alert("le resultat de l'addition est de : " + " " + addition(val1, val2));
	alert("le resultat de l'addition est de : " + " " + multiplication(val1, val2));
	alert(division(val1, val2))

}

operation();



/* ----------------------------------------------------------------------------*/





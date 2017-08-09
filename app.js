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


// function addition(val1, val2){
// 	var resultat;
// 	resultat = val1+val2;
// 	return resultat;
// };
// addition(val1,val2);







// function multiplication(val1, val2){
// 	var resultat;
// 	resultat = val1*val2;
// 	return resultat;
// };

// multiplication(val1,val2);



// function division(val1,val2){
// 	var result; 
// 	resultat = val1/val2;
// 	return resultat;

// 	// je fait ma division 
// 	// SI je divisie par 0 ALORS
// 	// renvoi "tune peux pas diviser par 0"
// 	// SINON 
// 	// jexecute la division
// };

// division(val1,val2);



// function operation(){
// 	val1 = Number(prompt("entrez un chiffre"));
// 	val2 = Number(prompt("entrez en un second"));
// 	alert("le resultat de l'addition est de : " + " " + addition(val1, val2));
// 	alert("le resultat de la multiplication est de : " + " " + multiplication(val1, val2));
// 	if (val2 !== 0){
// 		alert("le resultat de votre division est de : " + " " + division(val1, val2));

// 	}else {
// 		alert("elle est ou la poulette 0 ??");
// 	}
// };

// operation();



/* ----------------------------------------------------------------------------*/



// Objet peroquet

//     Faire un objet peroquet avec un constructeur sans arguments
//     Dans l'objet définissez un attribut memoire que vous initialisez à chaine vide ( "") qui constituera la mémoire du péroquet
//     Dans l'objet définissez aussi une methode ecoute( phrase ) qui constituera le comportement d'écoute du peroquet, dans cette methode vous lancerez un prompt pour sauvegarderez la phrase dans la memoire.
//     Dans l'objet définissez enfin une methode repete() qui répetera 3 fois ce qu'il a en mémoire et l'affichera dans la console.


// function Perroquet(){
//     this.memoire = "";


//     this.ecoute = function(phrase){
//         this.phrase = phrase;
//         this.memoire.push(new Perroquet(prompt("Coucou je suis le perroquet dit moi quelque chose")));

//     }


// };


// var perroquet = new Peroquet();
// perroquet.ecoute();


function Perroquet(){
    this.memoire = "";


    this.ecoute = function(phrase){
        this.memoire = prompt(phrase);
    }

    this.repete = function(){
        for(var i = 0; i < 3; i++){
            return("<p class='text-center text-uppercase para'>"+  this.memoire() + "</p");
        }
    }
};

var a = new Perroquet();
a.ecoute("Coucou je suis le perroquet dit moi quelque chose");
// a.repete();


$(document).ready(function(){
    $('.chat').hide();
    $('.para').hide();
    var count = 0;

    $('.clic1').click(function(){
        count++;

        if(count%1 == 0){
            $('.chat').show();
            $('.chat').show("slow");
            $('.chat').show(3000);
        }if(count%2 == 0){
            $('.chat').hide();
            $('.chat').hide("slow");
            $('.chat').hide(3000);
        }

    });

    count=0;

    $('.chat').click(function(){
        count++;

        // if(count%1 == 0){
        //     $('#para').show();
        //     $('#para').show("slow");
        //     $('#para').show(3000);
        // } else{
            $('#para').append(a.repete());
        // }


    });






});
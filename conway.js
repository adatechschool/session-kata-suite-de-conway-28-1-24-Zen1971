// fonction étape 1
function decoupeChaine(chaine) {
      return chaine
      .match(/(.)\1*/g) // Découpe la chaîne en groupes de caractères identiques
      .join(" ");       // Regroupe les groupes avec un espace entre eux
  }
// Affichage du résultat
  console.log(decoupeChaine("ab"));       // Renvoie "a b"
  console.log(decoupeChaine("aabbca"));   // Renvoie "aa bb c a"

// fonction étape 2
  function decritChaine(chaine) {
    const groupes = chaine.match(/(.)\1*/g); // Ex: "aabbca" devient ["aa", "bb", "c", "a"]
  
    // "nombre + caractère"
    const resultat = groupes
      .map(groupe => groupe.length + groupe[0]) // Compte combien de caractères il y a dans chaque groupe, puis ajoute le caractère à la suite
      .join(""); // Regroupe les groupes avec un espace entre eux
  
    return resultat;
  }
  
  // Affichage du résultat
  console.log(decritChaine("ab"));       // Renvoie "1a1b"
  console.log(decritChaine("aabbca"));   // Renvoie "2a2b1c1a"

  // fonction étape 3
  function suiteConway(carac, n) {
    // Initialise la suite avec le premier terme
    let suite = [carac];
  
    // Génère les termes suivants de la suite
    for (let i = 1; i < n; i++) {
      // Le dernier terme généré
      const dernierTerme = suite[suite.length - 1];
  
      // Décrit le dernier terme pour obtenir le suivant
      const suivant = decritChaine(dernierTerme);
  
      // Ajoute le terme suivant à la suite
      suite.push(suivant);
    }
  
    // Retourne tous les termes de la suite sous forme de tableau
    return suite;
  }
  
  // Fonction auxiliaire decritChaine (déjà codée)
  function decritChaine(chaine) {
    const groupes = chaine.match(/(.)\1*/g); //Découpe la chaîne en groupes de caractères identiques
    return groupes.map(groupe => groupe.length + groupe[0]).join(""); // Construit le nouveau terme
  }
  
  // Affichage du résultat
  console.log(suiteConway('a', 3)); // ["a", "1a", "111a"]
  console.log(suiteConway('1', 3)); // ["1", "11", "21"]

  

  
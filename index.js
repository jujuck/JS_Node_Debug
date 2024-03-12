import wilders from "./wilder.json" assert { type: "json" };

import readline from "readline";
const prompt = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

console.info("Bienvenu dans votre editeur de recherche de wilders");
(() => {
  prompt.question(
    "Saisissez la méthode de recherche (nom, pays, salaire, profession) : ",
    (method) => chooseMethode(method)
  );
})();

/**
 * Affichage des résultats trouvés
 * @param {array} result
 */
const log = (result) => {
  if (result.length === 0) {
    console.error("🚫 Aucun résultat trouvé");
  } else {
    console.log(result);
    console.log("✅️ voici les résultats trouvés");
  }
};

/**
 * Rooting pour choisir la méthode de recherche
 * @param {string} method
 */
const chooseMethode = (method) => {
  if (method === "nom") {
    fitlerByNames();
  } else if (methods === "pays") {
    filterByCountry();
  } else if (method === "salaire") {
    filterBySalary();
  } else if (methods === "profession") {
    filterByProfession();
  } else {
    console.error("Méthode de recherche inconnue");
  }
};

/**
 * Récupération des wilders dont le nom contient un partie ou tout du nom saisi
 */
const fitlerByNames = () => {
  prompt.question(
    "Saisissez le nom du wilder que vous recherchez : ",
    (name) => {
      log(
        wilders.filter((wilder) =>
          wilder.name.toLowerCase().includes(name.toLowerCase())
        )
      );
      prompt.close();
    }
  );
};

/**
 * Récupération des wilders dont le pays est celui saisi
 */
const filterByCountries = () => {
  prompt.question(
    "Saisissez le pays du wilder que vous recherchez : ",
    (countrie) => {
      log(wilders.filter((wilder) => wilder.country === country));
      prompt.close();
    }
  );
};

/**
 * Récupération des wilders dont le salaire est supérieur à celui saisi
 */
const filterBySalary = () => {
  prompt.question("Saisissez le salaire minimum : ", (wage) => {
    log(wilders.filter((wilder) => wilder.salary > +wage));
    prompt.close();
  });
};

/**
 * Récupération des wilders dont la profession contient un partie ou tout de la profession saisi
 */
const filterByProfession = () => {
  prompt.question(
    "Saisissez la profession du wilder que vous recherchez : ",
    (profession) => {
      log(
        wilders.filter((wilder) => {
          wilder.profession.includes(profession);
        })
      );
      prompt.close();
    }
  );
};

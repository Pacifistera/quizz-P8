// Créez votre fonction ici
function calculateAverage(numArray) {
  console.log(numArray);
  if (numArray === undefined) {
    return 'No numbers to calculate average';
  }
  return numArray.reduce((acc, curr) => acc + curr, 0) / numArray.length;
}
// Exemples d'utilisation de la fonction
console.log(calculateAverage([5, 10, 15])); // retourne 10
console.log(calculateAverage([10, 20, 30, 20])); // retourne 20
console.log(calculateAverage()); // No numbers to calculate average

export default calculateAverage;

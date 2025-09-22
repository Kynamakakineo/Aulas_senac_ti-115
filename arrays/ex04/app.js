let filmes = ["pixel", "rio1","rio2"];

console.log("filme: ");

// Quero adicionar um item no final do array
filmes.push("matrix");

filmes[1]= "invocação do mal";

console.log(filmes);

// Quer remover o último item do array
filmes.pop();

// Quero adicionar o primeiro item do array
filmes.unshift("clube da luta");
console.log(filmes);

// Quero remover o primeiro item do array
filmes.shift();
console.log(filmes);

// Quero saber o tamanho do array
console.log("Tamanho do array: " + filmes.length);
// Quero saber a posição de um item no array
console.log("posição do filme: " + filmes.indexOf("inception"));

// Quero remover um item específico do array
let indice = filmes.indexOf ("pulp fiction");
if (indice !== -1){
    filmes.splice(indice, 1);
}
console.log(filmes);

let notas = [8.5, 7.0, 9.0, 6.5];
let media = 0;

for (i = 0; i <notas.length; i ++) {
    media += notas[i];

}
console.log("média: " + (media / notas.length).toFixed(2));
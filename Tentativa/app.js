
function cadastrar() {
var nome = [], email = [], tel = [];
var resp = 's';

for (i = 0; resp == 's'; i++) {
    nome[i] = prompt("Digite o nome da " + (i+1) + "ª pessoa");
    email[i] = prompt("Digite o email da " + (i+1) + "ª pessoa");
    tel[i] = prompt("Digite o telefone da " + (i+1) + "ª pessoa");
    
    resp = prompt("Deseja continuar? s/n");
}

alert("Essas são as pessoas cadastradas em nosso sistema:\n");

for (i = 0; i < nome.length; i++) {
    console.log("O(A) sr(a) " + nome[i] +
          " possui o telefone: " + tel[i] +
          " e email: " + email[i] + "\n");
}
}

let alunos = ["Ana", "Pedro", "Maria"];

let produtos = ["Arroz", "Feijão", "Macarrão"];
let quantidades = [20, 15, 30];

let usuarios = ["joao", "maria", "pedro"];
let senhas = ["123", "abc", "456"];
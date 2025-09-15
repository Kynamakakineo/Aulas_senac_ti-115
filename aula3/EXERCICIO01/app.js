function escrever(mensagem) {
    let saida = document.getElementById("saida");
    saida.innerHTML += `<p>${mensagem}</p>`;
  }
   
  function saudacao() {
    let nome = prompt("Digite seu nome:");
    escrever(`Bom dia, programador! ☀️ Seu nome é ${nome}.`);
  }
   
  function somar() {
    let num1 = parseFloat(prompt("Digite o primeiro número:"));
    let num2 = parseFloat(prompt("Digite o segundo número:"));
    let resultado = num1 + num2;
    escrever(`A soma é: ${resultado}`);
  }
   
  function calcularMedia() {
    let nota1 = parseFloat(prompt("Insira a primeira nota:"));
    let nota2 = parseFloat(prompt("Insira a segunda nota:"));
    let media = (nota1 + nota2) / 2;
    escrever(`A média é: ${media}`);
  }
   
  function verificarIdade() {
    let idade = parseInt(prompt("Digite sua idade:"));
    if (idade >= 18) {
      escrever("Você é maior de idade!");
    } else {
      escrever("Você é menor de idade!");
    }
  }
   
  function calcularTotalCompra() {
    let precoUnitario = parseFloat(prompt("Digite o preço unitário:"));
    let quantidade = parseInt(prompt("Digite a quantidade:"));
    let total = precoUnitario * quantidade;
    escrever(`O valor total é: ${total}`);
  }
   
  function nomeCompleto() {
    let primeiroNome = prompt("Digite seu primeiro nome:");
    let sobrenome = prompt("Digite seu sobrenome:");
    escrever(`Nome completo: ${primeiroNome} ${sobrenome}`);
  }
   
  function verificarNota() {
    let nota = parseFloat(prompt("Digite a nota do aluno:"));
    let aprovado = nota >= 7;
    if (aprovado){
   
      escrever('Você foi aprovado😊')
    } else{
   
      escrever('Você foi reprovado😢')
    }
   
  }
   
  function escola() {
    let nomeEscola = prompt("Digite o nome da sua escola:");
    escrever(`Você estuda na escola ${nomeEscola}.`);
  }
   
   
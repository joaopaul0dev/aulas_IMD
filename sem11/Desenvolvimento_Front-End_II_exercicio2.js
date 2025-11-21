var idade = Number.prompt("insira sua idade atual: ");
var lanches_dias = Number.prompt("insira a quantidade de lanches por dia: ");
var preco_lanches = Number.prompt("insira o preço do lanche: ");
const fim_vida = 85;

function calcularSuprimento(idade, lanches_p_dia, preço_lanche){
    var resto_vida = fim_vida - idade;
    var suprimento = resto_vida * lanches_dias;
    var total = suprimento * preço_lanche

}
console.log("Você precisará de: R$" + total + "para ter um suprimento de lanche até 85 anos") 
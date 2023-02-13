var nome = prompt ("Olá, qual o seu nome?")

alert (nome + " esse é um conversor de Real para Ethereum (uma cripto moeda).")

var valor = prompt ("Digite o valor de moedas (Ethereum) que gostaria de ter.");
var valorEmReal = 8051.82;

var conversaoFinal = valor * valorEmReal;
var conversaoFinal = conversaoFinal.toFixed (2);

alert (nome + " cada moeda custa em real R$ " + valorEmReal + " e para ter " + valor + " moedas, você precisaria pagar " + conversaoFinal);
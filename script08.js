let numero1;
let numero2;

function operador()
{
numero1 = parseFloat(prompt("Digite o número 1"));
numero2 = parseFloat(prompt("Digite o número 2"));

if (numero1 == numero2)
{
alert("Não há diferença entre os números")
}
if (numero1 > numero2)
{
alert("diferença = " + (numero1-numero2));
}
if (numero1 < numero2)
{
alert("diferença = " + (numero2-numero1));
}
alert("A soma do dobro do primeiro com o triplo do segundo: " + ((numero1*2)+(numero2*3)));
alert("A multiplicação dos dois: " + (numero1*numero2));
}


let NomeFuncionario2;
let SalarioBruto2;
let INSS;
let Salario2;

function folhapagamento2()
{
NomeFuncionario2 = prompt("Digite o nome do funcionário");
SalarioBruto2 = parseFloat(prompt("Digite o Salário do funcionário"));
if (SalarioBruto2 <= 1000)
{
INSS = 8;
}
if ((SalarioBruto2 > 1000) && (SalarioBruto2 <= 1500))
{
INSS = 8.5;
}
if (SalarioBruto2 > 1500)
{
INSS = 9;
}
alert("O valor de INSS é: " + INSS + "%");
Salario2 = ((SalarioBruto2/100)*(100-INSS));
alert("Nome: " + NomeFuncionario2)
alert("Salário Bruto: " + SalarioBruto2)
alert("Desconto do INSS (" + INSS + "%): " + ((SalarioBruto2/100)*INSS))
alert("Salario final: " + Salario2)
}
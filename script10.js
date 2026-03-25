let NomeFuncionario;
let SalarioBruto;
let Salario;

function folhapagamento()
{
NomeFuncionario = prompt("Digite o nome do funcionário");
SalarioBruto = parseFloat(prompt("Digite o Salário do funcionário"));
alert("O valor de INSS é 8%");
Salario = ((SalarioBruto/100)*92);
alert("Nome: " + NomeFuncionario)
alert("Salário Bruto: " + SalarioBruto)
alert("Desconto do INSS (8%): " + ((SalarioBruto/100)*8))
alert("Salario final: " + Salario)
}
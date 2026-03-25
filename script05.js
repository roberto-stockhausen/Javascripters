let input = "";
let epardefato;

function parouimpar()
{
    input = parseFloat(prompt("Digite um número: "));
    if (input%2 == 0)
    {
        alert(input + " é par");
        alert("para transformá-lo em ímpar basta adicionar 1");
        alert(input+1);
    }
    else
    {
        alert(input + " é ímpar");
        alert("para transformá-lo em par basta multiplicar por 2");
        alert(input*2);
    }
}
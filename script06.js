let letra;

function vogalconsoante()
{
letra = prompt("digite uma letra: ")
if (isNaN(letra) == true)
{
if( (letra == "a") || (letra == "e") || (letra == "i") || (letra == "o") || (letra == "u"))
{
    alert("Vogal");
}
else
{
    alert("Consoante")
}
}
else
{
alert("Isso é um numero filho da puta")
}
}
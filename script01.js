let time = 10;
let second = 0;
let fail = 0

function Somar(){
   let continuar = true;
   let soma = 0;
   while (continuar == 1)
   {
      let numero = parseFloat(prompt("Digite um número para somar"));
      if (!isNaN(numero))
      {
         soma += numero
         console.log(soma)
      }
      else
      {
         alert("Digite um número válido")
      }   
      continuar = confirm("Deseja adicionar mais um número?")
      }
   alert("A soma dos número é: " + soma)
}



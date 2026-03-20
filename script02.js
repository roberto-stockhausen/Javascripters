let time = 10;
let second = 0;
let fail = 0

function counter() { // Código que achei no Stack Overflow modificado para o contexto da atividade. 
   console.log('T minus ' + time);
   setInterval(function() {
   if (time <= 0)
   {
   clearInterval(this); // Esse treco não tá funcionando
   console.log('Lançado');
   } 
   else
   {
      time -= 1;
      console.log(time);
   } 
  }, 1000);
} 

function counterfail(){ // Conserta um problema com a função counter onde toda vez que você clicava o botão a contagem ficava mais rápida.
   time = 10;
   if (fail == 0)
   {
      counter();
      fail = 1;
   }
   // Acredito que o problema é que a função counter não é encerrada, e chamar outra vez faz com que duas fiquem ativas ao mesmo tempo.
   // Não achei uma forma de só "Encerrar" a função counter, então eu fiz com que ela fosse chamada só uma vez.
}
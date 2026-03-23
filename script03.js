let month = 1;
let gain = 0;
let loss = 0; //   |  ||
              //   || |__
let yeargain = 0;
let yearloss = 0;
let difference = 0;

function ganhoanual(){
while (month <= 12)
{
    let gain = parseFloat(prompt("Digite os ganhos do mês" + month));
    let loss = parseFloat(prompt("Digite as perdas do mês" + month));
    yeargain += gain;
    yearloss += loss;
    month += 1;
}
alert(yeargain);
alert(yearloss);
}
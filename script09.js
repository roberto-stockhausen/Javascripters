let porra1;
let porra2;
let dickholder;

function sorter2()
{
porra1 = parseFloat(prompt("Digite o número 1"));
porra2 = parseFloat(prompt("Digite o número 2"));
if (porra1 > porra2)
{
dickholder = porra2;
porra2 = porra1;
porra1 = dickholder;
}
console.log(porra1);
console.log(porra2);
}
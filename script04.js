let numbers = [0,0,0,0];
let count = 1;
let holder = 0;
let organized = false

function sorter()
{
while (count <= 4)
{
    numbers[count] = parseFloat(prompt("Digite o número: " + count));
    count += 1;
}
console.log(numbers[1])
console.log(numbers[2])
console.log(numbers[3])
console.log(numbers[4])
console.log("___")

while (organized == false)
{
    organized = true;
    count = 1;
    while (count < 4)
    {
        if (numbers[count] < numbers[count+1])
        {
            holder = numbers[count+1];
            numbers[count+1] = numbers[count];
            numbers[count] = holder;
            organized = false
        }
        count += 1;
    }
}
console.log(numbers[1])
        console.log(numbers[2])
        console.log(numbers[3])
        console.log(numbers[4])
        console.log("___")


}

let firstNumber = Number(prompt (' Could you please enter the firts number ?', 10 ));
while (isNaN(firstNumber)) {
   firstNumber = Number (prompt (' Error: You entered a string, please enter a number', 10 ));
}

let secondNumber = Number (prompt (' Could you please enter the second number ?', 100 ));
while (isNaN(secondNumber)) {
    secondNumber = Number (prompt (' Error: You entered a string, please enter a number', 100 ));
 }

const skip = confirm ('Is it necessary to skip  even numbers?');
const temp = skip? 'skip' : 'do not skip';

let sum = 0;
for (let i = firstNumber; i <= secondNumber; i++){
    if(skip) {
        if (i%2 === 0) {
               continue;
            } 
        }
        sum+=i;
    console.log(sum);
    }

document.writeln(`<p>First number: ${firstNumber}`);
document.writeln(`<p>Second number: ${secondNumber}`);
document.writeln(`Total amount beetween even  ${firstNumber} and ${secondNumber} is: ${sum}`);


let firstNumber = prompt (' Could you please enter the firts number ?', 10 );
while (isNaN(firstNumber)) {
   firstNumber = prompt (' Error: You entered a string, please enter a number', 10 );
}

let secondNumber = prompt (' Could you please enter the second number ?', 100 );
while (isNaN(secondNumber)) {
    secondNumber = prompt (' Error: You entered a string, please enter a number', 100 );
 }

const skip = confirm ('Is it necessary to skip  even numbers?');
skip?temp = 'skip':temp = 'do not skip';


for (let i = firstNumber; i <= secondNumber; i++){  
    if(skip){
        if(i%2===0){
           continue;
        } 
    }
    else{
        sum += i;  
    }  
    console.log(i, sum);
}
document.writeln(`<p>First number: ${firstNumber}`);
document.writeln(`<p>Second number: ${secondNumber}`);
document.writeln(`<p> Skip even numbers: ${skip} <p>`);

skip ? document.writeln(`Total amount beetween even  ${firstNumber} and ${secondNumber} is: ${sum}`) : document.writeln(`Total amount ${firstNumber} and ${secondNumber} is: ${sum}`);

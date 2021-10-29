// Write a function called printDigits that takes in one argument, num. 
// When given an integer, the function should print (console.log) each digit in reverse order, 
// starting with the ones place. Do not do this by just turning the number into a string and reversing it. 
// Solve the problem using math.
//  (Hint: look up while loops, and don’t forget about the % operator.)

let printDigits = (num) => {
    while (num > 0) {
        let digit = num % 10;
        console.log(digit);
        num = (num - digit) / 10
    }
}

printDigits(10)
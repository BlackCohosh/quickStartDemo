// Starting array
let array = [28, 43, -12, 30, 4, 0, 12]

// Write your solution below:
function addToZero(a,b) {
    let sumBox = []
    for (let i = 0; i > array.length; i++) {

    sumBox.push((a[i] + b[i]))
}   if (sumBox === 0) {
    console.log('true')
}   else console.log('false')

} 
addToZero()
// if and else condition 
let userAge = +prompt(`Your Age`);
if (userAge <= 10){
    console.log(`Welcome`);
}else{
    console.log(`Sorry Your Age is Above 10`);
}

// For Loops
let userInput = +prompt(`Tell a table`);
for (let i = 1; i <= 10; i++){
    console.log(`${userInput} X ${i} = ${userInput * i}`);   
}

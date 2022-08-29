"use strict";

const startBtn = document.getElementById('startBtn');
const resultBtn = document.getElementById('resultBtn');

let sum = 0;

let sortedNumbers = [];

const compareNumbers = (a,b) => {
    return a-b;
};

const formArray = () => {

    const numbers = [];

    while (true) {
        const num = prompt('Пожалуйста, введите число и нажмите "Продолжить"');

        if (isFinite(num) && num !== '' && num !== null) {
        numbers.push(+num);
        }
        else {
            alert('Введено не числовое значение, окончание ввода');
            break;
        }
    }

    console.log(numbers);


    sortedNumbers = numbers.sort(compareNumbers);

    console.log(sortedNumbers);
    

    for (let i=0; i < sortedNumbers.length; i++) {
        sum += sortedNumbers[i];
    }
    console.log(sum);
    return(sum);
    
};

// const calcSum = () => {
    
// };

const getResult = () => {
    // sortNumbers();
    alert (sortedNumbers);
    alert (sum);
};

startBtn.addEventListener('click', formArray);
resultBtn.addEventListener('click', getResult);

// const formArray = () => {
//     const numbers = [];

//     for (let number of numbers) {
//         const num = prompt('Пожалуйста, введите число и нажмите "Продолжить"', 0);
//         if (typeof num === 'number') {
//             numbers.push(num);
//         }
//         else {
//             alert('Введено не числовое значение, окончание ввода');
//         }
//     }

//     console.log(numbers);
// };

// num === "" || num === null || !isFinite(num)



// const formArray = () => {
//     const num = prompt('Пожалуйста, введите число и нажмите "Продолжить"', 0);

//     for (let i = 0; typeof i == "number"; i++) {
//         if (typeof num == "number") {
//             numbers.push(num);
//         }
//         else {
//             alert('Введено не числовое значение, окончание ввода');
//             break;
//         }
//     }

//     console.log(numbers);
// };


// if (!isFinite(num)) break;
//         numbers.push(+num);













// const formArray = () => {

//     const numbers = [];

//     while (true) {
//         const num = prompt('Пожалуйста, введите число и нажмите "Продолжить"');

//         if (isFinite(num) && num !== '' && num !== null) {
//         numbers.push(+num);
//         }
//         else {
//             alert('Введено не числовое значение, окончание ввода');
//             break;
//         }
//     }

//     console.log(numbers);

//     const compareNumbers = (a,b) => {
//         return a-b;
//     }

//     const sortedNumbers = numbers.sort(compareNumbers);

//     console.log(sortedNumbers);
    
    
//     let sum = 0;
//     for (let i=0; i < sortedNumbers.length; i++) {
//         sum += sortedNumbers[i];
//     }
//     alert(sum);
//     console.log(sum);
// };

"use strict";

const startBtn = document.getElementById('startBtn');
const resultBtn = document.getElementById('resultBtn');

let sum = 0;
let sortedNumbers = [];

const compareNumbers = (a, b) => {
    return a - b;
};

const formArray = () => {
    const numbers = [];

    document.getElementById('sortedArray').innerHTML = 'Здесь будет отсортированный по возрастанию массив';
    document.getElementById('sumOfNum').innerHTML = 'Здесь будет сумма элементов массива';

    while (true) {
        const num = prompt('Пожалуйста, введите число и нажмите "Продолжить" для ввода следующего числа');

        if (isFinite(num) && num !== '' && num !== null) {
            numbers.push(+num);
        } else {
            alert('Введено не числовое значение, окончание ввода');
            break;
        }
    }

    // console.log(numbers);

    sortedNumbers = numbers.sort(compareNumbers);

    // console.log(sortedNumbers);

    for (let i = 0; i < sortedNumbers.length; i++) {
        sum += sortedNumbers[i];
    }
    // console.log(sum);
    return (sum);
};

const getResult = () => {
    document.getElementById('sortedArray').innerHTML = `Ваш отсортированный по возрастанию массив: ${sortedNumbers}`;
    document.getElementById('sumOfNum').innerHTML = `Сумма элементов равна: ${sum}`;
};

startBtn.addEventListener('click', formArray);
resultBtn.addEventListener('click', getResult);
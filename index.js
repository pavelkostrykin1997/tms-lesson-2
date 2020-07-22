let answers = [];
let examples = [];
let operators = ['+', '-', '*', '/'];
let counterPlus = 0;
let counterMinus = 0;
let resultString = '';
for (
    let i = 0; i < 10; i++
) {
    let operand1 = randomInteger(1, 10);
    let operand2 = randomInteger(1, 10);
    let operator = arrayRandElement(operators);
    if (operator === '/') {
        operand1 = randomInteger(1, 100);
    }
    let result = prompt(operand1 + operator + operand2 + "=");
    let example = operand1 + operator + operand2;
    examples.push(example);

    answers.push(result);
}
for (
    let i = 0; i < 10; i++
) {
    let ranswer = eval(examples[i]);
    console.log(ranswer);
    if (answers[i] == ranswer) {
        counterPlus++;
    } else {
        resultString =resultString + `${examples[i]} Правильный ответ: ${eval(examples[i])} Ваш ответ: ${answers[i]} \r\n`;
        counterMinus++;
    }
}
alert(`Оценка ${counterPlus}\r\n${resultString} `);

function randomInteger(min, max) {
    let rand = min - 0.5 + Math.random() * (max - min + 1);
    return Math.round(rand);
}

function arrayRandElement(arr) {
    var rand = Math.floor(Math.random() * arr.length);
    return arr[rand];


}
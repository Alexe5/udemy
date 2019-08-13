var money;
var time;
var appData;
var answer1;
var answer2;
var expenses = {};
var optionalExpenses = {};
var income = [];

money = prompt('Ваш бюджет на месяц?');
time = prompt('Введите дату в формате YYYY-MM-DD');
answer1 = prompt('Введите обязательную статью расходов в этом месяце');
answer2 = prompt('Во сколько обойдется?');

expenses[answer1] = answer2;

appData = {
    budgetData: money,
    timeData: time,
    expenses,
    optionalExpenses,
    income,
    savings: false
};

console.log(appData);

alert('Бюджет на 1 день = ' + money/30);
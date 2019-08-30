let money, time;

function start() {
    money = +prompt('Ваш бюджет на месяц?', '');
    time = prompt('Введите дату в формате YYYY-MM-DD', '');

    while (isNaN(money) || money == '' || money == null) {
        money = +prompt('Ваш бюджет на месяц?', '');
    }
}

start();

let appData = {
    budget: money,
    expenses: {},
    optionalExpenses: {},
    income: [],
    timeData: time,
    savings: true,
    chooseExpenses: function() {
        for (let i = 0; i < 2; i++) {
            let a = prompt('Введите обязательную статью расходов в этом мясяце', ''),
                b = prompt('Во сколько обойдется?', '');
            if ( (typeof(a)) === 'string' && (typeof(a)) != null && (typeof(b)) != null && a != '' && b != '' && a.length < 50) {
                console.log('done');
                appData.expenses[a] = b;
                console.log(i);
            } else {
                console.log('not done');
                if (i == 0) {
                    i = -1;
                } else {
                    i--;
                }
                console.log(i);
            }
        }
    },
    detectDayBudget: function() {
        appData.moneyPerDay = (appData.budget / 30).toFixed(2);
        alert('Ежедневный бюджет: ' + appData.moneyPerDay);
    },
    detectLevel: function() {
        if (appData.moneyPerDay < 100) {
        console.log('Минимальный уровень достатка');
        } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
            console.log('Средний уровень достатка');
        } else if (appData.moneyPerDay > 2000) {
            console.log('Высокий уровень достатка');
        } else {
            console.log('Произошла ошибка');
        }
    },
    checkSavings: function() {
        if (appData.savings == true) {
            let save = +prompt('Какова сумма накоплений?'),
                percent = +prompt('Под какой процент?');

            appData.monthIncome = save / 100 / 12 * percent;
            alert('Доход в месяц с Вашего депозита: ' + appData.monthIncome);
        }
    },
    chooseOptExpenses: function() {
        for (let i = 0; i < 3; i++) {
            let a = prompt('Статья необязательных расходов', '');
            if ( (typeof(a)) === 'string' && (typeof(a)) != null && a != '' && a.length < 50) {
                console.log('done');
                appData.optionalExpenses[i] = a;
                console.log(i);
            } else {
                console.log('not done');
                if (i == 0) {
                    i = -1;
                } else {
                    i--;
                }
                console.log(i);
            }
        }
    },
    chooseIncome: function() {

        for (let i = 0; i < 1; i++) {
            let items = prompt('Что принесет дополнительный доход? (Перечислите через запятую)', '');
            if ( (typeof(items)) === 'string' && items != '' && items != null) {
                console.log('great');
                console.log(i);
            } else {
                console.log('not great');
                if (i == 0) {
                    i = -1;
                } else {
                    i--;
                }
                console.log(i);
                console.log(items);
            }
        }

        appData.income = items.split(', ');
        appData.income.push(prompt('Может что-то еще?)', ''));
        appData.income.sort();
        // console.log(typeof items);
    }
};

// let k = 0;
// while (k < 2) {
//     let a = prompt('Введите обязательную статью расходов в этом мясяце', ''),
//         b = prompt('Во сколько обойдется?', '');
//     if ( (typeof(a)) === 'string' && (typeof(a)) != null && (typeof(b)) != null && a != '' && b != '' && a.length < 50) {
//         console.log('done');
//         appData.expenses[a] = b;
//         k++;
//         console.log(k);
//     } else {
//         console.log('not done');
//         console.log(k);
//     }
// };

// var k = 0;
// do {
//     let a = prompt('Введите обязательную статью расходов в этом мясяце', ''),
//         b = prompt('Во сколько обойдется?', '');
//     if ( (typeof(a)) === 'string' && (typeof(a)) != null && (typeof(b)) != null && a != '' && b != '' && a.length < 50) {
//         console.log('done');
//         appData.expenses[a] = b;
//         k++;
//         console.log(k);
//     } else {
//         console.log('not done');
//         console.log(k);
//     }
// } while (k < 2);

console.log(appData);
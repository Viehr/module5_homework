//задание 1.1
let name = prompt("");
let lastName = prompt("");
alert(`Привет, ${name} ${lastName}!`);



//задание 1.2
let cels = prompt('Введите температуру в градусах Цельсия:');
let far = (cels * 1.8) + 32;
alert(`${cels} градусов по Цельсию равны ${far} градусам по Фаренгейту`);



//задание 1.4
let x = prompt('');
let y = (4*x*x + 18 - 23*x)/(5*x/9 + 18*x*x*x*x/33) + x*15/12;
alert(y);



//задание 1.5
a = 12;
b = 'number';
c = false;
d = null;
e = undefined;
f = 123.34;
g = '1' + 1;
h = 15 / 0;
i = -'5';
j = 5 == '5'

at = typeof a === 'number'; // true
bt = typeof b === 'string'; // false, а нужно чтобы все были true
ct = typeof c === 'boolean';
dt = typeof d === 'object';
et = typeof e === 'undefined';
ft = typeof f === 'number';
gt = typeof g === 'string';
ht = typeof h === 'number';
it = typeof i === 'number';
jt = typeof j === 'boolean';

alert(at && bt && ct && dt && et && ft && gt && ht && it && jt);



//задание 2.1
const NDS = 0.20
const NDFL = 0.13
const EXCISE = 0.1
const RENT = 40000
const FOOD = 15000
const OTHER = 15000
const MY_SALARY = 120000

let ndflTax, mySalaryNet, otherTaxes, totalAvailable;

ndflTax = MY_SALARY * NDFL;
mySalaryNet = MY_SALARY - ndflTax;
otherTaxes = mySalaryNet * (NDS + EXCISE);
totalAvailable = mySalaryNet - otherTaxes;
totalAvailable -= FOOD + OTHER + RENT
alert('Зарплата ' + MY_SALARY + ' рублей')
alert('Уплачено налогов на сумму ' + (ndflTax + otherTaxes) + ' рублей')
alert('Осталось ' + totalAvailable + ' рублей')



//задание 2.2




//задание 2.3





//задание 3.1





//задание 3.2





//задание 3.3

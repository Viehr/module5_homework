//задание 1.1
let name = prompt("");
let lastName = prompt("");
alert(`Привет, ${name} ${lastName}!`);



//задание 1.2
let cels = prompt('Введите температуру в градусах Цельсия:');
let far = (cels * 1.8) + 32;
alert(`${cels} градусов по Цельсию равны ${far} градусам по Фаренгейту`);



//задание 1.3
let x = prompt('');
let y = (4*x*x + 18 - 23*x)/(5*x/9 + 18*x*x*x*x/33) + x*15/12;
alert(y);



//задание 1.4
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



//задание 1.5
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







//задание 2.1
const katA = prompt('');
const katB = prompt('');
const gipC = prompt('');

if (katA**2 + katB**2 === gipC) {
  alert('Это прямоугольный треугольник!')
} else {
  alert('Это не прямоугольный треугольник!')
};
/*мой код почему-то не работает, вот код ответ на тренажер:
const a = prompt('Введите катет А')
const b = prompt('Введите катет B')
const c = prompt('Введите гипотенузу C')

if (a ** 2 + b ** 2 === c ** 2) {
	alert('Это прямоугольный треугольник!')
} else {
	alert('Это не прямоугольный треугольник!')
}*/




//задание 2.2
const a = prompt('');
const b = prompt('');
const c = prompt('');

if (a>b) {
  alert (a);
} else {
  if (b>c) {
    alert(b);
  } else {
    alert(c)
  }
};




//задание 2.3
const number = prompt('');
if (number%2 === 0) {
  alert(`Число ${number} четное!`)
} else {
  alert(`Число ${number} нечетное!`)
};




//задание 3.1
for (let i = 1; i <= 11; i += 2) {
	if (i > 5) {
	  console.log(i - 1);
  } else {
    console.log(i)
  }
}




//задание 3.2
let sum = 0;
let trip;
while (trip != 0) {
  trip = prompt('');
  sum += +trip;
};
console.log(sum);

/* мой код почеиу-то не работает, вот ответ на этот тренажер:
let sum = 0;
let a;
do {
  a = prompt('Введите число для суммирования. 0 - остановить');
  sum += +a;
} while (a != 0);
alert(sum);*/





//задание 3.3
let z = 10;
let k;
do {
  while (k !=z) {
    k = prompt('Введите число ' + z);
  }
  z *=2
} while (k<100);
alert('спасибо');

/*мой код опять не работает, вот ответ:
let neededNumber = 10;
let currentNumber;

do {
  while(currentNumber != neededNumber) {
    currentNumber = prompt('Введите число ' + neededNumber);
  }
  neededNumber *= 2;
} while (currentNumber < 100);
alert('Спасибо!')*/





//задание 4.1




//задание 4.2




//задание 4.3




//задание 4.4




//задание 4.5
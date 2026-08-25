// escribir un programa para pasar números en decimal a números romanos
// bonus points: hacer la conversion de ambos lados

// solución aquí
let n = +prompt('dame un numero dale, dame un numeeeerrooooo');
let input = n;
let result = '';
for (let i = 0; i < Math.floor(n / 1000); i++) result += 'M';
n %= 1000;
if (Math.floor(n / 900) == 1) { 
  result += 'CM';
  n %= 900;
}
if (Math.floor(n / 500) == 1) {
  result += 'D';
  n %= 500;
}
if (Math.floor(n / 400) == 1) {
  result += 'CD';
  n %= 400;
}
for (let i = 0; i < Math.floor(n / 100); i++) result += 'C';
n %= 100;
if (Math.floor(n / 90) == 1) { 
  result += 'XC';
  n %= 90;
}
if (Math.floor(n / 50) == 1) {
  result += 'L';
  n %= 50;
}
if (Math.floor(n / 40) == 1) {
  result += 'XL';
  n %= 40;
}
for (let i = 0; i < Math.floor(n / 10); i++) result += 'X';
n %= 10;
if (Math.floor(n / 9) == 1) { 
  result += 'IX';
  n %= 9;
}
if (Math.floor(n / 5) == 1) {
  result += 'V';
  n %= 5;
}
if (Math.floor(n / 4) == 1) {
  result += 'IV';
  n %= 4;
}
for (let i = 0; i < n; i++) result += 'I';

alert(input + ' convertido a romanos es ' + result);

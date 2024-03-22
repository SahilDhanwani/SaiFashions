var purchase = document.getElementById('purchase');
var percent = document.getElementById('percent');

var actual = document.getElementById('actual');
var wholesale = document.getElementById('wholesale');
var retail = document.getElementById('retail');
var code = document.getElementById('code');
var no = document.getElementById('no');

actual.textContent = '000';
wholesale.textContent = '000';
retail.textContent = '000';
no.textContent = '000';
code.textContent = '---';

purchase.addEventListener('input', calculate);
percent.addEventListener('input', calculate);

var letters = ['B', 'G', 'A', 'R', 'M', 'E', 'N', 'T', 'H', 'U'];

function calculate() {
    var temp = parseFloat(purchase.value) + (parseFloat(purchase.value) * parseFloat(percent.value) / 100);
    actual.textContent = temp;

    if (temp % 5 <= 2.5)
        temp = temp - (temp % 5);
    else
        temp = temp + (5 - (temp % 5));

    wholesale.textContent = temp;
    retail.textContent = temp * 2;
    no.textContent = temp / 5;

    temp = parseFloat(purchase.value);
    var ans;
    if (temp % 1 != 0) {
        temp = temp * 10;
        temp = parseInt(temp);
        ans = letters[temp % 10];
        temp = parseInt(temp / 10);
        ans = '.' + ans;
    }
    else
        ans = '';
    temp = parseInt(temp);
    while (temp > 0) {
        ans = letters[temp % 10] + ans;
        temp = parseInt(temp / 10);
    }
    code.textContent = ans;
}
/*
Задание 34.
Вывести простые числа
важность: 3

Натуральное число, большее 1, называется простым, если оно ни на что не делится, кроме себя и 1.

Другими словами, n>1 – простое, если при делении на любое число от 2 до n-1 есть остаток.

Создайте код, который выводит все простые числа из интервала от 2 до 10. Результат должен быть: 2,3,5,7.

P.S. Код также должен легко модифицироваться для любых других интервалов.

http://learn.javascript.ru/task/list-primes
*/

var n, i;
label:

for(n=2; n <=10; n++) {
    for (i = 2; i < n; i++) {
        if (n % i == 0) continue label;
    }
    alert(n);
}
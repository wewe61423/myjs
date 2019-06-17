let var1;
document.write(var1 + "<br>");
var1 = 123;
document.write(typeof(var1) + "<br>");
var1 = 12.3;
document.write(typeof(var1) + "<br>");
var1 = true;
document.write(typeof(var1) + "<br>");
var1 = "Brad";
document.write(typeof(var1) + "<br>");

//變數命名原則 let [a-zA-Z$_][a-zA-Z0-9$_]*
//ex: let $_$ =123; 也算是合法變數
//html 出現 undefined 表示沒定義
//var 屬早期作法，建議用新的 let 來宣告變數較為嚴謹

//宣告常數,字串用單引號或雙引號都可以
//常數宣告慣用會全大寫
//變數.常數在第一次等號動作的行為，為初始化的行為
//Assignment 指派

const name = 'Peggy';
//name = 'Mike'; 常數不可變更、不能有指派的行為

document.write("My name is " + name + "<br>");
document.write(`My name is ${name}<br>`);
let a = 10, b=3;
document.write(`${a} + ${b} = ${a+b}`);
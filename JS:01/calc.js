let sum = prompt("Введите сумму вклада")
let term = prompt("Введите срок депозита в днях")
let percent = 15
let res = sum * percent * term/365 / 100
alert(res)
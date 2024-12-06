let walletAmount = parseFloat(prompt("Напишите сумму денег в вашем кошельке:"));

let chocolatePrice = parseFloat(prompt("Напишите цену одной шоколадки:"));

if 
(walletAmount > 0 && chocolatePrice > 0)
{
    let chocolateCount = Math.floor(walletAmount / chocolatePrice);
    let change = walletAmount - (chocolateCount * chocolatePrice);

    alert(`Вы можете купить ${chocolateCount} шоколадок. Сдача: ${change.toFixed(2)} $.`);
} 
else
 {
    alert("Ошибка");
}
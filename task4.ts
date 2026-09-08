const inputStr: string = "Order#1456; date=2026-01-26 09:07:05; amount=15.3";

// 1. Извлекаем номер заказа
const orderId = inputStr.split("; ")[0]?.replace("Order#", "");

// 2.Извлекаем и форматируем сумму

const amountSplit = inputStr.split("; ")[2]?.replace("amount=", "");
const amountResult = Math.round(parseFloat(amountSplit ?? ""));

// 3. Извлекаем и форматируем дату

// 4. Результат
const result: string = `Заказ № ${orderId} на сумму ${amountResult} рублей`;
console.log(result);

const str: string = "Order#1456; date=2026-01-26 09:07:05; amount=15.3";
const parts = str.split("; ");

// 1. Извлекаем номер заказа
const orderId = parts[0].replace("Order#", "");

// 2. Достаем дату
const rawDate = parts[1].replace("date=", "");
const d = new Date(rawDate.replace(" ", "T"));
const day = String(d.getDate()).padStart(2, "0");
const month = String(d.getMonth() + 1).padStart(2, "0");
const year = d.getFullYear();
const hours = String(d.getHours()).padStart(2, "0");
const minutes = String(d.getMinutes()).padStart(2, "0");
const formattedDate = `${day}/${month}/${year} ${hours}:${minutes}`;

// 3. Извлекаем и форматируем сумму
const rawAmount = parts[2].replace("amount=", "");
const amountNum = Math.ceil(rawAmount);

// 4. Результат
const result = `Заказ № ${orderId} от ${formattedDate} на сумму ${amountNum} рублей`;
console.log(result);

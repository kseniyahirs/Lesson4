const input: string = "Order#1456; date=2026-01-26 09:07:05; amount=15.3";
const parts = input.split("; ");

const orderId = parts[0]?.replace("Order#", "");
const rawDate = parts[1]?.replace("date=", "");
const price = parts[2]?.replace("amount=", "");

// 2. Достаем дату
const year = rawDate?.substring(0, 4);
const month = rawDate?.substring(5, 7);
const day = rawDate?.substring(8, 10);
const time = rawDate?.substring(11, 16);

const formDate = `${day}/${month}/${year} ${time}`;

// 3. Извлекаем и форматируем сумму
const updPrice = Math.ceil(parseFloat(price || "0"));

// 4. Результат
const result = `Заказ № ${orderId} от ${formDate} на сумму ${updPrice} рублей`;
console.log(result);

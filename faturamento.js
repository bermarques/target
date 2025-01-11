const fs = require("fs");

const revenueData = JSON.parse(fs.readFileSync("dados.json", "utf8"));

const daysWithRevenue = revenueData.filter(({ valor }) => valor > 0);

const revenueValues = daysWithRevenue.map(({ valor }) => valor);
const lowestValue = Math.min(...revenueValues);
const highestValue = Math.max(...revenueValues);

const totalRevenue = revenueValues.reduce((sum, value) => sum + value, 0);
const monthlyAverage = totalRevenue / revenueValues.length;

const daysAboveAverage = revenueValues.filter(
  (value) => value > monthlyAverage
).length;

console.log("Menor valor de faturamento diário: R$", lowestValue.toFixed(2));
console.log("Maior valor de faturamento diário: R$", highestValue.toFixed(2));
console.log("Número de dias com faturamento acima da média:", daysAboveAverage);

console.log("Menor valor de faturamento diário: R$", lowestValue.toFixed(2));
console.log("Maior valor de faturamento diário: R$", highestValue.toFixed(2));
console.log("Dias com faturamento superior à média mensal:", daysAboveAverage);

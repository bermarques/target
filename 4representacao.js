const revenueByState = {
  SP: 67836.43,
  RJ: 36678.66,
  MG: 29229.88,
  ES: 27165.48,
  Outros: 19849.53,
};

const totalRevenue = Object.values(revenueByState).reduce(
  (sum, value) => sum + value,
  0
);

const formattedRevenue = Object.entries(revenueByState).map(
  ([state, value]) => {
    const percentual = (value / totalRevenue) * 100;
    return `${state}: ${percentual.toFixed(2)}%`;
  }
);

console.log(formattedRevenue.join("\n"));

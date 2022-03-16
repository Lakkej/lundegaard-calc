export default function handler(req, res) {
  if (req.method === "GET") {
    const { amount, insurance, months } = req.query;
    const rate = 0.069;
    const insuranceAmount = insurance === "true" ? 100 : 0;
    const rateMonthly = Number((rate / 12).toFixed(5));
    const payment =
      Math.round(
        amount /
          ((Math.pow(1 + rateMonthly, months) - 1) /
            (rateMonthly * Math.pow(1 + rateMonthly, months)))
      ) + insuranceAmount;
    res.status(200).json({
      payment,
      totalAmount: payment * months,
      rate,
      rateMonthly,
    });
  }
}

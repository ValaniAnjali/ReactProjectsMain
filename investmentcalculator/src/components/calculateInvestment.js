export default function calculateInvestment({
  initialInvestment,
  annualInvestment,
  expectedReturn,
  duration
}) {
  const r = expectedReturn / 100;

  let rows = [];
  let currentValue = initialInvestment;
  let investedCapital = initialInvestment;
  let totalInterest = 0;

  for (let year = 1; year <= duration; year++) {
    // add annual investment (except year 1 lump sum already added)
    currentValue += annualInvestment;
    investedCapital += annualInvestment;

    // interest for this year
    const interestYear = currentValue * r;
    currentValue += interestYear;
    totalInterest += interestYear;

    rows.push({
      year,
      investmentValue: Math.round(currentValue),
      interestYear: Math.round(interestYear),
      totalInterest: Math.round(totalInterest),
      investedCapital: Math.round(investedCapital)
    });
  }

  return rows;
}

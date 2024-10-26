import { Investment } from '../model/Investment';
import { LineData } from '../model/LineData';

import { formatter } from '../util/investment';

import { calculateInvestmentResults } from '../util/investment';

interface ResultsProps {
  data: Investment;
}

const Results = ({ data }: ResultsProps) => {
  const results: LineData[] = calculateInvestmentResults(data);
  const initialInvestment =
    results[0].valueEndOfYear -
    results[0].interest -
    results[0].annualInvestment;

  return (
    <table id="result">
      <thead>
        <tr>
          <th>Year</th>
          <th>Investment Value</th>
          <th>Interest (Year)</th>
          <th>Total Interest</th>
          <th>Invested Capital</th>
        </tr>
      </thead>
      <tbody>
        {results.map((lineData: LineData) => {
          const totalInterest =
            lineData.valueEndOfYear - lineData.annualInvestment * lineData.year;

          return (
            <tr key={lineData.year}>
              <td>{lineData.year}</td>
              <td>{formatter.format(lineData.valueEndOfYear)}</td>
              <td>{formatter.format(lineData.interest)}</td>
              <td>{formatter.format(totalInterest)}</td>
              <td>{formatter.format(initialInvestment)}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default Results;

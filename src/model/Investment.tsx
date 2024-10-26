import { IsInt, Min } from 'class-validator';

export class Investment {
  initialInvestment?: number;

  annualInvestment?: number;

  expectedReturn?: number;

  @Min(1)
  @IsInt()
  duration?: number;

  constructor(
    initialInvestment?: number,
    annualInvestment?: number,
    expectedReturn?: number,
    duration?: number
  ) {
    this.initialInvestment = initialInvestment;
    this.annualInvestment = annualInvestment;
    this.expectedReturn = expectedReturn;
    this.duration = duration;
  }
}

export interface Line {
  portfolioId: number;
  portfolioName: string;
  color: string;
  yearlyRiskCount?: (YearlyRiskCountEntity)[];
}
export interface YearlyRiskCountEntity {
  yearNumber: number;
  monthlyRiskCount: MonthlyRiskCount;
}
export interface MonthlyRiskCount {
  riskCountByMonth?: (number)[];
}

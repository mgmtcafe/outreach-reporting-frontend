import { Component, OnInit } from '@angular/core';
import { RiskService } from '../risk.service';
import { Bar } from '../bar';

@Component({
  selector: 'app-risk-charts',
  templateUrl: './risk-charts.component.html',
  styleUrls: ['./risk-charts.component.css']
})
export class RiskChartsComponent implements OnInit {

  public barChartDataReady: boolean = false;
  public bar: Bar[] = [];
  public barChartType: string = 'bar';
  public barChartDatasets: Array<any> = [];
  public barChartLabels: Array<any> = [];
  public barChartColors: Array<any> = [];
  public lineAreaChartDataReady: boolean = false;
  public line = [];
  public lineChartType: string = 'line';
  public lineChartDatasets: Array<any> = [];
  public lineChartLabels: Array<any> = [];
  public lineChartColors: Array<any> = [];
  public chartOptions: any = {
    responsive: true
  };

  constructor(private riskSvc: RiskService) {
  }

  ngOnInit() {
    this.riskSvc.getPieData().subscribe(resp => {
      this.bar = resp;
      let barData = { data: [], label: 'Portfolio wise risk' };
      let barColor = { backgroundColor: [], borderWidth: 0, backgroundWidth: 2 }
      this.bar.forEach(p => {
        barData.data.push(p.value);
        this.barChartLabels.push(p.name);
        barColor.backgroundColor.push(p.color);
      });
      this.barChartDatasets.push(barData);
      this.barChartColors.push(barColor);
      this.barChartDataReady = true;
    });
    this.riskSvc.getLineAreaData().subscribe(resp => {
      this.line = resp;
      this.line[0].yearlyRiskCount.forEach(element => {
        let year = element.yearNumber;
        this.lineChartLabels.push("January-" + year);
        this.lineChartLabels.push("February-" + year);
        this.lineChartLabels.push("March-" + year);
        this.lineChartLabels.push("April-" + year);
        this.lineChartLabels.push("May-" + year);
        this.lineChartLabels.push("June-" + year);
        this.lineChartLabels.push("July-" + year);
        this.lineChartLabels.push("August-" + year);
        this.lineChartLabels.push("September-" + year);
        this.lineChartLabels.push("October-" + year);
        this.lineChartLabels.push("November-" + year);
        this.lineChartLabels.push("December-" + year);
      });
      this.line.forEach(data => {
        let colorOption = {
          backgroundColor: 'rgb(0, 0, 0, 0)',
          borderColor: data.color,
          borderWidth: 3,
          pointBackgroundColor: data.color
        }
        this.lineChartColors.push(colorOption);
        let dataset = {
          data: [],
          label: data.portfolioName
        };
        data.yearlyRiskCount.forEach(element => {
          element.monthlyRiskCount.riskCountByMonth.forEach(x => dataset.data.push(x));
        });
        this.lineChartDatasets.push(dataset);
      });
      this.lineAreaChartDataReady = true;
    });
  }

  public chartClicked(e: any): void { }
  public chartHovered(e: any): void { }

}

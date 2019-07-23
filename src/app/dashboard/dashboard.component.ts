import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HighchartsService } from '../services/highcharts.service';
import { Chart } from 'angular-highcharts';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})

export class DashboardComponent implements OnInit {

  constructor(
    private _chart: HighchartsService
  ) { }

  public count: number[];
  public linechart: Chart;
  private yAxis: number[];

  private countData = new BehaviorSubject(this.count);
  countDataObsrv = this.countData.asObservable();

  private chartData = new BehaviorSubject(this.linechart);
  lineChartData = this.chartData.asObservable();

  updatechartData(data): void {
    this.countData.next(data);
  }

  updateLineCHart(data): void {
    this.chartData.next(data);
  }

  ngOnInit() {
    this.reset(19);
    this.drawChart();
  }

  reset(i: number) {
    let arr = Array.from(Array(35), () => 0);
    if (i == 19) {
      this.updatechartData(arr);
    }
    this.drawChart();
  }

  setCount(i: number) {
    if (i != 19) {
      this.count[i] += 1;
      this.drawChart();
    }
  }

  drawChart() {
    this.countData.subscribe(newCount => this.count = newCount);
    this.yAxis = [];
    this.yAxis = this.count;
    var countTrack = this._chart.toLineChart(this.yAxis, "Mouse Plot");
    this.updateLineCHart(countTrack);
    this.lineChartData.subscribe(newChart => this.linechart = newChart);
  }
}
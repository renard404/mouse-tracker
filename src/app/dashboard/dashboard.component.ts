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

  count1; count2;
  public linechart;
  public data = [];
  ngOnInit() {
    this.reset();
    this.drawChart();
  }

  increment(i, flag: number) {
    console.log("i:", i);
    var arr1, arr2;

    this.countData1.subscribe(sth => arr1 = sth);
    this.countData2.subscribe(sth => arr2 = sth);
    if(flag == 1) {
      console.log("count1");
      arr1[i] += 1
    } else {
      console.log("count2");
      arr2[i] += 1;
    }
    this.updatechartData1(arr1);
    this.updatechartData2(arr2);
    this.drawChart();
  }

  reset() {
    this.updatechartData1([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    this.updatechartData2([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    this.drawChart();
  }


  public countData1 = new BehaviorSubject(this.count1);
  countDataObsrv1 = this.countData1.asObservable();

  public countData2 = new BehaviorSubject(this.count1);
  countDataObsrv2 = this.countData2.asObservable();

  public chartData = new BehaviorSubject(this.linechart);
  lineChartData = this.chartData.asObservable();

  updatechartData1(data): void {
    this.countData1.next(data);
  }

  updatechartData2(data): void {
    this.countData2.next(data);
  }

  updateLineCHart(data): void{
    this.chartData.next(data);
  }

  xAxis = [];
  yAxis = [];

  drawChart() {

    this.countData1.subscribe(sth => this.count1 = sth);
    this.countData2.subscribe(sth => this.count2 = sth);

    var i = 1
    this.yAxis = [];
    this.count1.forEach(element => {
      // this.xAxis.push(i);
      this.yAxis.push(element);
      i++;
    });
    this.count2.forEach(element => {
      // this.xAxis.push(i);
      this.yAxis.push(element);
      i++;
    });
    var adrak = this._chart.toLineChart(this.yAxis, "lassan");
    this.updateLineCHart(adrak);
    this.lineChartData.subscribe(sth => this.linechart = sth);
  }
}

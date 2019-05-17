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
  count;
  public linechart;
  yAxis = [];
  public data = [];
  ngOnInit() {
    this.reset(19);
    this.drawChart();
  }

  setCount(i) {
    if(i != 19){
      console.log("i:", i);
      this.count[i] += 1;
    // var arr1, arr2;

    // this.countData1.subscribe(sth => arr1 = sth);
    // this.countData2.subscribe(sth => arr2 = sth);
    // if(flag == 1) {
    //   console.log("count1");
    //   arr1[i] += 1
    // } else {
    //   console.log("count2");
    //   arr2[i] += 1;
    // }
    // this.updatechartData1(arr1);
    // this.updatechartData2(arr2);
    this.drawChart();
    }
  }

  reset(i) {
    if(i == 19){
      this.updatechartData([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    }
    // [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    // this.updatechartData1([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    this.drawChart();
  }


  // public countData1 = new BehaviorSubject(this.count1);
  // countDataObsrv1 = this.countData1.asObservable();

  // public countData2 = new BehaviorSubject(this.count1);
  // countDataObsrv2 = this.countData2.asObservable();
  
  public countData = new BehaviorSubject(this.count);
  countDataObsrv = this.countData.asObservable();

  public chartData = new BehaviorSubject(this.linechart);
  lineChartData = this.chartData.asObservable();

  // updatechartData1(data): void {
  //   this.countData1.next(data);
  // }

  updatechartData(data): void {
    this.countData.next(data);
  }

  updateLineCHart(data): void{
    this.chartData.next(data);
  }

  drawChart() {

    // this.countData1.subscribe(sth => this.count1 = sth);
    this.countData.subscribe(sth => this.count = sth);

    var i = 1
    this.yAxis = [];
    this.yAxis = this.count;
    // this.count1.forEach(element => {
    //   // this.xAxis.push(i);
    //   this.yAxis.push(element);
    //   i++;
    // });
    // this.count2.forEach(element => {
    //   // this.xAxis.push(i);
    //   this.yAxis.push(element);
    //   i++;
    // });
    var countTrack = this._chart.toLineChart(this.yAxis, "Mouse Tracking");
    this.updateLineCHart(countTrack);
    this.lineChartData.subscribe(sth => this.linechart = sth);
  }
}

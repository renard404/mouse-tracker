import { Component, OnInit } from '@angular/core';
// import { ChartsService } from '../services/chart-service/charts.service';
import { BehaviorSubject } from 'rxjs';
// import { Chart } from 'angular-highcharts';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})

export class DashboardComponent implements OnInit {

  constructor(){}

  count1;count2;
  // public linechart: Chart;
  public data = [];
  ngOnInit() {
    // this.count1 = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
    // this.count2 = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
    this.reset();
    this.drawChart();
  }

  increment(i, arr){
    arr[i] += 1; 
  }

  reset(){
    this.count1 = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
    this.count2 = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
  }

  public chartData = new BehaviorSubject([]);
  chartDataObsrv = this.chartData.asObservable();
  updatechartData(data): void {
    this.chartData.next(data);
  }

  drawChart(){
    var xAxis = [];
    var yAxis = [];
    var i = 1
    this.count1.forEach(element => {
      xAxis.push(i);
      yAxis.push(element);
      this.data.push([i, element]);
      i++;
    });
    this.count2.forEach(element => {
      xAxis.push(i);
      yAxis.push(element);
      this.data.push([i, element]);
      i++;
    });
    
    this.updatechartData(this.data);
    console.log(this.data);
    
    // this.linechart = this._chart.toScatterChart(this.data);
    // this.linechart = this._chart.toLineChart(xAxis, yAxis);
  }
}

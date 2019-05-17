import { Injectable } from '@angular/core';
import { Chart } from 'angular-highcharts';


@Injectable({
  providedIn: 'root'
})
export class HighchartsService {
  constructor() { }
  public chart: any;

  xAxis: string[] = ['1']
  public toLineChart( yAxis: any, title: string) {
    this.chart = new Chart({
      chart: {
        type: 'line'
      },
      title: {
        text: title
      },
      credits: {
        enabled: false
      },
      xAxis: {
        categories: this.xAxis
      },
      yAxis: {
        title: {
          text: null
        }
      },
      plotOptions: {
        line: {
          dataLabels: {
            enabled: true
          },
          color: '#1f8c93',
          enableMouseTracking: true,
          showInLegend: false
        }
      },
      series: [{
        type: 'line',
        data: yAxis
      }]
    });
    // console.log("adrak", this.chart); 
    return this.chart;
  }
}


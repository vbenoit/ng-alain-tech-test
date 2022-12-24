import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ChartEChartsOption } from '@delon/chart/chart-echarts';
import { _HttpClient } from '@delon/theme';
import { NzMessageService } from 'ng-zorro-antd/message';

@Component({
  selector: 'glucose-level-chart',
  template: `
    <p class="">
      <button (click)="returnToMenu()">Return to menu glucose</button>
    </p>
    <chart-echarts [option]="option"> </chart-echarts>
  `
})
export class GlucoseLevelChartComponent {
  dark = false;
  two = false;

  offlineChartData!: any[];

  option: ChartEChartsOption = {
    xAxis: {
      type: 'category',
      data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    },
    yAxis: {
      type: 'value'
    },
    series: [
      {
        data: [150, 230, 224, 218, 135, 147, 260],
        type: 'line'
      }
    ]
  };

  constructor(private msg: NzMessageService, private router: Router) {}

  returnToMenu() {
    this.router.navigate(['/videris']);
  }
}

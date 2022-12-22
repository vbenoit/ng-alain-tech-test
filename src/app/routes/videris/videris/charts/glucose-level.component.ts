import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ChartEChartsComponent, ChartEChartsOption, ChartEChartsOn } from '@delon/chart/chart-echarts';
import { NzMessageService } from 'ng-zorro-antd/message';

@Component({
  selector: 'glucose-level-chart',
  template: `
    <p class="">
      <button (click)="returnToMenu()">Return to menu</button>
    </p>
    <chart-echarts [option]="option"> </chart-echarts>
  `
})
export class GlucoseLevelChartComponent {
  dark = false;
  two = false;

  option: ChartEChartsOption = {
    xAxis: {
      type: 'category',
      data: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul']
    },
    yAxis: {
      type: 'value'
    },
    series: [
      {
        data: [150, 120, 130, 120, 130, 150, 120],
        type: 'line'
      }
    ]
  };

  constructor(private msg: NzMessageService, private router: Router) {}

  returnToMenu() {
    this.router.navigate(['/videris']);
  }
}

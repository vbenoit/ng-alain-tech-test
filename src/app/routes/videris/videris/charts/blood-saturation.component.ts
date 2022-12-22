import { Component } from '@angular/core';
import { Router } from '@angular/router';
import type { Chart } from '@antv/g2';
import { ChartEChartsOn, ChartEChartsOption } from '@delon/chart/chart-echarts';
import { NzMessageService } from 'ng-zorro-antd/message';

@Component({
  selector: 'blood-saturation-chart',
  template: `
    <p class="">
      <button (click)="returnToMenu()">Return to menu</button>
    </p>
    <p> blood saturation </p>
  `
})
export class BloodSaturationChartComponent {
  dark = false;
  two = false;

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

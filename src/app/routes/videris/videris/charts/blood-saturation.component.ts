import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import type { Chart } from '@antv/g2';
import { ChartEChartsOn, ChartEChartsOption } from '@delon/chart/chart-echarts';
import { _HttpClient } from '@delon/theme';
import { NzMessageService } from 'ng-zorro-antd/message';

@Component({
  selector: 'blood-saturation-chart',
  template: `
    <p class="">
      <button (click)="returnToMenu()">Return to menu</button>
    </p>
    <p> blood saturation </p>
    <g2-timeline [data]="offlineChartData" [titleMap]="{ y1: 'abs', y2: 'ord' }"></g2-timeline>
    <chart-echarts [option]="option"> </chart-echarts>
  `
})
export class BloodSaturationChartComponent implements OnInit {
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

  constructor(private msg: NzMessageService, private router: Router, private http: _HttpClient, private cdr: ChangeDetectorRef) {}

  ngOnInit(): void {
    this.http.get('/chart').subscribe(res => {
      this.offlineChartData = res.offlineChartData;
      this.cdr.detectChanges();
    });
  }

  returnToMenu() {
    this.router.navigate(['/videris']);
  }
}

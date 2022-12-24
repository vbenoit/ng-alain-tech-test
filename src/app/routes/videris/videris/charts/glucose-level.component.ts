import { Platform } from '@angular/cdk/platform';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OnboardingService } from '@delon/abc/onboarding';
import { _HttpClient } from '@delon/theme';
import { NzMessageService } from 'ng-zorro-antd/message';

@Component({
  selector: 'glucose-level-chart',
  template: ` <p class="">
    <button (click)="returnToMenu()">Return to menu glucose</button>
  </p>`
  //<g2-timeline [data]="offlineChartData" [titleMap]="{ y1: 'abs', y2: 'ord' }"></g2-timeline>

  //<chart-echarts [option]="option"> </chart-echarts>
})
export class GlucoseLevelChartComponent implements OnInit {
  dark = false;
  two = false;

  offlineChartData!: any[];

  constructor(
    private msg: NzMessageService,
    private router: Router,
    private http: _HttpClient,
    private cdr: ChangeDetectorRef,
    private obSrv: OnboardingService,
    private platform: Platform
  ) {}

  returnToMenu() {
    this.router.navigate(['/videris']);
  }

  ngOnInit(): void {
    this.http.get('/chart').subscribe(res => {
      this.offlineChartData = res.offlineChartData;
      this.cdr.detectChanges();
    });
  }
}

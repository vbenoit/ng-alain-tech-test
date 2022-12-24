import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
  `
})
export class BloodSaturationChartComponent implements OnInit {
  dark = false;
  two = false;

  offlineChartData!: any[];

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

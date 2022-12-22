import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';

import { CHARTS_NAME } from '../../videris.consts';

@Component({
  selector: 'videris-menu',
  template: `
    <div class="alain-default__content-title">
      <h1>home / Home / Devices</h1>
    </div>
    <h2>Devices</h2>
    <div nz-row [nzGutter]="8">
      <div nz-col [nzSpan]="6">
        <nz-card nzTitle="SPo2" (click)="displayChart(CHARTS_NAME.BLOOD_SATURATION_CHART)">
          <p>Blood saturation level history</p>
        </nz-card>
      </div>
      <div nz-col [nzSpan]="6">
        <nz-card nzTitle="Blood pressure">
          <p>Blood pressure history</p>
        </nz-card>
      </div>
      <div nz-col [nzSpan]="6">
        <nz-card nzTitle="ECG">
          <p>ECG history</p>
        </nz-card>
      </div>
      <div nz-col [nzSpan]="6">
        <nz-card nzTitle="Temperature">
          <p>Temperature history</p>
        </nz-card>
      </div>
    </div>
    <div nz-row [nzGutter]="8">
      <div nz-col [nzSpan]="6">
        <nz-card nzTitle="BMI">
          <p>BMI history</p>
        </nz-card>
      </div>
      <div nz-col [nzSpan]="6">
        <nz-card nzTitle="Glucose level" (click)="displayChart(CHARTS_NAME.GLUCOSE_LEVEL_CHART)">
          <p>Glucose level history</p>
        </nz-card>
      </div>
    </div>
  `
})
export class ViderisMenuComponent {
  CHARTS_NAME = CHARTS_NAME;

  constructor(private router: Router) {}

  displayChart(suffix: string) {
    this.router.navigate([`/videris/${suffix}`]);
  }
}

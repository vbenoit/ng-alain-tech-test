import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CHARTS_NAME } from './videris.consts';
import { BloodSaturationChartComponent, GlucoseLevelChartComponent } from './videris/charts';
import { ViderisMenuComponent } from './videris/menu/videris.menu.component';

const routes: Routes = [
  { path: '', component: ViderisMenuComponent },
  { path: CHARTS_NAME.BLOOD_SATURATION_CHART, component: BloodSaturationChartComponent },
  { path: CHARTS_NAME.GLUCOSE_LEVEL_CHART, component: GlucoseLevelChartComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ViderisRoutingModule {}

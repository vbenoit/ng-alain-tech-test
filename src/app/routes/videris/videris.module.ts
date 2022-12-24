import { NgModule, Type } from '@angular/core';
import { ChartEChartsModule } from '@delon/chart/chart-echarts';
import { G2TimelineModule } from '@delon/chart/timeline';
import { SharedModule } from '@shared';

import { ViderisRoutingModule } from './videris-routing.module';
import { GlucoseLevelChartComponent } from './videris/charts';
import { BloodSaturationChartComponent } from './videris/charts/blood-saturation.component';
import { ViderisMenuComponent } from './videris/menu/videris.menu.component';

const COMPONENTS: Array<Type<void>> = [ViderisMenuComponent, BloodSaturationChartComponent, GlucoseLevelChartComponent];

@NgModule({
  imports: [SharedModule, ViderisRoutingModule, ChartEChartsModule, G2TimelineModule],
  declarations: COMPONENTS
})
export class ViderisModule {}

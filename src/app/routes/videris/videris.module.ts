import { NgModule, Type } from '@angular/core';
import { ChartEChartsModule } from '@delon/chart/chart-echarts';
import { SharedModule } from '@shared';

import { ViderisRoutingModule } from './videris-routing.module';
import { BloodSaturationChartComponent } from './videris/charts/blood-saturation.component';
import { ViderisMenuComponent } from './videris/menu/videris.menu.component';

const COMPONENTS: Array<Type<void>> = [ViderisMenuComponent, BloodSaturationChartComponent];

@NgModule({
  imports: [SharedModule, ViderisRoutingModule, ChartEChartsModule],
  declarations: COMPONENTS
})
export class ViderisModule {}

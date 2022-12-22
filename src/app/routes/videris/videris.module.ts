import { NgModule, Type } from '@angular/core';
import { G2MiniAreaModule } from '@delon/chart/mini-area';
import { G2MiniBarModule } from '@delon/chart/mini-bar';
import { SharedModule } from '@shared';
import { NzCarouselModule } from 'ng-zorro-antd/carousel';

import { ViderisRoutingModule } from './videris-routing.module';
import { ViderisComponent } from './videris/videris.component';

const COMPONENTS: Array<Type<void>> = [ViderisComponent];

@NgModule({
  imports: [SharedModule, ViderisRoutingModule, NzCarouselModule, G2MiniBarModule, G2MiniAreaModule],
  declarations: COMPONENTS
})
export class ViderisModule {}

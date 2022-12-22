import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ViderisComponent } from './videris/videris.component';

const routes: Routes = [{ path: '', component: ViderisComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ViderisRoutingModule {}

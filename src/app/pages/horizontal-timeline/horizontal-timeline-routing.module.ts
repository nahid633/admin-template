import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HorizontalTimelineComponent} from './container/horizontal-timeline.component';
const routes: Routes = [
  {path: '', component: HorizontalTimelineComponent}];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HorizontalTimelineRoutingModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {VerticalTimelineComponent} from './container/vertical-timeline.component';


const routes: Routes = [
  {path: '', component: VerticalTimelineComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VerticalTimelineRoutingModule { }

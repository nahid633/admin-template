import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VerticalTimelineRoutingModule } from './vertical-timeline-routing.module';
import { VerticalTimelineComponent } from './container/vertical-timeline.component';


@NgModule({
  declarations: [VerticalTimelineComponent],
  imports: [
    CommonModule,
    VerticalTimelineRoutingModule
  ]
})
export class VerticalTimelineModule { }

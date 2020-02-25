import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HorizontalTimelineRoutingModule } from './horizontal-timeline-routing.module';
import { HorizontalTimelineComponent } from './container/horizontal-timeline.component';


@NgModule({
  declarations: [HorizontalTimelineComponent],
  imports: [
    CommonModule,
    HorizontalTimelineRoutingModule
  ]
})
export class HorizontalTimelineModule { }

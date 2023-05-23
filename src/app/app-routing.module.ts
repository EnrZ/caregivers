import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { WhatWeDoExpComponent } from './what-we-do-exp/what-we-do-exp.component';
import { MissionStatementComponent } from './mission-statement/mission-statement.component';
import { ValueComponent } from './value/value.component';
import { VisionComponent } from './vision/vision.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { ApplyComponent } from './apply/apply.component';

const routes: Routes = [
  { path: '', component: WhatWeDoExpComponent},
  { path: 'home', component: WhatWeDoExpComponent},
  { path: 'contact', component: ContactUsComponent},
  { path: 'mission', component: MissionStatementComponent},
  { path: 'value', component: ValueComponent},
  { path: 'vision', component: VisionComponent},
  { path: 'apply', component: ApplyComponent},
];

/*@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})*/
@NgModule({ imports: [RouterModule.forRoot(routes,{ useHash: true})], exports: [RouterModule], })

export class AppRoutingModule { }

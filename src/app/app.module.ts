import { BrowserModule, Meta } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//import { NgAnimate } from @angular/

import { AppComponent } from './app.component';
import { HeadnavComponent } from './headnav/headnav.component';
import { BootdropComponent } from './bootdrop/bootdrop.component';
import { NgbAlertModule, NgbNav } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { FormsModule,ReactiveFormsModule } from '@angular/forms';

import { NgbNavModule } from '@ng-bootstrap/ng-bootstrap';
import { WhatWeDoExpComponent } from './what-we-do-exp/what-we-do-exp.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { HttpClientModule } from '@angular/common/http';
import { MissionStatementComponent } from './mission-statement/mission-statement.component';
import { ValueComponent } from './value/value.component';
import { VisionComponent } from './vision/vision.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { CarouselComponent } from './carousel/carousel.component';


import { NgbCollapseModule } from '@ng-bootstrap/ng-bootstrap';
import { ApplyComponent } from './apply/apply.component';
import { AppRoutingModule } from './app-routing.module';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HeadnavComponent,
    BootdropComponent,
    WhatWeDoExpComponent,
    ContactFormComponent,
    MissionStatementComponent,
    ValueComponent,
    VisionComponent,
    ContactUsComponent,
    CarouselComponent,
    ApplyComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule, NgbAlertModule,BrowserAnimationsModule,NgbNavModule,FormsModule,ReactiveFormsModule,
    HttpClientModule, NgbCollapseModule, AppRoutingModule
   // RouterModule.forRoot(routes)
  ],
  providers: [Meta],
  bootstrap: [AppComponent]
})
export class AppModule { }

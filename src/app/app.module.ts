import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeadnavComponent } from './headnav/headnav.component';
import { BootdropComponent } from './bootdrop/bootdrop.component';
import { NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';


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
    
  ],
  imports: [
    BrowserModule, NgbAlertModule,BrowserAnimationsModule,NgbNavModule,FormsModule,ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

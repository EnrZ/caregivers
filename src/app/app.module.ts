import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeadnavComponent } from './headnav/headnav.component';
import { BootdropComponent } from './bootdrop/bootdrop.component';
import { NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';


import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { FormsModule } from '@angular/forms';

import { NgbNavModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    HeadnavComponent,
    BootdropComponent,
    
  ],
  imports: [
    BrowserModule, NgbAlertModule,BrowserAnimationsModule,NgbNavModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

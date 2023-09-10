import { Component, OnInit } from '@angular/core';
import { Meta, MetaDefinition } from '@angular/platform-browser';

@Component({
  selector: 'app-what-we-do-exp',
  templateUrl: './what-we-do-exp.component.html',
  styleUrls: ['./what-we-do-exp.component.css']
})
export class WhatWeDoExpComponent implements OnInit {

  constructor(private metaService:Meta) { }

  ngOnInit() {
    this.metaService.addTag( { name:'keywords',content:"Saint Louis Caregivers, Caregivers, St. Louis Caregivers, Angelic Caregivers, Elder Care, Elderly Care, Independent Living"});
    this.metaService.addTag( { name:'description',content:"Saint Louis Angelic Caregivers is a company commited to providing great care and ensuring that you or your family member is being well cared for while helping them to remain independent"});
  }

}

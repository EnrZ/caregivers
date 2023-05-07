import { Component, OnInit } from '@angular/core';
import { NgbCollapseModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-bootdrop',
  templateUrl: './bootdrop.component.html',
  styleUrls: ['./bootdrop.component.css']
})
export class BootdropComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  isMenuCollapsed = true;

}

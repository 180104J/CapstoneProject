import { Component, OnInit } from '@angular/core';
import { Institutions } from '../shared/models/institutions';

@Component({
  selector: 'app-institutions',
  templateUrl: './institutions.page.html',
  styleUrls: ['./institutions.page.scss'],
})
export class InstitutionsPage implements OnInit {
  institutions: Institutions[] = []
  constructor() {
    this.institutions = [
    new Institutions('Amazing Company A', 'Best Full-Stack Developers ever'),
    new Institutions('Average University B','Okay graduates'),
    new Institutions('Great Company C','Back-end Experts'),
    ];
    }

  ngOnInit() {
  }

}

import { Component, OnInit } from '@angular/core';
import { Institutions } from '../shared/models/institutions';
import { Reviews } from '../shared/models/reviews';

@Component({
  selector: 'app-viewinstitutionsandreviews',
  templateUrl: './viewinstitutionsandreviews.page.html',
  styleUrls: ['./viewinstitutionsandreviews.page.scss'],
})
export class ViewinstitutionsandreviewsPage implements OnInit {
  reviews: Reviews[] = []
  institutions: Institutions[] = []
  constructor() {
    this.reviews = [
    new Reviews('Jim Jonas','Amazing Company A', 'High pay, low workload and amazing company culture.'),
    new Reviews('Sam Stevens','Average University B','Great university for clubs but not much in the way of opportunities offered afterwards'),
    new Reviews('Anna Alison','Great Company C','High pay but high workload. Do not expect much free time'),
    ];
    this.institutions = [
      new Institutions('Amazing Company A', 'Best Full-Stack Developers ever'),
      new Institutions('Average University B','Okay graduates'),
      new Institutions('Great Company C','Back-end Experts'),
      ];
    }
      

  ngOnInit() {
  }

}

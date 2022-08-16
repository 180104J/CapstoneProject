import { Component, OnInit } from '@angular/core';
import { Reviews } from '../shared/models/reviews';

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.page.html',
  styleUrls: ['./reviews.page.scss'],
})
export class ReviewsPage implements OnInit {
  reviews: Reviews[] = []
  constructor() {
    this.reviews = [
    new Reviews('Jim Jonas','Amazing Company A', 'High pay, low workload and amazing company culture.'),
    new Reviews('Sam Stevens','Average University B','Great university for clubs but not much in the way of opportunities offered afterwards'),
    new Reviews('Anna Alison','Great Company C','High pay but high workload. Do not expect much free time'),
    ];
    }


  ngOnInit() {
  }

}

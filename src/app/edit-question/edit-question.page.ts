import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Question } from '../shared/models/product';
import { QuestionService } from '../shared/services/question.service';

@Component({
  selector: 'app-edit-question',
  templateUrl: './edit-question.page.html',
  styleUrls: ['./edit-question.page.scss'],
})
export class EditQuestionPage implements OnInit {
  questionID: number;
  question: Question;
  questionDetails: string;


  constructor(private route: ActivatedRoute, private router: Router, private questionService: QuestionService) {
    this.questionID = this.route.snapshot.params.questionID;
    this.question = this.questionService.getQuestionById(this.questionID);
    // this.questionDetails = this.question.questionDetails;
   }

  ngOnInit() {
  }

  update() {
    
    this.router.navigate(['graduate']);
  }

}

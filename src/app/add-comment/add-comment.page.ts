import { DatePipe, DATE_PIPE_DEFAULT_TIMEZONE, formatDate } from '@angular/common';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Question } from '../shared/models/product';
import { QuestionService } from '../shared/services/question.service';

@Component({
  selector: 'app-add-comment',
  templateUrl: './add-comment.page.html',
  styleUrls: ['./add-comment.page.scss'],
})
export class AddCommentPage implements OnInit {
  addQuestionForm: FormGroup;
  localISOTime = new Date().toLocaleString();
  formattedDt = formatDate(new Date(), 'yyMMddhhmmss', 'en_US')
  submitted: boolean = false;

  constructor(private router: Router,  private questionService: QuestionService, private http: HttpClient) {
    this.addQuestionForm = new FormGroup({
      questionID: new FormControl(this.formattedDt),
      creationDate: new FormControl(this.localISOTime),
      modifiedDate: new FormControl(this.localISOTime),
      userID: new FormControl('2'),
      userName: new FormControl('John'),
      questionDetails: new FormControl('', [Validators.required]),
      referenceID: new FormControl('', [Validators.required])
      });
  // question: Question;
  // questionID: number;
  // //questionDetails: string;

  // constructor(private route: ActivatedRoute, private router: Router, private questionService: QuestionService) { 
  //   this.questionID = this.route.snapshot.params.questionID
  //   this.question = this.questionService.getQuestionById(this.questionID);
  //   //this.questionDetails = this.question.questionDetails; 
  }

  ngOnInit() {
  }

  add() {
    this.submitted = true;

    if (this.addQuestionForm.valid) {
    
    const ques = new Question(
      this.addQuestionForm.value.questionID,
      this.addQuestionForm.value.creationDate,
      this.addQuestionForm.value.modifiedDate,
      this.addQuestionForm.value.userID,
      this.addQuestionForm.value.userName,
      this.addQuestionForm.value.questionDetails,
      this.addQuestionForm.value.referenceID);
      this.questionService.add(ques);

       var url = 'https://itj153-eximius.herokuapp.com/add-question';
       var postData = JSON.stringify({
        questionID: this.addQuestionForm.value['questionID'],
        creationDate: this.addQuestionForm.value['creationDate'],
        modifiedDate: this.addQuestionForm.value['modifiedDate'],
        userID: this.addQuestionForm.value['userID'],
        userName: this.addQuestionForm.value['userName'],
        questionDetails: this.addQuestionForm.value['questionDetails'],
        referenceID: this.addQuestionForm.value['referenceID']
      });
  
      const httpOptions = {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'GET,HEAD,PUT,PATCH,POST,DELETE'
        })
      };
      
      this.http.post(url, postData, httpOptions).subscribe((data) => {
        console.log('postData:', postData)
        console.log(data);
        if (data == false) {
          // this.failed()
        } else if (data == true) {
          // this.successful()     
          window.location.reload();
        }
      }, error => {
        console.log(error);
      });

    this.router.navigate(['senior']);
  }

}


}

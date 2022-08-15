import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSearchbar } from '@ionic/angular';
import { Question } from '../shared/models/product';
import { QuestionService } from '../shared/services/question.service';


@Component({
  selector: 'app-senior',
  templateUrl: './senior.page.html',
  styleUrls: ['./senior.page.scss'],
})
export class SeniorPage implements OnInit {
  question: any = []

  constructor( private questionService: QuestionService, 
    private http: HttpClient) {
      this.question = this.questionService.getQuestion();
    }

  ngOnInit() {
    this.getQuestion()
  }
  
  async getQuestion(){
    var url = 'https://eximiuscapstoneproject2022.herokuapp.com/getQuestion';
    this.http.get(url).subscribe(data => {
    this.question=data
    })
    }

    delete (item){
      var url = 'https://eximiuscapstoneproject2022.herokuapp.com/deleteQuestions';
      
            var postData = JSON.stringify({
  
              
              questionID : item.questionID
              
            });
            console.log("questionID = " + item.questionID )
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
      }
}

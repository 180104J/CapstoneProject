import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSearchbar } from '@ionic/angular';
import { Question } from '../shared/models/product';
import { QuestionService } from '../shared/services/question.service';

@Component({
  selector: 'app-graduate',
  templateUrl: './graduate.page.html',
  styleUrls: ['./graduate.page.scss'],
})
export class GraduatePage implements OnInit {
  //@ViewChild('searchBar', {static: false}) searchBar: IonSearchbar;

  question: any = []
  constructor(
    private questionService: QuestionService, 
    private http: HttpClient) {
    // this.question = [
    //   new Question(1, '6/7/2022', '6/7/2022', 100, 'johndoe', "Why is this..."),
    //   new Question(2, '6/7/2022', '6/7/2022', 101, 'maryjane', "Why is this..."),
    //   new Question(3, '6/7/2022', '6/7/2022', 102, 'larryong', "Why is this...")
    //   ];
    this.question = this.questionService.getQuestion();
  }

  // search(event) {
  //   const text = event.target.value;
  //   const allQuestion = this.questionService.getQuestion();
   
  //   if (text && text.trim() !== '') {
  //   this.question = allQuestion.filter(
  //   item => item.questionDetails.toLowerCase().includes(text.toLowerCase()));
  //   } else {
  //   // Blank text, clear the search, show all products
  //   this.question = allQuestion;
  //   }
  //   }
  //   refresh(event) {
  //     this.searchBar.value = '';
  //     event.target.complete();
  //     }

  // delete(item: Question) {
  //   this.questionService.delete(item);
  //   }

  delete (item){
    var url = 'https://itj153-eximius.herokuapp.com/deleteQuestions';
    
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

  ngOnInit() {
    this.getQuestion()
  }

  async getQuestion(){
    var url = 'https://eximiuscapstoneproject2022.herokuapp.com/getQuestion';
    this.http.get(url).subscribe(data => {
    this.question=data
    })
    }
}

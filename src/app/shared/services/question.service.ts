import { Injectable } from '@angular/core';
import { Question } from '../models/product';


@Injectable({
  providedIn: 'root'
})
export class QuestionService {
  question: Question[] = [];
  constructor() { 
    // this.question = [
    //   new Question(1, '6/7/2022', '6/7/2022', 100, 'johndoe', "Why is this...1"),
    //   new Question(2, '6/7/2022', '6/7/2022', 101, 'maryjane', "Why is this...2"),
    //   new Question(3, '6/7/2022', '6/7/2022', 102, 'larryong', "Why is this...3"),
    //   new Question(4, '6/7/2022', '6/7/2022', 103, 'limchuyo', "Why is this...4"),
    //   new Question(5, '6/7/2022', '6/7/2022', 104, 'peterdavid', "Why is this...5"),
    //   new Question(6, '6/7/2022', '6/7/2022', 105, 'jasongrey', "Why is this...6")
    //   ];
  }

  getQuestion(): Question[] {
    return this.question;
    }

    getQuestionById(questionID: number): Question {
      return this.question.find(item => item.questionID == questionID)
    }



    add(q: Question) {
      this.question.push(q);
      }

  delete(q: Question){
    const index = this.question.findIndex(item => item.questionID == q.questionID);
      if (index >= 0) {
      this.question.splice(index, 1);
      }
      }
}

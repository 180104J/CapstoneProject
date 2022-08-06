import { NgIf } from "@angular/common";

export class Question {

    questionID: number;
    creationDate: string;
    modifiedDate: string;
    userID: number;
    userName: string;
    questionDetails: string;
    referenceID: string;


    constructor(questionID: number, creationDate: string, modifiedDate: string, userID: number, userName: string, questionDetails: string, referenceID: string) {
    this.questionID = questionID;
    this.creationDate = creationDate;
    this.modifiedDate = modifiedDate;
    this.userID = userID;
    this.userName = userName;
    this.questionDetails = questionDetails;
    this.referenceID = referenceID;
    }
   }
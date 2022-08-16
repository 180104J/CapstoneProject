import { NgIf } from "@angular/common";

export class Reviews {

    reviewerName: string;
    instutionName: string;
    instutionDetails: string;


    constructor(reviewerName: string, instutionName: string, instutionDetails: string) {
        this.reviewerName = reviewerName;
        this.instutionName = instutionName;
        this.instutionDetails = instutionDetails;
    }
}
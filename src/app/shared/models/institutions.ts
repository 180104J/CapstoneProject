import { NgIf } from "@angular/common";

export class Institutions {

    instutionName: string;
    instutionDetails: string;


    constructor(instutionName: string, instutionDetails: string) {
    this.instutionName = instutionName;
    this.instutionDetails = instutionDetails;
    }
   }
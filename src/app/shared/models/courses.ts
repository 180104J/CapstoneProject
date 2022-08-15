export class Course {

    courseTitle: string;
    imgUrl: string;
    institution: string;
    sector: string;
    // P_Forms
    jobRole: string;
    applicationStatus: string;
    lastModified: String;
    overview: string;
    entryRequirement: string;
    courseFee: string;
    wspCompanyId: string;
    wspContactId: string;
    courseId:string;
    icon: string;


    constructor(courseTitle: string, imgUrl: string, institution: string , sector:string, jobRole: string, applicationStatus: string, 
        lastModified:string, overview: string, entryRequirement:string, courseFee:string, wspCompanyId: string, wspContactId: string, courseId:string, icon?:string) {
        this.courseTitle = courseTitle;
        this.imgUrl = imgUrl;
        this.institution = institution;
        this.sector = sector;
        this.jobRole = jobRole;
        this.applicationStatus = applicationStatus;
        this.lastModified = lastModified;
        this.overview = overview;
        this.entryRequirement = entryRequirement;
        this.courseFee = courseFee;
        this.wspCompanyId = wspCompanyId;
        this.wspContactId = wspContactId;
        this.courseId = courseId;
        this.icon = icon;
    }

}

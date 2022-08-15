import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Course } from '../shared/models/courses';
import { CourseService } from '../shared/services/course.service';

@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.page.html',
  styleUrls: ['./add-course.page.scss'],
})
export class AddCoursePage implements OnInit {
  addCourseForm: FormGroup;
  submitted: boolean = false;
  // PForms
  //private productService: ProductService

  static positiveNumber(fc: FormControl) {
    if (fc.value <= 0) {
      return ({positiveNumber: true});
    } else {
      return (null);
    }
  }


  // constructor(private route: ActivatedRoute, private router: Router) {
      constructor(
        private router: Router,
        private courseService: CourseService,
        private http: HttpClient
      )
      
      {

    // this.categories = ['Main', 'Beverage', 'Dessert'];
    this.addCourseForm = new FormGroup({
      courseTitle: new FormControl('', [Validators.required]),
      courseFee: new FormControl(0, [AddCoursePage.positiveNumber]),
      institution: new FormControl('', [Validators.required]),
      sector: new FormControl('', [Validators.required]),
      jobRole: new FormControl('', [Validators.required]),
      applicationStatus: new FormControl('', [Validators.required]),
      overview: new FormControl('', [Validators.required]),
      entryRequirement: new FormControl('', [Validators.required]),
      imgUrl: new FormControl('')
    });


   }

  ngOnInit() {
  }


  // P_PageNavigation
  // add() {
  //   this.router.navigate(['tabs/tab2']);
  // }

  addCourse() {
    this.submitted = true;

    if (this.addCourseForm.valid) {

    const cse = new Course(
    this.addCourseForm.value.courseTitle,
    this.addCourseForm.value.imgUrl,
    this.addCourseForm.value.institution,
    this.addCourseForm.value.sector,
    this.addCourseForm.value.jobRole,
    this.addCourseForm.value.applicationStatus,
    undefined,
    this.addCourseForm.value.overview,
    this.addCourseForm.value.entryRequirement,
    this.addCourseForm.value.courseFee,
    undefined,
    undefined,
    // undefined, // No image
    undefined,
    this.addCourseForm.value.courseTitle,); // Use name as id
    this.courseService.add(cse);
    
    var url = 'https://itj153-eximius.herokuapp.com/addCourse';

   
    var postData = JSON.stringify({
      CourseTitle: this.addCourseForm.value['courseTitle'],
      CourseImgUrl: this.addCourseForm.value['imgUrl'],
      Institution:this.addCourseForm.value['institution'],
      Sector:this.addCourseForm.value['sector'],
      JobRole:this.addCourseForm.value['jobRole'],
      ApplicationStatus:this.addCourseForm.value['applicationStatus'],
      LastModified:this.addCourseForm.value['lastModified'],
      Overview:this.addCourseForm.value['overview'],
      EntryRequirement:this.addCourseForm.value['entryRequirement'],
      CourseFee:this.addCourseForm.value['courseFee'],
      WspCompanyId:this.addCourseForm.value['wspCompanyId'],
      WspContactId:this.addCourseForm.value['wspContactId'],
      CourseId:this.addCourseForm.value['courseId'],
      icon: "",

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






    this.router.navigate(['tabs/tab2']);
    }
 
   }
 
}

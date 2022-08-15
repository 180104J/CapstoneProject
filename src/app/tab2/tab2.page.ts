/*import { Component } from '@angular/core';
import { Course } from '../shared/models/courses';
import { CourseService } from '../shared/services/course.service';
import { ToastController} from '@ionic/angular';
import { FavService } from '../shared/services/fav.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';


@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  courses: Course[] = [];
  //api
  course: any = []


  constructor(private courseService: CourseService, private toastController: ToastController,
    private favService: FavService, private http: HttpClient) {
    this.courses = this.courseService.getCourses();
  }


  async iconChange(item: Course){
    if (item.icon == 'bookmark-outline'){
      item.icon = 'bookmark';
      this.favService.add(item);
      const toast = await this.toastController.create({
        message: item.courseTitle + ' has been bookmarked',
        duration: 1000,
        position: 'top',
        color: 'success'
        });
        toast.present();
    } else {
      item.icon = 'bookmark-outline'; 
      this.favService.remove(item);
      const toast = await this.toastController.create({
        message: item.courseTitle + ' removed from bookmark',
        duration: 1000,
        position: 'top',
        color: 'danger'
        });
        toast.present();
      
    } 
  }

  ngOnInit() {
    this.getCourses()
  }

  async getCourses(){
    var url = 'https://eximiuscapstoneproject2022.herokuapp.com/getCourses';
    this.http.get(url).subscribe(data => {

    this.course=data
    })
  }


}*/
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';
//import { Product } from '../shared/models/product';
// P_Services
//import { ProductService } from '../shared/services/product.service';
//import { Course } from '../shared/models/course';
//import { CourseContact } from '../shared/models/courseContact';
//import { ParticipatingCompany } from '../shared/models/participatingCompany';
import { CourseService } from '../shared/services/course.service';
import { ToastController } from '@ionic/angular';
import { Course } from '../shared/models/courses';
import { FavService } from '../shared/services/fav.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  course2: any = [];
  course  : any = [];
  // private http: HttpClient

  constructor(private courseService: CourseService, private http: HttpClient,  private favService: FavService, private toastController: ToastController,) {
    //this.course2 = this.courseService.getCourse(); 
  }
  // http: any;


  // constructor() {
  //   this.course = [
  //   new Course('courseTitle1', 'https://programmes.myskillsfuture.gov.sg/WorkStudyIndividualProgrammes/_image.aspx/lUBLQSz3UwoD3LY5BkQdtkzVvMwKmNbYZcYEagvc-Vc=/ITE%20-%20WLTD%20in%20Airport%20Operations.png', 'NYP','IT','Business analyst', 'NIL', '16 Jun', 'overview lalala', 'req lalala', '$3000', 'id', '8123456', '123'),
  //   new Course('courseTitle1', '/233', 'NYP','IT','Business analyst', 'NIL', '16 Jun', 'overview lalala', 'req lalala', '$3000', 'id', '8123456', '456'),
  //   new Course('courseTitle1', '/233', 'NYP','IT','Business analyst', 'NIL', '16 Jun', 'overview lalala', 'req lalala', '$3000', 'id', '8123456', '789'),
  //   // this.productService.delete(item);
  // }
  delete (course){
    var url = 'https://itj153-eximius.herokuapp.com/deleteCourse';
    
          var postData = JSON.stringify({

            
            CourseId : course.courseId
            
          });
          console.log("CourseID = " + course.courseId )
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
    this.getListCourse()
  }
  
  async getListCourse(){

    var url = 'https://itj153-eximius.herokuapp.com/getListCourse';
    // var url = 'https://itj153-eximius.herokuapp.com/getUser';
    this.http.get(url).subscribe(data => {
  
      this.course=data
    })
  
  }
  async iconChange(item: Course){
    if (item.icon == 'bookmark-outline'){
      item.icon = 'bookmark';
      this.favService.add(item);
      const toast = await this.toastController.create({
        message: item.courseTitle + ' has been bookmarked',
        duration: 1000,
        position: 'top',
        color: 'success'
        });
        toast.present();
    } else {
      item.icon = 'bookmark-outline'; 
      this.favService.remove(item);
      const toast = await this.toastController.create({
        message: item.courseTitle + ' removed from bookmark',
        duration: 1000,
        position: 'top',
        color: 'danger'
        });
        toast.present();
      
    } 
  }
  
}

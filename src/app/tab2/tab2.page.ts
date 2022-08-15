import { Component } from '@angular/core';
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
        message: item.name + ' has been bookmarked',
        duration: 1000,
        position: 'top',
        color: 'success'
        });
        toast.present();
    } else {
      item.icon = 'bookmark-outline'; 
      this.favService.remove(item);
      const toast = await this.toastController.create({
        message: item.name + ' removed from bookmark',
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


}

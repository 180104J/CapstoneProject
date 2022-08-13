import { Component } from '@angular/core';
import { Course } from '../shared/models/courses';
import { CourseService } from '../shared/services/course.service';
import { ToastController} from '@ionic/angular';
import { FavService } from '../shared/services/fav.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  courses: Course[] = [];

  constructor(private courseService: CourseService, private toastController: ToastController,
    private favService: FavService) {
    this.courses = this.courseService.getCourses();
  }


  async iconChange(item: Course){
    if (item.icon == 'bookmark-outline'){
      item.icon = 'bookmark';
      this.favService.add(item);
      const toast = await this.toastController.create({
        message: item.name + ' bookmarked :)',
        duration: 2000,
        position: 'top',
        color: 'secondary'
        });
        toast.present();
    } else {
      item.icon = 'bookmark-outline'; 
      this.favService.remove(item);
      const toast = await this.toastController.create({
        message: item.name + ' removed from bookmark :)',
        duration: 2000,
        position: 'top',
        color: 'secondary'
        });
        toast.present();
      
    } 
  }

    /*ngOnInit() {
    this.getCourses()
  }

  async getCourses(){
    var url = 'https://eximiuscapstoneproject2022.herokuapp.com/getCourses';
    this.http.get(url).subscribe(data => {
    this.courses=data
    })
  }*/


}

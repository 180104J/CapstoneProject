import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { Course } from '../shared/models/courses';
import { CourseService } from '../shared/services/course.service';
import { FavService } from '../shared/services/fav.service';

@Component({
  selector: 'app-fav',
  templateUrl: './fav.page.html',
  styleUrls: ['./fav.page.scss'],
})
export class FavPage implements OnInit {
  courses: Course[] = [];
  favList: Course[];

  constructor(private courseService: CourseService, private toastController: ToastController,
    private favService: FavService) {

    this.favList = this.favService.getItems();
  }


  async delete(item) {
    const toast = await this.toastController.create({
      message: item.name + ' course deleted from bookmark list',
      duration: 2000,
      position: 'top',
      color: 'success'
      });
      toast.present();
      this.favService.delete(item);
      item.icon = 'bookmark-outline'; 
      this.favService.remove(item);
  }

  search(event) {
    const text = event.target.value;
    const allItems = this.favService.getItems();
    
    if (text && text.trim() !== '') {
    this.favList = allItems.filter(
      item => item.name.toLowerCase().includes(text.toLowerCase()));
    } 
    else {
    // Blank text, clear the search, show all products
    this.favList = allItems;
    }
    }
  ngOnInit() {
  }

  /*delete (item){
    var url = 'https://eximiuscapstoneproject2022.herokuapp.com/deleteItem';
    var postData = JSON.stringify({
    CourseID : item.prodId
    });
    console.log("test2")
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
  }*/
    

}

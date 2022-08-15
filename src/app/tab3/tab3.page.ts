import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { User } from '../shared/models/User';
import { UserService } from '../shared/services/user.service';


@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  users: User[] = [];
  user: any = []; 

  constructor(private userService: UserService, private http: HttpClient) {

    this.users = this.userService.getUser();
  }

  ngOnInit() {
    this.getUser()
  }

  async getUser(){
    var url = 'https://itj153-eximius.herokuapp.com/getUser';
    this.http.get(url).subscribe(data => {
      this.user=data
    })
  }

}

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
    /*this.users = [
      new User('Mary', 81234567, 'mary123@yahoo.com.sg','University Year 2','assets/profile1.png', 'mary'),
    ]; */

    this.users = this.userService.getUsers();
  }

  ngOnInit() {
    this.getUser()
  }

  async getUser(){
    var url = 'https://eximiuscapstoneproject2022.herokuapp.com/getUser';
    this.http.get(url).subscribe(data => {

    this.user=data
    })
  }

}

import { Injectable } from '@angular/core';
import { User } from '../models/User';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  users: User[] = [];
  
  constructor() {
    this.users = [
      new User('Mary', 81234567, 'mary123@yahoo.com.sg','University Year 2','assets/profile1.png', '1'),
      new User('John', 81234567, 'mary123@yahoo.com.sg','University Year 2','assets/profile2.png', '2'),
    ];
  }
  // retreive user
  getUser(): User[] {
    return this.users;
  }

  //Edit user
  getUserById(id: string): User {
    return this.users.find(item => item.id == id)
  }

  update(u: User) {
    const index = this.users.findIndex(item => item.id == u.id);
    if (index >= 0) {
      const user = this.users[index];
      // Update all the fields except for id and image
      user.name = u.name;
      user.mobile = u.mobile;
      user.email = u.email;
      user.education = u.education;
  }
}
}

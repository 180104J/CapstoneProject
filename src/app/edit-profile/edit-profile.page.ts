import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { User } from '../shared/models/User';
import { UserService } from '../shared/services/user.service';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.page.html',
  styleUrls: ['./edit-profile.page.scss'],
})
export class EditProfilePage implements OnInit {
  id: string;
  user: User;
  image: string;
  users: any = [];

  editUserForm: FormGroup;
  submitted: boolean = false;
  

  constructor(private route:ActivatedRoute, private router: Router, private userService: UserService,  private toastController: ToastController,  private http: HttpClient) {

    this.id = this.route.snapshot.params.id;
    //this.image = "assets/profile2.png";

    //Edit
    //this.user = this.userService.getUserById(this.id);
    //this.userImage = this.user.image; 

    //Edit
   //this.user = this.userService.getUserById(this.id);

    //this.image = this.users.image; 

    /*this.editUserForm = new FormGroup({
      name: new FormControl(this.users.name, [Validators.required]),
      mobile: new FormControl(this.users.mobile, [Validators.required, Validators.minLength(8), Validators.maxLength(8)]),
      email: new FormControl(this.users.email, [Validators.required]),   
      education: new FormControl(this.users.education, [Validators.required]),
    }); */
    this.editUserForm = new FormGroup({
      name: new FormControl(this.users.name, [Validators.required]),
      mobile: new FormControl(this.users.mobile, [Validators.required, Validators.minLength(8), Validators.maxLength(8)]),
      email: new FormControl(this.users.email, [Validators.required]),   
      education: new FormControl(this.users.education, [Validators.required]),
    });
   }

  //Add getData() method
  ngOnInit() {
    this.getUsersById()
  }
  getUsersById() {
    var url = 'https://itj153-eximius.herokuapp.com/getUsers';
    var postData = JSON.stringify({
      id: this.id
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
      if (data != null) {
        this.users = data;
        this.editUserForm.setValue({
          name:this.users[0].name,
          mobile:this.users[0].mobile,
          email:this.users[0].email,
          education:this.users[0].education
        });
        this.image = this.users[0].image;
      } else {
        // this.failed()
      }
    }, error => {
      console.log(error);
    });
  }

  async update() {
    this.submitted = true;
    if (this.editUserForm.valid) {
      var url = 'https://itj153-eximius.herokuapp.com/editUser';
      var postData = JSON.stringify({
        name: this.editUserForm.value['name'],
        mobile:this.editUserForm.value['mobile'],
        email:this.editUserForm.value['email'],
        education:this.editUserForm.value['education'],
        image: "",
        id: this.id,
      });
      const httpOptions = {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'GET,HEAD,PUT,PATCH,POST,DELETE'
        })
      };
      this.http.post(url, postData, httpOptions).subscribe(async (data) => {
        console.log(postData)
        console.log(data);
        if (data ==true) {
          this.users = data;
          window.location.reload();
        } 
        else {
          const toast = await this.toastController.create({
            message: 'Profile not updated',
            duration: 1000,
            position: 'top',
            color: 'danger'
            });
            toast.present();
          // this.failed()
          
        }
      }, error => {
        console.log(error);
      });
      const toast = await this.toastController.create({
        message: 'Profile Updated Successfully',
        duration: 1000,
        position: 'top',
        color: 'success'
        });
        toast.present();
      this.router.navigate(['tabs/tab3']);

    }//if valid
  }
}

   /*
  ngOnInit() {}

  async update() {
    
    if (this.editUserForm.valid) {
      
      const user = new User(
        this.editUserForm.value.name,
        this.editUserForm.value.mobile,
        this.editUserForm.value.email,
        this.editUserForm.value.education,
        undefined,
        this.userId);

    this.userService.update(user);
    const toast = await this.toastController.create({
      message: 'Profile Updated Successfully',
      duration: 1000,
      position: 'top',
      color: 'success'
      });
      toast.present();
      this.submitted = true;
      this.router.navigate(['tabs/tab3'])
      
    }
    else{
      const toast = await this.toastController.create({
        message: 'Please fill in all the fields correctly',
        duration: 1000,
        position: 'top',
        color: 'danger'
        });
        toast.present();
        this.submitted = false;
        
      }
    }
*/


/*import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { User } from '../shared/models/User';
import { UserService } from '../shared/services/user.service';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.page.html',
  styleUrls: ['./edit-profile.page.scss'],
})
export class EditProfilePage implements OnInit {
  id: string;
  user: User;
  userImage: string;
  

  editUserForm: FormGroup;
  submitted: boolean = false;
  

  constructor(private route:ActivatedRoute, private router: Router, private userService: UserService,  private toastController: ToastController,  private http: HttpClient) {
    this.id = this.route.snapshot.params.id;

    //Edit
    this.user = this.userService.getUserById(this.id);
    this.userImage = this.user.image; 

    // Forms

    this.editUserForm = new FormGroup({
      name: new FormControl(this.user.name, [Validators.required]),
      mobile: new FormControl(this.user.mobile, [Validators.required, Validators.minLength(8), Validators.maxLength(8)]),
      email: new FormControl(this.user.email, [Validators.required]),   
      education: new FormControl(this.user.education, [Validators.required]),
    }); 
   }
 */

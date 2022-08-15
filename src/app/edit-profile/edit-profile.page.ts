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
  userId: string;
  user: User;
  userImage: string;

  editUserForm: FormGroup;
  submitted: boolean = false;
  

  constructor(private route:ActivatedRoute, private router: Router, private userService: UserService,  private toastController: ToastController) {
    this.userId = this.route.snapshot.params.id;

    //Edit
    this.user = this.userService.getUserById(this.userId);
    this.userImage = this.user.image; 

    // Forms

    this.editUserForm = new FormGroup({
      name: new FormControl(this.user.name, [Validators.required]),
      mobile: new FormControl(this.user.mobile, [Validators.required, Validators.minLength(8), Validators.maxLength(8)]),
      email: new FormControl(this.user.email, [Validators.required]),   
      education: new FormControl(this.user.education, [Validators.required]),
    }); 
   }

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


    
  


  /* Add getData() method
  ngOnInit() {
    this.getData()
  }
  result: any = [];
  getData() {
    var url = 'https://eximiuscapstoneproject2022.herokuapp.com/getUser';
    var postData = JSON.stringify({
      UserID: this.userId
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
        this.result = data;
      } else {
        // this.failed()
      }
    }, error => {
      console.log(error);
    });
  }

  update() {
    this.submitted = true;
    if (this.editUserForm.valid) {
      //*var veg="false"
      //if(this.editUserForm.value['vegetarian']){
        //veg="true"
      //}
      var url = 'https://eximiuscapstoneproject2022.herokuapp.com/editItem';
      var postData = JSON.stringify({
        userId: this.userId,
        name: this.editUserForm.value['name'],
        mobile:this.editUserForm.value['mobile'],
        email:this.editUserForm.value['email'],
        education:this.editUserForm.value['education'],
        userImage:"",
      });
      const httpOptions = {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'GET,HEAD,PUT,PATCH,POST,DELETE'
        })
      };
      this.http.post(url, postData, httpOptions).subscribe((data) => {
        console.log(postData)
        console.log(data);
        if (data ==true) {
          this.result = data;
          window.location.reload();
        } else {
          // this.failed()
        }
      }, error => {
        console.log(error);
      });
      this.router.navigate(['tabs/tab3']);
    }//if valid
  }

  */

  

  
}

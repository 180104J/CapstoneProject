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
      mobile: new FormControl(this.user.mobile, [Validators.required]),
      email: new FormControl(this.user.email, [Validators.required]),   
      education: new FormControl(this.user.education, [Validators.required]),
    }); 
   }

  ngOnInit() {}

  async update() {
    this.submitted = true;
    if (this.editUserForm.valid) {
      const user = new User(
        this.editUserForm.value.name,
        this.editUserForm.value.mobile,
        this.editUserForm.value.email,
        this.editUserForm.value.education,
        undefined,
        this.userId);
    this.userService.update(user);
    }

    const toast = await this.toastController.create({
      message: 'Profile Updated Successfully',
      duration: 2000,
      position: 'top',
      color: 'success'
      });
      toast.present();


      this.router.navigate(['tabs/tab3'])
  }

  

  
}

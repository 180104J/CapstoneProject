import { Injectable } from '@angular/core';
import { Course } from '../models/courses';

@Injectable({
  providedIn: 'root'
})
export class CourseService {
  courses: Course[] = [];

  constructor() { 
    this.courses = [
      new Course('Biomedical', 'This is a course', 'assets/course1.jpg', '1', 'bookmark-outline'),
      new Course('Early Childhood', 'This is a course', 'assets/course1.jpg', '2', 'bookmark-outline'),
    ];
  }

  getCourses(): Course[]{
    return this.courses;
  }

  addToFav(c: Course){
    const index = this.courses.findIndex(item => item.id == c.id);
     if (index >= 0) {
     this.courses.splice(index, 1);
     }
  }

  
}

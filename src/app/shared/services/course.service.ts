import { Injectable } from '@angular/core';
import { Course } from '../models/courses';

@Injectable({
  providedIn: 'root'
})
export class CourseService {
  courses: Course[] = [];
  course: Course[] = []

  constructor() { 
    /*this.courses = [
      new Course('Biomedical', 'This is a Biomedical course', 'assets/course1.jpg', '1', 'bookmark-outline'),
      new Course('Early Childhood', 'This is a Early Childhood course', 'assets/course1.jpg', '2', 'bookmark-outline'),
      new Course('Nursing', 'This is a Nursing course', 'assets/course1.jpg', '3', 'bookmark-outline'),
      new Course('Food Science', 'This is a Food Science course', 'assets/course1.jpg', '4', 'bookmark-outline'),
      new Course('Computer Studies', 'This is a Computer Studies course', 'assets/course1.jpg', '5', 'bookmark-outline'),
      new Course('Accounting', 'This is a Accounting course', 'assets/course1.jpg', '6', 'bookmark-outline'),
    ];*/
  }

  getCourses(): Course[]{
    return this.courses;
  }

  addToFav(c: Course){
    const index = this.courses.findIndex(item => item.courseId == c.courseId);
     if (index >= 0) {
     this.courses.splice(index, 1);
     }
  }
  add(p: Course) {
    this.course.push(p);
  }

  
}

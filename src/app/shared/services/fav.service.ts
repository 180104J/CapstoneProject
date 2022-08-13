import { Injectable } from '@angular/core';
import { Course } from '../models/courses';

@Injectable({
  providedIn: 'root'
})
export class FavService {
  private items: Course[] = [];

  constructor() { }

  private isAdded(course: Course) {
    let found = undefined;
    for (let index in this.items) {
      if (this.items[index].name === course.name) {
        found = index;
        break;
      }
    }
    return found;
  }

  getItems(): Course[] {
    return this.items;
  }

  add(course: Course) {
    // If product already in items, do nothing
    const found = this.isAdded(course);

    // If product not in items, add
    if (!found) {
      this.items.push(course);
    }
  }

  remove(course: Course) {
    let found = this.isAdded(course);
    if (found !== undefined) {
      this.items.splice(found, 1);
    }
  }

  delete(item: Course){
    const index = this.items.findIndex(item => item.id == item.id);
     if (index >= 0) {
     this.items.splice(index, 1);
     }
  }
}

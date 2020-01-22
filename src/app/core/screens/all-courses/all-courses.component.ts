import { Component, OnInit } from '@angular/core';
import { Course } from '../../interfaces/course';
import { CourseService } from '../../service/course.service';
import { flatMap, catchError } from 'rxjs/operators';
@Component({
  selector: 'app-all-courses',
  templateUrl: './all-courses.component.html',
  styleUrls: ['./all-courses.component.css']
})
export class AllCoursesComponent implements OnInit {

  courses: Course[];

  toggle = false;

  constructor(private courseService: CourseService) {
  }

  createNewCourse() {
    this.toggle = true;
  }

  submitNewCourse(formData) {
    let course: Course = {
      courseName: formData.courseName,
      courseDescription: formData.courseDescription,
      date: formData.courseDate,
      attendees: []
    };

    this.courseService.addCourse(course).pipe(
      flatMap(() => {
        this.toggle = false
        return this.courseService.getCourse('')
      }),
      catchError(err => {
        console.error(err)
        throw err
      })
    ).subscribe((data) => {
      if (data) {
        this.courses = data;
      }
    });
  }

  ngOnInit() {
    this.courseService.getCourse('').subscribe(
      (data: Course[]) => {
        console.log('get course')
        if (data) {
          console.log('get course', data)
          this.courses = data;
        }
      });
  }
}
import { Component, OnInit } from '@angular/core';
import { CourseService } from '../../service/course.service';
import { Course } from '../../interfaces/course';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-view-course',
  templateUrl: './view-course.component.html',
  styleUrls: ['./view-course.component.css']
})
export class ViewCourseComponent implements OnInit {

  id: string;
  course: Course;
  toggle = false;

  constructor(private courseService: CourseService, private route:ActivatedRoute, private router: Router) {
  }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get("id");

    this.courseService.getCourseById(this.id).subscribe((data: Course) => {

      console.log('get course')
      if (data) {
        console.log('get course', data)
        this.course = data;
      }
    }, err => console.error(err));
  }

  createNewAttendee() {
    this.toggle = true;
  }

  submitNewAttendee(formData) {
    this.courseService.addPerson(formData.attendeeName, this.id).subscribe((res) => {
      alert('success');
      this.toggle = false;
      this.courseService.getCourseById(this.id).subscribe((data) => {
        if (data) {
          this.course = data;
        }
      }, err => console.error(err));
    }, err => console.error(err));
  }

  removeAttendee(attendeeName) {
    this.courseService.deletePersonFromCourseById(this.id, attendeeName).subscribe((res) => {
      alert('success');
      this.courseService.getCourseById(this.id).subscribe((data) => {
        if(data) {
          this.course = data;
        }
      });
    }, err => console.error(err));
  }

  deleteCourse() {
    this.courseService.deleteCourseById(this.id).subscribe((res) => {
      alert('success');
      this.router.navigateByUrl('');
    }, err => console.error(err));
  }
}

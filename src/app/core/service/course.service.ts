import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Course } from '../interfaces/course';

@Injectable({
  providedIn: 'root'
})

export class CourseService{
  url = 'http://localhost:3030/api';

  constructor(private http: HttpClient) { }

  getCourse(courseName: string): Observable<Course[]> {
      return this.http.get<Course[]>(`${this.url}/getCourse`, { params: { courseName } });
  }

  addCourse(course: Course) {
    return this.http.post(`${this.url}/addCourse`, course);
  }

  getCourseById(id: string): Observable<Course> {
    return this.http.get<Course>(`${this.url}/getCourseById`, { params: { id } });
  }

  deleteCourseById(id: string) {
    let postObj = {
      id: id
    }
    return this.http.post(`${this.url}/deleteCourse`, postObj);
  }

  addPerson(name: string, id: string) {
    let postObj = {
      person: name,
      id: id
    }
    console.log(name);
    return this.http.post(`${this.url}/addPerson`, postObj);
  }

  deletePersonFromCourseById(id: string, name: string) {
    let postObj = {
      id: id,
      person: name,
    }

    return this.http.post(`${this.url}/removePerson`, postObj);
  }

  findPersonByCourse(name: string): Observable<Course[]> {
    return this.http.get<Course[]>(`${this.url}/findPersonCourse`, { params: { person: name } });
  }
}
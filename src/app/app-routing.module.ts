import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AllCoursesComponent } from './core/screens/all-courses/all-courses.component';
import { ViewCourseComponent } from './core/screens/view-course/view-course.component';

const routes: Routes = [
  {path: '', component: AllCoursesComponent},
  {path: 'course/details/:id', component: ViewCourseComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

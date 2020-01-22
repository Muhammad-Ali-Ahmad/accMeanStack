import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { NavComponent } from './core/ui/nav/nav.component';
import { AllCoursesComponent } from './core/screens/all-courses/all-courses.component';
import { ViewCourseComponent } from './core/screens/view-course/view-course.component';

@NgModule({
  declarations: [
    AppComponent,
    ViewCourseComponent,
    AllCoursesComponent,
    NavComponent,
    ViewCourseComponent,
    AllCoursesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    HttpClientModule,
    FormsModule
  ],
  exports: [NavComponent, ViewCourseComponent, AllCoursesComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

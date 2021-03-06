import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { DetailsComponent } from './details/details.component';
import { HttpClientModule } from '@angular/common/http';
import { PostDetailComponent } from './post-detail/post-detail.component';
import { FormsModule } from '@angular/forms';
import { EditInterviewComponent } from './edit-interview/edit-interview.component';
import { InterFormComponent } from './inter-form/inter-form.component';

@NgModule({
  declarations: [AppComponent, WelcomeComponent, DetailsComponent, PostDetailComponent, EditInterviewComponent, InterFormComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

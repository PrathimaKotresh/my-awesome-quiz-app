import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { QuestionFormComponent } from './question-form/question-form.component';
import { ResultsComponent } from './results/results.component';
import { QuestionsComponent } from './questions/questions.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { WelcomeComponent } from './welcome/welcome.component';

const appRoutes: Routes = [
  { path: 'welcome', component: WelcomeComponent },
  { path: ':quizId', component: QuestionsComponent },
  { path: '', redirectTo: "welcome", pathMatch: "prefix" },
];

@NgModule({
  declarations: [
    AppComponent,
    QuestionFormComponent,
    ResultsComponent,
    QuestionsComponent,
    WelcomeComponent,
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatCardModule,
  ],
  providers: [],
  bootstrap: [AppComponent
  ],
})

export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { ApiClientService } from './api-client.service';
import { RepositoriesListComponent } from './repositories-list.component';
import { OptionsFormComponent } from './options-form.component';
import { ContributorsListComponent } from './contributors-list.component';

const ROUTES =[
  { path: '', component: RepositoriesListComponent },
  { path: 'contributors/:repository', component: ContributorsListComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    RepositoriesListComponent,
    ContributorsListComponent,
    OptionsFormComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    HttpModule,
    ReactiveFormsModule,
    RouterModule.forRoot(ROUTES, { useHash: true })
  ],
  providers: [
    ApiClientService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

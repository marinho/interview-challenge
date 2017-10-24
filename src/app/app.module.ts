import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { ApiClientService } from './repositories';
import { RepositoriesListComponent } from './repositories';
import { OptionsFormComponent } from './repositories';
import { ContributorsListComponent } from './repositories';

// TODO: move routes to a module inside "repositories"
const ROUTES = [
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

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Route } from '@angular/router';

import { AppComponent } from './app.component';
import { BearsComponent } from './components/bears/bears.component';
import { BearsListComponent } from './components/bears/bears-list/bears-list.component';
import { BearsDetailComponent } from './components/bears/bears-detail/bears-detail.component';
import { LandingComponent } from './components/landing/landing.component';
import { HeaderComponent } from './components/header/header.component';
import { BearItemComponent } from './components/bears/bears-list/bear-item/bear-item.component';
import { BearFormComponent } from './components/bears/bear-form/bear-form.component';

const appRoutes: Route[] = [
  { path: '', component: LandingComponent, pathMatch: 'full' },
  {
    path: 'bears',
    component: BearsComponent,
    children: [
      { path: ':id', component: BearsDetailComponent }
    ]
  }
];

@NgModule({
  declarations: [
    AppComponent,
    BearsComponent,
    BearsListComponent,
    BearsDetailComponent,
    LandingComponent,
    HeaderComponent,
    BearItemComponent,
    BearFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

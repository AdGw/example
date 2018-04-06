import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes} from '@angular/router';
import { AngularFireModule, AuthProviders, AuthMethods} from 'angularfire2';
import { FirebaseService} from './services/firebase.service';

import { AppComponent } from './app.component';
import { HomeComponent } from './Components/home/home.component';
import { ListingsComponent } from './Components/listings/listings.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { ListingComponent } from './Components/listing/listing.component';
import { AddListingComponent } from './Components/add-listing/add-listing.component';
import { EditListingComponent } from './Components/edit-listing/edit-listing.component';

export const environment = {
  production: false,
  firebase: {
    apiKey: 'AIzaSyBgZlKXfqbdrYzIrPjvJzrAUbcck7sKdOg',
    authDomain: 'project-48f87.firebaseapp.com',
    databaseURL: 'https://project-48f87.firebaseio.com',
    projectId: 'project-48f87',
    storageBucket: 'project-48f87.appspot.com',
    messagingSenderId: '1027696532376'
  }
};

const firebaseAuthConfig ={
	provider: AuthProviders.Google,
	method: AuthMethods.Popup
}

const appRoutes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'listings', component:  ListingsComponent},
  {path: 'listing/:id', component: ListingComponent},
  {path: 'add-listing', component: AddListingComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ListingsComponent,
    NavbarComponent,
    ListingComponent,
    AddListingComponent,
    EditListingComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(environment.firebase, firebaseAuthConfig),
    RouterModule.forRoot(appRoutes)
  ],
  providers: [FirebaseService],
  bootstrap: [AppComponent]
})
export class AppModule { }

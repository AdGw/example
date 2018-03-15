import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes} from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './Components/home/home.component';
import { ListingsComponent } from './Components/listings/listings.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { ListingComponent } from './Components/listing/listing.component';
import { AddListingComponent } from './Components/add-listing/add-listing.component';
import { EditListingComponent } from './Components/edit-listing/edit-listing.component';

const appRoutes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'listings', component: ListingsComponent},
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
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

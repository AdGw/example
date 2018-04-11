import { Injectable } from '@angular/core';
import { AngularFire, AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2';﻿
import * as firebase from 'firebase';

@Injectable()
export class FirebaseService {
  listing: FirebaseObjectObservable<Listing[]>;
  listings: FirebaseListObservable<any[]>;
  folder: any;
  constructor(private af: AngularFireDatabase) {
    this.folder = 'listingimages';
   }

  getListings(){
  	this.listings = this.af.list('/listings') as FirebaseListObservable<Listing[]>;﻿
  	return this.listings;
  }

  getListingDetails(id){
  	this.listing = this.af.object('/listings/'+id) as FirebaseObjectObservable<Listing[]>
  	return this.listing;
  }
    addListing(listing: Listing){
      console.log(listing);
    // let storageRef = firebase.storage().ref();
    // for(let selectedFile of [(<HTMLInputElement>document.getElementById('image')).files[0]]){
    //   let path = `/${this.folder}/${selectedFile.name}`;
    //   let iRef = storageRef.child(path);
    //   iRef.put(selectedFile).then((snapshot) => {
    //     listing.image = selectedFile.name;
    //     listing.path = path;
    //     return this.listings.push(listing);
    //   });
    // }
  }
}

interface Listing{
	$key?:string;
  path?: string;
	title?:string;
	type?:string;
	image?:string;
	city?:string;
	owner?:string;
	bedroms?:string;

}
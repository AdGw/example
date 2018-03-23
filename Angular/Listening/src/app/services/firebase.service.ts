import { Injectable } from '@angular/core';
import { AngularFire, AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2';﻿

@Injectable()
export class FirebaseService {
  listing: FirebaseObjectObservable<any[]>;
  listings: FirebaseListObservable<any[]>;
  constructor(private af: AngularFireDatabase) { }

  getListings(){
  	this.listings = this.af.list('/listings') as FirebaseListObservable<Listing>
  	return this.listings;
  }

  getListingDetails(id){
  	this.listing = this.af.object('/listings/'+id) as FirebaseObjectObservable<Listing>
  	return this.listing;
  }

}

interface Listing{
	$key?:string;
	$title?:string;
	$type?:string;
	$image?:string;
	$city?:string;
	$owner?:string;
	$bedroms?:string;

}
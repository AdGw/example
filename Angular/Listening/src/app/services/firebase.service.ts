import { Injectable } from '@angular/core';
import { AngularFire, AngularFireDatabase, FirebaseListObservable } from 'angularfire2';﻿

@Injectable()
export class FirebaseService {
  listings: FirebaseListObservable<any[]>;
  constructor(private af: AngularFireDatabase) { }
  getListings(){
  	this.listings = this.af.list('/listings') as FirebaseListObservable<Listing>
  	return this.listings;
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
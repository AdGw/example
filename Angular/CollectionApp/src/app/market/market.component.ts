import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-market',
  templateUrl: './market.component.html',
})
export class MarketComponent implements OnInit {
	collectables =[
		{description: 'Alchemist', type: 'Book'},
		{description: 'Hitch', type: 'Film'},
		{description: 'Golden Gate', type: 'Photo'},
		{description: 'Time', type: 'Album'},
	];

	addToCollection(){
		
	}
	constructor() { }

	ngOnInit() {
    }

}

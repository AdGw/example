import { Collectable } from "./collectable.model";
export class CollectableService{
	private collectables: Collectable[] = [
		{description: 'Alchemist', type: 'Book'},
		{description: 'Hitch', type: 'Film'},
		{description: 'Golden Gate', type: 'Photo'},
		{description: 'Time', type: 'Album'}
	];
	private collection: Collectable[] = [];

	getCollectables(){
		return this.collectables;
	}
	getCollection(){
		return this.collection;
	}
	addToCollection(item: Collectable){
		if(this.collection.indexOf(item) != -1){
			return;
		}else{
			this.collection.push(item);
		}
	}
	removeFromCollection(item:Collectable){
		this.collection.splice(this.collection.indexOf(item), 1);

	}
}
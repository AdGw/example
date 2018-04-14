Tasks = new Mongo.Collection('tasks');

if(Meteor.isClient){
	Meteor.subscribe('tasks');
	Template.tasks.helpers({
		tasks: function(){
			Tasks.find({},{sort: {createdAt: -1}})
		}
	});
	Template.tasks.events({
		"submit .add-task":function(ev){
			let name = ev.target.name.value;
			Meteor.call('addTask', name);
			ev.target.name.value = '';
			return false;
		},
		"click .delete-task":function(ev){
			if(confirm('Delete Task?')){
				Meteor.call('deleteTask', this._id);
			}
		}
	});
}

if(Meteor.isServer){
	Meteor.publish('tasks', function(){
		return Tasks.find({
			userId: this.userId
		});
	});
}

Meteor.methods({
	addTask: function(name){
		if(!Meteor.userId()){
			throw new Meteor.Error('No Access!')
		}
		Tasks.insert({
			name: name,
			createdAt: new Date(),
			userId: Meteor.userId() 
		});
	},
	deleteTask: function(taskId){
		Task.remove(taskId);
	}
});
utils.define('person_form').extend('utils.viewmodel').as(function(person_form,_instance_){
	
	var pipe = utils.module("tunnel.pipe");
	
	/*
	 * Init is first event which is called when module is intilaized ,
	 * defined by utils.viewmodel
	 */
	_instance_._init_ = function(){
		var self = this;
		//One time only, it will create template like Smarty or JSP templating, no binding at all
		this.view('person_form.html',{
			name_title : "Person Name",
			status_title : "My Status"
		});
		
		//Two-way binding beteen model and view rendered by viewfunction;
		this.model({
			name : "typ name", 
			status : " Sad :)"
		});
		
	};
	
	_instance_.name_changed = function(e,elem){
		//Publish event to global bus, that persion has changed name
		pipe.send("person_name_changed",elem.value)
	};
	
	_instance_.status_changed = function(e,elem){
		//Publish event to global bus that person has changed status
		pipe.send("person_status_changed",elem.value)
	};
	
});

utils.define('person').extend('utils.viewmodel').as(function(person,_instance_){
	
	var pipe = utils.module("tunnel.pipe");
	
	/*
	 * Init is first event which is called when module is intilaized ,
	 * defined by utils.viewmodel
	 */
	_instance_._init_ = function(){
		var self = this;
		//One time only, it will create template like Smarty or JSP templating, no binding at all
		this.view('person.html',{
			name_title : "Person Name",
			status_title : "My Status",
			logs_title : "Logs",
		});
		
		//Two-way binding beteen model and view rendered by viewfunction;
		this.model({
			name : "----", 
			status : " hmm :)",
			logs : []
		});
		
		//Listening to global events, no dependancy at all on other modules
		// we are assiging it to this.ev, reason for that is, if we ever want to 
		//inbind these event/listener for performance, we can call 'this.ev.off()'
		this.ev = pipe.on('person_name_changed',function(value,b,c,d){
			self.model().name = value;
			self.model().logs.push("I just changed my name");
		}).on('person_status_changed',function(value,b,c,d){
			self.model().status = value;
			self.model().logs.push("I just changed my status");
		});
		
	};
	
});

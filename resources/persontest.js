utils.define("persontest",function(persontest,_test_){
	
	var person = utils.module("person");
	var person_form = utils.module("person_form");
	
	persontest._ready_ = function(){
		
		this.person = person.instance().init($("#person_module"));
		
		this.person_from = person_form.instance().init($("#person_form_module"));
	};
	
});
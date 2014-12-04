utils.define("persontest",function(persontest,_test_){
	
	/*
	 * Import Dependencies
	 */
	utils.require("person","person_form");
	
	/*
	 * Get Local references to modules
	 */
	var person = utils.module("person");
	var person_form = utils.module("person_form");
	
	persontest._ready_ = function(){
		
		/* 
		 * create instance of each module
		 */
		this.personInstance = person.instance(); 
		this.personFormInstance = person_form.instance();
		
		/*
		 * Because these are instances of modules exteded from 'utils.viewmodel'
		 * each  has init function to initialize it in DOM;
		 */ 
		this.personInstance.init({
			id : "#person_module"
		});
		this.personFormInstance.init($("#person_form_module"));
	
	};
	
});
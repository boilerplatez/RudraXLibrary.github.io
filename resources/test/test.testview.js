utils.define('test.testview').extend('utils.viewmodel').as(function(testview,_instance_){
	
	_instance_._init_ = function(){
		this.model({mykey : "Hello"});
		this.view('tets.testview.html',{
			start : "he data"
		});
	};
	
	testview._ready_ = function(){
		console.log("testview._ready_ ..",this._dir_);
	};
	
});

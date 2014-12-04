utils.define("test",function(test,_test_){
	
	var ubus = utils.module("tunnel.pipe");

	var testview = utils.module("test.testview");
	
	test._execute_ = function(){
		//These are events are not related mvc, these are exampes of how different modules will commuicate
		ubus.on('test_event',function(a,b,c,d){
			console.log("test_even:__1",a,b,c,d);
		});
		this.ev = ubus.on('test_event1',function(a,b,c,d){
			console.log("test_even1",a,b,c,d);
		}).on('test_event2',function(a,b,c,d){
			console.log("test_even2",a,b,c,d);
		}).on('test_event',function(a,b,c,d){
			console.log("test_even:__2",a,b,c,d);
		});
		
		ubus.on('test_event',function(a,b,c,d){
			console.log("test_even:__3",a,b,c,d);
			this.stop();
		});
		ubus.on('test_event',function(a,b,c,d){
			console.log("test_even:__4",a,b,c,d);
		});
	};
	
	test._ready_ = function(){
		console.log("readyyyy");
		ubus.publish('test_event');
		testview.instance().init($("#mysmaplemodule"));
		
		
	};
	
});
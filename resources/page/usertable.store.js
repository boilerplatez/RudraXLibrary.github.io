/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
utils.define('usertable.store', function (store) {

	var cache = utils.require('utils.cache');
	var data = cache.get('userdata');
	if(!data || !$.isArray(data)){
		data = [];
	}
	var cols = cache.get('usercols');
	if(!cols || !$.isArray(cols)){
		cols =  [ { key : 'username', label : 'Username' } ,
    		     { key : 'name', label : 'Name' },
    		     { key : 'email', label : 'Email' },
    		     { key : 'gender', label : 'Gender' },
    		     { key : 'address', label : 'Address' },
    		     { key : 'country', label : 'Country' },
    		     { key : 'zipcode', label : 'Zipcode' }
    		    ];
	}
	store.add = function(userRow){
		if(data.find(function(r){
			if(userRow.email==r.email) return true;
		})) return false;
		data.push(userRow);
		cache.set('userdata',data);
		return true;
	};
	store.remove = function(i,size){
		data.splice(i,size || 1);
		cache.set('userdata',data);
	};
	store.pop = function(i){
		var ret = data.pop();
		cache.set('userdata',data);
		return ret;
	};
	store.get = function(){
		return data;
	};
	store.get_cols = function(){
		return cols;
	};
	store.shift_cols = function(from,to){
		cols.splice(to,0,cols.splice(from,1)[0]);
		return cache.set('usercols',cols);
	};
	store.shift_rows = function(from,to){
		data.splice(to,0,data.splice(from,1)[0]);
		cache.set('userdata',data);
	};
	store.sortDataBy = function(colType,sortUp){
		data.sort(function(bulkItem1,bulkItem2){
			var i1 = bulkItem1[colType] || '';
			var i2 = bulkItem2[colType] || '';
			return sortUp ?(i1 <i2) :(i1 > i2);
		});
		cache.set('userdata',data);
	};
	
});


if(!Array.prototype.find){
	Array.prototype.find = function(cb){
	   for(var i in this){
		if(cb(this[i])) return true;
		else false;
	   }
	}
}

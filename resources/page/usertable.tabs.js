/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
utils.define('usertable.tabs', function (tabs) {

	var tabCount = 9;
	var $tab_list,$extra_tabs,$extra_tabs_menu,$tabs_add,$down;
	tabs._ready_ = function(){
		tabs.on_hash_change();
		$tab_list = $('#tab_list');
		$extra_tabs = $('#extra_tabs');
		$extra_tabs_menu = $('.dropdown_menu',$extra_tabs);
		$tabs_add = $tab_list.find('#add')
		$down = $extra_tabs.find('.glyphicon');
		$tabs_add.click(function(){
			$extra_tabs_menu.append('<li class="tab_title"><a href="#tab'+
					(++tabCount) +'" data-toggle="tab">Tab '+
					tabCount+'</a></li>');
			$('.tab-content').append('<div class="tab-pane" id="tab'+
					tabCount+'">This is Tab '+
					tabCount+'</div>')
			tabs.arrange_tabs_execute();
		});
		tabs.arrange_tabs_execute();
		$tab_list.on('click','li.tab_title',function(){
			$("#tab_list li.tab_title").removeClass('active');
		})
    };
    
	if ("onhashchange" in window) {
	    //alert("The browser supports the hashchange event!");
	} else {
		console.log("The browser does not support the hashchange event!");
	}
	
	tabs.on_hash_change = function(){
		var hash = window.location.hash;
		hash && $('ul.nav a[href="' + hash + '"]').tab('show');
	};
	
	tabs.arrange_tabs_execute = function(){
		var tab_list = $("#tab_list li.tab_title");
		$tab_list.append(tab_list);
		$extra_tabs_menu.removeClass('hide');
		$down.removeClass('text-muted');
		for(var i=tab_list.length-1;i>=0;i--){
			if($tab_list[0].scrollHeight<60){
				if(i==(tab_list.length-1)){
					$extra_tabs_menu.addClass('hide');
					$down.addClass('text-muted');
				}
				break;
			}
			$extra_tabs_menu.prepend(tab_list[i]);
		}
		$tab_list.append($extra_tabs,$tabs_add);
	};
	
	tabs.arrange_tabs = utils.executable.instance(function(){
		tabs.arrange_tabs_execute();
    },this,10);
	
	window.onhashchange = function(){
		tabs.on_hash_change();
	};
	
    window.onresize = function(e) {
    	tabs.arrange_tabs.callOnce();
    };
});


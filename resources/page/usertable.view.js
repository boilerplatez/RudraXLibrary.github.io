utils.define('usertable.view', function (view) {

	var store = utils.require('usertable.store'),data, cols;
	var $form;
	var $tBody,$headerRow,$headerCells;
	var originalTable,copyYTable,container ;
	var isDuplicate = false;
	var startIndex, stopIndex;
	var rowCache = [];
	
	view._ready_ = function(){
		data = store.get();
		cols = store.get_cols();
		originalTable = $('#usertable');
		container = originalTable.parent();
		$tBody = $( "#usertable tbody" );
		$headerRow = $( "#usertable thead tr" );
		view.create_headers();
		$headerCells = $('th',$headerRow);
		view.topbar_function();
		view.attach_table_events();
		view.populate_table();
		$('.navbar-form.navbar-left').removeClass('hide');
	};
	
	view.topbar_function = function(){
		$('#search_button').click(function(){
			var search = $('#search_input').val();
			$('tr',$tBody).removeClass('warning');
			for(var i in  data){
				for(var key in data[i]){
					if(data[i][key] && data[i][key].indexOf && (data[i][key].indexOf(search)>-1)){
						rowCache[data[i]._row].addClass('warning');
						; break;
					}
				}
			}
		});
	};
	
	view.attach_table_events = function(){
		originalTable.on('mouseover','th span.glyphicon-move',function(e){
			view.duplicate();
			utils.custom.preventPropagation(e);
		})
		container.on('mouseenter','td.dataCell',function(e){
			view.clean();
			utils.custom.preventPropagation(e);
		})
		container.on('click','th span.title',function(e){
			view.clean();
			var $header = $(this).parent();
			var colType = $header.attr('colType');
			var $icon = $header.find('.order');
			var sortUp = $icon.hasClass('glyphicon-chevron-up') || !$icon.hasClass('glyphicon-chevron-down');
			store.sortDataBy(colType,sortUp);
			$('.order',$headerCells).removeClass('glyphicon-chevron-up glyphicon-chevron-down');
			$icon.addClass(sortUp ? 'glyphicon-chevron-down' : 'glyphicon-chevron-up');
			view.arrange_table.callOnce();
		});
		$tBody.sortable({
			items : 'tr',
			containment: "parent" ,
			cursor: "move",
			axis: "y",
			tolerance: "pointer",
		    helper: function(event, ui) {
		    	var rowHelper = ui.clone();
		    	/**
		    	 * http://stackoverflow.com/questions/11146000/jqueryui-sortable-on-table-rows-shrinks-them-while-being-dragged
		    	*/
		    	var $itemCells = $('td',ui);
		    	$('td',rowHelper).each(function(i){
		            $(this).css('width', $($itemCells[i]).width() +'px');
		        });
		    	return rowHelper;
		    },
		    start : function(e,ui){
		    	startIndex = ui.item.index();
		    },
		    stop : function(e,ui){
		    	stopIndex = ui.item.index();
		    	store.shift_rows(startIndex,stopIndex);
		    }
		});
	};
	
	view.create_headers = function(){
		var row = [];
		row.push('<th>#</td>');
		for(var j in cols){
			row.push('<th coltype="' + (cols[j].key || '') + '">' 
					+ '<span class="glyphicon glyphicon-move"></span>'
					+ '<span class="title">'+ (cols[j].label || '') +'</span>'
					+ '<span class="glyphicon order"></span>'
					+ '</th>');
		}
		$headerRow.append(row.join(''));
	};
	
	/**
	 *  popuplate data into html table
	 * 
	 */
	view.populate_table = function(){
		for(var i in data){
			var row = [];
			row.push('<tr>');
			row.push('<td class="dataCell">'+i+'</td>');
			for(var j in cols){
				row.push('<td class="dataCell">' + (data[i][cols[j].key] || '') + '</td>');
			}
			row.push('</tr>');
			data[i]._row = rowCache.push($(row.join('')))-1;
			$tBody.append(rowCache[data[i]._row]);
		}
	};
	
	/**
	 *  Re-arranges the table table according to data-order
	 */
    view.arrange_table = utils.executable.instance(function(){
    	for(var i in data){
    		$tBody.append(rowCache[data[i]._row]);
		}
    },this,10);
	
	/**
	 *  Creates duplicate cloned table, for column order changes
	 */
	view.duplicate = function(){
		if(isDuplicate) return;
		copyYTable = $('<ul class="table-cols" ></ul>');
		var widths =  $('th',$headerRow).map(function(i,elem){
			var $elem = $(elem);
			return {
				top : $elem.css('top'),
				left : $elem.css('left'),
				width : $elem.outerWidth()
			};
		})
		var $clone = $('.table tr').clone();
		$headerCells.each(function(i){
			var $newli = $('<li style="width:'+widths[i].width+'px"></li>');
			$newli.append($('<table class="table table-bordered" style="width:100%"></table>')
					.append($($clone.find(':eq(0)').map(function(i,elem){
				return $('<tr class="dataRow"></tr>').append(elem)[0];
			}))));
			copyYTable.append($newli);
		})
		copyYTable.sortable({
			items : 'li',
			containment: "parent" ,
			cursor: "move",
			axis: "x",
			tolerance: "pointer",
		    helper: 'clone',
		    start : function(e,ui){
		    	startIndex = ui.item.index();
		    },
		    stop : function(e,ui){
		    	stopIndex = ui.item.index();
		    	originalTable.find('tr').each(function(){
		    		var $cells = $(this).children();
		    		if(stopIndex>startIndex){
		    			$cells.filter(':eq('+(stopIndex)+')').after($cells.filter(':eq('+startIndex+')'));
		    		} else if(stopIndex<startIndex){
		    			$cells.filter(':eq('+(stopIndex-1)+')').after($cells.filter(':eq('+startIndex+')'));
		    		}
		    	});
		    	store.shift_cols(startIndex-1,stopIndex-1);
		    	view.clean();
		    }
		});
		originalTable.addClass('hide');
		container.append(copyYTable);
		isDuplicate = true;
	};
	
	/**
	 *  Removes duplicate cloned table 
	 */
	view.clean = function(){
		if(!isDuplicate) return
    	originalTable.removeClass('hide');
    	if(copyYTable) copyYTable.remove();
    	isDuplicate = false;
	};
    
});


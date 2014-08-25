/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
utils.define('usertable.init', function FormSubmit(formsubmit) {

	var store = utils.require('usertable.store');
	var $form;
	formsubmit._ready_ = function(){
		$('#save').click(function(e){
			var has_missing = false,has_error = false;
			var userRow = {};
			$form = $('#inputform');
			$('.input',$form).each(function(){
				var $this = $(this);
				if($this.hasClass('required') && ($this.val()==='' || $this.val()===undefined)){
					utils.custom.setWarning($this,true);
					has_missing = true;
				}
				if($this.parent().hasClass('has-error')){
					has_error  = true;
				}
				userRow[$this.attr('name')] = $this.val();
			});
			if(has_missing || has_error){
				$('.msg-all').addClass('hide');
				$('.msg-error').removeClass('hide');
			} else {
				formsubmit.reset_input();
				store.add(userRow);
				$('.msg-ok').removeClass('hide');
			}
			return utils.custom.preventPropagation(e);
		});
		$('#reset').click(function(e){
			formsubmit.reset_input();
		})
    };
    
    formsubmit.reset_input = function(){
    	$('.msg-all').addClass('hide');
    	$('.input',$form).val('');
    	$('.input',$form).parent().removeClass('has-error has-warning');
    };
    
});


<?php

/*
 * To change this license header, choose License Headers in Project Properties.
* To change this template file, choose Tools | Templates
* and open the template in the editor.
*/

class UserTable extends AbstractHandler {

	public function invokeHandler(Smarty $tpl,Header $header) {
		$header->import('usertable_view');
		return 'table';
	}

}

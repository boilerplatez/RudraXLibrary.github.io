<?php

/*
 * To change this license header, choose License Headers in Project Properties.
* To change this template file, choose Tools | Templates
* and open the template in the editor.
*/

class Tab extends AbstractHandler {

	public function invokeHandler(Smarty $tpl,Header $header) {
		$header->import('formtabs');
		return 'tabs';
	}

}

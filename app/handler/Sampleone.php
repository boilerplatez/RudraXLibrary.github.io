<?php

/*
 * To change this license header, choose License Headers in Project Properties.
* To change this template file, choose Tools | Templates
* and open the template in the editor.
*/

class Sampleone extends AbstractHandler {

	public function invokeHandler(Smarty $viewModel,Header $header, DataModel $dataModel,
			User $user) {

		$header->title("Utils Test");
		
		$header->import('test');
		
		return "sample";
	}

}

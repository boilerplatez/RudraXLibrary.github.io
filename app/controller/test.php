<?php
/*
 * To change this license header, choose License Headers in Project Properties. To change this template file, choose Tools | Templates and open the template in the editor.
*/

RudraX::mapRequest("template/{temp}",function($temp="profile"){
	global $controller;
	$controller = RudraX::getTemplateController();
	$controller->invokeHandler($temp);
});

RudraX::mapRequest('data/{eventName}',function($eventName="dataHandler"){
	global $controller;
	$controller = RudraX::getDataController();
	$controller->invokeHandler($eventName);
});

RudraX::mapRequest("",function($action){
	global $controller;
	$controller = RudraX::getPageController();
	$controller->invokeHandler("Sampleone");
});

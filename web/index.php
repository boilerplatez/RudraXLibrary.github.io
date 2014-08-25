<?php
/*
 * To change this license header, choose License Headers in Project Properties. To change this template file, choose Tools | Templates and open the template in the editor.
*/

require_once "project.php";

global $RDb;
//$RDb = RudraX::getDB('DB1');

// Default RudraX Plug
RudraX::mapRequest("template/{temp}",function($temp="nohandler"){
	$controller = RudraX::getTemplateController();
	$controller->invokeHandler($temp);
});

RudraX::mapRequest('data/{eventname}',function($eventName="dataHandler"){
	$controller = RudraX::getDataController();
	$controller->invokeHandler($eventName);
});
	
// Define Custom Request Plugs
RudraX::mapRequest("page/{page}",function($page="index"){
	$controller = RudraX::getPageController();
	$controller->invokeHandler($page);
});

// Default Plug for default page
RudraX::mapRequest("",function($q,$p,$f,$d,$t="AddUser"){
	$controller = RudraX::getPageController();
	$controller->invokeHandler($t);
});

//$RDb->close();

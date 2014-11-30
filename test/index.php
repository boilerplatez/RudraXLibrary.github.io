<?php
ini_set('display_errors', 'On');
ini_set ( 'error_reporting', E_ALL & ~E_NOTICE );
error_reporting(E_ALL & ~E_NOTICE);

require_once("../lib/rudrax/core/init.php");

RudraX::invoke(array(
	'controller' => 'test.php',
	'DEFAULT_DB' => 'DB1',
	'DEBUG_QUERY' 	=> TRUE
));
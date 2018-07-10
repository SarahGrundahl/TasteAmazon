<?php
error_reporting(E_ALL & ~E_NOTICE);
require_once($_SERVER['DOCUMENT_ROOT'].'/www/libs/Smarty.class.php');

$paths = [
  'here' => '.',
  'pear' => 'C:\php\pear',
  'root' => realpath(__DIR__.'/../')
];

set_include_path(join(';', $paths));

spl_autoload_register(function ($className) {
    error_log($className);
    require_once($className . '.class.php');
});

$connection = new \PDO('mysql:host=localhost', 'root', 'root');
\includes\mom\MOMBase::setConnection($connection, TRUE);

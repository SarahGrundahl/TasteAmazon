<?php
namespace www\api;

use includes\rpc\StaticDynamicRpcService as Service;

require_once('../init.php');

Service::publishClass('\\www\\api\\endpoint\\Menu', 'Menu.');
Service::publishClass('\\www\\api\\endpoint\\Login', 'Login.');
Service::publishClass('\\www\\api\\endpoint\\Product', 'Product.');
Service::publishClass('\\www\\api\\endpoint\\Gallery', 'Gallery.');

Service::setProperty(\includes\rpc\AbstractRpcService::PROPERTY_ALLOW_EXCEPTIONS, true);

Service::handleRequest();

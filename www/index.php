<?php
require_once('init.php');

use \includes\admin\internal\tasteamazon\TasteAmazon as aitt;
use \includes\admin\internal\tasteamazon\Product as aitp;
use \includes\admin\internal\tasteamazon\Gallery as aitg;

$products = aitp::getByDescId();
$gallery = aitg::getByDescId();

$page = \www\classes\Helper::getSmarty();

$page->assign('name', 'Tasteamazon');
$page->assign('products', $products);
$page->assign('gallery', $gallery);
$page->display('templates/pages/index.tpl');

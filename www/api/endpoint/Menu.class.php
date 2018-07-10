<?php
namespace www\api\endpoint;

use \includes\admin\internal\tasteamazon as ait;

class Menu
{
    /**
    * Get html page of the frontpage
    * @param string $target The css id target
    * @param string $page The template file to fetch
    * @return string[] html, target
    */
    public static function getFrontpageHtml($target, $page)
    {
      $smarty = \www\classes\Helper::getSmarty();
      $html = $smarty->fetch('pages/widgets/'.$page.'.tpl');
      return array('html' => $html, 'target' => $target);
    }

    /**
    * Get html page of the products
    * @param string $target The css id target
    * @param string $page The template file to fetch
    * @return string[] html, target
    */
    public static function getProductHtml($target, $page)
    {
      $smarty = \www\classes\Helper::getSmarty();
      $smarty->assign('products', ait\Product::getAll());
      $html = $smarty->fetch('pages/widgets/'.$page.'.tpl');
      return array('html' => $html, 'target' => $target);
    }

    /**
    * Get html page of the products
    * @param string $target The css id target
    * @param string $page The template file to fetch
    * @return string[] html, target
    */
    public static function getProductItemHtml($target, $page, $id)
    {
      error_log($target);
      $smarty = \www\classes\Helper::getSmarty();
      $smarty->assign('product', ait\Product::getById($id));

      $html = $smarty->fetch('pages/widgets/'.$page.'.tpl');

      return [
        'html' => $html,
        'target' => $target
      ];
    }

    /**
    * Get html page of the gallery
    * @param string $target The css id target
    * @param string $page The template file to fetch
    * @return string[] html, target
    */
    public static function getGalleryHtml($target, $page)
    {
      $smarty = \www\classes\Helper::getSmarty();
      $smarty->assign('gallery', ait\Gallery::getAll());
      $html = $smarty->fetch('pages/widgets/'.$page.'.tpl');
      return array('html' => $html, 'target' => $target);
    }

    /**
    * Get html page of the login page
    * @param string $target The css id target
    * @param string $page The template file to fetch
    * @return string[] html, target
    */
    public static function getLoginHtml($target, $page)
    {
      $smarty = \www\classes\Helper::getSmarty();
      $html = $smarty->fetch('pages/widgets/'.$page.'.tpl');
      return array('html' => $html, 'target' => $target);
    }

    /**
    * Get html page of the login page
    * @param string $target
    * @param string $page
    * @return string[]
    */
    public static function getAdminDashboardPage($target, $page)
    {
      $smarty = \www\classes\Helper::getSmarty();
      $smarty->assign('products', ait\Product::getCount());
      $smarty->assign('gallery', ait\Gallery::getCount());
      $html = $smarty->fetch('pages/widgets/'.$page.'.tpl');
      return array('html' => $html, 'target' => $target);
    }

    /**
    * Get html page of the login page
    * @param string $target
    * @param string $page
    * @return string[]
    */
    public static function getAddProductPage($target, $page)
    {
      $smarty = \www\classes\Helper::getSmarty();
      $smarty->assign('products', ait\Product::getAll());
      $html = $smarty->fetch('pages/widgets/'.$page.'.tpl');
      return array('html' => $html, 'target' => $target);
    }

    /**
    * Get html page of the login page
    * @param string $target
    * @param string $page
    * @return string[]
    */
    public static function getAddGalleryPage($target, $page)
    {
      $smarty = \www\classes\Helper::getSmarty();
      $smarty->assign('gallery', ait\Gallery::getAll());
      $html = $smarty->fetch('pages/widgets/'.$page.'.tpl');
      return array('html' => $html, 'target' => $target);
    }
}

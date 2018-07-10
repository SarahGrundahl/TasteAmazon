<?php
namespace www\api\endpoint;

use \includes\admin\internal\tasteamazon as ait;

class Login
{
    public static function login($data)
    {
      if ($data['username'] == "" || $data['password'] == "") {
        throw new ait\Exception(ait\Exception::EMPTY_LOGIN);
      } else {
        if ($data['username'] != "admin" || $data['password'] != "admin") {
          throw new ait\Exception(ait\Exception::WRONG_LOGIN);
        } else {
          $smarty = \www\classes\Helper::getSmarty();

          $html = $smarty->fetch('pages/admin.tpl');

          return [
            'html' => $html,
            'target' => '.page-container'
          ];
        }
      }
    }
}

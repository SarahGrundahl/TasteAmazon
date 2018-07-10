<?php
namespace www\api\endpoint;

use \includes\admin\internal\tasteamazon as ait;

class Gallery
{
    public static function add($data)
    {
      if ($data['title'] == "" || $data['image'] == "") {
        throw new ait\Exception(ait\Exception::EMPTY_PRODUCT_FORM);
      } else {
        $image = explode('\\', $data['image']);
        $data['image'] = $image[2];

        $picture = new ait\Gallery();
        $picture->map($data);
        $picture->save();

        return [
          'target' => '#products-table',
          'message' => 'Et nyt billede er blevet uploadet.'
        ];
      }
    }
}

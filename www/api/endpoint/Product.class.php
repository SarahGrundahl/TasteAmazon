<?php
namespace www\api\endpoint;

use \includes\admin\internal\tasteamazon as ait;

class Product
{
    public static function add($data)
    {
      if ($data['title'] == "" || $data['text'] == "" || $data['description'] == "" || $data['image'] == "") {
        throw new ait\Exception(ait\Exception::EMPTY_PRODUCT_FORM);
      } else {
        $image = explode('\\', $data['image']);
        $data['image'] = $image[2];

        $product = new ait\Product();
        $product->map($data);
        $product->save();
        return [
          'target' => '#products-table',
          'message' => 'Et nyt produkt er blevet oprettet.'
        ];
      }
    }
}

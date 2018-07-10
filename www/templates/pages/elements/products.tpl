<div style="background-color: #F6F6F4; padding: 30px 0;">
  <div class="container">
    <h2 class="text-uppercase">Acai Produkter</h2>
    <div class="row">
      {foreach $products as $product}
      <div id="product-{$product->id}" class="col-md">
        <img class="rounded-circle border border-dark" src="img/products/product_1.jpg" width="290px" height="290px" alt="Produkt 1">
        <h3>{$product->title}</h3>
      </div>
      {/foreach}
    </div>
  </div>
</div>

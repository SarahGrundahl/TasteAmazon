<div id="product-list" style="margin-top: 100px;">
  <div class="container">
    <h1 class="text-uppercase text-center" style="margin-bottom:50px;">Acai produkter</h1>
    <div class="row">
      {foreach $products as $product}
      <div id="product-{$product->id}" onclick="Menu.getProductItemHtml({$product->id})" class="col-md-3">
        <img class="border border-dark rounded-circle" src="img/products/product_1.jpg" width="100%" alt="{$product->title}">
        <h3 class="text-center" style="margin:15px 0;">{$product->title}</h3>
      </div>
      {/foreach}
    </div>
  </div>
</div>

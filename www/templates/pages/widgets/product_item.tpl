<div id="product-item" class="container" style="margin-top: 100px;">
  <a href="#frontpage" onclick="Menu.getFrontpageHtml()"><img src="img/icons/home.png" width="20px" alt="Forside"></a> <span>/</span>
  <a href="#products" onclick="Menu.getProductHtml(true)">Produkter</a> <span>/</span>
  <a href="#product-{$product->id}">{$product->title}</a>
  <div class="row">
    <div class="col-md-7 m-auto">
      <div id="product" class="text-center m-auto">
        <img class="rounded-circle border border-dark" src="img/products/product_1.jpg" width="290px" height="290px" alt="Produkt 1">
      </div>
    </div>
    <div class="col-md-5">
      <h1>{$product->title}</h1>
      <ul id="myTabs" class="nav nav-pills col-md-12">
        <li class="border rounded-top border-bottom-0 active col-md-5"><a data-toogle="pill" onclick="Menu.getTabDescription()">Beskrivelse</a></li>
        <li class="border rounded-top border-bottom-0 col-md-5"><a data-toogle="pill" onclick="Menu.getTabFoodContent()">Indholdsfortegnelse</a></li>
      </ul>
      <div class="col-md-12 border" style="min-height:200px;">
        {$product->text}
      </div>
    </div>
  </div>
</div>

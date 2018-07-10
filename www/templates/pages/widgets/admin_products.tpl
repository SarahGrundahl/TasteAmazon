<h2 class="col-md-12 page-header bg-white shadow-sm border border-top-0 rounded-bottom" style="padding-bottom:5px;margin-bottom:15px">
  <img class="text-center" src="img/admin/computer-black.png" width="35" height="35">
  Produkter
</h2>
<div class="row">
  <div class="col-md-4">
    <div class="col-md-12 bg-white shadow-sm border rounded padding-10">
      {include file="pages/elements/add_product.tpl"}
    </div>
  </div>

  <div id="products-table" class="col-md-8">
    <div class="col-md-12 bg-white shadow-sm border rounded padding-10">
      <table class="table table-striped">
        <thead>
          <tr>
            <th scope="col">Billede</th>
            <th scope="col">Titel</th>
            <th scope="col">Tekst</th>
            <th scope="col">Beskrivelse</th>
          </tr>
        </thead>
        <tbody>
          {foreach $products as $product}
          <tr>
            <td><img src="img/products/{$product->image}" alt="{$product->title}"></td>
            <td>{$product->title}</td>
            <td>{$product->text}</td>
            <td>{$product->description}</td>
          </tr>
          {/foreach}
        </tbody>
      </table>
    </div>
  </div>
</div>

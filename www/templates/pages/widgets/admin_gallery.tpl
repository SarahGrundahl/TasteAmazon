<h2 class="col-md-12 page-header bg-white shadow-sm border border-top-0 rounded-bottom" style="padding-bottom:5px;margin-bottom:15px">
  <img class="text-center" src="img/admin/camera-black.png" width="35" height="35">
  Galleri
</h2>
<div class="row">
  <div class="col-md-4">
    <div class="col-md-12 bg-white shadow-sm border rounded padding-10">
      {include file="pages/elements/add_gallery.tpl"}
    </div>
  </div>

  <div class="col-md-8">
    <div class="col-md-12 bg-white shadow-sm border rounded padding-10">
      <table class="table table-striped">
        <thead>
          <tr>
            <th scope="col">Billede</th>
            <th scope="col">Titel</th>
          </tr>
        </thead>
        <tbody>
          {foreach $gallery as $picture}
          <tr>
            <td><img src="img/products/{$pricture->image}" alt="{$picture->title}"></td>
            <td>{$picture->title}</td>
          </tr>
          {/foreach}
        </tbody>
      </table>
    </div>
  </div>
</div>

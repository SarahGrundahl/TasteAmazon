<div style="margin-top: 100px;">
  <div class="container">
    <div class="row">
      {foreach $gallery as $picture}
      <div id="gallery-{$picture->id}" class="col-md-3">
        <img class="border border-dark" src="img/gallery/1.jpg" width="100%" height="auto" alt="Produkt 1">
        <h3 class="text-center" style="margin:15px 0;">{$picture->title}</h3>
      </div>
      {/foreach}
    </div>
  </div>
</div>

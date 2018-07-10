<div style="background-color: #9778D3; padding: 30px 0;">
  <div class="container">
    <h2 class="text-uppercase" style="color:white;">Galleri</h2>
    <div class="row">
      {foreach $gallery as $picture}
      <div id="gallery-{$picture->id}" class="col-md">
        <img class="border border-dark" src="img/gallery/1.jpg" width="315px" height="auto" alt="Produkt 1">
        <h3 class="text-center text-white" style="margin:15px 0;">{$picture->title}</h3>
      </div>
      {/foreach}
    </div>
  </div>
</div>

<div id="add_product">
  <h4>Opret produkt</h4>
  <div class="form-group">
    <small for="title" class="form-text text-muted">Titel</small>
    <input type="text" name="title" class="form-control">
  </div>
  <div class="form-group">
    <small for="text" class="form-text text-muted">Tekst</small>
    <input type="text" name="text" class="form-control">
  </div>
  <div class="form-group">
    <small for="description" class="form-text text-muted">Beskrivelse</small>
    <input type="text" name="description" class="form-control">
  </div>
  <div class="form-group">
    <small for="image" class="form-text text-muted">Billede</small>
    <input type="file" name="image" class="form-control">
  </div>
</div>
<button class="btn" type="button" style="border-radius: 200px;" onclick="Product.add()">Tilføj produkt</button>

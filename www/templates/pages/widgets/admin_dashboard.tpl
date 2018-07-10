<h2 class="col-md-12 page-header bg-white shadow-sm border border-top-0 rounded-bottom" style="padding-bottom:5px;margin-bottom:15px">
  <img class="text-center" src="img/admin/dashboard-sort.png" width="35" height="35">
  Kontrolpanel
</h2>
<div class="row">
  <div class="col-md-4">
    <div class="col-md-12 shadow-sm border rounded" style="margin-bottom:15px">
      <div class="row">
        <div class="col-md-3 bg-warning rounded-left" style="padding-top:10px; padding-bottom:10px">
          <img class="text-center" src="img/admin/users.png" width="50" height="50" alt="Generic placeholder thumbnail">
        </div>
        <div class="col-md-9 bg-white" style="padding:10px">
          <h5>Medlemmer</h5>
          <span>5</span>
        </div>
      </div>
    </div>
    <div class="col-md-12 shadow-sm border rounded" style="margin-bottom:15px">
      <div class="row">
        <div class="col-md-3 bg-info rounded-left" style="padding-top:10px; padding-bottom:10px">
          <img src="img/admin/computer.png" width="50" height="50" alt="Generic placeholder thumbnail">
        </div>
        <div class="col-md-9 bg-white" style="padding:10px">
          <h5>Produkter</h5>
          <span>{count($products)}</span>
        </div>
      </div>
    </div>
    <div class="col-md-12 shadow-sm border rounded" style="margin-bottom:15px">
      <div class="row">
        <div class="col-md-3 bg-danger rounded-left" style="padding-top:10px; padding-bottom:10px">
          <img class="text-center" src="img/admin/camera.png" width="50" height="50" alt="Generic placeholder thumbnail">
        </div>
        <div class="col-md-9 bg-white" style="padding:10px">
          <h5>Billeder</h5>
          <span>{count($gallery)}</span>
        </div>
      </div>
    </div>
    <div class="col-md-12 shadow-sm border rounded" style="margin-bottom:15px">
      <div class="row">
        <div class="col-md-3 bg-primary rounded-left" style="padding-top:10px; padding-bottom:10px">
          <img class="text-center" src="img/admin/cookbook.png" width="50" height="50" alt="Generic placeholder thumbnail">
        </div>
        <div class="col-md-9 bg-white" style="padding:10px">
          <h5>Opskrifter</h5>
          <span>1</span>
        </div>
      </div>
    </div>
  </div>

  <div class="col-md-8">
    <div class="col-md-12 bg-white shadow-sm border rounded" style="padding:10px;">
      <h4>Hej Martin og Dennis</h4>
      <img class="rounded" src="img/admin/team.jpg" width="80%" alt="">
    </div>
  </div>
</div>

<nav class="navbar navbar-expand-lg navbar-light fixed-top" style="background:#512E90">
  <a class="navbar-brand" href="#dashboard" onclick="Menu.getAdminDashboardPage()"><img src="img/logo-mobile.png" width:"50" height="40" alt="TasteAmazon Logo"></a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#adminNav" aria-controls="adminNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="text-uppercase collapse navbar-collapse" id="adminNav">
    <ul class="navbar-nav ml-auto">
      <li id="menu-frontpage" class="nav-item">
        <a href="#settings" class="nav-link text-light">Indstillinger</a>
      </li>
      <li id="menu-products" class="nav-item">
        <a href="#profile" class="nav-link text-light">Profil</a>
      </li>
      <li id="menu-gallery" class="nav-item">
        <a href="#logout" class="nav-link text-light" onclick="Menu.getFrontpageHtml()">Log ud</a>
      </li>
    </ul>
  </div>
</nav>
<div class="container-fluid bg-light">
  <div class="row">
    <div class="col-md-2 bg-dark text-white" style="padding:0; height:100vh; padding-top:65px;">
      <div class="row" style="padding:10px 15px">
        <div class="col-md-3">
          <img class="bg-white rounded-circle" src="img/logo.png" width="40px" height="40px" alt="">
        </div>
        <div class="col-md-9">
          <h5>TasteAmazon</h5>
          <span>Administrator</span>
        </div>
      </div>
      <ul class="nav nav-pills col-md-12 container-fluid" style="padding:0">
        <a class="admin-nav text-white" href="#dashboard" onclick="Menu.getAdminDashboardPage()" style="width:100%">
          <li role="presentation" id="tabMenu-dashboard" class="tabMenu active padding-10 background-black">
            <div class="row">
              <div class="col-md-2">
                <img src="img/admin/dashboard.png" width="25px" height="25px" alt="">
              </div>
              <div class="col-md-10">
                <span>Kontrolpanel</span>
              </div>
            </div>
          </li>
        </a>
        <a class="admin-nav text-white" href="#products" onclick="Menu.getAddProductsPage()" style="width:100%">
          <li role="presentation" id="tabMenu-products" class="tabMenu padding-10">
            <div class="row">
              <div class="col-md-2">
                <img src="img/admin/computer.png" width="25px" height="25px" alt="">
              </div>
              <div class="col-md-10">
                <span>Produkter</span>
              </div>
            </div>
          </li>
        </a>
        <a class="admin-nav text-white" href="#gallery" onclick="Menu.getAddGalleryPage()" style="width:100%">
          <li role="presentation" id="tabMenu-gallery" class="tabMenu padding-10">
            <div class="row">
              <div class="col-md-2">
                <img src="img/admin/camera.png" width="25px" height="25px" alt="">
              </div>
              <div class="col-md-10">
                <span>Galleri</span>
              </div>
            </div>
          </li>
        </a>
        <a class="admin-nav text-white" href="#recipes" style="width:100%">
          <li role="presentation" id="admin-recipes" class="padding-10">
            <div class="row">
              <div class="col-md-2">
                <img src="img/admin/cookbook.png" width="25px" height="25px" alt="">
              </div>
              <div class="col-md-10">
                <span>Opskrifter</span>
              </div>
            </div>
          </li>
        </a>
      </ul>
    </div>
    <div class="tab-content col-md-10" style="margin-top:65px;">
      <div id="admin-content">
        <div id="admin_dashboard" class="admin-menu tab-pane">
            {include file="pages/widgets/admin_dashboard.tpl"}
        </div>
        <div id="admin_products" class="admin-menu tab-pane">
        </div>
        <div id="admin_gallery" class="admin-menu tab-pane">
        </div>
      </div>
    </div>
  </div>
</div>

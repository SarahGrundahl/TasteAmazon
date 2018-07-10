<nav class="navbar navbar-expand-lg navbar-light bg-light border-bottom fixed-top">
<div class="container">
  <a class="navbar-brand" href="#"><img src="img/logo.png" width:"50" height="50" alt="TasteAmazon Logo"></a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="text-uppercase collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav ml-auto">
      <li id="menu-frontpage" class="nav-item active border-bottom border-dark">
        <a class="nav-link" onclick="Menu.getFrontpageHtml()">Forside</a>
      </li>
      <li id="menu-products" class="nav-item">
        <a class="nav-link" onclick="Menu.getProductHtml()">Produkter</a>
      </li>
      <li id="menu-gallery" class="nav-item">
        <a class="nav-link" onclick="Menu.getGalleryHtml()">Galleri</a>
      </li>
      <li class="nav-item">
        <a class="nav-link">Opskrifter</a>
      </li>
      <li class="nav-item">
        <a class="nav-link">Medarbejdere</a>
      </li>
      <li class="nav-item">
        <a class="nav-link">Om os</a>
      </li>
      <li id="menu-login" class="nav-item">
        <a class="nav-link" onclick="Menu.getLoginHtml()">Login</a>
      </li>
    </ul>
  </div>
</div>
</nav>

Menu = {
  getFrontpageHtml: function(force)
  {
    Menu.getHtml('Menu.getFrontpageHtml', '#frontpage', 'frontpage', 'frontpage', force);
  },

  getProductHtml: function(force)
  {
    Menu.getHtml('Menu.getProductHtml', '#products', 'products', 'products', force);
  },

  getProductItemHtml: function(id)
  {
    Menu.getItemHtml('Menu.getProductItemHtml', '#products', 'product_item', 'products', id);
  },

  getGalleryHtml: function(force)
  {
    Menu.getHtml('Menu.getGalleryHtml', '#gallery', 'gallery', 'gallery', force);
  },

  getLoginHtml: function(force)
  {
    Menu.getHtml('Menu.getLoginHtml', '#login', 'login', 'login', force);
  },

  getAdminDashboardPage: function(force)
  {
    Menu.getHtml('Menu.getAdminDashboardPage', '#admin_dashboard', 'admin_dashboard', 'dashboard', force);
  },

  getAddProductsPage: function(force)
  {
    Menu.getHtml('Menu.getAddProductPage', '#admin_products', 'admin_products', 'products', force);
  },

  getAddGalleryPage: function(force)
  {
    Menu.getHtml('Menu.getAddGalleryPage', '#admin_gallery', 'admin_gallery', 'gallery', force);
  },

  getItemHtml: function(method, target, page, menu, id)
  {
    Admin.rpc.invoke(method, target, page, id, Menu.showProductItemSuccess, Menu.failure);
  },

  getHtml: function(method, target, page, menu, force)
  {
    $('.tab-pane').each(function(index){
      var id = '#' + $(this).attr('id');
      $(id).hide().removeClass('active');
    });

    $('.nav-item').each(function(index){
      var id = '#' + $(this).attr('id');
      $(id).removeClass('active');
      $(id).removeClass('border-bottom');
      $(id).removeClass('border-dark');
    });

    $('.admin-menu').each(function(index){
      var id = '#' + $(this).attr('id');
      $(id).removeClass('active');
      $(id).removeClass('background-black');
    });

    $('.tabMenu').each(function(index){
      var id = '#' + $(this).attr('id');
      $(id).removeClass('active');
      $(id).removeClass('background-black');
    });

    if ($(target).html().trim() == '' || force == true) {
      //|| $('#product-item').html().trim() != ''
      Admin.rpc.invoke(method, target, page, Menu.appendTo, Menu.failure);
    }

    $(target).show().addClass('active');
    $('#tabMenu-' + menu).addClass('background-black');
    $('#menu-' + menu).show().addClass('active');
    $('#menu-' + menu).show().addClass('border-bottom');
    $('#menu-' + menu).show().addClass('border-dark');
  },

  showProductItemSuccess: function(res)
  {
    $('#product-list').remove();
    $(res.target).append(res.html);
  },

  appendTo: function(res)
  {
    // $('#product-item').remove();
    $(res.target).append(res.html);
  },

  failure: function(res)
  {
    $.notify(res.message, 'error');
  }
}

Product = {
    add: function(){
        var data = FormUtil.packForm('#add_product');
        Admin.rpc.invoke('Product.add', data, Product.success, Product.failure);
    },

    success: function(res){
        $.notify(res.message, 'success');
    },

    failure: function(res){
        $.notify(res.message, 'error');
    }
}

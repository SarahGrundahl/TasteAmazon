Gallery = {
    add: function(){
        var data = FormUtil.packForm('#add_picture');
        console.log(data);
        Admin.rpc.invoke('Gallery.add', data, Gallery.success, Gallery.failure);
    },

    success: function(res){
        $.notify(res.message, 'success');
    },

    failure: function(res){
        $.notify(res.message, 'error');
    }
}

Login = {
    login: function(){
        var data = FormUtil.packForm('#login_form');
        Admin.rpc.invoke('Login.login', data, Login.appendTo, Login.failure);
    },

    appendTo: function(res)
    {
      $(res.target).replaceWith(res.html);
    },

    success: function(res){
        $.notify(res, 'success');
    },

    failure: function(res){
        $.notify(res.message, 'error');
    }
}

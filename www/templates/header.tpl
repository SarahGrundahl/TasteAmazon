<!DOCTYPE html>
<html>
  <head>
      <title>{$name}</title>
      {* Favicon *}
      <link rel="icon" type="image/png" href="img/favicon/favicon-16.png" sizes="16x16">
      <link rel="icon" type="image/png" href="img/favicon/favicon-32.png" sizes="32x32">

      {* Stylesheets *}
      {block name='css'}
      <link rel="stylesheet" href="../www/css/admin.css">
      <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css" integrity="sha384-WskhaSGFgHYWDcbwN70/dfYBj47jz9qbsMId/iRN3ewGhXQFZCSftd1LZCfmhktB" crossorigin="anonymous">
      {/block}

      {* JavaScripts *}
      {block name='javascript'}
      <script type="text/javascript" src="/www/javascripts/jsonrpc2.js"></script>
      <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.1/js/bootstrap.min.js" integrity="sha384-smHYKdLADwkXOn1EmN1qk/HfnUcbVRZyYmZ4qpPea6sjB/pTJ0euyQp0Mk8ck+5T" crossorigin="anonymous"></script>
      <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
      <script type="text/javascript" src="/www/javascripts/components/notify.min.js"></script>
      <script type="text/javascript" src="/www/javascripts/Admin.class.js"></script>
      <script type="text/javascript" src="/www/javascripts/FormUtil.class.js"></script>
      {/block}
  </head>
<body>

<?php
/* Smarty version 3.1.32, created on 2018-06-20 07:03:33
  from 'C:\Users\Sarah\Desktop\Ordbogen - TasteAmazon Projekt\www\templates\pages\index.tpl' */

/* @var Smarty_Internal_Template $_smarty_tpl */
if ($_smarty_tpl->_decodeProperties($_smarty_tpl, array (
  'version' => '3.1.32',
  'unifunc' => 'content_5b29fc4555db96_91277662',
  'has_nocache_code' => false,
  'file_dependency' => 
  array (
    '61a6c9e4d05e1a6f306d968f3960af5f46641375' => 
    array (
      0 => 'C:\\Users\\Sarah\\Desktop\\Ordbogen - TasteAmazon Projekt\\www\\templates\\pages\\index.tpl',
      1 => 1529477981,
      2 => 'file',
    ),
    'f176128d921d9480f677b14706b6b6d4515d6423' => 
    array (
      0 => 'C:\\Users\\Sarah\\Desktop\\Ordbogen - TasteAmazon Projekt\\www\\templates\\master.tpl',
      1 => 1529477446,
      2 => 'file',
    ),
    '572385400cafe9313adf4416e43f3b324c38cdb4' => 
    array (
      0 => 'C:\\Users\\Sarah\\Desktop\\Ordbogen - TasteAmazon Projekt\\www\\templates\\header.tpl',
      1 => 1529478210,
      2 => 'file',
    ),
    'e9d42ef60c21b24fd7797210cb0d373f00809ba9' => 
    array (
      0 => 'C:\\Users\\Sarah\\Desktop\\Ordbogen - TasteAmazon Projekt\\www\\templates\\pages\\widgets\\nav_bar.tpl',
      1 => 1529477850,
      2 => 'file',
    ),
    '4a0db1b841e076d90c8baed8f0d2834e415f38b2' => 
    array (
      0 => 'C:\\Users\\Sarah\\Desktop\\Ordbogen - TasteAmazon Projekt\\www\\templates\\footer.tpl',
      1 => 1529477914,
      2 => 'file',
    ),
  ),
  'cache_lifetime' => 120,
),true)) {
function content_5b29fc4555db96_91277662 (Smarty_Internal_Template $_smarty_tpl) {
?><!DOCTYPE html>
<html>
  <head>
      <title>Dette er min test side til tasteamazon.com</title>

            
      <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css" integrity="sha384-WskhaSGFgHYWDcbwN70/dfYBj47jz9qbsMId/iRN3ewGhXQFZCSftd1LZCfmhktB" crossorigin="anonymous">
      

            
      <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.1/js/bootstrap.min.js" integrity="sha384-smHYKdLADwkXOn1EmN1qk/HfnUcbVRZyYmZ4qpPea6sjB/pTJ0euyQp0Mk8ck+5T" crossorigin="anonymous"></script>
      <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
      <script type="text/javascript" src="/www/javascripts/jsonrpc2.js"></script>
      
<script type="text/javascript" src="../www/javascripts/tasteamazon/Product.class.js"></script>

  </head>
<body>
<nav class="navbar navbar-expand-lg navbar-light bg-light border-bottom"><!--fixed-top-->
<div class="container">
  <a class="navbar-brand" href="#"><img src="img/logo.png" width:"50" height="50" alt="TasteAmazon Logo"></a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav ml-auto">
      <li class="nav-item active">
        <a class="nav-link" href="#">Forside</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Produkter</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Galleri</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Opskrifter</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Medarbejdere</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Om os</a>
      </li>
    </ul>
  </div>
</div>
</nav>
  
<h1>Dette er min test side til tasteamazon.com</h1>
<button class="btn btn-primary" onclick="Product.helloWorld();">Dette er min test side til tasteamazon.com - :P</button>

</body>
</html>
<?php }
}

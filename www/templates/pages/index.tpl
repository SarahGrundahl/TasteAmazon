{extends 'master.tpl'}
{block name='javascript' append}
<script type="text/javascript" src="../www/javascripts/init.js"></script>
<script type="text/javascript" src="../www/javascripts/tasteamazon/Menu.class.js"></script>
<script type="text/javascript" src="../www/javascripts/tasteamazon/Login.class.js"></script>
<script type="text/javascript" src="../www/javascripts/tasteamazon/Product.class.js"></script>
<script type="text/javascript" src="../www/javascripts/tasteamazon/Gallery.class.js"></script>
{/block}
{block name='content'}
<div class="page-container">
  {include file="pages/widgets/nav_bar.tpl"}
  <div class="tabs" style="margin-top: 100px;">
    <div class="tab-content">
        <div id="frontpage" class="tab-pane">
            {include file="pages/widgets/Frontpage.tpl"}
        </div>
        <div id="products" class="tab-pane">
        </div>
        <div id="gallery" class="tab-pane">
        </div>
        <div id="login" class="tab-pane">
        </div>
    </div>
  </div>
{include file="footer.tpl"}
</div>
{/block}

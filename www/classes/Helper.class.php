<?php
namespace www\classes;

class Helper
{
	public static $smarty = null;

	/**
	 * Various helper methods for the support system
	 */
	public static function getSmarty()
	{
		if (self::$smarty !== null) {
			return self::$smarty;
		}

		$smarty = new \Smarty();
		$smarty->setTemplateDir(['default' => '/Users/Sarah/Desktop/Ordbogen - TasteAmazon Projekt/www/templates/']);
		self::$smarty = $smarty;

		return $smarty;
	}
}
?>

<?php
/**
 * Plugin howto
 * (c) 2012 christophe le drean
 * Licence GNU/GPL
 */

if (!defined('_ECRIRE_INC_VERSION')) return;


$GLOBALS['z_blocs'] = array('content','head','header','head_js','footer');
// en dev, pas de cache
// define('_NO_CACHE', 1);

// prefix cookie si spip est dans un sous-répertoire
// $cookie_prefix = "howto";

// intertitres
$GLOBALS['debut_intertitre'] = "\n<h2 class='spip'>";
$GLOBALS['fin_intertitre'] = "</h2>\n";

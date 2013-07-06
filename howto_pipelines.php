<?php
/**
 * Plugin howto
 * (c) 2012 christophe le drean
 * Licence GNU/GPL
 */

if (!defined('_ECRIRE_INC_VERSION')) return;

// =====================
// = insertion des css =
// =====================

function howto_insert_head_css($flux){
   $css = array('css/howto.css');
   foreach ($css as $f) {
      $flux .= '<link rel="stylesheet" href="'.find_in_path($f).'" />'."\n";
   }
   return $flux;
}

// ================
// = insertion js =
// ================
function howto_insert_head($flux){
   $js = find_in_path('javascript/scripts.js');
   if ($js) {$flux .= "\n".'<script src="'.$js.'" type="text/javascript"></script>'."\n";}
   return $flux;
}

?>
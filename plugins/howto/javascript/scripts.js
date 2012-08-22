$(document).ready(function() {
   // ====================================
   // = bouton d'activation de la grille =
   // ====================================
      $("#spip-admin").append("<a class='spip-admin-boutons grid_tg' href='#'>Grille</a>");
      $(".grid_tg").click(function(){
      	$("html").toggleClass("grid");
         return false;
      });

   // ====================================
   // = navigation principal : accordeon =
   // ====================================

   $("#nav .nav").accordion({
      autoHeight: false,
      navigation: true,
      icons: false,
      event: "mouseover"
   });


});

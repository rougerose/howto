$(document).ready(function() {
  var trigger = "#js-offcanvas-trigger",
  navWrap = "#js-offcanvas-wrapNav",
  nav = "#SiteNav",
  contentWrap = "#js-offcanvas-wrapContent",
  els = [navWrap,nav,contentWrap].join(','),
  isAnimated = false;

  $(trigger).on("click", function(event){
    event.preventDefault();
    if (!isAnimated) {
      //isAnimated = true;
      $(els).toggleClass("is-opened");
      // $(navWrap).one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend', function(){
      //   isAnimated = false;
      // });
    }
  });
});

$(document).ready(function() {
  $('.js-toc').each(function() {
    var $toc = $(this),
        $trigger = $toc.find('.c-toc__trigger'),
        $drop = $toc.find('.c-toc__dropdown');

    $trigger.click(function(event) {
      event.preventDefault();
      $(this).toggleClass('is-active');
      $drop.toggleClass('is-active');
    });
  });
});

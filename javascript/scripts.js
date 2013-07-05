$(document).ready(function() {
    $("#toc").each(function(){
        var $toc = $(this),
        $trigger = $toc.find("#toc-trigger");
        $panel = $toc.find(".dropdown--panel");

        $trigger.click(function(){
            $(this).toggleClass("active");
            $panel.toggleClass("active");
        })
    });
});

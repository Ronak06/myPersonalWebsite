$(document).ready(function() {
    $('#intro').click(function() {
        $("html, body").animate({
            scrollTop: $('#introduction').position().top,
        }, 1000);
    });
});
    

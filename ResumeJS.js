 
$(document).ready(function() {
    $("#scroll").click(function() {

        $('html, body').animate({
        scrollTop: $("#second-page").offset().top
    }, 1000);
        return false;
    });

    $("#button").click(function() {
        
        $('html, body').animate({
            scrollTop: $("#intro").offset().top
        }, 1000);                    
        return false;
    });
    
    var $toggleButton = $('.toggle-button'),
        $menuWrap = $('.actual-menu-wrap');
    
    $toggleButton.on('click', function() {
    $(this).toggleClass('button-open');
    $menuWrap.toggleClass('menu-show');    
    });
    
});




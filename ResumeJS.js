 
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
    
    $(function() {
    var $section = $("#fourth-page");
    
    function loadDaBars() {
        $("#java").animate({
                width: "78%"
            }, 2400);
        $("#OOP").animate({
                width: "85%"
            }, 2400);
        $("#JS").animate({
                width: "64%"
            }, 2400);
        $("#frontend").animate({
                width: "72%"
            }, 2400);
    
    }
        
    $(document).bind('scroll', function(ev) {
        var scrollOffset = $(document).scrollTop();
        var containerOffset = $section.offset().top - window.innerHeight;
        if (scrollOffset > containerOffset) {
            loadDaBars();
            // unbind event not to load scrolsl again
            $(document).unbind('scroll');
        }
    });
    
});

});

function addEmail() {
    document.getElementById('contact-form').action = "https://formspree.io/james.angeles@stonybrook.edu";
}


addEmail();






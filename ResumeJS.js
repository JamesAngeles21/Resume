 
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

function addEmail() {
    document.getElementById('contact-form').action = "https://formspree.io/james.angeles@stonybrook.edu";
}



function move(idName, idPercent, percentage, timing) {
    var elem = document.getElementById(idName);
    var percent = document.getElementById(idPercent);
    var number = percentage;
    var width = 1;
    var id = setInterval(frame, timing);
    function frame() {
        if(width >= number) {
           clearInterval(id);
        }
        else {
            width++;
            elem.style.width = width + '%';
            percent.innerHTML = width + '%';
        }
    }
}
addEmail();
move("java", "javaPercent", 78, 20);
move("OOP", "OOPPercent", 85, 17);
move("JS", "jsPercent", 64, 24);
move("frontend", "frontendPercent", 72, 17);


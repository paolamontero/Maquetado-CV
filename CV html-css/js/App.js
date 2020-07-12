// A $( document ).ready() block.
/*$(document).ready(function() {    
    $('.top a').click(function(e){
            e.preventDefault();
            var offset = $($(this).attr('href')).offset().top;
            $('html, body').animate({scrollTop:offset}, 600);
            return false;
        });
    
    });
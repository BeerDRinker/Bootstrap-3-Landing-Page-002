/* Coded by Paliy Rostyslav. e-mail: paliy1984@gmail.com. skype: ros.coprandos  !!!SYLB!!! */

/************ -->> TESTIMONIALS <<-- ************/

/*** BX-slider ***/

$(document).ready(function () {
    
    new WOW().init();
    
    $('.bxslider').bxSlider({
        pagerCustom: '#bx-pager'
    });
    
    $(window).scroll(function() {
    if ($(this).scrollTop() > 1){  
        $('#myNavbar').addClass("sticky");
    }
    else{
        $('#myNavbar').removeClass("sticky");
    }
});
    
});





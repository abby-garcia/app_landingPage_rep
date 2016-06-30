$(document).scroll(function(){
        // grabs the pixel value of how far the image
        // is from the top of the page
        var phoneTop = $('.features_pic').offset().top;
        // we determined we want the animation to happen
        // 240pixels before we get to the image
        phoneTop -= 240;
        // scrollTop tells us where we are on the page
        // if we've gotten down to the phone, add the
        // animation classes
        if($(document).scrollTop() >= phoneTop){
            $('.features_pic').addClass('animated bounceInLeft');        
        }
    });
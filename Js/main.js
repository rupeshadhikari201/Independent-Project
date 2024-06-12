//!Defining the layout for different viewport
const responsive = {
    320: {
        iteme: 1
    },
    560: {
        iteme: 2
    },
    960: {
        iteme: 3
    }
}


//* Syntax of jquery
//* $('selector').action()

$(document).ready(function () {


    //!$nav and $toggleCollapse are the variables
    $nav = $('.nav');
    $toggleCollapse = $('.toggle-collapse');

    //!click event on toggle menu
    $toggleCollapse.click(function () {
        $nav.toggleClass('collapse');
    })+

    $toggleCollapse.click(function () {
        $nav.toggleClass('collapse');
    })


    // $('.nav').click(function(){
    //     $('toggle-collapse').toggleClass(1000);
    // })


    //owl carousel
    $('.owl-carousel').owlCarousel({
        loop: true,
        autoplay: true,
        autoplayTimeout: 3000,
        dots: false,
        nav: true,

        //! $ is jquery object, calling jquery object
        //! calling owl-navigation and owl-nav-prev 
        navText: [$('.owl-navigation .owl-nav-pre'), $('.owl-navigation .owl-nav-next')],

        //!Making the carousel responsive
        responsive: responsive,
    });

});



const name = 'Martin';
console.log(`Hello ${name}`);


$(function() {

    $(window).scroll(function() {
        var scrollPos = $(window).scrollTop();

        if (scrollPos >= 500) {
            $('#btnTop').fadeIn();
        } else {
            $('#btnTop').fadeOut();
        }
    });

    $('#btnTop').on('click', function(){
        subirScroll();
    });

    function subirScroll() {
        $(window).scrollTop(0);
    }
});
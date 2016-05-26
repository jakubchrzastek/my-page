$(document).ready(function() {

$("#more").click(function() {
    $('html, body').animate({
        scrollTop: $("#aboutme").offset().top
    }, 800);
});

});
$(document).ready(function() {

$('#more').click(function() {
    $('html, body').animate({
        scrollTop: $('#aboutme').offset().top
    }, 800);
    return false;
});

$('.menu__button').click(function() {
	$('.menu__content').toggleClass('menu__content--open');
	$('.menu__button').toggleClass('menu__button--open');
	$('body').toggleClass('body--push');
	$('section').toggleClass('grey');
    return false;
});

$('a').click(function(){
    $('html, body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 800);
    $('.menu__content').removeClass('menu__content--open');
    $('.menu__button').removeClass('menu__button--open');
    $('body').removeClass('body--push');
    $('section').removeClass('grey');
    return false;
});

});
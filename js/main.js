var $btn = $('.btn');
var $panel = $('.panel');
var $btncollapse = $('.btn-collapse-expand');
var $btncowboy = $('.btn-cowboy');
var $panel = $('.panel')
var $cowboy1 = $('.cowboy1')
var $cowboy = $('.cowboy')
var $onmouse = $('.onmouse')
var $btnopac = $('.btn-opc');
var $oc = $('.oc')
var $btnopac2 = $('.btn-opc2');
var $oc2 = $('.oc2')
var $btnopac3 = $('.btn-opc3');
var $oc3 = $('.oc3')
var $btnopac4 = $('.btn-opc4');
var $oc4 = $('.oc4')
var $btnopac5 = $('.btn-opc5');
var $oc5 = $('.oc5')
var $btnopac6 = $('.btn-opc6');
var $oc6 = $('.oc6')
var $imghome = $('.imghome')
var $billboard = $('.billboard');
var $rb = $('.RB');


$btn.on('click', function () {
    $panel.animate({height: 'toggle'});
})

$billboard.on('mousemove', function (e) {
    $rb.css('left', e.pageX - $rb.outerWidth() / 2);
});

$btncowboy.on('click', function () {
    $cowboy.toggleClass('cowboy1');
})

$btnopac.on('click', function () {
    $oc.animate({height: 'toggle'});
})

$btnopac2.on('click', function () {
    $oc2.animate({height: 'toggle'});
})
$btnopac3.on('click', function () {
    $oc3.animate({height: 'toggle'});
})
$btnopac4.on('click', function () {
    $oc4.animate({height: 'toggle'});
})

$btnopac5.on('click', function () {
    $oc5.animate({height: 'toggle'});
})

$btnopac6.on('click', function () {
    $oc6.animate({height: 'toggle'});
})


$('.nav').localScroll();

$('.home').localScroll();

$('.footer').localScroll();
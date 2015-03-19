var $btn = $('.btn');
var $panel = $('.panel');
var $btncollapse = $('.btn-collapse-expand');
var $btncowboy = $('.btn-cowboy');
var $panel = $('.panel')
var $cowboy1 = $('.cowboy1')
var $cowboy = $('.cowboy')
var $onmouse = $('.onmouse')

var $billboard = $('.billboard');
var $rb = $('.RB');


$btn.on('click', function () {
    $panel.animate({height: 'toggle'});
})

$billboard.on('mousemove', function (e) {
    $rb.css('left', e.pageX);
});

$btncowboy.on('click', function () {
    $cowboy.toggleClass('cowboy1');
})



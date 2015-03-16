var $btn = $('.btn');
var $panel = $('.panel');
var $btncollapse = $('.btn-collapse-expand');
var $panel = $('.panel')
var $onmouse = $('.onmouse')

var $billboard = $('.billboard');
var $rb = $('.RB');


$btn.on('click', function () {
    $panel.animate({height: 'toggle'});
})

$billboard.on('mousemove', function (e) {
    $rb.css('left', e.pageX);
});




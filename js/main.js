var $btn = $('.btn');
var $panel = $('.panel');
var $btncollapse = $('.btn-collapse-expand');
var $panel = $('.panel')
var $morehome = $('.morehome')
var $home = $('.home')
var $moreracket =$('.moreracket')
var $racket =$('.rackets')
var $tournaments =$('.tournaments')
var $moretournaments =$('.moretournaments')
var $morepingpong =$('.morepingpong')
var $pingpong =$('.pingpong')
var $moreshop =$('.moreshop')
var $shop =$('.shop')
var $moreapparel =$('.moreapparel')
var $apparel =$('.apparel')

var $billboard = $('.billboard');
var $rb = $('.RB');


$btn.on('click', function () {
    $panel.animate({height: 'toggle'});
})

$billboard.on('mousemove', function (e) {
    $rb.css('left', e.pageX);
});

$home.on('click', function () {
    $morehome.animate({height: 'toggle'});
})

$racket.on('click', function () {
    $moreracket.animate({height: 'toggle'});
})

$tournaments.on('click', function () {
    $moretournaments.animate({height: 'toggle'});
})

$pingpong.on('click', function () {
    $morepingpong.animate({height: 'toggle'});
})

$shop.on('click', function () {
    $moreshop.animate({height: 'toggle'});
})

$apparel.on('click', function () {
    $moreapparel.animate({height: 'toggle'});
})